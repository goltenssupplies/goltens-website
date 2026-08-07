import type { Solution } from "@/data/solutions/types";

/**
 * Hospitals — the Project Solutions Platform's reference implementation,
 * matching the brief's own worked example (Hospital → Healthcare → Medical
 * Equipment → GE Healthcare → Catalogue → Article → RFQ). Every cross-link
 * below is real: it points at brands/products/catalogues/articles that
 * already exist and are genuinely relevant to a hospital project — nothing
 * is invented to fill a gap (there is no "Medical Equipment" product
 * category built yet, so `relatedProductSlugs` only draws on genuinely
 * applicable fire-safety products, not fabricated medical-equipment SKUs).
 */
export const hospitalsSolution: Solution = {
  id: "hospitals",
  slug: "hospitals",
  title_en: "Hospitals",
  title_ar: "المستشفيات",
  description_en:
    "GOLTENS supports hospital and healthcare facility projects with a single procurement partner for medical equipment brands, fire and life-safety systems, and the electrical and mechanical infrastructure a continuous-occupancy facility depends on — sourced and coordinated as one project rather than separate, disconnected purchases.",
  description_ar:
    "تدعم GOLTENS مشروعات المستشفيات والمنشآت الصحية بشريك توريد واحد للعلامات التجارية للمعدات الطبية، وأنظمة الحريق والسلامة، والبنية التحتية الكهربائية والميكانيكية التي تعتمد عليها منشأة ذات إشغال مستمر — يتم توريدها وتنسيقها كمشروع واحد بدلاً من مشتريات منفصلة غير مترابطة.",
  heroImage: null,
  icon: "HeartPulse",
  targetIndustries_en: ["Public Hospitals", "Private Hospitals", "Medical Centers", "Clinics"],
  targetIndustries_ar: ["المستشفيات الحكومية", "المستشفيات الخاصة", "المراكز الطبية", "العيادات"],
  procurementScope_en: ["Medical Equipment", "Fire Protection Systems", "Detection & Alarm Systems", "Emergency Lighting"],
  procurementScope_ar: ["المعدات الطبية", "أنظمة مكافحة الحريق", "أنظمة الكشف والإنذار", "إضاءة الطوارئ"],
  relatedSectorSlugs: ["healthcare", "fire-protection"],
  relatedProductSlugs: ["sprinklers", "fire-alarm-systems", "smoke-detectors", "fire-extinguishers", "emergency-lighting"],
  relatedBrandSlugs: ["ge-healthcare", "philips-healthcare", "drager", "mindray", "tyco", "honeywell", "kidde"],
  relatedArticles: [
    { sectorSlug: "fire-protection", articleSlug: "nfpa-standards-explained" },
    { sectorSlug: "fire-protection", articleSlug: "common-fire-protection-mistakes" },
  ],
  relatedCatalogues: [
    { sectorSlug: "fire-protection", catalogueId: "fire-alarm-catalogue" },
    { sectorSlug: "fire-protection", catalogueId: "suppression-catalogue" },
  ],
  faqs: [
    {
      question_en: "Can GOLTENS source both medical equipment and fire safety systems for one hospital project?",
      answer_en: "Yes. We coordinate procurement across both healthcare equipment brands and the fire/life-safety systems a hospital project requires, as one procurement engagement rather than separate suppliers.",
      question_ar: "هل يمكن لـGOLTENS توريد المعدات الطبية وأنظمة السلامة من الحريق لمشروع مستشفى واحد؟",
      answer_ar: "نعم، ننسق عملية التوريد بين العلامات التجارية للمعدات الطبية وأنظمة الحريق والسلامة التي يحتاجها مشروع المستشفى، كعملية توريد واحدة بدلاً من موردين منفصلين.",
    },
    {
      question_en: "Do you supply hospital fire protection systems to code?",
      answer_en: "Yes. We match every fire protection product we source against the code and standard your hospital project specifies, as part of the quotation process.",
      question_ar: "هل تورّدون أنظمة مكافحة حريق للمستشفيات متوافقة مع الكود؟",
      answer_ar: "نعم، نقوم بمطابقة كل منتج لمكافحة الحريق نورده مع الكود والمعيار الذي يحدده مشروع مستشفاكم، كجزء من عملية إعداد عرض السعر.",
    },
    {
      question_en: "Can GOLTENS support a hospital tender submission?",
      answer_en: "Yes. We supply procurement solutions for hospital projects across government and private tenders, and can provide the documentation typically required for submission on request.",
      question_ar: "هل يمكن لـGOLTENS دعم تقديم مناقصة مستشفى؟",
      answer_ar: "نعم، نوفر حلول توريد لمشروعات المستشفيات في المناقصات الحكومية والخاصة، ويمكننا توفير الوثائق المطلوبة عادةً للتقديم عند الطلب.",
    },
  ],
  relatedSolutionSlugs: ["universities", "government-projects", "commercial-buildings"],
};
