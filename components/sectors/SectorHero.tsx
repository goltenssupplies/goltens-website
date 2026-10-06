import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { SectorBreadcrumb } from "@/components/sectors/SectorBreadcrumb";
import { getSectorImage } from "@/lib/sectors";
import { cn } from "@/lib/utils";

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
  /** Anchor id (without "#") to scroll to — or a site route when `secondaryCtaKind` is "route". */
  secondaryCtaHref?: string;
  /**
   * "anchor" (default): `secondaryCtaHref` is an anchor on this page.
   * "route": `secondaryCtaHref` is a site path (e.g. "/sectors"), rendered
   * as a locale-aware link.
   */
  secondaryCtaKind?: "anchor" | "route";
  /**
   * "photo" (default) renders `image` full-bleed, as every sector always
   * has. "neutral" renders a photo-free dark grid treatment instead — for a
   * sector whose photo is not cleared for use (e.g. visible third-party
   * branding); `image` is then ignored.
   */
  visual?: "photo" | "neutral";
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
  secondaryCtaKind = "anchor",
  visual = "photo",
}: SectorHeroProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[480px] flex-col justify-end pt-24 pb-12 sm:min-h-[560px] lg:pt-28 lg:pb-16",
        visual === "neutral" && "bg-ink overflow-hidden",
      )}
    >
      {visual === "photo" ? (
        <>
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
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="bg-gold/[0.10] pointer-events-none absolute -end-32 -top-40 size-[34rem] rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="bg-gold/[0.06] pointer-events-none absolute -start-24 -bottom-32 size-[26rem] rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="via-gold/40 pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent"
          />
        </>
      )}
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
          tone={visual === "neutral" ? "inverse" : "default"}
          className="mb-4"
        />
        {/* This hero sits on a photo + dark scrim (see the gradient above),
            not the site's light `obsidian` panel surface — so its text
            stays explicitly light (`text-canvas`) regardless of what
            `tone="inverse"` resolves to elsewhere on the light-theme site. */}
        <Stack gap="md" className="max-w-3xl">
          <Heading level={1} size={1} className="text-canvas">
            {title}
          </Heading>
          {subtitle && (
            <Text
              size="lg"
              weight="medium"
              className="text-canvas max-w-2xl opacity-90"
            >
              {subtitle}
            </Text>
          )}
          <Text size="lg" className="text-canvas max-w-2xl opacity-80">
            {description}
          </Text>
        </Stack>
        <Stack direction="row" gap="sm" wrap className="mt-8">
          <Button href={`#${requestQuoteHref}`} variant="accent" size="lg">
            {requestQuoteLabel}
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              href={
                secondaryCtaKind === "route"
                  ? secondaryCtaHref
                  : `#${secondaryCtaHref}`
              }
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
