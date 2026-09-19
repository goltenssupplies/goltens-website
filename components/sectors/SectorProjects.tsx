import Image from "next/image";

import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

const STAGGER_SECONDS = 0.06;

export interface SectorProjectItem {
  title: string;
  description: string;
  /** Resolved image — the page passes the project's own `image`, or the sector's own hero image when a project sets `image: null`, per `SectorProject`'s own contract. */
  image: string;
}

export interface SectorProjectsProps {
  title: string;
  items: SectorProjectItem[];
}

/**
 * "Projects We Serve" (`SectorContent.projects`) — the types of projects
 * GOLTENS supplies this sector for, each a short, honest description (not
 * a case study: no client names, quantities, or delivery claims are part
 * of this schema). Only fire-protection has this authored today. Renders
 * nothing when `items` is empty, same guard `RelatedSectors` uses, so an
 * unauthored sector never shows an empty heading.
 *
 * `SectorProject.recommendedBrandSlugs`/`recommendedProductSlugs` are
 * deliberately not rendered here — there is no `data/brands.ts` registry
 * in this codebase to resolve a brand slug against (confirmed absent), so
 * showing a raw slug string would be an unresolvable/unverifiable
 * reference rather than a real link. Revisit once a brand registry exists.
 */
export function SectorProjects({ title, items }: SectorProjectsProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>
      <Grid columns={3} gap="md">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * STAGGER_SECONDS}>
            <Card
              variant="glass"
              padding="none"
              className="border-gold/15 flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="from-ink/70 via-ink/10 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
                />
              </div>
              <Stack gap="xs" className="p-5">
                <Text weight="semibold" tone="inverse">
                  {item.title}
                </Text>
                <Text size="sm" tone="inverse" className="opacity-65">
                  {item.description}
                </Text>
              </Stack>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </div>
  );
}
