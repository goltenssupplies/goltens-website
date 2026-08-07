import Image from "next/image";
import type { ReactNode } from "react";
import { PackageSearch } from "lucide-react";

import { AddToCompareButton } from "@/components/products/AddToCompareButton";
import { AddToRfqButton } from "@/components/rfq/AddToRfqButton";
import { Button } from "@/components/ui/Button";
import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { getSectorImage } from "@/lib/sectors";
import { cn } from "@/lib/utils";

const STAGGER_SECONDS = 0.05;

export interface SectorProductItem {
  slug: string;
  title: string;
  description: string;
  image: string | null;
  /** Product detail page URL, if one exists for this item — wraps the image/text block in a link (not the "Request Quote" button, to avoid nesting anchors). Omit to keep today's non-linked card. */
  href?: string;
  /** `Product.sectorId` — required for the "Add to RFQ"/"Add to Compare" buttons to render; omit to hide both (e.g. a card with no real product behind it yet). */
  sectorId?: string;
  /** `Product.categoryId` — required alongside `sectorId` for the same reason; also what the Comparison Engine uses to enforce "same category" comparisons. */
  categoryId?: string;
}

export interface SectorProductsProps {
  /** Omit (or pass an empty string) to skip rendering the heading — used when a caller like `ProductExplorer` already renders its own heading above this component. */
  title?: string;
  items: SectorProductItem[];
  requestQuoteLabel: string;
  /** Anchor id (without "#") of an on-page `SectorQuoteCTA` — every product's CTA scrolls there. Pass an absolute path (starting with "/", e.g. "/contact") instead for a page with no on-page quote form, like the brand detail page. */
  requestQuoteHref: string;
  emptyTitle: string;
  emptyBody: string;
  /** Labels for the per-card "Add to RFQ" control — omitted only when `items` never carry `sectorId`/`categoryId`. */
  addToRfqLabel?: string;
  addToRfqAddedLabel?: string;
  /** Labels for the per-card "Add to Compare" control — same rule as above. */
  addToCompareLabel?: string;
  addToCompareAddedLabel?: string;
}

/**
 * Wraps `children` in a `Link` when `href` is present, using
 * `display: contents` so the wrapper has zero effect on layout — the
 * wrapped elements' flex/grid behavior is exactly as if the link weren't
 * there. Renders `children` bare (no anchor) when `href` is omitted, which
 * is every card until a sector has real product detail pages.
 */
function CardLinkArea({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) return <>{children}</>;
  return (
    <Link href={href} className="contents">
      {children}
    </Link>
  );
}

/**
 * "Products" — an image/title/description/CTA grid. Always rendered (it's
 * one of the template's required sections): when a sector has no `products`
 * yet, shows one honest "Coming Soon" card instead of hiding the section or
 * inventing placeholder products.
 */
export function SectorProducts({
  title,
  items,
  requestQuoteLabel,
  requestQuoteHref,
  emptyTitle,
  emptyBody,
  addToRfqLabel,
  addToRfqAddedLabel,
  addToCompareLabel,
  addToCompareAddedLabel,
}: SectorProductsProps) {
  const requestQuoteTarget = requestQuoteHref.startsWith("/")
    ? requestQuoteHref
    : `#${requestQuoteHref}`;

  return (
    <div>
      {title && (
        <Reveal>
          <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
            {title}
          </Heading>
        </Reveal>
      )}

      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.slug} delay={index * STAGGER_SECONDS} className="h-full">
              <Card
                variant="glass"
                padding="none"
                className={cn("flex h-full flex-col overflow-hidden", cardGlassHover)}
              >
                <CardLinkArea href={item.href}>
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
                </CardLinkArea>
                <Stack gap="sm" className="flex-1 justify-between p-6">
                  <CardLinkArea href={item.href}>
                    <Stack gap="xs">
                      <Text weight="semibold" tone="inverse">
                        {item.title}
                      </Text>
                      <Text size="sm" tone="inverse" className="opacity-70">
                        {item.description}
                      </Text>
                    </Stack>
                  </CardLinkArea>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      href={requestQuoteTarget}
                      variant="secondary"
                      size="sm"
                      className="border-canvas/30 text-canvas hover:bg-canvas/10 w-fit"
                    >
                      {requestQuoteLabel}
                    </Button>
                    {item.sectorId &&
                      item.categoryId &&
                      addToRfqLabel &&
                      addToRfqAddedLabel && (
                        <AddToRfqButton
                          product={{
                            slug: item.slug,
                            name: item.title,
                            image: item.image,
                            sectorId: item.sectorId,
                            href: item.href ?? `/sectors/${item.sectorId}`,
                          }}
                          label={addToRfqLabel}
                          addedLabel={addToRfqAddedLabel}
                          className="border-canvas/30 text-canvas hover:bg-canvas/10 border"
                        />
                      )}
                    {item.sectorId &&
                      item.categoryId &&
                      addToCompareLabel &&
                      addToCompareAddedLabel && (
                        <AddToCompareButton
                          product={{
                            slug: item.slug,
                            name: item.title,
                            image: item.image,
                            sectorId: item.sectorId,
                            categoryId: item.categoryId,
                            href: item.href ?? `/sectors/${item.sectorId}`,
                          }}
                          label={addToCompareLabel}
                          addedLabel={addToCompareAddedLabel}
                          className="border-canvas/30 text-canvas hover:bg-canvas/10 border"
                        />
                      )}
                  </div>
                </Stack>
              </Card>
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
              <PackageSearch aria-hidden="true" className="size-6" />
            </span>
            <Stack gap="xs" align="center" className="max-w-md">
              <Text weight="semibold" tone="inverse">
                {emptyTitle}
              </Text>
              <Text size="sm" tone="inverse" className="opacity-70">
                {emptyBody}
              </Text>
            </Stack>
            <Button href={requestQuoteTarget} variant="accent" size="md">
              {requestQuoteLabel}
            </Button>
          </Card>
        </Reveal>
      )}
    </div>
  );
}
