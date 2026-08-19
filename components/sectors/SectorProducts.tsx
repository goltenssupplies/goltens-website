import Image from "next/image";
import type { ReactNode } from "react";
import { Package, PackageSearch } from "lucide-react";

import { AddToCompareButton } from "@/components/products/AddToCompareButton";
import { AddToRfqButton } from "@/components/rfq/AddToRfqButton";
import { Button } from "@/components/ui/Button";
import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getCategoryById } from "@/data/product-categories";
import { getSectorById } from "@/data/sectors";
import { Link } from "@/i18n/navigation";
import { SECTOR_ICONS } from "@/lib/sectors";
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
  /** "grid" (default) — the existing image/title/description/CTA card grid, unchanged for every current caller. "list" — a plain bulleted text list of product names only (no images, icons, or card buttons), in the given `items` order. Used on the sector detail page's "Scope of Supply" section. */
  variant?: "grid" | "list";
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
function CardLinkArea({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  if (!href) return <>{children}</>;
  return (
    <Link href={href} className="contents">
      {children}
    </Link>
  );
}

/**
 * Resolution order: (1) the product's own verified photo — the vast
 * majority now sourced and mapped in `data/products/*.ts`; (2) its
 * category's shared photo, once one exists (`ProductCategory.image` —
 * unpopulated today, so this tier is currently inert, never a fabricated
 * stand-in); (3) a neutral placeholder — the sector's own approved icon
 * (`SECTOR_ICONS`) over the site's dot-texture treatment, never a photo
 * that doesn't depict this product. Deliberately does NOT fall back to the
 * sector's own hero photo: reusing one photo across every product missing
 * its own is the "all cards share one image" bug this pipeline exists to
 * fix, not a substitute for it. Logs to the console in development so a
 * missing product photo is obvious to fix, not silently papered over.
 */
function ProductCardImage({
  image,
  sectorId,
  categoryId,
  slug,
}: {
  image: string | null;
  sectorId?: string;
  categoryId?: string;
  slug: string;
}) {
  const categoryImage = categoryId
    ? (getCategoryById(categoryId)?.image ?? null)
    : null;
  const resolved = image ?? categoryImage;

  if (resolved) {
    return (
      <Image
        src={resolved}
        alt=""
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover contrast-110 saturate-105 sepia-[0.08]"
      />
    );
  }

  if (process.env.NODE_ENV !== "production") {
    console.warn(
      `[ProductCardImage] no product or category photo for "${slug}" (sector: ${sectorId ?? "unknown"}) — rendering placeholder.`,
    );
  }

  const sectorIconName = sectorId ? getSectorById(sectorId)?.icon : undefined;
  const PlaceholderIcon =
    (sectorIconName && SECTOR_ICONS[sectorIconName]) || Package;

  return (
    <div
      aria-hidden="true"
      className="bg-obsidian text-gold/[0.07] bg-dot-pattern absolute inset-0 flex items-center justify-center"
    >
      <PlaceholderIcon aria-hidden="true" className="text-gold/25 size-9" />
    </div>
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
  variant = "grid",
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

      {items.length > 0 && variant === "list" ? (
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="bg-gold mt-2.5 size-1.5 shrink-0 rounded-full"
              />
              <Text tone="inverse" className="opacity-80">
                {item.title}
              </Text>
            </li>
          ))}
        </ul>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={item.slug}
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
                <CardLinkArea href={item.href}>
                  <div className="relative aspect-video shrink-0 overflow-hidden">
                    <ProductCardImage
                      image={item.image}
                      sectorId={item.sectorId}
                      categoryId={item.categoryId}
                      slug={item.slug}
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
