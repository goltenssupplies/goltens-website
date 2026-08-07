import type { Solution } from "@/data/solutions/types";

/** Hotels — see `hospitals.ts` for the full reference implementation. */
export const hotelsSolution: Solution = {
  id: "hotels",
  slug: "hotels",
  title_en: "Hotels",
  title_ar: "الفنادق",
  description_en:
    "GOLTENS supplies fire protection, emergency lighting, and electrical equipment for hotels and resorts, matched to hospitality fire codes and each property's guest-occupancy requirements.",
  description_ar:
    "توفر GOLTENS معدات مكافحة الحريق وإضاءة الطوارئ والمعدات الكهربائية للفنادق والمنتجعات، وفق أكواد الحريق الخاصة بالقطاع الفندقي ومتطلبات إشغال النزلاء في كل منشأة.",
  heroImage: null,
  icon: "Hotel",
  targetIndustries_en: ["Hotels & Resorts", "Hospitality Groups", "Serviced Apartments"],
  targetIndustries_ar: ["الفنادق والمنتجعات", "المجموعات الفندقية", "الشقق الفندقية"],
  procurementScope_en: ["Fire Protection Systems", "Emergency Lighting", "Electrical & Automation"],
  procurementScope_ar: ["أنظمة مكافحة الحريق", "إضاءة الطوارئ", "الكهرباء والتحكم الآلي"],
  relatedSectorSlugs: ["fire-protection", "electrical-energy"],
  relatedSolutionSlugs: ["commercial-buildings", "airports", "universities"],
};
