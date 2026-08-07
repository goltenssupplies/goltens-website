import Image from "next/image";
import { ArrowRight } from "lucide-react";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { getSectorImage } from "@/lib/sectors";
import { cn } from "@/lib/utils";

const STAGGER_SECONDS = 0.05;

export interface KnowledgeRelatedListProps {
  items: KnowledgeCardItem[];
}

/**
 * A clean vertical "Related Articles" list — a small thumbnail, title,
 * summary, and reading time per row, divided by hairlines, instead of the
 * large `KnowledgeCard` grid `KnowledgeGrid` renders elsewhere. Only used
 * for a single article's own related-reading list, where a compact,
 * scannable list reads better than another row of big cards.
 */
export function KnowledgeRelatedList({ items }: KnowledgeRelatedListProps) {
  if (items.length === 0) return null;

  return (
    <div className="divide-canvas/10 border-canvas/10 mx-auto max-w-3xl divide-y border-t">
      {items.map((item, index) => (
        <Reveal key={item.slug} delay={index * STAGGER_SECONDS}>
          <Link
            href={`/knowledge/${item.slug}`}
            className="group flex items-center gap-5 py-5"
          >
            <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl sm:w-36">
              <Image
                src={getSectorImage(item.coverImage)}
                alt=""
                fill
                loading="lazy"
                sizes="144px"
                className="object-cover contrast-110 saturate-105 sepia-[0.08] transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <Stack gap="xs" className="min-w-0 flex-1">
              <Text
                size="xs"
                weight="semibold"
                tone="inverse"
                className="text-gold opacity-80 tracking-wide uppercase"
              >
                {item.typeLabel}
              </Text>
              <Text
                weight="semibold"
                tone="inverse"
                className="group-hover:text-gold truncate transition-colors"
              >
                {item.title}
              </Text>
              <Text
                size="sm"
                tone="inverse"
                className="line-clamp-2 opacity-70"
              >
                {item.summary}
              </Text>
              <Text size="xs" tone="inverse" className="opacity-50">
                {item.readingTimeLabel}
              </Text>
            </Stack>
            <ArrowRight
              aria-hidden="true"
              className={cn(
                "text-gold size-5 shrink-0 transition-transform duration-300",
                "group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1",
              )}
            />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
