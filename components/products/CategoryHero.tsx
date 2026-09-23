import Image from "next/image";

import { CategoryBreadcrumb } from "@/components/products/CategoryBreadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getSectorImage } from "@/lib/sectors";

export interface CategoryHeroProps {
  title: string;
  /** Real, category-specific intro copy — omit entirely until genuinely authored (`ProductCategory.description_en/ar`); never a generic filler paragraph. */
  description?: string;
  image: string | null;
  homeLabel: string;
  sectorsLabel: string;
  sectorLabel: string;
  sectorHref: string;
  navLabel: string;
  requestQuoteLabel: string;
  /** Anchor id (without "#") of the page's Request Quotation section. */
  requestQuoteHref: string;
}

/**
 * Category detail hero — the same full-bleed photo + dark gradient + grid
 * overlay + `SectionParticles` treatment `SectorHero`/`ProductHero` both
 * use, with a `CategoryBreadcrumb` (Home / Sectors / [sector] / [category])
 * in place of their breadcrumbs. `image` falls back to the sector's own
 * hero image via `getSectorImage` — the caller resolves the category's own
 * `image` (rarely set today) or a real product photo from the category
 * first, same layered-fallback discipline `ProductCardImage` already uses,
 * never a fabricated stand-in.
 */
export function CategoryHero({
  title,
  description,
  image,
  homeLabel,
  sectorsLabel,
  sectorLabel,
  sectorHref,
  navLabel,
  requestQuoteLabel,
  requestQuoteHref,
}: CategoryHeroProps) {
  return (
    <div className="relative flex min-h-[420px] flex-col justify-end pt-24 pb-12 sm:min-h-[480px] lg:pt-28 lg:pb-16">
      <Image
        src={getSectorImage(image)}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover contrast-110 saturate-105 sepia-[0.08]"
      />
      <div
        aria-hidden="true"
        className="from-ink via-ink/50 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
      />
      <div
        aria-hidden="true"
        className="bg-grid-pattern text-canvas/[0.06] pointer-events-none absolute inset-0"
      />
      <SectionParticles />

      <Container className="relative">
        <CategoryBreadcrumb
          homeLabel={homeLabel}
          sectorsLabel={sectorsLabel}
          sectorLabel={sectorLabel}
          sectorHref={sectorHref}
          currentLabel={title}
          navLabel={navLabel}
          className="mb-4"
        />
        <Stack gap="md" className="max-w-3xl">
          <Heading level={1} size={1} className="text-canvas">
            {title}
          </Heading>
          {description && (
            <Text size="lg" className="text-canvas max-w-2xl opacity-80">
              {description}
            </Text>
          )}
        </Stack>
        <div className="mt-8">
          <Button href={`#${requestQuoteHref}`} variant="accent" size="lg">
            {requestQuoteLabel}
          </Button>
        </div>
      </Container>
    </div>
  );
}
