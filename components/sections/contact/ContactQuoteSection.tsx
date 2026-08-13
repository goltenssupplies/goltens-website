import type { ReactNode } from "react";

import { ContactHeroImage } from "@/components/sections/contact/ContactHeroImage";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export interface ContactQuoteSectionProps {
  locale: Locale;
  /**
   * Column split for the row, as a Tailwind class pair (kept as literal
   * strings, not interpolated, so Tailwind's compiler can see them).
   * "photo-lead" (68/32) is the approved `/contact` proportions, reused by
   * every `SectorQuoteCTA` quote block. "balanced" (45/55) is `/rfq`'s
   * pre-existing proportions — kept as-is since the cart needs more room
   * than a plain form does.
   */
  ratio?: "photo-lead" | "balanced";
  /** The form/cart that goes in the physical-right column. */
  children: ReactNode;
  className?: string;
}

const RATIO_CLASS: Record<
  NonNullable<ContactQuoteSectionProps["ratio"]>,
  string
> = {
  "photo-lead": "lg:grid-cols-[minmax(0,68fr)_minmax(0,32fr)] lg:gap-10",
  balanced: "lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-24",
};

/**
 * The site's one approved contact/quote row: the photo + its three
 * quick-contact cards (`ContactHeroImage`) pinned to the physical left,
 * and an arbitrary right-hand slot (a `ContactForm`, `SectorQuoteCTA`'s
 * enterprise form, or `/rfq`'s cart) pinned to the physical right —
 * regardless of locale/direction. Shared by `/contact`, `/rfq`, and
 * `SectorQuoteCTA` so the layout only has to be defined once; changing it
 * later means editing this one file.
 *
 * The outer row is forced `dir="ltr"` purely so column 1 (the photo)
 * always resolves to the physical left and column 2 (the slot) to the
 * physical right, while each column restores `dir="rtl"` for its own
 * Arabic content. On mobile this collapses to a single stacked column in
 * DOM order (photo + its contact cards, then the slot), unaffected by the
 * forced direction since block stacking never depends on it.
 */
export function ContactQuoteSection({
  locale,
  ratio = "photo-lead",
  children,
  className,
}: ContactQuoteSectionProps) {
  return (
    <div
      dir="ltr"
      className={cn("grid grid-cols-1 gap-16", RATIO_CLASS[ratio], className)}
    >
      <div dir="rtl">
        <Reveal>
          <ContactHeroImage locale={locale} />
        </Reveal>
      </div>

      <div dir="rtl">
        <Reveal delay={0.15}>{children}</Reveal>
      </div>
    </div>
  );
}
