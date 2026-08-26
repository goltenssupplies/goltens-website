import type { Product } from "@/data/products/types";

/** Industrial Chemicals & Lubricants → Corrosion Protection & Coatings category. */
export const chemicalsCorrosionProtectionCoatings: Product[] = [
  {
    id: "corrosion-inhibitors",
    slug: "corrosion-inhibitors",
    name_en: "Corrosion Inhibitors",
    name_ar: "مثبطات التآكل",
    shortDescription_en:
      "Corrosion inhibitors for metal surfaces in industrial fluid systems.",
    shortDescription_ar:
      "مثبطات تآكل للأسطح المعدنية في أنظمة السوائل الصناعية.",
    longDescription_en:
      "Corrosion inhibitors that protect metal surfaces inside pipework, tanks, and closed-loop fluid systems from oxidation and rust. We source products matched to your system's fluid type and metallurgy.",
    longDescription_ar:
      "مثبطات تآكل تحمي الأسطح المعدنية داخل المواسير والخزانات وأنظمة السوائل المغلقة من الأكسدة والصدأ. نقوم بتوريد المنتجات المطابقة لنوع السائل ومعدن نظامكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    features_en: [
      "Available in vapor-phase, contact, and soluble inhibitor formulations",
      "Matched to your system's fluid type and metallurgy",
      "Suitable for both new-system fill and ongoing dosing programs",
    ],
    features_ar: [
      "متوفرة بتركيبات تعمل بالبخار أو بالتلامس المباشر أو القابلة للذوبان",
      "مطابقة لنوع السائل ومعدن نظامكم",
      "مناسبة لتعبئة الأنظمة الجديدة وبرامج الجرعات المستمرة على حد سواء",
    ],
    specifications: [
      {
        label_en: "Product type",
        label_ar: "نوع المنتج",
        value:
          "Vapor-phase, contact, or water-/oil-soluble corrosion inhibitors",
        group_en: "Function",
        group_ar: "الوظيفة",
      },
      {
        label_en: "Application method",
        label_ar: "طريقة التطبيق",
        value:
          "Direct addition to closed-loop fluid systems or as a protective additive package",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Dosage approach",
        label_ar: "أسلوب الجرعة",
        value: "Dosed according to system volume and metallurgy",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Drums, pails, or bulk on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Closed-loop system dosing programs are typically designed with reference to general AMPP/NACE corrosion-control guidance",
      },
    ],
    applications_en: [
      "Closed-loop heating and chilled water systems",
      "Engine cooling system corrosion protection",
      "Hydraulic and lubrication system corrosion protection",
      "Pipeline and storage tank internal protection",
      "Lay-up and preservation of idle equipment",
    ],
    applications_ar: [
      "أنظمة التدفئة والتبريد ذات الدائرة المغلقة",
      "الحماية من التآكل في أنظمة تبريد المحركات",
      "الحماية من التآكل في الأنظمة الهيدروليكية وأنظمة التشحيم",
      "الحماية الداخلية لخطوط الأنابيب وخزانات التخزين",
      "حماية وصيانة المعدات المتوقفة عن العمل مؤقتًا",
    ],
    relatedProductSlugs: ["anti-corrosion-coatings", "rust-preventives"],
    relatedBrandSlugs: ["basf", "nalco"],
    catalogues: [
      {
        id: "corrosion-inhibitors-datasheet",
        title_en: "Corrosion Inhibitors Datasheet",
        title_ar: "نشرة بيانات مثبطات التآكل",
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
    id: "anti-corrosion-coatings",
    slug: "anti-corrosion-coatings",
    name_en: "Anti-Corrosion Coatings",
    name_ar: "طلاءات مقاومة للتآكل",
    shortDescription_en:
      "Protective coatings for steel and metal structures exposed to corrosive conditions.",
    shortDescription_ar:
      "طلاءات واقية للهياكل الفولاذية والمعدنية المعرضة لظروف مسببة للتآكل.",
    longDescription_en:
      "Anti-corrosion coatings for steel structures, tanks, and equipment exposed to weathering, moisture, or chemical attack. We source coatings matched to your substrate and exposure conditions.",
    longDescription_ar:
      "طلاءات مقاومة للتآكل للهياكل الفولاذية والخزانات والمعدات المعرضة للعوامل الجوية أو الرطوبة أو التأثير الكيميائي. نقوم بتوريد الطلاءات المطابقة لطبيعة السطح وظروف التعرض لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    features_en: [
      "Available across primer, intermediate, and topcoat systems",
      "Selected by ISO 12944 corrosivity category and expected service life",
      "Compatible with brush, roller, and spray application methods",
    ],
    features_ar: [
      "متوفرة ضمن أنظمة الطلاء الأساسي والمتوسط والنهائي",
      "يتم اختيارها وفق فئة التآكل حسب ISO 12944 وعمر الخدمة المتوقع",
      "متوافقة مع طرق التطبيق بالفرشاة والرول والرش",
    ],
    specifications: [
      {
        label_en: "Generic type",
        label_ar: "النوع العام",
        value: "Alkyd, epoxy, polyurethane, or zinc-rich primer systems",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Typical dry film thickness",
        label_ar: "سماكة الطبقة الجافة النموذجية",
        value: "Approx. 40–300 microns per coat, system-dependent",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Application method",
        label_ar: "طريقة التطبيق",
        value: "Brush, roller, or spray application",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Substrate compatibility",
        label_ar: "توافق السطح",
        value:
          "Carbon steel, galvanized steel, and general metal substrates (surface preparation dependent)",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to ISO 12944 corrosion protection categories for steel structures",
      },
    ],
    applications_en: [
      "Structural steel protection in industrial plants",
      "Offshore and marine structure protection",
      "Storage tank exterior and interior coating",
      "Pipeline external corrosion protection",
      "Steel structure protection in coastal and marine environments",
    ],
    applications_ar: [
      "حماية الهياكل الفولاذية في المنشآت الصناعية",
      "حماية الهياكل البحرية والساحلية",
      "طلاء خزانات التخزين من الداخل والخارج",
      "الحماية الخارجية من التآكل لخطوط الأنابيب",
      "حماية الهياكل الفولاذية في البيئات الساحلية والبحرية",
    ],
    relatedProductSlugs: [
      "corrosion-inhibitors",
      "industrial-protective-paints",
    ],
    relatedBrandSlugs: ["jotun", "hempel", "ppg", "sherwin-williams"],
    catalogues: [
      {
        id: "anti-corrosion-coatings-datasheet",
        title_en: "Anti-Corrosion Coatings Datasheet",
        title_ar: "نشرة بيانات الطلاءات المقاومة للتآكل",
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
    id: "industrial-protective-paints",
    slug: "industrial-protective-paints",
    name_en: "Industrial Protective Paints",
    name_ar: "الدهانات الصناعية الواقية",
    shortDescription_en:
      "Protective paint systems for industrial structures and equipment.",
    shortDescription_ar: "أنظمة دهان واقية للهياكل والمعدات الصناعية.",
    longDescription_en:
      "Protective paint systems for industrial structures, tanks, and equipment, sourced to your required durability, chemical resistance, and finish.",
    longDescription_ar:
      "أنظمة دهان واقية للهياكل والخزانات والمعدات الصناعية، يتم توريدها وفق المتانة والمقاومة الكيميائية والتشطيب المطلوب لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    features_en: [
      "Available across a range of generic types matched to exposure and chemical resistance requirements",
      "UV-stable formulations for prolonged outdoor exposure",
      "Selectable finish and color options for identification and coding systems",
    ],
    features_ar: [
      "متوفرة بعدة أنواع عامة تُطابق شروط التعرض والمقاومة الكيميائية المطلوبة",
      "تركيبات مقاومة للأشعة فوق البنفسجية للتعرض الخارجي المطول",
      "خيارات لمعان وألوان قابلة للاختيار لأنظمة التمييز والترميز",
    ],
    specifications: [
      {
        label_en: "Generic type",
        label_ar: "النوع العام",
        value:
          "Alkyd, chlorinated rubber, epoxy, or polyurethane topcoat systems",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Typical dry film thickness",
        label_ar: "سماكة الطبقة الجافة النموذجية",
        value: "Approx. 30–150 microns per coat",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Finish options",
        label_ar: "خيارات اللمعان",
        value: "Gloss, semi-gloss, or matte finish",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Chemical/UV resistance",
        label_ar: "المقاومة الكيميائية ولأشعة الشمس",
        value:
          "Formulations available for chemical splash resistance and UV/weathering resistance",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to ISO 12944 durability and corrosivity categories for atmospheric exposure",
      },
    ],
    applications_en: [
      "Structural steel and machinery topcoat finishing",
      "Storage tank and vessel exterior finishing",
      "Plant piping color-coding and protection",
      "Exterior structural steel in industrial facilities",
      "Equipment housings and enclosures",
    ],
    applications_ar: [
      "طلاء التشطيب النهائي للهياكل الفولاذية والآلات",
      "التشطيب الخارجي لخزانات التخزين والأوعية",
      "ترميز وحماية مواسير المصانع بالألوان",
      "الهياكل الفولاذية الخارجية في المنشآت الصناعية",
      "أغطية وهياكل المعدات",
    ],
    relatedProductSlugs: [
      "anti-corrosion-coatings",
      "industrial-epoxy-coatings",
    ],
    relatedBrandSlugs: ["jotun", "hempel", "sherwin-williams"],
    catalogues: [
      {
        id: "industrial-protective-paints-datasheet",
        title_en: "Industrial Protective Paints Datasheet",
        title_ar: "نشرة بيانات الدهانات الصناعية الواقية",
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
    id: "industrial-epoxy-coatings",
    slug: "industrial-epoxy-coatings",
    name_en: "Industrial Epoxy Coatings",
    name_ar: "طلاءات الإيبوكسي الصناعي",
    shortDescription_en:
      "Epoxy coating systems for high-durability floor and structural protection.",
    shortDescription_ar:
      "أنظمة طلاء إيبوكسي لحماية الأرضيات والهياكل بمتانة عالية.",
    longDescription_en:
      "Epoxy coating systems for high-durability protection of industrial floors, tanks, and structural steel, sourced to your substrate and chemical exposure requirement.",
    longDescription_ar:
      "أنظمة طلاء إيبوكسي لحماية الأرضيات الصناعية والخزانات والهياكل الفولاذية بمتانة عالية، يتم توريدها وفق طبيعة السطح والتعرض الكيميائي المطلوب لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    features_en: [
      "Two-component systems for high chemical and abrasion resistance",
      "Self-leveling and trowel-applied formulations for different floor requirements",
      "Suitable for both new floor application and structural steel protection",
    ],
    features_ar: [
      "أنظمة ثنائية المكونات لمقاومة كيميائية عالية ومقاومة للاحتكاك",
      "تركيبات ذاتية التسوية وأخرى تُطبَّق بالمالج وفق متطلبات الأرضية",
      "مناسبة لتطبيقات الأرضيات الجديدة وحماية الهياكل الفولاذية على حد سواء",
    ],
    specifications: [
      {
        label_en: "Generic type",
        label_ar: "النوع العام",
        value: "Two-component solvent-based or solvent-free epoxy systems",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Typical dry film thickness",
        label_ar: "سماكة الطبقة الجافة النموذجية",
        value: "Approx. 150–500 microns per coat for floor systems",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Application method",
        label_ar: "طريقة التطبيق",
        value:
          "Trowel, roller, or self-leveling application, depending on system",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Chemical resistance",
        label_ar: "المقاومة الكيميائية",
        value:
          "Formulated for resistance to oils, mild acids/alkalis, and abrasion",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Structural steel applications typically specified with reference to ISO 12944 categories",
      },
    ],
    applications_en: [
      "Industrial floor coating in production and warehouse areas",
      "Tank lining for chemical storage",
      "Structural steel protection in corrosive environments",
      "Secondary containment area lining",
      "Food and pharmaceutical facility floor coating",
    ],
    applications_ar: [
      "طلاء الأرضيات الصناعية في مناطق الإنتاج والمستودعات",
      "بطانة الخزانات المخصصة لتخزين المواد الكيميائية",
      "حماية الهياكل الفولاذية في البيئات المسببة للتآكل",
      "بطانة أحواض الاحتواء الثانوي",
      "طلاء أرضيات منشآت الأغذية والأدوية",
    ],
    relatedProductSlugs: [
      "industrial-protective-paints",
      "anti-corrosion-coatings",
    ],
    relatedBrandSlugs: ["sika", "jotun", "ppg"],
    catalogues: [
      {
        id: "industrial-epoxy-coatings-datasheet",
        title_en: "Industrial Epoxy Coatings Datasheet",
        title_ar: "نشرة بيانات طلاءات الإيبوكسي الصناعي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-chemicals/industrial-epoxy-coatings.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "rust-preventives",
    slug: "rust-preventives",
    name_en: "Rust Preventives",
    name_ar: "مواد منع الصدأ",
    shortDescription_en:
      "Rust preventive coatings for temporary protection during storage and transit.",
    shortDescription_ar:
      "طلاءات مانعة للصدأ لحماية مؤقتة أثناء التخزين والنقل.",
    longDescription_en:
      "Rust preventive coatings that provide temporary protection for metal parts and equipment during storage, shipping, and outdoor exposure. We source products matched to your protection duration requirement.",
    longDescription_ar:
      "طلاءات مانعة للصدأ توفر حماية مؤقتة للقطع والمعدات المعدنية أثناء التخزين والشحن والتعرض الخارجي. نقوم بتوريد المنتجات المطابقة لمدة الحماية المطلوبة لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    features_en: [
      "Soft-film and hard-film options for different removal and durability needs",
      "Formulated for protection ranging from indoor storage through to marine transit exposure",
      "Compatible with dip, spray, and brush application methods",
    ],
    features_ar: [
      "خيارات طبقة طرية أو صلبة وفق سهولة الإزالة والمتانة المطلوبة",
      "مصممة للحماية بدءًا من التخزين الداخلي وصولًا إلى التعرض أثناء الشحن البحري",
      "متوافقة مع طرق التطبيق بالغمس والرش والفرشاة",
    ],
    specifications: [
      {
        label_en: "Product type",
        label_ar: "نوع المنتج",
        value:
          "Solvent-based, water-displacing, or wax-based rust preventive coatings",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Protection duration",
        label_ar: "مدة الحماية",
        value:
          "Ranges from short-term indoor storage to long-term outdoor/marine transit protection, formulation-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Film type",
        label_ar: "نوع الطبقة",
        value: "Soft-film (removable) or hard-film (durable) coating options",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Application method",
        label_ar: "طريقة التطبيق",
        value: "Dip, spray, or brush application",
        group_en: "Application",
        group_ar: "التطبيق",
      },
    ],
    applications_en: [
      "Temporary protection of machined metal parts in storage",
      "Protection during overseas shipping and transit",
      "Protective coating for spare parts inventory",
      "Seasonal lay-up protection for equipment",
      "Protection of metal components between manufacturing stages",
    ],
    applications_ar: [
      "حماية مؤقتة للقطع المعدنية المشغّلة أثناء التخزين",
      "الحماية أثناء الشحن والنقل البحري الدولي",
      "طلاء وقائي لمخزون قطع الغيار",
      "حماية المعدات أثناء التوقف الموسمي عن العمل",
      "حماية المكونات المعدنية بين مراحل التصنيع",
    ],
    relatedProductSlugs: ["corrosion-inhibitors", "anti-corrosion-coatings"],
    relatedBrandSlugs: ["cortec", "fuchs"],
    catalogues: [
      {
        id: "rust-preventives-datasheet",
        title_en: "Rust Preventives Datasheet",
        title_ar: "نشرة بيانات مواد منع الصدأ",
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
