"use client";

import { useTranslations } from "next-intl";

import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";
import { useWhatsAppMessage } from "@/components/layout/WhatsAppMessageContext";
import { buildWhatsAppHref } from "@/lib/site";

/**
 * Reads the current page's WhatsApp message override from
 * `WhatsAppMessageContext` (set by `SetWhatsAppMessage` on product/sector
 * pages, `null` everywhere else) and renders the unmodified
 * `FloatingWhatsAppButton` with the resulting `href`/`ariaLabel` — the
 * button component itself stays props-only, exactly as before. Needs
 * `"use client"` for the context read, so this one small piece of the root
 * layout's tree is client-rendered — same shape as `UtilityTrayLoader`.
 */
export function WhatsAppButtonLoader() {
  const { message } = useWhatsAppMessage();
  const tCommon = useTranslations("common");
  const tContact = useTranslations("contact");

  const finalMessage = message ?? tCommon("whatsappFloatingMessage");
  const href = buildWhatsAppHref(finalMessage);

  return (
    <FloatingWhatsAppButton
      href={href}
      ariaLabel={tContact("whatsappAction")}
    />
  );
}
