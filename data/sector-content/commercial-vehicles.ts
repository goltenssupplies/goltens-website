import type { SectorContent } from "@/data/sector-content/types";

/**
 * Commercial Vehicles & Fleet Solutions' real content — written to the same
 * standard as `fire-protection.ts`: no invented certifications, no named
 * customer projects, no fabricated technical specifications or lead times.
 */
export const commercialVehiclesContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies commercial vehicles and fleet solutions sourced from trusted global manufacturers, covering trucks and light vehicles, trailers, buses and passenger transport, specialized and municipal vehicles, and fleet parts and workshop equipment. Our procurement team matches your fleet requirements and technical specification against genuine, quality-assured vehicles and parts before every quotation.",
    intro_ar:
      "توفر GOLTENS مركبات تجارية وحلول تجهيز أساطيل يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي الشاحنات والمركبات الخفيفة، والمقطورات، والحافلات ووسائل نقل الركاب، والمركبات المتخصصة والبلدية، وقطع غيار الأسطول ومعدات الورش. يقوم فريق التوريد لدينا بمطابقة متطلبات أسطولكم والمواصفات الفنية مع مركبات وقطع غيار أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Trucks & Light Vehicles",
      "Trailers",
      "Buses & Passenger Transport",
      "Specialized & Municipal Vehicles",
      "Fleet Parts & Consumables",
      "Fleet Management & Workshop Equipment",
    ],
    categories_ar: [
      "الشاحنات والمركبات الخفيفة",
      "المقطورات",
      "الحافلات ووسائل نقل الركاب",
      "المركبات المتخصصة والبلدية",
      "قطع غيار ومستهلكات الأسطول",
      "إدارة الأسطول ومعدات الورش",
    ],
    complianceNote_en:
      "Vehicles and parts are sourced to meet the specifications and road-safety requirements your fleet operation requires — we confirm the exact configuration as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المركبات وقطع الغيار بما يتوافق مع المواصفات ومتطلبات السلامة المرورية التي تتطلبها عمليات أسطولكم — ونؤكد التهيئة الدقيقة كجزء من عملية إعداد عرض السعر.",
  },

  advantages: [
    {
      title_en: "Single point of contact for fleet-wide procurement.",
      title_ar: "جهة اتصال واحدة لتوريد الأسطول بالكامل.",
      icon: "Truck",
    },
    {
      title_en: "Vehicles matched to your operational requirements.",
      title_ar: "مركبات مطابقة لمتطلبات التشغيل لديكم.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Genuine parts availability for existing fleets.",
      title_ar: "توفر قطع غيار أصلية للأساطيل الحالية.",
      icon: "BadgePercent",
    },
    {
      title_en: "Reliable delivery for fleet renewal schedules.",
      title_ar: "توصيل موثوق لجداول تجديد الأسطول.",
      icon: "Globe",
    },
    {
      title_en: "Workshop and after-sales support.",
      title_ar: "دعم الورش وخدمة ما بعد البيع.",
      icon: "Headset",
    },
    {
      title_en: "Access to an international supplier network.",
      title_ar: "الوصول إلى شبكة موردين دولية.",
      icon: "Award",
    },
  ],

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Share your fleet requirement using the request quotation form on this page — vehicle type, quantity, or a technical specification if available — and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلبات أسطولكم من خلال نموذج طلب عرض السعر في هذه الصفحة — نوع المركبة والكمية أو المواصفات الفنية إن وجدت — وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific vehicle, brand, and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المركبة والعلامة التجارية وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المركبات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Can GOLTENS source international brands?",
      answer_en:
        "Yes. We source commercial vehicles and fleet equipment from trusted global manufacturers through our international supplier network, subject to availability, and confirm brand and model options as part of every quotation.",
      question_ar: "هل يمكن لـGOLTENS توريد علامات تجارية عالمية؟",
      answer_ar:
        "نعم، نقوم بتوريد مركبات تجارية ومعدات أسطول من شركات مصنّعة عالمية موثوقة من خلال شبكة موردينا الدولية، وفقًا لتوافرها، ونؤكد خيارات العلامة التجارية والطراز كجزء من كل عرض سعر.",
    },
    {
      question_en: "Do you supply spare parts and consumables for existing fleets?",
      answer_en:
        "Yes. We source spare parts, tires, batteries, and consumables for the vehicle categories we supply, in addition to complete new and specialized vehicles.",
      question_ar: "هل تورّدون قطع غيار ومستهلكات للأساطيل الحالية؟",
      answer_ar:
        "نعم، نقوم بتوريد قطع الغيار والإطارات والبطاريات والمستهلكات لفئات المركبات التي نوفرها، بالإضافة إلى المركبات الجديدة والمتخصصة الكاملة.",
    },
    {
      question_en: "Do you supply government and municipal fleets?",
      answer_en:
        "Yes. We supply commercial and specialized municipal vehicles for government and public-sector fleet operations, and can provide the documentation typically required for tender submission on request.",
      question_ar: "هل تورّدون للأساطيل الحكومية والبلدية؟",
      answer_ar:
        "نعم، نقوم بتوريد المركبات التجارية والبلدية المتخصصة لعمليات الأساطيل الحكومية والقطاع العام، ويمكننا توفير الوثائق المطلوبة عادةً لتقديم المناقصات عند الطلب.",
    },
  ],

  relatedSectorSlugs: [
    "heavy-equipment",
    "industrial-equipment",
    "government-procurement",
    "electrical-energy",
    "global-sourcing",
  ],
};
