import type { Product } from "@/data/products/types";

/** Fire Protection → Cabinets category. */
export const fireProtectionCabinets: Product[] = [
  {
    id: "fire-cabinets",
    slug: "fire-cabinets",
    name_en: "Fire Cabinets",
    name_ar: "خزائن الحريق",
    shortDescription_en: "Fire hose and equipment cabinets for accessible, ready-to-use fire response.",
    shortDescription_ar: "خزائن لخراطيم ومعدات الحريق لاستجابة سريعة وجاهزة لمكافحة الحريق.",
    longDescription_en:
      "Fire cabinets keep hose reels, extinguishers, and fire-fighting accessories accessible and protected at fixed points across a building. We source surface-mounted and recessed types, sized to hold the equipment your layout requires.",
    longDescription_ar:
      "تحافظ خزائن الحريق على بكرات الخراطيم والطفايات وملحقات مكافحة الحريق في متناول اليد ومحمية عند نقاط ثابتة في المبنى. نقوم بتوريد الأنواع السطحية والغائرة، بأحجام تتسع للمعدات التي يتطلبها مخططكم.",
    sectorId: "fire-protection",
    categoryId: "cabinets",
    relatedProductSlugs: ["fire-hose-reels", "fire-hoses", "fire-extinguishers"],
    relatedBrandSlugs: ["naffco"],
    catalogues: [
      { id: "fire-cabinets-datasheet", title_en: "Fire Cabinets Datasheet", title_ar: "نشرة بيانات خزائن الحريق", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
