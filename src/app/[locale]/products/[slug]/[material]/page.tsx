import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/i18n/config";
import { getDict } from "@/lib/content";
import { getCategory } from "@/lib/categories";
import { SITE } from "@/lib/site";
import { getSite } from "@/lib/settings";
import { pageMetadata, snippet } from "@/lib/seo";
import { JsonLd } from "@/lib/jsonld";
import { materialPageSchema } from "@/lib/schema";
import { fill, getMaterial, getMaterials, materials } from "@/lib/materials";
import { materialFaqs } from "@/lib/materialFaqs";
import { InquiryForm } from "@/components/InquiryForm";

export const revalidate = 300;

export function generateStaticParams() {
  return locales.flatMap((locale) => materials.map((m) => ({ locale, slug: m.category, material: m.slug })));
}

type P = { params: Promise<{ locale: string; slug: string; material: string }> };

/** Name without the bracketed codes, e.g. "Sodium lauryl ether sulphate". */
const shortName = (name: string) => name.replace(/\s*\(.*\)\s*$/, "");

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug, material } = await params;
  if (!isLocale(locale)) return {};
  const m = getMaterial(slug, material);
  if (!m) return {};
  const d = await getDict(locale);
  const t = m.text[locale];
  const vars = { code: m.code, name: t.name, short: shortName(t.name) };
  const long = fill(d.material.metaTitle, vars);
  return pageMetadata({
    locale,
    path: `/products/${slug}/${material}`,
    title: long.length <= 70 ? long : fill(d.material.metaTitleShort, vars),
    description: snippet(fill(d.material.metaDesc, vars)),
    keywords: [m.code, t.name, ...(m.cas ? [`CAS ${m.cas}`] : []), ...m.aka],
  });
}

export default async function MaterialPage({ params }: P) {
  const { locale, slug, material } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMaterial(slug, material);
  if (!m) notFound();
  const [d, c, site] = await Promise.all([getDict(locale), getCategory(locale, slug), getSite()]);
  if (!c) notFound();
  const t = m.text[locale];
  const packing = /^\p{Lu}\p{Ll}/u.test(t.packing) ? t.packing[0].toLowerCase() + t.packing.slice(1) : t.packing;
  const vars = { code: m.code, name: t.name, packing };
  const faq = [
    ...(materialFaqs[m.slug]?.[locale] ?? []),
    { q: fill(d.material.faq1q, vars), a: fill(d.material.faq1a, vars) },
    { q: fill(d.material.faq2q, vars), a: fill(d.material.faq2a, vars) },
    { q: fill(d.material.faq3q, vars), a: fill(d.material.faq3a, vars) },
  ];
  const specs: [string, string | undefined][] = [
    [d.material.cas, m.cas],
    [d.material.hs, m.hs],
    [d.material.formula, m.formula],
    [d.material.grade, t.grade],
    [d.material.form, t.form],
    [d.material.packing, t.packing],
    [d.material.standard, m.standard],
  ];
  const others = getMaterials(slug).filter((x) => x.slug !== m.slug);

  return (
    <>
      {materialPageSchema(locale, c, m, faq, d).map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href={`/${locale}`}>{d.product.home}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}#categories`}>{d.product.products}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}/products/${slug}`}>{c.name}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{m.code}</span>
          </nav>
          <span className="cat-tab">{m.code}</span>
          <h1 className="headline">{t.name}</h1>
          <p className="lede">{t.intro}</p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#quote">{d.product.quoteFor}</a>
            <a className="btn-ghost" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{d.hero.ctaCall}</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap two-col">
          <div>
            <h2 className="section-title sm">{d.material.specs}</h2>
            <dl className="spec-table">
              {specs
                .filter((s): s is [string, string] => Boolean(s[1]))
                .map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd dir={k === d.material.formula || k === d.material.cas || k === d.material.hs ? "ltr" : undefined}>{v}</dd>
                  </div>
                ))}
            </dl>
            <p className="muted small">{d.material.note}</p>
          </div>
          <div>
            <h2 className="section-title sm">{d.material.uses}</h2>
            <ul className="uses">
              {t.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap faq-wrap">
          <h2 className="section-title">{fill(d.material.faqTitle, vars)}</h2>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q} open>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="quote">
        <div className="wrap contact-grid">
          <div>
            <h2 className="section-title">{fill(d.material.ctaTitle, vars)}</h2>
            <p className="muted">{d.material.ctaText}</p>
            <InquiryForm t={d.form} locale={locale} defaultProduct={m.code} idPrefix="mq" />
          </div>
          <div>
            <h2 className="section-title sm">{fill(d.material.more, { category: c.name })}</h2>
            <ul className="related">
              {others.map((x) => (
                <li key={x.slug}>
                  <Link href={`/${locale}/products/${slug}/${x.slug}`}>
                    <span className="cat-tab">{x.code}</span> {shortName(x.text[locale].name)}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="muted small">{d.product.updated}: {SITE.updated}</p>
          </div>
        </div>
      </section>
    </>
  );
}
