import type { Solution } from "@/data/solutions/types";

/** Commercial Buildings — see `hospitals.ts` for the full reference implementation. */
export const commercialBuildingsSolution: Solution = {
  id: "commercial-buildings",
  slug: "commercial-buildings",
  title_en: "Commercial Buildings",
  title_ar: "المباني التجارية",
  description_en:
    "GOLTENS sources fire protection, electrical, and construction materials for office towers, retail centers, and mixed-use developments, matched to each building's specification and code requirements.",
  description_ar:
    "توفر GOLTENS مواد مكافحة الحريق والكهرباء والبناء للأبراج المكتبية والمراكز التجارية والمشروعات متعددة الاستخدامات، وفق مواصفات كل مبنى ومتطلبات الكود.",
  heroImage: null,
  icon: "Building2",
  targetIndustries_en: ["Office Towers", "Retail Centers", "Mixed-Use Developments"],
  targetIndustries_ar: ["الأبراج المكتبية", "المراكز التجارية", "المشروعات متعددة الاستخدامات"],
  procurementScope_en: ["Fire Protection Systems", "Electrical & Automation", "Construction Materials"],
  procurementScope_ar: ["أنظمة مكافحة الحريق", "الكهرباء والتحكم الآلي", "مواد البناء"],
  relatedSectorSlugs: ["fire-protection", "electrical-energy", "construction"],
  relatedSolutionSlugs: ["hotels", "government-projects", "universities"],
};
