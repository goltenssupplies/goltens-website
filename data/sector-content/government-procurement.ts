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

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Share your requirement using the request quotation form on this page, including the technical specification or tender document, the quantities needed, and your project or delivery-site details, and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلباتكم من خلال نموذج طلب عرض السعر في هذه الصفحة، مع إرفاق المواصفات الفنية أو وثيقة المناقصة، والكميات المطلوبة، وتفاصيل مشروعكم أو موقع التسليم، وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "Can GOLTENS supply against a government tender?",
      answer_en:
        "Yes. We regularly supply government entities and public-sector projects, and can provide the documentation typically required for tender submission on request.",
      question_ar: "هل يمكن لـGOLTENS التوريد لمناقصة حكومية؟",
      answer_ar:
        "نعم، نقوم بانتظام بالتوريد للجهات الحكومية ومشروعات القطاع العام، ويمكننا توفير الوثائق المطلوبة عادةً لتقديم المناقصات عند الطلب.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific product and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المنتج وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المنتجات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Can GOLTENS source international brands?",
      answer_en:
        "Yes. We source products from trusted global manufacturers through our international supplier network, subject to availability, and confirm brand and model options as part of every quotation.",
      question_ar: "هل يمكن لـGOLTENS توريد علامات تجارية عالمية؟",
      answer_ar:
        "نعم، نقوم بتوريد منتجات من شركات مصنّعة عالمية موثوقة من خلال شبكة موردينا الدولية، وفقًا لتوافرها، ونؤكد خيارات العلامة التجارية والطراز كجزء من كل عرض سعر.",
    },
    {
      question_en: "Do you provide technical support?",
      answer_en:
        "Yes, our team provides technical support before and after every order — from matching products to your specification through to after-sales support.",
      question_ar: "هل تقدمون دعمًا فنيًا؟",
      answer_ar:
        "نعم، يقدم فريقنا الدعم الفني قبل وبعد كل طلب — من مطابقة المنتجات لمواصفاتكم وحتى الدعم بعد البيع.",
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
