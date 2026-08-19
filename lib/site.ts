export const siteName = "GOLTENS GENERAL SUPPLIES";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.goltenssupplies.com";

// Real, confirmed company contact details — the single source of truth for
// every place they're displayed (Header, Contact section, RFQ page, Footer,
// mobile menu, structured data). Do not duplicate these values elsewhere.
export const contactEmail = "info@goltenssupplies.com";
export const contactPhoneDisplay = "+20 122 560 0983";
export const contactPhoneHref = "tel:+201225600983";
export const contactWhatsAppHref = "https://wa.me/201225600983";

// Sales inbox — where quote/contact form submissions are routed (see
// `RFQ_NOTIFICATION_EMAIL` fallback in `lib/actions/submit-*.ts`).
export const salesEmail = "sales@goltenssupplies.com";

/**
 * A `wa.me` deep link pre-filled with `message` — a secondary, quick-contact
 * channel alongside the site's real quote/contact forms (which stay the
 * primary path: every "Request a Quote" / "Contact Us" CTA keeps the
 * visitor on-site). Without a message, equals `contactWhatsAppHref`.
 */
export function buildWhatsAppHref(message?: string) {
  if (!message) return contactWhatsAppHref;
  return `${contactWhatsAppHref}?text=${encodeURIComponent(message)}`;
}
