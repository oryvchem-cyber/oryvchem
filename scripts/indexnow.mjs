// Runs after `next build` on Vercel production builds: tells IndexNow search engines
// (Bing — which ChatGPT search relies on — Yandex, Seznam, Naver…) that the site's pages changed,
// so they recrawl sooner. Never fails the build.
const KEY = "41293ec8bdb8d935bf70c6aaa48fa5c5"; // must match public/<KEY>.txt and src/lib/indexnow.ts
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.oryvchem.com").replace(/\/$/, "");

async function main() {
  if (process.env.VERCEL_ENV !== "production") return console.log("[indexnow] skipped (not a production build)");
  const sm = await fetch(`${SITE}/sitemap.xml`, { cache: "no-store" }).then((r) => r.text());
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(SITE));
  if (!urls.length) return console.log("[indexnow] no URLs found in sitemap");
  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
  });
  console.log(`[indexnow] submitted ${urls.length} URLs → HTTP ${r.status}`);
}

main().catch((e) => console.error("[indexnow] failed (build continues):", e.message));
