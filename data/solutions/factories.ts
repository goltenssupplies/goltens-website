import type { Solution } from "@/data/solutions/types";

/** Factories — see `hospitals.ts` for the full reference implementation. */
export const factoriesSolution: Solution = {
  id: "factories",
  slug: "factories",
  title_en: "Factories",
  title_ar: "المصانع",
  description_en:
    "GOLTENS supplies industrial pumps, fire protection systems, electrical equipment, and industrial chemicals for manufacturing and processing facilities, sourced to specification through a trusted global supplier network.",
  description_ar:
    "توفر GOLTENS مضخات صناعية وأنظمة مكافحة حريق ومعدات كهربائية وكيماويات صناعية لمنشآت التصنيع والمعالجة، يتم توريدها وفق المواصفات المطلوبة من خلال شبكة موردين عالمية موثوقة.",
  heroImage: null,
  icon: "Factory",
  targetIndustries_en: ["Manufacturing Plants", "Processing Facilities", "Industrial Parks"],
  targetIndustries_ar: ["مصانع التصنيع", "منشآت المعالجة", "المناطق الصناعية"],
  procurementScope_en: ["Industrial Pumps", "Fire Protection Systems", "Electrical & Automation", "Industrial Lubricants & Chemicals"],
  procurementScope_ar: ["المضخات الصناعية", "أنظمة مكافحة الحريق", "الكهرباء والتحكم الآلي", "الزيوت والكيماويات الصناعية"],
  relatedSectorSlugs: ["industrial-equipment", "fire-protection", "electrical-energy", "industrial-chemicals"],
  relatedSolutionSlugs: ["oil-and-gas", "infrastructure", "power-plants"],
};
