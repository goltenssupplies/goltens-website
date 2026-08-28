interface FloatingWhatsAppButtonProps {
  /** Pre-built `wa.me` link — see `buildWhatsAppHref()` in `@/lib/site`. */
  href: string;
  /** Required — an icon-only control must always describe its action to assistive tech. */
  ariaLabel: string;
}

/**
 * Persistent floating launcher for WhatsApp Business — present on every
 * page, independent of the RFQ cart/Comparison state that gates
 * `UtilityTray`. Pinned to the opposite corner (`start` vs. `UtilityTray`'s
 * `end`) so the two floating controls never overlap in either LTR or RTL,
 * and never cover the RFQ/Compare launchers when those appear. Plain `<a>`
 * (not the locale-aware `Link` `Button`/`IconButton` wrap) since this is a
 * real external destination — same pattern `ContactCard` already uses for
 * `tel:`/`mailto:`/WhatsApp links — opened in a new tab so a visitor never
 * loses their place on the site.
 *
 * No `"use client"`: this is static markup with no interactivity beyond a
 * native link, so it server-renders directly into the initial HTML instead
 * of needing `UtilityTrayLoader`'s deferred-mount treatment (that exists
 * specifically for `UtilityTray`'s client-only cart-count state).
 */
export function FloatingWhatsAppButton({
  href,
  ariaLabel,
}: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="focus-visible:outline-accent fixed start-6 bottom-6 z-40 flex size-13 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-200 ease-out hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-6"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.497-.669-.506-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 2C6.478 2 2 6.478 2 12.001c0 2.13.674 4.14 1.813 5.771L2.35 22l4.301-1.42A9.933 9.933 0 0 0 12.001 22C17.523 22 22 17.523 22 12.001 22 6.478 17.523 2 12.001 2Zm5.847 15.848a8.31 8.31 0 0 1-5.847 2.437 8.312 8.312 0 0 1-4.226-1.157l-.303-.18-3.146 1.04 1.06-3.061-.198-.314A8.29 8.29 0 0 1 3.71 12a8.29 8.29 0 0 1 8.29-8.29 8.29 8.29 0 0 1 8.29 8.29 8.29 8.29 0 0 1-2.442 5.848Z" />
      </svg>
    </a>
  );
}
