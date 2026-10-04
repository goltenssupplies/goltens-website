import {
  industrialEquipmentFaqs,
  industrialEquipmentGuide,
  industrialEquipmentHero,
} from "@/data/sector-content/industrial-equipment-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Industrial Equipment & Pumps' real content — written to the same standard
 * as `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated technical specifications or lead times.
 *
 * This sector renders the industrial equipment procurement & selection
 * guide (`equipmentGuide`, see `industrial-equipment-guide.ts`) in place of
 * the generic About / Industries / Advantages sections, so it carries no
 * `about`, `applications` or `advantages` of its own. Business wording is
 * limited to the approved scope: GOLTENS supplies pumps, valves & actuators
 * and air compressors & systems, available on request, and can source a
 * matching or technically suitable alternative for existing equipment, with
 * final equivalence confirmed by the customer's engineering team.
 */
export const industrialEquipmentContent: SectorContent = {
  hero: industrialEquipmentHero,

  equipmentGuide: industrialEquipmentGuide,

  faqs: industrialEquipmentFaqs,

  relatedSectorSlugs: [
    "fire-protection",
    "electrical-energy",
    "industrial-chemicals",
    "construction",
    "heavy-equipment",
    "global-sourcing",
  ],

  seo: {
    title_en: "Industrial Equipment & Pumps in Egypt",
    title_ar: "المعدات الصناعية والمضخات في مصر",
    description_en:
      "Explore industrial pumps, valves, actuators and compressed-air equipment through a practical selection and quotation guide from GOLTENS.",
    description_ar:
      "استكشف المضخات والصمامات والمشغلات ومعدات الهواء المضغوط من خلال دليل عملي للاختيار وطلب عروض الأسعار من GOLTENS.",
  },
};
