import type { Locale } from "@/i18n/config";
import type { CategorySlug } from "./site";

/**
 * Individual product pages (one per material), shown under their category:
 * /[locale]/products/[category]/[material].
 * Values are typical figures from supplier data sheets; the exact spec is confirmed per supplier (COA).
 */
export type MatText = {
  name: string;
  intro: string;
  grade: string;
  form: string;
  packing: string;
  uses: string[];
};

export type Material = {
  slug: string;
  category: CategorySlug;
  /** Short trade name shown as the tag and in the title. */
  code: string;
  cas?: string;
  hs?: string;
  formula?: string;
  standard?: string;
  /** Extra search terms (synonyms, grades) for metadata. */
  aka: string[];
  text: Record<Locale, MatText>;
};

const S: CategorySlug = "surfactants-detergents";
const W: CategorySlug = "water-treatment";

export const materials: Material[] = [
  {
    slug: "sodium-las",
    category: S,
    code: "LAS-Na",
    cas: "25155-30-0",
    hs: "3402310000",
    formula: "R-C6H4SO3Na",
    standard: "GB/T 13173",
    aka: ["LAS", "sodium dodecylbenzene sulfonate", "LAS powder"],
    text: {
      en: {
        name: "Sodium linear alkylbenzene sulphonate (LAS-Na)",
        intro:
          "LAS-Na is the anionic surfactant at the core of most washing powders. It is a stable, free-flowing powder that mixes directly into powder formulas and is safer to handle and ship than liquid LABSA.",
        grade: "30% – 85% active matter",
        form: "White to light-yellow free-flowing powder, 20–60 mesh",
        packing: "10 kg or 12.5 kg bags",
        uses: ["Washing powder", "Detergent bars", "Industrial cleaners"],
      },
      fr: {
        name: "Sulfonate d'alkylbenzène linéaire de sodium (LAS-Na)",
        intro:
          "Le LAS-Na est le tensioactif anionique de base de la plupart des lessives en poudre. Poudre stable et fluide, il s'incorpore directement dans les formules poudre et se manipule et se transporte plus facilement que le LABSA liquide.",
        grade: "30 % – 85 % de matière active",
        form: "Poudre fluide blanche à jaune clair, 20–60 mesh",
        packing: "Sacs de 10 kg ou 12,5 kg",
        uses: ["Lessive en poudre", "Pains de détergent", "Nettoyants industriels"],
      },
      ar: {
        name: "سلفونات ألكيل بنزين الخطي الصوديومية (LAS-Na)",
        intro:
          "LAS-Na هو المادة الفعالة السطحية الأنيونية الأساسية في معظم مساحيق الغسيل. مسحوق ثابت سهل الانسياب يُخلط مباشرة في تركيبات المساحيق، وهو أسهل وأأمن في النقل والتداول من LABSA السائل.",
        grade: "مادة فعالة من 30% إلى 85%",
        form: "مسحوق أبيض إلى أصفر فاتح سهل الانسياب، 20–60 مش",
        packing: "أكياس 10 كغ أو 12.5 كغ",
        uses: ["مسحوق الغسيل", "قوالب المنظفات", "المنظفات الصناعية"],
      },
    },
  },
  {
    slug: "aos",
    category: S,
    code: "AOS",
    cas: "68439-57-6",
    hs: "3402390000",
    standard: "GB/T 5173",
    aka: ["alpha olefin sulfonate", "AOS 92", "AOS 35"],
    text: {
      en: {
        name: "Alpha olefin sulfonate (AOS)",
        intro:
          "AOS gives rich foam, strong cleaning and good tolerance of hard water, with low irritation and ready biodegradability. It works well in phosphate-free powders and in liquid detergents and shampoos.",
        grade: "92% powder · 35% liquid",
        form: "White to light-yellow powder, or light-yellow clear liquid",
        packing: "20–25 kg bags (powder); 200 kg drums or IBC (liquid)",
        uses: ["Liquid detergent", "Shampoo and body wash", "Phosphate-free washing powder", "Textile printing and dyeing"],
      },
      fr: {
        name: "Sulfonate d'alpha-oléfine (AOS)",
        intro:
          "L'AOS offre une mousse riche, un fort pouvoir lavant et une bonne tolérance à l'eau dure, avec une faible irritation et une bonne biodégradabilité. Il convient aux lessives sans phosphate, aux détergents liquides et aux shampooings.",
        grade: "Poudre 92 % · liquide 35 %",
        form: "Poudre blanche à jaune clair, ou liquide jaune clair transparent",
        packing: "Sacs de 20–25 kg (poudre) ; fûts de 200 kg ou IBC (liquide)",
        uses: ["Détergent liquide", "Shampooing et gel douche", "Lessive en poudre sans phosphate", "Impression et teinture textile"],
      },
      ar: {
        name: "سلفونات ألفا أوليفين (AOS)",
        intro:
          "يمنح AOS رغوة غنية وقوة تنظيف عالية وتحمّلاً جيداً للماء العسر، مع تهيّج منخفض وقابلية جيدة للتحلل الحيوي. مناسب لمساحيق الغسيل الخالية من الفوسفات وللمنظفات السائلة والشامبو.",
        grade: "مسحوق 92% · سائل 35%",
        form: "مسحوق أبيض إلى أصفر فاتح، أو سائل شفاف أصفر فاتح",
        packing: "أكياس 20–25 كغ (مسحوق)؛ براميل 200 كغ أو IBC (سائل)",
        uses: ["المنظفات السائلة", "الشامبو وغسول الجسم", "مسحوق غسيل خالٍ من الفوسفات", "طباعة وصباغة النسيج"],
      },
    },
  },
  {
    slug: "sls-k12",
    category: S,
    code: "SLS",
    cas: "151-21-3",
    hs: "3402390000",
    formula: "ROSO3Na (R: C12–14)",
    standard: "GB/T 15963",
    aka: ["sodium lauryl sulfate", "K12", "SLS needles", "SDS"],
    text: {
      en: {
        name: "Sodium lauryl sulphate (SLS / K12)",
        intro:
          "SLS is a fast-foaming anionic surfactant with excellent emulsifying, wetting and cleaning power. It is supplied as powder or needles, with toothpaste and cosmetic grades available on request.",
        grade: "92% – 95% active matter",
        form: "White or yellowish powder, or needles",
        packing: "20 kg bags (powder); 25 kg bags (needles)",
        uses: ["Toothpaste", "Shampoo and cosmetics", "Detergents", "Industrial emulsifier"],
      },
      fr: {
        name: "Laurylsulfate de sodium (SLS / K12)",
        intro:
          "Le SLS est un tensioactif anionique très moussant, au fort pouvoir émulsifiant, mouillant et nettoyant. Il est proposé en poudre ou en aiguilles, avec des qualités dentifrice et cosmétique sur demande.",
        grade: "92 % – 95 % de matière active",
        form: "Poudre blanche ou jaunâtre, ou aiguilles",
        packing: "Sacs de 20 kg (poudre) ; sacs de 25 kg (aiguilles)",
        uses: ["Dentifrice", "Shampooing et cosmétiques", "Détergents", "Émulsifiant industriel"],
      },
      ar: {
        name: "كبريتات لوريل الصوديوم (SLS / K12)",
        intro:
          "SLS مادة سطحية أنيونية سريعة الرغوة ذات قدرة عالية على الاستحلاب والترطيب والتنظيف. تتوفر على شكل مسحوق أو إبر، مع درجات لمعجون الأسنان ومستحضرات التجميل عند الطلب.",
        grade: "مادة فعالة من 92% إلى 95%",
        form: "مسحوق أبيض أو مصفرّ، أو إبر",
        packing: "أكياس 20 كغ (مسحوق)؛ أكياس 25 كغ (إبر)",
        uses: ["معجون الأسنان", "الشامبو ومستحضرات التجميل", "المنظفات", "مستحلب صناعي"],
      },
    },
  },
  {
    slug: "sles-70",
    category: S,
    code: "SLES 70%",
    cas: "68585-34-2",
    hs: "3402390000",
    formula: "RO(CH2CH2O)nSO3Na (R: C12–14)",
    aka: ["sodium lauryl ether sulfate", "AES", "SLES 70", "sodium laureth sulfate"],
    text: {
      en: {
        name: "Sodium lauryl ether sulphate (SLES / AES)",
        intro:
          "SLES is a gentle, high-foaming surfactant with strong hard-water resistance and good biodegradability. It can partly replace LAS, which lets formulators reduce phosphate and active dosage.",
        grade: "70% ± 2 active matter",
        form: "White to light-yellow viscous paste",
        packing: "170 kg or 220 kg plastic drums; 1,100 kg IBC",
        uses: ["Liquid laundry detergent", "Dishwashing liquid", "Shampoo and bubble bath", "Hand wash"],
      },
      fr: {
        name: "Laureth sulfate de sodium (SLES / AES)",
        intro:
          "Le SLES est un tensioactif doux et très moussant, résistant à l'eau dure et bien biodégradable. Il peut remplacer en partie le LAS, ce qui permet de réduire les phosphates et le dosage en matière active.",
        grade: "70 % ± 2 de matière active",
        form: "Pâte visqueuse blanche à jaune clair",
        packing: "Fûts plastique de 170 kg ou 220 kg ; IBC de 1 100 kg",
        uses: ["Lessive liquide", "Liquide vaisselle", "Shampooing et bain moussant", "Savon pour les mains"],
      },
      ar: {
        name: "كبريتات لوريل إيثر الصوديوم (SLES / AES)",
        intro:
          "SLES مادة سطحية لطيفة وعالية الرغوة، مقاومة للماء العسر وقابلة للتحلل الحيوي. يمكن أن تحل جزئياً محل LAS، مما يسمح بتقليل الفوسفات وجرعة المادة الفعالة.",
        grade: "مادة فعالة 70% ± 2",
        form: "عجينة لزجة بيضاء إلى صفراء فاتحة",
        packing: "براميل بلاستيكية 170 كغ أو 220 كغ؛ IBC سعة 1100 كغ",
        uses: ["منظف الغسيل السائل", "سائل غسيل الأطباق", "الشامبو وحمّام الفقاعات", "غسول اليدين"],
      },
    },
  },
  {
    slug: "aeo-9",
    category: S,
    code: "AEO-9",
    cas: "3055-97-8",
    hs: "3402420000",
    formula: "RO(CH2CH2O)nH",
    aka: ["fatty alcohol ethoxylate", "AEO9", "alcohol ethoxylate", "nonionic surfactant"],
    text: {
      en: {
        name: "Fatty alcohol ethoxylate (AEO-9)",
        intro:
          "AEO-9 is a versatile nonionic surfactant and emulsifier with strong degreasing power and stable performance in hard water. It blends well with anionic surfactants in liquid detergents.",
        grade: "99% min active matter",
        form: "Liquid or white paste",
        packing: "200 kg drums",
        uses: ["Liquid detergent", "Wool and textile scouring", "Metal and industrial degreasing", "Emulsifier"],
      },
      fr: {
        name: "Alcool gras éthoxylé (AEO-9)",
        intro:
          "L'AEO-9 est un tensioactif non ionique et émulsifiant polyvalent, au fort pouvoir dégraissant et stable en eau dure. Il s'associe bien aux tensioactifs anioniques dans les détergents liquides.",
        grade: "99 % min de matière active",
        form: "Liquide ou pâte blanche",
        packing: "Fûts de 200 kg",
        uses: ["Détergent liquide", "Désuintage de la laine et du textile", "Dégraissage industriel et des métaux", "Émulsifiant"],
      },
      ar: {
        name: "إيثوكسيلات الكحول الدهني (AEO-9)",
        intro:
          "AEO-9 مادة سطحية غير أيونية ومستحلب متعدد الاستخدامات، ذو قدرة عالية على إزالة الدهون وأداء ثابت في الماء العسر. يمتزج جيداً مع المواد الأنيونية في المنظفات السائلة.",
        grade: "مادة فعالة 99% كحد أدنى",
        form: "سائل أو عجينة بيضاء",
        packing: "براميل 200 كغ",
        uses: ["المنظفات السائلة", "غسل الصوف والنسيج", "إزالة الدهون الصناعية والمعدنية", "مستحلب"],
      },
    },
  },
  {
    slug: "apg",
    category: S,
    code: "APG",
    cas: "68515-73-1",
    hs: "3402420000",
    formula: "C16H32O6 (R: C8–10)",
    aka: ["alkyl polyglucoside", "APG 0810", "APG 0814", "APG 1214", "decyl glucoside"],
    text: {
      en: {
        name: "Alkyl polyglucoside (APG)",
        intro:
          "APG is a mild nonionic surfactant made from renewable raw materials. It is low-irritation, readily biodegradable and foams well, which makes it a common choice for eco and personal-care formulas.",
        grade: "APG 0810, 0814 and 1214 · 50% – 72% solids",
        form: "Pale-yellow to brown liquid",
        packing: "220 kg drums or IBC",
        uses: ["Personal care", "Household cleaners", "Eco-label formulations", "Dishwashing liquid"],
      },
      fr: {
        name: "Alkylpolyglucoside (APG)",
        intro:
          "L'APG est un tensioactif non ionique doux, issu de matières premières renouvelables. Peu irritant, facilement biodégradable et bon moussant, il est très utilisé dans les formules écologiques et cosmétiques.",
        grade: "APG 0810, 0814 et 1214 · 50 % – 72 % d'extrait sec",
        form: "Liquide jaune pâle à brun",
        packing: "Fûts de 220 kg ou IBC",
        uses: ["Soins personnels", "Nettoyants ménagers", "Formules éco-labellisées", "Liquide vaisselle"],
      },
      ar: {
        name: "ألكيل بولي غلوكوزيد (APG)",
        intro:
          "APG مادة سطحية غير أيونية لطيفة مصنوعة من مواد خام متجددة. منخفضة التهيّج وسهلة التحلل الحيوي وجيدة الرغوة، لذا تُستخدم كثيراً في التركيبات الصديقة للبيئة ومنتجات العناية الشخصية.",
        grade: "APG 0810 و0814 و1214 · مواد صلبة 50% – 72%",
        form: "سائل أصفر باهت إلى بني",
        packing: "براميل 220 كغ أو IBC",
        uses: ["العناية الشخصية", "المنظفات المنزلية", "التركيبات الصديقة للبيئة", "سائل غسيل الأطباق"],
      },
    },
  },
  {
    slug: "cdea",
    category: S,
    code: "CDEA",
    cas: "68603-42-9",
    hs: "3402420000",
    formula: "RCON(C2H4OH)2",
    standard: "GB 34462",
    aka: ["coconut diethanolamide", "cocamide DEA", "6501"],
    text: {
      en: {
        name: "Coconut diethanolamide 1:1 (CDEA)",
        intro:
          "CDEA is a nonionic thickener and foam stabilizer. Blended with anionic surfactants such as LAS it boosts cleaning and foam, reduces skin irritation and gives a softer feel.",
        grade: "≥ 85% active matter",
        form: "Light-yellow liquid",
        packing: "200 kg plastic drums",
        uses: ["Shampoo", "Dishwashing and liquid detergent", "Liquid soap", "Metal cleaners"],
      },
      fr: {
        name: "Diéthanolamide de coco 1:1 (CDEA)",
        intro:
          "Le CDEA est un épaississant et stabilisant de mousse non ionique. Associé à des anioniques comme le LAS, il renforce le lavage et la mousse, réduit l'irritation et donne un toucher plus doux.",
        grade: "≥ 85 % de matière active",
        form: "Liquide jaune clair",
        packing: "Fûts plastique de 200 kg",
        uses: ["Shampooing", "Liquide vaisselle et détergent liquide", "Savon liquide", "Nettoyants pour métaux"],
      },
      ar: {
        name: "ثنائي إيثانول أميد جوز الهند 1:1 (CDEA)",
        intro:
          "CDEA مادة غير أيونية مكثِّفة ومثبِّتة للرغوة. عند مزجها مع مواد أنيونية مثل LAS تعزز التنظيف والرغوة، وتقلل تهيّج الجلد وتمنح ملمساً أنعم.",
        grade: "مادة فعالة ≥ 85%",
        form: "سائل أصفر فاتح",
        packing: "براميل بلاستيكية 200 كغ",
        uses: ["الشامبو", "سائل الأطباق والمنظفات السائلة", "الصابون السائل", "منظفات المعادن"],
      },
    },
  },
  {
    slug: "capb",
    category: S,
    code: "CAPB",
    cas: "61789-40-0",
    hs: "3402490000",
    formula: "RCONH(CH2)3N+(CH3)2CH2COO−",
    aka: ["cocamidopropyl betaine", "CAB-35", "CAB-45", "betaine"],
    text: {
      en: {
        name: "Cocamidopropyl betaine (CAPB / CAB)",
        intro:
          "CAPB is a mild amphoteric surfactant that lowers the irritation of anionic systems, builds viscosity and adds soft, stable foam. It is a standard co-surfactant in shampoos and body washes.",
        grade: "CAB-35 (30% active) · CAB-45 (37% active)",
        form: "Colorless to yellowish clear liquid",
        packing: "200 kg plastic drums",
        uses: ["Shampoo and body wash", "Baby care", "Hand soap", "Dishwashing liquid"],
      },
      fr: {
        name: "Cocamidopropyl bétaïne (CAPB / CAB)",
        intro:
          "La CAPB est un tensioactif amphotère doux qui réduit l'irritation des systèmes anioniques, augmente la viscosité et apporte une mousse douce et stable. C'est un co-tensioactif standard des shampooings et gels douche.",
        grade: "CAB-35 (30 % actif) · CAB-45 (37 % actif)",
        form: "Liquide limpide incolore à jaunâtre",
        packing: "Fûts plastique de 200 kg",
        uses: ["Shampooing et gel douche", "Soins bébé", "Savon pour les mains", "Liquide vaisselle"],
      },
      ar: {
        name: "كوكاميدوبروبيل بيتين (CAPB / CAB)",
        intro:
          "CAPB مادة سطحية مذبذبة لطيفة تقلل تهيّج الأنظمة الأنيونية وتزيد اللزوجة وتضيف رغوة ناعمة وثابتة. وهي مادة مساعدة أساسية في الشامبو وغسول الجسم.",
        grade: "CAB-35 (‏30% فعالة) · CAB-45 (‏37% فعالة)",
        form: "سائل شفاف عديم اللون إلى مصفرّ",
        packing: "براميل بلاستيكية 200 كغ",
        uses: ["الشامبو وغسول الجسم", "منتجات الأطفال", "صابون اليدين", "سائل غسيل الأطباق"],
      },
    },
  },
  {
    slug: "stpp",
    category: S,
    code: "STPP",
    cas: "7758-29-4",
    hs: "2835310000",
    formula: "Na5P3O10",
    standard: "GB/T 9983",
    aka: ["sodium tripolyphosphate", "STPP 94%", "detergent builder"],
    text: {
      en: {
        name: "Sodium tripolyphosphate (STPP)",
        intro:
          "STPP is the classic detergent builder. It softens water by binding calcium and magnesium, raises alkalinity, and keeps lifted dirt suspended so it does not settle back on fabric.",
        grade: "Industrial grade, whiteness ≥ 90",
        form: "Free-flowing white powder",
        packing: "25 kg, 1,000 kg or 1,250 kg bags",
        uses: ["Washing powder", "Industrial and institutional cleaning", "Ceramics", "Water treatment"],
      },
      fr: {
        name: "Tripolyphosphate de sodium (STPP)",
        intro:
          "Le STPP est l'adjuvant (builder) classique des détergents. Il adoucit l'eau en fixant le calcium et le magnésium, augmente l'alcalinité et maintient les salissures en suspension pour éviter qu'elles se redéposent.",
        grade: "Qualité industrielle, blancheur ≥ 90",
        form: "Poudre blanche fluide",
        packing: "Sacs de 25 kg, 1 000 kg ou 1 250 kg",
        uses: ["Lessive en poudre", "Nettoyage industriel et collectif", "Céramique", "Traitement de l'eau"],
      },
      ar: {
        name: "ثلاثي بولي فوسفات الصوديوم (STPP)",
        intro:
          "STPP هو المادة البانية التقليدية في المنظفات. يعمل على تيسير الماء بربط الكالسيوم والمغنيسيوم، ويرفع القلوية، ويُبقي الأوساخ معلّقة حتى لا تعود إلى القماش.",
        grade: "درجة صناعية، بياض ≥ 90",
        form: "مسحوق أبيض سهل الانسياب",
        packing: "أكياس 25 كغ أو 1000 كغ أو 1250 كغ",
        uses: ["مسحوق الغسيل", "التنظيف الصناعي والمؤسسي", "السيراميك", "معالجة المياه"],
      },
    },
  },
  {
    slug: "zeolite-4a",
    category: S,
    code: "Zeolite 4A",
    cas: "1318-02-1",
    hs: "3824999000",
    standard: "QB/T 1768",
    aka: ["detergent zeolite", "zeolite 4A", "phosphate-free builder"],
    text: {
      en: {
        name: "Detergent-grade zeolite 4A",
        intro:
          "Zeolite 4A is the main builder for phosphate-free and low-phosphate detergents. Combined with LAS, AES or AOS, it delivers cleaning close to phosphate systems without the phosphorus.",
        grade: "Ca exchange ≥ 310 mg CaCO₃/g · whiteness ≥ 96",
        form: "White powder",
        packing: "25 kg or 40 kg bags; jumbo bags",
        uses: ["Phosphate-free washing powder", "Low-phosphate detergent", "Laundry tablets"],
      },
      fr: {
        name: "Zéolithe 4A qualité détergent",
        intro:
          "La zéolithe 4A est le principal adjuvant des lessives sans ou à faible teneur en phosphate. Associée au LAS, à l'AES ou à l'AOS, elle offre un lavage proche des systèmes phosphatés, sans phosphore.",
        grade: "Échange Ca ≥ 310 mg CaCO₃/g · blancheur ≥ 96",
        form: "Poudre blanche",
        packing: "Sacs de 25 kg ou 40 kg ; big bags",
        uses: ["Lessive en poudre sans phosphate", "Détergent à faible teneur en phosphate", "Tablettes de lessive"],
      },
      ar: {
        name: "زيوليت 4A بدرجة المنظفات",
        intro:
          "زيوليت 4A هو المادة البانية الرئيسية للمنظفات الخالية من الفوسفات أو منخفضة الفوسفات. عند مزجه مع LAS أو AES أو AOS يعطي تنظيفاً قريباً من أنظمة الفوسفات دون الفوسفور.",
        grade: "تبادل الكالسيوم ≥ 310 ملغ CaCO₃/غ · بياض ≥ 96",
        form: "مسحوق أبيض",
        packing: "أكياس 25 كغ أو 40 كغ؛ أكياس جامبو",
        uses: ["مسحوق غسيل خالٍ من الفوسفات", "منظفات منخفضة الفوسفات", "أقراص الغسيل"],
      },
    },
  },
  {
    slug: "apsm",
    category: S,
    code: "APSM",
    cas: "1344-09-8",
    hs: "3824999999",
    formula: "mNa2O·nSiO2·xH2O",
    aka: ["active poly sodium metasilicate", "CSDS", "complex disodium silicate", "STPP replacement"],
    text: {
      en: {
        name: "Active poly sodium metasilicate (APSM / CSDS)",
        intro:
          "APSM is designed to replace STPP in washing powder. It softens water strongly, saves cost and is a phosphate-free option for markets that restrict phosphates.",
        grade: "Ca exchange ≥ 310 mg/g · Mg exchange ≥ 320 mg/g",
        form: "Free-flowing white powder",
        packing: "25 kg bags",
        uses: ["Washing powder", "STPP replacement", "Hard-surface cleaners"],
      },
      fr: {
        name: "Métasilicate de sodium polyactif (APSM / CSDS)",
        intro:
          "L'APSM est conçu pour remplacer le STPP dans les lessives en poudre. Il adoucit fortement l'eau, réduit les coûts et constitue une option sans phosphate pour les marchés qui les limitent.",
        grade: "Échange Ca ≥ 310 mg/g · échange Mg ≥ 320 mg/g",
        form: "Poudre blanche fluide",
        packing: "Sacs de 25 kg",
        uses: ["Lessive en poudre", "Remplacement du STPP", "Nettoyants pour surfaces dures"],
      },
      ar: {
        name: "ميتاسيليكات الصوديوم النشطة (APSM / CSDS)",
        intro:
          "صُمّم APSM ليحل محل STPP في مسحوق الغسيل. يُيسّر الماء بقوة ويوفّر التكلفة، وهو خيار خالٍ من الفوسفات للأسواق التي تقيّد استخدامه.",
        grade: "تبادل الكالسيوم ≥ 310 ملغ/غ · تبادل المغنيسيوم ≥ 320 ملغ/غ",
        form: "مسحوق أبيض سهل الانسياب",
        packing: "أكياس 25 كغ",
        uses: ["مسحوق الغسيل", "بديل STPP", "منظفات الأسطح الصلبة"],
      },
    },
  },
  {
    slug: "soda-ash",
    category: S,
    code: "Soda ash",
    cas: "497-19-8",
    hs: "2836200000",
    formula: "Na2CO3",
    aka: ["sodium carbonate", "soda ash light", "soda ash dense", "washing soda"],
    text: {
      en: {
        name: "Soda ash, light and dense (sodium carbonate)",
        intro:
          "Soda ash is an essential alkali for detergents and soap, and a key input for glass, paper and water treatment. Light grade suits detergent powders; dense grade suits glass making.",
        grade: "Total alkali ≥ 99.2%",
        form: "White powder (light) or granules (dense)",
        packing: "25, 40 or 50 kg bags; 650–1,000 kg jumbo bags",
        uses: ["Detergent and soap", "Glass manufacturing", "Water treatment and pH control", "Pulp and paper"],
      },
      fr: {
        name: "Carbonate de sodium, léger et dense",
        intro:
          "Le carbonate de sodium est un alcali essentiel pour les détergents et le savon, ainsi que pour le verre, le papier et le traitement de l'eau. Le léger convient aux lessives en poudre ; le dense à la verrerie.",
        grade: "Alcali total ≥ 99,2 %",
        form: "Poudre blanche (léger) ou granulés (dense)",
        packing: "Sacs de 25, 40 ou 50 kg ; big bags de 650 à 1 000 kg",
        uses: ["Détergents et savon", "Fabrication du verre", "Traitement de l'eau et contrôle du pH", "Pâte et papier"],
      },
      ar: {
        name: "رماد الصودا الخفيف والكثيف (كربونات الصوديوم)",
        intro:
          "رماد الصودا قلوي أساسي في المنظفات والصابون، ومادة رئيسية في صناعة الزجاج والورق ومعالجة المياه. الدرجة الخفيفة مناسبة لمساحيق المنظفات، والكثيفة لصناعة الزجاج.",
        grade: "القلوية الكلية ≥ 99.2%",
        form: "مسحوق أبيض (خفيف) أو حبيبات (كثيف)",
        packing: "أكياس 25 أو 40 أو 50 كغ؛ أكياس جامبو 650–1000 كغ",
        uses: ["المنظفات والصابون", "صناعة الزجاج", "معالجة المياه وضبط الحموضة", "اللب والورق"],
      },
    },
  },
  {
    slug: "cmc",
    category: S,
    code: "CMC",
    cas: "9004-32-4",
    hs: "3912310000",
    standard: "GB/T 12028",
    aka: ["carboxymethyl cellulose", "sodium CMC", "detergent CMC"],
    text: {
      en: {
        name: "Carboxymethyl cellulose (CMC), detergent grade",
        intro:
          "CMC is an anti-redeposition agent: it stops lifted dirt from settling back on fabric during the wash and leaves textiles softer. Other grades serve food, oil drilling, paint and paper.",
        grade: "NaCMC ≥ 65% · soluble in cold water",
        form: "White or cream-colored powder",
        packing: "25 kg or 1,000 kg bags",
        uses: ["Washing powder and detergents", "Oil drilling", "Paint and paper", "Food (food grade)"],
      },
      fr: {
        name: "Carboxyméthylcellulose (CMC), qualité détergent",
        intro:
          "La CMC est un agent anti-redéposition : elle empêche les salissures de se redéposer sur le linge pendant le lavage et rend les textiles plus doux. D'autres qualités servent l'alimentaire, le forage, la peinture et le papier.",
        grade: "NaCMC ≥ 65 % · soluble dans l'eau froide",
        form: "Poudre blanche ou crème",
        packing: "Sacs de 25 kg ou 1 000 kg",
        uses: ["Lessives et détergents", "Forage pétrolier", "Peinture et papier", "Alimentaire (qualité alimentaire)"],
      },
      ar: {
        name: "كربوكسي ميثيل السليلوز (CMC) بدرجة المنظفات",
        intro:
          "CMC عامل مانع لإعادة الترسيب: يمنع الأوساخ من العودة إلى القماش أثناء الغسيل ويجعل الأقمشة أنعم. وتُستخدم درجات أخرى في الأغذية وحفر النفط والدهانات والورق.",
        grade: "NaCMC ≥ 65% · قابل للذوبان في الماء البارد",
        form: "مسحوق أبيض أو كريمي",
        packing: "أكياس 25 كغ أو 1000 كغ",
        uses: ["مسحوق الغسيل والمنظفات", "حفر النفط", "الدهانات والورق", "الأغذية (درجة غذائية)"],
      },
    },
  },
  {
    slug: "sodium-sulphate",
    category: S,
    code: "Na₂SO₄",
    cas: "7757-82-6",
    hs: "2833110000",
    formula: "Na2SO4",
    standard: "GB/T 6009",
    aka: ["sodium sulfate anhydrous", "sodium sulphate 99%", "glauber salt", "detergent filler"],
    text: {
      en: {
        name: "Sodium sulphate anhydrous",
        intro:
          "Sodium sulphate is the standard filler in powdered laundry detergents. It is also used in Kraft pulping, glass and textile dyeing.",
        grade: "Purity ≥ 99% · whiteness ≥ 82",
        form: "White powder",
        packing: "25 kg or 50 kg bags; 1,000–1,350 kg jumbo bags",
        uses: ["Washing powder filler", "Kraft pulp", "Glass", "Textile dyeing"],
      },
      fr: {
        name: "Sulfate de sodium anhydre",
        intro:
          "Le sulfate de sodium est la charge standard des lessives en poudre. Il est aussi utilisé dans la pâte kraft, le verre et la teinture textile.",
        grade: "Pureté ≥ 99 % · blancheur ≥ 82",
        form: "Poudre blanche",
        packing: "Sacs de 25 kg ou 50 kg ; big bags de 1 000 à 1 350 kg",
        uses: ["Charge pour lessive en poudre", "Pâte kraft", "Verre", "Teinture textile"],
      },
      ar: {
        name: "كبريتات الصوديوم اللامائية",
        intro:
          "كبريتات الصوديوم هي مادة الحشو المعتادة في مساحيق الغسيل. وتُستخدم أيضاً في صناعة لب الكرافت والزجاج وصباغة النسيج.",
        grade: "النقاوة ≥ 99% · البياض ≥ 82",
        form: "مسحوق أبيض",
        packing: "أكياس 25 كغ أو 50 كغ؛ أكياس جامبو 1000–1350 كغ",
        uses: ["حشو مسحوق الغسيل", "لب الكرافت", "الزجاج", "صباغة النسيج"],
      },
    },
  },
  {
    slug: "color-speckles",
    category: S,
    code: "Speckles",
    hs: "3824999999",
    aka: ["detergent speckles", "colored speckles", "washing powder speckles"],
    text: {
      en: {
        name: "Color speckles for detergent",
        intro:
          "Color speckles are colored granules that give washing powder a distinctive look. They come in many colors and shapes, on a sodium sulphate or other base, matched to your brand.",
        grade: "Custom colors and shapes",
        form: "Free-flowing granules",
        packing: "25 kg bags or 12.5 kg boxes",
        uses: ["Washing powder", "Powder detergents", "Brand differentiation"],
      },
      fr: {
        name: "Mouchetures colorées pour détergents",
        intro:
          "Les mouchetures colorées sont des granulés qui donnent à la lessive en poudre un aspect distinctif. Disponibles en nombreuses couleurs et formes, sur base sulfate de sodium ou autre, selon votre marque.",
        grade: "Couleurs et formes sur mesure",
        form: "Granulés fluides",
        packing: "Sacs de 25 kg ou cartons de 12,5 kg",
        uses: ["Lessive en poudre", "Détergents en poudre", "Différenciation de marque"],
      },
      ar: {
        name: "حبيبات ملوّنة للمنظفات",
        intro:
          "الحبيبات الملوّنة تمنح مسحوق الغسيل مظهراً مميزاً. تتوفر بألوان وأشكال عديدة، على قاعدة كبريتات الصوديوم أو غيرها، بما يناسب علامتكم التجارية.",
        grade: "ألوان وأشكال حسب الطلب",
        form: "حبيبات سهلة الانسياب",
        packing: "أكياس 25 كغ أو صناديق 12.5 كغ",
        uses: ["مسحوق الغسيل", "المنظفات المسحوقة", "تمييز العلامة التجارية"],
      },
    },
  },
  {
    slug: "optical-brightener-cbs-x",
    category: S,
    code: "CBS-X",
    cas: "27344-41-8",
    hs: "3204200000",
    formula: "C28H20S2O6Na2",
    standard: "HG/T 3726",
    aka: ["optical brightener", "fluorescent whitening agent", "FWA", "CBS-X", "brightener 351"],
    text: {
      en: {
        name: "Optical brightener CBS-X",
        intro:
          "CBS-X is a high-performance whitener for cotton, polyamide and protein fibers. It dissolves easily, resists hypochlorite bleach and works at room temperature. Other brighteners such as CF-127, CBS-L, CXT and AMS are also available.",
        grade: "Typical dosage 0.02% – 0.05% in washing powder",
        form: "Pistachio-green granules",
        packing: "25 kg fiber drums or cartons",
        uses: ["Washing powder", "Liquid detergent", "Soap", "Softeners"],
      },
      fr: {
        name: "Azurant optique CBS-X",
        intro:
          "Le CBS-X est un azurant très performant pour le coton, le polyamide et les fibres protéiques. Il se dissout facilement, résiste à l'hypochlorite et agit à température ambiante. D'autres azurants comme CF-127, CBS-L, CXT et AMS sont aussi disponibles.",
        grade: "Dosage typique 0,02 % – 0,05 % dans la lessive en poudre",
        form: "Granulés vert pistache",
        packing: "Fûts carton de 25 kg ou cartons",
        uses: ["Lessive en poudre", "Détergent liquide", "Savon", "Assouplissants"],
      },
      ar: {
        name: "مبيّض ضوئي CBS-X",
        intro:
          "CBS-X مبيّض عالي الأداء للقطن والبولي أميد والألياف البروتينية. يذوب بسهولة ويقاوم مبيّض الهيبوكلوريت ويعمل في درجة حرارة الغرفة. تتوفر أيضاً مبيّضات أخرى مثل CF-127 وCBS-L وCXT وAMS.",
        grade: "الجرعة المعتادة 0.02% – 0.05% في مسحوق الغسيل",
        form: "حبيبات خضراء فستقية",
        packing: "براميل كرتونية 25 كغ أو صناديق",
        uses: ["مسحوق الغسيل", "المنظفات السائلة", "الصابون", "منعّمات الأقمشة"],
      },
    },
  },
  {
    slug: "labsa-96",
    category: S,
    code: "LABSA",
    cas: "27176-87-0",
    hs: "3402310000",
    formula: "C12H25C6H4SO3H",
    standard: "GB/T 8447",
    aka: ["linear alkylbenzene sulfonic acid", "LABSA 96%", "LAS acid", "dodecylbenzene sulfonic acid", "DDBSA"],
    text: {
      en: {
        name: "Linear alkylbenzene sulphonic acid (LABSA 96%)",
        intro:
          "LABSA is the acid form of LAS and the most widely used anionic surfactant in detergents. Neutralised with caustic soda, it becomes the main cleaning agent in dishwashing liquid, liquid detergent and washing powder. It is corrosive and normally ships as dangerous goods, so confirm the SDS before booking.",
        grade: "96% min active matter",
        form: "Brown viscous liquid",
        packing: "210–220 kg drums or 1,000 kg IBC",
        uses: ["Dishwashing liquid", "Liquid detergent", "Washing powder (after neutralisation)", "Industrial and floor cleaners"],
      },
      fr: {
        name: "Acide alkylbenzène sulfonique linéaire (LABSA 96 %)",
        intro:
          "Le LABSA est la forme acide du LAS et le tensioactif anionique le plus utilisé dans les détergents. Neutralisé à la soude caustique, il devient l'agent lavant principal des liquides vaisselle, lessives liquides et lessives en poudre. Il est corrosif et voyage normalement comme marchandise dangereuse : vérifiez la FDS avant de réserver.",
        grade: "96 % min de matière active",
        form: "Liquide visqueux brun",
        packing: "Fûts de 210–220 kg ou IBC de 1 000 kg",
        uses: ["Liquide vaisselle", "Lessive liquide", "Lessive en poudre (après neutralisation)", "Nettoyants industriels et sols"],
      },
      ar: {
        name: "حمض سلفونيك ألكيل بنزين الخطي (LABSA 96%)",
        intro:
          "LABSA هو الصورة الحمضية من LAS، وأكثر المواد الفعالة السطحية الأنيونية استخداماً في المنظفات. بعد معادلته بالصودا الكاوية يصبح عامل التنظيف الرئيسي في سائل غسيل الأطباق والمنظفات السائلة ومسحوق الغسيل. وهو مادة أكّالة تُشحن عادةً كبضائع خطرة، لذا تأكد من صحيفة بيانات السلامة قبل الحجز.",
        grade: "مادة فعالة 96% كحد أدنى",
        form: "سائل لزج بني اللون",
        packing: "براميل 210–220 كغ أو حاويات IBC سعة 1000 كغ",
        uses: ["سائل غسيل الأطباق", "المنظفات السائلة", "مسحوق الغسيل (بعد المعادلة)", "منظفات صناعية ومنظفات الأرضيات"],
      },
    },
  },
  {
    slug: "benzalkonium-chloride",
    category: S,
    code: "BKC",
    cas: "8001-54-5",
    hs: "2923900090",
    standard: "USP / EP (pharma grades on request)",
    aka: ["benzalkonium chloride 50%", "BKC 80%", "ADBAC", "quaternary ammonium", "quat disinfectant", "1227"],
    text: {
      en: {
        name: "Benzalkonium chloride (BKC 50% / 80%)",
        intro:
          "Benzalkonium chloride is a cationic surfactant (quaternary ammonium compound) used as the disinfecting ingredient in floor cleaners, surface sanitisers and hand washes, and as a biocide in water treatment. Concentrated grades are usually classed as corrosive for transport, so check the SDS before booking.",
        grade: "50% or 80% active",
        form: "Colourless to light-yellow liquid",
        packing: "200 kg drums or 1,000 kg IBC",
        uses: ["Disinfectant floor cleaners", "Surface sanitisers", "Antibacterial hand wash", "Water treatment biocide"],
      },
      fr: {
        name: "Chlorure de benzalkonium (BKC 50 % / 80 %)",
        intro:
          "Le chlorure de benzalkonium est un tensioactif cationique (ammonium quaternaire) utilisé comme agent désinfectant dans les nettoyants sols, les désinfectants de surface et les savons pour les mains, et comme biocide en traitement de l'eau. Les qualités concentrées sont en général classées corrosives pour le transport : vérifiez la FDS avant de réserver.",
        grade: "50 % ou 80 % de matière active",
        form: "Liquide incolore à jaune clair",
        packing: "Fûts de 200 kg ou IBC de 1 000 kg",
        uses: ["Nettoyants sols désinfectants", "Désinfectants de surface", "Savon antibactérien pour les mains", "Biocide pour traitement de l'eau"],
      },
      ar: {
        name: "كلوريد البنزالكونيوم (BKC 50% / 80%)",
        intro:
          "كلوريد البنزالكونيوم مادة فعالة سطحية كاتيونية (مركب أمونيوم رباعي) تُستخدم كمكوّن مطهّر في منظفات الأرضيات ومطهرات الأسطح وغسول اليدين، وكمبيد حيوي في معالجة المياه. الدرجات المركّزة تُصنَّف عادةً كمواد أكّالة في النقل، لذا تحقق من صحيفة بيانات السلامة قبل الحجز.",
        grade: "مادة فعالة 50% أو 80%",
        form: "سائل عديم اللون إلى أصفر فاتح",
        packing: "براميل 200 كغ أو حاويات IBC سعة 1000 كغ",
        uses: ["منظفات أرضيات مطهّرة", "مطهرات الأسطح", "غسول يدين مضاد للبكتيريا", "مبيد حيوي لمعالجة المياه"],
      },
    },
  },
  {
    slug: "glycerin",
    category: S,
    code: "Glycerin",
    cas: "56-81-5",
    hs: "2905450000",
    formula: "C3H8O3",
    standard: "USP / EP / GB/T 13206",
    aka: ["glycerine", "glycerol", "refined glycerin 99.5%", "USP glycerin"],
    text: {
      en: {
        name: "Refined glycerin 99.5% (glycerol)",
        intro:
          "Refined glycerin is a clear, odourless humectant. In liquid soaps, hand washes and dishwashing liquids it keeps skin soft and helps stabilise the formula. Industrial and USP (pharmaceutical/cosmetic) grades are available.",
        grade: "99.5% min (USP or industrial)",
        form: "Clear, colourless viscous liquid",
        packing: "250 kg drums or 1,250 kg IBC",
        uses: ["Liquid hand soap", "Dishwashing liquid", "Cosmetics and personal care", "Industrial uses (resins, antifreeze)"],
      },
      fr: {
        name: "Glycérine raffinée 99,5 % (glycérol)",
        intro:
          "La glycérine raffinée est un humectant limpide et inodore. Dans les savons liquides, savons pour les mains et liquides vaisselle, elle garde la peau douce et aide à stabiliser la formule. Qualités industrielle et USP (pharmaceutique/cosmétique) disponibles.",
        grade: "99,5 % min (USP ou industrielle)",
        form: "Liquide visqueux limpide et incolore",
        packing: "Fûts de 250 kg ou IBC de 1 250 kg",
        uses: ["Savon liquide pour les mains", "Liquide vaisselle", "Cosmétiques et hygiène", "Usages industriels (résines, antigel)"],
      },
      ar: {
        name: "جلسرين مكرر 99.5% (جليسرول)",
        intro:
          "الجلسرين المكرر مادة مرطبة شفافة عديمة الرائحة. يحافظ في الصابون السائل وغسول اليدين وسائل غسيل الأطباق على نعومة البشرة ويساعد على ثبات التركيبة. تتوفر درجة صناعية ودرجة USP (صيدلانية/تجميلية).",
        grade: "99.5% كحد أدنى (USP أو صناعي)",
        form: "سائل لزج شفاف عديم اللون",
        packing: "براميل 250 كغ أو حاويات IBC سعة 1250 كغ",
        uses: ["صابون اليدين السائل", "سائل غسيل الأطباق", "مستحضرات التجميل والعناية الشخصية", "استخدامات صناعية (الراتنجات، مانع التجمد)"],
      },
    },
  },
  {
    slug: "citric-acid",
    category: S,
    code: "Citric acid",
    cas: "77-92-9",
    hs: "2918140000",
    formula: "C6H8O7",
    standard: "BP / USP / FCC / E330",
    aka: ["citric acid anhydrous", "citric acid monohydrate", "CAS 5949-29-1", "E330"],
    text: {
      en: {
        name: "Citric acid (anhydrous / monohydrate)",
        intro:
          "Citric acid is a natural acid used to adjust pH, remove limescale and bind hard-water minerals. In cleaning products it is a common descaler and builder in dishwashing liquids, bathroom cleaners and phosphate-free detergents. Food-grade material is also widely used. Monohydrate has CAS 5949-29-1.",
        grade: "99.5% min · anhydrous or monohydrate",
        form: "White crystalline powder or granules",
        packing: "25 kg bags; 1,000 kg jumbo bags on request",
        uses: ["Descalers and bathroom cleaners", "Dishwashing liquid (pH adjuster)", "Phosphate-free detergents", "Food and beverages"],
      },
      fr: {
        name: "Acide citrique (anhydre / monohydraté)",
        intro:
          "L'acide citrique est un acide naturel utilisé pour ajuster le pH, détartrer et piéger les minéraux de l'eau dure. Dans les produits d'entretien, c'est un détartrant et adjuvant courant des liquides vaisselle, nettoyants salle de bain et lessives sans phosphate. La qualité alimentaire est aussi très utilisée. Le monohydrate a le CAS 5949-29-1.",
        grade: "99,5 % min · anhydre ou monohydraté",
        form: "Poudre cristalline ou granulés blancs",
        packing: "Sacs de 25 kg ; big bags de 1 000 kg sur demande",
        uses: ["Détartrants et nettoyants salle de bain", "Liquide vaisselle (correcteur de pH)", "Lessives sans phosphate", "Alimentation et boissons"],
      },
      ar: {
        name: "حمض الستريك (لامائي / أحادي الماء)",
        intro:
          "حمض الستريك حمض طبيعي يُستخدم لضبط الأس الهيدروجيني وإزالة الترسبات الكلسية وربط أملاح الماء العسر. وهو في منتجات التنظيف مزيل ترسبات ومادة مساعدة شائعة في سائل غسيل الأطباق ومنظفات الحمامات والمنظفات الخالية من الفوسفات. وتُستخدم الدرجة الغذائية أيضاً على نطاق واسع. رقم CAS للصورة أحادية الماء 5949-29-1.",
        grade: "99.5% كحد أدنى · لامائي أو أحادي الماء",
        form: "مسحوق بلوري أبيض أو حبيبات",
        packing: "أكياس 25 كغ؛ أكياس جامبو 1000 كغ عند الطلب",
        uses: ["مزيلات الترسبات ومنظفات الحمامات", "سائل غسيل الأطباق (ضبط الحموضة)", "منظفات خالية من الفوسفات", "الأغذية والمشروبات"],
      },
    },
  },
  {
    slug: "edta",
    category: S,
    code: "EDTA",
    cas: "6381-92-6",
    hs: "2922499990",
    formula: "C10H14N2Na2O8·2H2O (EDTA-2Na)",
    aka: ["EDTA disodium", "EDTA-2Na", "EDTA tetrasodium", "EDTA-4Na", "CAS 64-02-8", "chelating agent"],
    text: {
      en: {
        name: "EDTA disodium / tetrasodium (chelating agent)",
        intro:
          "EDTA binds calcium, magnesium and metal ions, so detergents and soaps keep working in hard water and keep their colour and stability. Disodium EDTA (EDTA-2Na) is the usual choice for personal care. Tetrasodium EDTA (EDTA-4Na, CAS 64-02-8) is common in detergents and industrial cleaners.",
        grade: "99% min (EDTA-2Na / EDTA-4Na powder)",
        form: "White crystalline powder; EDTA-4Na also as a liquid solution",
        packing: "25 kg bags; liquid in drums or IBC",
        uses: ["Liquid detergent and dishwashing liquid", "Liquid soap and shampoo", "Industrial cleaners", "Water treatment"],
      },
      fr: {
        name: "EDTA disodique / tétrasodique (agent chélatant)",
        intro:
          "L'EDTA piège le calcium, le magnésium et les ions métalliques : les détergents et savons restent efficaces en eau dure et gardent leur couleur et leur stabilité. L'EDTA disodique (EDTA-2Na) est le choix habituel en cosmétique. L'EDTA tétrasodique (EDTA-4Na, CAS 64-02-8) est courant dans les détergents et nettoyants industriels.",
        grade: "99 % min (poudre EDTA-2Na / EDTA-4Na)",
        form: "Poudre cristalline blanche ; EDTA-4Na aussi en solution liquide",
        packing: "Sacs de 25 kg ; liquide en fûts ou IBC",
        uses: ["Lessive liquide et liquide vaisselle", "Savon liquide et shampooing", "Nettoyants industriels", "Traitement de l'eau"],
      },
      ar: {
        name: "EDTA ثنائي الصوديوم / رباعي الصوديوم (عامل مخلّب)",
        intro:
          "يرتبط EDTA بالكالسيوم والمغنيسيوم وأيونات المعادن، فتبقى المنظفات والصابون فعّالة في الماء العسر وتحافظ على لونها وثباتها. EDTA ثنائي الصوديوم (EDTA-2Na) هو الخيار المعتاد في منتجات العناية الشخصية، أما EDTA رباعي الصوديوم (EDTA-4Na، رقم CAS 64-02-8) فشائع في المنظفات والمنظفات الصناعية.",
        grade: "99% كحد أدنى (مسحوق EDTA-2Na / EDTA-4Na)",
        form: "مسحوق بلوري أبيض؛ ويتوفر EDTA-4Na أيضاً كمحلول سائل",
        packing: "أكياس 25 كغ؛ السائل في براميل أو حاويات IBC",
        uses: ["المنظفات السائلة وسائل غسيل الأطباق", "الصابون السائل والشامبو", "المنظفات الصناعية", "معالجة المياه"],
      },
    },
  },
  {
    slug: "pac-polyaluminium-chloride",
    category: W,
    code: "PAC",
    cas: "1327-41-9",
    hs: "2827320000",
    formula: "[Al2(OH)nCl6-n]m",
    standard: "GB/T 22627 · GB 15892 (drinking water)",
    aka: ["polyaluminium chloride", "poly aluminum chloride", "PAC 30%", "PAC powder", "coagulant"],
    text: {
      en: {
        name: "Polyaluminium chloride (PAC)",
        intro:
          "PAC is the most widely used coagulant for drinking water and wastewater. It removes turbidity and colour faster than aluminium sulphate, works across a wider pH range and produces less sludge. Drinking-water grades and industrial grades are available.",
        grade: "28% – 30% Al₂O₃ (powder); liquid grades 10% – 17%",
        form: "Yellow or white powder; yellow liquid",
        packing: "25 kg bags; liquid in IBC or bulk",
        uses: ["Drinking-water clarification", "Municipal and industrial wastewater", "Paper making", "Textile and dyeing effluent"],
      },
      fr: {
        name: "Polychlorure d'aluminium (PAC)",
        intro:
          "Le PAC est le coagulant le plus utilisé pour l'eau potable et les eaux usées. Il élimine la turbidité et la couleur plus vite que le sulfate d'aluminium, agit sur une plage de pH plus large et produit moins de boues. Qualités eau potable et industrielle disponibles.",
        grade: "28 % – 30 % d'Al₂O₃ (poudre) ; qualités liquides 10 % – 17 %",
        form: "Poudre jaune ou blanche ; liquide jaune",
        packing: "Sacs de 25 kg ; liquide en IBC ou en vrac",
        uses: ["Clarification de l'eau potable", "Eaux usées municipales et industrielles", "Papeterie", "Effluents de textile et de teinture"],
      },
      ar: {
        name: "بولي كلوريد الألومنيوم (PAC)",
        intro:
          "PAC هو المخثّر الأكثر استخداماً لمياه الشرب ومياه الصرف. يزيل العكارة واللون أسرع من كبريتات الألومنيوم، ويعمل في مدى أوسع من الأس الهيدروجيني، وينتج حمأة أقل. تتوفر درجة لمياه الشرب ودرجة صناعية.",
        grade: "أكسيد الألومنيوم Al₂O₃ من 28% إلى 30% (مسحوق)؛ الدرجات السائلة 10%–17%",
        form: "مسحوق أصفر أو أبيض؛ سائل أصفر",
        packing: "أكياس 25 كغ؛ السائل في حاويات IBC أو سائباً",
        uses: ["ترويق مياه الشرب", "مياه الصرف البلدية والصناعية", "صناعة الورق", "مخلّفات النسيج والصباغة"],
      },
    },
  },
  {
    slug: "aluminium-sulphate",
    category: W,
    code: "Alum",
    cas: "10043-01-3",
    hs: "2833220000",
    formula: "Al2(SO4)3·nH2O",
    standard: "GB/T 31060",
    aka: ["aluminium sulfate", "aluminum sulfate", "alum", "iron-free aluminium sulphate", "CAS 17927-65-0"],
    text: {
      en: {
        name: "Aluminium sulphate (alum)",
        intro:
          "Aluminium sulphate is the traditional, low-cost coagulant for water treatment, and it is also used in paper sizing. Iron-free (low-iron) grades suit white paper and drinking water. The hydrated form has CAS 17927-65-0.",
        grade: "15.6% – 17% Al₂O₃; iron-free or standard grades",
        form: "White flakes, granules or powder",
        packing: "25 kg or 50 kg bags; 1,000 kg jumbo bags",
        uses: ["Drinking-water and wastewater coagulant", "Paper sizing", "Swimming-pool clarification", "Textile and leather processing"],
      },
      fr: {
        name: "Sulfate d'aluminium (alun)",
        intro:
          "Le sulfate d'aluminium est le coagulant traditionnel et économique du traitement de l'eau ; il sert aussi à l'encollage du papier. Les qualités sans fer (basse teneur en fer) conviennent au papier blanc et à l'eau potable. La forme hydratée a le CAS 17927-65-0.",
        grade: "15,6 % – 17 % d'Al₂O₃ ; qualités sans fer ou standard",
        form: "Paillettes, granulés ou poudre blancs",
        packing: "Sacs de 25 kg ou 50 kg ; big bags de 1 000 kg",
        uses: ["Coagulant pour eau potable et eaux usées", "Encollage du papier", "Clarification des piscines", "Traitement du textile et du cuir"],
      },
      ar: {
        name: "كبريتات الألومنيوم (الشبّة)",
        intro:
          "كبريتات الألومنيوم هي المخثّر التقليدي منخفض التكلفة لمعالجة المياه، وتُستخدم أيضاً في تغرية الورق. الدرجات الخالية من الحديد (منخفضة الحديد) مناسبة للورق الأبيض ومياه الشرب. رقم CAS للصورة المائية 17927-65-0.",
        grade: "أكسيد الألومنيوم Al₂O₃ من 15.6% إلى 17%؛ درجة خالية من الحديد أو قياسية",
        form: "رقائق أو حبيبات أو مسحوق أبيض",
        packing: "أكياس 25 كغ أو 50 كغ؛ أكياس جامبو 1000 كغ",
        uses: ["مخثّر لمياه الشرب ومياه الصرف", "تغرية الورق", "ترويق أحواض السباحة", "معالجة النسيج والجلود"],
      },
    },
  },
  {
    slug: "activated-carbon",
    category: W,
    code: "Activated carbon",
    cas: "7440-44-0",
    hs: "3802100000",
    standard: "GB/T 7701.2 (coal-based) · GB/T 13803.2 (wood-based)",
    aka: ["activated charcoal", "granular activated carbon", "GAC", "powdered activated carbon", "PAC carbon", "coconut shell activated carbon"],
    text: {
      en: {
        name: "Activated carbon (granular / powder / pellet)",
        intro:
          "Activated carbon removes chlorine, odour, colour and organic pollutants from water by adsorption. Coal-based carbon is the economical choice for municipal and wastewater use. Coconut-shell carbon has finer pores and suits drinking water, RO pretreatment and gold recovery. The iodine value is the main quality figure to compare.",
        grade: "Iodine value 600 – 1,100 mg/g; coal-based or coconut-shell",
        form: "Black granules, powder or cylindrical pellets",
        packing: "25 kg bags; 500 kg jumbo bags",
        uses: ["Drinking-water filters and RO pretreatment", "Wastewater and effluent treatment", "Air and gas purification", "Gold recovery and decolourisation"],
      },
      fr: {
        name: "Charbon actif (grains / poudre / extrudé)",
        intro:
          "Le charbon actif retire le chlore, les odeurs, la couleur et les polluants organiques de l'eau par adsorption. Le charbon à base de houille est le choix économique pour l'eau municipale et les eaux usées. Le charbon de coque de coco, aux pores plus fins, convient à l'eau potable, au prétraitement d'osmose inverse et à la récupération de l'or. L'indice d'iode est le principal critère de comparaison.",
        grade: "Indice d'iode 600 – 1 100 mg/g ; houille ou coque de coco",
        form: "Grains, poudre ou granulés cylindriques noirs",
        packing: "Sacs de 25 kg ; big bags de 500 kg",
        uses: ["Filtres d'eau potable et prétraitement d'osmose inverse", "Traitement des eaux usées et effluents", "Purification de l'air et des gaz", "Récupération de l'or et décoloration"],
      },
      ar: {
        name: "الكربون المنشّط (حبيبي / مسحوق / أسطواني)",
        intro:
          "يزيل الكربون المنشّط الكلور والروائح واللون والملوثات العضوية من الماء بالامتزاز. الكربون المصنوع من الفحم هو الخيار الاقتصادي للمياه البلدية ومياه الصرف، أما كربون قشر جوز الهند فمسامه أدق ويناسب مياه الشرب والمعالجة المسبقة للتناضح العكسي واستخلاص الذهب. ورقم اليود هو أهم مقياس للمقارنة بين الأنواع.",
        grade: "رقم اليود 600 – 1100 ملغ/غ؛ من الفحم أو قشر جوز الهند",
        form: "حبيبات أو مسحوق أو كريات أسطوانية سوداء",
        packing: "أكياس 25 كغ؛ أكياس جامبو 500 كغ",
        uses: ["فلاتر مياه الشرب والمعالجة المسبقة للتناضح العكسي", "معالجة مياه الصرف والمخلفات", "تنقية الهواء والغازات", "استخلاص الذهب وإزالة الألوان"],
      },
    },
  },
  {
    slug: "polyacrylamide-pam",
    category: W,
    code: "PAM",
    cas: "9003-05-8",
    hs: "3906901000",
    standard: "GB/T 13940 · GB 17514 (drinking water)",
    aka: ["polyacrylamide", "anionic polyacrylamide", "cationic polyacrylamide", "APAM", "CPAM", "flocculant"],
    text: {
      en: {
        name: "Polyacrylamide (PAM) flocculant",
        intro:
          "Polyacrylamide is a high-molecular-weight flocculant that turns fine particles into large, fast-settling flocs. It is often dosed after PAC. Anionic PAM suits mining and industrial water, cationic PAM is used for sludge dewatering, and nonionic PAM is used for acidic water. Choose the type and charge by jar test.",
        grade: "Anionic, cationic or nonionic; molecular weight 5 – 25 million",
        form: "White granular powder; emulsion on request",
        packing: "25 kg bags",
        uses: ["Sludge dewatering", "Mining and mineral processing", "Paper making", "Drinking-water and wastewater flocculation"],
      },
      fr: {
        name: "Polyacrylamide (PAM) floculant",
        intro:
          "Le polyacrylamide est un floculant de haut poids moléculaire qui transforme les fines particules en gros flocs qui décantent vite ; il est souvent dosé après le PAC. Le PAM anionique convient aux mines et aux eaux industrielles, le PAM cationique à la déshydratation des boues, et le PAM non ionique aux eaux acides. Le type et la charge se choisissent par jar-test.",
        grade: "Anionique, cationique ou non ionique ; poids moléculaire 5 – 25 millions",
        form: "Poudre granulaire blanche ; émulsion sur demande",
        packing: "Sacs de 25 kg",
        uses: ["Déshydratation des boues", "Mines et traitement des minerais", "Papeterie", "Floculation de l'eau potable et des eaux usées"],
      },
      ar: {
        name: "بولي أكريلاميد (PAM) مادة مندفة",
        intro:
          "البولي أكريلاميد مادة مندفة عالية الوزن الجزيئي تحوّل الجسيمات الدقيقة إلى ندف كبيرة سريعة الترسيب، وغالباً ما يُضاف بعد PAC. يناسب PAM الأنيوني التعدين والمياه الصناعية، ويُستخدم PAM الكاتيوني لنزح مياه الحمأة، وPAM غير الأيوني للمياه الحمضية. يُختار النوع والشحنة باختبار الجرة.",
        grade: "أنيوني أو كاتيوني أو غير أيوني؛ وزن جزيئي 5 – 25 مليون",
        form: "مسحوق حبيبي أبيض؛ مستحلب عند الطلب",
        packing: "أكياس 25 كغ",
        uses: ["نزح مياه الحمأة", "التعدين ومعالجة الخامات", "صناعة الورق", "تنديف مياه الشرب ومياه الصرف"],
      },
    },
  },
  {
    slug: "bentonite",
    category: W,
    code: "Bentonite",
    cas: "1302-78-9",
    hs: "2508100000",
    standard: "GB/T 20973",
    aka: ["sodium bentonite", "calcium bentonite", "bentonite clay", "montmorillonite", "drilling bentonite"],
    text: {
      en: {
        name: "Bentonite (sodium / calcium)",
        intro:
          "Bentonite is a swelling clay with a high surface area. In water treatment it is a weighting and adsorption aid that helps flocs form and settle in low-turbidity water. It is also widely used in drilling mud, foundry sand, civil-engineering slurry and cat litter.",
        grade: "Sodium or calcium bentonite; 200 mesh typical",
        form: "Cream to grey powder or granules",
        packing: "25 kg or 50 kg bags; 1,000 kg jumbo bags",
        uses: ["Coagulation aid in water treatment", "Drilling mud", "Foundry sand binder", "Cat litter and civil engineering"],
      },
      fr: {
        name: "Bentonite (sodique / calcique)",
        intro:
          "La bentonite est une argile gonflante à grande surface spécifique. En traitement de l'eau, c'est un agent de lestage et d'adsorption qui aide les flocs à se former et à décanter dans les eaux peu turbides. Elle est aussi très utilisée dans les boues de forage, les sables de fonderie, les coulis de génie civil et la litière pour chats.",
        grade: "Bentonite sodique ou calcique ; 200 mesh en général",
        form: "Poudre ou granulés crème à gris",
        packing: "Sacs de 25 kg ou 50 kg ; big bags de 1 000 kg",
        uses: ["Adjuvant de coagulation en traitement de l'eau", "Boues de forage", "Liant de sable de fonderie", "Litière pour chats et génie civil"],
      },
      ar: {
        name: "البنتونيت (صوديومي / كالسيومي)",
        intro:
          "البنتونيت طين قابل للانتفاخ ذو مساحة سطحية كبيرة. يُستخدم في معالجة المياه كمادة مثقّلة وممتزة تساعد على تكوّن الندف وترسيبها في المياه منخفضة العكارة. كما يُستخدم على نطاق واسع في طين الحفر ورمل المسابك وملاط الهندسة المدنية وفضلات القطط.",
        grade: "بنتونيت صوديومي أو كالسيومي؛ 200 مش عادةً",
        form: "مسحوق أو حبيبات بلون كريمي إلى رمادي",
        packing: "أكياس 25 كغ أو 50 كغ؛ أكياس جامبو 1000 كغ",
        uses: ["مساعد تخثير في معالجة المياه", "طين الحفر", "رابط لرمل المسابك", "فضلات القطط والهندسة المدنية"],
      },
    },
  },
];

export function getMaterials(category: string): Material[] {
  return materials.filter((m) => m.category === category);
}

export function getMaterial(category: string, slug: string): Material | undefined {
  return materials.find((m) => m.category === category && m.slug === slug);
}

/** Fills {name} and similar placeholders in dictionary templates. */
export function fill(t: string, vars: Record<string, string>): string {
  return t.replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);
}
