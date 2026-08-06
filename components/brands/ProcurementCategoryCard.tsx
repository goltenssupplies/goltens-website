import { ArrowRight } from "lucide-react";

import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { SECTOR_ICONS } from "@/lib/sectors";
import { cn } from "@/lib/utils";

export interface ProcurementCategoryCardItem {
  sectorSlug: string;
  title: string;
  description: string;
  /** Icon name, resolved via `SECTOR_ICONS` — the same lookup `data/sectors.ts` icons use. */
  icon: string;
}

export interface ProcurementCategoryCardProps {
  item: ProcurementCategoryCardItem;
  viewCapabilityLabel: string;
  delay?: number;
}

/**
 * A procurement-capability card for the homepage's "Global Procurement
 * Network" section — icon, category title, short description (reused
 * straight from the matching sector's real copy), and a "View Capability"
 * link into that sector's own page. Sized to its content, not stretched —
 * no oversized empty card.
 */
export function ProcurementCategoryCard({
  item,
  viewCapabilityLabel,
  delay = 0,
}: ProcurementCategoryCardProps) {
  const Icon = SECTOR_ICONS[item.icon];

  return (
    <Reveal duration={0.6} delay={delay} className="h-full">
      <Card
        variant="glass"
        padding="lg"
        className={cn(
          "border-gold/15 flex h-full flex-col gap-5",
          cardGlassHover,
        )}
      >
        {Icon && (
          <span
            aria-hidden="true"
            className="bg-gold/10 text-gold flex size-12 items-center justify-center rounded-2xl"
          >
            <Icon aria-hidden="true" className="size-6" />
          </span>
        )}

        <Stack gap="xs">
          <Heading level={3} size={4} tone="inverse" className="font-bold">
            {item.title}
          </Heading>
          <Text size="sm" tone="inverse" className="opacity-70">
            {item.description}
          </Text>
        </Stack>

        <Link
          href={`/sectors/${item.sectorSlug}`}
          className="text-gold group/link mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold"
        >
          {viewCapabilityLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1"
          />
        </Link>
      </Card>
    </Reveal>
  );
}
