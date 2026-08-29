import type { Solution } from "@/data/solutions/types";

/**
 * Hospitals — the Project Solutions Platform's reference implementation.
 * Every cross-link below is real: it points at products/catalogues/articles
 * that already exist and are genuinely relevant to a hospital project.
 * GOLTENS supplies hospitals' hospital equipment, medical beds, hospital
 * furniture, and surgical supplies, alongside operational, maintenance, and
 * facility requirements — electrical, mechanical, chemical, and
 * fire/life-safety systems.
 */
export const hospitalsSolution: Solution = {
  id: "hospitals",
  slug: "hospitals",
  title_en: "Hospitals",
  title_ar: "المستشفيات",
  description_en:
    "GOLTENS supports hospital and healthcare facility projects with a single procurement partner for hospital equipment, medical beds, hospital furniture, and surgical supplies, together with the operational, maintenance, and facility requirements — electrical and mechanical infrastructure, industrial chemicals, and fire and life-safety systems — a continuous-occupancy facility depends on, sourced and coordinated as one project rather than separate, disconnected purchases.",
  description_ar:
    "تدعم GOLTENS مشروعات المستشفيات والمنشآت الصحية بشريك توريد واحد لتجهيزات المستشفيات والأسرّة الطبية والأثاث الطبي والمستلزمات الجراحية، إلى جانب احتياجات التشغيل والصيانة والمرافق — البنية التحتية الكهربائية والميكانيكية، والكيماويات الصناعية، وأنظمة الحريق والسلامة التي تعتمد عليها منشأة ذات إشغال مستمر — يتم توريدها وتنسيقها كمشروع واحد بدلاً من مشتريات منفصلة غير مترابطة.",
  heroImage: null,
  icon: "HeartPulse",
  targetIndustries_en: [
    "Public Hospitals",
    "Private Hospitals",
    "Medical Centers",
    "Clinics",
  ],
  targetIndustries_ar: [
    "المستشفيات الحكومية",
    "المستشفيات الخاصة",
    "المراكز الطبية",
    "العيادات",
  ],
  procurementScope_en: [
    "Hospital Equipment & Medical Beds",
    "Surgical Supplies",
    "Electrical & Mechanical Systems",
    "Fire Protection Systems",
    "Detection & Alarm Systems",
    "Emergency Lighting",
  ],
  procurementScope_ar: [
    "تجهيزات المستشفيات والأسرّة الطبية",
    "المستلزمات الجراحية",
    "الأنظمة الكهربائية والميكانيكية",
    "أنظمة مكافحة الحريق",
    "أنظمة الكشف والإنذار",
    "إضاءة الطوارئ",
  ],
  relatedSectorSlugs: ["healthcare", "fire-protection"],
  relatedProductSlugs: [
    "electric-hospital-beds",
    "icu-beds",
    "surgical-gowns",
    "sprinklers",
    "fire-alarm-systems",
    "smoke-detectors",
    "fire-extinguishers",
    "emergency-lighting",
    "standby-power-generators",
    "industrial-water-treatment-chemicals",
  ],
  relatedArticles: [
    { sectorSlug: "fire-protection", articleSlug: "nfpa-standards-explained" },
    {
      sectorSlug: "fire-protection",
      articleSlug: "common-fire-protection-mistakes",
    },
  ],
  relatedCatalogues: [
    { sectorSlug: "fire-protection", catalogueId: "fire-alarm-catalogue" },
    { sectorSlug: "fire-protection", catalogueId: "suppression-catalogue" },
  ],
  faqs: [
    {
      question_en:
        "Can GOLTENS source hospital equipment, medical beds, facility/operational supplies, and fire safety systems for one hospital project?",
      answer_en:
        "Yes. We coordinate procurement across a hospital project's equipment, medical beds and furniture, surgical supplies, electrical and mechanical facility requirement, and the fire/life-safety systems it requires, as one procurement engagement rather than separate suppliers.",
      question_ar:
        "هل يمكن لـGOLTENS توريد تجهيزات المستشفيات والأسرّة الطبية والمستلزمات التشغيلية وأنظمة السلامة من الحريق لمشروع مستشفى واحد؟",
      answer_ar:
        "نعم، ننسق عملية التوريد بين تجهيزات المستشفى والأسرّة والأثاث الطبي والمستلزمات الجراحية، إلى جانب احتياجات المرافق الكهربائية والميكانيكية، وأنظمة الحريق والسلامة التي يحتاجها المشروع، كعملية توريد واحدة بدلاً من موردين منفصلين.",
    },
    {
      question_en: "Do you supply hospital fire protection systems to code?",
      answer_en:
        "Yes. We match every fire protection product we source against the code and standard your hospital project specifies, as part of the quotation process.",
      question_ar: "هل تورّدون أنظمة مكافحة حريق للمستشفيات متوافقة مع الكود؟",
      answer_ar:
        "نعم، نقوم بمطابقة كل منتج لمكافحة الحريق نورده مع الكود والمعيار الذي يحدده مشروع مستشفاكم، كجزء من عملية إعداد عرض السعر.",
    },
    {
      question_en: "Can GOLTENS support a hospital tender submission?",
      answer_en:
        "Yes. We supply procurement solutions for hospital projects across government and private tenders, and can provide the documentation typically required for submission on request.",
      question_ar: "هل يمكن لـGOLTENS دعم تقديم مناقصة مستشفى؟",
      answer_ar:
        "نعم، نوفر حلول توريد لمشروعات المستشفيات في المناقصات الحكومية والخاصة، ويمكننا توفير الوثائق المطلوبة عادةً للتقديم عند الطلب.",
    },
  ],
  relatedSolutionSlugs: [
    "universities",
    "government-projects",
    "commercial-buildings",
  ],
};
