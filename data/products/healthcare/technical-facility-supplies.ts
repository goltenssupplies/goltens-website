import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Technical Supplies & General Facility Equipment category. */
export const healthcareTechnicalFacilitySupplies: Product[] = [
  {
    id: "hvac-ventilation-equipment",
    slug: "hvac-ventilation-equipment",
    name_en: "HVAC & Ventilation Equipment",
    name_ar: "معدات التكييف والتهوية",
    shortDescription_en:
      "HVAC and ventilation equipment for hospital air handling.",
    shortDescription_ar: "معدات تكييف وتهوية لأنظمة معالجة الهواء بالمستشفى.",
    longDescription_en:
      "HVAC and ventilation equipment for air handling, sourced to your area coverage, air-change rate, and system-type requirement.",
    longDescription_ar:
      "معدات تكييف وتهوية لأنظمة معالجة الهواء، يتم توريدها وفق مساحة التغطية ومعدل تبديل الهواء ونوع النظام المطلوب لديكم.",
    sectorId: "healthcare",
    categoryId: "technical-facility-supplies",
    features_en: [
      "Split, VRF, and air-handling-unit (AHU) system options",
      "HEPA and multi-stage filtration options for controlled areas",
      "Sized to your area coverage and required air-change rate",
    ],
    features_ar: [
      "خيارات أنظمة سبليت، VRF، ووحدات معالجة الهواء (AHU)",
      "خيارات ترشيح HEPA ومتعدد المراحل للمناطق ذات المتطلبات الخاصة",
      "مقاسة وفق مساحة التغطية ومعدل تبديل الهواء المطلوب",
    ],
    specifications: [
      {
        label_en: "Cooling capacity range",
        label_ar: "نطاق سعة التبريد",
        value: "1 – 500 tons of refrigeration (TR), system-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Airflow rate range",
        label_ar: "نطاق معدل تدفق الهواء",
        value: "Up to approx. 50,000 m³/h per unit",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "System type",
        label_ar: "نوع النظام",
        value: "Split, VRF, or ducted air handling unit (AHU)",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Filtration grade",
        label_ar: "درجة الترشيح",
        value: "Standard panel filters up to HEPA-grade stages",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Ventilation rates for healthcare facilities typically referenced against ASHRAE 170 guidance",
      },
    ],
    applications_en: [
      "Air handling infrastructure for clinical and ward areas",
      "General ward and patient room climate control",
      "Isolation room ventilation infrastructure",
      "Plant room and back-of-house cooling",
      "Administrative and office space air conditioning",
    ],
    applications_ar: [
      "بنية تحتية لمعالجة الهواء بالمناطق السريرية وأقسام الرعاية",
      "التحكم بمناخ الأقسام العامة وغرف المرضى",
      "بنية تحتية لتهوية غرف العزل",
      "تبريد غرف المعدات ومناطق الخدمات",
      "تكييف المساحات الإدارية والمكتبية",
    ],
    relatedProductSlugs: [
      "general-fit-out-finishing-materials",
      "wayfinding-facility-signage",
    ],
    relatedBrandSlugs: ["daikin", "carrier", "trane"],
    catalogues: [
      {
        id: "hvac-ventilation-equipment-datasheet",
        title_en: "HVAC & Ventilation Equipment Datasheet",
        title_ar: "نشرة بيانات معدات التكييف والتهوية",
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
    id: "general-fit-out-finishing-materials",
    slug: "general-fit-out-finishing-materials",
    name_en: "General Fit-Out & Finishing Materials",
    name_ar: "مواد التجهيز والتشطيب العامة",
    shortDescription_en:
      "General fit-out and finishing materials for hospital administrative spaces.",
    shortDescription_ar: "مواد تجهيز وتشطيب عامة للمساحات الإدارية بالمستشفى.",
    longDescription_en:
      "General fit-out and finishing materials for hospital administrative and back-of-house spaces, sourced to your project scope and finishing specification.",
    longDescription_ar:
      "مواد تجهيز وتشطيب عامة للمساحات الإدارية ومناطق الخدمات بالمستشفى، يتم توريدها وفق نطاق المشروع ومواصفات التشطيب لديكم.",
    sectorId: "healthcare",
    categoryId: "technical-facility-supplies",
    features_en: [
      "Flooring, ceiling system, and wall-protection material ranges",
      "Durability grades matched to high-traffic facility use",
      "Sourced to your project's finishing specification",
    ],
    features_ar: [
      "مجموعات مواد أرضيات وأسقف وحماية جدران",
      "درجات متانة مطابقة للاستخدام عالي الحركة بالمنشأة",
      "يتم توريدها وفق مواصفات التشطيب لمشروعكم",
    ],
    specifications: [
      {
        label_en: "Material categories",
        label_ar: "فئات المواد",
        value: "Flooring, suspended ceiling systems, and wall protection",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Durability grade",
        label_ar: "درجة المتانة",
        value: "Commercial/institutional high-traffic grade",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Fire rating",
        label_ar: "تصنيف مقاومة الحريق",
        value:
          "Sourced to meet your project's specified fire-rating requirement",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Finish options",
        label_ar: "خيارات التشطيب",
        value: "Range of colors, textures, and wear-layer thicknesses",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Administrative office fit-out",
      "Corridor and back-of-house finishing",
      "Reception and public area finishing",
      "Storage and utility area finishing",
      "General renovation and refurbishment projects",
    ],
    applications_ar: [
      "تجهيز المكاتب الإدارية",
      "تشطيب الممرات ومناطق الخدمات",
      "تشطيب مناطق الاستقبال والمساحات العامة",
      "تشطيب مناطق التخزين والمرافق",
      "مشروعات التجديد وإعادة التأهيل العامة",
    ],
    relatedProductSlugs: [
      "hvac-ventilation-equipment",
      "wayfinding-facility-signage",
    ],
    catalogues: [
      {
        id: "general-fit-out-finishing-materials-datasheet",
        title_en: "General Fit-Out & Finishing Materials Datasheet",
        title_ar: "نشرة بيانات مواد التجهيز والتشطيب العامة",
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
    id: "wayfinding-facility-signage",
    slug: "wayfinding-facility-signage",
    name_en: "Wayfinding & Facility Signage",
    name_ar: "اللوحات الإرشادية والتوجيهية للمرافق",
    shortDescription_en:
      "Wayfinding and general signage for hospital buildings.",
    shortDescription_ar: "لوحات إرشادية وتوجيهية عامة لمباني المستشفى.",
    longDescription_en:
      "Wayfinding and general facility signage for hospital buildings, sourced to your site layout and facility-management requirement.",
    longDescription_ar:
      "لوحات إرشادية وتوجيهية عامة لمباني المستشفى، يتم توريدها وفق مخطط الموقع ومتطلبات إدارة المرافق لديكم.",
    sectorId: "healthcare",
    categoryId: "technical-facility-supplies",
    features_en: [
      "Illuminated and non-illuminated sign options",
      "Wall-mounted, ceiling-hung, and freestanding formats",
      "Custom sizing and layout to your wayfinding plan",
    ],
    features_ar: [
      "خيارات لوحات مضيئة وغير مضيئة",
      "أشكال تركيب على الحائط أو معلقة بالسقف أو قائمة بذاتها",
      "مقاسات وتصميم مخصص وفق خطة الإرشاد لديكم",
    ],
    specifications: [
      {
        label_en: "Material type",
        label_ar: "نوع الخامة",
        value: "Aluminum composite panel or acrylic",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Mounting type",
        label_ar: "طريقة التركيب",
        value: "Wall-mounted, ceiling-hung, or freestanding",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Illumination",
        label_ar: "الإضاءة",
        value: "Backlit (LED) or non-illuminated options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Sizing",
        label_ar: "المقاسات",
        value: "Standard directional signs to large-format site signage",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Department and ward directional signage",
      "Emergency exit and evacuation route signage",
      "Parking and external site signage",
      "Room identification and door signage",
      "Accessibility and visitor wayfinding signage",
    ],
    applications_ar: [
      "لوحات توجيهية للأقسام والأجنحة",
      "لوحات مخارج الطوارئ ومسارات الإخلاء",
      "لوحات مواقف السيارات والموقع الخارجي",
      "لوحات تعريف الغرف والأبواب",
      "لوحات إرشاد الزوار وإتاحة الوصول",
    ],
    relatedProductSlugs: [
      "hvac-ventilation-equipment",
      "general-fit-out-finishing-materials",
    ],
    catalogues: [
      {
        id: "wayfinding-facility-signage-datasheet",
        title_en: "Wayfinding & Facility Signage Datasheet",
        title_ar: "نشرة بيانات اللوحات الإرشادية والتوجيهية",
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
