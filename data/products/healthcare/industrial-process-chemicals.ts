import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Industrial Chemicals & Chemical Materials category. */
export const healthcareIndustrialProcessChemicals: Product[] = [
  {
    id: "industrial-water-treatment-chemicals",
    slug: "industrial-water-treatment-chemicals",
    name_en: "Industrial Water Treatment Chemicals",
    name_ar: "كيماويات معالجة المياه الصناعية",
    shortDescription_en:
      "Water treatment chemicals for hospital water systems.",
    shortDescription_ar: "كيماويات لمعالجة أنظمة المياه بالمستشفى.",
    longDescription_en:
      "Industrial water treatment chemicals for hospital water systems, sourced to your system type and water quality requirement.",
    longDescription_ar:
      "كيماويات معالجة مياه صناعية لأنظمة المياه بالمستشفى، يتم توريدها وفق نوع النظام ومتطلبات جودة المياه لديكم.",
    sectorId: "healthcare",
    categoryId: "industrial-process-chemicals",
    relatedProductSlugs: [
      "boiler-steam-system-chemicals",
      "corrosion-control-chemicals",
    ],
    catalogues: [
      {
        id: "industrial-water-treatment-chemicals-datasheet",
        title_en: "Industrial Water Treatment Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات معالجة المياه الصناعية",
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
    id: "boiler-steam-system-chemicals",
    slug: "boiler-steam-system-chemicals",
    name_en: "Boiler & Steam System Chemicals",
    name_ar: "كيماويات الغلايات وأنظمة البخار",
    shortDescription_en:
      "Treatment chemicals for hospital boiler and steam-generating systems.",
    shortDescription_ar:
      "كيماويات معالجة لأنظمة الغلايات وتوليد البخار بالمستشفى.",
    longDescription_en:
      "Treatment chemicals for boiler and steam-generating systems used in hospital sterilization, laundry, and heating plants, sourced to your boiler type and feedwater quality.",
    longDescription_ar:
      "كيماويات معالجة لأنظمة الغلايات وتوليد البخار المستخدمة في التعقيم والمغاسل ومحطات التدفئة بالمستشفى، يتم توريدها وفق نوع الغلاية وجودة مياه التغذية لديكم.",
    sectorId: "healthcare",
    categoryId: "industrial-process-chemicals",
    relatedProductSlugs: [
      "industrial-water-treatment-chemicals",
      "corrosion-control-chemicals",
    ],
    catalogues: [
      {
        id: "boiler-steam-system-chemicals-datasheet",
        title_en: "Boiler & Steam System Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات الغلايات وأنظمة البخار",
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
    id: "corrosion-control-chemicals",
    slug: "corrosion-control-chemicals",
    name_en: "Corrosion Control Chemicals",
    name_ar: "كيماويات مقاومة التآكل",
    shortDescription_en:
      "Corrosion control chemicals for mechanical and piping systems.",
    shortDescription_ar:
      "كيماويات لمقاومة التآكل في الأنظمة الميكانيكية وشبكات المستشفى.",
    longDescription_en:
      "Corrosion control chemicals for mechanical and distribution systems, sourced to your system's material composition and operating conditions.",
    longDescription_ar:
      "كيماويات لمقاومة التآكل في الأنظمة الميكانيكية وشبكات التوزيع، يتم توريدها وفق تركيبة المواد وظروف التشغيل في نظامكم.",
    sectorId: "healthcare",
    categoryId: "industrial-process-chemicals",
    relatedProductSlugs: [
      "industrial-water-treatment-chemicals",
      "boiler-steam-system-chemicals",
    ],
    catalogues: [
      {
        id: "corrosion-control-chemicals-datasheet",
        title_en: "Corrosion Control Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات مقاومة التآكل",
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
