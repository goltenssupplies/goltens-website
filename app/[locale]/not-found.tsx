import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/Button";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Stack } from "@/components/ui/Stack";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

// Next.js doesn't pass route `params` to `not-found.tsx` (it can be reached
// from any unmatched path under this segment), so the locale comes from
// `getLocale()` — the same request-scoped lookup `next-intl` uses
// everywhere params aren't available — rather than the usual
// `{ params }: PageProps` pattern every other page in this app uses.
export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: "notFound" });

  return buildMetadata({
    locale,
    path: "",
    title: t("title"),
    description: t("description"),
    noIndex: true,
  });
}

/**
 * Branded 404 — reached for any unmatched path under `/[locale]/...`
 * (typo'd URL, stale bookmark, removed page). Rendered inside
 * `app/[locale]/layout.tsx`, so the Navbar and Footer are already present;
 * this only needs to supply the page body. Reuses `PremiumDarkSection`
 * as-is (same dark `obsidian` ground, gold glows, dot texture, and
 * particles as every other listing page's header) rather than introducing
 * a new visual treatment for a single page.
 */
export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <PremiumDarkSection
      topPadding
      header={{
        eyebrow: t("eyebrow"),
        title: t("title"),
        description: t("description"),
      }}
    >
      <Stack direction="row" gap="sm" wrap justify="center">
        <Button href="/" variant="accent" size="lg">
          {t("backHome")}
        </Button>
        <Button
          href="/contact"
          variant="secondary"
          size="lg"
          className="border-canvas/40 text-canvas hover:bg-canvas/10"
        >
          {t("contactUs")}
        </Button>
      </Stack>
    </PremiumDarkSection>
  );
}
