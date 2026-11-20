import { SITE } from "./site";

/** Must match public/<KEY>.txt and scripts/indexnow.mjs. */
export const INDEXNOW_KEY = "41293ec8bdb8d935bf70c6aaa48fa5c5";

/**
 * Tell IndexNow search engines (Bing — used by ChatGPT search — Yandex, Seznam, Naver…) that URLs changed.
 * Best effort: short timeout, never throws, only on production.
 */
export async function pingIndexNow(urls: string[]): Promise<void> {
  if (process.env.VERCEL_ENV !== "production" || !urls.length) return;
  try {
    const r = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: new URL(SITE.url).host, key: INDEXNOW_KEY, keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`, urlList: urls }),
      signal: AbortSignal.timeout(3000),
    });
    console.log(`[indexnow] ${urls.length} URL(s) → HTTP ${r.status}`);
  } catch (e) {
    console.error("[indexnow] ping failed", (e as Error).message);
  }
}
