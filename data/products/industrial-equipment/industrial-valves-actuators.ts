import type { Product } from "@/data/products/types";

/** Industrial Equipment & Pumps → Valves & Actuators category. */
export const industrialValvesActuators: Product[] = [
  {
    id: "industrial-ball-valves",
    slug: "industrial-ball-valves",
    name_en: "Industrial Ball Valves",
    name_ar: "صمامات كروية صناعية",
    shortDescription_en:
      "Ball valves for on/off flow control in industrial piping systems.",
    shortDescription_ar:
      "صمامات كروية للتحكم في التدفق (فتح/إغلاق) في أنظمة المواسير الصناعية.",
    longDescription_en:
      "Ball valves for tight-shutoff, on/off flow control across industrial piping systems. We source units matched to your pipe size, pressure rating, and media compatibility.",
    longDescription_ar:
      "صمامات كروية لإغلاق محكم وتحكم في التدفق (فتح/إغلاق) عبر أنظمة المواسير الصناعية. نقوم بتوريد الوحدات المطابقة لقياس المواسير وتصنيف الضغط والتوافق مع الوسط لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    features_en: [
      "Full-port or reduced-port bore options",
      "Floating or trunnion-mounted ball design depending on size and pressure class",
      "ISO 5211-compatible mounting pad for actuator retrofit",
    ],
    features_ar: [
      "خيارات فتحة كاملة أو مخفضة",
      "تصميم كروي عائم أو مرتكز حسب القياس وفئة الضغط",
      "قاعدة تركيب متوافقة مع ISO 5211 لتركيب المحرك لاحقًا",
    ],
    specifications: [
      {
        label_en: "Valve sizes",
        label_ar: "قياسات الصمام",
        value: 'DN15–DN300 (½"–12")',
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Pressure class",
        label_ar: "فئة الضغط",
        value: "PN16–PN40, ANSI 150–600 typical",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Body material",
        label_ar: "خامة الجسم",
        value: "Carbon steel, stainless steel, or brass",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Ball/seat material",
        label_ar: "خامة الكرة/المقعد",
        value: "Stainless steel ball with PTFE or RPTFE seats",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Actuation",
        label_ar: "التشغيل",
        value:
          "Manual lever, gear operator, or actuator-ready ISO 5211 mounting pad",
        group_en: "Operation",
        group_ar: "التشغيل",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically tested to API 598; ASME B16.34 pressure-temperature ratings",
      },
    ],
    applications_en: [
      "On/off isolation in water and utility piping",
      "Oil and gas process isolation",
      "Chemical and process plant flow control",
      "HVAC system isolation",
      "General industrial pipeline shutoff",
    ],
    applications_ar: [
      "عزل التدفق (فتح/إغلاق) في مواسير المياه والمرافق",
      "عزل العمليات في قطاع النفط والغاز",
      "التحكم في التدفق في المصانع الكيميائية ومنشآت العمليات",
      "عزل أنظمة التكييف",
      "إغلاق خطوط الأنابيب الصناعية العامة",
    ],
    relatedProductSlugs: [
      "industrial-gate-valves",
      "control-valves",
      "electric-actuators",
    ],
    relatedBrandSlugs: ["kitz", "crane", "flowserve"],
    catalogues: [
      {
        id: "industrial-ball-valves-datasheet",
        title_en: "Industrial Ball Valves Datasheet",
        title_ar: "نشرة بيانات الصمامات الكروية الصناعية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-equipment/industrial-ball-valves.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "industrial-gate-valves",
    slug: "industrial-gate-valves",
    name_en: "Industrial Gate Valves",
    name_ar: "صمامات بوابية صناعية",
    shortDescription_en:
      "Gate valves for isolation duty in industrial and process piping.",
    shortDescription_ar:
      "صمامات بوابية لأعمال العزل في المواسير الصناعية وأنظمة العمليات.",
    longDescription_en:
      "Gate valves for full-open/full-closed isolation duty in industrial and process piping systems. We source units matched to your line size, pressure class, and body material requirement.",
    longDescription_ar:
      "صمامات بوابية لأعمال العزل الكامل (فتح/إغلاق) في أنظمة المواسير الصناعية والعمليات. نقوم بتوريد الوحدات المطابقة لقياس الخط وفئة الضغط وخامة الجسم المطلوبة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    features_en: [
      "Rising or non-rising stem configurations",
      "Resilient-seated or metal-seated design options",
      "Suited to buried or above-ground installation",
    ],
    features_ar: [
      "تكوينات ساق صاعدة أو غير صاعدة",
      "خيارات تصميم بمقعد مرن أو معدني",
      "مناسبة للتركيب المدفون أو فوق سطح الأرض",
    ],
    specifications: [
      {
        label_en: "Valve sizes",
        label_ar: "قياسات الصمام",
        value: 'DN15–DN600 (½"–24")',
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Pressure class",
        label_ar: "فئة الضغط",
        value: "PN16–PN40, ANSI 150–300 typical",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Body material",
        label_ar: "خامة الجسم",
        value: "Cast iron, carbon steel, or stainless steel",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Wedge/seat material",
        label_ar: "خامة الوتد/المقعد",
        value:
          "Bronze, stainless steel, or resilient-seated (rubber-faced) options",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Actuation",
        label_ar: "التشغيل",
        value: "Handwheel, gearbox, or actuator-ready configurations",
        group_en: "Operation",
        group_ar: "التشغيل",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically specified to API 600, tested to API 598",
      },
    ],
    applications_en: [
      "Water distribution network isolation",
      "Oil and gas pipeline sectioning",
      "Industrial process plant isolation",
      "Power and utility plant cooling water systems",
      "Wastewater treatment plant isolation",
    ],
    applications_ar: [
      "عزل شبكات توزيع المياه",
      "تقسيم خطوط أنابيب النفط والغاز",
      "عزل منشآت العمليات الصناعية",
      "أنظمة مياه التبريد في محطات الطاقة والمرافق",
      "عزل محطات معالجة مياه الصرف الصحي",
    ],
    relatedProductSlugs: ["industrial-ball-valves", "pressure-relief-valves"],
    relatedBrandSlugs: ["kitz", "avk", "flowserve"],
    catalogues: [
      {
        id: "industrial-gate-valves-datasheet",
        title_en: "Industrial Gate Valves Datasheet",
        title_ar: "نشرة بيانات الصمامات البوابية الصناعية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-equipment/industrial-gate-valves.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "control-valves",
    slug: "control-valves",
    name_en: "Control Valves",
    name_ar: "صمامات التحكم",
    shortDescription_en:
      "Control valves for modulating flow, pressure, or level in process systems.",
    shortDescription_ar:
      "صمامات تحكم لضبط التدفق أو الضغط أو المستوى في أنظمة العمليات.",
    longDescription_en:
      "Control valves for modulating flow, pressure, or level as part of an automated process loop. We source units matched to your control signal type and process parameters.",
    longDescription_ar:
      "صمامات تحكم لضبط التدفق أو الضغط أو المستوى كجزء من حلقة تحكم آلية. نقوم بتوريد الوحدات المطابقة لنوع إشارة التحكم ومعطيات العملية لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    features_en: [
      "Pneumatic, electric, or electro-hydraulic actuator options",
      "Positioner-ready for precise control loop integration",
      "Linear, equal-percentage, or quick-opening trim characteristics",
    ],
    features_ar: [
      "خيارات محرك تشغيل هوائي أو كهربائي أو كهرو-هيدروليكي",
      "جاهزة لتركيب وحدة تموضع للتحكم الدقيق في الحلقة",
      "خصائص تدفق خطية أو نسبية متساوية أو سريعة الفتح",
    ],
    specifications: [
      {
        label_en: "Valve sizes",
        label_ar: "قياسات الصمام",
        value: 'DN15–DN300 (½"–12")',
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Body style",
        label_ar: "نمط الجسم",
        value: "Globe, butterfly, or angle pattern",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Control signal",
        label_ar: "إشارة التحكم",
        value: "4–20 mA, pneumatic (3–15 psi), or digital (HART/Fieldbus)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Flow characteristic",
        label_ar: "خاصية التدفق",
        value: "Linear, equal-percentage, or quick-opening trim",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Body material",
        label_ar: "خامة الجسم",
        value: "Carbon steel, stainless steel, or cast iron",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to IEC 60534 for control valve sizing and testing",
      },
    ],
    applications_en: [
      "Automated flow, pressure, or level control in process loops",
      "Boiler feedwater and steam pressure regulation",
      "Chemical dosing and process fluid throttling",
      "HVAC and utility system modulation",
      "Desalination and water treatment process control",
    ],
    applications_ar: [
      "التحكم الآلي بالتدفق أو الضغط أو المستوى في حلقات العمليات",
      "تنظيم ضغط مياه التغذية والبخار في المراجل",
      "جرعات المواد الكيميائية وضبط تدفق سوائل العمليات",
      "ضبط أنظمة التكييف والمرافق",
      "التحكم في عمليات تحلية ومعالجة المياه",
    ],
    relatedProductSlugs: ["electric-actuators", "industrial-ball-valves"],
    relatedBrandSlugs: ["flowserve", "samson", "fisher"],
    catalogues: [
      {
        id: "control-valves-datasheet",
        title_en: "Control Valves Datasheet",
        title_ar: "نشرة بيانات صمامات التحكم",
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
    id: "pressure-relief-valves",
    slug: "pressure-relief-valves",
    name_en: "Pressure Relief Valves",
    name_ar: "صمامات تخفيف الضغط",
    shortDescription_en:
      "Pressure relief valves to protect piping and vessels from overpressure.",
    shortDescription_ar:
      "صمامات تخفيف ضغط لحماية المواسير والأوعية من الضغط الزائد.",
    longDescription_en:
      "Pressure relief valves that protect piping, vessels, and equipment from overpressure conditions by opening at a set pressure. We source units matched to your system's set-pressure and relief-capacity requirement.",
    longDescription_ar:
      "صمامات تخفيف ضغط تحمي المواسير والأوعية والمعدات من حالات الضغط الزائد عن طريق الفتح عند ضغط محدد مسبقًا. نقوم بتوريد الوحدات المطابقة لضغط الضبط وسعة التخفيف المطلوبة في نظامكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    features_en: [
      "Spring-loaded direct-acting or pilot-operated designs",
      "Set pressure adjustable or factory pre-set on request",
      "Flanged or screwed connections to suit system design",
    ],
    features_ar: [
      "تصميمات مباشرة تعمل بالنابض أو تعمل بالطيار",
      "ضغط ضبط قابل للتعديل أو مُعد مسبقًا من المصنع عند الطلب",
      "توصيلات بشفة أو ملولبة بما يناسب تصميم النظام",
    ],
    specifications: [
      {
        label_en: "Valve sizes",
        label_ar: "قياسات الصمام",
        value: 'DN15–DN200 (½"–8")',
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Connection",
        label_ar: "التوصيل",
        value: "Flanged or screwed inlet/outlet",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Set pressure range",
        label_ar: "نطاق ضغط الضبط",
        value: "Up to approx. 400 bar, application-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Relief capacity",
        label_ar: "سعة التخفيف",
        value: "Sized per system relief-capacity calculation",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Body material",
        label_ar: "خامة الجسم",
        value: "Carbon steel, stainless steel, or bronze",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Spring/seat material",
        label_ar: "خامة النابض/المقعد",
        value: "Stainless steel spring, PTFE or metal seat options",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to API 526 for flanged steel pressure relief valve sizing",
      },
    ],
    applications_en: [
      "Overpressure protection for pressure vessels and storage tanks",
      "Boiler and steam system safety relief",
      "Process piping overpressure protection",
      "Compressed air and gas system relief",
      "Hydraulic system overpressure protection",
    ],
    applications_ar: [
      "حماية الأوعية الضاغطة وخزانات التخزين من الضغط الزائد",
      "تخفيف الضغط الآمن لأنظمة المراجل والبخار",
      "حماية مواسير العمليات من الضغط الزائد",
      "تخفيف الضغط في أنظمة الهواء والغاز المضغوط",
      "حماية الأنظمة الهيدروليكية من الضغط الزائد",
    ],
    relatedProductSlugs: ["industrial-gate-valves", "control-valves"],
    relatedBrandSlugs: ["crosby", "leser", "farris"],
    catalogues: [
      {
        id: "pressure-relief-valves-datasheet",
        title_en: "Pressure Relief Valves Datasheet",
        title_ar: "نشرة بيانات صمامات تخفيف الضغط",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-equipment/pressure-relief-valves.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "electric-actuators",
    slug: "electric-actuators",
    name_en: "Electric Valve Actuators",
    name_ar: "محركات تشغيل كهربائية للصمامات",
    shortDescription_en:
      "Electric actuators for remote and automated valve operation.",
    shortDescription_ar:
      "محركات تشغيل كهربائية لتشغيل الصمامات عن بُعد وبشكل آلي.",
    longDescription_en:
      "Electric actuators for remote, automated valve operation across industrial process and utility systems. We source units matched to your valve torque requirement and control interface.",
    longDescription_ar:
      "محركات تشغيل كهربائية لتشغيل الصمامات عن بُعد وبشكل آلي عبر أنظمة العمليات الصناعية والمرافق. نقوم بتوريد الوحدات المطابقة لمتطلبات عزم الدوران للصمام وواجهة التحكم لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "industrial-valves-actuators",
    features_en: [
      "Quarter-turn or multi-turn configurations",
      "On/off or modulating control options",
      "Manual override handwheel for local operation",
    ],
    features_ar: [
      "تكوينات ربع دورة أو متعددة اللفات",
      "خيارات تحكم فتح/إغلاق أو تعديلي",
      "عجلة يدوية احتياطية للتشغيل المحلي",
    ],
    specifications: [
      {
        label_en: "Torque range",
        label_ar: "نطاق عزم الدوران",
        value: "Up to approx. 4,000 Nm, application-dependent",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Mounting",
        label_ar: "التركيب",
        value: "ISO 5211-compliant mounting flange and drive",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Operation type",
        label_ar: "نوع التشغيل",
        value: "On/off (quarter-turn or multi-turn) or modulating duty",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Power supply",
        label_ar: "مصدر التغذية",
        value: "Single-phase or three-phase, 24V DC to 400V AC options",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Enclosure rating",
        label_ar: "تصنيف الحماية",
        value: "IP67 standard, higher ratings available",
        group_en: "Protection",
        group_ar: "الحماية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to ISO 5211 mounting flange and drive standard",
      },
    ],
    applications_en: [
      "Automated on/off valve operation in process plants",
      "Remote valve control for water and wastewater networks",
      "Modulating control loop integration",
      "Hazardous-area valve automation (explosion-proof variants)",
      "Retrofit automation of manually operated valves",
    ],
    applications_ar: [
      "التشغيل الآلي للصمامات (فتح/إغلاق) في منشآت العمليات",
      "التحكم عن بُعد بالصمامات في شبكات المياه والصرف الصحي",
      "الدمج في حلقات التحكم التعديلي",
      "أتمتة الصمامات في المناطق الخطرة (نسخ مقاومة للانفجار)",
      "أتمتة الصمامات اليدوية الحالية",
    ],
    relatedProductSlugs: ["control-valves", "industrial-ball-valves"],
    relatedBrandSlugs: ["auma", "rotork", "limitorque"],
    catalogues: [
      {
        id: "electric-actuators-datasheet",
        title_en: "Electric Valve Actuators Datasheet",
        title_ar: "نشرة بيانات محركات التشغيل الكهربائية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/industrial-equipment/electric-actuators.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
