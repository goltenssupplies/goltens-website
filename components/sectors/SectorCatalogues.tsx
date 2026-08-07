import { Download, FileText } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";

const STAGGER_SECONDS = 0.05;

export interface SectorCatalogueItem {
  id: string;
  title: string;
  brand?: string;
  language: string;
  /** Real path when available; null renders an honest "Coming Soon" state instead of a dead link. */
  fileUrl: string | null;
  /** Document kind (e.g. "datasheet", "manual") — shown as a small extra caption when present. Used by product-level catalogues; sector-level ones never set this. */
  kind?: string;
  /** File format (e.g. "pdf", "doc", "zip") — shown as a small extra caption when present. */
  fileType?: string;
  /** Owning product's display name — shown as a small extra caption when present. Used by the cross-product Download Center/Datasheet/Certifications libraries; a single sector/product/solution page's own catalogue list never sets this (the page context already makes it obvious). */
  productName?: string;
  /** Product detail page URL — when present, wraps the card's title in a link back to it. */
  href?: string;
}

export interface SectorCataloguesProps {
  /** Omit (or pass an empty string) to skip rendering the heading — used when a caller already renders its own heading above this component. */
  title?: string;
  items: SectorCatalogueItem[];
  downloadLabel: string;
  comingSoonLabel: string;
  /** Both required together to render an empty state instead of nothing when `items` is `[]` — every existing caller always passes a non-empty (or generic-default) list, so this only activates for callers that opt in, like the Download Center's filtered libraries. */
  emptyTitle?: string;
  emptyBody?: string;
}

/**
 * "Technical Catalogues" — PDF icon, title, brand, language, and a
 * download button per item. Supports unlimited catalogues via `items`; a
 * `fileUrl` of `null` renders a disabled "Coming Soon" state rather than a
 * dead link — the same architecture serves a real file the moment one is
 * added, with no component change.
 */
export function SectorCatalogues({
  title,
  items,
  downloadLabel,
  comingSoonLabel,
  emptyTitle,
  emptyBody,
}: SectorCataloguesProps) {
  return (
    <div>
      {title && (
        <Reveal>
          <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
            {title}
          </Heading>
        </Reveal>
      )}

      {items.length === 0 && emptyTitle && emptyBody ? (
        <EmptyState
          tone="inverse"
          icon={<FileText aria-hidden="true" className="size-10" />}
          title={emptyTitle}
          description={emptyBody}
        />
      ) : (
        <Grid columns={4} gap="md">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * STAGGER_SECONDS}>
              <Card
                variant="glass"
                padding="md"
                className="flex h-full flex-col gap-4 border-gold/15"
              >
                <span
                  aria-hidden="true"
                  className="bg-gold/10 text-gold flex size-11 items-center justify-center rounded-xl"
                >
                  <FileText aria-hidden="true" className="size-5" />
                </span>
                <Stack gap="xs" className="flex-1">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-gold transition-colors"
                    >
                      <Text weight="semibold" tone="inverse">
                        {item.title}
                      </Text>
                    </Link>
                  ) : (
                    <Text weight="semibold" tone="inverse">
                      {item.title}
                    </Text>
                  )}
                  <Stack direction="row" gap="sm" className="flex-wrap">
                    {item.productName && (
                      <Text size="sm" tone="inverse" className="opacity-60">
                        {item.productName}
                      </Text>
                    )}
                    {item.brand && (
                      <Text size="sm" tone="inverse" className="opacity-60">
                        {item.brand}
                      </Text>
                    )}
                    <Text size="sm" tone="inverse" className="opacity-60">
                      {item.language}
                    </Text>
                    {(item.kind || item.fileType) && (
                      <Text size="sm" tone="inverse" className="opacity-60 uppercase">
                        {[item.kind, item.fileType].filter(Boolean).join(" · ")}
                      </Text>
                    )}
                  </Stack>
                </Stack>

                {item.fileUrl ? (
                  <a
                    href={item.fileUrl}
                    download
                    className="text-gold inline-flex w-fit items-center gap-1.5 text-sm font-semibold hover:underline"
                  >
                    <Download aria-hidden="true" className="size-4" />
                    {downloadLabel}
                  </a>
                ) : (
                  <Badge tone="accent" className="w-fit">
                    {comingSoonLabel}
                  </Badge>
                )}
              </Card>
            </Reveal>
          ))}
        </Grid>
      )}
    </div>
  );
}
