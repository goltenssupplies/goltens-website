import {
  constructionFaqs,
  constructionGuide,
  constructionHero,
} from "@/data/sector-content/construction-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Construction & Infrastructure Materials' real content — no invented
 * certifications, quality or authenticity claims, no named projects or
 * customers, no design, calculation, installation or execution services,
 * and no fabricated specifications or lead times.
 *
 * This sector renders the construction-material procurement and BOQ
 * response guide (`equipmentGuide`, see `construction-guide.ts`) in the
 * compact guide layout (see `compact-guide-page.ts`) in place of the
 * generic About / Industries / Advantages / How We Work sections, so it
 * carries no `about`, `applications`, `advantages`, `howWeWork`,
 * `catalogues` or `projects` of its own, and no SEO keywords. GOLTENS
 * prepares a quotation against the customer's documents; structural
 * design, material selection, mix design, quantities, consultant approval
 * and final technical acceptance remain with the customer, contractor,
 * consultant or engineer of record.
 */
export const constructionContent: SectorContent = {
  hero: constructionHero,

  equipmentGuide: constructionGuide,

  faqs: constructionFaqs,

  seo: {
    title_en: "Construction & Infrastructure Materials in Egypt",
    title_ar: "مواد البناء والبنية التحتية في مصر",
    description_en:
      "Construction and infrastructure materials quoted against your BOQ, material schedule and project specification — cement and concrete, steel, waterproofing and insulation, pipes, drainage and road materials.",
    description_ar:
      "مواد البناء والبنية التحتية يتم إعداد عروض أسعارها وفق جدول الكميات وجدول المواد ومواصفات المشروع — الأسمنت والخرسانة، والحديد، والعزل المائي والحراري، والمواسير، والصرف، ومواد الطرق.",
  },
};
