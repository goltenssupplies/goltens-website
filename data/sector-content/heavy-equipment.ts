import type { SectorContent } from "@/data/sector-content/types";

/**
 * Heavy Equipment & Machinery's real content — written to the same standard
 * as `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated technical specifications or lead times.
 */
export const heavyEquipmentContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies heavy machinery and equipment sourced from trusted global manufacturers, covering earthmoving equipment, compaction and road construction machinery, cranes and lifting equipment, concrete equipment, drilling and piling rigs, and site vehicles. Our procurement team matches your jobsite requirements and technical specification against genuine, quality-assured equipment before every quotation.",
    intro_ar:
      "توفر GOLTENS معدات وآليات ثقيلة يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي معدات نقل التراب، ومعدات الدك وإنشاء الطرق، والأوناش ومعدات الرفع، ومعدات الخرسانة، ومعدات الحفر والدق، ومركبات الموقع. يقوم فريق التوريد لدينا بمطابقة متطلبات موقع العمل والمواصفات الفنية لديكم مع معدات أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Earthmoving Equipment",
      "Compaction & Road Construction",
      "Cranes & Lifting Equipment",
      "Concrete Equipment",
      "Drilling, Piling & Demolition",
      "Site Vehicles & Trucks",
      "Power & Support Equipment",
      "Parts & Attachments",
    ],
    categories_ar: [
      "معدات نقل التراب",
      "الدك وإنشاء الطرق",
      "الأوناش ومعدات الرفع",
      "معدات الخرسانة",
      "الحفر والدق والهدم",
      "مركبات وشاحنات الموقع",
      "معدات الطاقة والدعم",
      "قطع الغيار والملحقات",
    ],
    complianceNote_en:
      "Equipment is sourced to your project specification and applicable safety and operating standards — we confirm capacity, reach, and rating requirements as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المعدات وفق مواصفات مشروعكم ومعايير السلامة والتشغيل المعمول بها — ونؤكد متطلبات السعة ومدى الوصول والتصنيف كجزء من عملية إعداد عرض السعر.",
  },

  advantages: [
    {
      title_en: "Wide range of heavy machinery in one place.",
      title_ar: "نطاق واسع من الآليات الثقيلة في مكان واحد.",
      icon: "HardHat",
    },
    {
      title_en: "Equipment matched to your jobsite requirements.",
      title_ar: "معدات مطابقة لمتطلبات موقع العمل لديكم.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Genuine products from trusted global manufacturers.",
      title_ar: "منتجات أصلية من شركات مصنّعة عالمية موثوقة.",
      icon: "BadgePercent",
    },
    {
      title_en: "Genuine parts and attachments sourcing.",
      title_ar: "توريد قطع غيار وملحقات أصلية.",
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
        "Share your jobsite requirements using the request quotation form on this page — equipment type, capacity, or a technical specification if available — and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلبات موقع العمل من خلال نموذج طلب عرض السعر في هذه الصفحة — نوع المعدة والسعة أو المواصفات الفنية إن وجدت — وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific equipment, brand, and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المعدة والعلامة التجارية وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المعدات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Can GOLTENS source international brands?",
      answer_en:
        "Yes. We source heavy equipment from trusted global manufacturers through our international supplier network, subject to availability, and confirm brand and model options as part of every quotation.",
      question_ar: "هل يمكن لـGOLTENS توريد علامات تجارية عالمية؟",
      answer_ar:
        "نعم، نقوم بتوريد معدات ثقيلة من شركات مصنّعة عالمية موثوقة من خلال شبكة موردينا الدولية، وفقًا لتوافرها، ونؤكد خيارات العلامة التجارية والطراز كجزء من كل عرض سعر.",
    },
    {
      question_en: "Do you supply spare parts and attachments?",
      answer_en:
        "Yes. We source spare parts, undercarriage components, and attachments for the equipment categories we supply, in addition to complete new machines.",
      question_ar: "هل تورّدون قطع غيار وملحقات؟",
      answer_ar:
        "نعم، نقوم بتوريد قطع الغيار ومكونات الجنزير السفلي والملحقات لفئات المعدات التي نوفرها، بالإضافة إلى الآليات الجديدة الكاملة.",
    },
    {
      question_en: "Do you provide technical support?",
      answer_en:
        "Yes, our team provides technical support before and after every order — from matching equipment to your requirements through to after-sales support.",
      question_ar: "هل تقدمون دعمًا فنيًا؟",
      answer_ar:
        "نعم، يقدم فريقنا الدعم الفني قبل وبعد كل طلب — من مطابقة المعدات لمتطلباتكم وحتى الدعم بعد البيع.",
    },
  ],

  relatedSectorSlugs: [
    "commercial-vehicles",
    "construction",
    "industrial-equipment",
    "electrical-energy",
    "global-sourcing",
  ],
};
