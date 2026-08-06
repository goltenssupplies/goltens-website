import { getTranslations } from "next-intl/server";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  Headset,
  PackageSearch,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import type { VerifiedBrandProduct } from "@/data/brands";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

// Same icon set `about/page.tsx` uses for `about.qualityPoints`, reused here
// so the two never drift apart visually.
const QUALITY_ICONS = [BadgeCheck, ClipboardCheck, Headset];

interface TitledPoint {
  title: string;
  description: string;
}

export interface BrandFeaturesProps {
  locale: Locale;
  brandName: string;
  sectorSlug: string;
  sectorTitle: string;
  /** Individually-verified SKUs (name/model/one-line description only) — omit while this brand hasn't been verified yet, which keeps the honest "Coming Soon" state below. */
  verifiedProducts?: VerifiedBrandProduct[];
}

/**
 * A brand page's supporting sections: Industries Served (real — the
 * brand's linked Procurement Sector), Products Supplied by GOLTENS (real,
 * individually-verified SKUs when `verifiedProducts` is populated; an
 * honest "Coming Soon" state otherwise — never a fabricated list), Why
 * Choose (real, non-fabricated — reuses `about.qualityPoints`, the same
 * already-approved generic value props `/about` shows, rather than
 * inventing brand-specific claims), and Procurement Capabilities (real —
 * reuses `whyChooseUs.items`, the same already-approved 6-item list).
 */
export async function BrandFeatures({
  locale,
  brandName,
  sectorSlug,
  sectorTitle,
  verifiedProducts,
}: BrandFeaturesProps) {
  const t = await getTranslations({ locale, namespace: "brands" });
  const isArabic = locale === "ar";
  const tAbout = await getTranslations({ locale, namespace: "about" });
  const tWhyChooseUs = await getTranslations({
    locale,
    namespace: "whyChooseUs",
  });

  const qualityPoints = tAbout.raw("qualityPoints") as TitledPoint[];
  const capabilities = tWhyChooseUs.raw("items") as string[];

  return (
    <div className="flex flex-col gap-12">
      <div>
        <Heading level={2} size={3} tone="inverse" className="mb-6">
          {t("industriesServedTitle")}
        </Heading>
        <Stack direction="row" gap="sm" wrap>
          <Link
            href={`/sectors/${sectorSlug}`}
            className="border-gold/25 bg-gold/10 text-gold hover:bg-gold/20 rounded-sm border px-4 py-2 text-sm font-medium transition-colors"
          >
            {sectorTitle}
          </Link>
        </Stack>
      </div>

      <div>
        <Stack direction="row" gap="sm" align="center" className="mb-6">
          <span
            aria-hidden="true"
            className="bg-gold/10 text-gold flex size-11 items-center justify-center rounded-xl"
          >
            <PackageSearch aria-hidden="true" className="size-5" />
          </span>
          <Stack direction="row" gap="sm" align="center">
            <Heading level={2} size={3} tone="inverse">
              {t("productsTitle")}
            </Heading>
            {!verifiedProducts?.length && (
              <Badge tone="accent">{t("comingSoon")}</Badge>
            )}
          </Stack>
        </Stack>
        {verifiedProducts?.length ? (
          <Grid columns={2} gap="md">
            {verifiedProducts.map((product) => (
              <a
                key={product.model}
                href={product.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-canvas/10 bg-canvas/[0.04] hover:border-gold/30 group rounded-[20px] border p-6 transition-colors"
              >
                <Stack gap="xs" align="start">
                  <Stack direction="row" gap="sm" align="center">
                    <Text weight="semibold" tone="inverse">
                      {isArabic ? product.name_ar : product.name_en}
                    </Text>
                    <ExternalLink
                      aria-hidden="true"
                      className="text-gold size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Stack>
                  <Text
                    size="sm"
                    tone="inverse"
                    className="font-mono opacity-60"
                  >
                    {t("modelLabel")} {product.model}
                  </Text>
                  <Text size="sm" tone="inverse" className="opacity-70">
                    {isArabic ? product.description_ar : product.description_en}
                  </Text>
                </Stack>
              </a>
            ))}
          </Grid>
        ) : (
          <Text tone="inverse" className="opacity-70">
            {t("productsComingSoon", { brand: brandName })}
          </Text>
        )}
      </div>

      <div>
        <Heading level={2} size={3} tone="inverse" className="mb-6">
          {t("whyChooseTitle", { brand: brandName })}
        </Heading>
        <Grid columns={3} gap="md">
          {qualityPoints.map((point, index) => {
            const Icon = QUALITY_ICONS[index];
            return (
              <div
                key={point.title}
                className="border-canvas/10 bg-canvas/[0.04] rounded-[20px] border p-6"
              >
                <Stack gap="sm" align="start">
                  {Icon && (
                    <span
                      aria-hidden="true"
                      className="bg-gold/10 text-gold flex size-11 items-center justify-center rounded-xl"
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                  )}
                  <Text weight="semibold" tone="inverse">
                    {point.title}
                  </Text>
                  <Text size="sm" tone="inverse" className="opacity-70">
                    {point.description}
                  </Text>
                </Stack>
              </div>
            );
          })}
        </Grid>
      </div>

      <div>
        <Heading level={2} size={3} tone="inverse" className="mb-6">
          {t("capabilitiesTitle")}
        </Heading>
        <Grid columns={2} gap="md">
          {capabilities.map((capability) => (
            <Stack key={capability} direction="row" gap="sm" align="start">
              <CheckCircle2
                aria-hidden="true"
                className="text-gold mt-0.5 size-5 shrink-0"
              />
              <Text tone="inverse" className="opacity-80">
                {capability}
              </Text>
            </Stack>
          ))}
        </Grid>
      </div>
    </div>
  );
}
