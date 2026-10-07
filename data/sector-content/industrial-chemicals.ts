import {
  industrialChemicalsFaqs,
  industrialChemicalsGuide,
  industrialChemicalsHero,
} from "@/data/sector-content/industrial-chemicals-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Industrial & Laboratory Chemicals' real content — no supplier or
 * manufacturer names, no authenticity, purity, concentration, quality or
 * document guarantees, no certification, regulatory or accreditation
 * claims, no testing, formulation, dosing, treatment-programme or
 * coating-design services, and no fabricated specifications or lead
 * times.
 *
 * This sector renders the chemical procurement and sourcing guide
 * (`equipmentGuide`, see `industrial-chemicals-guide.ts`) in the compact
 * guide layout (see `compact-guide-page.ts`) in place of the generic About /
 * Industries / Advantages / How We Work sections, so it carries no
 * `about`, `applications`, `advantages`, `howWeWork`, `catalogues` or
 * `projects` of its own, and no SEO keywords. GOLTENS prepares a quotation
 * against the customer's chemical list and specification; chemical
 * selection, dosage, formulation, compatibility, laboratory methods,
 * coating specification, safe handling and storage, and final technical
 * acceptance remain with the customer or responsible technical party.
 */
export const industrialChemicalsContent: SectorContent = {
  hero: industrialChemicalsHero,

  equipmentGuide: industrialChemicalsGuide,

  faqs: industrialChemicalsFaqs,

  seo: {
    title_en: "Industrial & Laboratory Chemicals in Egypt",
    title_ar: "الكيماويات الصناعية والمعملية في مصر",
    description_en:
      "Laboratory and industrial chemicals sourced according to customer specifications, including formaldehyde/formalin, resins, water-treatment chemicals and corrosion-protection materials.",
    description_ar:
      "توريد الكيماويات المعملية والصناعية وفق المواصفات المقدمة من العميل، بما يشمل الفورمالدهيد والفورمالين والراتنجات وكيماويات معالجة المياه ومواد الحماية من التآكل.",
  },
};
