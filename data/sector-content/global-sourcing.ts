import {
  globalSourcingFaqs,
  globalSourcingGuide,
  globalSourcingHero,
} from "@/data/sector-content/global-sourcing-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Global Sourcing & Hard-to-Source Procurement's real content — a
 * request-led sourcing service, not a product catalogue: no OEM,
 * authorised-distributor or agent claims, no authenticity, trust or
 * supplier-network wording, no availability, stock, urgency or delivery
 * promises, no manufacturing, design or engineering, no customs, logistics
 * or tender-document services, no certification or compliance guarantees,
 * no client references, and no fabricated specifications or lead times.
 *
 * This sector renders the sourcing request guide (`equipmentGuide`, see
 * `global-sourcing-guide.ts`) in the compact guide layout (see
 * `compact-guide-page.ts`) in place of the generic About / Industries /
 * Advantages sections, so it carries no `about`, `applications`,
 * `advantages`, `howWeWork`, `catalogues` or `projects` of its own, and no
 * SEO keywords. Its three families are sourcing families, so the sector's
 * 15 internal product records stay non-public and unlinked.
 */
export const globalSourcingContent: SectorContent = {
  hero: globalSourcingHero,

  equipmentGuide: globalSourcingGuide,

  faqs: globalSourcingFaqs,

  seo: {
    title_en: "Global Sourcing & Hard-to-Source Items in Egypt",
    title_ar: "التوريد العالمي والأصناف صعبة التوفير في مصر",
    description_en:
      "Send a part number, model, nameplate, photo, drawing or specification. GOLTENS sources hard-to-find, obsolete and non-standard items against the information you provide.",
    description_ar:
      "أرسلوا رقم القطعة أو الطراز أو بيانات لوحة الصنف أو صورة أو رسمًا أو مواصفات، وتوفر GOLTENS الأصناف صعبة التوفير والمتوقفة وغير القياسية وفق المعلومات المقدمة.",
  },
};
