import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card, cardGlassHover } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import type { KnowledgeType } from "@/data/knowledge/types";
import { Link } from "@/i18n/navigation";
import { KNOWLEDGE_TYPE_ICONS } from "@/lib/knowledge-icons";
import { getSectorImage } from "@/lib/sectors";
import { cn } from "@/lib/utils";

export interface KnowledgeCardItem {
  slug: string;
  type: KnowledgeType;
  title: string;
  summary: string;
  coverImage: string | null;
  /** Already-localized type label and reading-time string — resolved by the caller via `getTranslations`, same "components take plain localized props" contract every other card on the site follows. */
  typeLabel: string;
  readingTimeLabel: string;
}

export interface KnowledgeCardProps {
  item: KnowledgeCardItem;
  readMoreLabel: string;
  delay?: number;
}

/**
 * A single Knowledge Platform item card: cover photo with a type badge,
 * title/summary, and a reading-time / "Read More" footer row — the same
 * glass card + hover treatment `SectorArticles` already uses for the
 * sector-scoped Knowledge Center, generalized across every content type.
 */
export function KnowledgeCard({
  item,
  readMoreLabel,
  delay = 0,
}: KnowledgeCardProps) {
  const Icon = KNOWLEDGE_TYPE_ICONS[item.type];

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/knowledge/${item.slug}`}
        className="group flex h-full cursor-pointer flex-col"
      >
        <Card
          variant="glass"
          padding="none"
          className={cn("flex h-full flex-col overflow-hidden", cardGlassHover)}
        >
          <div className="relative aspect-video shrink-0 overflow-hidden">
            <Image
              src={getSectorImage(item.coverImage)}
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover contrast-110 saturate-105 sepia-[0.08] transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <Badge
              tone="accent"
              className="absolute start-4 top-4 items-center gap-1.5 backdrop-blur-sm"
            >
              {Icon && <Icon aria-hidden="true" className="size-3.5" />}
              {item.typeLabel}
            </Badge>
          </div>
          <Stack gap="sm" className="flex-1 justify-between p-6">
            <Stack gap="xs">
              <Text weight="semibold" tone="inverse">
                {item.title}
              </Text>
              <Text size="sm" tone="inverse" className="opacity-70">
                {item.summary}
              </Text>
            </Stack>
            <Stack direction="row" align="center" justify="between">
              <Text size="xs" tone="inverse" className="opacity-50">
                {item.readingTimeLabel}
              </Text>
              <span className="text-gold inline-flex w-fit items-center gap-1.5 text-sm font-semibold">
                {readMoreLabel}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </span>
            </Stack>
          </Stack>
        </Card>
      </Link>
    </Reveal>
  );
}
