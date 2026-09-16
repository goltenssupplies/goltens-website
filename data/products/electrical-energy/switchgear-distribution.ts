import type { Product } from "@/data/products/types";

/** Electrical & Energy Solutions → Switchgear & Distribution category. */
export const electricalSwitchgearDistribution: Product[] = [
  {
    id: "low-voltage-switchgear",
    slug: "low-voltage-switchgear",
    name_en: "Low Voltage Switchgear",
    name_ar: "لوحات التوزيع الكهربائية منخفضة الجهد",
    shortDescription_en:
      "LV switchgear and distribution panels for building and facility electrical systems.",
    shortDescription_ar:
      "لوحات توزيع كهربائية منخفضة الجهد للأنظمة الكهربائية بالمباني والمنشآت.",
    longDescription_en:
      "Low voltage switchgear and distribution panels for building and facility electrical systems. We source panels matched to your load schedule, breaker configuration, and enclosure rating.",
    longDescription_ar:
      "لوحات توزيع ولوحات تحكم كهربائية منخفضة الجهد للأنظمة الكهربائية بالمباني والمنشآت. نقوم بتوريد اللوحات المطابقة لجدول الأحمال وتكوين القواطع وتصنيف الهيكل لديكم.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    features_en: [
      "Modular, extendable panel construction",
      "Withdrawable or fixed circuit breaker options",
      "Form-segregated internal construction available on request",
    ],
    features_ar: [
      "تصميم لوحات معياري وقابل للتوسعة",
      "خيارات قواطع دائرة سحّابة (متحركة) أو ثابتة",
      "إمكانية توفير تصميم داخلي مقسّم (Form) عند الطلب",
    ],
    specifications: [
      {
        label_en: "Voltage class",
        label_ar: "فئة الجهد",
        value: "Up to 690V AC (low voltage)",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Rated current",
        label_ar: "التيار الاسمي",
        value: "100A – 6,300A",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Short-circuit withstand rating",
        label_ar: "تحمّل تيار القصر",
        value: "Up to approx. 100kA",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP30 – IP54",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Breaker compatibility",
        label_ar: "التوافق مع القواطع",
        value: "ACB, MCCB, and fused-switch options",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 61439-1/-2 for low-voltage switchgear and controlgear assemblies",
      },
    ],
    applications_en: [
      "Main LV distribution boards for commercial and industrial buildings",
      "Substation and plant room incoming/outgoing distribution",
      "Motor control center integration",
      "Data center and critical facility power distribution",
      "Utility and generator interconnection panels",
    ],
    applications_ar: [
      "لوحات التوزيع الرئيسية منخفضة الجهد للمباني التجارية والصناعية",
      "توزيع التيار الوارد والصادر في المحطات الفرعية وغرف المعدات",
      "دمج مراكز التحكم بالمحركات",
      "توزيع الطاقة لمراكز البيانات والمنشآت الحرجة",
      "لوحات ربط المرافق العامة والمولدات",
    ],
    relatedProductSlugs: [
      "medium-voltage-switchgear",
      "distribution-panel-boards",
    ],
    relatedBrandSlugs: ["schneider-electric", "abb", "siemens", "eaton"],
    catalogues: [
      {
        id: "low-voltage-switchgear-datasheet",
        title_en: "Low Voltage Switchgear Datasheet",
        title_ar: "نشرة بيانات لوحات التوزيع منخفضة الجهد",
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
    id: "medium-voltage-switchgear",
    slug: "medium-voltage-switchgear",
    name_en: "Medium Voltage Switchgear",
    name_ar: "لوحات التوزيع الكهربائية متوسطة الجهد",
    shortDescription_en:
      "Medium voltage switchgear (3.3kV–36kV) for primary distribution and substation applications.",
    shortDescription_ar:
      "لوحات توزيع كهربائية متوسطة الجهد (3.3–36 كيلوفولت) لتطبيقات التوزيع الرئيسي والمحطات الفرعية.",
    longDescription_en:
      "Medium voltage switchgear is the equipment that switches, protects, and isolates circuits operating in the 3.3kV–36kV range — the voltage band between utility-scale high voltage transmission and building-level low voltage distribution. It forms the backbone of primary distribution, substation, and industrial power feeder applications, directing incoming and outgoing power safely between transformers, generators, and downstream circuits. Two main configurations are available: air-insulated (AIS), which uses ambient air as the insulating medium and suits sites where space is not a primary constraint, and gas-insulated (GIS), which can use SF6 as the insulating medium depending on the specified design, for a more compact footprint in space-limited substations; switching itself is carried out via vacuum or SF6 circuit breakers, with a modular bay design that allows the assembly to be extended as a network grows. Reliable switching and protection at this voltage level is central to keeping a distribution network safe and available, isolating faults before they propagate and supporting planned maintenance and fault isolation with appropriate system design and operating procedures. We source medium voltage switchgear panels matched to your voltage class and fault-level requirement, typically specified/tested to IEC 62271-200 for AC metal-enclosed switchgear above 1kV.",
    longDescription_ar:
      "لوحات التوزيع الكهربائية متوسطة الجهد هي المعدات التي تتولى تحويل وحماية وعزل الدوائر العاملة ضمن نطاق 3.3 إلى 36 كيلوفولت — وهو نطاق الجهد الواقع بين جهد النقل العالي على مستوى المرافق العامة والتوزيع منخفض الجهد على مستوى المباني. وتشكّل هذه اللوحات العمود الفقري لتطبيقات التوزيع الرئيسي والمحطات الفرعية ومغذيات الطاقة الصناعية، حيث توجّه التيار الوارد والصادر بأمان بين المحولات والمولدات والدوائر التابعة لها. ويتوفر تكوينان رئيسيان: المعزول بالهواء (AIS)، الذي يستخدم الهواء المحيط كوسط عزل ويناسب المواقع التي لا تمثّل فيها المساحة قيدًا أساسيًا، والمعزول بالغاز (GIS)، وقد يستخدم غاز SF6 كوسط للعزل وفقًا للتصميم والمواصفات المطلوبة، لتوفير تصميم أكثر إحكامًا في المحطات ذات المساحة المحدودة؛ ويتم التحويل عبر قواطع دائرة فراغية (Vacuum) أو بغاز SF6، مع تصميم وحدات (Bays) معياري يتيح توسعة المنظومة مع نمو الشبكة. ويُعد التحويل والحماية الموثوقان عند هذا المستوى من الجهد أمرًا محوريًا للحفاظ على أمان وتوافر شبكة التوزيع، إذ يتيحان عزل الأعطال قبل انتشارها، وتدعم أعمال الصيانة المخططة وعزل الأعطال وفقًا لتصميم المنظومة وإجراءات التشغيل المعتمدة. ونقوم بتوريد لوحات التوزيع الكهربائية متوسطة الجهد المطابقة لفئة الجهد ومستوى العطل المطلوب لديكم، والتي عادةً ما تكون محددة/مختبرة وفق معيار IEC 62271-200 الخاص بمعدات التحويل المعدنية المغلقة للتيار المتردد فوق 1 كيلوفولت.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    features_en: [
      "Air-insulated (AIS) and gas-insulated (GIS) configuration options",
      "Vacuum or SF6 circuit breaker switching",
      "Extensible modular bay design",
    ],
    features_ar: [
      "خيارات تكوين معزول بالهواء (AIS) أو بالغاز (GIS)",
      "تحويل بقاطع فراغي (Vacuum) أو غاز SF6",
      "تصميم وحدات (Bays) معياري قابل للتوسعة",
    ],
    specifications: [
      {
        label_en: "Voltage class",
        label_ar: "فئة الجهد",
        value: "3.3kV – 36kV (medium voltage)",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Rated current",
        label_ar: "التيار الاسمي",
        value: "630A – 2,500A",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Short-circuit breaking capacity",
        label_ar: "قدرة قطع تيار القصر",
        value: "Up to approx. 31.5kA",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Insulation medium",
        label_ar: "وسط العزل",
        value: "Air-insulated or gas-insulated (SF6)",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP3X – IP4X",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 62271-200 for AC metal-enclosed switchgear above 1kV",
      },
    ],
    applications_en: [
      "Utility and industrial primary distribution substations",
      "Renewable energy plant grid interconnection",
      "Large industrial facility power feeders",
      "Mining and process plant electrical substations",
      "Commercial and district cooling plant incomers",
    ],
    applications_ar: [
      "محطات التوزيع الرئيسي للمرافق العامة والمنشآت الصناعية",
      "ربط محطات الطاقة المتجددة بالشبكة",
      "مغذيات الطاقة للمنشآت الصناعية الكبيرة",
      "المحطات الفرعية الكهربائية لمنشآت التعدين والعمليات",
      "قواطع التغذية الواردة للمنشآت التجارية ومحطات التبريد المركزي",
    ],
    relatedProductSlugs: ["low-voltage-switchgear", "ring-main-units"],
    relatedBrandSlugs: ["schneider-electric", "abb", "siemens", "eaton"],
    catalogues: [
      {
        id: "medium-voltage-switchgear-datasheet",
        title_en: "Medium Voltage Switchgear Datasheet",
        title_ar: "نشرة بيانات لوحات التوزيع متوسطة الجهد",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/electrical-energy/medium-voltage-switchgear.webp",
    ],
    seo: {
      title_en:
        "Medium Voltage Switchgear (3.3kV–36kV) for Substations & Primary Distribution",
      title_ar:
        "لوحات التوزيع الكهربائية متوسطة الجهد (3.3–36 كيلوفولت) للمحطات الفرعية والتوزيع الرئيسي",
      description_en:
        "Medium voltage switchgear (3.3kV–36kV) for substations, primary distribution, and industrial feeders — AIS or GIS, sourced to match your project's voltage class and fault-level requirement.",
      description_ar:
        "لوحات توزيع كهربائية متوسطة الجهد (3.3–36 كيلوفولت) للمحطات الفرعية والتوزيع الرئيسي ومغذيات الطاقة الصناعية — بتكوين AIS أو GIS، تُوَرَّد وفق فئة الجهد ومستوى العطل المطلوب لمشروعكم.",
      keywords: [
        "medium voltage switchgear",
        "MV switchgear supplier",
        "primary distribution switchgear",
        "substation switchgear",
        "AIS switchgear",
        "GIS switchgear",
      ],
    },
    faq: [
      {
        question_en: "What is medium voltage switchgear?",
        answer_en:
          "Medium voltage switchgear is equipment that switches, protects, and isolates electrical circuits in the medium voltage range (3.3kV–36kV) — controlling power flow safely at substations and primary distribution points before it steps down to low voltage for final use.",
        question_ar: "ما هي لوحات التوزيع الكهربائية متوسطة الجهد؟",
        answer_ar:
          "لوحات التوزيع الكهربائية متوسطة الجهد هي معدات تتولى تحويل وحماية وعزل الدوائر الكهربائية ضمن نطاق الجهد المتوسط (3.3–36 كيلوفولت) — وتتحكم في تدفق الطاقة بأمان عند المحطات الفرعية ونقاط التوزيع الرئيسي قبل خفضها إلى الجهد المنخفض للاستخدام النهائي.",
      },
      {
        question_en:
          "What is the difference between medium voltage and low voltage switchgear?",
        answer_en:
          "The key difference is the voltage range each is rated for. Our medium voltage switchgear covers 3.3kV–36kV for primary distribution and substation applications, while our low voltage switchgear covers up to 690V AC for building and facility-level distribution.",
        question_ar: "ما الفرق بين لوحات التوزيع متوسطة الجهد ومنخفضة الجهد؟",
        answer_ar:
          "الفرق الأساسي هو نطاق الجهد المصمم كل نوع للعمل ضمنه. تغطي لوحات التوزيع متوسطة الجهد لدينا نطاق 3.3 إلى 36 كيلوفولت لتطبيقات التوزيع الرئيسي والمحطات الفرعية، بينما تغطي لوحات التوزيع منخفضة الجهد لدينا حتى 690 فولت تيار متردد للتوزيع على مستوى المباني والمنشآت.",
      },
      {
        question_en: "What is the difference between AIS and GIS switchgear?",
        answer_en:
          "AIS (air-insulated switchgear) uses ambient air as the insulating medium and is a common choice where space is not the primary constraint. GIS (gas-insulated switchgear) uses a gas insulating medium and may use SF6 depending on the specified design, allowing a more compact footprint — useful in space-limited substations. Both configurations are available for this product; the right fit depends on your site's space and layout requirements.",
        question_ar: "ما الفرق بين لوحات AIS وGIS؟",
        answer_ar:
          "يستخدم النوع المعزول بالهواء (AIS) الهواء المحيط كوسط عزل، ويُعد خيارًا شائعًا حيث لا تمثّل المساحة القيد الأساسي. أما لوحات GIS (المعزولة بالغاز) فتستخدم وسط عزل غازي، وقد تستخدم غاز SF6 وفقًا للتصميم والمواصفات المطلوبة، مما يتيح تصميمًا أكثر إحكامًا — وهو مفيد في المحطات ذات المساحة المحدودة. كلا التكوينين متاح لهذا المنتج؛ ويعتمد اختيار الأنسب لمشروعكم على مساحة الموقع ومتطلبات التخطيط لديكم.",
      },
      {
        question_en: "Where is medium voltage switchgear used?",
        answer_en:
          "Typical applications include utility and industrial primary distribution substations, renewable energy plant grid interconnection, large industrial facility power feeders, mining and process plant electrical substations, and commercial or district cooling plant incomers.",
        question_ar: "أين تُستخدم لوحات التوزيع متوسطة الجهد؟",
        answer_ar:
          "من التطبيقات النموذجية: محطات التوزيع الرئيسي للمرافق العامة والمنشآت الصناعية، وربط محطات الطاقة المتجددة بالشبكة، ومغذيات الطاقة للمنشآت الصناعية الكبيرة، والمحطات الفرعية الكهربائية لمنشآت التعدين والعمليات، وقواطع التغذية الواردة للمنشآت التجارية ومحطات التبريد المركزي.",
      },
      {
        question_en:
          "Can medium voltage switchgear be specified according to project requirements?",
        answer_en:
          "Yes. As a sourcing partner rather than a manufacturer, we match panels to your specific voltage class and fault-level requirement, in either AIS or GIS configuration, based on the details you provide for your project.",
        question_ar:
          "هل يمكن تخصيص لوحات التوزيع متوسطة الجهد وفق متطلبات المشروع؟",
        answer_ar:
          "نعم. بصفتنا شريك توريد وليس جهة تصنيع، نقوم بمطابقة اللوحات مع فئة الجهد ومستوى العطل المطلوبين لمشروعكم تحديدًا، بتكوين AIS أو GIS، بناءً على التفاصيل التي تزوّدوننا بها.",
      },
      {
        question_en:
          "What standard is typically associated with this type of switchgear?",
        answer_en:
          "This category is typically specified/tested to IEC 62271-200, the standard covering AC metal-enclosed switchgear and controlgear for rated voltages above 1kV.",
        question_ar: "ما المعيار المرتبط عادةً بهذا النوع من لوحات التوزيع؟",
        answer_ar:
          "تُحدَّد/تُختبر هذه الفئة عادةً وفق معيار IEC 62271-200، وهو المعيار الخاص بمعدات التحويل والتحكم المعدنية المغلقة للتيار المتردد للجهد الاسمي فوق 1 كيلوفولت.",
      },
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "distribution-panel-boards",
    slug: "distribution-panel-boards",
    name_en: "Distribution Boards & Panel Boards",
    name_ar: "لوحات وصناديق التوزيع",
    shortDescription_en:
      "Distribution boards for final circuit protection and load distribution.",
    shortDescription_ar: "لوحات توزيع لحماية الدوائر النهائية وتوزيع الأحمال.",
    longDescription_en:
      "Distribution boards and panel boards for final circuit protection and load distribution across building floors and zones. We source boards matched to your circuit count and breaker type.",
    longDescription_ar:
      "لوحات توزيع وصناديق توزيع لحماية الدوائر النهائية وتوزيع الأحمال عبر طوابق ومناطق المبنى. نقوم بتوريد اللوحات المطابقة لعدد الدوائر ونوع القواطع لديكم.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    features_en: [
      "Single-phase and three-phase configurations",
      "Compatible with MCB, MCCB, RCD, and RCBO protection devices",
      "Surface or flush mounting options",
    ],
    features_ar: [
      "تكوينات أحادية وثلاثية الطور",
      "متوافقة مع قواطع MCB وMCCB وأجهزة الحماية RCD وRCBO",
      "خيارات تركيب سطحي أو مدفون بالحائط",
    ],
    specifications: [
      {
        label_en: "Voltage",
        label_ar: "الجهد",
        value: "230V / 400V, single- and three-phase",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Incoming current rating",
        label_ar: "تصنيف تيار التغذية الواردة",
        value: "63A – 800A",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Pole configuration",
        label_ar: "تكوين الأقطاب",
        value: "1P, 2P, 3P, and 4P outgoing ways",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP31 – IP65",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Breaker compatibility",
        label_ar: "التوافق مع القواطع",
        value: "MCB, MCCB, RCD, and RCBO",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 61439-3 for distribution boards intended for operation by ordinary persons",
      },
    ],
    applications_en: [
      "Floor-by-floor distribution in commercial and residential buildings",
      "Final circuit protection in industrial facilities",
      "Retail and hospitality electrical rooms",
      "Sub-distribution for HVAC and lighting circuits",
      "Landlord and tenant metering distribution",
    ],
    applications_ar: [
      "التوزيع الكهربائي لكل طابق في المباني التجارية والسكنية",
      "حماية الدوائر النهائية في المنشآت الصناعية",
      "غرف الكهرباء في المنشآت التجارية والفندقية",
      "التوزيع الفرعي لدوائر التكييف والإنارة",
      "توزيع العدادات بين المالك والمستأجرين",
    ],
    relatedProductSlugs: ["low-voltage-switchgear", "busbar-trunking-systems"],
    relatedBrandSlugs: ["schneider-electric", "legrand", "abb", "eaton"],
    catalogues: [
      {
        id: "distribution-panel-boards-datasheet",
        title_en: "Distribution Boards Datasheet",
        title_ar: "نشرة بيانات لوحات وصناديق التوزيع",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/electrical-energy/distribution-panel-boards.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ring-main-units",
    slug: "ring-main-units",
    name_en: "Ring Main Units (RMU)",
    name_ar: "وحدات الحلقة الرئيسية (RMU)",
    shortDescription_en:
      "Ring main units for medium voltage ring distribution networks.",
    shortDescription_ar:
      "وحدات حلقة رئيسية لشبكات التوزيع الحلقية متوسطة الجهد.",
    longDescription_en:
      "Ring main units for medium voltage ring distribution networks, providing switching and protection at each distribution point. We source units matched to your network's voltage class and switching configuration.",
    longDescription_ar:
      "وحدات حلقة رئيسية لشبكات التوزيع الحلقية متوسطة الجهد، توفر التحويل والحماية عند كل نقطة توزيع. نقوم بتوريد الوحدات المطابقة لفئة جهد شبكتكم وتكوين التحويل المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    features_en: [
      "Compact footprint for space-constrained substations",
      "Load-break switch and circuit-breaker feeder combinations",
      "Extensible with additional switch modules",
    ],
    features_ar: [
      "تصميم مدمج يناسب المحطات ذات المساحة المحدودة",
      "توليفات من مفاتيح قطع الحمل ووحدات القاطع للمغذيات",
      "قابلة للتوسعة بإضافة وحدات تحويل إضافية",
    ],
    specifications: [
      {
        label_en: "Voltage class",
        label_ar: "فئة الجهد",
        value: "11kV – 36kV",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Rated current",
        label_ar: "التيار الاسمي",
        value: "630A",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Switching device",
        label_ar: "جهاز التحويل",
        value:
          "Load-break switches with fused or circuit-breaker feeder module",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Insulation medium",
        label_ar: "وسط العزل",
        value: "SF6, solid, or air-insulated",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP54 indoor / IP34 outdoor",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 62271-200 for AC metal-enclosed switchgear above 1kV",
      },
    ],
    applications_en: [
      "Urban and utility ring distribution networks",
      "Substations feeding multiple radial or loop circuits",
      "Industrial park and commercial complex loop feeders",
      "Renewable energy collector network switching",
      "Underground cable network sectioning points",
    ],
    applications_ar: [
      "شبكات التوزيع الحلقية الحضرية والخاصة بالمرافق العامة",
      "المحطات الفرعية المغذية لدوائر إشعاعية أو حلقية متعددة",
      "مغذيات الدوائر الحلقية للمجمعات الصناعية والتجارية",
      "تحويل شبكات تجميع الطاقة المتجددة",
      "نقاط فصل شبكات الكابلات الأرضية",
    ],
    relatedProductSlugs: [
      "medium-voltage-switchgear",
      "busbar-trunking-systems",
    ],
    relatedBrandSlugs: ["schneider-electric", "abb", "siemens"],
    catalogues: [
      {
        id: "ring-main-units-datasheet",
        title_en: "Ring Main Units Datasheet",
        title_ar: "نشرة بيانات وحدات الحلقة الرئيسية",
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
    id: "busbar-trunking-systems",
    slug: "busbar-trunking-systems",
    name_en: "Busbar Trunking Systems",
    name_ar: "أنظمة القضبان الناقلة (Busbar)",
    shortDescription_en:
      "Busbar trunking for high-current power distribution across large facilities.",
    shortDescription_ar:
      "أنظمة قضبان ناقلة لتوزيع الطاقة عالية التيار عبر المنشآت الكبيرة.",
    longDescription_en:
      "Busbar trunking systems for high-current power distribution across large industrial and commercial facilities, offering a flexible alternative to cable runs. We source systems matched to your current rating and tap-off requirement.",
    longDescription_ar:
      "أنظمة قضبان ناقلة لتوزيع الطاقة عالية التيار عبر المنشآت الصناعية والتجارية الكبيرة، وتوفر بديلاً مرنًا لمسارات الكابلات. نقوم بتوريد الأنظمة المطابقة لتصنيف التيار ومتطلبات نقاط التفريع لديكم.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    features_en: [
      "Tap-off points at regular intervals along the run",
      "Copper or aluminum conductor options",
      "Compact sandwich busbar construction reduces installation time versus cable",
    ],
    features_ar: [
      "نقاط تفريع على فواصل منتظمة على طول المسار",
      "خيارات موصلات نحاسية أو ألومنيوم",
      "تصميم قضبان مدمج (Sandwich) يقلل زمن التركيب مقارنة بالكابلات",
    ],
    specifications: [
      {
        label_en: "Current rating",
        label_ar: "تصنيف التيار",
        value: "100A – 6,300A",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Rated voltage",
        label_ar: "الجهد الاسمي",
        value: "Up to 1,000V AC",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Conductor material",
        label_ar: "خامة الموصل",
        value: "Copper or aluminum",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP54 – IP66",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 61439-6 for busbar trunking systems",
      },
    ],
    applications_en: [
      "Vertical power risers in high-rise buildings",
      "Data center power distribution",
      "Overhead distribution in industrial and warehouse facilities",
      "Large retail and logistics facility power runs",
      "Generator and switchgear interconnection",
    ],
    applications_ar: [
      "الأعمدة الصاعدة لتوزيع الطاقة في المباني الشاهقة",
      "توزيع الطاقة في مراكز البيانات",
      "التوزيع العلوي في المنشآت الصناعية والمستودعات",
      "مسارات الطاقة للمنشآت التجارية واللوجستية الكبيرة",
      "الربط بين المولدات ولوحات التوزيع",
    ],
    relatedProductSlugs: ["distribution-panel-boards", "ring-main-units"],
    relatedBrandSlugs: ["schneider-electric", "legrand", "eaton", "siemens"],
    catalogues: [
      {
        id: "busbar-trunking-systems-datasheet",
        title_en: "Busbar Trunking Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة القضبان الناقلة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/electrical-energy/busbar-trunking-systems.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
