import type { SectorContent } from "@/data/sector-content/types";

/**
 * Government Procurement's real content — written to the same standard as
 * `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated lead times.
 */
export const governmentProcurementContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies public-sector entities and government projects across a broad procurement scope: office and institutional furniture, IT and communications equipment, security and surveillance systems, public lighting and power, waste and sanitation equipment, municipal fleet vehicles, and specialized institutional equipment. Our team matches every request against your tender specification and required documentation before quotation.",
    intro_ar:
      "توفر GOLTENS للجهات الحكومية والمشروعات الحكومية نطاق توريد واسع يشمل: الأثاث المكتبي والمؤسسي، ومعدات تقنية المعلومات والاتصالات، وأنظمة الأمن والمراقبة، وإنارة الطرق العامة وأنظمة الطاقة، ومعدات النفايات والصرف الصحي، ومركبات الأسطول البلدي، والمعدات المؤسسية المتخصصة. يقوم فريقنا بمطابقة كل طلب مع مواصفات المناقصة والوثائق المطلوبة قبل تقديم عرض السعر.",
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

  advantages: [
    {
      title_en: "Experienced in public-sector tender requirements.",
      title_ar: "خبرة في متطلبات المناقصات الحكومية.",
      icon: "Landmark",
    },
    {
      title_en: "Documentation support for tender submission.",
      title_ar: "دعم في إعداد الوثائق اللازمة لتقديم المناقصات.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Genuine products from trusted global suppliers.",
      title_ar: "منتجات أصلية من موردين عالميين موثوقين.",
      icon: "BadgePercent",
    },
    {
      title_en: "Reliable delivery to government sites nationwide.",
      title_ar: "توصيل موثوق لمواقع الجهات الحكومية في جميع أنحاء الدولة.",
      icon: "Truck",
    },
    {
      title_en: "Broad category coverage from a single supplier.",
      title_ar: "تغطية واسعة للفئات من مورد واحد.",
      icon: "Globe",
    },
    {
      title_en: "Dedicated account support before and after every order.",
      title_ar: "دعم مخصص لحسابكم قبل وبعد كل طلب.",
      icon: "Headset",
    },
  ],

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Share your requirement using the request quotation form on this page, including a BOQ, tender document, or technical specification if available, and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلباتكم من خلال نموذج طلب عرض السعر في هذه الصفحة، مع إرفاق جدول الكميات (BOQ) أو وثيقة المناقصة أو المواصفات الفنية إن وجدت، وسيتواصل معكم فريقنا بعرض سعر مخصص.",
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
};
