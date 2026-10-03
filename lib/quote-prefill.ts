/**
 * Equipment-specific quotation prefill — a tiny window `CustomEvent`
 * contract between a page's "Request a quotation for …" links and the
 * site's single `ContactForm`. It deliberately avoids query parameters (no
 * effect on canonical URLs or caching) and needs no shared React context:
 * the link is still a plain `#request-quote` anchor, so it keeps working
 * when JavaScript is unavailable — the form simply keeps its default value.
 */
export const QUOTE_PREFILL_EVENT = "goltens:quote-prefill";

export interface QuotePrefillDetail {
  /** Value for the form's "Required Products" field. */
  productCategory: string;
}

export function dispatchQuotePrefill(detail: QuotePrefillDetail) {
  window.dispatchEvent(
    new CustomEvent<QuotePrefillDetail>(QUOTE_PREFILL_EVENT, { detail }),
  );
}
