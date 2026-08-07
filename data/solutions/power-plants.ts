import type { Solution } from "@/data/solutions/types";

/** Power Plants — see `hospitals.ts` for the full reference implementation. */
export const powerPlantsSolution: Solution = {
  id: "power-plants",
  slug: "power-plants",
  title_en: "Power Plants",
  title_ar: "محطات الطاقة",
  description_en:
    "GOLTENS supplies electrical equipment, industrial pumps, and fire protection systems for power generation facilities and independent power producers, matched to each plant's technical specification.",
  description_ar:
    "توفر GOLTENS معدات كهربائية ومضخات صناعية وأنظمة مكافحة حريق لمحطات توليد الطاقة ومنتجي الطاقة المستقلين، وفق المواصفات الفنية لكل محطة.",
  heroImage: null,
  icon: "Zap",
  targetIndustries_en: ["Power Generation Facilities", "Utility Operators", "Independent Power Producers"],
  targetIndustries_ar: ["محطات توليد الطاقة", "شركات المرافق", "منتجو الطاقة المستقلون"],
  procurementScope_en: ["Electrical & Automation", "Industrial Pumps", "Fire Protection Systems"],
  procurementScope_ar: ["الكهرباء والتحكم الآلي", "المضخات الصناعية", "أنظمة مكافحة الحريق"],
  relatedSectorSlugs: ["electrical-energy", "industrial-equipment", "fire-protection"],
  relatedSolutionSlugs: ["oil-and-gas", "water-utilities", "factories"],
};
