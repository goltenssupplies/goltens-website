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
    specifications: [
      {
        label_en: "Panel type",
        label_ar: "نوع اللوحة",
        value: "Addressable / Conventional",
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
