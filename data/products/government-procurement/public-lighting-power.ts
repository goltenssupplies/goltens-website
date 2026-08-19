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
