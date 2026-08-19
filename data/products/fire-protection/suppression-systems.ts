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
    relatedProductSlugs: ["fm200", "gas-suppression", "co2-systems"],
    relatedBrandSlugs: ["minimax", "johnson-controls"],
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
