import type { Product } from "@/data/products/types";

/** Industrial Equipment & Pumps → Valves & Actuators category. */
export const industrialValvesActuators: Product[] = [
  {
    id: "industrial-ball-valves",
    slug: "industrial-ball-valves",
    name_en: "Industrial Ball Valves",
    name_ar: "صمامات كروية صناعية",
    shortDescription_en: "Ball valves for on/off flow control in industrial piping systems.",
    shortDescription_ar: "صمامات كروية للتحكم في التدفق (فتح/إغلاق) في أنظمة المواسير الصناعية.",
    longDescription_en:
      "Ball valves for tight-shutoff, on/off flow control across industrial piping systems. We source units matched to your pipe size, pressure rating, and media compatibility.",
    longDescription_ar:
      "صمامات كروية لإغلاق محكم وتحكم في التدفق (فتح/إغلاق) عبر أنظمة المواسير الصناعية. نقوم بتوريد الوحدات المطابقة لقياس المواسير وتصنيف الضغط والتوافق مع الوسط لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    relatedProductSlugs: ["industrial-gate-valves", "control-valves", "electric-actuators"],
    catalogues: [
      { id: "industrial-ball-valves-datasheet", title_en: "Industrial Ball Valves Datasheet", title_ar: "نشرة بيانات الصمامات الكروية الصناعية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "industrial-gate-valves",
    slug: "industrial-gate-valves",
    name_en: "Industrial Gate Valves",
    name_ar: "صمامات بوابية صناعية",
    shortDescription_en: "Gate valves for isolation duty in industrial and process piping.",
    shortDescription_ar: "صمامات بوابية لأعمال العزل في المواسير الصناعية وأنظمة العمليات.",
    longDescription_en:
      "Gate valves for full-open/full-closed isolation duty in industrial and process piping systems. We source units matched to your line size, pressure class, and body material requirement.",
    longDescription_ar:
      "صمامات بوابية لأعمال العزل الكامل (فتح/إغلاق) في أنظمة المواسير الصناعية والعمليات. نقوم بتوريد الوحدات المطابقة لقياس الخط وفئة الضغط وخامة الجسم المطلوبة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    relatedProductSlugs: ["industrial-ball-valves", "pressure-relief-valves"],
    catalogues: [
      { id: "industrial-gate-valves-datasheet", title_en: "Industrial Gate Valves Datasheet", title_ar: "نشرة بيانات الصمامات البوابية الصناعية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "control-valves",
    slug: "control-valves",
    name_en: "Control Valves",
    name_ar: "صمامات التحكم",
    shortDescription_en: "Control valves for modulating flow, pressure, or level in process systems.",
    shortDescription_ar: "صمامات تحكم لضبط التدفق أو الضغط أو المستوى في أنظمة العمليات.",
    longDescription_en:
      "Control valves for modulating flow, pressure, or level as part of an automated process loop. We source units matched to your control signal type and process parameters.",
    longDescription_ar:
      "صمامات تحكم لضبط التدفق أو الضغط أو المستوى كجزء من حلقة تحكم آلية. نقوم بتوريد الوحدات المطابقة لنوع إشارة التحكم ومعطيات العملية لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    relatedProductSlugs: ["electric-actuators", "industrial-ball-valves"],
    catalogues: [
      { id: "control-valves-datasheet", title_en: "Control Valves Datasheet", title_ar: "نشرة بيانات صمامات التحكم", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "pressure-relief-valves",
    slug: "pressure-relief-valves",
    name_en: "Pressure Relief Valves",
    name_ar: "صمامات تخفيف الضغط",
    shortDescription_en: "Pressure relief valves to protect piping and vessels from overpressure.",
    shortDescription_ar: "صمامات تخفيف ضغط لحماية المواسير والأوعية من الضغط الزائد.",
    longDescription_en:
      "Pressure relief valves that protect piping, vessels, and equipment from overpressure conditions by opening at a set pressure. We source units matched to your system's set-pressure and relief-capacity requirement.",
    longDescription_ar:
      "صمامات تخفيف ضغط تحمي المواسير والأوعية والمعدات من حالات الضغط الزائد عن طريق الفتح عند ضغط محدد مسبقًا. نقوم بتوريد الوحدات المطابقة لضغط الضبط وسعة التخفيف المطلوبة في نظامكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    relatedProductSlugs: ["industrial-gate-valves", "control-valves"],
    catalogues: [
      { id: "pressure-relief-valves-datasheet", title_en: "Pressure Relief Valves Datasheet", title_ar: "نشرة بيانات صمامات تخفيف الضغط", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "electric-actuators",
    slug: "electric-actuators",
    name_en: "Electric Valve Actuators",
    name_ar: "محركات تشغيل كهربائية للصمامات",
    shortDescription_en: "Electric actuators for remote and automated valve operation.",
    shortDescription_ar: "محركات تشغيل كهربائية لتشغيل الصمامات عن بُعد وبشكل آلي.",
    longDescription_en:
      "Electric actuators for remote, automated valve operation across industrial process and utility systems. We source units matched to your valve torque requirement and control interface.",
    longDescription_ar:
      "محركات تشغيل كهربائية لتشغيل الصمامات عن بُعد وبشكل آلي عبر أنظمة العمليات الصناعية والمرافق. نقوم بتوريد الوحدات المطابقة لمتطلبات عزم الدوران للصمام وواجهة التحكم لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    relatedProductSlugs: ["control-valves", "industrial-ball-valves"],
    catalogues: [
      { id: "electric-actuators-datasheet", title_en: "Electric Valve Actuators Datasheet", title_ar: "نشرة بيانات محركات التشغيل الكهربائية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
