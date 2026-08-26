import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Maintenance & Operations Equipment and Materials category. */
export const healthcareMaintenanceOperationsEquipment: Product[] = [
  {
    id: "preventive-maintenance-supplies",
    slug: "preventive-maintenance-supplies",
    name_en: "Preventive Maintenance Supplies",
    name_ar: "مستلزمات الصيانة الدورية",
    shortDescription_en:
      "Consumable supplies for hospital scheduled maintenance work.",
    shortDescription_ar: "مستلزمات استهلاكية لأعمال الصيانة الدورية بالمستشفى.",
    longDescription_en:
      "Consumable supplies for scheduled preventive maintenance work — filters, belts, and related replacement items — sourced to your equipment inventory and maintenance schedule.",
    longDescription_ar:
      "مستلزمات استهلاكية لأعمال الصيانة الدورية المجدولة — فلاتر وسيور وقطع استبدال ذات صلة — يتم توريدها وفق قائمة معداتكم وجدول الصيانة لديكم.",
    sectorId: "healthcare",
    categoryId: "maintenance-operations-equipment",
    features_en: [
      "Filters, belts, and general replacement consumables in one line",
      "Matched to your equipment inventory and OEM specification",
      "Scheduled or bulk replenishment for maintenance contracts",
    ],
    features_ar: [
      "فلاتر وسيور ومستلزمات استبدال عامة في خط توريد واحد",
      "مطابقة لقائمة معداتكم ومواصفات الشركة المصنّعة الأصلية",
      "تجديد مجدول أو بالجملة لعقود الصيانة لديكم",
    ],
    specifications: [
      {
        label_en: "Item categories",
        label_ar: "فئات الأصناف",
        value: "Air/water filters, drive belts, seals, and gaskets",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Compatibility",
        label_ar: "التوافق",
        value: "Matched to your existing equipment's OEM specification",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Replacement interval",
        label_ar: "فترة الاستبدال",
        value: "Typically 1 – 12 months, equipment- and usage-dependent",
        group_en: "Maintenance",
        group_ar: "الصيانة",
      },
      {
        label_en: "Supply format",
        label_ar: "طريقة التوريد",
        value: "Individual units or scheduled bulk replenishment",
        group_en: "Supply",
        group_ar: "التوريد",
      },
    ],
    applications_en: [
      "HVAC filter replacement programs",
      "Mechanical drive belt replacement",
      "Scheduled equipment servicing kits",
      "Plant room preventive maintenance rounds",
      "Spare consumables stock for maintenance service contracts",
    ],
    applications_ar: [
      "برامج استبدال فلاتر التكييف",
      "استبدال سيور الحركة الميكانيكية",
      "أطقم صيانة دورية مجدولة للمعدات",
      "جولات الصيانة الوقائية لغرف المعدات",
      "مخزون مستلزمات احتياطية لعقود الصيانة",
    ],
    relatedProductSlugs: [
      "industrial-hand-power-tools",
      "material-handling-trolleys-hoists",
    ],
    catalogues: [
      {
        id: "preventive-maintenance-supplies-datasheet",
        title_en: "Preventive Maintenance Supplies Datasheet",
        title_ar: "نشرة بيانات مستلزمات الصيانة الدورية",
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
    id: "industrial-hand-power-tools",
    slug: "industrial-hand-power-tools",
    name_en: "Industrial Hand & Power Tools",
    name_ar: "أدوات يدوية وكهربائية صناعية",
    shortDescription_en:
      "Hand and power tools for hospital facility operations and repairs.",
    shortDescription_ar:
      "أدوات يدوية وكهربائية لعمليات وإصلاحات مرافق المستشفى.",
    longDescription_en:
      "Hand and power tools for facility operations and repair work, sourced to your maintenance team's trade requirement and daily workload.",
    longDescription_ar:
      "أدوات يدوية وكهربائية لعمليات وأعمال إصلاح المرافق، يتم توريدها وفق تخصص فريق الصيانة لديكم وحجم العمل اليومي.",
    sectorId: "healthcare",
    categoryId: "maintenance-operations-equipment",
    features_en: [
      "Corded and cordless (battery) power tool options",
      "Professional/industrial duty-rated tools",
      "Individual tools or complete trade tool-kit sets",
    ],
    features_ar: [
      "خيارات أدوات كهربائية سلكية أو تعمل بالبطارية",
      "أدوات مصنّفة للاستخدام المهني والصناعي",
      "أدوات فردية أو أطقم أدوات متكاملة حسب التخصص",
    ],
    specifications: [
      {
        label_en: "Tool categories",
        label_ar: "فئات الأدوات",
        value: "Drills, angle grinders, saws, and general hand tool sets",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Power source",
        label_ar: "مصدر الطاقة",
        value: "Corded electric or cordless battery options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Battery capacity range",
        label_ar: "نطاق سعة البطارية",
        value: "12V – 18V, cordless models",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Duty rating",
        label_ar: "تصنيف الاستخدام",
        value: "Professional/industrial grade",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Facility electrical and mechanical repair work",
      "Plumbing and pipefitting maintenance tasks",
      "Carpentry and general fit-out repairs",
      "Emergency breakdown maintenance response",
      "Workshop and engineering department daily use",
    ],
    applications_ar: [
      "أعمال إصلاح المرافق الكهربائية والميكانيكية",
      "مهام صيانة السباكة وتمديد الأنابيب",
      "أعمال النجارة وإصلاحات التجهيز العامة",
      "الاستجابة لأعمال الصيانة الطارئة",
      "الاستخدام اليومي في الورش وقسم الهندسة",
    ],
    relatedProductSlugs: [
      "preventive-maintenance-supplies",
      "material-handling-trolleys-hoists",
    ],
    relatedBrandSlugs: ["bosch", "makita", "dewalt"],
    catalogues: [
      {
        id: "industrial-hand-power-tools-datasheet",
        title_en: "Industrial Hand & Power Tools Datasheet",
        title_ar: "نشرة بيانات الأدوات اليدوية والكهربائية الصناعية",
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
    id: "material-handling-trolleys-hoists",
    slug: "material-handling-trolleys-hoists",
    name_en: "Material Handling Trolleys & Hoists",
    name_ar: "عربات ورافعات مناولة المواد",
    shortDescription_en:
      "Trolleys and hoists for hospital material handling and maintenance work.",
    shortDescription_ar:
      "عربات ورافعات لمناولة المواد وأعمال الصيانة بالمستشفى.",
    longDescription_en:
      "Material handling trolleys and hoists for maintenance and logistics work, sourced to your load capacity and site-access requirement.",
    longDescription_ar:
      "عربات ورافعات لمناولة المواد وأعمال الصيانة واللوجستيات، يتم توريدها وفق سعة الحمل ومتطلبات الوصول للموقع لديكم.",
    sectorId: "healthcare",
    categoryId: "maintenance-operations-equipment",
    features_en: [
      "Platform, shelf, and cage trolley configurations",
      "Manual and electric chain hoist options",
      "Sized to your load capacity and site-access constraints",
    ],
    features_ar: [
      "تكوينات عربات مسطحة أو برفوف أو أقفاص",
      "خيارات رافعات سلسلة يدوية أو كهربائية",
      "مقاسة وفق سعة الحمل وقيود الوصول للموقع لديكم",
    ],
    specifications: [
      {
        label_en: "Trolley load capacity range",
        label_ar: "نطاق سعة حمل العربات",
        value: "150 kg – 1,000 kg, model-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Hoist lifting capacity range",
        label_ar: "نطاق سعة رفع الرافعات",
        value: "500 kg – 5,000 kg, model-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Hoist type",
        label_ar: "نوع الرافعة",
        value: "Manual chain block or electric chain hoist",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Trolley type",
        label_ar: "نوع العربة",
        value: "Platform, shelf, or cage configurations",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Electric chain hoists typically manufactured/tested to EN 14492-2",
      },
    ],
    applications_en: [
      "Linen and laundry logistics between departments",
      "General stores and warehouse material movement",
      "Maintenance workshop lifting tasks",
      "Equipment relocation during facility upgrades",
      "Goods receiving and internal distribution logistics",
    ],
    applications_ar: [
      "لوجستيات نقل الكتان والمغسولات بين الأقسام",
      "حركة المواد في المستودعات ومناطق التخزين العامة",
      "مهام الرفع في ورش الصيانة",
      "نقل المعدات أثناء أعمال تطوير المرافق",
      "استلام البضائع وتوزيعها داخليًا",
    ],
    relatedProductSlugs: [
      "preventive-maintenance-supplies",
      "industrial-hand-power-tools",
    ],
    relatedBrandSlugs: ["yale", "demag"],
    catalogues: [
      {
        id: "material-handling-trolleys-hoists-datasheet",
        title_en: "Material Handling Trolleys & Hoists Datasheet",
        title_ar: "نشرة بيانات عربات ورافعات مناولة المواد",
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
