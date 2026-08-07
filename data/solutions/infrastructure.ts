import type { Solution } from "@/data/solutions/types";

/** Infrastructure — see `hospitals.ts` for the full reference implementation. */
export const infrastructureSolution: Solution = {
  id: "infrastructure",
  slug: "infrastructure",
  title_en: "Infrastructure",
  title_ar: "البنية التحتية",
  description_en:
    "GOLTENS supplies heavy equipment, construction materials, and electrical equipment for roads, bridges, and public works projects, sourced through a trusted international supplier network.",
  description_ar:
    "توفر GOLTENS المعدات الثقيلة ومواد البناء والمعدات الكهربائية لمشروعات الطرق والجسور والأشغال العامة، يتم توريدها من خلال شبكة موردين دولية موثوقة.",
  heroImage: null,
  icon: "HardHat",
  targetIndustries_en: ["Roads & Bridges", "Utilities Infrastructure", "Public Works Contractors"],
  targetIndustries_ar: ["الطرق والجسور", "البنية التحتية للمرافق", "مقاولو الأشغال العامة"],
  procurementScope_en: ["Heavy Equipment & Machinery", "Construction Materials", "Electrical & Automation"],
  procurementScope_ar: ["المعدات الثقيلة", "مواد البناء", "الكهرباء والتحكم الآلي"],
  relatedSectorSlugs: ["construction", "heavy-equipment", "electrical-energy"],
  relatedSolutionSlugs: ["government-projects", "water-utilities", "power-plants"],
};
