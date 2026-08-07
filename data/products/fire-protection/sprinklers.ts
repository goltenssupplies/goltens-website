import type { Product } from "@/data/products/types";

/** Fire Protection → Sprinklers category. */
export const fireProtectionSprinklers: Product[] = [
  {
    id: "sprinklers",
    slug: "sprinklers",
    name_en: "Sprinklers",
    name_ar: "رشاشات الإخماد التلقائي",
    shortDescription_en: "Automatic sprinkler heads sourced for your building's hazard classification and layout.",
    shortDescription_ar: "رؤوس رش تلقائي يتم توريدها وفق تصنيف الخطورة ومخطط مبناكم.",
    longDescription_en:
      "Automatic sprinklers are the most widely used first line of fire suppression in occupied buildings, activating individually on heat rather than all at once. We source sprinkler heads matched to your building's hazard classification (light, ordinary, or extra hazard) and ceiling layout.",
    longDescription_ar:
      "تُعد رشاشات الإخماد التلقائي خط الدفاع الأول الأكثر استخدامًا لمكافحة الحريق في المباني المأهولة، حيث تعمل كل رأس رش بشكل فردي عند ارتفاع الحرارة وليس دفعة واحدة. نقوم بتوريد رؤوس رش مطابقة لتصنيف الخطورة في مبناكم (خطورة خفيفة أو عادية أو عالية) ومخطط السقف لديكم.",
    sectorId: "fire-protection",
    categoryId: "sprinklers",
    relatedProductSlugs: ["alarm-valves", "fire-cabinets"],
    relatedBrandSlugs: ["tyco", "viking", "reliable", "rapidrop"],
    relatedArticleSlugs: ["nfpa-standards-explained"],
    catalogues: [
      { id: "sprinklers-datasheet", title_en: "Sprinklers Datasheet", title_ar: "نشرة بيانات رشاشات الإخماد", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
