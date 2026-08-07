import Image from "next/image";

import { AddToCompareButton } from "@/components/products/AddToCompareButton";
import type { ComparisonItem } from "@/components/products/ComparisonContext";
import { ProductBreadcrumb } from "@/components/products/ProductBreadcrumb";
import { AddToRfqButton } from "@/components/rfq/AddToRfqButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getSectorImage } from "@/lib/sectors";

export interface ProductHeroProps {
  name: string;
  description: string;
  image: string | null;
  homeLabel: string;
  sectorsLabel: string;
  sectorLabel: string;
  sectorHref: string;
  navLabel: string;
  requestQuoteLabel: string;
  /** Anchor id (without "#") of the page's Request Quotation section. */
  requestQuoteHref: string;
  /** The current product, ready for the cart/comparison contexts — omit both this and the two labels below to hide the "Add to RFQ"/"Add to Compare" controls entirely. */
  comparisonProduct?: ComparisonItem;
  addToRfqLabel?: string;
  addToRfqAddedLabel?: string;
  addToCompareLabel?: string;
  addToCompareAddedLabel?: string;
}

/**
 * Product detail hero — the exact same full-bleed treatment
 * `SectorHero` uses (photo, dark gradient + grid overlay,
 * `SectionParticles`), with a `ProductBreadcrumb` (Home / Sectors /
 * [sector] / [product]) in place of `SectorBreadcrumb`. `image` falls back
 * to the sector's own hero image via `getSectorImage` when a product has no
 * photography yet, same convention every other image slot on the site uses.
 */
export function ProductHero({
  name,
  description,
  image,
  homeLabel,
  sectorsLabel,
  sectorLabel,
  sectorHref,
  navLabel,
  requestQuoteLabel,
  requestQuoteHref,
  comparisonProduct,
  addToRfqLabel,
  addToRfqAddedLabel,
  addToCompareLabel,
  addToCompareAddedLabel,
}: ProductHeroProps) {
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
        <ProductBreadcrumb
          homeLabel={homeLabel}
          sectorsLabel={sectorsLabel}
          sectorLabel={sectorLabel}
          sectorHref={sectorHref}
          currentLabel={name}
          navLabel={navLabel}
          className="mb-4"
        />
        <Stack gap="md" className="max-w-3xl">
          <Heading level={1} size={1} tone="inverse">
            {name}
          </Heading>
          <Text size="lg" tone="inverse" className="max-w-2xl opacity-80">
            {description}
          </Text>
        </Stack>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={`#${requestQuoteHref}`} variant="accent" size="lg">
            {requestQuoteLabel}
          </Button>
          {comparisonProduct && addToRfqLabel && addToRfqAddedLabel && (
            <AddToRfqButton
              product={comparisonProduct}
              label={addToRfqLabel}
              addedLabel={addToRfqAddedLabel}
              className="border-canvas/30 text-canvas hover:bg-canvas/10 size-11 border"
            />
          )}
          {comparisonProduct && addToCompareLabel && addToCompareAddedLabel && (
            <AddToCompareButton
              product={comparisonProduct}
              label={addToCompareLabel}
              addedLabel={addToCompareAddedLabel}
              className="border-canvas/30 text-canvas hover:bg-canvas/10 size-11 border"
            />
          )}
        </div>
      </Container>
    </div>
  );
}
