import type { SectorContent } from "@/data/sector-content/types";

/**
 * Hospital Equipment & Medical Supplies' real content — GOLTENS supplies
 * hospitals and medical centers with hospital equipment, medical beds,
 * hospital furniture, and surgical supplies, alongside the operational,
 * maintenance, and facility supply lines already genuine to GOLTENS'
 * business (electrical, chemical, mechanical, energy, and general
 * procurement). Written to the same standard as `fire-protection.ts`: no
 * invented certifications, no named customer projects, no fabricated
 * technical specifications or lead times.
 */
export const healthcareContent: SectorContent = {
  about: {
    intro_en:
      "GOLTENS supports hospital and medical facility procurement with hospital equipment, medical beds, hospital furniture, and surgical supplies, alongside integrated solutions for operation, maintenance, facility, and general procurement needs — supporting your facility's day-to-day continuity as a single procurement partner.",
    intro_ar:
      "تدعم GOLTENS مشتريات المستشفيات والمنشآت الطبية بتوريد تجهيزات المستشفيات والأسرّة الطبية والأثاث الطبي والمستلزمات الجراحية، إلى جانب حلول متكاملة لاحتياجات التشغيل والصيانة والمرافق والتوريدات العامة، كشريك توريد واحد يضمن استمرارية العمل اليومي لمنشأتكم.",
    categories_en: [
      "Hospital Equipment & Diagnostics",
      "Hospital Beds & Patient Furniture",
      "Surgical Supplies",
      "Electrical Supplies & Equipment",
      "Cables, Breakers & Distribution Panels",
      "Industrial Chemicals & Chemical Materials",
      "Water Treatment Supplies & Equipment",
      "Catering & Kitchen Supplies",
      "Technical Supplies & General Facility Equipment",
      "Maintenance & Operations Equipment and Materials",
      "Energy Solutions & Supplies",
      "General Procurement & Operational Supplies",
    ],
    categories_ar: [
      "تجهيزات المستشفيات وأجهزة التشخيص",
      "أسرّة المستشفيات وأثاث المرضى",
      "المستلزمات الجراحية",
      "المستلزمات والمعدات الكهربائية",
      "الكابلات والقواطع ولوحات التوزيع",
      "الكيماويات والمواد الكيميائية الصناعية",
      "المستلزمات ومعدات معالجة المياه",
      "المستلزمات والمواد الخاصة بخدمات التغذية والمطابخ",
      "المستلزمات الفنية والتجهيزات العامة للمرافق",
      "معدات ومواد الصيانة والتشغيل",
      "حلول ومستلزمات الطاقة",
      "التوريدات العامة والمستلزمات التشغيلية",
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
        "One procurement partner across electrical, mechanical, and chemical supply lines.",
      title_ar:
        "شريك توريد واحد عبر خطوط التوريد الكهربائية والميكانيكية والكيميائية.",
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
        "Do you support recurring or framework supply agreements for facility and maintenance needs?",
      answer_en:
        "Yes. We can set up recurring or framework supply arrangements for your facility and maintenance teams' ongoing requirements, coordinated through a single point of contact.",
      question_ar:
        "هل تدعمون اتفاقيات التوريد الدورية أو الإطارية لاحتياجات المرافق والصيانة؟",
      answer_ar:
        "نعم، يمكننا إعداد ترتيبات توريد دورية أو إطارية لتغطية الاحتياجات المستمرة لفرق المرافق والصيانة لديكم، من خلال جهة تواصل واحدة.",
    },
    {
      question_en:
        "Can you support urgent procurement or facility maintenance requests?",
      answer_en:
        "Yes. We handle urgent procurement and maintenance-supply requests for hospitals and medical centers and will confirm the fastest realistic availability for your specific item as part of the response.",
      question_ar:
        "هل يمكنكم دعم طلبات التوريد العاجلة أو متطلبات صيانة المرافق؟",
      answer_ar:
        "نعم، نتعامل مع طلبات التوريد العاجلة ومستلزمات الصيانة للمستشفيات والمراكز الطبية، وسنؤكد أسرع موعد توافر واقعي للصنف المطلوب كجزء من ردنا.",
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
      "GOLTENS supplies hospital equipment, medical beds, hospital furniture, and surgical supplies to hospitals, medical centers, and clinics in Egypt, alongside facility and operational procurement solutions.",
    description_ar:
      "توفر GOLTENS تجهيزات المستشفيات والأسرّة الطبية والأثاث الطبي والمستلزمات الجراحية للمستشفيات والمراكز الطبية والعيادات في مصر، إلى جانب حلول توريد المرافق والتشغيل.",
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
