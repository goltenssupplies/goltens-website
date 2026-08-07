import type { Product } from "@/data/products/types";

/**
 * Fire Protection → Fire Pumps category. The reference implementation
 * proving the Product Engine end to end: real content migrated from the
 * previous session's `SectorProduct` entries, extended with the fields a
 * standalone detail page needs (long description, catalogues, related
 * products/articles, FAQ on the flagship product).
 */
export const fireProtectionFirePumps: Product[] = [
  {
    id: "fire-pumps",
    slug: "fire-pumps",
    name_en: "Fire Pumps",
    name_ar: "مضخات الحريق",
    shortDescription_en: "Fire pump sets matched to your system's flow and pressure requirements.",
    shortDescription_ar: "مجموعات مضخات حريق مطابقة لمتطلبات التدفق والضغط في نظامكم.",
    longDescription_en:
      "Fire pump sets are the core of a pressurized fire protection system, supplying the flow and pressure your sprinklers, hydrants, and hose reels depend on. We source electric and diesel-driven sets in horizontal split-case, end-suction, and vertical turbine configurations, matched to the flow and pressure your hydraulic calculations call for.",
    longDescription_ar:
      "تُعد مجموعات مضخات الحريق العنصر الأساسي في أي نظام مكافحة حريق مضغوط، حيث توفر التدفق والضغط اللازمين لرشاشات الإخماد وحنفيات الحريق وبكرات الخراطيم. نقوم بتوريد مجموعات تعمل بالكهرباء والديزل بتكوينات أفقية مشقوقة وشفط طرفي وتوربينية رأسية، مطابقة للتدفق والضغط الذي تحدده حساباتكم الهيدروليكية.",
    sectorId: "fire-protection",
    categoryId: "fire-pumps",
    features_en: ["Electric and diesel-engine driven sets", "Sized to your system's flow and pressure requirements", "Horizontal split-case, end-suction, and vertical turbine configurations"],
    features_ar: ["مجموعات تعمل بالكهرباء أو بمحرك ديزل", "مقاسة وفق متطلبات التدفق والضغط في نظامكم", "تكوينات أفقية مشقوقة، وشفط طرفي، وتوربينية رأسية"],
    specifications: [{ label_en: "Drive type", label_ar: "نوع التشغيل", value: "Electric / Diesel" }],
    relatedProductSlugs: ["fire-pump-controllers", "diesel-engines", "electric-motors", "jockey-pumps"],
    relatedBrandSlugs: ["peerless", "aurora", "tyco"],
    relatedArticleSlugs: ["how-to-choose-fire-pumps", "fire-pump-selection-guide", "nfpa-standards-explained"],
    catalogues: [
      { id: "fire-pumps-datasheet", title_en: "Fire Pumps Datasheet", title_ar: "نشرة بيانات مضخات الحريق", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    faq: [
      {
        question_en: "What determines the right fire pump size for my project?",
        answer_en: "Your system's required flow rate and pressure — calculated from your hydraulic design and hazard classification — determine the pump size. Share these figures with your quotation request and we'll match you to the right configuration.",
        question_ar: "ما الذي يحدد الحجم المناسب لمضخة الحريق لمشروعي؟",
        answer_ar: "يحدد معدل التدفق والضغط المطلوبين لنظامكم — والمحسوبين وفق التصميم الهيدروليكي وتصنيف الخطورة — حجم المضخة المناسب. شاركونا هذه الأرقام عند طلب عرض السعر وسنقوم بمطابقتكم مع التكوين المناسب.",
      },
      {
        question_en: "Electric or diesel — which driver type should I choose?",
        answer_en: "This is usually decided by site power reliability: diesel-driven sets are common where continuous grid power can't be guaranteed during a fire event. Your fire engineer or consultant normally specifies this based on your project's code requirements.",
        question_ar: "كهرباء أم ديزل — ما نوع التشغيل الذي يجب اختياره؟",
        answer_ar: "يُحدَّد ذلك عادةً وفق موثوقية التيار الكهربائي بالموقع: تُستخدم المجموعات التي تعمل بالديزل عادةً حيث لا يمكن ضمان استمرار التيار الكهربائي أثناء حدوث حريق. ويحدد مهندس الحريق أو الاستشاري لديكم ذلك عادةً وفق متطلبات كود مشروعكم.",
      },
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fire-pump-controllers",
    slug: "fire-pump-controllers",
    name_en: "Fire Pump Controllers",
    name_ar: "لوحات تحكم مضخات الحريق",
    shortDescription_en: "Controllers for electric and diesel fire pump sets, matched to your pump's driver type.",
    shortDescription_ar: "لوحات تحكم لمجموعات مضخات الحريق الكهربائية والديزل، مطابقة لنوع محرك مضختكم.",
    longDescription_en:
      "A fire pump controller starts and monitors your pump set automatically on system pressure drop, and reports pump status to your fire alarm system. We source controllers matched to your pump's driver type — electric or diesel — with automatic and manual start configurations.",
    longDescription_ar:
      "تقوم لوحة تحكم مضخة الحريق بتشغيل ومراقبة مجموعة المضخة تلقائيًا عند انخفاض ضغط النظام، وإبلاغ نظام إنذار الحريق بحالة المضخة. نقوم بتوريد لوحات تحكم مطابقة لنوع محرك مضختكم — كهربائي أو ديزل — بتكوينات تشغيل تلقائي ويدوي.",
    sectorId: "fire-protection",
    categoryId: "fire-pumps",
    features_en: ["Electric and diesel controller options", "Automatic and manual start configurations"],
    features_ar: ["خيارات لوحات تحكم كهربائية وديزل", "تكوينات تشغيل تلقائي ويدوي"],
    relatedProductSlugs: ["fire-pumps", "diesel-engines", "electric-motors"],
    relatedBrandSlugs: ["potter", "tyco"],
    relatedArticleSlugs: ["how-to-choose-fire-pumps"],
    catalogues: [
      { id: "fire-pump-controllers-datasheet", title_en: "Fire Pump Controllers Datasheet", title_ar: "نشرة بيانات لوحات تحكم المضخات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "diesel-engines",
    slug: "diesel-engines",
    name_en: "Diesel Engines",
    name_ar: "محركات الديزل",
    shortDescription_en: "Diesel engines for fire pump sets, sourced to match your pump's power requirement.",
    shortDescription_ar: "محركات ديزل لمجموعات مضخات الحريق، يتم توريدها وفق متطلبات القدرة لمضختكم.",
    longDescription_en:
      "Diesel engines drive fire pump sets independently of grid power, which is why they're specified where continuous electrical supply can't be guaranteed during a fire event. We source engines matched to your pump's power requirement and your project's fuel and cooling arrangement.",
    longDescription_ar:
      "تقوم محركات الديزل بتشغيل مجموعات مضخات الحريق بشكل مستقل عن التيار الكهربائي العام، ولهذا يتم تحديدها في الحالات التي لا يمكن فيها ضمان استمرار التغذية الكهربائية أثناء حدوث حريق. نقوم بتوريد محركات مطابقة لمتطلبات القدرة لمضختكم وترتيبات الوقود والتبريد الخاصة بمشروعكم.",
    sectorId: "fire-protection",
    categoryId: "fire-pumps",
    relatedProductSlugs: ["fire-pumps", "fire-pump-controllers"],
    relatedBrandSlugs: ["clarke"],
    catalogues: [
      { id: "diesel-engines-datasheet", title_en: "Diesel Engines Datasheet", title_ar: "نشرة بيانات محركات الديزل", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "electric-motors",
    slug: "electric-motors",
    name_en: "Electric Motors",
    name_ar: "المحركات الكهربائية",
    shortDescription_en: "Electric motors for fire pump sets, matched to your pump's power and voltage requirements.",
    shortDescription_ar: "محركات كهربائية لمجموعات مضخات الحريق، مطابقة لمتطلبات القدرة والجهد لمضختكم.",
    longDescription_en:
      "Electric motors drive fire pump sets where continuous grid power meets your project's code requirements. We source motors matched to your pump's power and voltage requirements, and coordinated with your chosen controller.",
    longDescription_ar:
      "تقوم المحركات الكهربائية بتشغيل مجموعات مضخات الحريق في الحالات التي يفي فيها التيار الكهربائي العام المستمر بمتطلبات كود مشروعكم. نقوم بتوريد محركات مطابقة لمتطلبات القدرة والجهد لمضختكم، ومنسقة مع لوحة التحكم المختارة.",
    sectorId: "fire-protection",
    categoryId: "fire-pumps",
    relatedProductSlugs: ["fire-pumps", "fire-pump-controllers"],
    catalogues: [
      { id: "electric-motors-datasheet", title_en: "Electric Motors Datasheet", title_ar: "نشرة بيانات المحركات الكهربائية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "jockey-pumps",
    slug: "jockey-pumps",
    name_en: "Jockey Pumps",
    name_ar: "المضخات التعويضية (Jockey)",
    shortDescription_en: "Pressure-maintenance jockey pumps for fire protection systems.",
    shortDescription_ar: "مضخات تعويضية للحفاظ على ضغط أنظمة مكافحة الحريق.",
    longDescription_en:
      "A jockey pump maintains system pressure between fire events, preventing minor leaks or pressure fluctuation from triggering your main fire pump unnecessarily. We source jockey pumps sized to your system's makeup-water requirement.",
    longDescription_ar:
      "تحافظ المضخة التعويضية (Jockey) على ضغط النظام بين حالات الحريق، مما يمنع التسريبات الطفيفة أو تذبذب الضغط من تشغيل مضخة الحريق الرئيسية دون داعٍ. نقوم بتوريد مضخات تعويضية مقاسة وفق متطلبات تعويض المياه لنظامكم.",
    sectorId: "fire-protection",
    categoryId: "fire-pumps",
    relatedProductSlugs: ["fire-pumps", "fire-pump-controllers"],
    relatedBrandSlugs: ["peerless", "aurora"],
    catalogues: [
      { id: "jockey-pumps-datasheet", title_en: "Jockey Pumps Datasheet", title_ar: "نشرة بيانات المضخات التعويضية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
