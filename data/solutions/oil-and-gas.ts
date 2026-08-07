import type { Solution } from "@/data/solutions/types";

/** Oil & Gas — see `hospitals.ts` for the full reference implementation. */
export const oilAndGasSolution: Solution = {
  id: "oil-and-gas",
  slug: "oil-and-gas",
  title_en: "Oil & Gas",
  title_ar: "النفط والغاز",
  description_en:
    "GOLTENS supplies industrial pumps, fire protection systems, electrical equipment, and heavy machinery for upstream operations, refineries, and petrochemical facilities, matched to the technical and safety standards these projects require.",
  description_ar:
    "توفر GOLTENS مضخات صناعية وأنظمة مكافحة حريق ومعدات كهربائية ومعدات ثقيلة لعمليات الاستكشاف والإنتاج والمصافي والمنشآت البتروكيماوية، وفق المعايير الفنية ومعايير السلامة التي تتطلبها هذه المشروعات.",
  heroImage: null,
  icon: "Fuel",
  targetIndustries_en: ["Upstream Operators", "Refineries", "Petrochemical Plants"],
  targetIndustries_ar: ["شركات الاستكشاف والإنتاج", "المصافي", "المنشآت البتروكيماوية"],
  procurementScope_en: ["Industrial Pumps", "Fire Protection Systems", "Electrical & Automation", "Heavy Equipment & Machinery"],
  procurementScope_ar: ["المضخات الصناعية", "أنظمة مكافحة الحريق", "الكهرباء والتحكم الآلي", "المعدات الثقيلة"],
  relatedSectorSlugs: ["industrial-equipment", "electrical-energy", "fire-protection", "heavy-equipment"],
  relatedSolutionSlugs: ["factories", "power-plants", "water-utilities"],
};
