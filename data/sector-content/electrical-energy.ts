import {
  electricalEnergyFaqs,
  electricalEnergyGuide,
  electricalEnergyHero,
} from "@/data/sector-content/electrical-energy-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Electrical & Energy Solutions' real content — written to the same
 * standard as `fire-protection.ts`: no invented certifications, no named
 * customer projects, no fabricated technical specifications or lead times.
 *
 * This sector renders the electrical & energy equipment procurement guide
 * (`equipmentGuide`, see `electrical-energy-guide.ts`) in place of the
 * generic About / Industries / Advantages sections, so it carries no
 * `about`, `applications` or `advantages` of its own. Business wording is
 * limited to the approved scope: GOLTENS supplies the 17 approved
 * electrical & energy equipment families according to customer
 * requirements and specifications, available on request; requests are
 * quoted against the customer's own documents, and replacement /
 * equivalent sourcing is limited to the approved families, with final
 * equivalence confirmed by the customer's engineering team.
 */
export const electricalEnergyContent: SectorContent = {
  hero: electricalEnergyHero,

  equipmentGuide: electricalEnergyGuide,

  faqs: electricalEnergyFaqs,

  relatedSectorSlugs: [
    "industrial-equipment",
    "construction",
    "government-procurement",
    "fire-protection",
    "heavy-equipment",
    "global-sourcing",
  ],

  seo: {
    title_en: "Electrical & Energy Equipment in Egypt",
    title_ar: "معدات الكهرباء والطاقة في مصر",
    description_en:
      "Explore switchgear, standby power, lighting and solar equipment through a practical selection and quotation guide from GOLTENS.",
    description_ar:
      "استكشف لوحات التوزيع ومعدات الطاقة الاحتياطية والإنارة والطاقة الشمسية من خلال دليل عملي للاختيار وطلب عروض الأسعار من GOLTENS.",
  },
};
