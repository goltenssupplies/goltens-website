import type { SectorContent } from "@/data/sector-content/types";

/**
 * Fire Protection's real content — the production reference implementation
 * every future sector page's content file follows. Every field here is
 * real and non-fabricated: no invented certifications, no named customer
 * projects, no fabricated technical specifications or lead times.
 */
export const fireProtectionContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies complete fire protection systems and safety equipment sourced from trusted global manufacturers, covering the full scope a project needs: fire pumps, valves, sprinklers, hydrants, fire cabinets, hose reels, foam systems, clean agent (gas) suppression systems, fire extinguishers, and detection & alarm systems. Whether you're specifying a single component or a complete system, our procurement team matches your technical requirements against genuine, quality-assured products before every quotation.",
    intro_ar:
      "توفر GOLTENS أنظمة ومعدات مكافحة حريق متكاملة يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي النطاق الكامل الذي يحتاجه المشروع: مضخات الحريق، الصمامات، رشاشات الإخماد، حنفيات الحريق، خزائن الحريق، بكرات الخراطيم، أنظمة الرغوة، أنظمة الإخماد بالغاز النظيف، طفايات الحريق، وأنظمة الكشف والإنذار. سواء كنتم بحاجة إلى مكوّن واحد أو نظام متكامل، يقوم فريق التوريد لدينا بمطابقة متطلباتكم الفنية مع منتجات أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Fire Pumps",
      "Valves",
      "Sprinklers",
      "Hydrants",
      "Fire Cabinets",
      "Hose Reels",
      "Foam Systems",
      "Clean Agent Systems",
      "Fire Extinguishers",
      "Detection & Alarm Systems",
    ],
    categories_ar: [
      "مضخات الحريق",
      "الصمامات",
      "رشاشات الإخماد",
      "حنفيات الحريق",
      "خزائن الحريق",
      "بكرات الخراطيم",
      "أنظمة الرغوة",
      "أنظمة الإخماد بالغاز النظيف",
      "طفايات الحريق",
      "أنظمة الكشف والإنذار",
    ],
    complianceNote_en:
      "Products are sourced to meet the international fire protection standards your project specifies — we match every item against your project's required codes and approvals as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المنتجات بما يتوافق مع معايير مكافحة الحريق الدولية التي يتطلبها مشروعكم — ونقوم بمطابقة كل عنصر مع الأكواد والاعتمادات المطلوبة لمشروعكم كجزء من عملية إعداد عرض السعر.",
  },

  applications: [
    { title_en: "Hospitals", title_ar: "المستشفيات", icon: "HeartPulse" },
    { title_en: "Airports", title_ar: "المطارات", icon: "Plane" },
    { title_en: "Universities", title_ar: "الجامعات", icon: "GraduationCap" },
    { title_en: "Hotels", title_ar: "الفنادق", icon: "Hotel" },
    { title_en: "Factories", title_ar: "المصانع", icon: "Factory" },
    { title_en: "Oil & Gas", title_ar: "النفط والغاز", icon: "Fuel" },
    { title_en: "Warehouses", title_ar: "المستودعات", icon: "Warehouse" },
    { title_en: "Commercial Buildings", title_ar: "المباني التجارية", icon: "Building2" },
    { title_en: "Power Plants", title_ar: "محطات الطاقة", icon: "Zap" },
    { title_en: "Government Buildings", title_ar: "المباني الحكومية", icon: "Landmark" },
  ],

  catalogues: [
    {
      id: "pump-catalogue",
      title_en: "Pump Catalogue",
      title_ar: "كتالوج المضخات",
      language: "en",
      fileUrl: null,
      thumbnail: null,
      description_en: "Fire pumps, controllers, engines, motors, and jockey pumps we can source.",
      description_ar: "مضخات الحريق ولوحات التحكم والمحركات والمضخات التعويضية التي يمكننا توريدها.",
    },
    {
      id: "valve-catalogue",
      title_en: "Valve Catalogue",
      title_ar: "كتالوج الصمامات",
      language: "en",
      fileUrl: null,
      thumbnail: null,
      description_en: "Butterfly, gate, check, alarm, and OS&Y valves for fire protection systems.",
      description_ar: "الصمامات الفراشية وصمامات البوابة وعدم الرجوع والإنذار وOS&Y لأنظمة مكافحة الحريق.",
    },
    {
      id: "fire-alarm-catalogue",
      title_en: "Fire Alarm Catalogue",
      title_ar: "كتالوج إنذار الحريق",
      language: "en",
      fileUrl: null,
      thumbnail: null,
      description_en: "Detection, alarm panels, and accessories for fire alarm systems.",
      description_ar: "أجهزة الكشف ولوحات الإنذار وملحقات أنظمة إنذار الحريق.",
    },
    {
      id: "suppression-catalogue",
      title_en: "Suppression Catalogue",
      title_ar: "كتالوج أنظمة الإخماد",
      language: "en",
      fileUrl: null,
      thumbnail: null,
      description_en: "Sprinklers, gas suppression (FM200, NOVEC 1230, CO2), and foam systems.",
      description_ar: "رشاشات الإخماد وأنظمة الإخماد بالغاز (FM200 وNOVEC 1230 وCO2) وأنظمة الرغوة.",
    },
    {
      id: "accessories-catalogue",
      title_en: "Accessories Catalogue",
      title_ar: "كتالوج الملحقات",
      language: "en/ar",
      fileUrl: null,
      thumbnail: null,
      description_en: "Hydrants, cabinets, hose reels, hoses, extinguishers, and emergency lighting.",
      description_ar: "حنفيات الحريق والخزائن وبكرات الخراطيم والخراطيم والطفايات وإضاءة الطوارئ.",
    },
  ],

  projects: [
    {
      title_en: "Hospital Fire Protection",
      title_ar: "مكافحة الحريق في المستشفيات",
      description_en: "Fire detection and suppression sourced for continuous-occupancy healthcare facilities, matched to your fire strategy and code requirements.",
      description_ar: "توريد أنظمة كشف وإخماد الحريق للمنشآت الصحية ذات الإشغال المستمر، وفق استراتيجية الحريق ومتطلبات الكود لديكم.",
      image: null,
      recommendedBrandSlugs: ["tyco", "johnson-controls", "honeywell"],
    },
    {
      title_en: "University Campus",
      title_ar: "الحرم الجامعي",
      description_en: "Fire alarm and detection systems sourced for multi-building campuses, sized to each facility's occupancy.",
      description_ar: "توريد أنظمة إنذار وكشف الحريق للحرم الجامعي متعدد المباني، بما يتناسب مع إشغال كل منشأة.",
      image: null,
      recommendedBrandSlugs: ["notifier", "simplex", "morley"],
    },
    {
      title_en: "Industrial Factory",
      title_ar: "المصنع الصناعي",
      description_en: "Fire pumps, sprinkler systems, and detection sourced for process areas, warehouses, and production floors.",
      description_ar: "توريد مضخات حريق وأنظمة رش تلقائي وأنظمة كشف لمناطق العمليات والمستودعات وخطوط الإنتاج.",
      image: null,
      recommendedBrandSlugs: ["tyco", "victaulic", "naffco"],
    },
    {
      title_en: "Government Complex",
      title_ar: "المجمع الحكومي",
      description_en: "Complete fire protection procurement aligned with public-sector specification and certification requirements.",
      description_ar: "توريد متكامل لمعدات مكافحة الحريق متوافق مع مواصفات ومتطلبات الاعتماد في القطاع الحكومي.",
      image: null,
      recommendedBrandSlugs: ["johnson-controls", "kidde", "minimax"],
    },
    {
      title_en: "Warehouse",
      title_ar: "المستودعات",
      description_en: "Sprinkler and hydrant systems sourced and sized for large-footprint, high-storage warehouse risk.",
      description_ar: "توريد أنظمة رش تلقائي وحنفيات حريق مقاسة وفق مخاطر المستودعات ذات المساحات الكبيرة والتخزين العالي.",
      image: null,
      recommendedBrandSlugs: ["viking", "reliable", "rapidrop"],
    },
    {
      title_en: "Commercial Tower",
      title_ar: "البرج التجاري",
      description_en: "Fire protection systems sourced and matched to high-rise commercial building specifications, from riser valves to full sprinkler networks.",
      description_ar: "توريد أنظمة مكافحة حريق وفق مواصفات المباني التجارية الشاهقة، من صمامات الأعمدة الصاعدة إلى شبكات الرش التلقائي الكاملة.",
      image: null,
      recommendedBrandSlugs: ["victaulic", "naffco"],
    },
  ],

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en: "Share your project requirements using the request quotation form on this page, including a BOQ or technical specification if available, and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar: "شاركونا متطلبات مشروعكم من خلال نموذج طلب عرض السعر في هذه الصفحة، مع إرفاق جدول الكميات (BOQ) أو المواصفات الفنية إن وجدت، وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "What is the lead time?",
      answer_en: "Lead time depends on the specific product, brand, and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar: "تعتمد مدة التوريد على المنتج والعلامة التجارية وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المنتجات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Can GOLTENS source international brands?",
      answer_en: "Yes. We source fire protection products from trusted global manufacturers through our international supplier network, subject to availability, and confirm brand and model options as part of every quotation.",
      question_ar: "هل يمكن لـGOLTENS توريد علامات تجارية عالمية؟",
      answer_ar: "نعم، نقوم بتوريد منتجات مكافحة الحريق من شركات مصنّعة عالمية موثوقة من خلال شبكة موردينا الدولية، وفقًا لتوافرها، ونؤكد خيارات العلامة التجارية والطراز كجزء من كل عرض سعر.",
    },
    {
      question_en: "Do you supply government tenders?",
      answer_en: "Yes. We supply fire protection procurement for government entities and public-sector projects, and can provide the documentation typically required for tender submission on request.",
      question_ar: "هل تورّدون للمناقصات الحكومية؟",
      answer_ar: "نعم، نقوم بتوريد معدات مكافحة الحريق للجهات الحكومية ومشروعات القطاع العام، ويمكننا توفير الوثائق المطلوبة عادةً لتقديم المناقصات عند الطلب.",
    },
    {
      question_en: "Do you provide technical support?",
      answer_en: "Yes, our team provides technical support before and after every order — from matching products to your specification through to after-sales support.",
      question_ar: "هل تقدمون دعمًا فنيًا؟",
      answer_ar: "نعم، يقدم فريقنا الدعم الفني قبل وبعد كل طلب — من مطابقة المنتجات لمواصفاتكم وحتى الدعم بعد البيع.",
    },
    {
      question_en: "Can you supply complete fire protection systems?",
      answer_en: "Yes. We supply complete fire protection systems — pumps, valves, sprinklers, detection and alarm, and suppression — sourced and coordinated as one project rather than as unrelated individual items.",
      question_ar: "هل يمكنكم توريد أنظمة مكافحة حريق متكاملة؟",
      answer_ar: "نعم، نقوم بتوريد أنظمة مكافحة حريق متكاملة — مضخات وصمامات ورشاشات وأنظمة كشف وإنذار وإخماد — يتم توريدها وتنسيقها كمشروع واحد وليس كعناصر منفردة غير مترابطة.",
    },
  ],

  relatedSectorSlugs: [
    "industrial-equipment",
    "electrical-energy",
    "heavy-equipment",
    "industrial-chemicals",
    "healthcare",
    "commercial-vehicles",
  ],
};
