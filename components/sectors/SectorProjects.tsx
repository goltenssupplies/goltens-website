import Image from "next/image";

import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getSectorImage } from "@/lib/sectors";
import { cn } from "@/lib/utils";

const STAGGER_SECONDS = 0.05;

export interface SectorProjectItem {
  title: string;
  description: string;
  image: string | null;
}

export interface SectorProjectsProps {
  title: string;
  items: SectorProjectItem[];
}

/**
 * "Projects We Serve" — the industries/project types this sector's supply
 * chain is set up for, as image/title/description cards (same card
 * language as `SectorProducts`/`SectorArticles`). The page only renders
 * this component when a sector has curated `projects`; there's no generic
 * fallback list, matching `SectorApplications`'s convention of never
 * showing irrelevant content for a sector.
 */
export function SectorProjects({ title, items }: SectorProjectsProps) {
  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * STAGGER_SECONDS}
            className="h-full"
          >
            <Card
              variant="glass"
              padding="none"
              className={cn(
                "flex h-full flex-col overflow-hidden",
                cardGlassHover,
              )}
            >
              <div className="relative aspect-video shrink-0 overflow-hidden">
                <Image
                  src={getSectorImage(item.image)}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover contrast-110 saturate-105 sepia-[0.08]"
                />
                <div
                  aria-hidden="true"
                  className="from-ink/60 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
                />
              </div>
              <Stack gap="sm" className="flex-1 justify-between p-6">
                <Stack gap="xs">
                  <Text weight="semibold" tone="inverse">
                    {item.title}
                  </Text>
                  <Text size="sm" tone="inverse" className="opacity-70">
                    {item.description}
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
