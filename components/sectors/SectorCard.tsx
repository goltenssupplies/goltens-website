import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { getSectorImage, SECTOR_ICONS } from "@/lib/sectors";
import { cn } from "@/lib/utils";

export interface SectorCardItem {
  slug: string;
  title: string;
  description: string;
  image: string | null;
  icon: string;
}

export interface SectorCardProps {
  item: SectorCardItem;
  delay?: number;
  exploreLabel: string;
  /** Anchor id for legacy same-page deep links (e.g. the Hero's sector trust bar). Omit unless a specific slug needs one. */
  id?: string;
  className?: string;
  /** Link prefix — defaults to "/sectors" (unchanged for every existing caller). Pass "/solutions" to reuse this exact card for Project Solutions. */
  hrefBase?: string;
}

/**
 * A single Procurement Sector card: compact 4:3 photo with a dark premium
 * overlay, a small glass icon badge floating over it, a 2-line-clamped
 * title (the dominant text element) with a 1-line-clamped description
 * underneath, and an "Explore Sector →" row revealed on hover — glass
 * surface, gold border and glow on hover (`cardGlassHover`), image zoom,
 * and a lift, all on one click target linking to `<hrefBase>/<slug>`
 * (default `/sectors/<slug>`). Both text blocks are clamped so every card in
 * the grid — 10 sectors, 5×2 on desktop — lands at the exact same height.
 */
export function SectorCard({
  item,
  delay = 0,
  exploreLabel,
  id,
  className,
  hrefBase = "/sectors",
}: SectorCardProps) {
  const Icon = SECTOR_ICONS[item.icon];

  return (
    <Reveal duration={0.7} delay={delay} className={cn("h-full", className)}>
      <Link
        id={id}
        href={`${hrefBase}/${item.slug}`}
        className="group flex h-full cursor-pointer flex-col"
      >
        <Card
          variant="glass"
          padding="none"
          className={cn("flex h-full flex-col overflow-hidden", cardGlassHover)}
        >
          <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
            <Image
              src={getSectorImage(item.image)}
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
              loading="lazy"
              className="object-cover contrast-110 saturate-105 sepia-[0.08] transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="from-ink/60 via-ink/5 group-hover:via-ink/15 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent transition-colors duration-300"
            />
            {Icon && (
              <span
                aria-hidden="true"
                className="border-gold/30 bg-ink/40 text-gold absolute start-3 top-3 flex size-8 items-center justify-center rounded-lg border backdrop-blur-md transition-transform duration-300 ease-out group-hover:scale-110"
              >
                <Icon aria-hidden="true" className="size-4" />
              </span>
            )}
          </div>

          <Stack gap="sm" className="flex-1 justify-between p-5">
            <Stack gap="xs">
              <Heading
                level={3}
                size={5}
                tone="inverse"
                className="group-hover:text-gold line-clamp-2 text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl rtl:tracking-normal"
              >
                {item.title}
              </Heading>
              <Text
                size="xs"
                tone="inverse"
                className="line-clamp-1 opacity-55"
              >
                {item.description}
              </Text>
            </Stack>

            <span
              className={cn(
                "text-gold inline-flex items-center gap-1.5 text-xs font-semibold",
                "-translate-y-1 opacity-0 transition-all duration-300",
                "group-hover:translate-y-0 group-hover:opacity-100",
              )}
            >
              {exploreLabel}
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </span>
          </Stack>
        </Card>
      </Link>
    </Reveal>
  );
}
