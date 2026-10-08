import {
  healthcareFaqs,
  healthcareGuide,
  healthcareHero,
} from "@/data/sector-content/healthcare-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Hospital Equipment & Medical Supplies' real content — no authenticity,
 * quality, trust or availability claims, no certification, approval,
 * registration, regulatory or standards claims, no clinical, efficacy,
 * accuracy or sterilization-performance claims, no installation,
 * commissioning, calibration, maintenance or support services, no client
 * references, no framework or recurring-supply commitments, no tender
 * preparation or submission, and no fabricated specifications or lead
 * times.
 *
 * This sector renders the hospital equipment procurement guide
 * (`equipmentGuide`, see `healthcare-guide.ts`) in the compact guide layout
 * (see `compact-guide-page.ts`) in place of the generic About / Industries
 * / Advantages / How We Work sections, so it carries no `about`,
 * `applications`, `advantages`, `howWeWork`, `catalogues` or `projects` of
 * its own, and no SEO keywords. GOLTENS prepares a quotation against the
 * customer's specification, BOQ, equipment schedule or tender list;
 * clinical suitability, regulatory requirements, equipment planning and
 * final acceptance remain with the customer, consultant or responsible
 * healthcare/technical authority.
 *
 * The sector's 18 product records stay non-public; the 27 retired legacy
 * records and their redirects are untouched (see
 * `lib/legacy-healthcare-product-redirects.ts`).
 */
export const healthcareContent: SectorContent = {
  hero: healthcareHero,

  equipmentGuide: healthcareGuide,

  faqs: healthcareFaqs,

  seo: {
    title_en: "Hospital Equipment & Medical Supplies in Egypt",
    title_ar: "تجهيزات المستشفيات والمستلزمات الطبية في مصر",
    description_en:
      "Hospital beds, medical furniture, patient monitoring, respiratory, sterilization and operating-room equipment, and surgical supplies, quoted against your specification, BOQ or tender schedule.",
    description_ar:
      "أسرّة المستشفيات والأثاث الطبي وأجهزة مراقبة المرضى ومعدات التنفس والتعقيم وغرف العمليات والمستلزمات الجراحية، يتم إعداد عروض أسعارها وفق مواصفاتكم أو جدول الكميات أو جدول المناقصة.",
  },
};
