import type { Product } from "@/data/products/types";

/** Industrial Chemicals & Lubricants → Lubricants & Fluids category. */
export const chemicalsIndustrialLubricantsFluids: Product[] = [
  {
    id: "industrial-lubricating-oils",
    slug: "industrial-lubricating-oils",
    name_en: "Industrial Lubricating Oils",
    name_ar: "زيوت التشحيم الصناعية",
    shortDescription_en: "Lubricating oils for industrial machinery and rotating equipment.",
    shortDescription_ar: "زيوت تشحيم للآلات الصناعية والمعدات الدوارة.",
    longDescription_en:
      "Lubricating oils for industrial machinery, gearboxes, and rotating equipment, sourced to your equipment manufacturer's grade and viscosity requirement.",
    longDescription_ar:
      "زيوت تشحيم للآلات الصناعية وعلب التروس والمعدات الدوارة، يتم توريدها وفق الدرجة واللزوجة التي تحددها الجهة المصنّعة لمعداتكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    relatedProductSlugs: ["industrial-greases", "gear-oils"],
    catalogues: [
      { id: "industrial-lubricating-oils-datasheet", title_en: "Industrial Lubricating Oils Datasheet", title_ar: "نشرة بيانات زيوت التشحيم الصناعية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "industrial-greases",
    slug: "industrial-greases",
    name_en: "Industrial Greases",
    name_ar: "الشحوم الصناعية",
    shortDescription_en: "Greases for bearings, seals, and slow-moving industrial components.",
    shortDescription_ar: "شحوم للمحامل والأختام والمكونات الصناعية بطيئة الحركة.",
    longDescription_en:
      "Industrial greases for bearings, seals, and components where an oil film alone doesn't provide adequate lubrication or protection. We source products matched to your operating temperature and load conditions.",
    longDescription_ar:
      "شحوم صناعية للمحامل والأختام والمكونات التي لا توفر لها طبقة الزيت وحدها تشحيمًا أو حماية كافية. نقوم بتوريد المنتجات المطابقة لدرجة حرارة التشغيل وظروف الحمل لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    relatedProductSlugs: ["industrial-lubricating-oils", "hydraulic-fluids"],
    catalogues: [
      { id: "industrial-greases-datasheet", title_en: "Industrial Greases Datasheet", title_ar: "نشرة بيانات الشحوم الصناعية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "hydraulic-fluids",
    slug: "hydraulic-fluids",
    name_en: "Hydraulic Fluids",
    name_ar: "السوائل الهيدروليكية",
    shortDescription_en: "Hydraulic fluids for industrial and mobile hydraulic systems.",
    shortDescription_ar: "سوائل هيدروليكية للأنظمة الهيدروليكية الصناعية والمتنقلة.",
    longDescription_en:
      "Hydraulic fluids for industrial and mobile equipment hydraulic systems, sourced to your equipment's viscosity grade and additive package requirement.",
    longDescription_ar:
      "سوائل هيدروليكية للأنظمة الهيدروليكية للمعدات الصناعية والمتنقلة، يتم توريدها وفق درجة اللزوجة وحزمة الإضافات التي تتطلبها معداتكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    relatedProductSlugs: ["industrial-greases", "gear-oils"],
    catalogues: [
      { id: "hydraulic-fluids-datasheet", title_en: "Hydraulic Fluids Datasheet", title_ar: "نشرة بيانات السوائل الهيدروليكية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "gear-oils",
    slug: "gear-oils",
    name_en: "Gear Oils",
    name_ar: "زيوت التروس",
    shortDescription_en: "Gear oils for industrial gearboxes and drive systems.",
    shortDescription_ar: "زيوت تروس لعلب التروس الصناعية وأنظمة النقل الحركي.",
    longDescription_en:
      "Gear oils formulated for the extreme-pressure conditions inside industrial gearboxes and drive systems, sourced to your equipment's specified grade and application.",
    longDescription_ar:
      "زيوت تروس مصممة لتحمل ظروف الضغط الشديد داخل علب التروس الصناعية وأنظمة النقل الحركي، يتم توريدها وفق الدرجة والتطبيق المحدد لمعداتكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    relatedProductSlugs: ["industrial-lubricating-oils", "hydraulic-fluids"],
    catalogues: [
      { id: "gear-oils-datasheet", title_en: "Gear Oils Datasheet", title_ar: "نشرة بيانات زيوت التروس", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "metalworking-fluids",
    slug: "metalworking-fluids",
    name_en: "Metalworking Fluids",
    name_ar: "سوائل التشغيل المعدني",
    shortDescription_en: "Cutting and coolant fluids for metal machining and fabrication.",
    shortDescription_ar: "سوائل قطع وتبريد لأعمال التشغيل والتصنيع المعدني.",
    longDescription_en:
      "Cutting oils and coolant fluids for metal machining, cutting, and fabrication processes, sourced to your material type and machining process.",
    longDescription_ar:
      "زيوت قطع وسوائل تبريد لعمليات التشغيل والقطع والتصنيع المعدني، يتم توريدها وفق نوع المادة وعملية التشغيل لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    relatedProductSlugs: ["industrial-lubricating-oils", "gear-oils"],
    catalogues: [
      { id: "metalworking-fluids-datasheet", title_en: "Metalworking Fluids Datasheet", title_ar: "نشرة بيانات سوائل التشغيل المعدني", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
