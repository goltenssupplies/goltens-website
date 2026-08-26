import type { SectorContent } from "@/data/sector-content/types";

/**
 * Electrical & Energy Solutions' real content — written to the same
 * standard as `fire-protection.ts`: no invented certifications, no named
 * customer projects, no fabricated technical specifications or lead times.
 */
export const electricalEnergyContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies electrical equipment, components, and energy solutions sourced from trusted global manufacturers, covering switchgear and distribution, circuit protection, transformers, generators and standby power, power quality, cabling, lighting, and solar and energy storage. Our procurement team matches your load requirements and technical specification against genuine, quality-assured products before every quotation.",
    intro_ar:
      "توفر GOLTENS معدات ومكونات كهربائية وحلول طاقة يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي لوحات التوزيع والمفاتيح الكهربائية، والحماية الكهربائية، والمحولات، والمولدات وأنظمة الطاقة الاحتياطية، وجودة الطاقة، والكابلات، والإنارة، والطاقة الشمسية وتخزين الطاقة. يقوم فريق التوريد لدينا بمطابقة متطلبات الأحمال والمواصفات الفنية لديكم مع منتجات أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Switchgear & Distribution",
      "Circuit Protection",
      "Transformers",
      "Generators & Standby Power",
      "Power Quality",
      "Cabling & Containment",
      "Lighting",
      "Solar & Energy Storage",
    ],
    categories_ar: [
      "لوحات التوزيع والمفاتيح الكهربائية",
      "الحماية الكهربائية",
      "المحولات الكهربائية",
      "المولدات وأنظمة الطاقة الاحتياطية",
      "جودة الطاقة",
      "الكابلات وأنظمة الاحتواء",
      "الإنارة",
      "الطاقة الشمسية وتخزين الطاقة",
    ],
    complianceNote_en:
      "Products are sourced to meet the electrical codes and standards your project specifies — we match every item against your required voltage class, rating, and approvals as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المنتجات بما يتوافق مع الأكواد والمعايير الكهربائية التي يتطلبها مشروعكم — ونقوم بمطابقة كل عنصر مع فئة الجهد والتصنيف والاعتمادات المطلوبة كجزء من عملية إعداد عرض السعر.",
  },

  applications: [
    {
      title_en: "Industrial Facilities",
      title_ar: "المنشآت الصناعية",
      icon: "Factory",
    },
    {
      title_en: "Commercial Buildings",
      title_ar: "المباني التجارية",
      icon: "Building2",
    },
    {
      title_en: "Data Centers",
      title_ar: "مراكز البيانات",
      icon: "SlidersHorizontal",
    },
    { title_en: "Hospitals", title_ar: "المستشفيات", icon: "HeartPulse" },
    {
      title_en: "Construction Sites",
      title_ar: "مواقع الإنشاءات",
      icon: "HardHat",
    },
    { title_en: "Telecom Sites", title_ar: "مواقع الاتصالات", icon: "Zap" },
    {
      title_en: "Utilities & Power Plants",
      title_ar: "المرافق العامة ومحطات الطاقة",
      icon: "Landmark",
    },
    {
      title_en: "Warehouses & Logistics",
      title_ar: "المستودعات واللوجستيات",
      icon: "Warehouse",
    },
    { title_en: "Hotels", title_ar: "الفنادق", icon: "Hotel" },
    { title_en: "Oil & Gas", title_ar: "النفط والغاز", icon: "Fuel" },
  ],

  advantages: [
    {
      title_en: "Single source for full electrical scope of supply.",
      title_ar: "مصدر واحد لنطاق التوريد الكهربائي الكامل.",
      icon: "Zap",
    },
    {
      title_en: "Products matched to your load and voltage requirements.",
      title_ar: "منتجات مطابقة لمتطلبات الأحمال والجهد لديكم.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Genuine products from trusted global manufacturers.",
      title_ar: "منتجات أصلية من شركات مصنّعة عالمية موثوقة.",
      icon: "BadgePercent",
    },
    {
      title_en: "Reliable delivery for time-critical project schedules.",
      title_ar: "توصيل موثوق للجداول الزمنية الحساسة للمشروع.",
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
        "Share your single-line diagram, load schedule, or technical specification using the request quotation form on this page, and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا المخطط الأحادي الخط أو جدول الأحمال أو المواصفات الفنية من خلال نموذج طلب عرض السعر في هذه الصفحة، وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific product, rating, and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المنتج والتصنيف وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المنتجات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Can GOLTENS source international brands?",
      answer_en:
        "Yes. We source electrical equipment from trusted global manufacturers through our international supplier network, subject to availability, and confirm brand and model options as part of every quotation.",
      question_ar: "هل يمكن لـGOLTENS توريد علامات تجارية عالمية؟",
      answer_ar:
        "نعم، نقوم بتوريد معدات كهربائية من شركات مصنّعة عالمية موثوقة من خلال شبكة موردينا الدولية، وفقًا لتوافرها، ونؤكد خيارات العلامة التجارية والطراز كجزء من كل عرض سعر.",
    },
    {
      question_en:
        "Can you supply a complete electrical package for a project?",
      answer_en:
        "Yes. We supply complete electrical scopes — switchgear, transformers, standby power, cabling, and lighting — sourced and coordinated as one project rather than as unrelated individual items.",
      question_ar: "هل يمكنكم توريد حزمة كهربائية متكاملة لمشروع؟",
      answer_ar:
        "نعم، نقوم بتوريد نطاقات كهربائية متكاملة — لوحات توزيع ومحولات وطاقة احتياطية وكابلات وإنارة — يتم توريدها وتنسيقها كمشروع واحد وليس كعناصر منفردة غير مترابطة.",
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
    "industrial-equipment",
    "fire-protection",
    "construction",
    "heavy-equipment",
    "global-sourcing",
  ],
};
