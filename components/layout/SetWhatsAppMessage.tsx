"use client";

import { useEffect } from "react";

import { useWhatsAppMessage } from "@/components/layout/WhatsAppMessageContext";

interface SetWhatsAppMessageProps {
  /** Final, already-interpolated message string — the page computes this itself (e.g. `tCommon("whatsappProductMessage", { productName: name })`) from data it already has; this component does no lookup of its own. */
  text: string;
}

/**
 * Drop into a product/sector page to override the floating WhatsApp
 * button's message for as long as that page stays mounted. Renders
 * nothing. On unmount (navigating to any other page) the cleanup reverts
 * the override to `null`, so `WhatsAppButtonLoader` falls back to the
 * general message — React runs this cleanup before mounting whatever
 * replaces this page in the same commit, so there's no visible flash of
 * the wrong message and no extra state (ids/timestamps) is needed to
 * resolve ordering. Navigating between two pages that both render this
 * component (e.g. Product A -> Product B) re-runs the effect with the new
 * `text` directly, without an intermediate `null`.
 */
export function SetWhatsAppMessage({ text }: SetWhatsAppMessageProps) {
  const { setMessage } = useWhatsAppMessage();

  useEffect(() => {
    setMessage(text);
    return () => setMessage(null);
  }, [text, setMessage]);

  return null;
}
