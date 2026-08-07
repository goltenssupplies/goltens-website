import type { Solution } from "@/data/solutions/types";

/** Airports — see `hospitals.ts` for the full reference implementation. */
export const airportsSolution: Solution = {
  id: "airports",
  slug: "airports",
  title_en: "Airports",
  title_ar: "المطارات",
  description_en:
    "GOLTENS supplies fire protection, electrical equipment, and heavy machinery for airport authorities and ground handling operators, sourced to specification for aviation infrastructure projects.",
  description_ar:
    "توفر GOLTENS معدات مكافحة الحريق والمعدات الكهربائية والمعدات الثقيلة لهيئات المطارات وشركات المناولة الأرضية، يتم توريدها وفق المواصفات المطلوبة لمشروعات البنية التحتية للطيران.",
  heroImage: null,
  icon: "Plane",
  targetIndustries_en: ["Airport Authorities", "Ground Handling Operators", "Aviation Infrastructure"],
  targetIndustries_ar: ["هيئات المطارات", "شركات المناولة الأرضية", "البنية التحتية للطيران"],
  procurementScope_en: ["Fire Protection Systems", "Electrical & Automation", "Heavy Equipment & Machinery"],
  procurementScope_ar: ["أنظمة مكافحة الحريق", "الكهرباء والتحكم الآلي", "المعدات الثقيلة"],
  relatedSectorSlugs: ["fire-protection", "electrical-energy", "heavy-equipment"],
  relatedSolutionSlugs: ["hotels", "infrastructure", "government-projects"],
};
