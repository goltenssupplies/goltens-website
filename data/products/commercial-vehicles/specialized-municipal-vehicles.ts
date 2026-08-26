import type { Product } from "@/data/products/types";

/** Commercial Vehicles & Fleet Solutions → Specialized & Municipal Vehicles category. */
export const commercialSpecializedMunicipalVehicles: Product[] = [
  {
    id: "refuse-collection-vehicles",
    slug: "refuse-collection-vehicles",
    name_en: "Refuse Collection Vehicles",
    name_ar: "مركبات جمع المخلفات",
    shortDescription_en:
      "Refuse collection vehicles for municipal waste collection operations.",
    shortDescription_ar: "مركبات جمع مخلفات لعمليات جمع النفايات البلدية.",
    longDescription_en:
      "Refuse collection vehicles for municipal and commercial waste collection operations, sourced to your required compaction capacity and collection route type.",
    longDescription_ar:
      "مركبات جمع مخلفات لعمليات جمع النفايات البلدية والتجارية، يتم توريدها وفق سعة الكبس المطلوبة ونوع مسار الجمع لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    applications_en: [
      "Municipal household waste collection",
      "Commercial and bulk waste collection",
      "Segregated recycling material collection",
      "Transfer station support runs",
    ],
    applications_ar: [
      "جمع النفايات المنزلية البلدية",
      "جمع النفايات التجارية والكبيرة الحجم",
      "جمع مواد إعادة التدوير المفروزة",
      "رحلات دعم محطات النقل",
    ],
    features_en: [
      "Rear-loading, side-loading, and front-loading configurations available",
      "Compaction body sized to route density and collection frequency",
      "Split-body options for source-segregated recycling",
    ],
    features_ar: [
      "متوفرة بتكوينات تحميل خلفي أو جانبي أو أمامي",
      "هيكل كبس مقاس وفق كثافة المسار وتكرار الجمع",
      "خيارات هيكل مقسم لإعادة التدوير المفروزة من المصدر",
    ],
    specifications: [
      {
        label_en: "Compaction ratio",
        label_ar: "نسبة الكبس",
        value: "Approx. 4:1 to 6:1",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Body/hopper capacity",
        label_ar: "سعة الهيكل/الحاوية",
        value: "Approx. 10 – 20 m³",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Chassis GVW range",
        label_ar: "الوزن الإجمالي للشاسيه",
        value: "Approx. 12 – 26 tonnes",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Collection type",
        label_ar: "نوع الجمع",
        value: "Rear-loader, side-loader, or front-loader configurations",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
    ],
    relatedProductSlugs: [
      "street-sweeping-vehicles",
      "sewer-cleaning-vehicles",
    ],
    relatedBrandSlugs: ["geesink-norba", "faun", "mcneilus"],
    catalogues: [
      {
        id: "refuse-collection-vehicles-datasheet",
        title_en: "Refuse Collection Vehicles Datasheet",
        title_ar: "نشرة بيانات مركبات جمع المخلفات",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/commercial-vehicles/refuse-collection-vehicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ambulances",
    slug: "ambulances",
    name_en: "Ambulances",
    name_ar: "سيارات الإسعاف",
    shortDescription_en:
      "Ambulance vehicles fitted out for emergency medical transport.",
    shortDescription_ar: "سيارات إسعاف مجهزة للنقل الطبي الطارئ.",
    longDescription_en:
      "Ambulance vehicles fitted out for emergency medical transport, sourced to the equipment and layout requirements of the medical authority operating them.",
    longDescription_ar:
      "سيارات إسعاف مجهزة للنقل الطبي الطارئ، يتم توريدها وفق متطلبات التجهيز والتخطيط الداخلي للجهة الطبية المشغّلة لها.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    applications_en: [
      "Emergency medical response",
      "Inter-facility patient transport",
      "Remote and rural area medical service",
      "Event and industrial site medical standby",
      "Disaster and mass-casualty response support",
    ],
    applications_ar: [
      "الاستجابة الطبية الطارئة",
      "نقل المرضى بين المنشآت الصحية",
      "الخدمة الطبية في المناطق النائية والريفية",
      "الاستعداد الطبي في الفعاليات والمواقع الصناعية",
      "دعم الاستجابة للكوارث والحالات الجماعية",
    ],
    features_en: [
      "Van-based or cutaway chassis platforms",
      "Patient compartment fitted to the operating authority's medical equipment specification",
      "4x4 drivetrain options available for rough-terrain response",
    ],
    features_ar: [
      "قائمة على منصات شاسيه الفان أو الشاسيه المقطوع",
      "مقصورة مريض مجهزة وفق مواصفات المعدات الطبية للجهة المشغّلة",
      "خيارات دفع رباعي متاحة للاستجابة على التضاريس الوعرة",
    ],
    specifications: [
      {
        label_en: "Base chassis GVW",
        label_ar: "الوزن الإجمالي للشاسيه الأساسي",
        value: "Approx. 3.5 – 5 tonnes, typical range",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Body platform",
        label_ar: "منصة الهيكل",
        value: "Commonly built on van (panel) or cutaway van chassis",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Patient compartment fitout",
        label_ar: "تجهيز مقصورة المريض",
        value:
          "Fitted to the operating medical authority's equipment and layout requirement",
        group_en: "Equipment",
        group_ar: "التجهيزات",
      },
      {
        label_en: "Drivetrain",
        label_ar: "نظام الدفع",
        value:
          "4x2 standard; 4x4 available for rough-terrain or remote service",
        group_en: "Engine & Drivetrain",
        group_ar: "المحرك ونظام الدفع",
      },
    ],
    relatedProductSlugs: ["fuel-tankers", "water-tankers"],
    relatedBrandSlugs: ["mercedes-benz", "toyota", "ford"],
    catalogues: [
      {
        id: "ambulances-datasheet",
        title_en: "Ambulances Datasheet",
        title_ar: "نشرة بيانات سيارات الإسعاف",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/ambulances.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fuel-tankers",
    slug: "fuel-tankers",
    name_en: "Fuel Tankers",
    name_ar: "صهاريج الوقود",
    shortDescription_en:
      "Fuel tanker vehicles for bulk fuel distribution and site refueling.",
    shortDescription_ar:
      "مركبات صهاريج وقود لتوزيع الوقود بالجملة وتزويد المواقع.",
    longDescription_en:
      "Fuel tanker vehicles for bulk fuel distribution and site refueling operations, sourced to your required tank capacity and compartmentalization.",
    longDescription_ar:
      "مركبات صهاريج وقود لتوزيع الوقود بالجملة وعمليات تزويد المواقع بالوقود، يتم توريدها وفق سعة الخزان المطلوبة وتقسيمه لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    applications_en: [
      "Bulk fuel distribution to retail stations",
      "Site and generator refueling for construction and industrial operations",
      "Remote and off-grid fuel delivery",
      "Fleet depot refueling support",
    ],
    applications_ar: [
      "توزيع الوقود بالجملة لمحطات التجزئة",
      "تزويد المواقع والمولدات بالوقود للأعمال الإنشائية والصناعية",
      "توصيل الوقود للمناطق النائية وخارج الشبكة",
      "دعم تزويد مستودعات الأسطول بالوقود",
    ],
    features_en: [
      "Multi-compartment tanks for simultaneous multi-grade delivery",
      "Metered discharge and pump systems for accountable dispensing",
      "Aluminum or steel tank construction by payload and route requirement",
    ],
    features_ar: [
      "خزانات متعددة الحجرات لتوصيل درجات وقود متعددة في آن واحد",
      "أنظمة تفريغ وضخ مزودة بعدادات لتوزيع دقيق وموثق",
      "خزانات من الألمنيوم أو الصلب وفق الحمولة ومتطلبات المسار",
    ],
    specifications: [
      {
        label_en: "Tank capacity",
        label_ar: "سعة الخزان",
        value: "Approx. 15,000 – 45,000 liters",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Compartmentalization",
        label_ar: "تقسيم الحجرات",
        value: "Typically 2 – 6 compartments for grade segregation",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Tank construction",
        label_ar: "خامة تصنيع الخزان",
        value:
          "Aluminum construction common for weight-sensitive fuel payloads",
        group_en: "Construction",
        group_ar: "التصنيع",
      },
      {
        label_en: "Discharge system",
        label_ar: "نظام التفريغ",
        value: "Gravity or pump-assisted metered discharge",
        group_en: "Construction",
        group_ar: "التصنيع",
      },
    ],
    relatedProductSlugs: ["water-tankers", "ambulances"],
    relatedBrandSlugs: ["feldbinder", "heil-trailer"],
    catalogues: [
      {
        id: "fuel-tankers-datasheet",
        title_en: "Fuel Tankers Datasheet",
        title_ar: "نشرة بيانات صهاريج الوقود",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/fuel-tankers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "water-tankers",
    slug: "water-tankers",
    name_en: "Water Tankers",
    name_ar: "صهاريج المياه",
    shortDescription_en:
      "Water tanker vehicles for site supply, dust control, and municipal distribution.",
    shortDescription_ar:
      "مركبات صهاريج مياه لتزويد المواقع ومكافحة الغبار والتوزيع البلدي.",
    longDescription_en:
      "Water tanker vehicles for construction site supply, dust suppression, and municipal water distribution, sourced to your required tank capacity and discharge system.",
    longDescription_ar:
      "مركبات صهاريج مياه لتزويد مواقع الإنشاءات ومكافحة الغبار والتوزيع البلدي للمياه، يتم توريدها وفق سعة الخزان المطلوبة ونظام التصريف لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    applications_en: [
      "Construction site water supply",
      "Dust suppression on roads and sites",
      "Municipal potable and non-potable water distribution",
      "Auxiliary firefighting water support",
      "Agricultural irrigation support",
    ],
    applications_ar: [
      "تزويد مواقع الإنشاءات بالمياه",
      "مكافحة الغبار على الطرق والمواقع",
      "توزيع المياه الصالحة وغير الصالحة للشرب بلديًا",
      "الدعم المساعد لمياه مكافحة الحريق",
      "دعم الري الزراعي",
    ],
    features_en: [
      "Front, rear, or side spray-bar options for dust suppression",
      "Gravity or pump-assisted discharge systems",
      "Potable-grade tank lining option where required",
    ],
    features_ar: [
      "خيارات رشاشات أمامية أو خلفية أو جانبية لمكافحة الغبار",
      "أنظمة تفريغ بالجاذبية أو بمساعدة مضخة",
      "خيار بطانة خزان صالحة لمياه الشرب عند الحاجة",
    ],
    specifications: [
      {
        label_en: "Tank capacity",
        label_ar: "سعة الخزان",
        value: "Approx. 10,000 – 30,000 liters",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Discharge system",
        label_ar: "نظام التفريغ",
        value:
          "Gravity discharge, pump-assisted, or spray-bar for dust suppression",
        group_en: "Construction",
        group_ar: "التصنيع",
      },
      {
        label_en: "Tank construction",
        label_ar: "خامة تصنيع الخزان",
        value: "Steel or composite tank construction",
        group_en: "Construction",
        group_ar: "التصنيع",
      },
      {
        label_en: "Chassis base",
        label_ar: "الشاسيه الأساسي",
        value: "Mounted on 2- or 3-axle truck chassis depending on capacity",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
    ],
    relatedProductSlugs: ["fuel-tankers", "street-sweeping-vehicles"],
    relatedBrandSlugs: ["isuzu", "hino"],
    catalogues: [
      {
        id: "water-tankers-datasheet",
        title_en: "Water Tankers Datasheet",
        title_ar: "نشرة بيانات صهاريج المياه",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/water-tankers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "street-sweeping-vehicles",
    slug: "street-sweeping-vehicles",
    name_en: "Street Sweeping Vehicles",
    name_ar: "مركبات كنس الشوارع",
    shortDescription_en:
      "Street sweeping vehicles for municipal road cleaning operations.",
    shortDescription_ar: "مركبات كنس شوارع لعمليات تنظيف الطرق البلدية.",
    longDescription_en:
      "Street sweeping vehicles for municipal road cleaning and debris collection, sourced to your required sweeping width and hopper capacity.",
    longDescription_ar:
      "مركبات كنس شوارع لتنظيف الطرق البلدية وجمع المخلفات، يتم توريدها وفق عرض الكنس المطلوب وسعة الحاوية لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    applications_en: [
      "Municipal road and street cleaning",
      "Highway and airport pavement sweeping",
      "Construction site debris clearance",
      "Seasonal leaf and debris collection",
    ],
    applications_ar: [
      "تنظيف الطرق والشوارع البلدية",
      "كنس أرصفة الطرق السريعة والمطارات",
      "إزالة المخلفات من مواقع الإنشاءات",
      "جمع الأوراق والمخلفات الموسمية",
    ],
    features_en: [
      "Mechanical broom, vacuum, or regenerative-air sweeping systems",
      "Integrated water spray for dust suppression",
      "Compact chassis options for narrow urban streets",
    ],
    features_ar: [
      "أنظمة كنس ميكانيكية أو شفط أو هوائية متجددة",
      "رش مياه مدمج لمكافحة الغبار",
      "خيارات شاسيه مدمج يناسب الشوارع الحضرية الضيقة",
    ],
    specifications: [
      {
        label_en: "Sweeping width",
        label_ar: "عرض الكنس",
        value: "Approx. 2 – 4 m",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Hopper capacity",
        label_ar: "سعة الحاوية",
        value: "Approx. 2 – 9 m³",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Sweeping system",
        label_ar: "نظام الكنس",
        value: "Mechanical broom, vacuum, or regenerative-air systems",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Water tank capacity (dust suppression)",
        label_ar: "سعة خزان المياه (مكافحة الغبار)",
        value: "Approx. 500 – 2,000 liters",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
    ],
    relatedProductSlugs: [
      "refuse-collection-vehicles",
      "sewer-cleaning-vehicles",
    ],
    relatedBrandSlugs: ["johnston-sweepers", "bucher-municipal", "dulevo"],
    catalogues: [
      {
        id: "street-sweeping-vehicles-datasheet",
        title_en: "Street Sweeping Vehicles Datasheet",
        title_ar: "نشرة بيانات مركبات كنس الشوارع",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/commercial-vehicles/street-sweeping-vehicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "sewer-cleaning-vehicles",
    slug: "sewer-cleaning-vehicles",
    name_en: "Sewer Cleaning & Jetting Vehicles",
    name_ar: "مركبات تنظيف وشفط الصرف الصحي",
    shortDescription_en:
      "Combination jetting and vacuum vehicles for sewer and drainage line maintenance.",
    shortDescription_ar:
      "مركبات شفط وضخ مياه للصيانة الدورية لخطوط الصرف الصحي والتصريف.",
    longDescription_en:
      "Combination jetting and vacuum vehicles for sewer and drainage line cleaning and maintenance, sourced to your required tank capacity and jetting pressure.",
    longDescription_ar:
      "مركبات شفط وضخ مياه مدمجة لتنظيف وصيانة خطوط الصرف الصحي والتصريف، يتم توريدها وفق سعة الخزان وضغط الضخ المطلوب لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    applications_en: [
      "Sewer line jetting and cleaning",
      "Storm drain and culvert maintenance",
      "Grease trap and manhole cleaning",
      "Emergency blockage clearance for municipal utilities",
    ],
    applications_ar: [
      "ضخ وتنظيف خطوط الصرف الصحي",
      "صيانة مصارف الأمطار والعبّارات",
      "تنظيف مصائد الشحوم وفتحات الصيانة",
      "إزالة الانسدادات الطارئة لمرافق البلدية",
    ],
    features_en: [
      "Combines jetting and vacuum recovery in one chassis",
      "Adjustable jetting pressure for line diameter and blockage type",
      "Hose reel length matched to network run length",
    ],
    features_ar: [
      "يجمع بين الضخ واستعادة الشفط في شاسيه واحد",
      "ضغط ضخ قابل للتعديل وفق قطر الخط ونوع الانسداد",
      "طول بكرة الخرطوم مطابق لطول شبكة الصرف",
    ],
    specifications: [
      {
        label_en: "Water tank capacity",
        label_ar: "سعة خزان المياه",
        value: "Approx. 6,000 – 16,000 liters",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Debris/vacuum tank capacity",
        label_ar: "سعة خزان المخلفات/الشفط",
        value: "Approx. 4,000 – 10,000 liters",
        group_en: "Dimensions & Capacity",
        group_ar: "الأبعاد والسعة",
      },
      {
        label_en: "Jetting pressure",
        label_ar: "ضغط الضخ",
        value: "Approx. 100 – 250 bar",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Vacuum system",
        label_ar: "نظام الشفط",
        value: "Positive displacement blower or fan-based vacuum",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: ["refuse-collection-vehicles", "water-tankers"],
    relatedBrandSlugs: ["vac-con", "vacall"],
    catalogues: [
      {
        id: "sewer-cleaning-vehicles-datasheet",
        title_en: "Sewer Cleaning & Jetting Vehicles Datasheet",
        title_ar: "نشرة بيانات مركبات تنظيف وشفط الصرف الصحي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/commercial-vehicles/sewer-cleaning-vehicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
];
