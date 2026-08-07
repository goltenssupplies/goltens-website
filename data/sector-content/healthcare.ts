import type { SectorContent } from "@/data/sector-content/types";

/**
 * Healthcare & Medical Solutions' real content — written to the same
 * standard as `fire-protection.ts`: no invented certifications, no named
 * customer projects, no fabricated technical specifications or lead times.
 */
export const healthcareContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies hospitals and medical centers with equipment sourced from trusted global manufacturers, covering patient monitoring and diagnostics, medical imaging, surgical and operating room equipment, critical and respiratory care, medical gas systems, laboratory equipment, and patient room furniture. Our procurement team matches your clinical requirement and technical specification against genuine, quality-assured equipment before every quotation — availability is never treated as optional.",
    intro_ar:
      "توفر GOLTENS للمستشفيات والمراكز الطبية معدات يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي مراقبة المرضى والتشخيص، والتصوير الطبي، ومعدات الجراحة وغرف العمليات، والعناية الحرجة والتنفسية، وأنظمة الغازات الطبية، ومعدات المختبرات، وأثاث غرف المرضى. يقوم فريق التوريد لدينا بمطابقة متطلباتكم السريرية والفنية مع معدات أصلية ومضمونة الجودة قبل كل عرض سعر — إذ لا يحتمل توافر هذه المعدات أي تأخير.",
    categories_en: [
      "Patient Monitoring & Diagnostics",
      "Medical Imaging",
      "Surgical & Operating Room Equipment",
      "Critical & Respiratory Care",
      "Medical Gas Systems",
      "Laboratory Equipment",
      "Neonatal & Maternity",
      "Patient Room & Mobility Furniture",
    ],
    categories_ar: [
      "مراقبة المرضى والتشخيص",
      "التصوير الطبي",
      "معدات الجراحة وغرف العمليات",
      "العناية الحرجة والتنفسية",
      "أنظمة الغازات الطبية",
      "معدات المختبرات",
      "رعاية حديثي الولادة والأمومة",
      "أثاث غرف المرضى والتنقل",
    ],
    complianceNote_en:
      "Equipment is sourced to meet the medical device regulations and specifications your facility requires — we confirm the exact certification and documentation needs of every item as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المعدات بما يتوافق مع لوائح ومواصفات الأجهزة الطبية التي تتطلبها منشأتكم — ونؤكد متطلبات الاعتماد والوثائق الدقيقة لكل عنصر كجزء من عملية إعداد عرض السعر.",
  },

  advantages: [
    {
      title_en: "Reliable, continuous-availability supply for hospitals.",
      title_ar: "توريد موثوق ومستمر التوافر للمستشفيات.",
      icon: "HeartPulse",
    },
    {
      title_en: "Equipment matched to your clinical specification.",
      title_ar: "معدات مطابقة لمواصفاتكم السريرية.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Genuine products from trusted global manufacturers.",
      title_ar: "منتجات أصلية من شركات مصنّعة عالمية موثوقة.",
      icon: "BadgePercent",
    },
    {
      title_en: "Support for urgent and emergency procurement requests.",
      title_ar: "دعم طلبات التوريد العاجلة والطارئة.",
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
        "Share your clinical requirement using the request quotation form on this page, including a specification or datasheet if available, and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلباتكم السريرية من خلال نموذج طلب عرض السعر في هذه الصفحة، مع إرفاق المواصفات أو ورقة البيانات إن وجدت، وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "Can you support urgent or emergency procurement?",
      answer_en:
        "Yes. We handle urgent procurement requests for hospitals and medical centers and will confirm the fastest realistic availability for your specific item as part of the response.",
      question_ar: "هل يمكنكم دعم التوريد العاجل أو الطارئ؟",
      answer_ar:
        "نعم، نتعامل مع طلبات التوريد العاجلة للمستشفيات والمراكز الطبية، وسنؤكد أسرع موعد توافر واقعي للصنف المطلوب كجزء من ردنا.",
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
      question_en: "Do you supply government hospitals and tenders?",
      answer_en:
        "Yes. We supply government hospitals and public-sector medical projects, and can provide the documentation typically required for tender submission on request.",
      question_ar: "هل تورّدون للمستشفيات الحكومية والمناقصات؟",
      answer_ar:
        "نعم، نقوم بالتوريد للمستشفيات الحكومية ومشروعات القطاع الطبي العام، ويمكننا توفير الوثائق المطلوبة عادةً لتقديم المناقصات عند الطلب.",
    },
    {
      question_en: "Do you provide technical support?",
      answer_en:
        "Yes, our team provides technical support before and after every order — from matching equipment to your clinical specification through to after-sales support.",
      question_ar: "هل تقدمون دعمًا فنيًا؟",
      answer_ar:
        "نعم، يقدم فريقنا الدعم الفني قبل وبعد كل طلب — من مطابقة المعدات لمواصفاتكم السريرية وحتى الدعم بعد البيع.",
    },
  ],

  relatedSectorSlugs: [
    "government-procurement",
    "fire-protection",
    "industrial-chemicals",
    "electrical-energy",
    "global-sourcing",
  ],
};
