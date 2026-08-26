import type { Product } from "@/data/products/types";

/** Construction & Infrastructure → Site & Infrastructure Materials category. */
export const constructionSiteInfrastructureMaterials: Product[] = [
  {
    id: "sanitary-ware-fittings",
    slug: "sanitary-ware-fittings",
    name_en: "Sanitary Ware & Bathroom Fittings",
    name_ar: "الأدوات الصحية وتجهيزات الحمامات",
    shortDescription_en:
      "Sanitary ware and bathroom fittings for residential and institutional projects.",
    shortDescription_ar:
      "أدوات صحية وتجهيزات حمامات للمشروعات السكنية والمؤسسية.",
    longDescription_en:
      "Sanitary ware and bathroom fittings for residential, commercial, and institutional construction projects, sourced to your project's specification and quantity requirement.",
    longDescription_ar:
      "أدوات صحية وتجهيزات حمامات لمشروعات الإنشاءات السكنية والتجارية والمؤسسية، يتم توريدها وفق المواصفات والكمية المطلوبة لمشروعكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    features_en: [
      "Vitreous china sanitaryware and chrome-plated brass fittings sourced to your project specification",
      "Water-efficient dual-flush and low-flow fitting options available",
      "Matched to your project's quantity and finish requirement",
    ],
    features_ar: [
      "أدوات صحية من الخزف الصيني وتجهيزات نحاسية مطلية بالكروم يتم توريدها وفق مواصفات مشروعكم",
      "خيارات صرف مزدوج وتدفق منخفض موفرة للمياه متوفرة",
      "مطابقة للكمية والتشطيب المطلوب لمشروعكم",
    ],
    specifications: [
      {
        label_en: "Product types",
        label_ar: "أنواع المنتجات",
        value: "WC suites, wash basins, urinals, and bathroom fittings/faucets",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Material",
        label_ar: "الخامة",
        value: "Vitreous china (sanitaryware); chrome-plated brass (fittings)",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Water consumption (WC)",
        label_ar: "استهلاك المياه (المرحاض)",
        value: "Typically dual-flush 3/6 litre or 4.5/3 litre per flush",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Faucet flow rate",
        label_ar: "معدل تدفق الحنفية",
        value: "Typically 4–8 litres/minute, aerated",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured to EN 997 (WC pans) or equivalent regional plumbing fixture standards",
      },
    ],
    applications_en: [
      "Residential bathroom and kitchen fit-outs",
      "Hotel and hospitality guestroom bathrooms",
      "Commercial and institutional restroom installations",
      "Healthcare facility sanitary installations",
      "Labor accommodation and public restroom projects",
    ],
    applications_ar: [
      "تجهيزات حمامات ومطابخ المشروعات السكنية",
      "حمامات غرف النزلاء في الفنادق والمنشآت الفندقية",
      "تركيبات دورات المياه في المشروعات التجارية والمؤسسية",
      "التركيبات الصحية للمنشآت الصحية",
      "مشروعات سكن العمالة ودورات المياه العامة",
    ],
    relatedProductSlugs: [
      "piping-systems-pvc-hdpe",
      "plumbing-fittings-valves",
    ],
    relatedBrandSlugs: ["kohler", "roca", "grohe"],
    catalogues: [
      {
        id: "sanitary-ware-fittings-datasheet",
        title_en: "Sanitary Ware & Bathroom Fittings Datasheet",
        title_ar: "نشرة بيانات الأدوات الصحية وتجهيزات الحمامات",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/sanitary-ware-fittings.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "piping-systems-pvc-hdpe",
    slug: "piping-systems-pvc-hdpe",
    name_en: "Piping Systems (PVC, HDPE, GRP)",
    name_ar: "أنظمة المواسير (PVC، بولي إيثيلين، ألياف زجاجية)",
    shortDescription_en:
      "Piping systems for water supply, drainage, and utility networks.",
    shortDescription_ar: "أنظمة مواسير لشبكات إمداد المياه والصرف والمرافق.",
    longDescription_en:
      "Piping systems in PVC, HDPE, and GRP materials for water supply, drainage, and utility networks. We source pipes and fittings matched to your project's diameter, pressure class, and material specification.",
    longDescription_ar:
      "أنظمة مواسير من مواد PVC وبولي إيثيلين وألياف زجاجية لشبكات إمداد المياه والصرف والمرافق. نقوم بتوريد المواسير والوصلات المطابقة لقطر ومواصفات الضغط والخامة المطلوبة لمشروعكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    features_en: [
      "uPVC, HDPE, and GRP pipe systems sourced to your pressure class and diameter specification",
      "PE80/PE100 HDPE grades available for potable and pressure applications",
      "Fittings and jointing systems matched to your pipe material and installation method",
    ],
    features_ar: [
      "أنظمة مواسير uPVC وبولي إيثيلين وألياف زجاجية يتم توريدها وفق فئة الضغط والقطر المطلوب",
      "درجات بولي إيثيلين PE80/PE100 متوفرة للتطبيقات الصالحة للشرب والمضغوطة",
      "وصلات وأنظمة ربط مطابقة لخامة المواسير وطريقة التركيب لديكم",
    ],
    specifications: [
      {
        label_en: "Pipe materials",
        label_ar: "خامات المواسير",
        value: "uPVC, HDPE, or GRP",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Diameter range",
        label_ar: "نطاق القطر",
        value: "Typically 20–1,200 mm, material and application dependent",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Pressure class",
        label_ar: "فئة الضغط",
        value: "Typically PN6 to PN16 for pressure pipe",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "HDPE grade",
        label_ar: "درجة البولي إيثيلين",
        value: "Typically PE80 or PE100",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to ISO 4427 (HDPE) or EN 1452 (PVC-U) equivalent standards",
      },
    ],
    applications_en: [
      "Potable water supply networks",
      "Sewerage and drainage networks",
      "Irrigation and agricultural water networks",
      "Industrial effluent and utility piping",
      "Cable ducting and conduit protection",
    ],
    applications_ar: [
      "شبكات إمداد مياه الشرب",
      "شبكات الصرف الصحي والتصريف",
      "شبكات مياه الري والزراعة",
      "مواسير الصرف الصناعي والمرافق",
      "أنابيب حماية الكابلات والقنوات",
    ],
    relatedProductSlugs: [
      "plumbing-fittings-valves",
      "manhole-covers-drainage",
    ],
    relatedBrandSlugs: ["wavin", "aliaxis", "gf-piping-systems"],
    catalogues: [
      {
        id: "piping-systems-pvc-hdpe-datasheet",
        title_en: "Piping Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة المواسير",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/piping-systems-pvc-hdpe.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "plumbing-fittings-valves",
    slug: "plumbing-fittings-valves",
    name_en: "Plumbing Fittings",
    name_ar: "تجهيزات ووصلات السباكة",
    shortDescription_en:
      "Plumbing fittings and connectors for water supply and drainage installations.",
    shortDescription_ar: "تجهيزات ووصلات سباكة لتركيبات إمداد المياه والصرف.",
    longDescription_en:
      "Plumbing fittings and connectors for water supply and drainage installations, sourced to your pipe material and connection standard.",
    longDescription_ar:
      "تجهيزات ووصلات سباكة لتركيبات إمداد المياه والصرف، يتم توريدها وفق خامة المواسير ومعيار التوصيل لديكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    features_en: [
      "PVC, brass, PPR, and galvanized steel fittings sourced to your pipe material",
      "Threaded, solvent-weld, and push-fit connection types available",
      "Matched to your project's pressure rating and application",
    ],
    features_ar: [
      "تجهيزات PVC ونحاس وPPR وحديد مجلفن يتم توريدها وفق خامة المواسير لديكم",
      "أنواع توصيل ملولبة ولحام مذيب وتوصيل سريع متوفرة",
      "مطابقة لتصنيف الضغط والتطبيق المطلوب لمشروعكم",
    ],
    specifications: [
      {
        label_en: "Fitting types",
        label_ar: "أنواع التجهيزات",
        value:
          "Elbows, tees, couplings, unions, adapters, and isolation valves",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Material options",
        label_ar: "خيارات الخامة",
        value: "PVC, brass, PPR, or galvanized steel",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Connection types",
        label_ar: "أنواع التوصيل",
        value: "Threaded, solvent-weld, push-fit, or compression",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Pressure rating",
        label_ar: "تصنيف الضغط",
        value: "Typically PN10–PN16, material-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured to EN 1254 (copper/brass fittings) or equivalent standards for the fitting material",
      },
    ],
    applications_en: [
      "Water supply pipe connections and transitions",
      "Drainage and waste pipe fittings",
      "Isolation and control valves for plumbing networks",
      "Utility penetration and retrofit fittings",
      "Maintenance and repair fittings",
    ],
    applications_ar: [
      "وصلات وتحويلات مواسير إمداد المياه",
      "تجهيزات مواسير الصرف والنفايات",
      "صمامات عزل وتحكم لشبكات السباكة",
      "تجهيزات اختراق المرافق والتعديلات اللاحقة",
      "تجهيزات الصيانة والإصلاح",
    ],
    relatedProductSlugs: ["piping-systems-pvc-hdpe", "sanitary-ware-fittings"],
    catalogues: [
      {
        id: "plumbing-fittings-valves-datasheet",
        title_en: "Plumbing Fittings Datasheet",
        title_ar: "نشرة بيانات تجهيزات السباكة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/plumbing-fittings-valves.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "manhole-covers-drainage",
    slug: "manhole-covers-drainage",
    name_en: "Manhole Covers & Drainage Products",
    name_ar: "أغطية غرف التفتيش ومنتجات الصرف",
    shortDescription_en:
      "Manhole covers and drainage products for site and road infrastructure.",
    shortDescription_ar:
      "أغطية غرف تفتيش ومنتجات صرف لبنية المواقع والطرق التحتية.",
    longDescription_en:
      "Manhole covers, gully gratings, and drainage products for site and road infrastructure works, sourced to your loading class and installation location.",
    longDescription_ar:
      "أغطية غرف تفتيش وشبكات تصريف ومنتجات صرف لأعمال البنية التحتية للمواقع والطرق، يتم توريدها وفق فئة التحميل وموقع التركيب لديكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    features_en: [
      "Ductile iron, cast iron, concrete, and composite covers sourced to your loading class",
      "EN 124-equivalent load ratings from pedestrian to heavy traffic",
      "Matched to your project's chamber dimensions and installation location",
    ],
    features_ar: [
      "أغطية من الحديد الدكتايل والزهر والخرسانة والمواد المركبة يتم توريدها وفق فئة التحميل لديكم",
      "تصنيفات تحميل معادلة لمعيار EN 124 من الأحمال المشاة إلى الأحمال الثقيلة",
      "مطابقة لأبعاد الغرفة وموقع التركيب في مشروعكم",
    ],
    specifications: [
      {
        label_en: "Product types",
        label_ar: "أنواع المنتجات",
        value: "Manhole covers, gully gratings, and trench drains",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Material options",
        label_ar: "خيارات الخامة",
        value: "Ductile iron, cast iron, concrete, or composite/GRP",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Loading class",
        label_ar: "فئة التحميل",
        value: "Typically A15 to F900 per EN 124 loading classification",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to EN 124 equivalent loading classification standards",
      },
    ],
    applications_en: [
      "Road and highway drainage covers, traffic-rated",
      "Pedestrian walkway and plaza covers",
      "Site and car park drainage grating",
      "Utility and cable chamber covers",
      "Stormwater and sewerage network access points",
    ],
    applications_ar: [
      "أغطية صرف الطرق والطرق السريعة المصنفة لتحمل حركة المرور",
      "أغطية الممرات المشاة والساحات",
      "شبكات تصريف مواقف السيارات والمواقع",
      "أغطية غرف المرافق والكابلات",
      "نقاط الوصول لشبكات مياه الأمطار والصرف الصحي",
    ],
    relatedProductSlugs: [
      "piping-systems-pvc-hdpe",
      "road-construction-materials",
    ],
    relatedBrandSlugs: ["saint-gobain-pam", "ej"],
    catalogues: [
      {
        id: "manhole-covers-drainage-datasheet",
        title_en: "Manhole Covers & Drainage Products Datasheet",
        title_ar: "نشرة بيانات أغطية غرف التفتيش ومنتجات الصرف",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/manhole-covers-drainage.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "road-construction-materials",
    slug: "road-construction-materials",
    name_en: "Road Construction Materials",
    name_ar: "مواد إنشاء الطرق",
    shortDescription_en:
      "Materials for road construction and site works, including asphalt and geotextiles.",
    shortDescription_ar:
      "مواد لإنشاء الطرق وأعمال المواقع، تشمل الأسفلت والجيوتكستايل.",
    longDescription_en:
      "Materials for road construction and site works — asphalt and bitumen products, geotextiles, and geomembranes — sourced to your project's specification and volume requirement.",
    longDescription_ar:
      "مواد لإنشاء الطرق وأعمال المواقع — منتجات الأسفلت والبيتومين، والجيوتكستايل، والأغشية الجيولوجية — يتم توريدها وفق مواصفات مشروعكم والحجم المطلوب.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    features_en: [
      "Hot-mix asphalt, bitumen, geotextiles, and geomembranes sourced to your project specification",
      "Woven and non-woven geotextile grades for separation, filtration, or reinforcement",
      "Matched to your project's traffic loading and subgrade condition",
    ],
    features_ar: [
      "خلطات أسفلت ساخنة وبيتومين وجيوتكستايل وأغشية جيولوجية يتم توريدها وفق مواصفات مشروعكم",
      "درجات جيوتكستايل منسوجة وغير منسوجة للفصل أو الترشيح أو التسليح",
      "مطابقة لحمل حركة المرور وحالة التربة التحتية لمشروعكم",
    ],
    specifications: [
      {
        label_en: "Material types",
        label_ar: "أنواع المواد",
        value:
          "Hot-mix asphalt, bitumen (penetration/PMB grades), geotextiles, and geomembranes",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Bitumen penetration grade",
        label_ar: "درجة اختراق البيتومين",
        value: "Typically 60/70 or 80/100 per EN 12591/ASTM D946",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Geotextile grammage",
        label_ar: "وزن الجيوتكستايل",
        value: "Typically 100–600 g/m² (woven and non-woven)",
        group_en: "Physical",
        group_ar: "الخواص الفيزيائية",
      },
      {
        label_en: "Geomembrane thickness",
        label_ar: "سماكة الغشاء الجيولوجي",
        value: "Typically 0.75–2.5 mm (HDPE liner)",
        group_en: "Physical",
        group_ar: "الخواص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to EN 12591 (paving-grade bitumen) or ASTM D946 equivalent standards",
      },
    ],
    applications_en: [
      "Road base and wearing-course asphalt paving",
      "Soil stabilization and separation using geotextiles",
      "Landfill and pond lining with geomembranes",
      "Erosion control on embankments and slopes",
      "Waterproofing beneath road and bridge deck surfacing",
    ],
    applications_ar: [
      "رصف طبقات الأساس والتسطيح النهائي للطرق بالأسفلت",
      "تثبيت وفصل التربة باستخدام الجيوتكستايل",
      "تبطين مدافن النفايات والبرك بالأغشية الجيولوجية",
      "التحكم في التعرية على الجسور الترابية والمنحدرات",
      "العزل المائي أسفل رصف الطرق وأسطح الجسور",
    ],
    relatedProductSlugs: ["manhole-covers-drainage", "sanitary-ware-fittings"],
    catalogues: [
      {
        id: "road-construction-materials-datasheet",
        title_en: "Road Construction Materials Datasheet",
        title_ar: "نشرة بيانات مواد إنشاء الطرق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/road-construction-materials.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
