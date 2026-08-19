import {
  SectorCard,
  type SectorCardItem,
} from "@/components/sectors/SectorCard";
import { cn } from "@/lib/utils";

const STAGGER_SECONDS = 0.08;

export interface SectorGridProps {
  items: SectorCardItem[];
  exploreLabel: string;
  /** Anchor ids for legacy same-page deep links, keyed by sector slug. Omit unless needed. */
  anchorIdBySlug?: Record<string, string>;
  className?: string;
  /** Link prefix passed through to every `SectorCard` — defaults to "/sectors". Pass "/solutions" to reuse this exact grid for Project Solutions. */
  hrefBase?: string;
}

/**
 * Responsive Procurement Sectors grid — 1 column on mobile, 2 on tablet
 * (sm), 5 on desktop (lg), forming the exact 5×2 layout for the 10
 * Procurement Sectors. Shared between the homepage teaser, the `/sectors`
 * listing page, each detail page's "Related Sectors" block, and (via
 * `hrefBase="/solutions"`) the Project Solutions listing/related sections.
 */
export function SectorGrid({
  items,
  exploreLabel,
  anchorIdBySlug,
  className,
  hrefBase,
}: SectorGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5",
        className,
      )}
    >
      {items.map((item, index) => (
        <SectorCard
          key={item.slug}
          item={item}
          delay={index * STAGGER_SECONDS}
          exploreLabel={exploreLabel}
          id={anchorIdBySlug?.[item.slug]}
          hrefBase={hrefBase}
        />
      ))}
    </div>
  );
}
