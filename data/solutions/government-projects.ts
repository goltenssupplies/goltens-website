import type { Solution } from "@/data/solutions/types";

/**
 * Government Projects — a real, honest lighter entry (see `hospitals.ts`
 * for the full reference implementation). Only genuinely applicable
 * sectors are linked; no products/brands/catalogues/articles are curated
 * yet, so those sections simply don't render rather than showing invented
 * content.
 */
export const governmentProjectsSolution: Solution = {
  id: "government-projects",
  slug: "government-projects",
  title_en: "Government Projects",
  title_ar: "المشروعات الحكومية",
  description_en:
    "GOLTENS supplies solutions aligned with public-sector procurement standards, sourcing general supplies, electrical equipment, and construction materials for government entities and public projects through a trusted international supplier network.",
  description_ar:
    "توفر GOLTENS حلولاً متوافقة مع معايير المشتريات الحكومية، وتورّد الإمدادات العامة والمعدات الكهربائية ومواد البناء للجهات الحكومية والمشروعات العامة من خلال شبكة موردين دولية موثوقة.",
  heroImage: null,
  icon: "Landmark",
  targetIndustries_en: ["Ministries", "Municipalities", "Public Utilities", "Government Agencies"],
  targetIndustries_ar: ["الوزارات", "البلديات", "المرافق العامة", "الجهات الحكومية"],
  procurementScope_en: ["General Supplies", "Electrical & Automation", "Construction Materials"],
  procurementScope_ar: ["الإمدادات العامة", "الكهرباء والتحكم الآلي", "مواد البناء"],
  relatedSectorSlugs: ["government-procurement", "electrical-energy", "construction"],
  relatedSolutionSlugs: ["infrastructure", "commercial-buildings", "hospitals"],
};
