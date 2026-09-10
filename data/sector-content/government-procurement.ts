import type { SectorContent } from "@/data/sector-content/types";

/**
 * Government Procurement's real content — written to the same standard as
 * `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated lead times.
 */
export const governmentProcurementContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies government entities, authorities, and public institutions across a broad procurement scope: office and institutional furniture, IT and communications equipment, security and surveillance systems, public lighting and power, waste and sanitation equipment, municipal fleet vehicles, and specialized institutional equipment. Every request is matched against the tender specification and required documentation, with technical alternatives proposed where useful, before a quotation is prepared.",
    intro_ar:
      "توفر GOLTENS للجهات والهيئات والمؤسسات الحكومية نطاق توريد واسع يشمل: الأثاث المكتبي والمؤسسي، ومعدات تقنية المعلومات والاتصالات، وأنظمة الأمن والمراقبة، وإنارة الطرق العامة وأنظمة الطاقة، ومعدات النفايات والصرف الصحي، ومركبات الأسطول البلدي، والمعدات المؤسسية المتخصصة. يتم مطابقة كل طلب مع مواصفات المناقصة والوثائق المطلوبة، مع اقتراح بدائل فنية عند الحاجة، قبل تجهيز عرض السعر.",
    categories_en: [
      "Office & Institutional Furniture",
      "IT & Communications",
      "Security & Public Safety",
      "Public Lighting & Power",
      "Waste & Sanitation",
      "Fleet & Municipal Vehicles",
      "Emergency & Disaster Response",
      "Education & Training",
    ],
    categories_ar: [
      "أثاث مكتبي ومؤسسي",
      "تقنية المعلومات والاتصالات",
      "الأمن والسلامة العامة",
      "الإنارة العامة والطاقة",
      "النفايات والصرف الصحي",
      "الأسطول والمركبات البلدية",
      "الاستجابة للطوارئ والكوارث",
      "التعليم والتدريب",
    ],
    complianceNote_en:
      "Products are sourced to meet public procurement specifications and tender documentation requirements — we confirm the exact standards and certifications your tender requires as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المنتجات بما يتوافق مع مواصفات المشتريات الحكومية ومتطلبات وثائق المناقصات — ونؤكد المعايير والاعتمادات المطلوبة تحديدًا في مناقصتكم كجزء من عملية إعداد عرض السعر.",
  },

  applications: [
    {
      title_en: "Government Ministries & Administrative Buildings",
      title_ar: "الوزارات والمباني الإدارية الحكومية",
      icon: "Landmark",
    },
    {
      title_en: "Municipalities & Local Councils",
      title_ar: "البلديات والمجالس المحلية",
      icon: "Building2",
    },
    {
      title_en: "Public Safety & Law Enforcement Agencies",
      title_ar: "جهات السلامة العامة وإنفاذ القانون",
      icon: "Siren",
    },
    {
      title_en: "Courts & Judicial Facilities",
      title_ar: "المحاكم والمنشآت القضائية",
      icon: "ShieldCheck",
    },
    {
      title_en: "Public Schools & Educational Institutions",
      title_ar: "المدارس والمؤسسات التعليمية الحكومية",
      icon: "GraduationCap",
    },
    {
      title_en: "Public Hospitals & Healthcare Facilities",
      title_ar: "المستشفيات والمنشآت الصحية الحكومية",
      icon: "HeartPulse",
    },
    {
      title_en: "Ports & Customs Authorities",
      title_ar: "الموانئ وهيئات الجمارك",
      icon: "Container",
    },
    {
      title_en: "Public Utilities & Infrastructure Authorities",
      title_ar: "هيئات المرافق العامة والبنية التحتية",
      icon: "Zap",
    },
  ],

  advantages: [
    {
      title_en:
        "Experienced in public-sector procurement and tender requirements.",
      title_ar: "خبرة في متطلبات المشتريات والمناقصات الحكومية.",
      icon: "Landmark",
    },
    {
      title_en:
        "Documentation support for required specifications and tender submissions.",
      title_ar: "دعم في إعداد المستندات والمواصفات اللازمة لتقديم العروض.",
      icon: "ShieldCheck",
    },
    {
      title_en:
        "Genuine products from trusted global suppliers and manufacturers.",
      title_ar: "منتجات أصلية من موردين ومصنّعين عالميين موثوقين.",
      icon: "BadgePercent",
    },
    {
      title_en: "Reliable delivery to government sites nationwide.",
      title_ar: "توصيل موثوق لمواقع الجهات الحكومية في جميع أنحاء الدولة.",
      icon: "Truck",
    },
    {
      title_en:
        "Broad product range and supply solutions from a single source.",
      title_ar: "نطاق واسع من المنتجات وحلول التوريد من مصدر واحد.",
      icon: "Globe",
    },
    {
      title_en:
        "Dedicated follow-through and support until delivery is complete.",
      title_ar: "متابعة ودعم مخصص لطلبكم حتى إتمام التوريد.",
      icon: "Headset",
    },
  ],

  howWeWork: {
    title_en: "How We Work",
    title_ar: "كيف نعمل؟",
    description_en:
      "From the first request to delivery, we manage the supply process through clear, structured steps.",
    description_ar:
      "من الطلب الأول حتى التسليم، ندير عملية التوريد بخطوات واضحة ومنظمة.",
    steps: [
      {
        title_en: "Receiving the Request",
        title_ar: "استلام الطلب",
        description_en:
          "We review your request and confirm the quantities, technical specifications, and supply requirements.",
        description_ar:
          "نراجع طلبكم ونحدد الكميات والمواصفات الفنية ومتطلبات التوريد.",
      },
      {
        title_en: "Sourcing & Qualification",
        title_ar: "البحث والتأهيل",
        description_en:
          "We identify suitable products and suppliers and assess how well they meet the requirements.",
        description_ar:
          "نبحث عن المنتجات والموردين المناسبين، ونراجع مدى توافقهم مع المتطلبات.",
      },
      {
        title_en: "Specification Matching & Quotation",
        title_ar: "مطابقة المواصفات والعرض",
        description_en:
          "We match the technical specifications, review the available alternatives, and prepare a suitable quotation for the request.",
        description_ar:
          "نطابق المواصفات الفنية ونراجع البدائل المتاحة، ثم نقدم عرضًا مناسبًا للطلب.",
      },
      {
        title_en: "Supply & Delivery",
        title_ar: "التوريد والتسليم",
        description_en:
          "We coordinate the supply process and follow through until the agreed quantities are delivered.",
        description_ar:
          "ننسق عملية التوريد ونتابع التنفيذ حتى تسليم الكميات المتفق عليها.",
      },
    ],
  },

  faqs: [
    {
      question_en:
        "What types of supplies does GOLTENS provide to government entities?",
      answer_en:
        "We supply a range of equipment, supplies, and solutions based on the nature of the request, required specifications, and quantities. This includes areas such as equipment, general supplies, security and safety systems, public lighting, furniture, and other procurement requirements.",
      question_ar: "ما أنواع التوريدات التي توفرها GOLTENS للجهات الحكومية؟",
      answer_ar:
        "نوفر مجموعة من المستلزمات والمعدات والحلول التي تحتاجها الجهات والمؤسسات الحكومية، وفق طبيعة الطلب والمواصفات والكميات المطلوبة، وتشمل مجالات مثل المعدات، المستلزمات، أنظمة الأمن والسلامة، الإنارة، الأثاث والتجهيزات وغيرها من احتياجات التوريد العامة.",
    },
    {
      question_en: "Can GOLTENS supply according to tender specifications?",
      answer_en:
        "Yes. We review the technical specifications, quantities, and supply requirements stated in the request or tender documents, then source products and solutions that match the specified requirements.",
      question_ar: "هل يمكن لـ GOLTENS التوريد وفق مواصفات المناقصات؟",
      answer_ar:
        "نعم، نراجع المواصفات الفنية والكميات ومتطلبات التوريد الواردة في الطلب أو مستندات المناقصة، ثم نبحث عن المنتجات والحلول التي تتوافق مع المتطلبات المحددة.",
    },
    {
      question_en:
        "What if the requested product is not listed on the GOLTENS website?",
      answer_en:
        "You can send us the product specifications or supply requirements directly. We review the request, search for suitable products and suppliers, and assess the sourcing options based on the required specifications.",
      question_ar:
        "كيف تتعامل GOLTENS مع طلب توريد لمنتج غير موجود في قائمة المنتجات؟",
      answer_ar:
        "يمكنكم إرسال مواصفات المنتج أو متطلبات التوريد مباشرة. نقوم بدراسة الطلب والبحث عن المنتجات والموردين المناسبين، ثم نحدد إمكانية التوريد وفق المواصفات المطلوبة.",
    },
    {
      question_en: "Can GOLTENS provide alternatives to the requested product?",
      answer_en:
        "Where suitable alternatives are available, we can review and compare them against the technical specifications and requirements before preparing the quotation, clearly identifying the proposed alternative when applicable.",
      question_ar: "هل توفر GOLTENS بدائل للمنتج المطلوب؟",
      answer_ar:
        "عند وجود بدائل مناسبة، يمكننا مراجعتها ومقارنتها بالمواصفات والمتطلبات الفنية للطلب قبل تقديم العرض، مع توضيح البديل المقترح عند الحاجة.",
    },
    {
      question_en: "What information is required to request a quotation?",
      answer_en:
        "It is helpful to provide the product or equipment description, technical specifications, required quantities, and any relevant supply documents or conditions. More complete information helps us match the request with suitable products and suppliers.",
      question_ar: "ما المعلومات المطلوبة لطلب عرض سعر؟",
      answer_ar:
        "يفضل إرسال وصف المنتج أو المعدة، المواصفات الفنية، الكميات المطلوبة، وأي مستندات أو شروط توريد مرتبطة بالطلب. كلما كانت المعلومات أكثر دقة، كان من الأسهل مطابقة الطلب مع المنتجات والموردين المناسبين.",
    },
    {
      question_en:
        "How can a government entity submit a supply request to GOLTENS?",
      answer_en:
        "A supply request can be submitted through the RFQ form on the website, together with the relevant specifications and documents. After reviewing the request, we will follow up to clarify any additional details required.",
      question_ar: "كيف يمكن للجهة الحكومية إرسال طلب توريد إلى GOLTENS؟",
      answer_ar:
        "يمكن إرسال طلب التوريد من خلال نموذج طلب عرض السعر (RFQ) على الموقع، مع إرفاق المواصفات والمستندات ذات الصلة. بعد مراجعة الطلب، يتم التواصل لاستكمال التفاصيل اللازمة.",
    },
  ],

  relatedSectorSlugs: [
    "healthcare",
    "construction",
    "electrical-energy",
    "commercial-vehicles",
    "global-sourcing",
  ],

  seo: {
    title_en: "Government Procurement & General Supplies Egypt",
    title_ar: "الحلول الحكومية والتوريدات العامة في مصر",
    description_en:
      "GOLTENS supplies government entities, ministries, and public institutions in Egypt with office furniture, security systems, public lighting, and specialized equipment, matched to tender specifications.",
    description_ar:
      "توفر GOLTENS للجهات والهيئات والمؤسسات الحكومية في مصر حلول توريد تشمل الأثاث المكتبي وأنظمة الأمن والإنارة العامة والمعدات المتخصصة، وفق مواصفات المناقصات ومتطلبات التوريد.",
    keywords: [
      "Government Procurement",
      "Government Supplies",
      "Government Procurement Egypt",
      "General Supplies Egypt",
      "Public Sector Supplier Egypt",
      "Government Tenders Egypt",
      "التوريدات الحكومية",
      "التوريدات العامة",
      "حلول التوريد للجهات الحكومية",
      "مورد حكومي في مصر",
      "مناقصات حكومية مصر",
      "توريد للجهات الحكومية",
    ],
  },
};
