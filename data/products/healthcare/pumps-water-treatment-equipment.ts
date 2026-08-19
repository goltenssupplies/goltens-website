import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Water Treatment Supplies & Equipment category. */
export const healthcarePumpsWaterTreatmentEquipment: Product[] = [
  {
    id: "booster-pump-sets",
    slug: "booster-pump-sets",
    name_en: "Booster Pump Sets",
    name_ar: "طقم مضخات رفع الضغط",
    shortDescription_en: "Booster pump sets for hospital water supply systems.",
    shortDescription_ar: "طقم مضخات رفع ضغط لأنظمة إمداد المياه بالمستشفى.",
    longDescription_en:
      "Booster pump sets for water supply systems, sourced to your building's flow rate, pressure, and duty-standby configuration requirement.",
    longDescription_ar:
      "طقم مضخات رفع ضغط لأنظمة إمداد المياه، يتم توريدها وفق معدل التدفق والضغط وتكوين التشغيل الاحتياطي المطلوب في مبناكم.",
    sectorId: "healthcare",
    categoryId: "pumps-water-treatment-equipment",
    relatedProductSlugs: [
      "water-filtration-treatment-systems",
      "submersible-drainage-pumps",
    ],
    catalogues: [
      {
        id: "booster-pump-sets-datasheet",
        title_en: "Booster Pump Sets Datasheet",
        title_ar: "نشرة بيانات طقم مضخات رفع الضغط",
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
    id: "water-filtration-treatment-systems",
    slug: "water-filtration-treatment-systems",
    name_en: "Water Filtration & Treatment Systems",
    name_ar: "أنظمة ترشيح ومعالجة المياه",
    shortDescription_en:
      "Filtration and treatment systems for hospital water quality.",
    shortDescription_ar: "أنظمة ترشيح ومعالجة لضبط جودة المياه بالمستشفى.",
    longDescription_en:
      "Water filtration and treatment systems for water quality management, sourced to your raw water characteristics and required output quality.",
    longDescription_ar:
      "أنظمة ترشيح ومعالجة مياه لإدارة جودة المياه، يتم توريدها وفق خصائص المياه الخام وجودة المخرجات المطلوبة لديكم.",
    sectorId: "healthcare",
    categoryId: "pumps-water-treatment-equipment",
    relatedProductSlugs: ["booster-pump-sets", "submersible-drainage-pumps"],
    catalogues: [
      {
        id: "water-filtration-treatment-systems-datasheet",
        title_en: "Water Filtration & Treatment Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة ترشيح ومعالجة المياه",
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
    id: "submersible-drainage-pumps",
    slug: "submersible-drainage-pumps",
    name_en: "Submersible Drainage Pumps",
    name_ar: "مضخات غاطسة لتصريف المياه",
    shortDescription_en:
      "Submersible pumps for hospital drainage and water transfer.",
    shortDescription_ar: "مضخات غاطسة لتصريف ونقل المياه بالمستشفى.",
    longDescription_en:
      "Submersible pumps for drainage and water transfer applications, sourced to your flow requirement and installation environment.",
    longDescription_ar:
      "مضخات غاطسة لتطبيقات تصريف ونقل المياه، يتم توريدها وفق معدل التدفق المطلوب وبيئة التركيب لديكم.",
    sectorId: "healthcare",
    categoryId: "pumps-water-treatment-equipment",
    relatedProductSlugs: [
      "booster-pump-sets",
      "water-filtration-treatment-systems",
    ],
    catalogues: [
      {
        id: "submersible-drainage-pumps-datasheet",
        title_en: "Submersible Drainage Pumps Datasheet",
        title_ar: "نشرة بيانات المضخات الغاطسة لتصريف المياه",
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
