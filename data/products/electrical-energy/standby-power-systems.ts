import type { Product } from "@/data/products/types";

/** Electrical & Energy Solutions → Generators & Standby Power category. */
export const electricalStandbyPowerSystems: Product[] = [
  {
    id: "diesel-generators",
    slug: "diesel-generators",
    name_en: "Diesel Generators",
    name_ar: "مولدات الديزل",
    shortDescription_en:
      "Diesel generator sets for standby and prime power applications.",
    shortDescription_ar:
      "مجموعات مولدات ديزل لتطبيقات الطاقة الاحتياطية والأساسية.",
    longDescription_en:
      "Diesel generator sets for standby and prime power applications across industrial, commercial, and institutional facilities. We source units matched to your load requirement and required run mode.",
    longDescription_ar:
      "مجموعات مولدات ديزل لتطبيقات الطاقة الاحتياطية والأساسية عبر المنشآت الصناعية والتجارية والمؤسسية. نقوم بتوريد الوحدات المطابقة لمتطلبات الحمل ونمط التشغيل المطلوب لديكم.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    features_en: [
      "Open, silent (acoustic canopy), and containerized enclosure options",
      "Automatic mains failure (AMF) panel compatible",
      "Parallel operation capability for multi-set configurations",
    ],
    features_ar: [
      "خيارات هيكل مفتوح، أو صامت (بغطاء عازل للصوت)، أو حاوية مغلقة",
      "متوافقة مع لوحات التشغيل التلقائي عند انقطاع التيار (AMF)",
      "إمكانية التشغيل المتوازي لتوليفات متعددة المولدات",
    ],
    specifications: [
      {
        label_en: "Power rating",
        label_ar: "تصنيف القدرة",
        value: "20kVA – 2,000kVA",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Voltage / frequency",
        label_ar: "الجهد / التردد",
        value: "400V/230V, 50Hz (60Hz available on request)",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Fuel type",
        label_ar: "نوع الوقود",
        value: "Diesel",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Enclosure type",
        label_ar: "نوع الهيكل",
        value: "Open skid, silent (acoustic), or containerized",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Alternator type",
        label_ar: "نوع المولد الكهربائي",
        value: "Brushless, self-excited",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to ISO 8528 for reciprocating internal combustion engine driven generating sets",
      },
    ],
    applications_en: [
      "Standby power for commercial and industrial facilities",
      "Prime power for remote or off-grid sites",
      "Construction site temporary power",
      "Backup power for hospitals and data centers",
      "Backup power for telecom towers and network sites",
      "Emergency power for retail and hospitality facilities",
    ],
    applications_ar: [
      "الطاقة الاحتياطية للمنشآت التجارية والصناعية",
      "الطاقة الأساسية للمواقع النائية أو غير المتصلة بالشبكة",
      "الطاقة المؤقتة لمواقع الإنشاءات",
      "الطاقة الاحتياطية للمستشفيات ومراكز البيانات",
      "الطاقة الاحتياطية لأبراج ومواقع الاتصالات",
      "طاقة الطوارئ للمنشآت التجارية والفندقية",
    ],
    relatedProductSlugs: ["automatic-transfer-switches", "ups-systems"],
    relatedBrandSlugs: ["cummins", "caterpillar", "perkins", "fg-wilson"],
    catalogues: [
      {
        id: "diesel-generators-datasheet",
        title_en: "Diesel Generators Datasheet",
        title_ar: "نشرة بيانات المولدات الديزل",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/electrical-energy/diesel-generators.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "automatic-transfer-switches",
    slug: "automatic-transfer-switches",
    name_en: "Automatic Transfer Switches",
    name_ar: "مفاتيح التحويل الآلي",
    shortDescription_en:
      "ATS panels for automatic switchover between mains and standby power.",
    shortDescription_ar:
      "لوحات تحويل آلي للتبديل التلقائي بين التيار العام والطاقة الاحتياطية.",
    longDescription_en:
      "Automatic transfer switches that detect a mains power failure and switch the load to standby generation without manual intervention. We source panels matched to your generator's rating and switching configuration.",
    longDescription_ar:
      "مفاتيح تحويل آلي تكتشف انقطاع التيار العام وتقوم بتحويل الحمل إلى مصدر الطاقة الاحتياطي دون تدخل يدوي. نقوم بتوريد اللوحات المطابقة لتصنيف مولدكم وتكوين التحويل المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    features_en: [
      "Adjustable time delays for start, transfer, and retransfer",
      "Open-transition and closed-transition (optional) configurations",
      "Integrates with generator control and building management systems",
    ],
    features_ar: [
      "تأخير زمني قابل للتعديل لبدء التشغيل والتحويل وإعادة التحويل",
      "تكوينات تحويل مفتوح، أو مغلق (اختياري)",
      "قابلة للدمج مع أنظمة التحكم بالمولد وأنظمة إدارة المبنى",
    ],
    specifications: [
      {
        label_en: "Current rating",
        label_ar: "تصنيف التيار",
        value: "40A – 4,000A",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Switching time",
        label_ar: "زمن التحويل",
        value: "Typically under 10 seconds (adjustable)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Pole configuration",
        label_ar: "تكوين الأقطاب",
        value: "3-pole or 4-pole",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Transition type",
        label_ar: "نوع التحويل",
        value: "Open transition, or closed transition (optional)",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP54 indoor / IP65 outdoor",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 60947-6-1 for automatic transfer switching equipment",
      },
    ],
    applications_en: [
      "Standby generator switchover for commercial buildings",
      "Hospital and healthcare critical power systems",
      "Data center dual-source switching",
      "Industrial facility backup power integration",
      "Telecom site power redundancy",
    ],
    applications_ar: [
      "التحويل إلى المولد الاحتياطي في المباني التجارية",
      "أنظمة الطاقة الحرجة في المستشفيات والمنشآت الصحية",
      "التحويل بين مصدرين للطاقة في مراكز البيانات",
      "دمج الطاقة الاحتياطية في المنشآت الصناعية",
      "ازدواجية مصدر الطاقة لمواقع الاتصالات",
    ],
    relatedProductSlugs: ["diesel-generators", "voltage-stabilizers"],
    relatedBrandSlugs: ["asco", "socomec", "schneider-electric", "eaton"],
    catalogues: [
      {
        id: "automatic-transfer-switches-datasheet",
        title_en: "Automatic Transfer Switches Datasheet",
        title_ar: "نشرة بيانات مفاتيح التحويل الآلي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/electrical-energy/automatic-transfer-switches.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ups-systems",
    slug: "ups-systems",
    name_en: "Uninterruptible Power Supplies (UPS)",
    name_ar: "أنظمة الطاقة غير المنقطعة (UPS)",
    shortDescription_en:
      "UPS systems for instant, battery-backed power to critical loads.",
    shortDescription_ar:
      "أنظمة UPS لتوفير طاقة فورية مدعومة بالبطارية للأحمال الحرجة.",
    longDescription_en:
      "UPS systems that bridge the gap between a mains power loss and standby generator start-up, keeping critical loads powered without interruption. We source units matched to your load's power rating and required backup runtime.",
    longDescription_ar:
      "أنظمة UPS تسد الفجوة الزمنية بين انقطاع التيار العام وبدء تشغيل المولد الاحتياطي، مما يحافظ على تشغيل الأحمال الحرجة دون انقطاع. نقوم بتوريد الوحدات المطابقة لتصنيف قدرة حملكم ومدة النسخ الاحتياطي المطلوبة.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    features_en: [
      "Online double-conversion and line-interactive topology options",
      "Modular and scalable capacity for growing loads",
      "VRLA and lithium-ion battery options",
    ],
    features_ar: [
      "خيارات تقنية التحويل المزدوج المتصل (Online) أو التفاعلي الخطي",
      "قدرة معيارية وقابلة للتوسع مع نمو الأحمال",
      "خيارات بطاريات VRLA أو ليثيوم أيون",
    ],
    specifications: [
      {
        label_en: "Power rating",
        label_ar: "تصنيف القدرة",
        value: "1kVA – 800kVA",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Topology",
        label_ar: "التقنية",
        value: "Online double-conversion or line-interactive",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Backup runtime",
        label_ar: "مدة النسخ الاحتياطي",
        value:
          "Typically 5–30 minutes at full load, extendable with additional battery banks",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Input/output voltage",
        label_ar: "جهد الدخل/الخرج",
        value: "Single- or three-phase, 220V–415V",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Battery type",
        label_ar: "نوع البطارية",
        value: "VRLA or lithium-ion",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 62040 for uninterruptible power systems",
      },
    ],
    applications_en: [
      "Data center and server room critical loads",
      "Hospital operating theatres and life-safety equipment",
      "Industrial process control systems",
      "Telecom exchange and network equipment",
      "Financial institution trading floors and IT infrastructure",
    ],
    applications_ar: [
      "الأحمال الحرجة في مراكز البيانات وغرف الخوادم",
      "غرف العمليات ومعدات إنقاذ الحياة في المستشفيات",
      "أنظمة التحكم بالعمليات الصناعية",
      "معدات وشبكات مراكز اتصالات الهاتف",
      "قاعات التداول والبنية التحتية لتقنية المعلومات في المؤسسات المالية",
    ],
    relatedProductSlugs: ["diesel-generators", "battery-chargers-rectifiers"],
    relatedBrandSlugs: ["apc", "eaton", "vertiv", "socomec"],
    catalogues: [
      {
        id: "ups-systems-datasheet",
        title_en: "UPS Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة UPS",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/electrical-energy/ups-systems.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "voltage-stabilizers",
    slug: "voltage-stabilizers",
    name_en: "Voltage Stabilizers",
    name_ar: "منظمات الجهد الكهربائي",
    shortDescription_en:
      "Voltage stabilizers that protect equipment from unstable grid voltage.",
    shortDescription_ar:
      "منظمات جهد تحمي المعدات من تذبذب الجهد الكهربائي بالشبكة.",
    longDescription_en:
      "Voltage stabilizers that correct fluctuating grid voltage before it reaches sensitive equipment, protecting against both under- and over-voltage conditions. We source units matched to your load's power rating and voltage tolerance.",
    longDescription_ar:
      "منظمات جهد تصحح تذبذب جهد الشبكة قبل وصوله إلى المعدات الحساسة، وتحمي من حالتي انخفاض وارتفاع الجهد. نقوم بتوريد الوحدات المطابقة لتصنيف قدرة حملكم وهامش تحمل الجهد المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    features_en: [
      "Servo-controlled and static (electronic) correction technology options",
      "Wide input voltage correction range",
      "Built-in overload and short-circuit protection",
    ],
    features_ar: [
      "خيارات تقنية تصحيح بمحرك تابع (Servo) أو إلكترونية ثابتة",
      "نطاق واسع لتصحيح تذبذب جهد الدخل",
      "حماية مدمجة من التحميل الزائد والقصر الكهربائي",
    ],
    specifications: [
      {
        label_en: "Power rating",
        label_ar: "تصنيف القدرة",
        value: "5kVA – 2,000kVA",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Correction type",
        label_ar: "نوع التصحيح",
        value: "Servo-controlled or static (electronic) relay type",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Voltage correction range",
        label_ar: "نطاق تصحيح الجهد",
        value:
          "Typically ±10% to ±20% input variation corrected to approx. ±1% output",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Enclosure type",
        label_ar: "نوع الهيكل",
        value: "Wall-mount or floor-standing cabinet",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
    ],
    applications_en: [
      "Protecting sensitive manufacturing equipment from voltage fluctuation",
      "Medical imaging and laboratory equipment protection",
      "Telecom and data center power conditioning",
      "Agricultural and irrigation pump protection in weak-grid areas",
      "Retail and commercial facility equipment protection",
    ],
    applications_ar: [
      "حماية معدات التصنيع الحساسة من تذبذب الجهد",
      "حماية أجهزة التصوير الطبي والمختبرات",
      "تكييف جودة الطاقة في الاتصالات ومراكز البيانات",
      "حماية مضخات الري الزراعي في مناطق الشبكة الكهربائية الضعيفة",
      "حماية معدات المنشآت التجارية والتشغيلية",
    ],
    relatedProductSlugs: [
      "automatic-transfer-switches",
      "battery-chargers-rectifiers",
    ],
    catalogues: [
      {
        id: "voltage-stabilizers-datasheet",
        title_en: "Voltage Stabilizers Datasheet",
        title_ar: "نشرة بيانات منظمات الجهد",
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
    id: "battery-chargers-rectifiers",
    slug: "battery-chargers-rectifiers",
    name_en: "Battery Chargers & Rectifiers",
    name_ar: "شواحن البطاريات والمقومات",
    shortDescription_en:
      "Battery chargers and rectifiers for DC standby power and control systems.",
    shortDescription_ar:
      "شواحن بطاريات ومقومات لأنظمة الطاقة الاحتياطية والتحكم بالتيار المستمر.",
    longDescription_en:
      "Battery chargers and rectifiers that keep standby DC systems — switchgear control, telecom, and emergency lighting battery banks — charged and ready. We source units matched to your battery bank's voltage and capacity.",
    longDescription_ar:
      "شواحن بطاريات ومقومات تحافظ على شحن وجاهزية أنظمة التيار المستمر الاحتياطية — تحكم لوحات التوزيع، الاتصالات، وبطاريات إضاءة الطوارئ. نقوم بتوريد الوحدات المطابقة لجهد وسعة بنك البطاريات لديكم.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    features_en: [
      "Constant-voltage and boost-float charging modes",
      "Compatible with VRLA, flooded lead-acid, and NiCd battery types",
      "Overcharge and deep-discharge protection",
    ],
    features_ar: [
      "أوضاع شحن بجهد ثابت أو تعزيز-تعويم (Boost-Float)",
      "متوافقة مع بطاريات VRLA والرصاص الحمضي المغمور وNiCd",
      "حماية من الشحن الزائد والتفريغ العميق",
    ],
    specifications: [
      {
        label_en: "Output voltage",
        label_ar: "جهد الخرج",
        value: "12V / 24V / 48V / 110V / 220V DC, system-dependent",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Output current",
        label_ar: "تيار الخرج",
        value: "Up to several hundred amps, application-dependent",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Charging type",
        label_ar: "نوع الشحن",
        value: "Constant voltage / boost-float charging",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Battery compatibility",
        label_ar: "التوافق مع البطاريات",
        value: "VRLA, flooded lead-acid, or NiCd",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Enclosure type",
        label_ar: "نوع الهيكل",
        value: "Wall-mount or floor-standing cabinet",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
    ],
    applications_en: [
      "Switchgear DC control and tripping circuits",
      "Telecom exchange battery banks",
      "Emergency lighting battery systems",
      "Substation protection and control power",
      "Marine and industrial DC auxiliary systems",
    ],
    applications_ar: [
      "دوائر التحكم والفصل بالتيار المستمر للوحات التوزيع",
      "بنوك بطاريات مراكز اتصالات الهاتف",
      "أنظمة بطاريات إضاءة الطوارئ",
      "طاقة الحماية والتحكم في المحطات الفرعية",
      "أنظمة التيار المستمر المساعدة البحرية والصناعية",
    ],
    relatedProductSlugs: ["ups-systems", "voltage-stabilizers"],
    relatedBrandSlugs: ["schneider-electric", "eaton", "socomec"],
    catalogues: [
      {
        id: "battery-chargers-rectifiers-datasheet",
        title_en: "Battery Chargers & Rectifiers Datasheet",
        title_ar: "نشرة بيانات شواحن البطاريات والمقومات",
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
