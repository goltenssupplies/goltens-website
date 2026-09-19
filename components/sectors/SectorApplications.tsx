import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const STAGGER_SECONDS = 0.05;

export interface SectorApplicationItem {
  title: string;
  icon: LucideIcon;
  /** Optional supporting line — no current sector content sets this; supported for forward compatibility with `SectorApplication.description_en/ar`. */
  description?: string;
}

export interface SectorApplicationsProps {
  title: string;
  items: SectorApplicationItem[];
}

/**
 * A sector's own curated "where GOLTENS supplies this" industries/settings
 * list (`SectorContent.applications`), rendered under the sector's
 * "Industries We Serve" heading in place of the sitewide generic list. The
 * page resolves `items` before rendering this — a sector's own
 * `applications` when defined, or the sitewide generic list otherwise —
 * same "caller resolves, component doesn't know or care" contract as
 * `SectorAdvantages`. Renders nothing if `items` is empty (same guard
 * `RelatedSectors` uses) rather than an empty heading over an empty grid.
 */
export function SectorApplications({ title, items }: SectorApplicationsProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>
      <Grid columns={4} gap="md">
        {items.map(({ title: itemTitle, icon: Icon, description }, index) => (
          <Reveal key={itemTitle} delay={index * STAGGER_SECONDS}>
            <Card
              variant="glass"
              padding="md"
              className="border-gold/15 flex h-full flex-col items-start gap-3"
            >
              <span
                aria-hidden="true"
                className="bg-gold/10 text-gold flex size-11 items-center justify-center rounded-xl"
              >
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <Text weight="medium" tone="inverse">
                {itemTitle}
              </Text>
              {description && (
                <Text size="sm" tone="inverse" className="opacity-65">
                  {description}
                </Text>
              )}
            </Card>
          </Reveal>
        ))}
      </Grid>
    </div>
  );
}
