import type { SectorContent } from "@/data/sector-content/types";

/**
 * Industrial Equipment & Pumps' real content — written to the same standard
 * as `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated technical specifications or lead times.
 */
export const industrialEquipmentContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies industrial pumps and mechanical equipment sourced from trusted global manufacturers, covering centrifugal and process pumps, booster and pressure systems, air compressors, water treatment and filtration, valves and actuators, instrumentation and controls, and rotating equipment. Our procurement team matches your technical specification — flow rate, head, materials, and duty conditions — against genuine, quality-assured products before every quotation.",
    intro_ar:
      "توفر GOLTENS مضخات صناعية ومعدات ميكانيكية يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي مضخات الطرد المركزي والعمليات، وأنظمة رفع الضغط، وضواغط الهواء، ومعالجة المياه والترشيح، والصمامات ومحركات التشغيل، وأجهزة القياس والتحكم، والمعدات الدوارة. يقوم فريق التوريد لدينا بمطابقة مواصفاتكم الفنية — معدل التدفق والرفع والخامات وظروف التشغيل — مع منتجات أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Centrifugal & Process Pumps",
      "Booster & Pressure Systems",
      "Air Compressors & Systems",
      "Water Treatment & Filtration",
      "Valves & Actuators",
      "Instrumentation & Controls",
      "Heat Transfer & Rotating Equipment",
      "Piping, Tanks & Vessels",
    ],
    categories_ar: [
      "مضخات الطرد المركزي والعمليات",
      "أنظمة رفع الضغط",
      "ضواغط الهواء وأنظمتها",
      "معالجة المياه والترشيح",
      "الصمامات ومحركات التشغيل",
      "أجهزة القياس والتحكم",
      "معدات نقل الحرارة والمعدات الدوارة",
      "المواسير والخزانات والأوعية",
    ],
    complianceNote_en:
      "Products are sourced to meet the technical and industrial standards your project specifies — we match every item against your required duty conditions, materials, and approvals as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المنتجات بما يتوافق مع المعايير الفنية والصناعية التي يتطلبها مشروعكم — ونقوم بمطابقة كل عنصر مع ظروف التشغيل والخامات والاعتمادات المطلوبة كجزء من عملية إعداد عرض السعر.",
  },

  advantages: [
    {
      title_en: "Wide range of pump and equipment types in one place.",
      title_ar: "نطاق واسع من أنواع المضخات والمعدات في مكان واحد.",
      icon: "SlidersHorizontal",
    },
    {
      title_en: "Products matched to your technical specification.",
      title_ar: "منتجات مطابقة لمواصفاتكم الفنية.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Genuine products from trusted global manufacturers.",
      title_ar: "منتجات أصلية من شركات مصنّعة عالمية موثوقة.",
      icon: "BadgePercent",
    },
    {
      title_en: "Spare parts sourcing for existing installed equipment.",
      title_ar: "توريد قطع غيار للمعدات المركّبة حاليًا.",
      icon: "Droplets",
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
        "Share your technical specification using the request quotation form on this page — flow rate, head, materials, or a datasheet if available — and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا مواصفاتكم الفنية من خلال نموذج طلب عرض السعر في هذه الصفحة — معدل التدفق والرفع والخامات أو ورقة البيانات إن وجدت — وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "Can you match a replacement pump to my existing installation?",
      answer_en:
        "Yes. Share the nameplate details, existing model, or duty conditions of the equipment you're replacing, and our team will source a matching or equivalent product.",
      question_ar: "هل يمكنكم مطابقة مضخة بديلة مع التركيب الحالي لدي؟",
      answer_ar:
        "نعم، شاركونا بيانات اللوحة التعريفية أو الطراز الحالي أو ظروف التشغيل للمعدة المراد استبدالها، وسيقوم فريقنا بتوريد منتج مطابق أو معادل.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific product, brand, and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المنتج والعلامة التجارية وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المنتجات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Do you supply spare parts and accessories?",
      answer_en:
        "Yes. We source spare parts, seals, and accessories for the pumps and equipment categories we supply, in addition to complete new units.",
      question_ar: "هل تورّدون قطع غيار وملحقات؟",
      answer_ar:
        "نعم، نقوم بتوريد قطع الغيار والأختام والملحقات لفئات المضخات والمعدات التي نوفرها، بالإضافة إلى الوحدات الجديدة الكاملة.",
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
    "fire-protection",
    "electrical-energy",
    "industrial-chemicals",
    "heavy-equipment",
    "global-sourcing",
  ],
};
