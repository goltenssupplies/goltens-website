import type { SectorContent } from "@/data/sector-content/types";

/**
 * Lubricants & Oils' real content — split out from the former combined
 * "Industrial Chemicals & Lubricants" sector (see the taxonomy
 * implementation report). Written to the same standard as
 * `industrial-chemicals.ts`: no invented certifications, no named
 * customer projects, no fabricated technical specifications or lead
 * times, and no brand named beyond the same general "trusted global
 * manufacturers" phrasing every sibling sector already uses.
 *
 * `categories_en/ar` lists ONLY the 5 categories with real, registered
 * products (`data/product-categories.ts`, sectorId "lubricants-oils") —
 * the 6 taxonomy-only categories (Engine Oils, Compressor Oils, Turbine
 * Oils, Circulating Oils, Transformer Oils, Industrial Machine / Cooling
 * Lubricants) are deliberately NOT mentioned here, so this page never
 * implies a product range that doesn't exist yet.
 *
 * `applications` below is drawn directly from the real `applications_en`
 * text already in the 5 products
 * (`data/products/lubricants-oils/lubricants-oils.ts`) — every industry
 * tag here is one those products' own data already states, not a new
 * claim.
 */
export const lubricantsOilsContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supplies industrial lubricants and oils sourced from trusted global manufacturers, covering hydraulic oils, gear oils, greases, metalworking fluids, and specialty industrial lubricants. Our procurement team matches your equipment manufacturer's specified grade and viscosity against genuine, quality-assured products before every quotation.",
    intro_ar:
      "توفر GOLTENS زيوتًا ومواد تشحيم صناعية يتم توريدها من شركات مصنّعة عالمية موثوقة، وتغطي الزيوت الهيدروليكية وزيوت التروس والشحوم وسوائل التشغيل المعدني وزيوت التشحيم الصناعية المتخصصة. يقوم فريق التوريد لدينا بمطابقة الدرجة واللزوجة التي تحددها الجهة المصنّعة لمعداتكم مع منتجات أصلية ومضمونة الجودة قبل كل عرض سعر.",
    categories_en: [
      "Hydraulic Oils",
      "Gear Oils",
      "Greases",
      "Metalworking Fluids",
      "Specialty Industrial Lubricants",
    ],
    categories_ar: [
      "الزيوت الهيدروليكية",
      "زيوت التروس",
      "الشحوم",
      "سوائل التشغيل المعدني",
      "زيوت التشحيم الصناعية المتخصصة",
    ],
    complianceNote_en:
      "Products are supplied with technical data sheets matched to your project's requirements — we confirm the exact grade and specification needed as part of the quotation process.",
    complianceNote_ar:
      "يتم توريد المنتجات مع نشرات بيانات فنية مطابقة لمتطلبات مشروعكم — ونؤكد الدرجة والمواصفات الدقيقة المطلوبة كجزء من عملية إعداد عرض السعر.",
  },

  applications: [
    {
      title_en: "Manufacturing & Process Plants",
      title_ar: "مصانع التصنيع والمعالجة",
      icon: "Factory",
    },
    {
      title_en: "Heavy Equipment & Construction",
      title_ar: "المعدات الثقيلة والإنشاءات",
      icon: "HardHat",
    },
    {
      title_en: "Marine & Shipping",
      title_ar: "النقل البحري والشحن",
      icon: "Waves",
    },
    {
      title_en: "Metal Fabrication & Machining",
      title_ar: "التشغيل والتصنيع المعدني",
      icon: "SlidersHorizontal",
    },
    {
      title_en: "Material Handling & Lifting",
      title_ar: "مناولة المواد والرفع",
      icon: "Warehouse",
    },
    {
      title_en: "Power Generation",
      title_ar: "توليد الطاقة",
      icon: "Zap",
    },
  ],

  advantages: [
    {
      title_en:
        "Products matched to your equipment manufacturer's specification.",
      title_ar: "منتجات مطابقة لمواصفات الجهة المصنّعة لمعداتكم.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Reliable supply for both bulk and specialty quantities.",
      title_ar: "توريد موثوق للكميات الكبيرة والمتخصصة على حد سواء.",
      icon: "Droplets",
    },
    {
      title_en: "Technical data sheets provided with every product.",
      title_ar: "نشرات بيانات فنية مرفقة مع كل منتج.",
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
      question_en: "Do you provide technical data sheets?",
      answer_en:
        "Yes. Technical data sheets and relevant handling documentation are provided with the products we supply, on request as part of the quotation and delivery process.",
      question_ar: "هل توفرون نشرات بيانات فنية؟",
      answer_ar:
        "نعم، يتم توفير نشرات بيانات فنية ووثائق التداول ذات الصلة مع المنتجات التي نورّدها، عند الطلب كجزء من عملية عرض السعر والتسليم.",
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
        "Yes. We source industrial lubricants from trusted global manufacturers through our international supplier network, subject to availability, and confirm brand and grade options as part of every quotation.",
      question_ar: "هل يمكن لـGOLTENS توريد علامات تجارية عالمية؟",
      answer_ar:
        "نعم، نقوم بتوريد زيوت صناعية من شركات مصنّعة عالمية موثوقة من خلال شبكة موردينا الدولية، وفقًا لتوافرها، ونؤكد خيارات العلامة التجارية والدرجة كجزء من كل عرض سعر.",
    },
    {
      question_en: "Do you provide technical support?",
      answer_en:
        "Yes, our team provides technical support before and after every order — from matching products to your equipment manufacturer's specification through to after-sales support.",
      question_ar: "هل تقدمون دعمًا فنيًا؟",
      answer_ar:
        "نعم، يقدم فريقنا الدعم الفني قبل وبعد كل طلب — من مطابقة المنتجات لمواصفات الجهة المصنّعة لمعداتكم وحتى الدعم بعد البيع.",
    },
  ],

  relatedSectorSlugs: [
    "industrial-chemicals",
    "heavy-equipment",
    "industrial-equipment",
    "commercial-vehicles",
  ],

  seo: {
    title_en: "Lubricants & Oils Supplier Egypt",
    title_ar: "مورد الزيوت ومواد التشحيم الصناعية في مصر",
    description_en:
      "GOLTENS supplies industrial lubricants, hydraulic oils, gear oils, greases, and metalworking fluids in Egypt, sourced from trusted manufacturers and matched to your equipment specification.",
    description_ar:
      "توفر GOLTENS زيوتًا صناعية وزيوتًا هيدروليكية وزيوت تروس وشحومًا وسوائل تشغيل معدني في مصر، من مصنّعين موثوقين ووفق مواصفات معداتكم.",
  },
};
