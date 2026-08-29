import type { SectorContent } from "@/data/sector-content/types";

/**
 * Hospital Equipment & Medical Supplies' real content — GOLTENS supplies
 * hospitals, medical centers, and clinics with hospital equipment, medical
 * beds, hospital furniture, and surgical supplies. The sector's prior 9
 * operational-supply categories (electrical, chemical, mechanical, energy,
 * general procurement) have been deliberately removed from this page's
 * content to keep the sector focused; their product files remain in the
 * repository, unregistered — see `data/products/index.ts`. Written to the
 * same standard as `fire-protection.ts`: no invented certifications, no
 * named customer projects, no fabricated technical specifications or lead
 * times.
 */
export const healthcareContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supports hospital and medical facility procurement with hospital and medical equipment, medical beds, hospital furniture, surgical supplies, and medical consumables — sourced to your facility's specification as a single procurement partner.",
    intro_ar:
      "تدعم GOLTENS مشتريات المستشفيات والمنشآت الطبية بتوريد تجهيزات المستشفيات والأجهزة الطبية والأسرّة الطبية والأثاث الطبي والمستلزمات الجراحية والمستلزمات الطبية الاستهلاكية، وفق مواصفات منشأتكم، كشريك توريد واحد.",
    categories_en: [
      "Patient Monitoring & Diagnostic Equipment",
      "Respiratory & Emergency Equipment",
      "Sterilization & Operating Room Equipment",
      "Hospital Beds & Patient Handling",
      "Medical Furniture, Trolleys & Carts",
      "Surgical Supplies",
    ],
    categories_ar: [
      "أجهزة المراقبة والتشخيص",
      "أجهزة التنفس والطوارئ",
      "معدات التعقيم وغرف العمليات",
      "أسرّة المستشفيات ونقل المرضى",
      "الأثاث الطبي والعربات",
      "المستلزمات الجراحية",
    ],
  },

  applications: [
    { title_en: "Hospitals", title_ar: "المستشفيات", icon: "HeartPulse" },
    {
      title_en: "Medical Centers & Clinics",
      title_ar: "المراكز الطبية والعيادات",
      icon: "Building2",
    },
    {
      title_en: "Diagnostic Laboratories",
      title_ar: "المختبرات التشخيصية",
      icon: "Container",
    },
    {
      title_en: "Government & Public Health Facilities",
      title_ar: "المرافق الصحية الحكومية والعامة",
      icon: "Landmark",
    },
    {
      title_en: "Elderly Care & Rehabilitation Facilities",
      title_ar: "مرافق رعاية المسنين والتأهيل",
      icon: "ShieldCheck",
    },
    {
      title_en: "Pharmaceutical & Medical Warehousing",
      title_ar: "مستودعات الأدوية والمستلزمات الطبية",
      icon: "Warehouse",
    },
  ],

  advantages: [
    {
      title_en:
        "Reliable, continuous-availability supply for hospitals and medical facilities.",
      title_ar: "توريد موثوق ومستمر التوافر للمستشفيات والمراكز الطبية.",
      icon: "HeartPulse",
    },
    {
      title_en:
        "Products matched to your facility's technical and operational specification.",
      title_ar: "منتجات مطابقة لمواصفاتكم الفنية والتشغيلية.",
      icon: "ShieldCheck",
    },
    {
      title_en: "Genuine products from trusted manufacturers and suppliers.",
      title_ar: "منتجات أصلية من شركات مصنّعة وموردين موثوقين.",
      icon: "BadgePercent",
    },
    {
      title_en:
        "Support for urgent procurement and facility maintenance needs.",
      title_ar: "دعم طلبات التوريد العاجلة واحتياجات صيانة المرافق.",
      icon: "Truck",
    },
    {
      title_en: "Technical support before and after every order.",
      title_ar: "دعم فني قبل وبعد كل طلب.",
      icon: "Headset",
    },
    {
      title_en:
        "One procurement partner across hospital equipment, medical beds and furniture, and surgical supplies.",
      title_ar:
        "شريك توريد واحد لتجهيزات المستشفيات والأسرّة والأثاث الطبي والمستلزمات الجراحية.",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Share your technical requirement using the request quotation form on this page, including a specification or datasheet if available, and our team will respond with a tailored quotation.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "شاركونا متطلباتكم الفنية من خلال نموذج طلب عرض السعر في هذه الصفحة، مع إرفاق المواصفات أو ورقة البيانات إن وجدت، وسيتواصل معكم فريقنا بعرض سعر مخصص.",
    },
    {
      question_en:
        "Do you support recurring or framework supply agreements for hospital equipment and supplies?",
      answer_en:
        "Yes. We can set up recurring or framework supply arrangements for your hospital's ongoing equipment and supply requirements, coordinated through a single point of contact.",
      question_ar:
        "هل تدعمون اتفاقيات التوريد الدورية أو الإطارية لتجهيزات ومستلزمات المستشفى؟",
      answer_ar:
        "نعم، يمكننا إعداد ترتيبات توريد دورية أو إطارية لتغطية الاحتياجات المستمرة من التجهيزات والمستلزمات بمستشفاكم، من خلال جهة تواصل واحدة.",
    },
    {
      question_en: "Can you support urgent procurement requests?",
      answer_en:
        "Yes. We handle urgent procurement requests for hospitals and medical centers and will confirm the fastest realistic availability for your specific item as part of the response.",
      question_ar: "هل يمكنكم دعم طلبات التوريد العاجلة؟",
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
        "Yes. We supply government hospitals and public-sector medical facility projects, and can provide the documentation typically required for tender submission on request.",
      question_ar: "هل تورّدون للمستشفيات الحكومية والمناقصات؟",
      answer_ar:
        "نعم، نقوم بالتوريد للمستشفيات الحكومية ومشروعات القطاع الطبي العام، ويمكننا توفير الوثائق المطلوبة عادةً لتقديم المناقصات عند الطلب.",
    },
  ],

  relatedSectorSlugs: [
    "government-procurement",
    "fire-protection",
    "industrial-chemicals",
    "electrical-energy",
    "global-sourcing",
  ],

  seo: {
    title_en: "Hospital Equipment & Medical Supplies Supplier Egypt | GOLTENS",
    title_ar: "توريد تجهيزات المستشفيات والمستلزمات الطبية في مصر | GOLTENS",
    description_en:
      "GOLTENS supplies hospital equipment, medical beds, hospital furniture, and surgical supplies to hospitals, medical centers, and clinics in Egypt.",
    description_ar:
      "توفر GOLTENS تجهيزات المستشفيات والأسرّة الطبية والأثاث الطبي والمستلزمات الجراحية للمستشفيات والمراكز الطبية والعيادات في مصر.",
    keywords: [
      "Hospital Equipment",
      "Hospital Medical Supplies",
      "Medical Equipment Supplier",
      "Hospital Beds",
      "Medical Beds",
      "Surgical Supplies",
      "Hospital Equipment Supplier Egypt",
      "Medical Supplies Supplier Egypt",
      "تجهيزات المستشفيات",
      "المستلزمات الطبية",
      "الأجهزة الطبية",
      "أسرة المستشفيات",
      "الأسرة الطبية",
      "المستلزمات الجراحية",
      "توريد تجهيزات المستشفيات",
      "توريد المستلزمات الطبية",
    ],
  },
};
