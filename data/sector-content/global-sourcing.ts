import type { SectorContent } from "@/data/sector-content/types";

/**
 * Global Sourcing & OEM Brands' real content — written to the same standard
 * as `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated technical specifications or lead times.
 */
export const globalSourcingContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS sources genuine products from leading global manufacturers through a trusted international supplier network, for requirements that don't fit neatly into a single category: spare parts and OEM replacement components, industrial raw materials, non-standard or hard-to-find items, and project-specific procurement. Our team confirms sourcing feasibility, brand and model options, and documentation before every quotation.",
    intro_ar:
      "توفر GOLTENS منتجات أصلية من كبرى الشركات المصنّعة العالمية من خلال شبكة موردين دولية موثوقة، للمتطلبات التي لا تندرج بشكل مباشر تحت فئة واحدة: قطع الغيار والمكونات البديلة الأصلية (OEM)، والمواد الخام الصناعية، والأصناف غير القياسية أو نادرة التوفر، والتوريد الخاص بالمشاريع. يقوم فريقنا بتأكيد إمكانية التوريد وخيارات العلامة التجارية والطراز والوثائق المطلوبة قبل كل عرض سعر.",
    categories_en: [
      "Spare Parts & Components",
      "OEM Replacement Parts",
      "Industrial Raw Materials",
      "Specialty Equipment on Request",
      "Non-Standard & Hard-to-Find Items",
      "Turnkey Equipment Packages",
      "Emergency & Urgent Procurement",
      "Export & Import Logistics Support",
    ],
    categories_ar: [
      "قطع الغيار والمكونات",
      "قطع غيار بديلة أصلية (OEM)",
      "المواد الخام الصناعية",
      "معدات متخصصة عند الطلب",
      "أصناف غير قياسية أو نادرة التوفر",
      "حزم معدات جاهزة (تسليم مفتاح)",
      "التوريد الطارئ والعاجل",
      "دعم لوجستيات التصدير والاستيراد",
    ],
    complianceNote_en:
      "Sourcing is handled to the certification, compliance, and documentation requirements your project specifies — we confirm feasibility and exact requirements before every quotation.",
    complianceNote_ar:
      "يتم التوريد بما يتوافق مع متطلبات الاعتماد والمطابقة والوثائق التي يحددها مشروعكم — ونؤكد إمكانية التنفيذ والمتطلبات الدقيقة قبل كل عرض سعر.",
  },

  applications: [
    { title_en: "Oil & Gas", title_ar: "النفط والغاز", icon: "Fuel" },
    { title_en: "Manufacturing", title_ar: "التصنيع", icon: "Factory" },
    { title_en: "Marine", title_ar: "القطاع البحري", icon: "Waves" },
    { title_en: "Construction", title_ar: "الإنشاءات", icon: "HardHat" },
    {
      title_en: "Government Projects",
      title_ar: "المشاريع الحكومية",
      icon: "Landmark",
    },
    { title_en: "Power Generation", title_ar: "توليد الطاقة", icon: "Zap" },
    {
      title_en: "Warehousing & Logistics",
      title_ar: "التخزين واللوجستيات",
      icon: "Warehouse",
    },
    {
      title_en: "Commercial Buildings",
      title_ar: "المباني التجارية",
      icon: "Building2",
    },
    {
      title_en: "Healthcare Facilities",
      title_ar: "المنشآت الصحية",
      icon: "HeartPulse",
    },
    { title_en: "Hospitality", title_ar: "الضيافة", icon: "Hotel" },
  ],

  advantages: [
    {
      title_en: "Access to a trusted international supplier network.",
      title_ar: "الوصول إلى شبكة موردين دولية موثوقة.",
      icon: "Globe",
    },
    {
      title_en: "Sourcing for non-standard and hard-to-find items.",
      title_ar: "توريد الأصناف غير القياسية ونادرة التوفر.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Support for emergency and urgent procurement.",
      title_ar: "دعم التوريد الطارئ والعاجل.",
      icon: "Truck",
    },
    {
      title_en: "Export and import logistics support.",
      title_ar: "دعم لوجستيات التصدير والاستيراد.",
      icon: "Container",
    },
    {
      title_en: "Turnkey equipment packages on request.",
      title_ar: "حزم معدات جاهزة (تسليم مفتاح) عند الطلب.",
      icon: "Award",
    },
    {
      title_en: "A dedicated sourcing team for every request.",
      title_ar: "فريق توريد مخصص لكل طلب.",
      icon: "Headset",
    },
  ],

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Share your requirement using the request quotation form on this page, including any specification, part number, or reference sample you have, and our team will confirm sourcing feasibility with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلباتكم من خلال نموذج طلب عرض السعر في هذه الصفحة، مع إرفاق أي مواصفات أو رقم قطعة أو عينة مرجعية لديكم، وسيؤكد فريقنا إمكانية التوريد بعرض سعر مخصص.",
    },
    {
      question_en:
        "Can you source an item that isn't listed on any other sector page?",
      answer_en:
        "Yes. This sector exists specifically for that case — share the product or part you need, and our sourcing team will confirm whether and how we can supply it through our supplier network.",
      question_ar: "هل يمكنكم توريد صنف غير مدرج في أي صفحة قطاع أخرى؟",
      answer_ar:
        "نعم، هذا القطاع مخصص تحديدًا لهذه الحالة — شاركونا المنتج أو القطعة المطلوبة، وسيؤكد فريق التوريد لدينا إمكانية وطريقة توريدها من خلال شبكة موردينا.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific item, origin, and sourcing route, and is confirmed with every quotation — it's not the same across all requests, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على الصنف المطلوب وبلد المنشأ ومسار التوريد، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف الطلبات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Can GOLTENS handle urgent or emergency sourcing requests?",
      answer_en:
        "Yes. We handle urgent procurement requests and will confirm the fastest realistic sourcing route for your specific item as part of the response.",
      question_ar:
        "هل يمكن لـGOLTENS التعامل مع طلبات التوريد العاجلة أو الطارئة؟",
      answer_ar:
        "نعم، نتعامل مع طلبات التوريد العاجلة، وسنؤكد أسرع مسار توريد واقعي للصنف المطلوب كجزء من ردنا.",
    },
    {
      question_en: "Do you support export and import logistics?",
      answer_en:
        "Yes. We provide logistics support for the products we source, coordinated with the delivery and documentation requirements of your project.",
      question_ar: "هل تدعمون لوجستيات التصدير والاستيراد؟",
      answer_ar:
        "نعم، نقدم دعمًا لوجستيًا للمنتجات التي نورّدها، بالتنسيق مع متطلبات التسليم والوثائق الخاصة بمشروعكم.",
    },
    {
      question_en:
        "Is GOLTENS an authorized agent or distributor for the brands it sources?",
      answer_en:
        "No. GOLTENS is a general procurement and sourcing company — we are not an authorized agent or distributor for any single manufacturer. We source genuine products through our international supplier network, sourced from the OEM or OEM-authorized distribution channel and verified per order, and we're transparent about brand and sourcing route as part of every quotation.",
      question_ar:
        "هل GOLTENS وكيل أو موزع معتمد للعلامات التجارية التي تورّدها؟",
      answer_ar:
        "لا. GOLTENS شركة توريد ومشتريات عامة — ولسنا وكيلاً أو موزعًا معتمدًا لأي جهة مصنّعة بعينها. نقوم بتوريد منتجات أصلية من خلال شبكة موردينا الدولية، حيث يتم التوريد من الجهة المصنّعة أو قناة التوزيع المعتمدة منها، ويتم التحقق من ذلك مع كل طلب، ونوضح العلامة التجارية ومسار التوريد بشفافية كجزء من كل عرض سعر.",
    },
  ],

  relatedSectorSlugs: [
    "industrial-equipment",
    "government-procurement",
    "construction",
    "industrial-chemicals",
    "heavy-equipment",
  ],
};
