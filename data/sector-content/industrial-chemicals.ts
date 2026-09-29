import type { SectorContent } from "@/data/sector-content/types";

/**
 * Industrial Chemicals' real content — written to the same standard as
 * `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated technical specifications or lead times.
 *
 * `categories_en/ar` lists ONLY the 2 categories with real, registered
 * products (`data/product-categories.ts`, sectorId "industrial-chemicals")
 * — never a category tag with no `ProductCategory`/`Product` behind it.
 * Broader sourcing capability beyond today's catalog (cleaning/degreasing,
 * adhesives/sealants, fuels/gases, laboratory/specialty chemicals) is real
 * and commercially useful, so it stays in `intro_en/ar` as an explicit
 * "beyond our current catalog, we can also source..." sourcing-capability
 * statement — deliberately worded differently from the catalog-categories
 * tags, so a visitor can't read it as "these are catalog categories too."
 */
export const industrialChemicalsContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies industrial chemicals sourced from trusted global manufacturers, covering water and wastewater treatment chemicals and corrosion protection and coatings. Beyond our current catalog, we can also source cleaning and degreasing agents, adhesives and sealants, fuels, gases and additives, and laboratory and specialty chemicals through our broader procurement network — availability and specification confirmed per request. Our procurement team matches your process specification against genuine, quality-assured products before every quotation.",
    intro_ar:
      "توفر GOLTENS كيماويات صناعية يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي كيماويات معالجة المياه والصرف الصحي والحماية من التآكل والطلاءات. وبالإضافة إلى كتالوجنا الحالي، يمكننا أيضًا توريد مواد التنظيف وإزالة الشحوم، والمواد اللاصقة والعوازل، والوقود والغازات والإضافات، والكيماويات المخبرية والمتخصصة من خلال شبكة التوريد الأوسع لدينا — مع تأكيد التوافر والمواصفات لكل طلب. يقوم فريق التوريد لدينا بمطابقة مواصفات عملياتكم مع منتجات أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Water & Wastewater Treatment Chemicals",
      "Corrosion Protection & Coatings",
    ],
    categories_ar: [
      "كيماويات معالجة المياه والصرف الصحي",
      "الحماية من التآكل والطلاءات",
    ],
    complianceNote_en:
      "Products are supplied with safety data sheets and handling documentation matched to your project's requirements — we confirm the exact grade and specification needed as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المنتجات مع نشرات بيانات السلامة ووثائق التداول المطابقة لمتطلبات مشروعكم — ونؤكد الدرجة والمواصفات الدقيقة المطلوبة كجزء من عملية إعداد عرض السعر.",
  },

  applications: [
    {
      title_en: "Manufacturing & Process Plants",
      title_ar: "مصانع التصنيع والمعالجة",
      icon: "Factory",
    },
    {
      title_en: "Water & Wastewater Utilities",
      title_ar: "مرافق المياه والصرف الصحي",
      icon: "Droplets",
    },
    { title_en: "Oil & Gas", title_ar: "النفط والغاز", icon: "Fuel" },
    {
      title_en: "Marine & Shipping",
      title_ar: "النقل البحري والشحن",
      icon: "Waves",
    },
    { title_en: "Power Generation", title_ar: "توليد الطاقة", icon: "Zap" },
    {
      title_en: "Construction & Infrastructure",
      title_ar: "البناء والبنية التحتية",
      icon: "HardHat",
    },
    {
      title_en: "Warehousing & Logistics",
      title_ar: "التخزين والخدمات اللوجستية",
      icon: "Warehouse",
    },
    {
      title_en: "Commercial Buildings & Facilities",
      title_ar: "المباني والمرافق التجارية",
      icon: "Building2",
    },
  ],

  advantages: [
    {
      title_en: "Products matched to your process specification.",
      title_ar: "منتجات مطابقة لمواصفات عملياتكم.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Reliable supply for both bulk and specialty quantities.",
      title_ar: "توريد موثوق للكميات الكبيرة والمتخصصة على حد سواء.",
      icon: "Droplets",
    },
    {
      title_en: "Safety data sheets provided with every product.",
      title_ar: "نشرات بيانات سلامة مرفقة مع كل منتج.",
      icon: "BadgePercent",
    },
    {
      title_en: "Genuine products from trusted global manufacturers.",
      title_ar: "منتجات أصلية من شركات مصنّعة عالمية موثوقة.",
      icon: "Award",
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
        "Share your requirement using the request quotation form on this page — product name, grade, and quantity, or a technical specification if available — and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلباتكم من خلال نموذج طلب عرض السعر في هذه الصفحة — اسم المنتج والدرجة والكمية أو المواصفات الفنية إن وجدت — وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en: "Do you provide safety data sheets?",
      answer_en:
        "Yes. Safety data sheets and relevant handling documentation are provided with the products we supply, on request as part of the quotation and delivery process.",
      question_ar: "هل توفرون نشرات بيانات السلامة؟",
      answer_ar:
        "نعم، يتم توفير نشرات بيانات السلامة ووثائق التداول ذات الصلة مع المنتجات التي نورّدها، عند الطلب كجزء من عملية عرض السعر والتسليم.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific product, quantity, and origin, and is confirmed with every quotation — it's not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المنتج والكمية وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر — فهي تختلف باختلاف المنتجات، لذلك نوضحها دائمًا بشكل صريح بدلاً من تحديد رقم عام موحد.",
    },
    {
      question_en: "Can GOLTENS source international brands?",
      answer_en:
        "Yes. We source industrial chemicals from trusted global manufacturers through our international supplier network, subject to availability, and confirm brand and grade options as part of every quotation.",
      question_ar: "هل يمكن لـGOLTENS توريد علامات تجارية عالمية؟",
      answer_ar:
        "نعم، نقوم بتوريد كيماويات صناعية من شركات مصنّعة عالمية موثوقة من خلال شبكة موردينا الدولية، وفقًا لتوافرها، ونؤكد خيارات العلامة التجارية والدرجة كجزء من كل عرض سعر.",
    },
    {
      question_en: "Do you provide technical support?",
      answer_en:
        "Yes, our team provides technical support before and after every order — from matching products to your process specification through to after-sales support.",
      question_ar: "هل تقدمون دعمًا فنيًا؟",
      answer_ar:
        "نعم، يقدم فريقنا الدعم الفني قبل وبعد كل طلب — من مطابقة المنتجات لمواصفات عملياتكم وحتى الدعم بعد البيع.",
    },
  ],

  relatedSectorSlugs: [
    "lubricants-oils",
    "industrial-equipment",
    "healthcare",
    "fire-protection",
    "construction",
    "global-sourcing",
  ],

  seo: {
    title_en: "Industrial Chemicals Supplier Egypt",
    title_ar: "مورد الكيماويات الصناعية في مصر",
    description_en:
      "GOLTENS supplies industrial chemicals and water treatment chemicals in Egypt, sourced from trusted manufacturers and matched to your process specification.",
    description_ar:
      "توفر GOLTENS الكيماويات الصناعية وكيماويات معالجة المياه في مصر، من مصنّعين موثوقين ووفق مواصفات عملياتكم.",
  },
};
