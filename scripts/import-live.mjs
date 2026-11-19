// One-time migration, run before `next build` on Vercel.
// Copies the admin-managed content (catalogue pages, categories, home lists, images) from the
// old live site into this project's database. Runs only when IMPORT_SECRET and DATABASE_URL are
// set on a production build. It never fails the build. Remove IMPORT_SECRET once the move is done.
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import postgres from "postgres";

const SOURCE = (process.env.IMPORT_SOURCE || "https://www.oryvchem.com").replace(/\/$/, "");
const LOCALES = ["en", "ar", "fr"];

const log = (...a) => console.log("[import-live]", ...a);
const sha = (v) => createHash("sha256").update(JSON.stringify(v)).digest("hex").slice(0, 16);

const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\u00a0" };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENT[e.toLowerCase()] ?? m;
  });
const text = (html) => decode((html ?? "").replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, "")).trim();
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? decode(m[1]) : null;
};
/** Inner HTML of the first element matching an opening-tag regex, balancing same-name tags. */
function inner(html, openRe, tagName) {
  const m = openRe.exec(html);
  if (!m) return null;
  const i = m.index + m[0].length;
  let depth = 1;
  const re = new RegExp(`<(/?)${tagName}\\b[^>]*>`, "g");
  re.lastIndex = i;
  let t;
  while ((t = re.exec(html))) {
    if (t[0].endsWith("/>")) continue;
    depth += t[1] ? -1 : 1;
    if (depth === 0) return html.slice(i, t.index);
  }
  return html.slice(i);
}
const all = (html, re) => [...html.matchAll(re)];

async function get(path) {
  const r = await fetch(SOURCE + path, { headers: { "user-agent": "Mozilla/5.0 (site migration)" }, cache: "no-store" });
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r;
}
const getText = async (p) => (await get(p)).text();

async function extract() {
  const full = await getText("/llms-full.txt");
  const sm = await getText("/sitemap.xml");
  const paths = all(sm, /<loc>([^<]+)<\/loc>/g).map((m) => new URL(m[1]).pathname);
  const base = new URL(all(sm, /<loc>([^<]+)<\/loc>/g)[0][1]).origin;
  const lines = full.split("\n");
  const out = { pages: [], categories: {}, lists: [], media: new Map() };
  const noteImgs = (html) => {
    for (const [tag] of all(html, /<img\b[^>]*>/g)) {
      const src = attr(tag, "src");
      if (!src || !/^\/media\/\d+$/.test(src)) continue;
      const id = Number(src.split("/").pop());
      if (!out.media.get(id)) out.media.set(id, attr(tag, "alt") || "");
    }
  };
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  for (const l of LOCALES) {
    const pageSlugs = paths
      .filter((p) => p.startsWith(`/${l}/`) && !p.includes("/products/") && p !== `/${l}/insights`)
      .map((p) => decodeURIComponent(p.split("/")[2]));
    const start = lines.findIndex((x) => x.startsWith("# ") && x.trim().endsWith(`${base}/${l}`));
    let end = lines.findIndex((x, i) => i > start && new RegExp(`^# .* — ${esc(base)}/(en|ar|fr)$`).test(x.trim()));
    if (end < 0) end = lines.length;
    const blk = lines.slice(start, end);
    const hdr = new RegExp(`^## (.*) \\(${esc(base)}/${l}/([^)\\s]+)\\)$`);
    const idx = [];
    blk.forEach((x, i) => {
      const m = x.match(hdr);
      if (m && pageSlugs.includes(decodeURIComponent(m[2]))) idx.push([i, m[1], decodeURIComponent(m[2])]);
    });

    const home = await getText(`/${l}`);
    noteImgs(home);
    const hrefsIn = (h) => new Set(all(h ?? "", /<a\b[^>]*>/g).map(([t]) => attr(t, "href")).filter(Boolean));
    const navHrefs = hrefsIn(inner(home, /<header\b[^>]*>/, "header"));
    const footHrefs = hrefsIn(inner(home, /<footer\b[^>]*>/, "footer"));

    for (let k = 0; k < idx.length; k++) {
      const [i, title, slug] = idx[k];
      let j = k + 1 < idx.length ? idx[k + 1][0] : blk.length;
      for (let q = i + 1; q < j; q++) if (/^## /.test(blk[q]) && !blk[q].endsWith("\r")) { j = q; break; }
      const body = blk.slice(i + 1, j);
      while (body.length && body[body.length - 1] === "") body.pop();
      const pd = await getText(`/${l}/${encodeURIComponent(slug)}`);
      noteImgs(pd);
      const t = text(inner(pd, /<title\b[^>]*>/, "title") ?? "");
      const descTag = (pd.match(/<meta\b[^>]*name="description"[^>]*>/) || [""])[0];
      const prose = inner(pd, /<div\b[^>]*class="[^"]*\bprose\b[^"]*"[^>]*>/, "div") ?? "";
      const firstImg = prose.trimStart().match(/^<img\b[^>]*>/);
      const cover = firstImg ? attr(firstImg[0], "src") : null;
      const href = `/${l}/${slug}`;
      out.pages.push({
        locale: l, slug, title, body: body.join("\n"),
        seo_title: t === `${title} — Oryvchem` ? "" : t,
        seo_description: attr(descTag, "content") ?? "",
        cover_media: cover && /^\/media\/\d+$/.test(cover) ? Number(cover.split("/").pop()) : null,
        show_in_nav: navHrefs.has(href) || navHrefs.has(encodeURI(href)),
        show_in_footer: footHrefs.has(href) || footHrefs.has(encodeURI(href)),
        position: k * 10,
      });
    }

    // Categories: order and card text from the home page, the rest from each product page.
    const catSec = inner(home, /<section\b[^>]*id="categories"[^>]*>/, "section") ?? "";
    const cards = all(catSec, new RegExp(`<a\\b([^>]*href="/${l}/products/([^"]+)"[^>]*)>([\\s\\S]*?)</a>`, "g")).filter((m) => /class="cat-card/.test(m[1]));
    for (let i = 0; i < cards.length; i++) {
      const [, , slug, html] = cards[i];
      const c = (out.categories[slug] ??= { slug, code: text((html.match(/<span class="cat-tab">([\s\S]*?)<\/span>/) || [])[1]), position: i * 10, hidden: false, data: {} });
      c.data[l] = { name: text((html.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/) || [])[1]), short: text((html.match(/<p\b[^>]*>([\s\S]*?)<\/p>/) || [])[1]) };
    }
    for (const [, , slug] of cards) {
      const pd = await getText(`/${l}/products/${slug}`);
      noteImgs(pd);
      const ul = (cls) => {
        const u = inner(pd, new RegExp(`<ul\\b[^>]*class="${cls}"[^>]*>`), "ul") ?? "";
        return all(u, /<li\b[^>]*>([\s\S]*?)<\/li>/g).map((m) => text(m[1]));
      };
      Object.assign(out.categories[slug].data[l], {
        intro: text((pd.match(/<p class="lede">([\s\S]*?)<\/p>/) || [])[1]),
        examples: ul("chips"),
        uses: ul("uses"),
        faq: all(inner(pd, /<div class="faq">/, "div") ?? "", /<details\b[^>]*>([\s\S]*?)<\/details>/g).map((m) => ({
          q: text((m[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/) || [])[1]),
          a: text((m[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/) || [])[1]),
        })),
      });
    }

    // Editable home lists
    const sec = (id) => inner(home, new RegExp(`<section\\b[^>]*id="${id}"[^>]*>`), "section") ?? "";
    const pair = (html, a, b) => ({ [a[0]]: text((html.match(a[1]) || [])[1]), [b[0]]: text((html.match(b[1]) || [])[1]) });
    const H3 = /<h3\b[^>]*>([\s\S]*?)<\/h3>/, P = /<p\b[^>]*>([\s\S]*?)<\/p>/;
    out.lists.push({ locale: l, key: "capability.items", items: all(sec("capability"), /<div class="cat-card">([\s\S]*?)<\/div>/g).map((m) => pair(m[1], ["t", H3], ["d", P])) });
    out.lists.push({ locale: l, key: "process.steps", items: all(sec("process"), /<li class="step">([\s\S]*?)<\/li>/g).map((m) => pair(m[1], ["t", H3], ["d", P])) });
    out.lists.push({ locale: l, key: "markets.regions", items: all(sec("markets"), /<div class="market">([\s\S]*?)<\/div>/g).map((m) => pair(m[1], ["name", H3], ["countries", P])) });
    const compUl = inner(sec("compliance"), /<ul class="compliance-list">/, "ul") ?? "";
    out.lists.push({ locale: l, key: "compliance.items", items: all(compUl, /<li\b[^>]*>([\s\S]*?)<\/li>/g).map((m) => pair(m[1], ["t", /<strong\b[^>]*>([\s\S]*?)<\/strong>/], ["d", /<span>([\s\S]*?)<\/span>/])) });
  }
  out.categories = Object.values(out.categories);
  out.media = [...out.media].map(([id, alt]) => ({ id, alt }));
  return out;
}

const sniff = (b) =>
  b[0] === 0xff && b[1] === 0xd8 ? "image/jpeg"
  : b.subarray(4, 8).toString() === "ftyp" ? "image/avif"
  : b.subarray(1, 4).toString() === "PNG" ? "image/png"
  : b.subarray(8, 12).toString() === "WEBP" ? "image/webp"
  : b.subarray(0, 3).toString() === "GIF" ? "image/gif" : null;

async function main() {
  if (!process.env.IMPORT_SECRET || !process.env.DATABASE_URL) return log("skipped (IMPORT_SECRET or DATABASE_URL not set)");
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return log("skipped (not a production build)");

  const p = await extract();
  log(`extracted pages=${p.pages.length} categories=${p.categories.length} lists=${p.lists.length} media=${p.media.length}`);
  log(`hash pages=${sha(p.pages)} categories=${sha(p.categories)} lists=${sha(p.lists)}`);

  const sql = postgres(process.env.DATABASE_URL, { max: 3, prepare: false, onnotice: () => {} });
  try {
    const schema = readFileSync(new URL("../src/lib/db.ts", import.meta.url), "utf8").match(/const SCHEMA = `([\s\S]*?)`;/)[1];
    await sql.unsafe(schema);

    let ok = 0;
    const errs = [];
    for (const m of p.media) {
      try {
        const bytes = Buffer.from(await (await get(`/media/${m.id}`)).arrayBuffer());
        const mime = sniff(bytes);
        if (!mime) throw new Error("not an image");
        const ext = mime.split("/")[1].replace("jpeg", "jpg");
        await sql`insert into media (id, filename, mime, size, alt, data)
          values (${m.id}, ${`image-${m.id}.${ext}`}, ${mime}, ${bytes.length}, ${m.alt}, ${bytes})
          on conflict (id) do update set mime = excluded.mime, size = excluded.size, alt = excluded.alt, data = excluded.data`;
        ok++;
      } catch (e) {
        errs.push(`${m.id}: ${e.message}`);
      }
    }
    await sql`select setval(pg_get_serial_sequence('media', 'id'), (select coalesce(max(id), 1) from media))`;
    log(`media saved ${ok}/${p.media.length}`, errs.length ? `errors: ${errs.join("; ")}` : "");

    for (const pg of p.pages) {
      await sql`insert into pages (locale, slug, title, body, seo_title, seo_description, cover_media, published, show_in_nav, show_in_footer, position, updated_at)
        values (${pg.locale}, ${pg.slug}, ${pg.title}, ${pg.body}, ${pg.seo_title}, ${pg.seo_description}, ${pg.cover_media}, true, ${pg.show_in_nav}, ${pg.show_in_footer}, ${pg.position}, now())
        on conflict (locale, slug) do update set title = excluded.title, body = excluded.body, seo_title = excluded.seo_title,
          seo_description = excluded.seo_description, cover_media = excluded.cover_media, published = true,
          show_in_nav = excluded.show_in_nav, show_in_footer = excluded.show_in_footer, position = excluded.position, updated_at = now()`;
    }
    for (const c of p.categories) {
      await sql`insert into categories (slug, code, position, hidden, data, updated_at)
        values (${c.slug}, ${c.code}, ${c.position}, false, ${sql.json(c.data)}, now())
        on conflict (slug) do update set code = excluded.code, position = excluded.position, hidden = excluded.hidden, data = excluded.data, updated_at = now()`;
    }
    for (const li of p.lists) {
      if (!li.items.length) continue;
      await sql`insert into content_lists (locale, key, items, updated_at) values (${li.locale}, ${li.key}, ${sql.json(li.items)}, now())
        on conflict (locale, key) do update set items = excluded.items, updated_at = now()`;
    }
    // The public contact address shown on the site comes from the CONTACT_TO_EMAIL env var.
    const siteEmail = process.env.CONTACT_TO_EMAIL;
    if (siteEmail) {
      await sql`insert into settings (key, value, updated_at) values ('site', ${sql.json({ email: siteEmail })}, now())
        on conflict (key) do update set value = settings.value || excluded.value, updated_at = now()`;
    }
    log("done");
  } finally {
    await sql.end({ timeout: 5 });
  }
}

main().catch((e) => {
  console.error("[import-live] FAILED (build continues):", e);
});
