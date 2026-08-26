import type { Product } from "@/data/products/types";

/** Fire Protection → Suppression Systems category. */
export const fireProtectionSuppressionSystems: Product[] = [
  {
    id: "gas-suppression",
    slug: "gas-suppression",
    name_en: "Gas Suppression",
    name_ar: "أنظمة الإخماد بالغاز",
    shortDescription_en:
      "Clean agent gas suppression systems for critical, equipment-sensitive spaces.",
    shortDescription_ar:
      "أنظمة إخماد بالغاز النظيف للمساحات الحساسة والمعدات الحرجة.",
    longDescription_en:
      "Gas suppression systems extinguish fire without water or residue, protecting equipment-sensitive spaces where a water-based system would cause its own damage. We source systems sized to your room's protected volume across a range of clean agents.",
    longDescription_ar:
      "تعمل أنظمة الإخماد بالغاز على إخماد الحريق دون استخدام المياه أو ترك بقايا، مما يحمي المساحات الحساسة للمعدات حيث قد يتسبب النظام المعتمد على المياه في أضرار إضافية. نقوم بتوريد أنظمة مقاسة وفق الحجم المحمي لغرفتكم عبر مجموعة من الغازات النظيفة.",
    sectorId: "fire-protection",
    categoryId: "suppression-systems",
    features_en: [
      "Range of clean agents matched to your room and hazard",
      "Automatic and manual release with cross-zoned detection",
      "No residue, safe for sensitive electronic equipment",
    ],
    features_ar: [
      "مجموعة من الغازات النظيفة مطابقة لغرفتكم ومستوى الخطورة",
      "تشغيل تلقائي ويدوي مع كشف مزدوج المناطق",
      "دون بقايا، آمن للمعدات الإلكترونية الحساسة",
    ],
    applications_en: [
      "Server rooms and data centers",
      "Electrical and control rooms",
      "Marine and offshore equipment spaces",
      "Archive and heritage collection storage",
    ],
    applications_ar: [
      "غرف السيرفرات ومراكز البيانات",
      "الغرف الكهربائية وغرف التحكم",
      "مساحات المعدات البحرية والمنصات البحرية",
      "مخازن الأرشيف والمقتنيات التراثية",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Discharge time",
        label_ar: "زمن التصريف",
        value:
          "Typically ≤10 seconds to design concentration (agent-dependent)",
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Design concentration",
        label_ar: "تركيز التصميم",
        value: "Calculated per room hazard and agent type, per NFPA 2001",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Detection & release",
        label_ar: "الكشف والتحرير",
        value:
          "Cross-zoned smoke/heat detection with automatic and manual release",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically designed to NFPA 2001 / ISO 14520",
      },
    ],
    relatedProductSlugs: ["fm200", "novec-1230", "co2-systems"],
    relatedBrandSlugs: ["minimax", "johnson-controls"],
    catalogues: [
      {
        id: "gas-suppression-datasheet",
        title_en: "Gas Suppression Datasheet",
        title_ar: "نشرة بيانات أنظمة الإخماد بالغاز",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "novec-1230",
    slug: "novec-1230",
    name_en: "NOVEC 1230",
    name_ar: "نظام NOVEC 1230",
    shortDescription_en:
      "NOVEC 1230 clean agent suppression systems as a low-GWP alternative for sensitive equipment areas.",
    shortDescription_ar:
      "أنظمة إخماد بغاز NOVEC 1230 النظيف كبديل منخفض التأثير البيئي لمناطق المعدات الحساسة.",
    longDescription_en:
      "NOVEC 1230 is a clean agent suppression system with a very low global warming potential and short atmospheric lifetime compared to older agents, while still protecting equipment-sensitive spaces without water or residue. We size cylinder banks to your room's protected volume.",
    longDescription_ar:
      "يُعد NOVEC 1230 نظام إخماد بالغاز النظيف ذا إمكانية احترار عالمي منخفضة جدًا وعمر بقاء قصير في الغلاف الجوي مقارنة بالغازات الأقدم، مع استمراره في حماية المساحات الحساسة للمعدات دون مياه أو بقايا. نقوم بتحديد حجم أسطوانات الغاز وفق الحجم المحمي لغرفتكم.",
    sectorId: "fire-protection",
    categoryId: "suppression-systems",
    features_en: [
      "Very low global warming potential (GWP) versus older clean agents",
      "Extinguishes in seconds without leaving residue",
      "Large safety margin at typical design concentrations",
    ],
    features_ar: [
      "إمكانية احترار عالمي منخفضة جدًا مقارنة بالغازات النظيفة الأقدم",
      "يخمد الحريق خلال ثوانٍ دون ترك بقايا",
      "هامش أمان كبير عند تركيزات التصميم المعتادة",
    ],
    applications_en: [
      "Data centers and server rooms",
      "Telecommunications and control rooms",
      "Facilities prioritizing low-GWP agent selection",
      "Museums, archives, and heritage sites",
    ],
    applications_ar: [
      "مراكز البيانات وغرف السيرفرات",
      "غرف الاتصالات والتحكم",
      "المنشآت التي تُولي أولوية لاختيار غاز منخفض التأثير البيئي",
      "المتاحف والأرشيفات والمواقع التراثية",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Discharge time",
        label_ar: "زمن التصريف",
        value: "Typically ≤10 seconds to design concentration",
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Design concentration",
        label_ar: "تركيز التصميم",
        value: "Typically 4 – 6% by volume, per NFPA 2001 calculation",
      },
      {
        group_en: "Environmental",
        group_ar: "البيئية",
        label_en: "Global warming potential",
        label_ar: "إمكانية الاحترار العالمي",
        value: "Less than 1 — among the lowest of available clean agents",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically designed to NFPA 2001 / ISO 14520-5",
      },
    ],
    relatedProductSlugs: ["fm200", "gas-suppression", "co2-systems"],
    relatedBrandSlugs: ["minimax", "johnson-controls", "3m"],
    relatedArticleSlugs: ["fm200-vs-novec-1230"],
    catalogues: [
      {
        id: "novec-1230-datasheet",
        title_en: "NOVEC 1230 Datasheet",
        title_ar: "نشرة بيانات نظام NOVEC 1230",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "co2-systems",
    slug: "co2-systems",
    name_en: "CO2 Systems",
    name_ar: "أنظمة ثاني أكسيد الكربون",
    shortDescription_en:
      "CO2 suppression systems for high-hazard industrial and process areas.",
    shortDescription_ar:
      "أنظمة إخماد بثاني أكسيد الكربون لمناطق الخطورة الصناعية العالية.",
    longDescription_en:
      "CO2 suppression systems displace oxygen to extinguish fire in high-hazard industrial and process areas — typically unoccupied spaces given the agent's own safety requirements. We source systems sized to your enclosure's volume.",
    longDescription_ar:
      "تعمل أنظمة الإخماد بثاني أكسيد الكربون على إزاحة الأكسجين لإخماد الحريق في مناطق الخطورة الصناعية والعمليات العالية — وهي عادةً مساحات غير مأهولة نظرًا لمتطلبات السلامة الخاصة بالغاز نفسه. نقوم بتوريد أنظمة مقاسة وفق حجم الحيز لديكم.",
    sectorId: "fire-protection",
    categoryId: "suppression-systems",
    features_en: [
      "High-pressure and low-pressure storage configurations",
      "Total flooding and local application arrangements",
      "Pre-discharge alarm and time-delay for personnel evacuation",
    ],
    features_ar: [
      "تكوينات تخزين بضغط عالٍ ومنخفض",
      "ترتيبات الإغراق الكلي والتطبيق الموضعي",
      "إنذار ما قبل التصريف وتأخير زمني لإخلاء الأفراد",
    ],
    applications_en: [
      "Turbine and generator enclosures",
      "Paint spray booths and flammable liquid process areas",
      "Cable tunnels and electrical vaults",
      "Unoccupied industrial process and storage areas",
    ],
    applications_ar: [
      "أغلفة التوربينات والمولدات",
      "غرف رش الدهان ومناطق العمليات ذات السوائل القابلة للاشتعال",
      "أنفاق الكابلات والغرف الكهربائية",
      "مناطق العمليات والتخزين الصناعية غير المأهولة",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Design concentration",
        label_ar: "تركيز التصميم",
        value:
          "Typically 34% or higher by volume, hazard-dependent, per NFPA 12",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Storage",
        label_ar: "التخزين",
        value:
          "High-pressure cylinders or low-pressure refrigerated bulk storage",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Application method",
        label_ar: "طريقة التطبيق",
        value: "Total flooding or local application",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically designed to NFPA 12",
      },
    ],
    relatedProductSlugs: ["gas-suppression", "fm200"],
    relatedBrandSlugs: ["minimax"],
    catalogues: [
      {
        id: "co2-systems-datasheet",
        title_en: "CO2 Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة ثاني أكسيد الكربون",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "foam-systems",
    slug: "foam-systems",
    name_en: "Foam Systems",
    name_ar: "أنظمة الرغوة",
    shortDescription_en:
      "Foam suppression systems for flammable liquid and high-hazard fire risks.",
    shortDescription_ar:
      "أنظمة إخماد بالرغوة لمخاطر الحرائق الناتجة عن السوائل القابلة للاشتعال والمخاطر العالية.",
    longDescription_en:
      "Foam suppression systems blanket flammable liquid surfaces to cut off oxygen and suppress vapor, protecting tank farms, fuel storage, and other high-hazard risks that water alone can't address. We source systems matched to your hazard classification.",
    longDescription_ar:
      "تعمل أنظمة الإخماد بالرغوة على تغطية أسطح السوائل القابلة للاشتعال لقطع الأكسجين وكبح الأبخرة، مما يحمي مزارع الخزانات ومخازن الوقود والمخاطر العالية الأخرى التي لا تكفي المياه وحدها لمعالجتها. نقوم بتوريد أنظمة مطابقة لتصنيف الخطورة لديكم.",
    sectorId: "fire-protection",
    categoryId: "suppression-systems",
    features_en: [
      "Foam concentrate matched to fuel type — hydrocarbon or polar solvent",
      "Fixed pourer, monitor, and sprinkler-foam combination systems",
      "Proportioning equipment sized to your protected area",
    ],
    features_ar: [
      "مركز رغوة مطابق لنوع الوقود — هيدروكربوني أو مذيب قطبي",
      "أنظمة صب ثابتة، ومدافع رغوة، وأنظمة مدمجة مع الرش التلقائي",
      "معدات تحديد النسبة مقاسة وفق المساحة المحمية لديكم",
    ],
    applications_en: [
      "Fuel storage tank farms and loading racks",
      "Aircraft hangars",
      "Flammable liquid warehouses and process areas",
      "Marine engine rooms and helidecks",
    ],
    applications_ar: [
      "مزارع خزانات الوقود ومناطق التحميل",
      "حظائر الطائرات",
      "مستودعات ومناطق عمليات السوائل القابلة للاشتعال",
      "غرف المحركات البحرية ومناصات الهليكوبتر",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Application rate",
        label_ar: "معدل التطبيق",
        value:
          "Typically 4 – 10 L/min/m², hazard and concentrate dependent, per NFPA 11",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Concentrate type",
        label_ar: "نوع المركز",
        value: "AFFF, AR-AFFF, or fluorine-free foam concentrate",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Proportioning",
        label_ar: "تحديد النسبة",
        value: "Fixed in-line eductor, balanced pressure, or bladder tank",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically designed to NFPA 11 / NFPA 16",
      },
    ],
    relatedProductSlugs: ["gas-suppression", "sprinklers"],
    relatedBrandSlugs: ["tyco", "minimax"],
    catalogues: [
      {
        id: "foam-systems-datasheet",
        title_en: "Foam Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة الرغوة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/foam-systems.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
