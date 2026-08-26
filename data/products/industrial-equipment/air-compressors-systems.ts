import type { Product } from "@/data/products/types";

/** Industrial Equipment & Pumps → Air Compressors & Systems category. */
export const industrialAirCompressorsSystems: Product[] = [
  {
    id: "rotary-screw-compressors",
    slug: "rotary-screw-compressors",
    name_en: "Rotary Screw Compressors",
    name_ar: "ضواغط اللولب الدوارة",
    shortDescription_en:
      "Rotary screw compressors for continuous-duty industrial compressed air supply.",
    shortDescription_ar:
      "ضواغط لولبية دوارة لإمداد الهواء المضغوط الصناعي بشكل مستمر.",
    longDescription_en:
      "Rotary screw compressors for continuous-duty industrial compressed air supply, sourced in oil-injected and oil-free configurations. We source units matched to your required flow (FAD) and working pressure.",
    longDescription_ar:
      "ضواغط لولبية دوارة لإمداد الهواء المضغوط الصناعي بشكل مستمر، يتم توريدها بتكوينات مزيتة وخالية من الزيت. نقوم بتوريد الوحدات المطابقة للتدفق المطلوب وضغط التشغيل لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    features_en: [
      "Fixed-speed or variable-speed drive (VSD) options",
      "Oil-injected or oil-free (Class 0) configurations",
      "Integrated or remote-mounted control panel options",
    ],
    features_ar: [
      "خيارات سرعة ثابتة أو محرك متغير السرعة (VSD)",
      "تكوينات مزيتة أو خالية من الزيت (فئة 0)",
      "خيارات لوحة تحكم مدمجة أو عن بُعد",
    ],
    specifications: [
      {
        label_en: "Free air delivery (FAD)",
        label_ar: "معدل تسليم الهواء الحر (FAD)",
        value: "Up to approx. 100 m³/min, application-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Working pressure",
        label_ar: "ضغط التشغيل",
        value: "Up to approx. 13 bar (standard), higher on request",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Drive type",
        label_ar: "نوع التشغيل",
        value: "Fixed-speed or variable-speed drive (VSD) options",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Oil-injected or oil-free (Class 0) options",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Motor power range",
        label_ar: "نطاق قدرة المحرك",
        value: "5.5 kW – 355 kW",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically tested/specified to ISO 1217 for compressor performance acceptance",
      },
    ],
    applications_en: [
      "Continuous industrial compressed air supply",
      "Manufacturing and production line pneumatic tools",
      "Instrument and process air (oil-free)",
      "Automotive and general workshop air supply",
      "Packaging and food-grade air supply (oil-free Class 0)",
    ],
    applications_ar: [
      "إمداد الهواء المضغوط الصناعي المستمر",
      "الأدوات الهوائية في خطوط التصنيع والإنتاج",
      "هواء الأجهزة والعمليات (خالٍ من الزيت)",
      "إمداد الهواء لورش السيارات والورش العامة",
      "إمداد الهواء لأغراض التعبئة والصناعات الغذائية (فئة 0 خالية من الزيت)",
    ],
    relatedProductSlugs: ["reciprocating-compressors", "air-receivers-dryers"],
    relatedBrandSlugs: ["atlas-copco", "ingersoll-rand", "kaeser"],
    catalogues: [
      {
        id: "rotary-screw-compressors-datasheet",
        title_en: "Rotary Screw Compressors Datasheet",
        title_ar: "نشرة بيانات الضواغط اللولبية الدوارة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-equipment/rotary-screw-compressors.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "reciprocating-compressors",
    slug: "reciprocating-compressors",
    name_en: "Reciprocating Compressors",
    name_ar: "الضواغط الترددية",
    shortDescription_en:
      "Reciprocating compressors for intermittent and high-pressure air applications.",
    shortDescription_ar: "ضواغط ترددية للتطبيقات المتقطعة وعالية الضغط.",
    longDescription_en:
      "Reciprocating (piston) compressors for intermittent duty and higher-pressure air applications than typical screw compressors serve. We source units matched to your pressure and duty-cycle requirement.",
    longDescription_ar:
      "ضواغط ترددية (مكبسية) للأعمال المتقطعة وتطبيقات الضغط الأعلى مما توفره الضواغط اللولبية عادةً. نقوم بتوريد الوحدات المطابقة للضغط ودورة التشغيل المطلوبة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    features_en: [
      "Single-stage or multi-stage compression for higher pressure duty",
      "Air-cooled or water-cooled configurations",
      "Belt-driven or direct-drive options",
    ],
    features_ar: [
      "ضغط أحادي أو متعدد المراحل للضغوط الأعلى",
      "تكوينات مبردة بالهواء أو بالماء",
      "خيارات تشغيل بالسير أو مباشرة",
    ],
    specifications: [
      {
        label_en: "Working pressure",
        label_ar: "ضغط التشغيل",
        value: "Up to approx. 40 bar, higher on request for specialty duty",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Free air delivery",
        label_ar: "معدل تسليم الهواء الحر",
        value: "Up to approx. 20 m³/min, application-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Single-stage or multi-stage (2–4 stage) compression",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Cooling",
        label_ar: "التبريد",
        value: "Air-cooled or water-cooled options",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Motor power range",
        label_ar: "نطاق قدرة المحرك",
        value: "1.5 kW – 200 kW",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically tested/specified to ISO 1217 for compressor performance acceptance",
      },
    ],
    applications_en: [
      "Intermittent-duty workshop and garage air supply",
      "High-pressure industrial process air",
      "Gas boosting and specialty pressure applications",
      "Mobile and portable compressed air units",
      "Oil and gas field air supply",
    ],
    applications_ar: [
      "إمداد الهواء المتقطع في الورش والكراجات",
      "هواء العمليات الصناعية عالي الضغط",
      "رفع ضغط الغاز والتطبيقات المتخصصة",
      "وحدات هواء مضغوط محمولة أو متنقلة",
      "إمداد الهواء لحقول النفط والغاز",
    ],
    relatedProductSlugs: ["rotary-screw-compressors", "gas-compressors"],
    relatedBrandSlugs: ["ingersoll-rand", "atlas-copco", "gardner-denver"],
    catalogues: [
      {
        id: "reciprocating-compressors-datasheet",
        title_en: "Reciprocating Compressors Datasheet",
        title_ar: "نشرة بيانات الضواغط الترددية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-equipment/reciprocating-compressors.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "air-receivers-dryers",
    slug: "air-receivers-dryers",
    name_en: "Air Receivers & Air Dryers",
    name_ar: "خزانات ومجففات الهواء",
    shortDescription_en:
      "Air receiver tanks and dryers for stable, moisture-free compressed air supply.",
    shortDescription_ar:
      "خزانات هواء ومجففات للحصول على إمداد هواء مضغوط مستقر وخالٍ من الرطوبة.",
    longDescription_en:
      "Air receiver tanks buffer compressed air demand, and refrigerant or desiccant dryers remove moisture before it reaches your equipment. We source units matched to your system's storage capacity and dew-point requirement.",
    longDescription_ar:
      "تعمل خزانات الهواء على استيعاب تذبذبات الطلب على الهواء المضغوط، بينما تزيل المجففات التبريدية أو الماصة الرطوبة قبل وصولها إلى معداتكم. نقوم بتوريد الوحدات المطابقة لسعة التخزين ونقطة الندى المطلوبة في نظامكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    features_en: [
      "Refrigerant or desiccant (adsorption) dryer options",
      "Sized to system storage and dew-point requirement",
      "Vertical or horizontal receiver tank configurations",
    ],
    features_ar: [
      "خيارات مجفف تبريدي أو ماص للرطوبة (امتزازي)",
      "مُقاس وفق سعة التخزين ونقطة الندى المطلوبة في النظام",
      "تكوينات خزان رأسي أو أفقي",
    ],
    specifications: [
      {
        label_en: "Storage capacity",
        label_ar: "سعة التخزين",
        value: "Up to approx. 10,000 liters, application-dependent",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Design pressure",
        label_ar: "ضغط التصميم",
        value: "Up to approx. 16 bar, application-dependent",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Dryer type",
        label_ar: "نوع المجفف",
        value: "Refrigerant or desiccant (adsorption) dryer options",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Achievable dew point",
        label_ar: "نقطة الندى القابلة للتحقيق",
        value: "Down to approx. -40°C with desiccant dryers",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Vessel material",
        label_ar: "خامة الوعاء",
        value: "Carbon steel, coated or galvanized options",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to ASME Section VIII / PED pressure vessel requirements",
      },
    ],
    applications_en: [
      "Compressed air demand buffering and pressure stabilization",
      "Moisture removal for instrument and process air",
      "Protection of pneumatic tools and equipment from condensate",
      "Food, pharma, and electronics-grade dry air supply",
      "Backup air storage for intermittent peak demand",
    ],
    applications_ar: [
      "استيعاب تذبذبات الطلب على الهواء المضغوط واستقرار الضغط",
      "إزالة الرطوبة من هواء الأجهزة والعمليات",
      "حماية الأدوات والمعدات الهوائية من التكاثف",
      "إمداد هواء جاف بمواصفات الأغذية والأدوية والإلكترونيات",
      "تخزين هواء احتياطي لأوقات الذروة المتقطعة",
    ],
    relatedProductSlugs: [
      "rotary-screw-compressors",
      "compressed-air-filtration-systems",
    ],
    relatedBrandSlugs: ["atlas-copco", "kaeser", "parker-hannifin"],
    catalogues: [
      {
        id: "air-receivers-dryers-datasheet",
        title_en: "Air Receivers & Air Dryers Datasheet",
        title_ar: "نشرة بيانات خزانات ومجففات الهواء",
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
    id: "compressed-air-filtration-systems",
    slug: "compressed-air-filtration-systems",
    name_en: "Compressed Air Filtration Systems",
    name_ar: "أنظمة ترشيح الهواء المضغوط",
    shortDescription_en:
      "Filtration systems that remove oil, particulates, and moisture from compressed air lines.",
    shortDescription_ar:
      "أنظمة ترشيح تزيل الزيت والجسيمات والرطوبة من خطوط الهواء المضغوط.",
    longDescription_en:
      "In-line filtration systems that remove oil, particulates, and residual moisture from compressed air before it reaches sensitive equipment or process applications. We source units matched to your required air quality class.",
    longDescription_ar:
      "أنظمة ترشيح مضمنة في الخط تزيل الزيت والجسيمات والرطوبة المتبقية من الهواء المضغوط قبل وصوله إلى المعدات الحساسة أو تطبيقات العمليات. نقوم بتوريد الوحدات المطابقة لفئة جودة الهواء المطلوبة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    features_en: [
      "Pre-filtration, coalescing, and activated carbon stages available",
      "Sized to your required ISO 8573-1 air purity class",
      "Differential pressure indicators for filter service monitoring",
    ],
    features_ar: [
      "مراحل ترشيح أولي وتلاصقي وكربون منشط متوفرة",
      "مُقاسة وفق فئة نقاء الهواء المطلوبة حسب ISO 8573-1",
      "مؤشرات فرق الضغط لمراقبة صيانة الفلاتر",
    ],
    specifications: [
      {
        label_en: "Filtration grade",
        label_ar: "درجة الترشيح",
        value:
          "Particulate down to 0.01 micron, oil removal to 0.01 mg/m³ (coalescing grade)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Air quality class",
        label_ar: "فئة جودة الهواء",
        value: "Sized to the ISO 8573-1 air purity class required",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Filter stages",
        label_ar: "مراحل الترشيح",
        value:
          "Pre-filter, coalescing, and activated carbon stages as required",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Connection sizes",
        label_ar: "قياسات التوصيل",
        value: 'DN15–DN150 (½"–6")',
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically specified to ISO 8573-1 air purity classification",
      },
    ],
    applications_en: [
      "Instrument and process air quality assurance",
      "Food and beverage grade compressed air",
      "Pharmaceutical and electronics manufacturing clean air",
      "Paint spraying and coating oil-free air supply",
      "General protection of pneumatic equipment from contamination",
    ],
    applications_ar: [
      "ضمان جودة هواء الأجهزة والعمليات",
      "هواء مضغوط بمواصفات الأغذية والمشروبات",
      "هواء نظيف لتصنيع الأدوية والإلكترونيات",
      "إمداد هواء خالٍ من الزيت لأعمال الرش والطلاء",
      "الحماية العامة للمعدات الهوائية من التلوث",
    ],
    relatedProductSlugs: ["air-receivers-dryers", "rotary-screw-compressors"],
    relatedBrandSlugs: ["parker-hannifin", "atlas-copco", "donaldson"],
    catalogues: [
      {
        id: "compressed-air-filtration-systems-datasheet",
        title_en: "Compressed Air Filtration Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة ترشيح الهواء المضغوط",
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
    id: "gas-compressors",
    slug: "gas-compressors",
    name_en: "Gas Compressors",
    name_ar: "ضواغط الغاز",
    shortDescription_en:
      "Gas compressors sourced to process gas type, pressure, and duty requirements.",
    shortDescription_ar:
      "ضواغط غاز يتم توريدها وفق نوع غاز العملية والضغط ومتطلبات التشغيل.",
    longDescription_en:
      "Gas compressors for process and utility gas duties beyond standard compressed air, sourced to your specific gas composition, discharge pressure, and duty cycle.",
    longDescription_ar:
      "ضواغط غاز لأعمال غازات العمليات والمرافق بخلاف الهواء المضغوط القياسي، يتم توريدها وفق تركيبة الغاز وضغط التصريف ودورة التشغيل المحددة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    features_en: [
      "Selected per gas composition, molecular weight, and compressibility",
      "Wetted parts material selected for gas compatibility",
      "Reciprocating or rotary screw configurations available",
    ],
    features_ar: [
      "يتم اختيارها وفق تركيبة الغاز ووزنه الجزيئي وقابليته للانضغاط",
      "خامة الأجزاء الملامسة للغاز مختارة وفق التوافق معه",
      "تكوينات ترددية أو لولبية دوارة متوفرة",
    ],
    specifications: [
      {
        label_en: "Discharge pressure",
        label_ar: "ضغط التصريف",
        value:
          "Application-dependent, from low-pressure boosting to high-pressure process duty",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Gas type",
        label_ar: "نوع الغاز",
        value:
          "Natural gas, nitrogen, CO2, and other process gases (media-compatible design)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Compressor type",
        label_ar: "نوع الضاغط",
        value:
          "Reciprocating or rotary screw, selected per gas composition and duty",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Wetted parts materials",
        label_ar: "خامات الأجزاء الملامسة",
        value: "Selected for gas compatibility and corrosion resistance",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to API 618 for reciprocating process gas compressors",
      },
    ],
    applications_en: [
      "Natural gas boosting and transfer",
      "Nitrogen and inert gas supply for process purging",
      "CO2 compression for industrial and beverage use",
      "Refinery and petrochemical process gas handling",
      "Biogas and landfill gas compression",
    ],
    applications_ar: [
      "رفع ونقل ضغط الغاز الطبيعي",
      "إمداد النيتروجين والغازات الخاملة لأعمال التطهير",
      "ضغط ثاني أكسيد الكربون للاستخدامات الصناعية والمشروبات",
      "التعامل مع غازات العمليات في المصافي والبتروكيماويات",
      "ضغط الغاز الحيوي وغاز مكبات النفايات",
    ],
    relatedProductSlugs: [
      "reciprocating-compressors",
      "rotary-screw-compressors",
    ],
    relatedBrandSlugs: ["ariel", "atlas-copco", "burckhardt-compression"],
    catalogues: [
      {
        id: "gas-compressors-datasheet",
        title_en: "Gas Compressors Datasheet",
        title_ar: "نشرة بيانات ضواغط الغاز",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/industrial-equipment/gas-compressors.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
