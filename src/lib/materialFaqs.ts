import type { Locale } from "@/i18n/config";

type QA = { q: string; a: string };

/**
 * Product-specific buyer questions, shown before the shared template FAQs on each material page.
 * Keep answers factual and short; numbers are typical market figures, confirmed per supplier COA/TDS.
 */
export const materialFaqs: Record<string, Record<Locale, QA[]>> = {
  "sodium-las": {
    en: [
      { q: "LAS-Na powder or LABSA liquid: which should I buy?", a: "LAS-Na is already neutralised, so it can be dry-mixed straight into washing powder. LABSA is the acid form: it usually costs less per unit of active matter but must be neutralised with caustic soda, so it suits liquid detergent plants and spray-drying lines." },
      { q: "Why do LAS-Na prices vary so much?", a: "Active content ranges from about 30% to 85%. Lower grades contain sodium sulphate as filler, so compare offers by price per kg of active matter, not per kg of powder." },
    ],
    fr: [
      { q: "LAS-Na en poudre ou LABSA liquide : lequel acheter ?", a: "Le LAS-Na est déjà neutralisé et se mélange à sec dans la lessive en poudre. Le LABSA est la forme acide : il coûte souvent moins cher par unité de matière active mais doit être neutralisé à la soude caustique, il convient donc aux usines de détergents liquides et aux tours d'atomisation." },
      { q: "Pourquoi les prix du LAS-Na varient-ils autant ?", a: "La matière active va d'environ 30 % à 85 %. Les qualités basses contiennent du sulfate de sodium comme charge : comparez les offres au prix par kg de matière active, pas par kg de poudre." },
    ],
    ar: [
      { q: "مسحوق LAS-Na أم LABSA السائل: أيهما أشتري؟", a: "LAS-Na معادَل مسبقاً، فيُخلط جافاً مباشرة في مسحوق الغسيل. أما LABSA فهو الصورة الحمضية: غالباً أرخص لكل وحدة مادة فعالة لكنه يحتاج معادلة بالصودا الكاوية، فيناسب مصانع المنظفات السائلة وخطوط التجفيف بالرذاذ." },
      { q: "لماذا تختلف أسعار LAS-Na كثيراً؟", a: "تتراوح المادة الفعالة بين نحو 30% و85%، والدرجات المنخفضة تحتوي كبريتات الصوديوم كمادة مالئة. قارن العروض بسعر الكيلوغرام من المادة الفعالة لا من المسحوق." },
    ],
  },
  aos: {
    en: [
      { q: "AOS 92% powder or AOS 35% liquid?", a: "The powder carries almost no water, so freight per kg of active matter is much lower and it works in both powders and liquids. The 35% liquid is easier to dose in liquid-only plants." },
      { q: "Can AOS replace SLES?", a: "Partly. AOS foams well in hard water and contains no ethylene oxide, so it is used in sulphate-free shampoos and as a partial SLES replacement. It thickens differently with salt, so re-test viscosity when you switch." },
    ],
    fr: [
      { q: "AOS 92 % en poudre ou AOS 35 % liquide ?", a: "La poudre ne contient presque pas d'eau : le fret par kg de matière active est bien plus bas et elle convient aux poudres comme aux liquides. Le liquide à 35 % se dose plus facilement dans les usines uniquement liquides." },
      { q: "L'AOS peut-il remplacer le SLES ?", a: "En partie. L'AOS mousse bien en eau dure et ne contient pas d'oxyde d'éthylène : il sert dans les shampooings « sans sulfate » et en remplacement partiel du SLES. Il s'épaissit différemment avec le sel, donc refaites les tests de viscosité." },
    ],
    ar: [
      { q: "AOS مسحوق 92% أم سائل 35%؟", a: "المسحوق لا يحتوي تقريباً على ماء، فتكلفة الشحن لكل كيلوغرام مادة فعالة أقل بكثير، ويصلح للمساحيق والسوائل معاً. أما السائل 35% فأسهل في الجرعات بمصانع السوائل فقط." },
      { q: "هل يمكن أن يحل AOS محل SLES؟", a: "جزئياً. يعطي AOS رغوة جيدة في الماء العسر ولا يحتوي أكسيد الإيثيلين، لذا يُستخدم في الشامبو الخالي من السلفات وكبديل جزئي لـ SLES. لكنه يتكثف بالملح بشكل مختلف، فأعد اختبار اللزوجة عند التحويل." },
    ],
  },
  "sls-k12": {
    en: [
      { q: "What is the difference between SLS and SLES?", a: "SLS is not ethoxylated: it gives stronger foam and cleaning but is harsher on skin. SLES is milder and comes as a 70% paste. SLS is preferred in toothpaste, powders and bars, SLES in liquids." },
      { q: "SLS powder or needles?", a: "Needles make much less dust and are easier to handle and dose. Powder dissolves faster. The chemistry is the same, so choose by your plant's handling." },
    ],
    fr: [
      { q: "Quelle différence entre SLS et SLES ?", a: "Le SLS n'est pas éthoxylé : il mousse et nettoie plus fort mais est plus agressif pour la peau. Le SLES est plus doux et se vend en pâte à 70 %. Le SLS est préféré pour le dentifrice, les poudres et les pains, le SLES pour les liquides." },
      { q: "SLS en poudre ou en aiguilles ?", a: "Les aiguilles produisent beaucoup moins de poussière et se manipulent plus facilement. La poudre se dissout plus vite. La chimie est la même : choisissez selon votre atelier." },
    ],
    ar: [
      { q: "ما الفرق بين SLS وSLES؟", a: "SLS غير مُؤثوَل: رغوته وقوة تنظيفه أعلى لكنه أقسى على البشرة. أما SLES فألطف ويأتي كعجينة 70%. يُفضَّل SLS في معجون الأسنان والمساحيق والقوالب، وSLES في السوائل." },
      { q: "SLS مسحوق أم إبر؟", a: "الإبر تُصدر غباراً أقل بكثير وأسهل في التداول والجرعات، والمسحوق يذوب أسرع. التركيب الكيميائي واحد، فاختر حسب طريقة التداول في مصنعك." },
    ],
  },
  "sles-70": {
    en: [
      { q: "SLES 2EO or 3EO?", a: "The EO number is the average number of ethylene-oxide units. 2EO is the standard for dishwashing liquid and detergents. 3EO is slightly milder and more soluble, so it is often chosen for personal care. Match it to your existing formula." },
      { q: "How do I dilute SLES 70% paste?", a: "Add the paste slowly to water while stirring, never water to the paste. Between roughly 30% and 60% SLES forms a thick gel that is hard to mix, so go straight to your target concentration (for example 25–28%)." },
    ],
    fr: [
      { q: "SLES 2EO ou 3EO ?", a: "Le chiffre EO est le nombre moyen d'unités d'oxyde d'éthylène. Le 2EO est le standard pour le liquide vaisselle et les détergents. Le 3EO est un peu plus doux et soluble, souvent choisi pour l'hygiène corporelle. Gardez celui de votre formule actuelle." },
      { q: "Comment diluer la pâte de SLES 70 % ?", a: "Versez la pâte lentement dans l'eau sous agitation, jamais l'eau sur la pâte. Entre environ 30 % et 60 %, le SLES forme un gel épais difficile à mélanger : passez directement à la concentration voulue (par exemple 25–28 %)." },
    ],
    ar: [
      { q: "SLES بدرجة 2EO أم 3EO؟", a: "رقم EO هو متوسط عدد وحدات أكسيد الإيثيلين. 2EO هو المعيار لسائل غسيل الأطباق والمنظفات، و3EO ألطف قليلاً وأكثر ذوباناً فيُختار غالباً للعناية الشخصية. التزم بما تستخدمه تركيبتك الحالية." },
      { q: "كيف أخفف عجينة SLES 70%؟", a: "أضف العجينة ببطء إلى الماء مع التحريك، لا الماء إلى العجينة. بين نحو 30% و60% يكوّن SLES هلاماً كثيفاً يصعب خلطه، فانتقل مباشرة إلى التركيز المطلوب (مثل 25–28%)." },
    ],
  },
  "aeo-9": {
    en: [
      { q: "AEO-7 or AEO-9?", a: "The number is the average EO chain length. A higher number means more water-soluble and a higher cloud point, so AEO-9 suits liquid detergents. AEO-7 is often preferred for oily soil and emulsifying." },
      { q: "Why is AEO-9 solid in the drum?", a: "AEO-9 is a white paste that can set in cool weather. Warm the drum gently before pumping. This is normal and does not affect quality." },
    ],
    fr: [
      { q: "AEO-7 ou AEO-9 ?", a: "Le chiffre est la longueur moyenne de la chaîne EO. Plus il est élevé, plus le produit est soluble dans l'eau avec un point de trouble plus haut : l'AEO-9 convient aux lessives liquides. L'AEO-7 est souvent préféré pour les salissures grasses et l'émulsification." },
      { q: "Pourquoi l'AEO-9 est-il solide dans le fût ?", a: "L'AEO-9 est une pâte blanche qui peut figer par temps frais. Réchauffez doucement le fût avant de pomper : c'est normal et sans effet sur la qualité." },
    ],
    ar: [
      { q: "AEO-7 أم AEO-9؟", a: "الرقم هو متوسط طول سلسلة EO. كلما ارتفع زادت الذوبانية في الماء وارتفعت نقطة التعكر، لذا يناسب AEO-9 المنظفات السائلة، بينما يُفضَّل AEO-7 غالباً للأوساخ الزيتية والاستحلاب." },
      { q: "لماذا يكون AEO-9 صلباً داخل البرميل؟", a: "AEO-9 عجينة بيضاء قد تتجمد في الطقس البارد. سخّن البرميل بلطف قبل الضخ، وهذا أمر طبيعي لا يؤثر في الجودة." },
    ],
  },
  apg: {
    en: [
      { q: "APG 0810 or APG 1214?", a: "APG 0810 (C8–10) is a low-foam wetting agent and hydrotrope for industrial and high-alkali cleaners. APG 1214 (C12–14) foams well and is mild, so it suits dishwashing liquid and personal care." },
      { q: "Why do brands choose APG?", a: "It is made from sugar and fatty alcohol, biodegrades readily, is very mild on skin and stays stable in strong alkali. That makes it a common choice for eco-labelled and 'natural' products." },
    ],
    fr: [
      { q: "APG 0810 ou APG 1214 ?", a: "L'APG 0810 (C8–10) est un mouillant et hydrotrope peu moussant pour les nettoyants industriels et très alcalins. L'APG 1214 (C12–14) mousse bien et est doux : il convient au liquide vaisselle et à l'hygiène corporelle." },
      { q: "Pourquoi les marques choisissent-elles l'APG ?", a: "Il est fabriqué à partir de sucre et d'alcool gras, se biodégrade facilement, est très doux pour la peau et reste stable en milieu très alcalin. C'est un choix courant pour les produits écolabellisés." },
    ],
    ar: [
      { q: "APG 0810 أم APG 1214؟", a: "APG 0810 (C8–10) مادة ترطيب قليلة الرغوة ومساعدة على الذوبان للمنظفات الصناعية شديدة القلوية. أما APG 1214 (C12–14) فرغوته جيدة ولطيف، فيناسب سائل الأطباق والعناية الشخصية." },
      { q: "لماذا تختار العلامات التجارية APG؟", a: "يُصنع من السكر والكحول الدهني، ويتحلل حيوياً بسهولة، ولطيف جداً على البشرة، وثابت في القلويات القوية. لذلك هو خيار شائع للمنتجات الصديقة للبيئة." },
    ],
  },
  cdea: {
    en: [
      { q: "What does CDEA do in dishwashing liquid?", a: "It boosts and stabilises foam and builds viscosity together with SLES and salt. A few percent is typical, so a small change in CDEA has a visible effect on thickness." },
      { q: "Is CDEA restricted anywhere?", a: "Some markets regulate it in cosmetics because of nitrosamine and free-amine concerns (for example California's Proposition 65 lists cocamide DEA), and many personal-care brands now use CMEA or CAPB instead. It remains common in household cleaners. Check your market's rules." },
    ],
    fr: [
      { q: "À quoi sert le CDEA dans le liquide vaisselle ?", a: "Il renforce et stabilise la mousse et épaissit avec le SLES et le sel. Quelques pour cent suffisent en général, donc une petite variation de CDEA change nettement la viscosité." },
      { q: "Le CDEA est-il réglementé ?", a: "Certains marchés l'encadrent en cosmétique à cause des nitrosamines et des amines libres (par exemple, la Proposition 65 de Californie liste le cocamide DEA), et beaucoup de marques d'hygiène passent au CMEA ou au CAPB. Il reste courant dans les produits ménagers. Vérifiez les règles de votre marché." },
    ],
    ar: [
      { q: "ما دور CDEA في سائل غسيل الأطباق؟", a: "يعزز الرغوة ويثبّتها ويرفع اللزوجة مع SLES والملح. تكفي عادةً نسبة بضعة في المئة، لذا يُحدث تغيير بسيط في CDEA فرقاً واضحاً في الكثافة." },
      { q: "هل CDEA مقيّد في بعض الأسواق؟", a: "بعض الأسواق تنظّمه في مستحضرات التجميل بسبب النيتروزامينات والأمينات الحرة (مثلاً تدرجه قائمة Proposition 65 في كاليفورنيا)، وتحولت علامات كثيرة للعناية الشخصية إلى CMEA أو CAPB. ويبقى شائعاً في المنظفات المنزلية. تحقق من قواعد سوقك." },
    ],
  },
  capb: {
    en: [
      { q: "CAPB 30% or 35%?", a: "Suppliers often label by solids content: 'CAPB 35%' frequently means about 35% solids and about 30% active matter. Read which figure the COA reports and compare prices per kg of active matter." },
      { q: "Why add CAPB to an SLES formula?", a: "CAPB is amphoteric: it makes the formula milder on skin and eyes, boosts foam and helps thicken. For sensitive-skin products, ask for low-amidoamine and low-DMAPA grades." },
    ],
    fr: [
      { q: "CAPB 30 % ou 35 % ?", a: "Les fournisseurs indiquent souvent l'extrait sec : « CAPB 35 % » signifie fréquemment environ 35 % d'extrait sec et environ 30 % de matière active. Lisez quel chiffre figure sur le COA et comparez au prix par kg de matière active." },
      { q: "Pourquoi ajouter du CAPB au SLES ?", a: "Le CAPB est amphotère : il adoucit la formule pour la peau et les yeux, renforce la mousse et aide à épaissir. Pour les peaux sensibles, demandez des qualités à faible teneur en amidoamine et en DMAPA." },
    ],
    ar: [
      { q: "CAPB بتركيز 30% أم 35%؟", a: "كثيراً ما يذكر الموردون نسبة المواد الصلبة: فـ\"CAPB 35%\" تعني غالباً نحو 35% مواد صلبة ونحو 30% مادة فعالة. اقرأ أي رقم تذكره شهادة COA وقارن الأسعار لكل كيلوغرام مادة فعالة." },
      { q: "لماذا يُضاف CAPB إلى تركيبة SLES؟", a: "CAPB مادة مذبذبة الشحنة: تجعل التركيبة ألطف على البشرة والعينين وتعزز الرغوة وتساعد على التكثيف. ولمنتجات البشرة الحساسة اطلب درجات منخفضة الأميدوأمين وDMAPA." },
    ],
  },
  stpp: {
    en: [
      { q: "Is STPP still allowed in detergents?", a: "It depends on the market. The EU and several other countries limit phosphorus in household laundry and dishwasher detergents, while many markets in Asia, Africa and the Middle East still use STPP. Check your destination's rules before formulating." },
      { q: "What replaces STPP in phosphate-free powders?", a: "Usually a mix of zeolite 4A, soda ash, sodium silicate or APSM and polymers. No single builder matches STPP exactly, so test cleaning performance on your own water hardness." },
    ],
    fr: [
      { q: "Le STPP est-il encore autorisé dans les détergents ?", a: "Cela dépend du marché. L'UE et d'autres pays limitent le phosphore dans les lessives et produits pour lave-vaisselle ménagers, tandis que de nombreux marchés d'Asie, d'Afrique et du Moyen-Orient utilisent encore le STPP. Vérifiez les règles du pays de destination." },
      { q: "Par quoi remplacer le STPP dans une lessive sans phosphate ?", a: "En général par un mélange de zéolite 4A, carbonate de sodium, silicate de sodium ou APSM et polymères. Aucun adjuvant ne remplace exactement le STPP : testez l'efficacité avec la dureté de votre eau." },
    ],
    ar: [
      { q: "هل ما زال STPP مسموحاً في المنظفات؟", a: "يعتمد على السوق. يقيّد الاتحاد الأوروبي ودول أخرى الفوسفور في مساحيق الغسيل ومنظفات غسالات الأطباق المنزلية، بينما ما زالت أسواق كثيرة في آسيا وأفريقيا والشرق الأوسط تستخدم STPP. تحقق من قواعد بلد الوصول قبل التركيب." },
      { q: "ما بديل STPP في المساحيق الخالية من الفوسفات؟", a: "عادةً خليط من الزيوليت 4A وكربونات الصوديوم وسيليكات الصوديوم أو APSM والبوليمرات. لا توجد مادة واحدة تطابق STPP تماماً، فاختبر قوة التنظيف على عسر الماء لديك." },
    ],
  },
  "zeolite-4a": {
    en: [
      { q: "How does zeolite 4A compare with STPP?", a: "Zeolite softens water by ion exchange and contains no phosphate, but it does not dissolve, so it is used in powders, not clear liquids. It works best combined with soda ash and polymers." },
      { q: "Which zeolite specs matter most?", a: "Calcium exchange capacity (often quoted as 295 mg CaCO₃/g min.), whiteness and particle size. Ask for these three on the COA and compare them before comparing price." },
    ],
    fr: [
      { q: "Zéolite 4A ou STPP ?", a: "La zéolite adoucit l'eau par échange d'ions et ne contient pas de phosphate, mais elle ne se dissout pas : elle sert dans les poudres, pas dans les liquides limpides. Elle fonctionne mieux associée au carbonate de sodium et aux polymères." },
      { q: "Quelles spécifications de zéolite comptent le plus ?", a: "La capacité d'échange calcique (souvent 295 mg CaCO₃/g min.), la blancheur et la granulométrie. Demandez ces trois valeurs sur le COA et comparez-les avant le prix." },
    ],
    ar: [
      { q: "كيف يقارن الزيوليت 4A بـ STPP؟", a: "يليّن الزيوليت الماء بالتبادل الأيوني ولا يحتوي فوسفات، لكنه لا يذوب، لذا يُستخدم في المساحيق لا في السوائل الشفافة. ويعمل أفضل مع كربونات الصوديوم والبوليمرات." },
      { q: "ما أهم مواصفات الزيوليت؟", a: "سعة التبادل الكالسيومي (غالباً 295 ملغ CaCO₃/غ كحد أدنى) ودرجة البياض وحجم الحبيبات. اطلب هذه القيم الثلاث في شهادة COA وقارنها قبل مقارنة السعر." },
    ],
  },
  apsm: {
    en: [
      { q: "What is APSM used for?", a: "APSM (active poly sodium metasilicate) is an alkaline builder used to replace part of the STPP in washing powder. It adds alkalinity, softens water and helps protect washing-machine metal from corrosion." },
      { q: "Is APSM safe to handle?", a: "It is strongly alkaline, so workers should wear gloves and eye protection, and bags must be kept dry and sealed. Check the SDS for the transport classification of the grade you buy." },
    ],
    fr: [
      { q: "À quoi sert l'APSM ?", a: "L'APSM (métasilicate de sodium polymérique actif) est un adjuvant alcalin qui remplace une partie du STPP dans la lessive en poudre. Il apporte de l'alcalinité, adoucit l'eau et aide à protéger les métaux des machines contre la corrosion." },
      { q: "L'APSM est-il dangereux à manipuler ?", a: "Il est fortement alcalin : gants et lunettes sont nécessaires, et les sacs doivent rester secs et fermés. Vérifiez sur la FDS la classification transport de la qualité achetée." },
    ],
    ar: [
      { q: "فيمَ يُستخدم APSM؟", a: "APSM (ميتاسيليكات الصوديوم البوليمرية النشطة) مادة مساعدة قلوية تحل محل جزء من STPP في مسحوق الغسيل. تضيف القلوية وتليّن الماء وتساعد على حماية معادن الغسالات من التآكل." },
      { q: "هل APSM آمن في التداول؟", a: "هو شديد القلوية، لذا يجب ارتداء القفازات وحماية العينين، وحفظ الأكياس جافة ومغلقة. تحقق من صحيفة SDS لمعرفة تصنيف النقل للدرجة التي تشتريها." },
    ],
  },
  "soda-ash": {
    en: [
      { q: "Soda ash light or dense?", a: "Light soda ash is preferred for detergent dry-mixing and chemical processes. Dense soda ash makes less dust and packs more tonnes per container, so it is the standard for glass and often cheaper to ship." },
      { q: "What purity should I ask for?", a: "Industrial soda ash is commonly 99.2% Na₂CO₃ min. Also check whiteness, chloride and iron content if it goes into white powders." },
    ],
    fr: [
      { q: "Carbonate de sodium léger ou dense ?", a: "Le léger est préféré pour le mélange à sec des détergents et les procédés chimiques. Le dense produit moins de poussière et met plus de tonnes par conteneur : c'est le standard du verre et il est souvent moins cher à expédier." },
      { q: "Quelle pureté demander ?", a: "Le carbonate industriel titre couramment 99,2 % de Na₂CO₃ min. Vérifiez aussi la blancheur, les chlorures et le fer s'il entre dans des poudres blanches." },
    ],
    ar: [
      { q: "كربونات الصوديوم الخفيفة أم الكثيفة؟", a: "الخفيفة مفضلة لخلط المنظفات الجاف والعمليات الكيميائية. أما الكثيفة فغبارها أقل وتتسع الحاوية لأطنان أكثر منها، فهي المعيار في صناعة الزجاج وغالباً أرخص في الشحن." },
      { q: "ما النقاوة التي أطلبها؟", a: "كربونات الصوديوم الصناعية عادةً بنقاوة 99.2% Na₂CO₃ كحد أدنى. وتحقق أيضاً من البياض ونسبة الكلوريد والحديد إذا كانت ستدخل في مساحيق بيضاء." },
    ],
  },
  cmc: {
    en: [
      { q: "What does CMC do in washing powder?", a: "It is an anti-redeposition agent: it stops loosened dirt from settling back on fabric, especially cotton. It is usually dosed at around 1% or less." },
      { q: "Can detergent-grade CMC be used in food or drilling?", a: "No. Detergent grade has lower purity and different viscosity. Food, pharmaceutical and oil-drilling uses need their own grades with matching specifications and certificates." },
    ],
    fr: [
      { q: "À quoi sert la CMC dans la lessive en poudre ?", a: "C'est un agent anti-redéposition : elle empêche la saleté détachée de se redéposer sur le tissu, surtout le coton. On la dose en général autour de 1 % ou moins." },
      { q: "La CMC qualité détergent convient-elle à l'alimentaire ou au forage ?", a: "Non. La qualité détergent a une pureté plus faible et une autre viscosité. L'alimentaire, la pharmacie et le forage pétrolier exigent leurs propres qualités, avec spécifications et certificats adaptés." },
    ],
    ar: [
      { q: "ما دور CMC في مسحوق الغسيل؟", a: "هو مانع لإعادة الترسب: يمنع الأوساخ المنفصلة من العودة إلى القماش، خاصة القطن. ويُضاف عادةً بنحو 1% أو أقل." },
      { q: "هل يصلح CMC درجة المنظفات للأغذية أو الحفر؟", a: "لا. درجة المنظفات أقل نقاوة ولزوجتها مختلفة. أما الأغذية والأدوية وحفر النفط فلكل منها درجات خاصة بمواصفات وشهادات مناسبة." },
    ],
  },
  "sodium-sulphate": {
    en: [
      { q: "Why is sodium sulphate in washing powder?", a: "It is a low-cost filler and processing aid. It keeps powder free-flowing, adjusts density and helps spray-drying. It adds no cleaning power, which is why high-filler powders are cheaper." },
      { q: "What should I check on a sodium sulphate COA?", a: "Purity (anhydrous grades are typically 99% min.), whiteness, pH and moisture. Low whiteness makes white powders look grey." },
    ],
    fr: [
      { q: "Pourquoi du sulfate de sodium dans la lessive en poudre ?", a: "C'est une charge et un auxiliaire de fabrication bon marché : il garde la poudre fluide, ajuste la densité et facilite l'atomisation. Il n'apporte pas de pouvoir lavant, d'où le prix plus bas des poudres très chargées." },
      { q: "Que vérifier sur le COA du sulfate de sodium ?", a: "La pureté (les qualités anhydres titrent souvent 99 % min.), la blancheur, le pH et l'humidité. Une blancheur faible grise les poudres blanches." },
    ],
    ar: [
      { q: "لماذا توجد كبريتات الصوديوم في مسحوق الغسيل؟", a: "هي مادة مالئة ومساعدة تصنيع منخفضة التكلفة: تحافظ على انسياب المسحوق وتضبط الكثافة وتسهّل التجفيف بالرذاذ. لا تضيف قوة تنظيف، ولهذا تكون المساحيق عالية الحشو أرخص." },
      { q: "ماذا أراجع في شهادة COA لكبريتات الصوديوم؟", a: "النقاوة (الدرجات اللامائية غالباً 99% كحد أدنى) ودرجة البياض والأس الهيدروجيني والرطوبة. البياض المنخفض يجعل المساحيق البيضاء تبدو رمادية." },
    ],
  },
  "color-speckles": {
    en: [
      { q: "Will colour speckles stain clothes?", a: "They shouldn't. The dyes are chosen to dissolve in the wash without bleeding onto fabric. Ask the supplier for a bleed test on white cotton before your first order." },
      { q: "Can you match our brand colours?", a: "Yes. Send a Pantone reference or a physical sample, plus the speckle size (mesh) and base you want. Suppliers usually make a sample batch for approval." },
    ],
    fr: [
      { q: "Les mouchetures colorées tachent-elles le linge ?", a: "Normalement non : les colorants sont choisis pour se dissoudre dans le lavage sans dégorger. Demandez un test de dégorgement sur coton blanc avant la première commande." },
      { q: "Pouvez-vous reproduire nos couleurs de marque ?", a: "Oui. Envoyez une référence Pantone ou un échantillon, la taille (mesh) et la base souhaitées. Les fournisseurs produisent en général un lot d'essai à valider." },
    ],
    ar: [
      { q: "هل تصبغ الحبيبات الملوّنة الملابس؟", a: "يُفترض ألا تفعل، فالأصباغ مختارة لتذوب أثناء الغسيل دون أن تنزف على القماش. اطلب من المورد اختبار نزف على قطن أبيض قبل أول طلبية." },
      { q: "هل يمكن مطابقة ألوان علامتنا التجارية؟", a: "نعم. أرسل مرجع Pantone أو عينة فعلية مع حجم الحبيبات (المش) والقاعدة المطلوبة، ويصنع الموردون عادةً دفعة تجريبية للموافقة." },
    ],
  },
  "optical-brightener-cbs-x": {
    en: [
      { q: "CBS-X or a stilbene brightener (e.g. 33 / CF)?", a: "CBS-X costs more but works at low wash temperatures, dissolves quickly and resists chlorine bleach. Stilbene types are cheaper and common in economy powders. Many formulators blend the two." },
      { q: "Can CBS-X be used in liquid detergent?", a: "Yes. It dissolves well and is commonly used in liquids. Add it as a pre-dissolved solution and check that the final product stays clear and stable in storage." },
    ],
    fr: [
      { q: "CBS-X ou azurant stilbène (ex. 33 / CF) ?", a: "Le CBS-X coûte plus cher mais agit à basse température, se dissout vite et résiste au chlore. Les stilbènes sont moins chers et courants dans les lessives économiques. Beaucoup de formulateurs mélangent les deux." },
      { q: "Peut-on utiliser le CBS-X dans une lessive liquide ?", a: "Oui. Il se dissout bien et est couramment utilisé dans les liquides. Ajoutez-le pré-dissous et vérifiez que le produit fini reste limpide et stable au stockage." },
    ],
    ar: [
      { q: "CBS-X أم مبيّض ستيلبين (مثل 33 أو CF)؟", a: "CBS-X أغلى لكنه يعمل في درجات غسيل منخفضة ويذوب بسرعة ويقاوم مبيّض الكلور. أنواع الستيلبين أرخص وشائعة في المساحيق الاقتصادية، ويخلط كثير من المصنّعين النوعين." },
      { q: "هل يمكن استخدام CBS-X في المنظفات السائلة؟", a: "نعم، فهو يذوب جيداً ويُستخدم كثيراً في السوائل. أضفه كمحلول مُذاب مسبقاً وتأكد أن المنتج النهائي يبقى شفافاً وثابتاً أثناء التخزين." },
    ],
  },
  "labsa-96": {
    en: [
      { q: "How much caustic soda neutralises LABSA 96%?", a: "Roughly 0.12 kg of 100% NaOH per kg of LABSA 96%, based on molecular weights. In practice, add caustic gradually and titrate to your target pH, because free sulphuric acid and actual active content vary by batch." },
      { q: "How should LABSA be stored?", a: "In HDPE or stainless-steel tanks or drums, not carbon steel, which corrodes. The colour darkens slowly with age, so ask for the production date and use older stock first." },
    ],
    fr: [
      { q: "Combien de soude caustique pour neutraliser le LABSA 96 % ?", a: "Environ 0,12 kg de NaOH à 100 % par kg de LABSA 96 %, d'après les masses molaires. En pratique, ajoutez la soude progressivement et titrez jusqu'au pH visé, car l'acide sulfurique libre et la matière active varient selon le lot." },
      { q: "Comment stocker le LABSA ?", a: "En cuves ou fûts en PEHD ou inox, pas en acier au carbone qui se corrode. La couleur fonce lentement avec le temps : demandez la date de production et utilisez d'abord le stock le plus ancien." },
    ],
    ar: [
      { q: "كم يلزم من الصودا الكاوية لمعادلة LABSA 96%؟", a: "نحو 0.12 كغ من NaOH بتركيز 100% لكل كيلوغرام LABSA 96%، حسب الأوزان الجزيئية. وعملياً أضف الصودا تدريجياً وعايِر حتى الأس الهيدروجيني المطلوب، لأن حمض الكبريتيك الحر والمادة الفعالة يختلفان من دفعة لأخرى." },
      { q: "كيف يُخزَّن LABSA؟", a: "في خزانات أو براميل من البولي إيثيلين عالي الكثافة أو الفولاذ المقاوم للصدأ، لا الفولاذ الكربوني الذي يتآكل. ويغمق لونه ببطء مع الوقت، فاطلب تاريخ الإنتاج واستخدم المخزون الأقدم أولاً." },
    ],
  },
  "benzalkonium-chloride": {
    en: [
      { q: "BKC 50% or 80%?", a: "It is the same active. 80% saves freight and packaging per kg of active, and you dilute it on arrival. 50% is easier to handle and dose directly." },
      { q: "Can BKC be mixed with SLES or LABSA?", a: "No. BKC is cationic and reacts with anionic surfactants such as SLES and LABSA, so both lose activity. Formulate it with nonionic (AEO, APG) or amphoteric surfactants instead." },
    ],
    fr: [
      { q: "BKC 50 % ou 80 % ?", a: "C'est le même actif. Le 80 % économise fret et emballage par kg d'actif, et se dilue à l'arrivée. Le 50 % se manipule et se dose plus facilement tel quel." },
      { q: "Peut-on mélanger le BKC avec du SLES ou du LABSA ?", a: "Non. Le BKC est cationique et réagit avec les tensioactifs anioniques comme le SLES et le LABSA : les deux perdent leur efficacité. Associez-le à des tensioactifs non ioniques (AEO, APG) ou amphotères." },
    ],
    ar: [
      { q: "BKC بتركيز 50% أم 80%؟", a: "المادة الفعالة واحدة. تركيز 80% يوفر الشحن والتعبئة لكل كيلوغرام مادة فعالة ويُخفَّف عند الوصول، أما 50% فأسهل في التداول والجرعات المباشرة." },
      { q: "هل يمكن خلط BKC مع SLES أو LABSA؟", a: "لا. BKC كاتيوني ويتفاعل مع المواد الأنيونية مثل SLES وLABSA فيفقد الطرفان فعاليتهما. ركّبه مع مواد غير أيونية (AEO وAPG) أو مذبذبة الشحنة بدلاً من ذلك." },
    ],
  },
  glycerin: {
    en: [
      { q: "USP or technical glycerin?", a: "USP (99.5%+) is required for cosmetics, personal care and pharmaceuticals. Technical or crude glycerin (around 80%) is cheaper and fine for some industrial uses, but not for products in contact with skin." },
      { q: "Can I get halal or vegetable-origin glycerin?", a: "Yes. Ask the supplier to state the origin (vegetable, e.g. palm, or synthetic) and for a halal or kosher certificate if your market requires one. Availability depends on the producer." },
    ],
    fr: [
      { q: "Glycérine USP ou technique ?", a: "La qualité USP (99,5 %+) est exigée pour la cosmétique, l'hygiène et la pharmacie. La glycérine technique ou brute (environ 80 %) est moins chère et convient à certains usages industriels, pas aux produits au contact de la peau." },
      { q: "Peut-on obtenir une glycérine halal ou d'origine végétale ?", a: "Oui. Demandez au fournisseur d'indiquer l'origine (végétale, par exemple palme, ou synthétique) et un certificat halal ou casher si votre marché l'exige. La disponibilité dépend du producteur." },
    ],
    ar: [
      { q: "جلسرين USP أم صناعي؟", a: "درجة USP (99.5% فأكثر) مطلوبة لمستحضرات التجميل والعناية الشخصية والأدوية. أما الجلسرين الصناعي أو الخام (نحو 80%) فأرخص ويصلح لبعض الاستخدامات الصناعية، لا للمنتجات الملامسة للبشرة." },
      { q: "هل يتوفر جلسرين حلال أو نباتي المصدر؟", a: "نعم. اطلب من المورد تحديد المصدر (نباتي كزيت النخيل أو صناعي) وشهادة حلال أو كوشر إذا اشترطها سوقك. ويعتمد التوفر على المنتِج." },
    ],
  },
  "citric-acid": {
    en: [
      { q: "Anhydrous or monohydrate citric acid?", a: "Both are the same acid. Monohydrate contains one water molecule, so it is about 91% citric acid by weight: you need roughly 9% more of it for the same effect. Compare prices on that basis." },
      { q: "How do I stop citric acid caking?", a: "Keep bags sealed in a dry, cool store and use the oldest stock first. 25 kg bags should have a PE liner. Caking does not change purity but makes dosing harder." },
    ],
    fr: [
      { q: "Acide citrique anhydre ou monohydraté ?", a: "C'est le même acide. Le monohydraté contient une molécule d'eau et titre donc environ 91 % d'acide citrique en masse : il en faut environ 9 % de plus pour le même effet. Comparez les prix sur cette base." },
      { q: "Comment éviter que l'acide citrique ne prenne en masse ?", a: "Gardez les sacs fermés dans un local sec et frais et utilisez d'abord le stock le plus ancien. Les sacs de 25 kg doivent avoir une doublure PE. La prise en masse ne change pas la pureté mais gêne le dosage." },
    ],
    ar: [
      { q: "حمض الستريك اللامائي أم أحادي الماء؟", a: "كلاهما الحمض نفسه. أحادي الماء يحتوي جزيء ماء، فنسبة حمض الستريك فيه نحو 91% وزناً: تحتاج منه نحو 9% أكثر للحصول على التأثير نفسه. قارن الأسعار على هذا الأساس." },
      { q: "كيف أمنع تكتّل حمض الستريك؟", a: "احفظ الأكياس مغلقة في مخزن جاف وبارد واستخدم المخزون الأقدم أولاً. ويجب أن تحتوي أكياس 25 كغ على بطانة بولي إيثيلين. التكتل لا يغيّر النقاوة لكنه يصعّب الجرعات." },
    ],
  },
  edta: {
    en: [
      { q: "EDTA-2Na or EDTA-4Na?", a: "Choose by your product's pH. A 1% solution of disodium EDTA is mildly acidic (about pH 4–5), while tetrasodium EDTA is alkaline (about pH 10–11). Use 2Na in neutral or slightly acidic personal care, and 4Na in alkaline detergents and cleaners." },
      { q: "How much EDTA do I need?", a: "Usually very little, typically around 0.05–0.2% in liquid soaps and detergents. Raise it for very hard water, then confirm by testing clarity and stability." },
    ],
    fr: [
      { q: "EDTA-2Na ou EDTA-4Na ?", a: "Choisissez selon le pH du produit. Une solution à 1 % d'EDTA disodique est légèrement acide (pH 4–5 environ), l'EDTA tétrasodique est alcalin (pH 10–11 environ). Le 2Na pour l'hygiène neutre ou légèrement acide, le 4Na pour les détergents et nettoyants alcalins." },
      { q: "Quelle quantité d'EDTA faut-il ?", a: "Très peu : en général autour de 0,05–0,2 % dans les savons liquides et détergents. Augmentez pour une eau très dure, puis confirmez par des tests de limpidité et de stabilité." },
    ],
    ar: [
      { q: "EDTA-2Na أم EDTA-4Na؟", a: "اختر حسب الأس الهيدروجيني لمنتجك. محلول 1% من EDTA ثنائي الصوديوم حمضي قليلاً (pH نحو 4–5)، أما رباعي الصوديوم فقلوي (pH نحو 10–11). استخدم 2Na في منتجات العناية المتعادلة أو الحمضية قليلاً، و4Na في المنظفات القلوية." },
      { q: "ما الكمية المطلوبة من EDTA؟", a: "قليلة جداً، عادةً نحو 0.05–0.2% في الصابون السائل والمنظفات. زِدها في الماء شديد العسر ثم تأكد باختبار الشفافية والثبات." },
    ],
  },
  "pac-polyaluminium-chloride": {
    en: [
      { q: "White, yellow or brown PAC: what is the difference?", a: "White PAC is the purest and is used for drinking water, paper and some cosmetics. Yellow PAC is the common drinking-water and municipal grade. Brown (dark-yellow) PAC is made from cheaper raw materials and is used for wastewater only." },
      { q: "What is basicity and why does it matter?", a: "Basicity shows how much the PAC is pre-neutralised. Higher basicity lowers water pH less and needs less alkali correction. Ask for Al₂O₃, basicity and water-insolubles on every COA." },
    ],
    fr: [
      { q: "PAC blanc, jaune ou brun : quelle différence ?", a: "Le PAC blanc est le plus pur : eau potable, papier et certains cosmétiques. Le jaune est la qualité courante pour l'eau potable et municipale. Le brun (jaune foncé) est fabriqué à partir de matières premières moins chères et réservé aux eaux usées." },
      { q: "Qu'est-ce que la basicité et pourquoi compte-t-elle ?", a: "La basicité indique le degré de pré-neutralisation du PAC. Plus elle est élevée, moins le pH de l'eau baisse et moins il faut corriger l'alcalinité. Demandez l'Al₂O₃, la basicité et les insolubles sur chaque COA." },
    ],
    ar: [
      { q: "PAC أبيض أم أصفر أم بني: ما الفرق؟", a: "PAC الأبيض هو الأنقى ويُستخدم لمياه الشرب والورق وبعض مستحضرات التجميل. الأصفر هو الدرجة الشائعة لمياه الشرب والمياه البلدية. أما البني (الأصفر الداكن) فمصنوع من خامات أرخص ويُستخدم لمياه الصرف فقط." },
      { q: "ما القاعدية (Basicity) ولماذا تهم؟", a: "تُظهر القاعدية مدى المعادلة المسبقة لـ PAC. كلما ارتفعت قلّ انخفاض الأس الهيدروجيني للماء وقلّت الحاجة لتصحيح القلوية. اطلب نسبة Al₂O₃ والقاعدية والمواد غير الذائبة في كل شهادة COA." },
    ],
  },
  "aluminium-sulphate": {
    en: [
      { q: "Aluminium sulphate or PAC?", a: "Alum costs less per kg but usually needs higher doses, lowers pH more and works in a narrower pH range. PAC flocculates faster and makes less sludge. Many plants compare the cost per m³ of treated water, not per tonne of chemical." },
      { q: "Do I need iron-free aluminium sulphate?", a: "Only where iron would cause colour: white paper, some drinking-water plants and fine chemicals. For wastewater, standard grade is usually enough and cheaper." },
    ],
    fr: [
      { q: "Sulfate d'aluminium ou PAC ?", a: "L'alun coûte moins cher au kg mais demande en général des doses plus fortes, abaisse davantage le pH et fonctionne sur une plage de pH plus étroite. Le PAC flocule plus vite et produit moins de boues. Beaucoup d'usines comparent le coût par m³ d'eau traitée, pas par tonne de produit." },
      { q: "Faut-il un sulfate d'aluminium sans fer ?", a: "Seulement si le fer pose un problème de couleur : papier blanc, certaines usines d'eau potable, chimie fine. Pour les eaux usées, la qualité standard suffit en général et coûte moins cher." },
    ],
    ar: [
      { q: "كبريتات الألومنيوم أم PAC؟", a: "الشبّة أرخص لكل كيلوغرام لكنها تحتاج عادةً جرعات أعلى وتخفض الأس الهيدروجيني أكثر وتعمل في مدى pH أضيق. أما PAC فيندّف أسرع وينتج حمأة أقل. وتقارن محطات كثيرة التكلفة لكل متر مكعب من الماء المعالج لا لكل طن من المادة." },
      { q: "هل أحتاج كبريتات ألومنيوم خالية من الحديد؟", a: "فقط حيث يسبب الحديد لوناً: الورق الأبيض وبعض محطات مياه الشرب والكيماويات الدقيقة. أما مياه الصرف فتكفيها عادةً الدرجة القياسية الأرخص." },
    ],
  },
  "activated-carbon": {
    en: [
      { q: "Granular or powdered activated carbon?", a: "Granular carbon (GAC, e.g. 8×30 or 12×40 mesh) goes into filter beds and can be reactivated. Powdered carbon (PAC) is dosed directly into water for seasonal taste, odour or pollution events and is removed with the sludge." },
      { q: "What does the iodine value tell me?", a: "It measures fine-pore (micropore) adsorption capacity: higher means more capacity for small molecules such as chlorine by-products. Compare iodine value, mesh size, hardness and ash together, not price alone." },
    ],
    fr: [
      { q: "Charbon actif en grains ou en poudre ?", a: "Le charbon en grains (CAG, par ex. 8×30 ou 12×40 mesh) se place en lit filtrant et peut être réactivé. Le charbon en poudre se dose directement dans l'eau lors d'épisodes de goût, d'odeur ou de pollution et s'élimine avec les boues." },
      { q: "Que m'indique l'indice d'iode ?", a: "Il mesure la capacité d'adsorption des micropores : plus il est élevé, plus le charbon retient de petites molécules comme les sous-produits du chlore. Comparez indice d'iode, granulométrie, dureté et cendres ensemble, pas seulement le prix." },
    ],
    ar: [
      { q: "كربون منشّط حبيبي أم مسحوق؟", a: "الحبيبي (GAC، مثل 8×30 أو 12×40 مش) يوضع في أحواض الترشيح ويمكن إعادة تنشيطه. أما المسحوق فيُضاف مباشرة إلى الماء عند مشكلات الطعم أو الرائحة أو التلوث الموسمية ويُزال مع الحمأة." },
      { q: "ماذا يخبرني رقم اليود؟", a: "يقيس قدرة الامتزاز في المسام الدقيقة: كلما ارتفع زادت قدرة الكربون على حجز الجزيئات الصغيرة مثل نواتج الكلور الثانوية. قارن رقم اليود وحجم الحبيبات والصلابة ونسبة الرماد معاً، لا السعر وحده." },
    ],
  },
  "polyacrylamide-pam": {
    en: [
      { q: "Which PAM type do I need?", a: "As a rule, anionic PAM works on mineral particles (mining, sand washing, clarification after PAC), and cationic PAM works on organic sludge (sewage, food and paper effluent). Send a water or sludge sample, or run a jar test with 2–3 grades before ordering." },
      { q: "How do I dissolve PAM powder?", a: "Sprinkle it slowly into the vortex of stirred water to make about a 0.1–0.3% solution, then stir gently for 40–60 minutes. Dumping powder in creates lumps ('fish eyes') that never dissolve." },
    ],
    fr: [
      { q: "Quel type de PAM me faut-il ?", a: "En règle générale, le PAM anionique agit sur les particules minérales (mines, lavage de sable, clarification après PAC) et le PAM cationique sur les boues organiques (eaux usées urbaines, effluents agroalimentaires et papetiers). Envoyez un échantillon ou faites un jar-test avec 2–3 qualités avant de commander." },
      { q: "Comment dissoudre le PAM en poudre ?", a: "Saupoudrez-le lentement dans le vortex d'une eau agitée pour obtenir une solution d'environ 0,1–0,3 %, puis agitez doucement 40 à 60 minutes. Verser la poudre d'un coup forme des grumeaux (« yeux de poisson ») qui ne se dissolvent jamais." },
    ],
    ar: [
      { q: "أي نوع من PAM أحتاج؟", a: "كقاعدة عامة، يعمل PAM الأنيوني على الجسيمات المعدنية (التعدين وغسيل الرمل والترويق بعد PAC)، ويعمل PAM الكاتيوني على الحمأة العضوية (مياه الصرف الصحي ومخلفات الأغذية والورق). أرسل عينة ماء أو حمأة أو أجرِ اختبار جرة على 2–3 درجات قبل الطلب." },
      { q: "كيف أذيب مسحوق PAM؟", a: "انثره ببطء في دوامة ماء مُحرَّك للحصول على محلول بتركيز نحو 0.1–0.3%، ثم حرّك بلطف 40–60 دقيقة. إلقاء المسحوق دفعة واحدة يكوّن كتلاً (\"عيون السمك\") لا تذوب أبداً." },
    ],
  },
  bentonite: {
    en: [
      { q: "Sodium or calcium bentonite?", a: "Sodium bentonite swells much more and is used for drilling mud, sealing and slurry walls. Calcium bentonite swells less and is used in foundry sand, absorbents and as a coagulation aid. Soda-activated calcium bentonite sits in between." },
      { q: "Which bentonite specs should I compare?", a: "Swell index, viscosity (for drilling), moisture and particle size (mesh). For water treatment also check that heavy-metal content is acceptable for your application." },
    ],
    fr: [
      { q: "Bentonite sodique ou calcique ?", a: "La bentonite sodique gonfle beaucoup plus : boues de forage, étanchéité, parois moulées. La calcique gonfle moins : sables de fonderie, absorbants, adjuvant de coagulation. La calcique activée au sodium se situe entre les deux." },
      { q: "Quelles spécifications comparer ?", a: "L'indice de gonflement, la viscosité (pour le forage), l'humidité et la granulométrie (mesh). En traitement de l'eau, vérifiez aussi que la teneur en métaux lourds convient à votre usage." },
    ],
    ar: [
      { q: "بنتونيت صوديومي أم كالسيومي؟", a: "الصوديومي ينتفخ أكثر بكثير ويُستخدم في طين الحفر والعزل والجدران الطينية. الكالسيومي أقل انتفاخاً ويُستخدم في رمل المسابك والمواد الماصة وكمساعد تخثير. أما الكالسيومي المنشّط بالصوديوم فيقع بينهما." },
      { q: "ما مواصفات البنتونيت التي أقارنها؟", a: "مؤشر الانتفاخ واللزوجة (للحفر) والرطوبة وحجم الحبيبات (المش). وفي معالجة المياه تحقق أيضاً من أن نسبة المعادن الثقيلة مقبولة لاستخدامك." },
    ],
  },
};
