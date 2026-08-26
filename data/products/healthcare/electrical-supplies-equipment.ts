import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Electrical Supplies & Equipment category. */
export const healthcareElectricalSuppliesEquipment: Product[] = [
  {
    id: "general-purpose-electric-motors",
    slug: "general-purpose-electric-motors",
    name_en: "Electric Motors",
    name_ar: "محركات كهربائية",
    shortDescription_en:
      "General-purpose electric motors for hospital mechanical systems.",
    shortDescription_ar:
      "محركات كهربائية عامة الاستخدام لأنظمة المستشفى الميكانيكية.",
    longDescription_en:
      "Electric motors for mechanical systems — pumps, fans, and air handling units — sourced to your hospital's power, mounting, and duty-cycle requirement.",
    longDescription_ar:
      "محركات كهربائية للأنظمة الميكانيكية — المضخات والمراوح ووحدات معالجة الهواء — يتم توريدها وفق متطلبات القدرة والتركيب ودورة التشغيل في مستشفاكم.",
    sectorId: "healthcare",
    categoryId: "electrical-supplies-equipment",
    features_en: [
      "Standard IEC frame sizes for straightforward replacement",
      "Continuous (S1) and intermittent duty-cycle options",
      "Sourced to your existing nameplate for like-for-like replacement",
    ],
    features_ar: [
      "مقاسات إطار قياسية وفق IEC لتسهيل الاستبدال",
      "خيارات دورة تشغيل مستمرة (S1) أو متقطعة",
      "يتم توريدها وفق بيانات اللوحة التعريفية الحالية للاستبدال المطابق",
    ],
    specifications: [
      {
        label_en: "Power rating range",
        label_ar: "نطاق القدرة",
        value: "0.37 kW – 75 kW, application-dependent",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Voltage / phase",
        label_ar: "الجهد / الطور",
        value: "Single-phase or three-phase, 230V/400V typical",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Mounting type",
        label_ar: "طريقة التركيب",
        value: "B3 (foot-mounted), B5 (flange-mounted), or B35",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "IP rating",
        label_ar: "تصنيف الحماية IP",
        value: "IP55 standard, higher ratings available",
        group_en: "Protection",
        group_ar: "الحماية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically manufactured/tested to IEC 60034",
      },
    ],
    applications_en: [
      "HVAC air handling unit fan drives",
      "Chilled and hot water circulation pump drives",
      "Exhaust and ventilation fan drives",
      "General mechanical equipment drives across plant rooms",
      "Standby and duty/assist pump set drives",
    ],
    applications_ar: [
      "تشغيل مراوح وحدات معالجة الهواء بالتكييف",
      "تشغيل مضخات تدوير المياه الباردة والساخنة",
      "تشغيل مراوح الشفط والتهوية",
      "تشغيل المعدات الميكانيكية العامة في غرف المعدات",
      "تشغيل مجموعات المضخات الاحتياطية والمساعدة",
    ],
    relatedProductSlugs: [
      "electrical-enclosures-junction-boxes",
      "indoor-lighting-fixtures",
    ],
    relatedBrandSlugs: ["abb", "weg", "siemens"],
    catalogues: [
      {
        id: "general-purpose-electric-motors-datasheet",
        title_en: "Electric Motors Datasheet",
        title_ar: "نشرة بيانات المحركات الكهربائية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    // SEO-only title override — distinguishes this from the identically
    // named "Electric Motors" product in fire-protection/fire-pumps.ts,
    // which was causing a duplicate <title> across the two pages.
    // `name_en`/`name_ar` (the on-page product name) are untouched.
    seo: {
      title_en: "Electric Motors for Hospital Mechanical Systems",
      title_ar: "محركات كهربائية للأنظمة الميكانيكية بالمستشفيات",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "electrical-enclosures-junction-boxes",
    slug: "electrical-enclosures-junction-boxes",
    name_en: "Electrical Enclosures & Junction Boxes",
    name_ar: "صناديق ولوحات التوصيل الكهربائية",
    shortDescription_en:
      "Enclosures and junction boxes for hospital electrical installations.",
    shortDescription_ar:
      "صناديق ولوحات توصيل كهربائية للتركيبات الكهربائية بالمستشفى.",
    longDescription_en:
      "Electrical enclosures and junction boxes for wiring and equipment protection, sourced to your ingress-protection rating and installation environment.",
    longDescription_ar:
      "صناديق ولوحات توصيل كهربائية لحماية الأسلاك والمعدات، يتم توريدها وفق تصنيف الحماية من التسرب وبيئة التركيب لديكم.",
    sectorId: "healthcare",
    categoryId: "electrical-supplies-equipment",
    features_en: [
      "Wall-mounted, floor-standing, and surface-mounted options",
      "Wet-area and outdoor-rated enclosures available",
      "Metal and non-metallic (polycarbonate) material options",
    ],
    features_ar: [
      "خيارات تركيب على الحائط أو قائمة على الأرض أو سطحية",
      "صناديق مخصصة للمناطق الرطبة والاستخدام الخارجي",
      "خيارات خامة معدنية أو غير معدنية (بولي كربونات)",
    ],
    specifications: [
      {
        label_en: "IP rating range",
        label_ar: "نطاق تصنيف الحماية IP",
        value: "IP54 – IP66",
        group_en: "Protection",
        group_ar: "الحماية",
      },
      {
        label_en: "Material",
        label_ar: "الخامة",
        value: "Mild steel, stainless steel, or polycarbonate",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Mounting type",
        label_ar: "طريقة التركيب",
        value: "Wall-mounted, surface-mounted, or flush",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Size range",
        label_ar: "نطاق المقاسات",
        value: "Small junction boxes to full equipment enclosures",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "IP ratings typically tested to IEC 60529",
      },
    ],
    applications_en: [
      "Cable termination points in mechanical plant rooms",
      "Outdoor electrical connections and junctions",
      "Wet-area equipment protection (laundry, kitchen, sterilization)",
      "Control panel housings for facility equipment",
      "General distribution wiring protection across the building",
    ],
    applications_ar: [
      "نقاط توصيل الكابلات في غرف المعدات الميكانيكية",
      "التوصيلات الكهربائية الخارجية والوصلات",
      "حماية معدات المناطق الرطبة (المغاسل، المطبخ، التعقيم)",
      "أغلفة لوحات التحكم لمعدات المرافق",
      "حماية تمديدات التوزيع العامة في المبنى",
    ],
    relatedProductSlugs: [
      "general-purpose-electric-motors",
      "indoor-lighting-fixtures",
    ],
    relatedBrandSlugs: ["schneider-electric", "rittal", "hensel"],
    catalogues: [
      {
        id: "electrical-enclosures-junction-boxes-datasheet",
        title_en: "Electrical Enclosures & Junction Boxes Datasheet",
        title_ar: "نشرة بيانات صناديق ولوحات التوصيل الكهربائية",
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
    id: "indoor-lighting-fixtures",
    slug: "indoor-lighting-fixtures",
    name_en: "Lighting Fixtures & Units",
    name_ar: "وحدات ومعدات الإنارة",
    shortDescription_en:
      "Lighting fixtures for hospital corridors, back-of-house, and general areas.",
    shortDescription_ar:
      "وحدات إنارة لممرات المستشفى ومناطق الخدمات والمساحات العامة.",
    longDescription_en:
      "Lighting fixtures and units for corridors, back-of-house areas, and general spaces, sourced to your illumination level and mounting requirement.",
    longDescription_ar:
      "وحدات ومعدات إنارة لممرات المستشفى ومناطق الخدمات والمساحات العامة، يتم توريدها وفق مستوى الإضاءة المطلوب وطريقة التركيب لديكم.",
    sectorId: "healthcare",
    categoryId: "electrical-supplies-equipment",
    features_en: [
      "LED fixtures with a range of color-temperature options",
      "Wet-area and damp-proof options for plant rooms",
      "Emergency and non-maintained battery-backed options available",
    ],
    features_ar: [
      "وحدات LED بخيارات متعددة لدرجة حرارة اللون",
      "خيارات مقاومة للرطوبة لغرف المعدات",
      "خيارات إضاءة طوارئ ببطارية احتياطية عند الطلب",
    ],
    specifications: [
      {
        label_en: "Luminous output range",
        label_ar: "نطاق الإضاءة الناتجة",
        value: "Approx. 1,000 – 6,000 lumens per fixture",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Power rating range",
        label_ar: "نطاق القدرة",
        value: "Approx. 10 W – 60 W per fixture",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Color temperature",
        label_ar: "درجة حرارة اللون",
        value: "3000K – 6500K, application-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "IP rating",
        label_ar: "تصنيف الحماية IP",
        value: "IP20 for general areas, IP65 for wet areas",
        group_en: "Protection",
        group_ar: "الحماية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically manufactured/tested to IEC 60598",
      },
    ],
    applications_en: [
      "Corridor and circulation area lighting",
      "Back-of-house and storage area lighting",
      "Stairwell and emergency egress lighting",
      "Mechanical and electrical plant room lighting",
      "General administrative and office space lighting",
    ],
    applications_ar: [
      "إنارة الممرات ومناطق الحركة",
      "إنارة مناطق الخدمات والتخزين",
      "إنارة السلالم ومسارات إخلاء الطوارئ",
      "إنارة غرف المعدات الكهروميكانيكية",
      "إنارة المساحات الإدارية والمكتبية العامة",
    ],
    relatedProductSlugs: [
      "general-purpose-electric-motors",
      "electrical-enclosures-junction-boxes",
    ],
    relatedBrandSlugs: ["signify", "osram", "thorn"],
    catalogues: [
      {
        id: "indoor-lighting-fixtures-datasheet",
        title_en: "Lighting Fixtures & Units Datasheet",
        title_ar: "نشرة بيانات وحدات ومعدات الإنارة",
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
