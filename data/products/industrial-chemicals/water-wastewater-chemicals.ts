import type { Product } from "@/data/products/types";

/** Industrial Chemicals & Lubricants → Water & Wastewater Treatment Chemicals category. */
export const chemicalsWaterWastewaterChemicals: Product[] = [
  {
    id: "boiler-water-chemicals",
    slug: "boiler-water-chemicals",
    name_en: "Boiler Water Chemicals",
    name_ar: "كيماويات مياه الغلايات",
    shortDescription_en: "Boiler water treatment chemicals to prevent scale and corrosion.",
    shortDescription_ar: "كيماويات معالجة مياه الغلايات لمنع الترسبات والتآكل.",
    longDescription_en:
      "Boiler water treatment chemicals that control scale formation and corrosion inside steam-generating equipment. We source products matched to your boiler type and feedwater quality.",
    longDescription_ar:
      "كيماويات معالجة مياه الغلايات تتحكم في تكوّن الترسبات والتآكل داخل معدات توليد البخار. نقوم بتوريد المنتجات المطابقة لنوع الغلاية وجودة مياه التغذية لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    relatedProductSlugs: ["cooling-tower-chemicals", "ph-adjustment-chemicals"],
    catalogues: [
      { id: "boiler-water-chemicals-datasheet", title_en: "Boiler Water Chemicals Datasheet", title_ar: "نشرة بيانات كيماويات مياه الغلايات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "cooling-tower-chemicals",
    slug: "cooling-tower-chemicals",
    name_en: "Cooling Tower Chemicals",
    name_ar: "كيماويات أبراج التبريد",
    shortDescription_en: "Cooling tower chemicals for scale, corrosion, and biological control.",
    shortDescription_ar: "كيماويات أبراج التبريد للتحكم في الترسبات والتآكل والنمو البيولوجي.",
    longDescription_en:
      "Cooling tower water treatment chemicals for scale inhibition, corrosion control, and biological growth management. We source products matched to your system's water chemistry and cycles of concentration.",
    longDescription_ar:
      "كيماويات معالجة مياه أبراج التبريد لمنع الترسبات والتحكم في التآكل والنمو البيولوجي. نقوم بتوريد المنتجات المطابقة لكيمياء المياه ودورات التركيز في نظامكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    relatedProductSlugs: ["boiler-water-chemicals", "wastewater-treatment-chemicals"],
    catalogues: [
      { id: "cooling-tower-chemicals-datasheet", title_en: "Cooling Tower Chemicals Datasheet", title_ar: "نشرة بيانات كيماويات أبراج التبريد", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "wastewater-treatment-chemicals",
    slug: "wastewater-treatment-chemicals",
    name_en: "Wastewater Treatment Chemicals",
    name_ar: "كيماويات معالجة مياه الصرف",
    shortDescription_en: "Chemicals for industrial and municipal wastewater treatment processes.",
    shortDescription_ar: "كيماويات لعمليات معالجة مياه الصرف الصناعية والبلدية.",
    longDescription_en:
      "Chemicals for industrial and municipal wastewater treatment processes, sourced to your treatment stage — coagulation, disinfection, or sludge conditioning — and effluent requirement.",
    longDescription_ar:
      "كيماويات لعمليات معالجة مياه الصرف الصناعية والبلدية، يتم توريدها وفق مرحلة المعالجة لديكم — تخثير أو تعقيم أو تكييف الحمأة — ومتطلبات جودة المياه الناتجة.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    relatedProductSlugs: ["flocculants-coagulants", "ph-adjustment-chemicals"],
    catalogues: [
      { id: "wastewater-treatment-chemicals-datasheet", title_en: "Wastewater Treatment Chemicals Datasheet", title_ar: "نشرة بيانات كيماويات معالجة مياه الصرف", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "flocculants-coagulants",
    slug: "flocculants-coagulants",
    name_en: "Flocculants & Coagulants",
    name_ar: "المواد المخثرة والمرسبة",
    shortDescription_en: "Flocculants and coagulants for suspended solids removal in water treatment.",
    shortDescription_ar: "مواد مخثرة ومرسبة لإزالة المواد العالقة في معالجة المياه.",
    longDescription_en:
      "Flocculants and coagulants that aggregate suspended solids for removal in water and wastewater treatment processes. We source products matched to your raw water characteristics and treatment process.",
    longDescription_ar:
      "مواد مخثرة ومرسبة تعمل على تجميع المواد العالقة لإزالتها في عمليات معالجة المياه ومياه الصرف. نقوم بتوريد المنتجات المطابقة لخصائص المياه الخام وعملية المعالجة لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    relatedProductSlugs: ["wastewater-treatment-chemicals", "ph-adjustment-chemicals"],
    catalogues: [
      { id: "flocculants-coagulants-datasheet", title_en: "Flocculants & Coagulants Datasheet", title_ar: "نشرة بيانات المواد المخثرة والمرسبة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ph-adjustment-chemicals",
    slug: "ph-adjustment-chemicals",
    name_en: "pH Adjustment Chemicals",
    name_ar: "كيماويات ضبط الرقم الهيدروجيني",
    shortDescription_en: "pH adjustment chemicals for water and process stream neutralization.",
    shortDescription_ar: "كيماويات لضبط الرقم الهيدروجيني لتعديل المياه ومجاري العمليات.",
    longDescription_en:
      "Acid and alkali products for pH adjustment and neutralization of water and process streams, sourced to your target pH range and stream volume.",
    longDescription_ar:
      "منتجات حمضية وقلوية لضبط الرقم الهيدروجيني ومعادلة المياه ومجاري العمليات، يتم توريدها وفق نطاق الرقم الهيدروجيني المستهدف وحجم المجرى لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    relatedProductSlugs: ["boiler-water-chemicals", "flocculants-coagulants"],
    catalogues: [
      { id: "ph-adjustment-chemicals-datasheet", title_en: "pH Adjustment Chemicals Datasheet", title_ar: "نشرة بيانات كيماويات ضبط الرقم الهيدروجيني", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
