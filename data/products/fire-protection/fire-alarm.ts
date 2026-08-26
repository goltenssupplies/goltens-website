import type { Product } from "@/data/products/types";

/** Fire Protection → Fire Alarm category. */
export const fireProtectionFireAlarm: Product[] = [
  {
    id: "fire-alarm-systems",
    slug: "fire-alarm-systems",
    name_en: "Fire Alarm Systems",
    name_ar: "أنظمة إنذار الحريق",
    shortDescription_en:
      "Detection and alarm systems for early warning across your facility.",
    shortDescription_ar:
      "أنظمة كشف وإنذار للتحذير المبكر في جميع أنحاء منشأتكم.",
    longDescription_en:
      "A fire alarm system ties detectors, panels, and notification devices together into one early-warning network across your facility. We source addressable and conventional systems, integrated with building management systems where required.",
    longDescription_ar:
      "يربط نظام إنذار الحريق أجهزة الكشف واللوحات وأجهزة الإبلاغ في شبكة واحدة للتحذير المبكر عبر منشأتكم. نقوم بتوريد أنظمة قابلة للعنونة وتقليدية، ومتكاملة مع أنظمة إدارة المباني عند الحاجة.",
    sectorId: "fire-protection",
    categoryId: "fire-alarm",
    features_en: [
      "Addressable and conventional panel options",
      "Smoke, heat, and multi-sensor detectors",
      "Integrates with building management systems",
    ],
    features_ar: [
      "خيارات لوحات قابلة للعنونة وتقليدية",
      "كاشفات دخان وحرارة ومتعددة الاستشعار",
      "تتكامل مع أنظمة إدارة المباني",
    ],
    applications_en: [
      "Early-warning fire detection across occupied buildings",
      "Integration with sprinkler flow and tamper monitoring",
      "Triggering suppression system release on confirmed alarm",
      "Interfacing with building management and access control systems",
      "Life-safety notification and evacuation signaling",
    ],
    applications_ar: [
      "الكشف المبكر عن الحريق في المباني المأهولة",
      "التكامل مع مراقبة تدفق وعبث صمامات الرش التلقائي",
      "تشغيل أنظمة الإخماد عند تأكيد الإنذار",
      "الربط مع أنظمة إدارة المباني والتحكم بالدخول",
      "الإبلاغ عن حالات السلامة وتوجيه الإخلاء",
    ],
    specifications: [
      {
        group_en: "Capacity",
        group_ar: "السعة",
        label_en: "Zone/loop capacity",
        label_ar: "سعة المناطق/الحلقات",
        value:
          "Typically 1–2 loops (addressable) up to 20+ zones (conventional), scaled to building size",
      },
      {
        group_en: "Capacity",
        group_ar: "السعة",
        label_en: "Device capacity per loop",
        label_ar: "سعة الأجهزة لكل حلقة",
        value:
          "Up to approximately 250 addressable devices per loop, manufacturer-dependent",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Panel type",
        label_ar: "نوع اللوحة",
        value: "Addressable / Conventional",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Integration",
        label_ar: "التكامل",
        value:
          "Relay/interface modules for BMS, sprinkler flow switches, and suppression release",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically designed and tested to NFPA 72 / EN 54",
      },
    ],
    relatedProductSlugs: [
      "addressable-panels",
      "conventional-panels",
      "smoke-detectors",
    ],
    relatedBrandSlugs: ["honeywell", "notifier", "simplex", "morley"],
    catalogues: [
      {
        id: "fire-alarm-systems-datasheet",
        title_en: "Fire Alarm Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة إنذار الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-alarm-systems.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "smoke-detectors",
    slug: "smoke-detectors",
    name_en: "Smoke Detectors",
    name_ar: "كاشفات الدخان",
    shortDescription_en:
      "Smoke detectors for early fire detection across occupied and plant spaces.",
    shortDescription_ar:
      "كاشفات دخان للكشف المبكر عن الحريق في المساحات المأهولة ومناطق المعدات.",
    longDescription_en:
      "Smoke detectors sense combustion particles before visible flame or significant heat develops, giving the earliest practical warning in most occupied spaces. We source types matched to your panel's compatibility requirements.",
    longDescription_ar:
      "تستشعر كاشفات الدخان جزيئات الاحتراق قبل ظهور اللهب المرئي أو ارتفاع الحرارة بشكل كبير، مما يوفر أبكر تحذير عملي في معظم المساحات المأهولة. نقوم بتوريد الأنواع المطابقة لمتطلبات توافق لوحتكم.",
    sectorId: "fire-protection",
    categoryId: "fire-alarm",
    features_en: [
      "Photoelectric and ionization sensing types available",
      "Compatible with addressable and conventional panels",
      "Low-profile ceiling and duct-mount versions",
    ],
    features_ar: [
      "أنواع استشعار ضوئية وتأينية متاحة",
      "متوافقة مع اللوحات القابلة للعنونة والتقليدية",
      "إصدارات منخفضة الارتفاع للتركيب على السقف والمجاري الهوائية",
    ],
    applications_en: [
      "Offices, corridors, and occupied living spaces",
      "Hotel guest rooms and hospital patient areas",
      "HVAC duct smoke sampling",
      "Retail and commercial floor areas",
    ],
    applications_ar: [
      "المكاتب والممرات والمساحات السكنية المأهولة",
      "غرف نزلاء الفنادق ومناطق مرضى المستشفيات",
      "أخذ عينات الدخان من مجاري تكييف الهواء",
      "مساحات المحلات التجارية والطوابق التجارية",
    ],
    specifications: [
      {
        group_en: "Sensing",
        group_ar: "الاستشعار",
        label_en: "Detection principle",
        label_ar: "مبدأ الكشف",
        value: "Photoelectric (light-scattering) or ionization",
      },
      {
        group_en: "Sensing",
        group_ar: "الاستشعار",
        label_en: "Coverage area",
        label_ar: "مساحة التغطية",
        value: "Typically up to 80–100 m² per detector, per spacing rules",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Mounting",
        label_ar: "التركيب",
        value: "Ceiling-mounted or duct-mount (for HVAC air sampling)",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically listed to UL 268 / EN 54-7",
      },
    ],
    relatedProductSlugs: [
      "fire-alarm-systems",
      "heat-detectors",
      "addressable-panels",
    ],
    relatedBrandSlugs: ["honeywell", "notifier"],
    catalogues: [
      {
        id: "smoke-detectors-datasheet",
        title_en: "Smoke Detectors Datasheet",
        title_ar: "نشرة بيانات كاشفات الدخان",
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
    id: "heat-detectors",
    slug: "heat-detectors",
    name_en: "Heat Detectors",
    name_ar: "كاشفات الحرارة",
    shortDescription_en:
      "Fixed and rate-of-rise heat detectors for areas unsuited to smoke detection.",
    shortDescription_ar:
      "كاشفات حرارة ثابتة ومعدل ارتفاع للمناطق غير المناسبة لكشف الدخان.",
    longDescription_en:
      "Heat detectors respond to fixed temperature thresholds or a rapid rate of temperature rise, making them suitable for kitchens, plant rooms, and other spaces prone to smoke or steam that would trigger false alarms on a smoke detector.",
    longDescription_ar:
      "تستجيب كاشفات الحرارة لعتبة حرارة ثابتة أو لمعدل ارتفاع سريع في الحرارة، مما يجعلها مناسبة للمطابخ وغرف المعدات والمساحات الأخرى المعرضة للدخان أو البخار التي قد تُصدر إنذارات كاذبة عند استخدام كاشف دخان.",
    sectorId: "fire-protection",
    categoryId: "fire-alarm",
    features_en: [
      "Fixed-temperature and rate-of-rise sensing options",
      "Resistant to false alarms from smoke, steam, or dust",
      "Compatible with addressable and conventional panels",
    ],
    features_ar: [
      "خيارات استشعار بدرجة حرارة ثابتة أو بمعدل الارتفاع",
      "مقاومة للإنذارات الكاذبة الناتجة عن الدخان أو البخار أو الغبار",
      "متوافقة مع اللوحات القابلة للعنونة والتقليدية",
    ],
    applications_en: [
      "Kitchens and commercial catering areas",
      "Plant rooms, boiler rooms, and workshops",
      "Car parks and loading bays",
      "Areas prone to steam, dust, or fumes unsuited to smoke detection",
    ],
    applications_ar: [
      "المطابخ ومناطق التموين التجاري",
      "غرف المعدات والغلايات وورش العمل",
      "مواقف السيارات ومناطق التحميل",
      "المناطق المعرضة للبخار أو الغبار أو الأبخرة غير المناسبة لكشف الدخان",
    ],
    specifications: [
      {
        group_en: "Sensing",
        group_ar: "الاستشعار",
        label_en: "Detection type",
        label_ar: "نوع الكشف",
        value: "Fixed temperature (typically 57–90°C) or rate-of-rise",
      },
      {
        group_en: "Sensing",
        group_ar: "الاستشعار",
        label_en: "Coverage area",
        label_ar: "مساحة التغطية",
        value: "Typically up to 50–75 m² per detector, per spacing rules",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically listed to UL 521 / EN 54-5",
      },
    ],
    relatedProductSlugs: [
      "fire-alarm-systems",
      "smoke-detectors",
      "beam-detectors",
    ],
    relatedBrandSlugs: ["honeywell", "notifier"],
    catalogues: [
      {
        id: "heat-detectors-datasheet",
        title_en: "Heat Detectors Datasheet",
        title_ar: "نشرة بيانات كاشفات الحرارة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/heat-detectors.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "beam-detectors",
    slug: "beam-detectors",
    name_en: "Beam Detectors",
    name_ar: "كاشفات الشعاع (بيم)",
    shortDescription_en:
      "Projected-beam smoke detectors for large, open, or high-ceiling spaces.",
    shortDescription_ar:
      "كاشفات دخان بشعاع موجه للمساحات الكبيرة والمفتوحة وعالية السقف.",
    longDescription_en:
      "Beam detectors project an infrared beam across a large open area and detect smoke by the beam's attenuation, covering warehouses, atriums, and high-ceiling halls that would need many point detectors otherwise.",
    longDescription_ar:
      "تقوم كاشفات الشعاع بإسقاط شعاع بالأشعة تحت الحمراء عبر مساحة مفتوحة كبيرة وتكتشف الدخان من خلال تخامد الشعاع، مما يغطي المستودعات والأتريوم والقاعات عالية السقف التي قد تحتاج إلى عدد كبير من الكاشفات النقطية بدلاً من ذلك.",
    sectorId: "fire-protection",
    categoryId: "fire-alarm",
    features_en: [
      "Covers large open areas with a single detector pair",
      "Reflective (single-ended) or transmitter/receiver (dual-ended) types",
      "Adjustable sensitivity for high-ceiling or dusty environments",
    ],
    features_ar: [
      "يغطي مساحات مفتوحة كبيرة بزوج كاشف واحد",
      "أنواع عاكسة (طرف واحد) أو إرسال/استقبال (طرفين)",
      "حساسية قابلة للتعديل للبيئات عالية السقف أو المغبرة",
    ],
    applications_en: [
      "Warehouses and distribution centers",
      "Atriums and high-ceiling lobbies",
      "Sports halls and exhibition centers",
      "Heritage buildings where point detectors are impractical",
    ],
    applications_ar: [
      "المستودعات ومراكز التوزيع",
      "الأتريوم والردهات عالية السقف",
      "الصالات الرياضية ومراكز المعارض",
      "المباني التراثية التي يصعب فيها تركيب الكاشفات النقطية",
    ],
    specifications: [
      {
        group_en: "Coverage",
        group_ar: "التغطية",
        label_en: "Beam range",
        label_ar: "نطاق الشعاع",
        value: "Typically 5 – 100 m between transmitter and receiver/reflector",
      },
      {
        group_en: "Coverage",
        group_ar: "التغطية",
        label_en: "Coverage width",
        label_ar: "عرض التغطية",
        value: "Up to approximately 15 m per beam, per spacing rules",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically listed to UL 268 / EN 54-12",
      },
    ],
    relatedProductSlugs: ["fire-alarm-systems", "smoke-detectors"],
    relatedBrandSlugs: ["notifier", "honeywell"],
    catalogues: [
      {
        id: "beam-detectors-datasheet",
        title_en: "Beam Detectors Datasheet",
        title_ar: "نشرة بيانات كاشفات الشعاع",
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
    id: "addressable-panels",
    slug: "addressable-panels",
    name_en: "Addressable Panels",
    name_ar: "لوحات قابلة للعنونة",
    shortDescription_en:
      "Addressable fire alarm control panels for precise device-level identification.",
    shortDescription_ar:
      "لوحات تحكم إنذار حريق قابلة للعنونة لتحديد دقيق على مستوى كل جهاز.",
    longDescription_en:
      "Addressable panels identify exactly which device on the loop triggered an alarm, speeding up response in larger buildings with many detectors. We source panels matched to your project's zone and device count.",
    longDescription_ar:
      "تحدد اللوحات القابلة للعنونة بدقة أي جهاز على الحلقة قام بتشغيل الإنذار، مما يسرّع الاستجابة في المباني الكبيرة ذات الكاشفات الكثيرة. نقوم بتوريد لوحات مطابقة لعدد المناطق والأجهزة في مشروعكم.",
    sectorId: "fire-protection",
    categoryId: "fire-alarm",
    features_en: [
      "Identifies the exact device that triggered an alarm",
      "Loop-based wiring reduces cable runs versus zoned wiring",
      "Expandable loop and zone capacity for phased projects",
    ],
    features_ar: [
      "يحدد الجهاز الدقيق الذي أصدر الإنذار",
      "توصيل حلقي يقلل مسارات الكابلات مقارنة بالتوصيل بالمناطق",
      "سعة حلقات ومناطق قابلة للتوسع للمشاريع المرحلية",
    ],
    applications_en: [
      "Large buildings with many detection points",
      "Multi-building campuses requiring networked panels",
      "Projects requiring precise alarm location reporting",
      "Facilities integrating fire alarm with BMS/access control",
    ],
    applications_ar: [
      "المباني الكبيرة ذات نقاط الكشف الكثيرة",
      "الحرم الجامعي متعدد المباني التي تتطلب لوحات مترابطة عبر الشبكة",
      "المشاريع التي تتطلب تحديدًا دقيقًا لموقع الإنذار",
      "المنشآت التي تدمج إنذار الحريق مع أنظمة إدارة المباني والتحكم بالدخول",
    ],
    specifications: [
      {
        group_en: "Capacity",
        group_ar: "السعة",
        label_en: "Loop capacity",
        label_ar: "سعة الحلقات",
        value:
          "Typically 1–4 loops per panel, up to ~250 addressable devices per loop",
      },
      {
        group_en: "Capacity",
        group_ar: "السعة",
        label_en: "Zone/panel networking",
        label_ar: "ربط اللوحات",
        value:
          "Networkable across multiple buildings via repeater/network cards",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically listed to UL 864 / EN 54-2",
      },
    ],
    relatedProductSlugs: [
      "fire-alarm-systems",
      "conventional-panels",
      "smoke-detectors",
    ],
    relatedBrandSlugs: ["notifier", "simplex", "morley"],
    catalogues: [
      {
        id: "addressable-panels-datasheet",
        title_en: "Addressable Panels Datasheet",
        title_ar: "نشرة بيانات اللوحات القابلة للعنونة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/addressable-panels.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "conventional-panels",
    slug: "conventional-panels",
    name_en: "Conventional Panels",
    name_ar: "لوحات تقليدية",
    shortDescription_en:
      "Conventional fire alarm control panels for zone-based detection.",
    shortDescription_ar:
      "لوحات تحكم إنذار حريق تقليدية للكشف المعتمد على المناطق.",
    longDescription_en:
      "Conventional panels group detectors into wired zones and report which zone triggered an alarm — a straightforward, cost-effective fit for smaller buildings with fewer detection points.",
    longDescription_ar:
      "تجمّع اللوحات التقليدية الكاشفات في مناطق سلكية وتُبلغ عن المنطقة التي أصدرت الإنذار — وهو حل مباشر واقتصادي مناسب للمباني الأصغر ذات نقاط الكشف الأقل.",
    sectorId: "fire-protection",
    categoryId: "fire-alarm",
    features_en: [
      "Straightforward zone-wired configuration",
      "Cost-effective fit for smaller buildings",
      "Simple to commission and maintain",
    ],
    features_ar: [
      "تكوين مباشر بالتوصيل السلكي بالمناطق",
      "حل اقتصادي مناسب للمباني الصغيرة",
      "سهل التشغيل والصيانة",
    ],
    applications_en: [
      "Small to mid-size commercial buildings",
      "Retail units and standalone facilities",
      "Projects where zone-level (not device-level) reporting is sufficient",
      "Budget-conscious fit-outs and retrofits",
    ],
    applications_ar: [
      "المباني التجارية الصغيرة والمتوسطة",
      "الوحدات التجارية والمنشآت المستقلة",
      "المشاريع التي يكفي فيها الإبلاغ على مستوى المنطقة وليس الجهاز",
      "أعمال التجهيز والتحديث ذات الميزانية المحدودة",
    ],
    specifications: [
      {
        group_en: "Capacity",
        group_ar: "السعة",
        label_en: "Zone capacity",
        label_ar: "سعة المناطق",
        value: "Typically 2 – 20 zones per panel",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Wiring",
        label_ar: "التوصيل",
        value: "Hardwired zone circuits, one per detection area",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically listed to UL 864 / EN 54-2",
      },
    ],
    relatedProductSlugs: ["fire-alarm-systems", "addressable-panels"],
    relatedBrandSlugs: ["notifier", "morley"],
    catalogues: [
      {
        id: "conventional-panels-datasheet",
        title_en: "Conventional Panels Datasheet",
        title_ar: "نشرة بيانات اللوحات التقليدية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/conventional-panels.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
