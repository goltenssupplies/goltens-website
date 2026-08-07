"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Scale, X } from "lucide-react";

import { useComparison } from "@/components/products/ComparisonContext";
import { useRfqCart } from "@/components/rfq/RfqCartContext";
import { KnowledgeComparisonTable } from "@/components/knowledge/KnowledgeComparisonTable";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { IconButton } from "@/components/ui/IconButton";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { getProductBySlug } from "@/data/products";
import type { Locale } from "@/i18n/routing";
import { buildComparisonRows } from "@/lib/product-comparison";

/**
 * `/compare`'s content — entirely client-rendered since the selected
 * products live in `localStorage` (`useComparison`), not on the server.
 * Resolves the full `Product` records for each selected slug to build real
 * specification rows via `buildComparisonRows` (same helper the Knowledge
 * Platform's curated comparisons use), then renders them through the exact
 * same `KnowledgeComparisonTable` — no separate comparison-table UI.
 */
export function ComparisonView() {
  const t = useTranslations("compare");
  const locale = useLocale() as Locale;
  const isArabic = locale === "ar";
  const { items, removeItem, clear } = useComparison();
  const { addItem: addToRfq } = useRfqCart();

  const products = useMemo(
    () =>
      items
        .map((item) => getProductBySlug(item.slug))
        .filter((product): product is NonNullable<typeof product> => product !== undefined),
    [items],
  );

  const tableProducts = useMemo(
    () =>
      items.map((item) => ({
        slug: item.slug,
        name: item.name,
        image: item.image,
        href: item.href,
      })),
    [items],
  );

  const rows = useMemo(
    () => buildComparisonRows(products, isArabic),
    [products, isArabic],
  );

  if (items.length === 0) {
    return (
      <EmptyState
        tone="inverse"
        icon={<Scale aria-hidden="true" className="size-10" />}
        title={t("emptyTitle")}
        description={t("emptyBody")}
        action={
          <Button href="/sectors" variant="accent" size="md">
            {t("browseSectors")}
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <Reveal>
        <Card
          variant="glass"
          padding="md"
          className="border-gold/15 mb-10 flex flex-wrap items-center gap-3"
        >
          {items.map((item) => (
            <span
              key={item.slug}
              className="border-canvas/15 bg-canvas/[0.04] flex items-center gap-2 rounded-sm border py-1.5 ps-3 pe-1.5"
            >
              <Text size="sm" tone="inverse">
                {item.name}
              </Text>
              <IconButton
                icon={<X aria-hidden="true" className="size-3.5" />}
                aria-label={t("removeLabel", { name: item.name })}
                variant="ghost"
                size="sm"
                className="text-canvas/60 hover:text-canvas size-7"
                onClick={() => removeItem(item.slug)}
              />
            </span>
          ))}
          <div className="ms-auto flex flex-wrap gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="border-canvas/30 text-canvas hover:bg-canvas/10"
              onClick={() => {
                items.forEach((item) =>
                  addToRfq({
                    slug: item.slug,
                    name: item.name,
                    image: item.image,
                    sectorId: item.sectorId,
                    href: item.href,
                  }),
                );
              }}
            >
              {t("addAllToRfq")}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-canvas/70 hover:text-canvas"
              onClick={clear}
            >
              {t("clearAll")}
            </Button>
          </div>
        </Card>
      </Reveal>

      <KnowledgeComparisonTable
        title={t("tableTitle")}
        products={tableProducts}
        rows={rows}
        noValueLabel={t("noValueLabel")}
      />
    </div>
  );
}
