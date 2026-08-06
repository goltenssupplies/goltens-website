import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface GlassContactCardProps {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  /** Wraps the card in a link, e.g. `tel:`, `mailto:`, or a WhatsApp URL. */
  href?: string;
  className?: string;
}

/**
 * Premium dark-glass contact card for use over dark or photo grounds
 * (the homepage's closing section, the Contact page hero photo) —
 * deliberately its own component rather than a new `ContactCard` tone,
 * since `ContactCard` is tuned for the RFQ page's light background and a
 * much quieter treatment. Uses the `gold` token (not the sitewide
 * `accent`) for its icon and hover glow, and a 16px radius that's larger
 * than the rest of the site's `radius-sm`/`radius-md` system — an
 * intentional, explicitly-requested exception scoped to these cards.
 */
export function GlassContactCard({
  icon,
  label,
  value,
  href,
  className,
}: GlassContactCardProps) {
  const content = (
    <div
      className={cn(
        "group border-canvas/10 bg-canvas/[0.04] flex h-full flex-col items-center gap-4 rounded-2xl border p-8 text-center backdrop-blur-sm",
        "shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out",
        href &&
          "hover:border-gold/40 hover:bg-canvas/[0.07] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(212,160,23,0.18)]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="border-gold/25 bg-gold/10 text-gold group-hover:bg-gold/15 flex size-16 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300"
      >
        {icon}
      </span>
      <div className="flex flex-col gap-2">
        <span className="text-canvas/50 text-xs font-semibold tracking-[0.14em] uppercase">
          {label}
        </span>
        <span className="text-canvas text-lg font-semibold">{value}</span>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} className="block h-full">
      {content}
    </a>
  );
}
