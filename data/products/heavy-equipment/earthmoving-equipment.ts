import type { Product } from "@/data/products/types";

/** Heavy Equipment & Machinery → Earthmoving Equipment category. */
export const heavyEarthmovingEquipment: Product[] = [
  {
    id: "hydraulic-excavators",
    slug: "hydraulic-excavators",
    name_en: "Hydraulic Excavators",
    name_ar: "الحفارات الهيدروليكية",
    shortDescription_en: "Hydraulic excavators for excavation, grading, and material handling on site.",
    shortDescription_ar: "حفارات هيدروليكية لأعمال الحفر والتسوية ومناولة المواد بالموقع.",
    longDescription_en:
      "Hydraulic excavators for excavation, trenching, grading, and material handling across construction and infrastructure sites. We source machines matched to your operating weight, bucket capacity, and reach requirement.",
    longDescription_ar:
      "حفارات هيدروليكية لأعمال الحفر وحفر الخنادق والتسوية ومناولة المواد عبر مواقع الإنشاءات والبنية التحتية. نقوم بتوريد الآليات المطابقة لوزن التشغيل وسعة الجرافة ومدى الوصول المطلوب لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "earthmoving-equipment",
    relatedProductSlugs: ["wheel-loaders", "backhoe-loaders"],
    catalogues: [
      { id: "hydraulic-excavators-datasheet", title_en: "Hydraulic Excavators Datasheet", title_ar: "نشرة بيانات الحفارات الهيدروليكية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "wheel-loaders",
    slug: "wheel-loaders",
    name_en: "Wheel Loaders",
    name_ar: "اللوادر ذات العجلات",
    shortDescription_en: "Wheel loaders for material loading, stockpiling, and site transport.",
    shortDescription_ar: "لوادر ذات عجلات لتحميل المواد والتكديس والنقل بالموقع.",
    longDescription_en:
      "Wheel loaders for material loading, stockpiling, and short-distance site transport across construction, quarry, and industrial sites. We source machines matched to your bucket capacity and operating environment.",
    longDescription_ar:
      "لوادر ذات عجلات لتحميل المواد والتكديس والنقل لمسافات قصيرة عبر مواقع الإنشاءات والمحاجر والمنشآت الصناعية. نقوم بتوريد الآليات المطابقة لسعة الجرافة وبيئة التشغيل لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "earthmoving-equipment",
    relatedProductSlugs: ["hydraulic-excavators", "bulldozers"],
    catalogues: [
      { id: "wheel-loaders-datasheet", title_en: "Wheel Loaders Datasheet", title_ar: "نشرة بيانات اللوادر ذات العجلات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "bulldozers",
    slug: "bulldozers",
    name_en: "Bulldozers",
    name_ar: "الجرافات",
    shortDescription_en: "Bulldozers for site clearing, grading, and heavy earthmoving work.",
    shortDescription_ar: "جرافات لأعمال تمهيد المواقع والتسوية وأعمال نقل التراب الثقيلة.",
    longDescription_en:
      "Bulldozers for site clearing, coarse grading, and pushing large volumes of material on infrastructure and earthworks projects. We source machines matched to your blade capacity and ground condition.",
    longDescription_ar:
      "جرافات لأعمال تمهيد المواقع والتسوية الأولية ودفع كميات كبيرة من المواد في مشروعات البنية التحتية وأعمال التراب. نقوم بتوريد الآليات المطابقة لسعة الشفرة وطبيعة الأرض لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "earthmoving-equipment",
    relatedProductSlugs: ["motor-graders", "wheel-loaders"],
    catalogues: [
      { id: "bulldozers-datasheet", title_en: "Bulldozers Datasheet", title_ar: "نشرة بيانات الجرافات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "motor-graders",
    slug: "motor-graders",
    name_en: "Motor Graders",
    name_ar: "معدات تسوية الطرق (المتسويات)",
    shortDescription_en: "Motor graders for precise final grading of roads and site surfaces.",
    shortDescription_ar: "معدات تسوية لأعمال التسوية النهائية الدقيقة للطرق وأسطح المواقع.",
    longDescription_en:
      "Motor graders for precise final grading of road surfaces, site pads, and drainage slopes ahead of paving or foundation work. We source machines matched to your blade width and required grading tolerance.",
    longDescription_ar:
      "معدات تسوية لأعمال التسوية النهائية الدقيقة لأسطح الطرق ومنصات المواقع وميول الصرف قبل أعمال الرصف أو الأساسات. نقوم بتوريد الآليات المطابقة لعرض الشفرة ودقة التسوية المطلوبة لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "earthmoving-equipment",
    relatedProductSlugs: ["bulldozers", "backhoe-loaders"],
    catalogues: [
      { id: "motor-graders-datasheet", title_en: "Motor Graders Datasheet", title_ar: "نشرة بيانات معدات تسوية الطرق", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "backhoe-loaders",
    slug: "backhoe-loaders",
    name_en: "Backhoe Loaders",
    name_ar: "الحفارات المحملة",
    shortDescription_en: "Backhoe loaders combining excavation and loading in one versatile machine.",
    shortDescription_ar: "حفارات محملة تجمع بين الحفر والتحميل في آلية واحدة متعددة الاستخدامات.",
    longDescription_en:
      "Backhoe loaders combining a rear excavator arm and front loader bucket in one machine, suited to smaller sites and utility work where a dedicated excavator and loader aren't justified. We source units matched to your dig depth and loading requirement.",
    longDescription_ar:
      "حفارات محملة تجمع بين ذراع حفر خلفية وجرافة تحميل أمامية في آلية واحدة، وتناسب المواقع الأصغر وأعمال المرافق التي لا تستدعي حفارة ولادر منفصلين. نقوم بتوريد الآليات المطابقة لعمق الحفر ومتطلبات التحميل لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "earthmoving-equipment",
    relatedProductSlugs: ["hydraulic-excavators", "wheel-loaders"],
    catalogues: [
      { id: "backhoe-loaders-datasheet", title_en: "Backhoe Loaders Datasheet", title_ar: "نشرة بيانات الحفارات المحملة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
