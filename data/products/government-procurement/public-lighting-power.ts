import type { Product } from "@/data/products/types";

/** Government Procurement → Public Lighting & Power category. */
export const governmentPublicLightingPower: Product[] = [
  {
    id: "street-public-lighting-systems",
    slug: "street-public-lighting-systems",
    name_en: "Street & Public Lighting Systems",
    name_ar: "أنظمة الإنارة العامة والطرق",
    shortDescription_en:
      "Street lighting poles and fixtures for municipal roads and public spaces.",
    shortDescription_ar: "أعمدة ووحدات إنارة للطرق البلدية والمساحات العامة.",
    longDescription_en:
      "Street lighting poles, LED fixtures, and control gear for municipal roads, public squares, and government facility grounds. We source systems matched to your road classification and lighting plan.",
    longDescription_ar:
      "أعمدة إنارة ووحدات LED ومعدات تحكم للطرق البلدية والساحات العامة وأراضي المنشآت الحكومية. نقوم بتوريد الأنظمة المطابقة لتصنيف الطريق وخطة الإنارة لديكم.",
    sectorId: "government-procurement",
    categoryId: "public-lighting-power",
    features_en: [
      "Sized to your road classification and lighting design",
      "LED fixtures selected for energy efficiency and long service life",
      "Compatible with centralized lighting control and monitoring systems",
    ],
    features_ar: [
      "مقاسة وفق تصنيف الطريق وتصميم الإنارة لديكم",
      "وحدات LED يتم اختيارها لكفاءتها في استهلاك الطاقة وعمرها التشغيلي الطويل",
      "متوافقة مع أنظمة التحكم والمراقبة المركزية للإنارة",
    ],
    specifications: [
      {
        label_en: "Pole height",
        label_ar: "ارتفاع العمود",
        value: "6–12 m, depending on road classification",
        group_en: "Pole & Fixture",
        group_ar: "العمود والوحدة",
      },
      {
        label_en: "Pole material",
        label_ar: "خامة العمود",
        value: "Hot-dip galvanized steel or extruded aluminum",
        group_en: "Pole & Fixture",
        group_ar: "العمود والوحدة",
      },
      {
        label_en: "Luminaire type",
        label_ar: "نوع وحدة الإنارة",
        value: "LED, 30–250 W depending on application",
        group_en: "Luminaire",
        group_ar: "وحدة الإنارة",
      },
      {
        label_en: "Luminous efficacy",
        label_ar: "الكفاءة الضوئية",
        value: "Typically 100–160 lm/W for modern LED street luminaires",
        group_en: "Luminaire",
        group_ar: "وحدة الإنارة",
      },
      {
        label_en: "Ingress protection",
        label_ar: "درجة الحماية",
        value: "IP66 luminaire housing per IEC 60529",
        group_en: "Luminaire",
        group_ar: "وحدة الإنارة",
      },
      {
        label_en: "Control options",
        label_ar: "خيارات التحكم",
        value:
          "Photocell, astronomical timer, or centralized lighting management system",
        group_en: "Controls",
        group_ar: "التحكم",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Luminaires typically specified to IEC 60598",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Municipal road and highway lighting",
      "Public squares, parks, and pedestrian walkways",
      "Government facility perimeters and parking areas",
      "Roundabouts and intersection lighting",
      "Corniche and public waterfront lighting",
    ],
    applications_ar: [
      "إنارة الطرق البلدية والطرق السريعة",
      "الساحات العامة والحدائق والممرات المخصصة للمشاة",
      "محيط المنشآت الحكومية ومناطق مواقف السيارات",
      "إنارة الدوارات والتقاطعات",
      "إنارة الكورنيش والواجهات المائية العامة",
    ],
    relatedBrandSlugs: ["signify", "schreder"],
    relatedProductSlugs: [
      "solar-street-lighting",
      "public-backup-power-systems",
    ],
    catalogues: [
      {
        id: "street-public-lighting-systems-datasheet",
        title_en: "Street & Public Lighting Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة الإنارة العامة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/street-public-lighting-systems.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "solar-street-lighting",
    slug: "solar-street-lighting",
    name_en: "Solar Street Lighting",
    name_ar: "إنارة الشوارع بالطاقة الشمسية",
    shortDescription_en:
      "Self-contained solar street lighting for roads without a reliable grid connection.",
    shortDescription_ar:
      "وحدات إنارة شوارع تعمل بالطاقة الشمسية بشكل مستقل للطرق التي تفتقر لتوصيل كهرباء موثوق.",
    longDescription_en:
      "Self-contained solar street lighting units, combining a panel, battery, and LED fixture on one pole, for roads and public areas without a reliable grid connection. We source units matched to your required lighting duration and road width.",
    longDescription_ar:
      "وحدات إنارة شوارع تعمل بالطاقة الشمسية بشكل مستقل، تجمع بين لوح شمسي وبطارية ووحدة LED على عمود واحد، للطرق والمناطق العامة التي تفتقر إلى توصيل كهرباء موثوق. نقوم بتوريد الوحدات المطابقة لمدة الإنارة المطلوبة وعرض الطريق لديكم.",
    sectorId: "government-procurement",
    categoryId: "public-lighting-power",
    features_en: [
      "Self-contained — no trenching or grid connection required",
      "Sized to your required lighting duration and road width",
      "Battery and panel matched for the site's solar exposure",
    ],
    features_ar: [
      "وحدة مستقلة بالكامل — دون الحاجة لأعمال حفر أو توصيل بالشبكة الكهربائية",
      "مقاسة وفق مدة الإنارة المطلوبة وعرض الطريق",
      "بطارية ولوح شمسي متناسبان مع مستوى التعرض الشمسي في الموقع",
    ],
    specifications: [
      {
        label_en: "Solar panel",
        label_ar: "اللوح الشمسي",
        value: "Monocrystalline, 30–100 W depending on autonomy requirement",
        group_en: "Solar & Battery",
        group_ar: "الطاقة الشمسية والبطارية",
      },
      {
        label_en: "Battery type",
        label_ar: "نوع البطارية",
        value: "Lithium iron phosphate (LiFePO4), integrated or pole-mounted",
        group_en: "Solar & Battery",
        group_ar: "الطاقة الشمسية والبطارية",
      },
      {
        label_en: "Autonomy",
        label_ar: "مدة الاستقلالية",
        value: "Typically 2–3 days of backup operation without sun charging",
        group_en: "Solar & Battery",
        group_ar: "الطاقة الشمسية والبطارية",
      },
      {
        label_en: "LED wattage",
        label_ar: "قدرة وحدة LED",
        value: "12–60 W depending on pole height and road width",
        group_en: "Luminaire",
        group_ar: "وحدة الإنارة",
      },
      {
        label_en: "Ingress protection",
        label_ar: "درجة الحماية",
        value: "IP65/IP66 for luminaire and battery enclosure",
        group_en: "Luminaire",
        group_ar: "وحدة الإنارة",
      },
      {
        label_en: "Pole height",
        label_ar: "ارتفاع العمود",
        value: "4–9 m, depending on road width",
        group_en: "Pole",
        group_ar: "العمود",
      },
    ],
    applications_en: [
      "Rural and secondary roads without reliable grid access",
      "Remote government facility access roads",
      "Public parks and walkways in off-grid areas",
      "Border and remote-site perimeter lighting",
    ],
    applications_ar: [
      "الطرق الريفية والفرعية التي تفتقر إلى وصول موثوق للكهرباء",
      "طرق الوصول للمنشآت الحكومية النائية",
      "الحدائق والممرات العامة في المناطق غير المتصلة بالشبكة الكهربائية",
      "إنارة محيط المواقع الحدودية والنائية",
    ],
    relatedProductSlugs: [
      "street-public-lighting-systems",
      "solar-power-public-facilities",
    ],
    catalogues: [
      {
        id: "solar-street-lighting-datasheet",
        title_en: "Solar Street Lighting Datasheet",
        title_ar: "نشرة بيانات إنارة الشوارع بالطاقة الشمسية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/solar-street-lighting.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "public-backup-power-systems",
    slug: "public-backup-power-systems",
    name_en: "Backup Power Systems for Public Facilities",
    name_ar: "أنظمة الطاقة الاحتياطية للمرافق العامة",
    shortDescription_en:
      "Standby generators and backup power for government buildings and public facilities.",
    shortDescription_ar:
      "مولدات احتياطية وطاقة احتياطية للمباني الحكومية والمرافق العامة.",
    longDescription_en:
      "Standby generators and backup power systems for government buildings, public facilities, and municipal sites where continuity of service matters. We source units matched to your facility's load requirement.",
    longDescription_ar:
      "مولدات احتياطية وأنظمة طاقة احتياطية للمباني الحكومية والمرافق العامة والمواقع البلدية التي تتطلب استمرارية الخدمة. نقوم بتوريد الوحدات المطابقة لمتطلبات الحمل الكهربائي لمنشأتكم.",
    sectorId: "government-procurement",
    categoryId: "public-lighting-power",
    features_en: [
      "Sized to your facility's load requirement and runtime target",
      "Automatic transfer switch options for seamless changeover",
      "Open, canopy, and acoustic enclosure configurations available",
    ],
    features_ar: [
      "مقاسة وفق متطلبات الحمل ومدة التشغيل المستهدفة لمنشأتكم",
      "خيارات مفتاح نقل أوتوماتيكي لانتقال سلس بين المصدرين",
      "تكوينات متوفرة بأغلفة مفتوحة أو مغطاة أو صوتية",
    ],
    specifications: [
      {
        label_en: "Power rating",
        label_ar: "قدرة المولد",
        value: "20 kVA – 2000 kVA depending on facility load",
        group_en: "Generator Set",
        group_ar: "مجموعة التوليد",
      },
      {
        label_en: "Fuel type",
        label_ar: "نوع الوقود",
        value: "Diesel, with base or bunded fuel tank",
        group_en: "Generator Set",
        group_ar: "مجموعة التوليد",
      },
      {
        label_en: "Enclosure",
        label_ar: "الغلاف الخارجي",
        value: "Open skid, weatherproof canopy, or acoustic (silent) enclosure",
        group_en: "Generator Set",
        group_ar: "مجموعة التوليد",
      },
      {
        label_en: "Automatic transfer switch (ATS)",
        label_ar: "مفتاح النقل الأوتوماتيكي (ATS)",
        value: "Transfers load on grid failure, typically within 10–15 seconds",
        group_en: "Controls",
        group_ar: "التحكم",
      },
      {
        label_en: "Control panel",
        label_ar: "لوحة التحكم",
        value: "Auto-start controller with remote monitoring option",
        group_en: "Controls",
        group_ar: "التحكم",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Diesel generating sets typically specified to ISO 8528",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Government building continuity-of-service backup power",
      "Municipal water and public utility site backup",
      "Emergency operations centers and command facilities",
      "Public hospital and clinic standby power",
      "Data and communication rooms in government facilities",
    ],
    applications_ar: [
      "طاقة احتياطية لضمان استمرارية الخدمة في المباني الحكومية",
      "طاقة احتياطية لمواقع المياه والمرافق العامة البلدية",
      "مراكز العمليات الطارئة ومرافق القيادة",
      "طاقة احتياطية للمستشفيات والعيادات الحكومية",
      "غرف البيانات والاتصالات في المنشآت الحكومية",
    ],
    relatedBrandSlugs: ["caterpillar", "cummins", "perkins"],
    relatedProductSlugs: [
      "street-public-lighting-systems",
      "solar-power-public-facilities",
    ],
    catalogues: [
      {
        id: "public-backup-power-systems-datasheet",
        title_en: "Backup Power Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة الطاقة الاحتياطية",
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
    id: "solar-power-public-facilities",
    slug: "solar-power-public-facilities",
    name_en: "Solar Power Systems for Public Facilities",
    name_ar: "أنظمة الطاقة الشمسية للمرافق العامة",
    shortDescription_en:
      "Rooftop and ground-mounted solar power systems for government buildings.",
    shortDescription_ar: "أنظمة طاقة شمسية على الأسطح والأرض للمباني الحكومية.",
    longDescription_en:
      "Rooftop and ground-mounted solar power systems for government buildings and public facilities, sourced to offset grid consumption and support facility energy targets.",
    longDescription_ar:
      "أنظمة طاقة شمسية على الأسطح وعلى الأرض للمباني الحكومية والمرافق العامة، يتم توريدها لتقليل استهلاك الكهرباء من الشبكة ودعم أهداف الطاقة لمنشأتكم.",
    sectorId: "government-procurement",
    categoryId: "public-lighting-power",
    features_en: [
      "Sized to offset your facility's grid consumption target",
      "On-grid, off-grid, and hybrid configurations available",
      "Matched to your roof structure or available land area",
    ],
    features_ar: [
      "مقاسة وفق هدف تقليل استهلاك الشبكة الكهربائية لمنشأتكم",
      "تكوينات متوفرة متصلة بالشبكة أو مستقلة أو هجينة",
      "مطابقة لهيكل السطح أو المساحة الأرضية المتوفرة لديكم",
    ],
    specifications: [
      {
        label_en: "Panel type",
        label_ar: "نوع اللوح",
        value: "Monocrystalline PERC, 400–550 Wp per module",
        group_en: "PV Modules",
        group_ar: "الألواح الشمسية",
      },
      {
        label_en: "System type",
        label_ar: "نوع النظام",
        value: "Grid-tied, off-grid, or hybrid with battery storage",
        group_en: "PV Modules",
        group_ar: "الألواح الشمسية",
      },
      {
        label_en: "Inverter type",
        label_ar: "نوع العاكس",
        value: "String or central inverters, sized to system capacity",
        group_en: "Inverter",
        group_ar: "العاكس",
      },
      {
        label_en: "Mounting",
        label_ar: "التثبيت",
        value: "Rooftop (pitched or flat) or ground-mounted structures",
        group_en: "Mounting",
        group_ar: "التثبيت",
      },
      {
        label_en: "Typical system size",
        label_ar: "الحجم النموذجي للنظام",
        value: "10 kWp – 1 MWp depending on facility roof/land area",
        group_en: "Mounting",
        group_ar: "التثبيت",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "PV modules typically specified to IEC 61215 and inverters to IEC 62109",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Rooftop solar for government office buildings",
      "Ground-mounted systems for municipal facilities and depots",
      "Solar carport structures for government facility parking",
      "Hybrid solar-diesel systems for off-grid public facilities",
    ],
    applications_ar: [
      "أنظمة شمسية على أسطح المباني الحكومية",
      "أنظمة أرضية للمرافق والمستودعات البلدية",
      "مظلات مواقف سيارات شمسية للمنشآت الحكومية",
      "أنظمة هجينة شمسية-ديزل للمنشآت العامة غير المتصلة بالشبكة",
    ],
    relatedBrandSlugs: ["jinko-solar", "trina-solar", "huawei"],
    relatedProductSlugs: [
      "public-backup-power-systems",
      "solar-street-lighting",
    ],
    catalogues: [
      {
        id: "solar-power-public-facilities-datasheet",
        title_en: "Solar Power Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة الطاقة الشمسية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/solar-power-public-facilities.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "traffic-management-signal-systems",
    slug: "traffic-management-signal-systems",
    name_en: "Traffic Management & Signal Systems",
    name_ar: "أنظمة إدارة الإشارات المرورية",
    shortDescription_en:
      "Traffic signals, signage, and management systems for municipal roads.",
    shortDescription_ar: "إشارات ولوحات وأنظمة إدارة مرورية للطرق البلدية.",
    longDescription_en:
      "Traffic signals, road signage, and traffic management systems for municipal roads and intersections, sourced to your traffic authority's specification.",
    longDescription_ar:
      "إشارات مرورية ولوحات طرق وأنظمة إدارة مرورية للطرق والتقاطعات البلدية، يتم توريدها وفق مواصفات هيئة المرور لديكم.",
    sectorId: "government-procurement",
    categoryId: "public-lighting-power",
    features_en: [
      "Sourced to your traffic authority's specification and signal plan",
      "Controller timing configurable to intersection traffic patterns",
      "Battery backup options for power-outage continuity",
    ],
    features_ar: [
      "يتم توريدها وفق مواصفات هيئة المرور وخطة الإشارات لديكم",
      "توقيت لوحة التحكم قابل للتهيئة وفق أنماط الحركة المرورية عند التقاطع",
      "خيارات بطارية احتياطية لضمان الاستمرارية عند انقطاع التيار",
    ],
    specifications: [
      {
        label_en: "Signal head type",
        label_ar: "نوع رأس الإشارة",
        value: "LED traffic signal modules (red/amber/green), 200–300 mm lens",
        group_en: "Signal Heads",
        group_ar: "رؤوس الإشارات",
      },
      {
        label_en: "Visibility",
        label_ar: "مدى الرؤية",
        value: "Typically visible at 80–100 m under direct sunlight",
        group_en: "Signal Heads",
        group_ar: "رؤوس الإشارات",
      },
      {
        label_en: "Controller cabinet",
        label_ar: "لوحة التحكم",
        value:
          "Programmable traffic signal controller with timing plans and conflict monitor",
        group_en: "Controller",
        group_ar: "وحدة التحكم",
      },
      {
        label_en: "Power supply",
        label_ar: "مصدر الطاقة",
        value: "Mains with battery backup option for outage continuity",
        group_en: "Controller",
        group_ar: "وحدة التحكم",
      },
      {
        label_en: "Mounting",
        label_ar: "التثبيت",
        value: "Pole-mounted or mast-arm mounted over carriageway",
        group_en: "Mounting",
        group_ar: "التثبيت",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Traffic signal equipment typically specified to NEMA TS2 or EN 12368, per your road authority's requirement",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Signalized intersections on municipal roads",
      "Pedestrian crossing signal installations",
      "School zone and traffic-calming signage",
      "Highway and expressway variable message signage",
    ],
    applications_ar: [
      "التقاطعات المزودة بإشارات مرورية على الطرق البلدية",
      "تركيبات إشارات معابر المشاة",
      "لوحات مناطق المدارس وتهدئة الحركة المرورية",
      "لوحات الرسائل المتغيرة على الطرق السريعة",
    ],
    relatedBrandSlugs: ["siemens", "swarco"],
    relatedProductSlugs: ["street-public-lighting-systems"],
    catalogues: [
      {
        id: "traffic-management-signal-systems-datasheet",
        title_en: "Traffic Management & Signal Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة إدارة الإشارات المرورية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/traffic-management-signal-systems.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
];
