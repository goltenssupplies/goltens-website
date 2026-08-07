import type { Product } from "@/data/products/types";

/** Industrial Equipment & Pumps → Centrifugal & Process Pumps category. */
export const industrialProcessPumps: Product[] = [
  {
    id: "centrifugal-pumps",
    slug: "centrifugal-pumps",
    name_en: "Centrifugal Pumps",
    name_ar: "مضخات الطرد المركزي",
    shortDescription_en: "Centrifugal pumps sourced to your flow, head, and process fluid requirements.",
    shortDescription_ar: "مضخات طرد مركزي يتم توريدها وفق متطلبات التدفق والرفع وسائل العملية لديكم.",
    longDescription_en:
      "Centrifugal pumps for general industrial, water, and process transfer duties. We source units matched to your required flow rate, head, and fluid compatibility, from standard end-suction to close-coupled configurations.",
    longDescription_ar:
      "مضخات طرد مركزي لأعمال النقل الصناعي والمائي والعمليات العامة. نقوم بتوريد الوحدات المطابقة لمعدل التدفق والرفع والتوافق مع السائل المطلوب، من التكوينات القياسية للشفط الطرفي إلى التكوينات المدمجة.",
    sectorId: "industrial-equipment",
    categoryId: "process-pumps",
    features_en: ["Sized to your flow and head requirement", "Matched to fluid type and process conditions"],
    features_ar: ["مقاسة وفق التدفق والرفع المطلوب", "مطابقة لنوع السائل وظروف العملية"],
    relatedProductSlugs: ["end-suction-pumps", "vertical-turbine-pumps", "self-priming-pumps"],
    catalogues: [
      { id: "centrifugal-pumps-datasheet", title_en: "Centrifugal Pumps Datasheet", title_ar: "نشرة بيانات مضخات الطرد المركزي", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "end-suction-pumps",
    slug: "end-suction-pumps",
    name_en: "End Suction Pumps",
    name_ar: "مضخات سحب طرفي",
    shortDescription_en: "End suction pumps for general water transfer and process applications.",
    shortDescription_ar: "مضخات سحب طرفي لأعمال نقل المياه والعمليات العامة.",
    longDescription_en:
      "End suction pumps in a compact, single-stage configuration for general water transfer, HVAC circulation, and light process duties. We source units matched to your duty point and installation footprint.",
    longDescription_ar:
      "مضخات سحب طرفي بتكوين مدمج وأحادي المرحلة لأعمال نقل المياه العامة وتدوير أنظمة التكييف والأعمال الخفيفة للعمليات. نقوم بتوريد الوحدات المطابقة لنقطة التشغيل ومساحة التركيب لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "process-pumps",
    relatedProductSlugs: ["centrifugal-pumps", "self-priming-pumps"],
    catalogues: [
      { id: "end-suction-pumps-datasheet", title_en: "End Suction Pumps Datasheet", title_ar: "نشرة بيانات مضخات السحب الطرفي", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "vertical-turbine-pumps",
    slug: "vertical-turbine-pumps",
    name_en: "Vertical Turbine Pumps",
    name_ar: "مضخات توربينية رأسية",
    shortDescription_en: "Vertical turbine pumps for deep well and large-volume water supply applications.",
    shortDescription_ar: "مضخات توربينية رأسية لتطبيقات الآبار العميقة وإمداد المياه بكميات كبيرة.",
    longDescription_en:
      "Vertical turbine pumps for deep well extraction, large-volume water supply, and booster station applications. We source units matched to your well depth, flow requirement, and discharge head.",
    longDescription_ar:
      "مضخات توربينية رأسية لأعمال استخراج المياه من الآبار العميقة، وإمداد المياه بكميات كبيرة، ومحطات رفع الضغط. نقوم بتوريد الوحدات المطابقة لعمق البئر ومعدل التدفق وضغط التصريف لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "process-pumps",
    relatedProductSlugs: ["centrifugal-pumps", "submersible-pumps"],
    catalogues: [
      { id: "vertical-turbine-pumps-datasheet", title_en: "Vertical Turbine Pumps Datasheet", title_ar: "نشرة بيانات المضخات التوربينية الرأسية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "submersible-pumps",
    slug: "submersible-pumps",
    name_en: "Submersible Pumps",
    name_ar: "مضخات غاطسة",
    shortDescription_en: "Submersible pumps for well, drainage, and sewage transfer applications.",
    shortDescription_ar: "مضخات غاطسة لتطبيقات الآبار والصرف ونقل مياه الصرف الصحي.",
    longDescription_en:
      "Submersible pumps designed to operate fully immersed in the pumped fluid, for well water, drainage, and sewage transfer duties. We source units matched to your fluid type, solids content, and discharge requirement.",
    longDescription_ar:
      "مضخات غاطسة مصممة للعمل وهي مغمورة بالكامل في السائل المضخوخ، لأعمال مياه الآبار والصرف ونقل الصرف الصحي. نقوم بتوريد الوحدات المطابقة لنوع السائل ونسبة الشوائب ومتطلبات التصريف لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "process-pumps",
    relatedProductSlugs: ["vertical-turbine-pumps", "self-priming-pumps"],
    catalogues: [
      { id: "submersible-pumps-datasheet", title_en: "Submersible Pumps Datasheet", title_ar: "نشرة بيانات المضخات الغاطسة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "self-priming-pumps",
    slug: "self-priming-pumps",
    name_en: "Self-Priming Pumps",
    name_ar: "مضخات ذاتية التشغيل",
    shortDescription_en: "Self-priming pumps for applications where the pump can't stay flooded.",
    shortDescription_ar: "مضخات ذاتية التشغيل للتطبيقات التي لا يمكن فيها إبقاء المضخة مغمورة باستمرار.",
    longDescription_en:
      "Self-priming pumps that re-establish prime without manual intervention, suited to applications with a fluctuating suction source or where the pump can't remain flooded. We source units matched to your suction lift and duty cycle.",
    longDescription_ar:
      "مضخات ذاتية التشغيل تعيد إنشاء التشغيل دون تدخل يدوي، وتناسب التطبيقات ذات مصدر الشفط المتذبذب أو حيث لا يمكن إبقاء المضخة مغمورة باستمرار. نقوم بتوريد الوحدات المطابقة لارتفاع الشفط ودورة التشغيل لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "process-pumps",
    relatedProductSlugs: ["centrifugal-pumps", "end-suction-pumps"],
    catalogues: [
      { id: "self-priming-pumps-datasheet", title_en: "Self-Priming Pumps Datasheet", title_ar: "نشرة بيانات المضخات ذاتية التشغيل", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
