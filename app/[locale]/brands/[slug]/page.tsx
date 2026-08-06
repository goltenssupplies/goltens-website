import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Globe, Info, MapPin } from "lucide-react";

import { BrandCTA } from "@/components/brands/BrandCTA";
import { BrandFeatures } from "@/components/brands/BrandFeatures";
import { BrandGrid } from "@/components/brands/BrandGrid";
import { BrandHero } from "@/components/brands/BrandHero";
import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import { RelatedSectors } from "@/components/sectors/RelatedSectors";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import { SectorProducts } from "@/components/sectors/SectorProducts";
import { Button } from "@/components/ui/Button";
import { ContactCard } from "@/components/ui/ContactCard";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { BRANDS, getBrandBySlug, getBrandsBySector } from "@/data/brands";
import { getKnowledgeItemsForBrand } from "@/data/knowledge";
import { getProductsByBrandSlug } from "@/data/products";
import { getSectorBySlug } from "@/data/sectors";
import { getSolutionsByBrandSlug } from "@/data/solutions";
import type { Locale } from "@/i18n/routing";
import { getReadingTimeMinutes } from "@/lib/knowledge";
import { buildMetadata } from "@/lib/metadata";
import { brandJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface BrandPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  const t = await getTranslations({ locale, namespace: "brands" });

  return buildMetadata({
    locale: locale as Locale,
    path: `/brands/${slug}`,
    title: brand.name,
    description: t("aboutText", { brand: brand.name }),
  });
}

/**
 * A single brand's detail page — typographic hero (no logo image, see
 * `data/brands.ts`), a short honest "About" line, Industries Served/
 * Products Supplied/Why Choose/Procurement Capabilities (`BrandFeatures`),
 * related brands from the same sector, and a Request a Quote / Contact
 * Procurement Team CTA. Content is entirely sourced from `data/brands.ts`
 * and `data/sectors.ts` (plus the already-approved generic copy
 * `BrandFeatures` reuses from `about`/`whyChooseUs`) — adding brand #45
 * there is enough to get a fully working page here.
 */
export default async function BrandPage({ params }: BrandPageProps) {
  const { locale, slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const sector = getSectorBySlug(brand.sectorSlug);
  if (!sector) notFound();

  const isArabic = (locale as Locale) === "ar";
  const sectorTitle = isArabic ? sector.title_ar : sector.title_en;

  const t = await getTranslations("brands");
  const tNav = await getTranslations("nav");
  const tKnowledge = await getTranslations("knowledge");
  const tSolutions = await getTranslations("solutions");
  const tProducts = await getTranslations("products");

  // Related Knowledge — any content type genuinely tied to this brand via
  // immutable id; no existing section on this page already covers articles,
  // so unlike Sector/Product/Solution pages, nothing is excluded here.
  const relatedKnowledgeItems: KnowledgeCardItem[] = getKnowledgeItemsForBrand(
    brand.id,
  ).map((knowledgeItem) => {
    const knowledgeBody =
      (isArabic ? knowledgeItem.content_ar : knowledgeItem.content_en) ??
      (isArabic ? knowledgeItem.summary_ar : knowledgeItem.summary_en);
    return {
      slug: knowledgeItem.slug,
      type: knowledgeItem.type,
      title: isArabic ? knowledgeItem.title_ar : knowledgeItem.title_en,
      summary: isArabic ? knowledgeItem.summary_ar : knowledgeItem.summary_en,
      coverImage: knowledgeItem.coverImage,
      typeLabel: tKnowledge(`types.${knowledgeItem.type}`),
      readingTimeLabel: tKnowledge("readingTimeLabel", {
        minutes: getReadingTimeMinutes(knowledgeBody),
      }),
    };
  });

  const relatedItems = getBrandsBySector(brand.sectorSlug)
    .filter((item) => item.slug !== slug)
    .slice(0, 6)
    .map((item) => ({
      slug: item.slug,
      name: item.name,
      categoryLabel: sectorTitle,
    }));

  // Related Products — real products genuinely sourced from this brand,
  // via the reverse of `Product.relatedBrandSlugs`. `SectorProducts` shows
  // an honest empty state itself when this is [] (this page has no on-page
  // quote form, so its CTA routes straight to `/contact`, same as the page's
  // other "Request a Quote" buttons).
  const relatedProductItems = getProductsByBrandSlug(brand.slug).map(
    (product) => ({
      slug: product.slug,
      title: isArabic ? product.name_ar : product.name_en,
      description: isArabic
        ? product.shortDescription_ar
        : product.shortDescription_en,
      image: product.images?.[0] ?? null,
      href: `/sectors/${product.sectorId}/products/${product.slug}`,
      sectorId: product.sectorId,
      categoryId: product.categoryId,
    }),
  );

  // Related Solutions — real Project Solutions that genuinely feature this
  // brand, via the reverse of `Solution.relatedBrandSlugs`. `RelatedSectors`
  // renders nothing when this is [].
  const relatedSolutionItems: SectorCardItem[] = getSolutionsByBrandSlug(
    brand.slug,
  ).map((solution) => ({
    slug: solution.slug,
    title: isArabic ? solution.title_ar : solution.title_en,
    description: isArabic ? solution.description_ar : solution.description_en,
    image: solution.heroImage,
    icon: solution.icon,
  }));

  const pageUrl = `${siteUrl}/${locale}/brands/${slug}`;
  const aboutText = t("aboutText", { brand: brand.name });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: tNav("brands"), url: `${siteUrl}/${locale}/brands` },
              { name: brand.name, url: pageUrl },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            brandJsonLd({
              name: brand.name,
              description: aboutText,
              url: pageUrl,
            }),
          ),
        }}
      />

      <BrandHero
        name={brand.name}
        categoryLabel={sectorTitle}
        homeLabel={tNav("home")}
        brandsLabel={tNav("brands")}
        navLabel={tNav("brands")}
      />

      <PremiumDarkSection>
        <Reveal>
          <Heading level={2} size={3} tone="inverse" className="mb-4">
            {t("aboutTitle", { brand: brand.name })}
          </Heading>
          <Text size="lg" tone="inverse" className="leading-[1.8] opacity-85">
            {aboutText}
          </Text>
        </Reveal>

        <Reveal delay={0.03}>
          <div className="border-gold/20 bg-gold/[0.06] mt-8 flex items-start gap-3 rounded-[16px] border p-5">
            <Info
              aria-hidden="true"
              className="text-gold mt-0.5 size-5 shrink-0"
            />
            <Text size="sm" tone="inverse" className="opacity-80">
              {t("independenceDisclaimer")}
            </Text>
          </div>
        </Reveal>

        {(brand.country || brand.website) && (
          <Reveal delay={0.04}>
            <div className="mt-8">
              <Text
                size="sm"
                tone="inverse"
                weight="semibold"
                className="mb-4 opacity-60"
              >
                {t("supplierInfoTitle")}
              </Text>
              <Grid columns={2} gap="lg">
                {brand.country && (
                  <ContactCard
                    icon={<MapPin className="size-5" />}
                    label={t("countryLabel")}
                    value={brand.country}
                    tone="inverse"
                  />
                )}
                {brand.website && (
                  <ContactCard
                    icon={<Globe className="size-5" />}
                    label={t("websiteLabel")}
                    value={t("visitWebsite")}
                    href={brand.website}
                    external
                    tone="inverse"
                  />
                )}
              </Grid>
            </div>
          </Reveal>
        )}

        <div className="mt-12">
          <Reveal delay={0.05}>
            <BrandFeatures
              locale={locale as Locale}
              brandName={brand.name}
              sectorSlug={brand.sectorSlug}
              sectorTitle={sectorTitle}
              verifiedProducts={brand.verifiedProducts}
            />
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <div className="mt-8">
            <Button
              href={`/suppliers?category=${brand.sectorSlug}`}
              variant="secondary"
              size="sm"
              className="border-gold/30 text-gold hover:bg-gold/10 w-fit"
            >
              {t("viewInSupplierDirectory")}
            </Button>
          </div>
        </Reveal>
      </PremiumDarkSection>

      <BrandCTA
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        requestQuoteLabel={t("requestQuote")}
        contactProcurementTeamLabel={t("contactProcurementTeam")}
      />

      {relatedKnowledgeItems.length > 0 && (
        <PremiumDarkSection>
          <Reveal>
            <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
              {tKnowledge("relatedKnowledgeTitle")}
            </Heading>
          </Reveal>
          <KnowledgeGrid
            items={relatedKnowledgeItems}
            readMoreLabel={tKnowledge("readMoreLabel")}
            emptyTitle={tKnowledge("emptyTitle")}
            emptyBody={tKnowledge("emptyBody")}
          />
        </PremiumDarkSection>
      )}

      <PremiumDarkSection>
        <SectorProducts
          title={t("relatedProductsTitle")}
          items={relatedProductItems}
          requestQuoteLabel={t("requestQuote")}
          requestQuoteHref="/contact"
          emptyTitle={t("relatedProductsEmptyTitle")}
          emptyBody={t("relatedProductsEmptyBody")}
          addToRfqLabel={tProducts("addToRfqLabel")}
          addToRfqAddedLabel={tProducts("addToRfqAddedLabel")}
          addToCompareLabel={tProducts("addToCompareLabel")}
          addToCompareAddedLabel={tProducts("addToCompareAddedLabel")}
        />
      </PremiumDarkSection>

      <PremiumDarkSection>
        <RelatedSectors
          title={t("relatedSolutionsTitle")}
          items={relatedSolutionItems}
          exploreLabel={tSolutions("exploreSolution")}
          hrefBase="/solutions"
        />
      </PremiumDarkSection>

      {relatedItems.length > 0 && (
        <PremiumDarkSection>
          <Reveal>
            <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
              {t("relatedBrandsTitle")}
            </Heading>
          </Reveal>
          <BrandGrid items={relatedItems} />
        </PremiumDarkSection>
      )}
    </>
  );
}
