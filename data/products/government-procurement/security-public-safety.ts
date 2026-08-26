import type { Product } from "@/data/products/types";

/** Government Procurement → Security & Public Safety category. */
export const governmentSecurityPublicSafety: Product[] = [
  {
    id: "cctv-surveillance-systems",
    slug: "cctv-surveillance-systems",
    name_en: "CCTV & Surveillance Systems",
    name_ar: "أنظمة الكاميرات والمراقبة",
    shortDescription_en:
      "CCTV cameras and video management systems for government facilities and public sites.",
    shortDescription_ar:
      "كاميرات مراقبة وأنظمة إدارة الفيديو للمنشآت الحكومية والمواقع العامة.",
    longDescription_en:
      "CCTV cameras, recorders, and video management systems for government buildings, public facilities, and municipal sites. We source systems matched to your coverage area and monitoring requirements.",
    longDescription_ar:
      "كاميرات مراقبة وأجهزة تسجيل وأنظمة إدارة فيديو للمباني الحكومية والمنشآت العامة والمواقع البلدية. نقوم بتوريد الأنظمة المطابقة لمساحة التغطية ومتطلبات المراقبة لديكم.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    features_en: [
      "Sized to your coverage area and camera-count requirement",
      "IR and low-light options for 24-hour monitoring",
      "Integrates with existing VMS platforms via ONVIF",
    ],
    features_ar: [
      "مقاسة وفق مساحة التغطية وعدد الكاميرات المطلوب لديكم",
      "خيارات أشعة تحت حمراء وإضاءة منخفضة للمراقبة على مدار الساعة",
      "قابلة للتكامل مع أنظمة إدارة الفيديو القائمة عبر معيار ONVIF",
    ],
    specifications: [
      {
        label_en: "Camera resolution",
        label_ar: "دقة الكاميرا",
        value: "2 MP – 8 MP (4K) depending on coverage and detail requirement",
        group_en: "Cameras",
        group_ar: "الكاميرات",
      },
      {
        label_en: "Lens type",
        label_ar: "نوع العدسة",
        value:
          "Fixed or motorized varifocal, with PTZ options for wide-area coverage",
        group_en: "Cameras",
        group_ar: "الكاميرات",
      },
      {
        label_en: "Low-light performance",
        label_ar: "أداء الإضاءة المنخفضة",
        value:
          "IR illumination range typically 30–100 m; color low-light sensors available",
        group_en: "Cameras",
        group_ar: "الكاميرات",
      },
      {
        label_en: "Ingress protection",
        label_ar: "درجة الحماية",
        value: "IP66/IP67 outdoor-rated housing",
        group_en: "Housing & Power",
        group_ar: "الغلاف والطاقة",
      },
      {
        label_en: "Power",
        label_ar: "مصدر الطاقة",
        value: "PoE (Power over Ethernet) or 12/24V DC",
        group_en: "Housing & Power",
        group_ar: "الغلاف والطاقة",
      },
      {
        label_en: "Storage",
        label_ar: "التخزين",
        value: "NVR/VMS storage sized to camera count and retention period",
        group_en: "Recording",
        group_ar: "التسجيل",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Cameras and NVRs typically ONVIF-compliant for interoperability with third-party VMS platforms",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Government building perimeter and entrance monitoring",
      "Public square and municipal open-space surveillance",
      "Traffic and intersection monitoring",
      "Court and public facility interior monitoring",
      "Critical infrastructure and utility site surveillance",
    ],
    applications_ar: [
      "مراقبة محيط ومداخل المباني الحكومية",
      "مراقبة الساحات العامة والمساحات المفتوحة البلدية",
      "مراقبة الحركة المرورية والتقاطعات",
      "المراقبة الداخلية للمحاكم والمنشآت العامة",
      "مراقبة مواقع البنية التحتية الحيوية والمرافق",
    ],
    relatedBrandSlugs: ["axis-communications", "bosch", "hikvision"],
    relatedProductSlugs: [
      "access-control-biometric-systems",
      "perimeter-security-fencing",
    ],
    catalogues: [
      {
        id: "cctv-surveillance-systems-datasheet",
        title_en: "CCTV & Surveillance Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة الكاميرات والمراقبة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/cctv-surveillance-systems.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "access-control-biometric-systems",
    slug: "access-control-biometric-systems",
    name_en: "Access Control & Biometric Systems",
    name_ar: "أنظمة التحكم في الدخول والبصمة الحيوية",
    shortDescription_en:
      "Card, PIN, and biometric access control systems for government buildings.",
    shortDescription_ar:
      "أنظمة تحكم في الدخول بالبطاقة والرقم السري والبصمة الحيوية للمباني الحكومية.",
    longDescription_en:
      "Access control systems — card readers, PIN keypads, and biometric terminals — for government buildings and restricted-access facilities. We source systems matched to your entry points and access-level requirements.",
    longDescription_ar:
      "أنظمة تحكم في الدخول — قارئات بطاقات ولوحات رقم سري وأجهزة بصمة حيوية — للمباني الحكومية والمنشآت ذات الدخول المقيد. نقوم بتوريد الأنظمة المطابقة لنقاط الدخول ومستويات الصلاحية لديكم.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    features_en: [
      "Sourced to match your entry points and access-level structure",
      "Card, PIN, and biometric options combinable for multi-factor access",
      "Scales from single-door to campus-wide deployments",
    ],
    features_ar: [
      "يتم توريدها بما يطابق نقاط الدخول وهيكل مستويات الصلاحية لديكم",
      "خيارات البطاقة والرقم السري والبصمة الحيوية قابلة للدمج للتحقق متعدد العوامل",
      "قابلة للتوسع من باب واحد إلى انتشار على مستوى الحرم الكامل",
    ],
    specifications: [
      {
        label_en: "Credential types",
        label_ar: "أنواع بيانات الاعتماد",
        value:
          "RFID/proximity card, PIN keypad, fingerprint, and facial recognition",
        group_en: "Readers & Credentials",
        group_ar: "القارئات وبيانات الاعتماد",
      },
      {
        label_en: "Reader protocol",
        label_ar: "بروتوكول القارئ",
        value: "Wiegand or OSDP (Open Supervised Device Protocol)",
        group_en: "Readers & Credentials",
        group_ar: "القارئات وبيانات الاعتماد",
      },
      {
        label_en: "Door controller capacity",
        label_ar: "سعة لوحة التحكم بالأبواب",
        value: "Typically 1–32 doors per panel, expandable",
        group_en: "Controller",
        group_ar: "وحدة التحكم",
      },
      {
        label_en: "User/credential capacity",
        label_ar: "سعة المستخدمين/بيانات الاعتماد",
        value:
          "Thousands to tens of thousands of credentials depending on platform",
        group_en: "Controller",
        group_ar: "وحدة التحكم",
      },
      {
        label_en: "Outdoor reader rating",
        label_ar: "تصنيف القارئ الخارجي",
        value: "IP65 for external-mounted readers",
        group_en: "Housing",
        group_ar: "الغلاف",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Reader-to-panel communication typically supports OSDP for secure, supervised connections",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Restricted-access government office floors and departments",
      "Server rooms and sensitive-document archive access",
      "Multi-tenant government building entry management",
      "Staff and visitor access control at ministry entrances",
    ],
    applications_ar: [
      "طوابق وأقسام المكاتب الحكومية ذات الدخول المقيد",
      "الوصول إلى غرف الخوادم وأرشيف الوثائق الحساسة",
      "إدارة الدخول للمباني الحكومية متعددة الجهات",
      "التحكم في دخول الموظفين والزوار عند مداخل الوزارات",
    ],
    relatedBrandSlugs: ["hid-global", "suprema"],
    relatedProductSlugs: ["cctv-surveillance-systems", "gate-barrier-systems"],
    catalogues: [
      {
        id: "access-control-biometric-systems-datasheet",
        title_en: "Access Control & Biometric Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة التحكم في الدخول والبصمة",
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
    id: "perimeter-security-fencing",
    slug: "perimeter-security-fencing",
    name_en: "Perimeter Security & Fencing",
    name_ar: "أسوار وأنظمة التأمين المحيطي",
    shortDescription_en:
      "Perimeter fencing and intrusion detection for government and public-sector sites.",
    shortDescription_ar:
      "أسوار محيطية وأنظمة كشف تسلل للمواقع الحكومية والقطاع العام.",
    longDescription_en:
      "Perimeter fencing and intrusion detection systems for government sites, utility installations, and public facilities. We source solutions matched to your site boundary and threat profile.",
    longDescription_ar:
      "أسوار محيطية وأنظمة كشف تسلل للمواقع الحكومية ومنشآت المرافق والمنشآت العامة. نقوم بتوريد الحلول المطابقة لحدود موقعكم ومستوى المخاطر المحتملة.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    features_en: [
      "Sourced to your site boundary length and threat profile",
      "Intrusion detection options integrate with CCTV and access control",
      "Anti-climb and high-security configurations available",
    ],
    features_ar: [
      "يتم توريدها وفق طول حدود موقعكم ومستوى المخاطر المحتملة",
      "خيارات كشف التسلل قابلة للتكامل مع أنظمة الكاميرات والتحكم في الدخول",
      "تكوينات مقاومة للتسلق وعالية الأمان متوفرة",
    ],
    specifications: [
      {
        label_en: "Fence height",
        label_ar: "ارتفاع السور",
        value: "1.8–3.0 m, depending on threat profile",
        group_en: "Fencing",
        group_ar: "السور",
      },
      {
        label_en: "Fence type",
        label_ar: "نوع السور",
        value: "Welded mesh, palisade, or anti-climb high-security fencing",
        group_en: "Fencing",
        group_ar: "السور",
      },
      {
        label_en: "Material",
        label_ar: "الخامة",
        value: "Galvanized and/or polyester-powder-coated steel",
        group_en: "Fencing",
        group_ar: "السور",
      },
      {
        label_en: "Detection technology",
        label_ar: "تقنية كشف التسلل",
        value:
          "Fence-mounted vibration/fiber-optic sensor cable, microwave beam, or taut-wire systems",
        group_en: "Intrusion Detection",
        group_ar: "كشف التسلل",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "High-security anti-climb fencing typically evaluated to ASTM F2781",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Government facility and compound perimeter boundaries",
      "Utility substation and water treatment site security",
      "Airport and critical infrastructure boundary protection",
      "Border and remote government installation perimeters",
    ],
    applications_ar: [
      "حدود محيط المنشآت والمجمعات الحكومية",
      "تأمين محطات المرافق الفرعية ومواقع معالجة المياه",
      "حماية حدود المطارات والبنية التحتية الحيوية",
      "محيط المواقع الحدودية والمنشآت الحكومية النائية",
    ],
    relatedBrandSlugs: ["betafence", "gallagher"],
    relatedProductSlugs: ["gate-barrier-systems", "cctv-surveillance-systems"],
    catalogues: [
      {
        id: "perimeter-security-fencing-datasheet",
        title_en: "Perimeter Security & Fencing Datasheet",
        title_ar: "نشرة بيانات أنظمة التأمين المحيطي",
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
    id: "gate-barrier-systems",
    slug: "gate-barrier-systems",
    name_en: "Gate & Barrier Systems",
    name_ar: "أنظمة البوابات والحواجز",
    shortDescription_en:
      "Automated gates and vehicle barriers for government and public facility entrances.",
    shortDescription_ar:
      "بوابات أوتوماتيكية وحواجز مركبات لمداخل المنشآت الحكومية والعامة.",
    longDescription_en:
      "Automated swing and sliding gates, boom barriers, and bollards for government facility and public site vehicle entrances. We source systems matched to your traffic volume and vehicle type.",
    longDescription_ar:
      "بوابات أوتوماتيكية منزلقة ومفصلية، وحواجز رافعة، وأعمدة تأمين لمداخل المركبات في المنشآت الحكومية والمواقع العامة. نقوم بتوريد الأنظمة المطابقة لحجم الحركة المرورية ونوع المركبات لديكم.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    features_en: [
      "Sized to your traffic volume and vehicle type requirement",
      "Integrates with access control and ANPR systems",
      "Crash-rated bollard options for high-security entrances",
    ],
    features_ar: [
      "مقاسة وفق حجم الحركة المرورية ونوع المركبات لديكم",
      "قابلة للتكامل مع أنظمة التحكم في الدخول وقراءة لوحات المركبات",
      "خيارات أعمدة تأمين مقاومة للاصطدام للمداخل عالية الأمان",
    ],
    specifications: [
      {
        label_en: "Gate types",
        label_ar: "أنواع البوابات",
        value: "Swing, sliding, and cantilever sliding gates",
        group_en: "Gates",
        group_ar: "البوابات",
      },
      {
        label_en: "Opening speed",
        label_ar: "سرعة الفتح",
        value: "Typically 0.2–0.5 m/s depending on gate weight and drive motor",
        group_en: "Gates",
        group_ar: "البوابات",
      },
      {
        label_en: "Boom barrier arm length",
        label_ar: "طول ذراع الحاجز الرافع",
        value: "3–6 m, with reflective/LED-lit arm options",
        group_en: "Barriers & Bollards",
        group_ar: "الحواجز وأعمدة التأمين",
      },
      {
        label_en: "Bollard crash rating",
        label_ar: "تصنيف مقاومة الاصطدام للأعمدة",
        value:
          "Vehicle-impact-rated bollards available to PAS 68 / IWA 14-1 ratings where specified",
        group_en: "Barriers & Bollards",
        group_ar: "الحواجز وأعمدة التأمين",
      },
      {
        label_en: "Access integration",
        label_ar: "التكامل مع أنظمة الدخول",
        value:
          "Interfaces with access control, ANPR, and remote-control systems",
        group_en: "Control",
        group_ar: "التحكم",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Hostile-vehicle-mitigation barriers and bollards typically crash-tested to PAS 68, IWA 14-1, or ASTM F2656",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Vehicle entry points at government facility perimeters",
      "Checkpoint and controlled-access site entrances",
      "Parking facility entry/exit management",
      "High-security site vehicle screening points",
    ],
    applications_ar: [
      "نقاط دخول المركبات عند محيط المنشآت الحكومية",
      "نقاط التفتيش ومداخل المواقع ذات الدخول المتحكم به",
      "إدارة دخول وخروج مرافق مواقف السيارات",
      "نقاط فحص المركبات في المواقع عالية الأمان",
    ],
    relatedBrandSlugs: ["faac", "came"],
    relatedProductSlugs: [
      "perimeter-security-fencing",
      "access-control-biometric-systems",
    ],
    catalogues: [
      {
        id: "gate-barrier-systems-datasheet",
        title_en: "Gate & Barrier Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة البوابات والحواجز",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/gate-barrier-systems.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "public-safety-response-equipment",
    slug: "public-safety-response-equipment",
    name_en: "Public Safety & Emergency Response Equipment",
    name_ar: "معدات السلامة العامة والاستجابة للطوارئ",
    shortDescription_en:
      "Equipment for public safety agencies and municipal emergency response teams.",
    shortDescription_ar:
      "معدات لجهات السلامة العامة وفرق الاستجابة للطوارئ البلدية.",
    longDescription_en:
      "Equipment for public safety agencies and municipal emergency response teams, sourced to the operational requirements of the department requesting it.",
    longDescription_ar:
      "معدات لجهات السلامة العامة وفرق الاستجابة للطوارئ البلدية، يتم توريدها وفق المتطلبات التشغيلية للإدارة الطالبة.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    features_en: [
      "Sourced to the operational requirement of the requesting department",
      "Communications, PPE, and field equipment sourced as one coordinated request",
      "Matched to your agency's applicable safety standard",
    ],
    features_ar: [
      "يتم توريدها وفق المتطلبات التشغيلية للإدارة الطالبة",
      "توريد معدات الاتصالات والحماية الشخصية والمعدات الميدانية كطلب واحد منسق",
      "مطابقة لمعيار السلامة المعمول به لدى جهتكم",
    ],
    specifications: [
      {
        label_en: "Portable radios",
        label_ar: "أجهزة اللاسلكي المحمولة",
        value:
          "VHF/UHF handheld and mobile radios, typically IP67-rated for field use",
        group_en: "Communications",
        group_ar: "الاتصالات",
      },
      {
        label_en: "High-visibility apparel",
        label_ar: "الملابس عالية الوضوح",
        value: "Typically compliant with ANSI/ISEA 107 or EN ISO 20471",
        group_en: "Personal Protective Equipment",
        group_ar: "معدات الحماية الشخصية",
      },
      {
        label_en: "Protective clothing",
        label_ar: "الملابس الواقية",
        value:
          "Flame-resistant and weatherproof options for field response teams",
        group_en: "Personal Protective Equipment",
        group_ar: "معدات الحماية الشخصية",
      },
      {
        label_en: "Rescue tools",
        label_ar: "أدوات الإنقاذ",
        value:
          "Hydraulic extrication and cutting tools for emergency response teams",
        group_en: "Field & Rescue Equipment",
        group_ar: "المعدات الميدانية ومعدات الإنقاذ",
      },
      {
        label_en: "Portable lighting",
        label_ar: "الإضاءة الميدانية المتنقلة",
        value: "Battery and generator-powered scene lighting towers",
        group_en: "Field & Rescue Equipment",
        group_ar: "المعدات الميدانية ومعدات الإنقاذ",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Protective apparel and rescue equipment sourced to match the relevant ANSI/ISEA, EN, or NFPA standard your agency specifies",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Municipal emergency response and civil defense teams",
      "Field operations for public works and utility crews",
      "Disaster response and search-and-rescue deployments",
      "Traffic police and public safety patrol equipment",
    ],
    applications_ar: [
      "فرق الاستجابة للطوارئ والدفاع المدني البلدية",
      "العمليات الميدانية لفرق الأشغال العامة والمرافق",
      "عمليات الاستجابة للكوارث والبحث والإنقاذ",
      "معدات شرطة المرور ودوريات السلامة العامة",
    ],
    relatedBrandSlugs: ["motorola-solutions", "holmatro", "3m"],
    relatedProductSlugs: ["cctv-surveillance-systems", "gate-barrier-systems"],
    catalogues: [
      {
        id: "public-safety-response-equipment-datasheet",
        title_en: "Public Safety & Emergency Response Equipment Datasheet",
        title_ar: "نشرة بيانات معدات السلامة العامة والاستجابة للطوارئ",
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
