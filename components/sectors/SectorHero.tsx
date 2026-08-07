import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { SectorBreadcrumb } from "@/components/sectors/SectorBreadcrumb";
import { getSectorImage } from "@/lib/sectors";

export interface SectorHeroProps {
  title: string;
  /** Optional short eyebrow line shown above the description — omitted entirely when a sector has no `subtitle_en`/`subtitle_ar`. */
  subtitle?: string;
  description: string;
  image: string | null;
  homeLabel: string;
  sectorsLabel: string;
  navLabel: string;
  requestQuoteLabel: string;
  /** Anchor id (without "#") of `SectorQuoteCTA`'s section on the same page. */
  requestQuoteHref: string;
  /** Optional second CTA (e.g. "Download Catalogue") — rendered only when both label and href are provided. */
  secondaryCtaLabel?: string;
  /** Anchor id (without "#") to scroll to. */
  secondaryCtaHref?: string;
}

/**
 * Premium full-bleed sector hero: photo with a dark gradient + grid
 * overlay, a few very faint drifting gold particles (`SectionParticles` —
 * the sitewide "subtle only" ambient-motion treatment, not a new animation
 * language), breadcrumb, title, a short professional description, and a
 * "Request a Quote" button anchored straight to the page's
 * `SectorQuoteCTA` section. One template, used by every sector — only the
 * title/description/image change per sector's `data/sectors.ts` row.
 */
export function SectorHero({
  title,
  subtitle,
  description,
  image,
  homeLabel,
  sectorsLabel,
  navLabel,
  requestQuoteLabel,
  requestQuoteHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: SectorHeroProps) {
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
        <SectorBreadcrumb
          homeLabel={homeLabel}
          sectorsLabel={sectorsLabel}
          currentLabel={title}
          navLabel={navLabel}
          className="mb-4"
        />
        <Stack gap="md" className="max-w-3xl">
          <Heading level={1} size={1} tone="inverse">
            {title}
          </Heading>
          {subtitle && (
            <Text size="lg" tone="inverse" weight="medium" className="max-w-2xl opacity-90">
              {subtitle}
            </Text>
          )}
          <Text size="lg" tone="inverse" className="max-w-2xl opacity-80">
            {description}
          </Text>
        </Stack>
        <Stack direction="row" gap="sm" wrap className="mt-8">
          <Button href={`#${requestQuoteHref}`} variant="accent" size="lg">
            {requestQuoteLabel}
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              href={`#${secondaryCtaHref}`}
              variant="secondary"
              size="lg"
              className="border-canvas/30 text-canvas hover:bg-canvas/10"
            >
              {secondaryCtaLabel}
            </Button>
          )}
        </Stack>
      </Container>
    </div>
  );
}
