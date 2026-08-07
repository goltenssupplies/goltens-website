import Image from "next/image";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getSectorImage } from "@/lib/sectors";

export interface SolutionHeroProps {
  title: string;
  description: string;
  image: string | null;
  homeLabel: string;
  solutionsLabel: string;
  navLabel: string;
  requestQuoteLabel: string;
  /** Anchor id (without "#") of the page's Request Quotation section. */
  requestQuoteHref: string;
}

/**
 * Project Solution detail hero — the exact same full-bleed treatment
 * `SectorHero`/`ProductHero` use (photo, dark gradient + grid overlay,
 * `SectionParticles`), with a plain Home / Solutions / [current]
 * `Breadcrumb` (the generic primitive itself, not a new named wrapper —
 * `SectorBreadcrumb`/`ProductBreadcrumb` are thin one-liners around the
 * same component, so this skips adding a third). `image` falls back to a
 * shared image via `getSectorImage` when a solution has no dedicated photo,
 * same convention as `Sector.image`/`Product.images`.
 */
export function SolutionHero({
  title,
  description,
  image,
  homeLabel,
  solutionsLabel,
  navLabel,
  requestQuoteLabel,
  requestQuoteHref,
}: SolutionHeroProps) {
  return (
    <div className="relative flex min-h-[480px] flex-col justify-end pt-24 pb-12 sm:min-h-[560px] lg:pt-28 lg:pb-16">
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
        className="from-obsidian via-obsidian/50 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
      />
      <div
        aria-hidden="true"
        className="bg-grid-pattern text-canvas/[0.06] pointer-events-none absolute inset-0"
      />
      <SectionParticles />

      <Container className="relative">
        <Breadcrumb
          label={navLabel}
          className="mb-4"
          items={[
            { label: homeLabel, href: "/" },
            { label: solutionsLabel, href: "/solutions" },
            { label: title },
          ]}
        />
        <Stack gap="md" className="max-w-3xl">
          <Heading level={1} size={1} tone="inverse">
            {title}
          </Heading>
          <Text size="lg" tone="inverse" className="max-w-2xl opacity-80">
            {description}
          </Text>
        </Stack>
        <Button href={`#${requestQuoteHref}`} variant="accent" size="lg" className="mt-8">
          {requestQuoteLabel}
        </Button>
      </Container>
    </div>
  );
}
