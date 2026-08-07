import { SectorGrid } from "@/components/sectors/SectorGrid";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export interface RelatedSectorsProps {
  title: string;
  items: SectorCardItem[];
  exploreLabel: string;
  /** Passed through to `SectorGrid` — defaults to "/sectors". Pass "/solutions" to reuse this exact "Related X" block for a Project Solution's "Related Solutions" section. */
  hrefBase?: string;
}

/**
 * "Related Sectors" (or, via `hrefBase="/solutions"`, "Related Solutions")
 * — thin wrapper around the existing `SectorGrid`. The page resolves
 * `items` before rendering this: a sector's own curated
 * `relatedSectorSlugs` when set, or the next few other sectors by `order`
 * otherwise (same fallback shape a Solution's `relatedSolutionSlugs` uses)
 * — this component doesn't know or care which.
 */
export function RelatedSectors({ title, items, exploreLabel, hrefBase }: RelatedSectorsProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>
      <SectorGrid items={items} exploreLabel={exploreLabel} hrefBase={hrefBase} />
    </div>
  );
}
