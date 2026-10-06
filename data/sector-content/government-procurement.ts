import {
  governmentProcurementFaqs,
  governmentProcurementGuide,
  governmentProcurementHero,
} from "@/data/sector-content/government-procurement-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Government & Public-Sector Procurement's real content — no government
 * affiliation, supplier-status or customer claims, no tender-preparation
 * or submission claims, no invented certifications, and no fabricated
 * specifications or lead times.
 *
 * This sector renders the tender / BOQ response guide and cross-sector
 * routing hub (`equipmentGuide`, see `government-procurement-guide.ts`) in
 * place of the generic About / Industries / Advantages / How We Work
 * sections, so it carries no `about`, `applications`, `advantages`,
 * `howWeWork`, `catalogues` or `projects` of its own, and no SEO keywords.
 * GOLTENS prepares a quotation against the customer's documents; tender
 * preparation, submission, compliance with tender conditions and final
 * technical acceptance remain with the customer, bidder, consultant or
 * contracting authority.
 */
export const governmentProcurementContent: SectorContent = {
  hero: governmentProcurementHero,

  equipmentGuide: governmentProcurementGuide,

  faqs: governmentProcurementFaqs,

  relatedSectorSlugs: [
    "industrial-equipment",
    "electrical-energy",
    "fire-protection",
    "construction",
    "healthcare",
    "global-sourcing",
  ],

  seo: {
    title_en: "Government & Public-Sector Procurement in Egypt",
    title_ar: "التوريدات الحكومية والعامة في مصر",
    description_en:
      "Government and public-sector procurement based on tender requirements, BOQs and technical specifications. GOLTENS sources products and equipment according to customer-provided requirements.",
    description_ar:
      "توريدات حكومية وعامة وفق متطلبات المناقصات وجداول الكميات والمواصفات الفنية. توفر GOLTENS المنتجات والمعدات وفق المتطلبات المقدمة من العميل.",
  },
};
