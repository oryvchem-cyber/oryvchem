import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { db } from "@/lib/db";
import { CONTENT_TAG } from "@/lib/content";
import { sniffImage, EXT } from "@/lib/media";

/**
 * One-time migration: copies content from the old live site into this site's database.
 * Disabled unless IMPORT_SECRET is set; remove the env var (or this file) once the move is done.
 */
export const maxDuration = 60;

const ALLOWED_ORIGINS = new Set(["https://www.oryvchem.com", "https://oryvchem.com"]);

function cors(req: Request): Record<string, string> {
  const o = req.headers.get("origin") ?? "";
  return ALLOWED_ORIGINS.has(o)
    ? { "Access-Control-Allow-Origin": o, "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "content-type, x-import-secret", Vary: "Origin" }
    : {};
}

function authorised(req: Request): boolean {
  const want = process.env.IMPORT_SECRET;
  const got = req.headers.get("x-import-secret") ?? "";
  if (!want || want.length < 16) return false;
  const a = Buffer.from(want);
  const b = Buffer.from(got);
  return a.length === b.length && timingSafeEqual(a, b);
}

type Page = {
  locale: string; slug: string; title: string; body: string; seo_title?: string; seo_description?: string;
  cover_media?: number | null; show_in_nav?: boolean; show_in_footer?: boolean; position?: number;
};
type Payload = {
  source?: string;
  media?: { id: number; alt?: string }[];
  pages?: Page[];
  categories?: { slug: string; code?: string; position: number; hidden?: boolean; data: unknown }[];
  lists?: { locale: string; key: string; items: unknown }[];
  overrides?: { locale: string; path: string; value: string }[];
  settings?: { key: string; value: unknown }[];
};

export async function OPTIONS(req: Request) {
  return new Response(null, { status: 204, headers: cors(req) });
}

export async function POST(req: Request) {
  const headers = cors(req);
  if (!authorised(req)) return Response.json({ error: "Not allowed" }, { status: 401, headers });
  const sql = await db();
  if (!sql) return Response.json({ error: "No database configured" }, { status: 500, headers });

  const p = (await req.json()) as Payload;
  const done: Record<string, number> = {};
  const errors: string[] = [];

  if (p.media?.length) {
    const source = (p.source ?? "https://www.oryvchem.com").replace(/\/$/, "");
    if (!ALLOWED_ORIGINS.has(source)) return Response.json({ error: "Bad source" }, { status: 400, headers });
    let n = 0;
    await Promise.all(
      p.media.map(async (m) => {
        try {
          const r = await fetch(`${source}/media/${Number(m.id)}`, { cache: "no-store" });
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          const bytes = new Uint8Array(await r.arrayBuffer());
          const mime = sniffImage(bytes);
          if (!mime) throw new Error("not an image");
          await sql`insert into media (id, filename, mime, size, alt, data)
            values (${Number(m.id)}, ${`image-${m.id}.${EXT[mime]}`}, ${mime}, ${bytes.length}, ${m.alt ?? ""}, ${Buffer.from(bytes)})
            on conflict (id) do update set mime = excluded.mime, size = excluded.size, alt = excluded.alt, data = excluded.data`;
          n++;
        } catch (e) {
          errors.push(`media ${m.id}: ${(e as Error).message}`);
        }
      }),
    );
    await sql`select setval(pg_get_serial_sequence('media', 'id'), greatest((select coalesce(max(id), 1) from media), 1))`;
    done.media = n;
  }

  for (const pg of p.pages ?? []) {
    await sql`insert into pages (locale, slug, title, body, seo_title, seo_description, cover_media, published, show_in_nav, show_in_footer, position, updated_at)
      values (${pg.locale}, ${pg.slug}, ${pg.title}, ${pg.body}, ${pg.seo_title ?? ""}, ${pg.seo_description ?? ""}, ${pg.cover_media ?? null},
        true, ${!!pg.show_in_nav}, ${!!pg.show_in_footer}, ${pg.position ?? 0}, now())
      on conflict (locale, slug) do update set title = excluded.title, body = excluded.body, seo_title = excluded.seo_title,
        seo_description = excluded.seo_description, cover_media = excluded.cover_media, published = true,
        show_in_nav = excluded.show_in_nav, show_in_footer = excluded.show_in_footer, position = excluded.position, updated_at = now()`;
  }
  if (p.pages) done.pages = p.pages.length;

  for (const c of p.categories ?? []) {
    await sql`insert into categories (slug, code, position, hidden, data, updated_at)
      values (${c.slug}, ${c.code ?? ""}, ${c.position}, ${!!c.hidden}, ${sql.json(c.data as never)}, now())
      on conflict (slug) do update set code = excluded.code, position = excluded.position, hidden = excluded.hidden, data = excluded.data, updated_at = now()`;
  }
  if (p.categories) done.categories = p.categories.length;

  for (const l of p.lists ?? []) {
    await sql`insert into content_lists (locale, key, items, updated_at) values (${l.locale}, ${l.key}, ${sql.json(l.items as never)}, now())
      on conflict (locale, key) do update set items = excluded.items, updated_at = now()`;
  }
  if (p.lists) done.lists = p.lists.length;

  for (const o of p.overrides ?? []) {
    await sql`insert into content_overrides (locale, path, value, updated_at) values (${o.locale}, ${o.path}, ${o.value}, now())
      on conflict (locale, path) do update set value = excluded.value, updated_at = now()`;
  }
  if (p.overrides) done.overrides = p.overrides.length;

  for (const s of p.settings ?? []) {
    await sql`insert into settings (key, value, updated_at) values (${s.key}, ${sql.json(s.value as never)}, now())
      on conflict (key) do update set value = excluded.value, updated_at = now()`;
  }
  if (p.settings) done.settings = p.settings.length;

  revalidateTag(CONTENT_TAG, "max");
  return Response.json({ done, errors }, { headers });
}
