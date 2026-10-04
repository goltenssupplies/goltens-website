import {
  fireProtectionFaqs,
  fireProtectionGuide,
  fireProtectionHero,
} from "@/data/sector-content/fire-protection-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Fire Protection's real content — no invented certifications, listings or
 * approvals, no named customer projects or reference projects, no
 * catalogue placeholders, and no fabricated technical specifications or
 * lead times.
 *
 * This sector renders the fire protection equipment procurement guide
 * (`equipmentGuide`, see `fire-protection-guide.ts`) in place of the
 * generic About / Industries / Advantages sections, so it carries no
 * `about`, `applications`, `advantages`, `catalogues` or `projects` of its
 * own. Business wording is limited to the approved scope: GOLTENS supplies
 * the 21 approved fire protection equipment types against the customer's
 * or consultant's requirements, available on request. System design,
 * calculations, installation, testing, commissioning and final acceptance
 * remain with the customer, consultant, contractor or responsible
 * authority; replacement / equivalent sourcing is limited to the approved
 * families, with final equivalence confirmed by the customer's consultant,
 * engineering team or responsible authority.
 */
export const fireProtectionContent: SectorContent = {
  hero: fireProtectionHero,

  equipmentGuide: fireProtectionGuide,

  faqs: fireProtectionFaqs,

  relatedSectorSlugs: [
    "industrial-equipment",
    "electrical-energy",
    "construction",
    "government-procurement",
    "healthcare",
    "global-sourcing",
  ],

  seo: {
    title_en: "Fire Protection Equipment in Egypt",
    title_ar: "معدات مكافحة الحريق في مصر",
    description_en:
      "Explore fire pumps, valves, sprinklers, detection and alarm, and emergency lighting equipment through a practical specification and quotation guide from GOLTENS.",
    description_ar:
      "استكشف مضخات الحريق والمحابس والرشاشات ومعدات الكشف والإنذار وإنارة الطوارئ من خلال دليل عملي للمواصفات وطلب عروض الأسعار من GOLTENS.",
  },
};
