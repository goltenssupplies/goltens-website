import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const STAGGER_SECONDS = 0.06;

export interface SectorAdvantageItem {
  title: string;
  icon: LucideIcon;
}

export interface SectorAdvantagesProps {
  title: string;
  items: SectorAdvantageItem[];
}

/**
 * "Why Choose GOLTENS" — premium icon cards. The page resolves `items`
 * before rendering this: a sector's own `advantages` when defined, or the
 * sitewide `whyChooseUs.items` (already-approved, reused rather than
 * invented) otherwise — this component doesn't know or care which.
 */
export function SectorAdvantages({ title, items }: SectorAdvantagesProps) {
  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>
      <Grid columns={3} gap="md">
        {items.map(({ title: itemTitle, icon: Icon }, index) => (
          <Reveal key={itemTitle} delay={index * STAGGER_SECONDS}>
            <Card
              variant="glass"
              padding="md"
              className="flex h-full flex-col items-start gap-3 border-gold/15"
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
            </Card>
          </Reveal>
        ))}
      </Grid>
    </div>
  );
}
