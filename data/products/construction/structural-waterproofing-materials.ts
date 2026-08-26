import type { Product } from "@/data/products/types";

/** Construction & Infrastructure → Structural & Waterproofing Materials category. */
export const constructionStructuralWaterproofingMaterials: Product[] = [
  {
    id: "reinforcement-steel-rebar",
    slug: "reinforcement-steel-rebar",
    name_en: "Reinforcement Steel (Rebar)",
    name_ar: "حديد التسليح",
    shortDescription_en:
      "Reinforcement steel bars for structural concrete works.",
    shortDescription_ar: "قضبان حديد تسليح لأعمال الخرسانة الإنشائية.",
    longDescription_en:
      "Reinforcement steel bars for structural concrete works, sourced to your project's grade, diameter, and quantity specification.",
    longDescription_ar:
      "قضبان حديد تسليح لأعمال الخرسانة الإنشائية، يتم توريدها وفق الدرجة والقطر والكمية المحددة لمشروعكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    features_en: [
      "Deformed bars sourced in Grade 60 / B500B-equivalent, matched to your structural design",
      "Diameter range from 8 mm to 32 mm",
      "Cut-to-length and bent/shaped options coordinated with your fabrication schedule",
    ],
    features_ar: [
      "قضبان مضلعة بدرجة Grade 60 أو ما يعادل B500B، مطابقة لتصميمكم الإنشائي",
      "نطاق أقطار من 8 مم إلى 32 مم",
      "خيارات القص حسب الطول والتشكيل والثني منسّقة مع جدول التصنيع لديكم",
    ],
    specifications: [
      {
        label_en: "Grade",
        label_ar: "الدرجة",
        value:
          "Typically Grade 60 (Fy 420 MPa) per ASTM A615, or B500B per BS 4449/EN 10080",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Yield strength range",
        label_ar: "نطاق مقاومة الخضوع",
        value: "Typically 420–500 MPa",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Diameter range",
        label_ar: "نطاق القطر",
        value: "Typically 8–32 mm",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Bar type",
        label_ar: "نوع القضيب",
        value: "Deformed (ribbed) bars for bond strength",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Standard lengths",
        label_ar: "الأطوال القياسية",
        value: "Typically 12 m stock lengths; cut lengths available on request",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to ASTM A615 or BS 4449 equivalent standards",
      },
    ],
    applications_en: [
      "Reinforced concrete foundations, columns, and slabs",
      "Bridge and infrastructure structural works",
      "Precast reinforced concrete elements",
      "Retaining wall and basement reinforcement",
      "Industrial floor slab reinforcement",
    ],
    applications_ar: [
      "أساسات وأعمدة وبلاطات خرسانية مسلحة",
      "أعمال إنشائية للجسور والبنية التحتية",
      "عناصر خرسانية مسلحة جاهزة",
      "تسليح الجدران الاستنادية والقبو",
      "تسليح أرضيات المصانع الصناعية",
    ],
    relatedProductSlugs: ["structural-steel-sections", "construction-sealants"],
    catalogues: [
      {
        id: "reinforcement-steel-rebar-datasheet",
        title_en: "Reinforcement Steel Datasheet",
        title_ar: "نشرة بيانات حديد التسليح",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/reinforcement-steel-rebar.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "structural-steel-sections",
    slug: "structural-steel-sections",
    name_en: "Structural Steel Sections",
    name_ar: "مقاطع الحديد الإنشائي",
    shortDescription_en:
      "Structural steel sections for framing and load-bearing construction elements.",
    shortDescription_ar:
      "مقاطع حديد إنشائي لأعمال الهيكل والعناصر الحاملة للأحمال.",
    longDescription_en:
      "Structural steel sections — beams, columns, and channels — for framing and load-bearing construction elements. We source sections matched to your project's engineering specification.",
    longDescription_ar:
      "مقاطع حديد إنشائي — كمرات وأعمدة ومجاري — لأعمال الهيكل والعناصر الحاملة للأحمال. نقوم بتوريد المقاطع المطابقة للمواصفات الهندسية لمشروعكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    features_en: [
      "I-beam, channel, and angle sections sourced to your engineering specification",
      "Mill-finish, galvanized, and primed surface options",
      "Cut, drilled, and fabricated options coordinated with your project schedule",
    ],
    features_ar: [
      "مقاطع كمرات ومجاري وزوايا يتم توريدها وفق المواصفات الهندسية لديكم",
      "خيارات تشطيب: مصنعي، مجلفن، أو مطلي بطبقة أساس",
      "خيارات القص والحفر والتصنيع منسّقة مع جدول مشروعكم",
    ],
    specifications: [
      {
        label_en: "Section types",
        label_ar: "أنواع المقاطع",
        value: "I-beams (UB/UC), channels (UPN), and angles",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Steel grade",
        label_ar: "درجة الحديد",
        value: "Typically S275/S355 per EN 10025, or ASTM A992 equivalent",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Yield strength range",
        label_ar: "نطاق مقاومة الخضوع",
        value: "Typically 275–450 MPa, depending on grade",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standard lengths",
        label_ar: "الأطوال القياسية",
        value: "Typically 6–12 m mill lengths",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Surface finish",
        label_ar: "تشطيب السطح",
        value: "Mill-finish, hot-dip galvanized, or primed options",
        group_en: "Finish",
        group_ar: "التشطيب",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to EN 10025 or ASTM A992 equivalent standards",
      },
    ],
    applications_en: [
      "Structural steel framing for industrial and commercial buildings",
      "Bridge and infrastructure load-bearing elements",
      "Pre-engineered building (PEB) structural frames",
      "Mezzanine floor and platform structures",
      "Crane runway beams and support structures",
    ],
    applications_ar: [
      "هياكل حديد إنشائي للمباني الصناعية والتجارية",
      "عناصر حاملة للأحمال في الجسور والبنية التحتية",
      "هياكل المباني الجاهزة هندسيًا (PEB)",
      "إنشاءات الميزانين والمنصات",
      "كمرات مسار الرافعات والهياكل الداعمة",
    ],
    relatedProductSlugs: [
      "reinforcement-steel-rebar",
      "waterproofing-membranes",
    ],
    catalogues: [
      {
        id: "structural-steel-sections-datasheet",
        title_en: "Structural Steel Sections Datasheet",
        title_ar: "نشرة بيانات مقاطع الحديد الإنشائي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/structural-steel-sections.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "waterproofing-membranes",
    slug: "waterproofing-membranes",
    name_en: "Waterproofing Membranes",
    name_ar: "أغشية العزل المائي",
    shortDescription_en:
      "Waterproofing membranes for roofs, foundations, and wet-area protection.",
    shortDescription_ar:
      "أغشية عزل مائي لحماية الأسطح والأساسات والمناطق الرطبة.",
    longDescription_en:
      "Waterproofing membranes for roofs, foundations, and wet-area protection, sourced in sheet and liquid-applied systems matched to your substrate and exposure condition.",
    longDescription_ar:
      "أغشية عزل مائي لحماية الأسطح والأساسات والمناطق الرطبة، يتم توريدها بأنظمة لفائف وسائلة مطابقة لطبيعة السطح وظروف التعرض لديكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    features_en: [
      "Bituminous, PVC, TPO, and liquid-applied systems sourced to your substrate and exposure condition",
      "Reinforced sheet membranes for puncture and tear resistance",
      "Matched to your project's application method — torch-applied, self-adhesive, or liquid-applied",
    ],
    features_ar: [
      "أنظمة بيتومينية وPVC وTPO وسائلة يتم توريدها وفق طبيعة السطح وظروف التعرض لديكم",
      "أغشية لفائف مقواة لمقاومة الثقب والتمزق",
      "مطابقة لطريقة التطبيق في مشروعكم — لحام باللهب أو ذاتي اللصق أو سائل",
    ],
    specifications: [
      {
        label_en: "Membrane types",
        label_ar: "أنواع الأغشية",
        value:
          "Bituminous (torch-applied/self-adhesive), PVC, TPO, or liquid-applied polyurethane",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Thickness range",
        label_ar: "نطاق السماكة",
        value:
          "Typically 3–5 mm for sheet membranes; 1.5–2 mm dry film for liquid-applied systems",
        group_en: "Physical",
        group_ar: "الخواص الفيزيائية",
      },
      {
        label_en: "Tensile strength",
        label_ar: "مقاومة الشد",
        value:
          "Typically ≥400 N/50mm (sheet membranes, longitudinal direction)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Reinforcement",
        label_ar: "التسليح",
        value: "Polyester or glass-fiber reinforced (sheet membranes)",
        group_en: "Physical",
        group_ar: "الخواص الفيزيائية",
      },
      {
        label_en: "Application temperature range",
        label_ar: "نطاق حرارة التطبيق",
        value: "Typically 5°C to 35°C ambient, product-dependent",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to EN 13707 (bituminous sheets) or ASTM D6164 equivalent standards",
      },
    ],
    applications_en: [
      "Roof waterproofing for flat and low-slope roofs",
      "Below-grade foundation and basement waterproofing",
      "Podium deck and planter box waterproofing",
      "Wet-area waterproofing under tiling",
      "Water tank and reservoir lining",
      "Bridge deck waterproofing",
    ],
    applications_ar: [
      "عزل مائي للأسطح المستوية ومنخفضة الميل",
      "عزل مائي للأساسات والقبو تحت مستوى الأرض",
      "عزل أسطح البوديوم وأحواض الزراعة",
      "عزل مائي للمناطق الرطبة تحت البلاط",
      "تبطين خزانات وأحواض المياه",
      "عزل مائي لأسطح الجسور",
    ],
    relatedProductSlugs: ["thermal-insulation-boards", "construction-sealants"],
    relatedBrandSlugs: ["sika", "soprema", "gcp-applied-technologies"],
    catalogues: [
      {
        id: "waterproofing-membranes-datasheet",
        title_en: "Waterproofing Membranes Datasheet",
        title_ar: "نشرة بيانات أغشية العزل المائي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/waterproofing-membranes.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "thermal-insulation-boards",
    slug: "thermal-insulation-boards",
    name_en: "Thermal Insulation Boards",
    name_ar: "ألواح العزل الحراري",
    shortDescription_en:
      "Thermal insulation boards for building envelope energy performance.",
    shortDescription_ar: "ألواح عزل حراري لتحسين الأداء الحراري لغلاف المبنى.",
    longDescription_en:
      "Thermal insulation boards for walls, roofs, and building envelopes, sourced to your project's thermal performance and fire-rating requirement.",
    longDescription_ar:
      "ألواح عزل حراري للجدران والأسطح وغلاف المبنى، يتم توريدها وفق الأداء الحراري وتصنيف مقاومة الحريق المطلوب لمشروعكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    features_en: [
      "EPS, XPS, PIR, and mineral wool options sourced to your thermal performance target",
      "Matched to your project's fire-rating and building code requirement",
      "Faced and unfaced board options for different installation methods",
    ],
    features_ar: [
      "خيارات EPS وXPS وPIR والصوف المعدني يتم توريدها وفق الأداء الحراري المستهدف",
      "مطابقة لمتطلبات تصنيف مقاومة الحريق وكود البناء لمشروعكم",
      "ألواح مكسوة وغير مكسوة حسب طريقة التركيب",
    ],
    specifications: [
      {
        label_en: "Insulation types",
        label_ar: "أنواع العزل",
        value: "EPS, XPS, PIR/PUR, or rock wool/mineral wool boards",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Thermal conductivity (λ)",
        label_ar: "الموصلية الحرارية",
        value: "Typically 0.020–0.040 W/m·K, depending on material",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Density range",
        label_ar: "نطاق الكثافة",
        value: "Typically 15–150 kg/m³, depending on material and application",
        group_en: "Physical",
        group_ar: "الخواص الفيزيائية",
      },
      {
        label_en: "Thickness range",
        label_ar: "نطاق السماكة",
        value: "Typically 25–150 mm",
        group_en: "Physical",
        group_ar: "الخواص الفيزيائية",
      },
      {
        label_en: "Fire rating",
        label_ar: "تصنيف مقاومة الحريق",
        value:
          "Ranges from non-combustible (mineral wool) to combustible (EPS/XPS) — confirmed per project code",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to EN 13163/EN 13164 or ASTM C578 equivalent standards",
      },
    ],
    applications_en: [
      "External wall insulation under render/EIFS systems",
      "Roof insulation under waterproofing membranes",
      "Cavity wall and cold-bridge insulation",
      "Cold storage and refrigerated facility envelope insulation",
      "Fire-rated partition insulation",
    ],
    applications_ar: [
      "عزل الجدران الخارجية تحت أنظمة الطلاء (EIFS)",
      "عزل الأسطح تحت أغشية العزل المائي",
      "عزل الفراغ الهوائي في الجدران وعزل الجسور الحرارية",
      "عزل غلاف منشآت التبريد والتخزين المبرد",
      "عزل الفواصل المقاومة للحريق",
    ],
    relatedProductSlugs: [
      "waterproofing-membranes",
      "structural-steel-sections",
    ],
    relatedBrandSlugs: ["rockwool", "kingspan", "knauf-insulation"],
    catalogues: [
      {
        id: "thermal-insulation-boards-datasheet",
        title_en: "Thermal Insulation Boards Datasheet",
        title_ar: "نشرة بيانات ألواح العزل الحراري",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/thermal-insulation-boards.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "construction-sealants",
    slug: "construction-sealants",
    name_en: "Construction Sealants & Expansion Joints",
    name_ar: "مواد السد وفواصل التمدد الإنشائية",
    shortDescription_en:
      "Sealants and expansion joints for weatherproofing and structural movement control.",
    shortDescription_ar:
      "مواد سد وفواصل تمدد لعزل العوامل الجوية والتحكم في الحركة الإنشائية.",
    longDescription_en:
      "Sealants and expansion joints for weatherproofing building envelopes and accommodating structural movement, sourced to your joint width and exposure requirement.",
    longDescription_ar:
      "مواد سد وفواصل تمدد لعزل غلاف المبنى من العوامل الجوية واستيعاب الحركة الإنشائية، يتم توريدها وفق عرض الفاصل ومتطلبات التعرض لديكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    features_en: [
      "Polyurethane, silicone, and polysulfide sealants sourced to your joint movement requirement",
      "One-part moisture-cure and two-part chemical-cure systems available",
      "Expansion joint profiles matched to your structural movement calculation",
    ],
    features_ar: [
      "مواد سد بولي يوريثان وسيليكون وبولي سلفيد يتم توريدها وفق حركة الفاصل المطلوبة",
      "أنظمة أحادية المكون بالمعالجة الرطبة وثنائية المكون بالمعالجة الكيميائية متوفرة",
      "مقاطع فواصل التمدد مطابقة لحساب الحركة الإنشائية لديكم",
    ],
    specifications: [
      {
        label_en: "Sealant types",
        label_ar: "أنواع مواد السد",
        value: "Polyurethane, silicone, or polysulfide sealants",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Movement capability",
        label_ar: "قدرة استيعاب الحركة",
        value: "Typically ±25% to ±50% joint movement accommodation",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Joint width range",
        label_ar: "نطاق عرض الفاصل",
        value: "Typically 6–50 mm, sealant-dependent",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Cure type",
        label_ar: "نوع المعالجة",
        value: "One-part moisture-cure or two-part chemical-cure systems",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Expansion joint systems",
        label_ar: "أنظمة فواصل التمدد",
        value: "Typically rated for 10–100 mm total movement, system-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to ASTM C920 or ISO 11600 equivalent standards",
      },
    ],
    applications_en: [
      "Movement and expansion joint sealing in concrete structures",
      "Curtain wall and façade glazing joint sealing",
      "Wet-area and sanitary joint sealing",
      "Pavement and bridge deck expansion joints",
      "Precast panel and cladding joint sealing",
    ],
    applications_ar: [
      "سد فواصل الحركة والتمدد في المنشآت الخرسانية",
      "سد فواصل الواجهات الزجاجية والستائرية",
      "سد فواصل المناطق الرطبة والصحية",
      "فواصل تمدد الأرصفة وأسطح الجسور",
      "سد فواصل الألواح الجاهزة وكسوة الواجهات",
    ],
    relatedProductSlugs: [
      "waterproofing-membranes",
      "reinforcement-steel-rebar",
    ],
    relatedBrandSlugs: ["sika", "tremco"],
    catalogues: [
      {
        id: "construction-sealants-datasheet",
        title_en: "Construction Sealants Datasheet",
        title_ar: "نشرة بيانات مواد السد وفواصل التمدد",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/construction-sealants.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
