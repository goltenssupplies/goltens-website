import { BookOpen } from "lucide-react";

import {
  KnowledgeCard,
  type KnowledgeCardItem,
} from "@/components/knowledge/KnowledgeCard";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

const STAGGER_SECONDS = 0.05;

export interface KnowledgeGridProps {
  items: KnowledgeCardItem[];
  readMoreLabel: string;
  emptyTitle: string;
  emptyBody: string;
}

/**
 * A `KnowledgeCard` grid with an honest empty state — used by the `/knowledge`
 * hub, its type filter, and every "Related Knowledge" section elsewhere on
 * the site. Never shows fabricated placeholder items when `items` is [].
 */
export function KnowledgeGrid({
  items,
  readMoreLabel,
  emptyTitle,
  emptyBody,
}: KnowledgeGridProps) {
  if (items.length === 0) {
    return (
      <Reveal>
        <Card
          variant="glass"
          padding="lg"
          className="border-gold/15 flex flex-col items-center gap-4 py-14 text-center"
        >
          <span
            aria-hidden="true"
            className="bg-gold/10 text-gold flex size-12 items-center justify-center rounded-2xl"
          >
            <BookOpen aria-hidden="true" className="size-6" />
          </span>
          <Stack gap="xs" align="center" className="max-w-md">
            <Text weight="semibold" tone="inverse">
              {emptyTitle}
            </Text>
            <Text size="sm" tone="inverse" className="opacity-70">
              {emptyBody}
            </Text>
          </Stack>
        </Card>
      </Reveal>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <KnowledgeCard
          key={item.slug}
          item={item}
          readMoreLabel={readMoreLabel}
          delay={index * STAGGER_SECONDS}
        />
      ))}
    </div>
  );
}
