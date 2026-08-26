import type { SectorContent } from "@/data/sector-content/types";

/**
 * Construction & Infrastructure's real content — written to the same
 * standard as `fire-protection.ts`: no invented certifications, no named
 * customer projects, no fabricated technical specifications or lead times.
 */
export const constructionContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies materials and equipment for construction, engineering, and infrastructure projects, sourced from trusted global and regional manufacturers, covering cement and concrete, steel and structural materials, waterproofing and insulation, construction chemicals, roofing and flooring, doors and glazing, plumbing and sanitary fittings, and road and site works. Our procurement team matches your BOQ and engineering specification against genuine, quality-assured materials before every quotation.",
    intro_ar:
      "توفر GOLTENS المواد والمعدات لمشروعات الإنشاءات والهندسة والبنية التحتية، يتم توريدها من شركات مصنّعة عالمية وإقليمية موثوقة، وتغطي الأسمنت والخرسانة، والحديد ومواد الإنشاء، والعزل المائي والحراري، والكيماويات الإنشائية، والتسقيف والأرضيات، والأبواب والتزجيج، وتجهيزات السباكة والصرف الصحي، وأعمال الطرق والمواقع. يقوم فريق التوريد لدينا بمطابقة جدول الكميات (BOQ) والمواصفات الهندسية لديكم مع مواد أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Cement & Concrete",
      "Steel & Structural Materials",
      "Waterproofing & Insulation",
      "Construction Chemicals & Compounds",
      "Roofing, Tiles & Flooring",
      "Doors, Windows & Glazing",
      "Plumbing & Sanitary Fittings",
      "Hardware, Tools & Site Equipment",
    ],
    categories_ar: [
      "الأسمنت والخرسانة",
      "الحديد ومواد الإنشاء",
      "العزل المائي والحراري",
      "الكيماويات الإنشائية والمركبات",
      "التسقيف والبلاط والأرضيات",
      "الأبواب والنوافذ والتزجيج",
      "تجهيزات السباكة والصرف الصحي",
      "العتاد والأدوات ومعدات الموقع",
    ],
    complianceNote_en:
      "Materials are sourced to meet the specifications and standards set out in your project's engineering documents — we confirm grade, rating, and testing requirements as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المواد بما يتوافق مع المواصفات والمعايير الواردة في الوثائق الهندسية لمشروعكم — ونؤكد الدرجة والتصنيف ومتطلبات الفحص كجزء من عملية إعداد عرض السعر.",
  },

  applications: [
    {
      title_en: "Residential Construction",
      title_ar: "الإنشاءات السكنية",
      icon: "HardHat",
    },
    {
      title_en: "Commercial Buildings",
      title_ar: "المباني التجارية",
      icon: "Building2",
    },
    {
      title_en: "Infrastructure & Roadworks",
      title_ar: "البنية التحتية وأعمال الطرق",
      icon: "Truck",
    },
    {
      title_en: "Government Projects",
      title_ar: "المشروعات الحكومية",
      icon: "Landmark",
    },
    {
      title_en: "Industrial Facility Construction",
      title_ar: "إنشاء المنشآت الصناعية",
      icon: "Factory",
    },
    {
      title_en: "Educational Institutions",
      title_ar: "المؤسسات التعليمية",
      icon: "GraduationCap",
    },
    {
      title_en: "Healthcare Facilities",
      title_ar: "المنشآت الصحية",
      icon: "HeartPulse",
    },
    {
      title_en: "Hospitality Projects",
      title_ar: "المشروعات الفندقية",
      icon: "Hotel",
    },
    {
      title_en: "Warehousing & Logistics",
      title_ar: "المستودعات والخدمات اللوجستية",
      icon: "Warehouse",
    },
  ],

  advantages: [
    {
      title_en: "Full-scope materials sourcing from a single supplier.",
      title_ar: "توريد شامل للمواد من مورد واحد.",
      icon: "HardHat",
    },
    {
      title_en: "Materials matched to your BOQ and specification.",
      title_ar: "مواد مطابقة لجدول الكميات والمواصفات لديكم.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Bulk and project-quantity supply capability.",
      title_ar: "القدرة على التوريد بالجملة وبكميات المشروع.",
      icon: "Container",
    },
    {
      title_en: "Reliable delivery to construction sites.",
      title_ar: "توصيل موثوق إلى مواقع الإنشاء.",
      icon: "Truck",
    },
    {
      title_en: "Technical support before and after every order.",
      title_ar: "دعم فني قبل وبعد كل طلب.",
      icon: "Headset",
    },
    {
      title_en: "Access to an international supplier network.",
      title_ar: "الوصول إلى شبكة موردين دولية.",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Share your BOQ, engineering specification, or material requirement using the request quotation form on this page, and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا جدول الكميات (BOQ) أو المواصفات الهندسية أو متطلبات المواد من خلال نموذج طلب عرض السعر في هذه الصفحة، وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "Can you supply bulk project quantities?",
      answer_en:
        "Yes. We source construction materials in both bulk project quantities and smaller specialty quantities, coordinated to your project's delivery schedule.",
      question_ar: "هل يمكنكم توريد كميات كبيرة للمشروع؟",
      answer_ar:
        "نعم، نقوم بتوريد مواد الإنشاء بكميات كبيرة للمشروع وبكميات متخصصة أصغر، بالتنسيق مع جدول التسليم الخاص بمشروعكم.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific material, quantity, and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المادة والكمية وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المواد، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Do you supply government and infrastructure tenders?",
      answer_en:
        "Yes. We supply construction and infrastructure materials for government and public-sector projects, and can provide the documentation typically required for tender submission on request.",
      question_ar: "هل تورّدون للمناقصات الحكومية ومشروعات البنية التحتية؟",
      answer_ar:
        "نعم، نقوم بتوريد مواد الإنشاء والبنية التحتية لمشروعات الجهات الحكومية والقطاع العام، ويمكننا توفير الوثائق المطلوبة عادةً لتقديم المناقصات عند الطلب.",
    },
    {
      question_en: "Do you provide technical support?",
      answer_en:
        "Yes, our team provides technical support before and after every order — from matching materials to your specification through to after-sales support.",
      question_ar: "هل تقدمون دعمًا فنيًا؟",
      answer_ar:
        "نعم، يقدم فريقنا الدعم الفني قبل وبعد كل طلب — من مطابقة المواد لمواصفاتكم وحتى الدعم بعد البيع.",
    },
  ],

  relatedSectorSlugs: [
    "heavy-equipment",
    "electrical-energy",
    "government-procurement",
    "industrial-chemicals",
    "global-sourcing",
  ],
};
