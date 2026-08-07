import type { Solution } from "@/data/solutions/types";

/** Universities — see `hospitals.ts` for the full reference implementation. */
export const universitiesSolution: Solution = {
  id: "universities",
  slug: "universities",
  title_en: "Universities",
  title_ar: "الجامعات",
  description_en:
    "GOLTENS supports university and campus projects with fire protection, electrical, and safety equipment sourced and coordinated across multi-building campuses, matched to each facility's occupancy and code requirements.",
  description_ar:
    "تدعم GOLTENS مشروعات الجامعات والحرم الجامعي بمعدات مكافحة حريق وكهرباء وسلامة يتم توريدها وتنسيقها عبر المباني المتعددة للحرم الجامعي، بما يتناسب مع إشغال كل منشأة ومتطلبات الكود.",
  heroImage: null,
  icon: "GraduationCap",
  targetIndustries_en: ["Public Universities", "Private Universities", "Research Institutes", "Technical Colleges"],
  targetIndustries_ar: ["الجامعات الحكومية", "الجامعات الخاصة", "معاهد البحث العلمي", "الكليات التقنية"],
  procurementScope_en: ["Fire Protection Systems", "Electrical & Automation", "Laboratory Safety Equipment"],
  procurementScope_ar: ["أنظمة مكافحة الحريق", "الكهرباء والتحكم الآلي", "معدات السلامة المخبرية"],
  relatedSectorSlugs: ["fire-protection", "electrical-energy"],
  relatedSolutionSlugs: ["hospitals", "government-projects", "commercial-buildings"],
};
