import type { Solution } from "@/data/solutions/types";

/** Water Utilities — see `hospitals.ts` for the full reference implementation. */
export const waterUtilitiesSolution: Solution = {
  id: "water-utilities",
  slug: "water-utilities",
  title_en: "Water Utilities",
  title_ar: "مرافق المياه",
  description_en:
    "GOLTENS supplies industrial pumps, electrical equipment, and fire protection systems for water treatment facilities, utility operators, and desalination plants, sourced to specification.",
  description_ar:
    "توفر GOLTENS مضخات صناعية ومعدات كهربائية وأنظمة مكافحة حريق لمحطات معالجة المياه وشركات المرافق ومحطات تحلية المياه، يتم توريدها وفق المواصفات المطلوبة.",
  heroImage: null,
  icon: "Droplets",
  targetIndustries_en: ["Water Treatment Facilities", "Utility Operators", "Desalination Plants"],
  targetIndustries_ar: ["محطات معالجة المياه", "شركات المرافق", "محطات تحلية المياه"],
  procurementScope_en: ["Industrial Pumps", "Electrical & Automation", "Fire Protection Systems"],
  procurementScope_ar: ["المضخات الصناعية", "الكهرباء والتحكم الآلي", "أنظمة مكافحة الحريق"],
  relatedSectorSlugs: ["industrial-equipment", "electrical-energy", "fire-protection"],
  relatedSolutionSlugs: ["power-plants", "oil-and-gas", "infrastructure"],
};
