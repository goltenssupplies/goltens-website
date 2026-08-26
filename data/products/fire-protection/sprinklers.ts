import type { Product } from "@/data/products/types";

/** Fire Protection → Sprinklers category. */
export const fireProtectionSprinklers: Product[] = [
  {
    id: "sprinklers",
    slug: "sprinklers",
    name_en: "Sprinklers",
    name_ar: "رشاشات الإخماد التلقائي",
    shortDescription_en:
      "Automatic sprinkler heads sourced for your building's hazard classification and layout.",
    shortDescription_ar:
      "رؤوس رش تلقائي يتم توريدها وفق تصنيف الخطورة ومخطط مبناكم.",
    longDescription_en:
      "Automatic sprinklers are the most widely used first line of fire suppression in occupied buildings, activating individually on heat rather than all at once. We source sprinkler heads matched to your building's hazard classification (light, ordinary, or extra hazard) and ceiling layout.",
    longDescription_ar:
      "تُعد رشاشات الإخماد التلقائي خط الدفاع الأول الأكثر استخدامًا لمكافحة الحريق في المباني المأهولة، حيث تعمل كل رأس رش بشكل فردي عند ارتفاع الحرارة وليس دفعة واحدة. نقوم بتوريد رؤوس رش مطابقة لتصنيف الخطورة في مبناكم (خطورة خفيفة أو عادية أو عالية) ومخطط السقف لديكم.",
    sectorId: "fire-protection",
    categoryId: "sprinklers",
    features_en: [
      "Multiple K-factor and temperature rating options",
      "Pendant, upright, sidewall, and concealed styles",
      "Standard-response and quick-response types",
    ],
    features_ar: [
      "خيارات متعددة لعامل K وتصنيف درجة الحرارة",
      "أنماط معلقة وقائمة وجانبية ومخفية",
      "أنواع استجابة قياسية وسريعة",
    ],
    applications_en: [
      "Light hazard occupancies — offices, hotels, hospitals",
      "Ordinary hazard occupancies — retail, light industrial",
      "Extra hazard and high-piled storage occupancies",
      "Concealed/architectural applications in finished ceilings",
    ],
    applications_ar: [
      "الإشغالات ذات الخطورة الخفيفة — المكاتب والفنادق والمستشفيات",
      "الإشغالات ذات الخطورة العادية — المحلات التجارية والصناعات الخفيفة",
      "إشغالات الخطورة العالية والتخزين المرتفع",
      "التطبيقات المعمارية المخفية في الأسقف المشطبة",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "K-factor range",
        label_ar: "نطاق عامل K",
        value: "Typically K5.6 – K25.2, matched to hazard classification",
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Temperature rating",
        label_ar: "تصنيف درجة الحرارة",
        value:
          "Typically 57°C – 260°C (higher ratings available), color-coded per rating",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Response type",
        label_ar: "نوع الاستجابة",
        value: "Standard-response or quick-response (QR)",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Orientation",
        label_ar: "الاتجاه",
        value: "Pendant / upright / sidewall / concealed",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically listed to UL / FM and specified to NFPA 13",
      },
    ],
    relatedProductSlugs: ["alarm-valves", "fire-cabinets"],
    relatedBrandSlugs: ["tyco", "viking", "reliable", "rapidrop"],
    relatedArticleSlugs: ["nfpa-standards-explained"],
    catalogues: [
      {
        id: "sprinklers-datasheet",
        title_en: "Sprinklers Datasheet",
        title_ar: "نشرة بيانات رشاشات الإخماد",
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
];
