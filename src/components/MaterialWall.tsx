import type { Locale } from "@/i18n/config";

/**
 * Hero visual: two slowly scrolling columns of real material photos from the media library,
 * each tagged like a sample jar (product name + key spec). Decorative only: the same products
 * are listed as text in the catalogue, so the wall is hidden from assistive tech.
 * Media ids refer to images uploaded in /admin/media.
 */
type Tile = { id: number; name: Record<Locale, string>; spec: string };

const TILES: Tile[] = [
  { id: 15, name: { en: "Kaolin", fr: "Kaolin", ar: "الكاولين" }, spec: "Al₂O₃ 30–37%" },
  { id: 34, name: { en: "Iron oxide pigments", fr: "Oxydes de fer", ar: "أكاسيد الحديد" }, spec: "Fe₂O₃ ≥ 95%" },
  { id: 24, name: { en: "Activated carbon", fr: "Charbon actif", ar: "الكربون المنشّط" }, spec: "I₂ 800–1100 mg/g" },
  { id: 21, name: { en: "Ceramic pigments", fr: "Pigments céramiques", ar: "أصباغ السيراميك" }, spec: "≤ 1250 °C" },
  { id: 29, name: { en: "Titanium dioxide", fr: "Dioxyde de titane", ar: "ثاني أكسيد التيتانيوم" }, spec: "TiO₂ ≥ 94%" },
  { id: 25, name: { en: "Ion exchange resin", fr: "Résine échangeuse d'ions", ar: "راتنج التبادل الأيوني" }, spec: "0.3–1.2 mm" },
  { id: 2, name: { en: "Coconut charcoal", fr: "Charbon de coco", ar: "فحم جوز الهند" }, spec: "Ash ≤ 2.5%" },
  { id: 22, name: { en: "Aluminium sulfate", fr: "Sulfate d'aluminium", ar: "كبريتات الألومنيوم" }, spec: "Al₂O₃ ≥ 15.6%" },
  { id: 31, name: { en: "Talc", fr: "Talc", ar: "التلك" }, spec: "800–5000 mesh" },
  { id: 23, name: { en: "Ferric chloride", fr: "Chlorure ferrique", ar: "كلوريد الحديديك" }, spec: "FeCl₃ ≥ 96%" },
];

function Column({ tiles, locale, reverse }: { tiles: Tile[]; locale: Locale; reverse?: boolean }) {
  // Rendered twice so the CSS loop (translateY -50%) is seamless.
  const loop = [...tiles, ...tiles];
  return (
    <div className={reverse ? "wall-col rev" : "wall-col"}>
      <div className="wall-track">
        {loop.map((t, i) => (
          <figure className="tile" key={`${t.id}-${i}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/media/${t.id}`} alt="" loading={i < 3 ? "eager" : "lazy"} decoding="async" />
            <figcaption>
              <b>{t.name[locale]}</b>
              <span dir="ltr">{t.spec}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function MaterialWall({ locale }: { locale: Locale }) {
  const half = Math.ceil(TILES.length / 2);
  return (
    <div className="wall" aria-hidden="true">
      <Column tiles={TILES.slice(0, half)} locale={locale} />
      <Column tiles={TILES.slice(half)} locale={locale} reverse />
    </div>
  );
}

/** Cover photo per category slug (media library ids), used on the home category cards. */
export const CATEGORY_COVERS: Record<string, number> = {
  "ceramic-raw-materials": 15,
  "water-treatment": 24,
  "surfactants-detergents": 28,
  "plastics-rubber": 30,
  "paints-coatings": 34,
  "textile-auxiliaries": 14,
  "hookah-charcoal": 2,
};
