import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Surgical & Operating Room Equipment category. */
export const healthcareSurgicalOperatingRoomEquipment: Product[] = [
  {
    id: "operating-tables",
    slug: "operating-tables",
    name_en: "Operating Tables",
    name_ar: "طاولات العمليات",
    shortDescription_en: "Operating tables sourced for general and specialty surgical procedures.",
    shortDescription_ar: "طاولات عمليات يتم توريدها للإجراءات الجراحية العامة والمتخصصة.",
    longDescription_en:
      "Operating tables for general and specialty surgical procedures, sourced in manual and electro-hydraulic configurations matched to your operating room's case mix.",
    longDescription_ar:
      "طاولات عمليات للإجراءات الجراحية العامة والمتخصصة، يتم توريدها بتكوينات يدوية وكهروهيدروليكية مطابقة لمزيج الحالات الجراحية في غرفة عملياتكم.",
    sectorId: "healthcare",
    categoryId: "surgical-operating-room-equipment",
    relatedProductSlugs: ["surgical-lighting", "anesthesia-machines"],
    catalogues: [
      { id: "operating-tables-datasheet", title_en: "Operating Tables Datasheet", title_ar: "نشرة بيانات طاولات العمليات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "surgical-lighting",
    slug: "surgical-lighting",
    name_en: "Surgical Lighting",
    name_ar: "إضاءة غرف العمليات",
    shortDescription_en: "Surgical lighting systems for shadow-free illumination of the operating field.",
    shortDescription_ar: "أنظمة إضاءة جراحية لإنارة مجال العملية دون ظلال.",
    longDescription_en:
      "Ceiling-mounted surgical lighting systems providing shadow-free illumination of the operating field. We source systems matched to your operating room's ceiling height and mounting configuration.",
    longDescription_ar:
      "أنظمة إضاءة جراحية معلقة بالسقف توفر إنارة لمجال العملية دون ظلال. نقوم بتوريد الأنظمة المطابقة لارتفاع سقف غرفة عملياتكم وتكوين التركيب المطلوب.",
    sectorId: "healthcare",
    categoryId: "surgical-operating-room-equipment",
    relatedProductSlugs: ["operating-tables", "electrosurgical-units"],
    catalogues: [
      { id: "surgical-lighting-datasheet", title_en: "Surgical Lighting Datasheet", title_ar: "نشرة بيانات إضاءة غرف العمليات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "anesthesia-machines",
    slug: "anesthesia-machines",
    name_en: "Anesthesia Machines",
    name_ar: "أجهزة التخدير",
    shortDescription_en: "Anesthesia machines for gas delivery and ventilation during surgery.",
    shortDescription_ar: "أجهزة تخدير لتوصيل الغازات والتنفس الصناعي أثناء الجراحة.",
    longDescription_en:
      "Anesthesia machines for controlled gas delivery and ventilation support during surgical procedures. We source units matched to your operating room's case volume and monitoring integration requirement.",
    longDescription_ar:
      "أجهزة تخدير لتوصيل الغازات بشكل متحكم به ودعم التنفس أثناء الإجراءات الجراحية. نقوم بتوريد الأجهزة المطابقة لحجم الحالات في غرفة عملياتكم ومتطلبات التكامل مع أجهزة المراقبة.",
    sectorId: "healthcare",
    categoryId: "surgical-operating-room-equipment",
    relatedProductSlugs: ["operating-tables", "sterilization-autoclaves"],
    catalogues: [
      { id: "anesthesia-machines-datasheet", title_en: "Anesthesia Machines Datasheet", title_ar: "نشرة بيانات أجهزة التخدير", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "electrosurgical-units",
    slug: "electrosurgical-units",
    name_en: "Electrosurgical Units",
    name_ar: "أجهزة الجراحة الكهربائية",
    shortDescription_en: "Electrosurgical units for cutting and coagulation during surgical procedures.",
    shortDescription_ar: "أجهزة جراحة كهربائية للقطع والتخثير أثناء الإجراءات الجراحية.",
    longDescription_en:
      "Electrosurgical units for tissue cutting and coagulation across general and specialty surgical procedures. We source units matched to your operating room's power and mode requirements.",
    longDescription_ar:
      "أجهزة جراحة كهربائية لقطع الأنسجة وتخثيرها عبر الإجراءات الجراحية العامة والمتخصصة. نقوم بتوريد الأجهزة المطابقة لمتطلبات القدرة والأنماط التشغيلية في غرفة عملياتكم.",
    sectorId: "healthcare",
    categoryId: "surgical-operating-room-equipment",
    relatedProductSlugs: ["surgical-lighting", "sterilization-autoclaves"],
    catalogues: [
      { id: "electrosurgical-units-datasheet", title_en: "Electrosurgical Units Datasheet", title_ar: "نشرة بيانات أجهزة الجراحة الكهربائية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "sterilization-autoclaves",
    slug: "sterilization-autoclaves",
    name_en: "Sterilization Autoclaves",
    name_ar: "معدات التعقيم (الأوتوكلاف)",
    shortDescription_en: "Autoclaves for steam sterilization of surgical instruments.",
    shortDescription_ar: "أجهزة أوتوكلاف لتعقيم الأدوات الجراحية بالبخار.",
    longDescription_en:
      "Autoclaves for steam sterilization of surgical instruments and reusable medical equipment, sourced to your central sterile supply department's throughput requirement.",
    longDescription_ar:
      "أجهزة أوتوكلاف لتعقيم الأدوات الجراحية والمعدات الطبية القابلة لإعادة الاستخدام بالبخار، يتم توريدها وفق معدل الإنتاجية المطلوب لوحدة التعقيم المركزي لديكم.",
    sectorId: "healthcare",
    categoryId: "surgical-operating-room-equipment",
    relatedProductSlugs: ["anesthesia-machines", "electrosurgical-units"],
    catalogues: [
      { id: "sterilization-autoclaves-datasheet", title_en: "Sterilization Autoclaves Datasheet", title_ar: "نشرة بيانات معدات التعقيم", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
