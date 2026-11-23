import type { MetadataRoute } from "next";
import { locales, localeMeta, defaultLocale, isLocale } from "@/i18n/config";
import { getCategorySlugs } from "@/lib/categories";
import { materials } from "@/lib/materials";
import { SITE } from "@/lib/site";
import { url } from "@/lib/seo";
import { allPublishedSlugs } from "@/lib/posts";
import { allPublishedPages } from "@/lib/pages";

// Rendered per request so a newly published article is listed at once; the DB reads are cached (CONTENT_TAG).
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cats = await getCategorySlugs();
  const paths = [
    "",
    "/insights",
    ...cats.map((s) => `/products/${s}`),
    ...materials.filter((m) => cats.includes(m.category)).map((m) => `/products/${m.category}/${m.slug}`),
  ];
  const lastModified = new Date(SITE.updated);
  const pages: MetadataRoute.Sitemap = paths.flatMap((path) =>
    locales.map((locale) => ({
      url: url(locale, path),
      lastModified,
      changeFrequency: path === "" || path === "/insights" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/insights" ? 0.7 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [localeMeta[l].hreflang, url(l, path)])),
          "x-default": url(defaultLocale, path),
        },
      },
    })),
  );
  const posts = (await allPublishedSlugs())
    .filter((p) => isLocale(p.locale))
    .map((p) => ({
      url: url(p.locale as (typeof locales)[number], `/insights/${p.slug}`),
      lastModified: new Date(p.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  const cms = await allPublishedPages();
  const customPages = cms
    .filter((p) => isLocale(p.locale))
    .map((p) => {
      const same = cms.filter((o) => o.slug === p.slug && isLocale(o.locale));
      const languages =
        same.length > 1
          ? {
              ...Object.fromEntries(same.map((o) => [localeMeta[o.locale as (typeof locales)[number]].hreflang, url(o.locale as (typeof locales)[number], `/${p.slug}`)])),
              "x-default": url((same.find((o) => o.locale === defaultLocale) ?? p).locale as (typeof locales)[number], `/${p.slug}`),
            }
          : undefined;
      return {
        url: url(p.locale as (typeof locales)[number], `/${p.slug}`),
        lastModified: new Date(p.updated_at),
        changeFrequency: "monthly" as const,
        priority: 0.5,
        ...(languages ? { alternates: { languages } } : {}),
      };
    });
  return [...pages, ...posts, ...customPages];
}
