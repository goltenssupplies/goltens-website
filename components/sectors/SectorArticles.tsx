import Image from "next/image";
import { ArrowRight, Newspaper } from "lucide-react";

import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { getSectorImage } from "@/lib/sectors";
import { cn } from "@/lib/utils";

const STAGGER_SECONDS = 0.05;

export interface SectorArticleItem {
  slug: string;
  title: string;
  summary: string;
  coverImage: string | null;
  /** Overrides the component-level `sectorSlug` for this item's link — lets a cross-sector list (e.g. a Project Solution's Knowledge Center section) mix articles from more than one sector. Omit for the common single-sector case. */
  sectorSlug?: string;
}

export interface SectorArticlesProps {
  title: string;
  items: SectorArticleItem[];
  sectorSlug: string;
  readMoreLabel: string;
  emptyTitle: string;
  emptyBody: string;
}

/**
 * "Knowledge Center" — cover/title/summary/Read More cards, unlimited via
 * `items`. Each article's SEO-friendly URL is
 * `/sectors/<sectorSlug>/articles/<slug>` (see the nested route). Honest
 * empty state today — no real article content exists for any sector yet —
 * rather than fabricated filler.
 */
export function SectorArticles({
  title,
  items,
  sectorSlug,
  readMoreLabel,
  emptyTitle,
  emptyBody,
}: SectorArticlesProps) {
  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.slug} delay={index * STAGGER_SECONDS} className="h-full">
              <Link
                href={`/sectors/${item.sectorSlug ?? sectorSlug}/articles/${item.slug}`}
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
                    <span className="text-gold inline-flex w-fit items-center gap-1.5 text-sm font-semibold">
                      {readMoreLabel}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      />
                    </span>
                  </Stack>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      ) : (
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
              <Newspaper aria-hidden="true" className="size-6" />
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
      )}
    </div>
  );
}
