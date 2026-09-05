import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import { SetWhatsAppMessage } from "@/components/layout/SetWhatsAppMessage";
import { SectorAbout } from "@/components/sectors/SectorAbout";
import { SectorArticles } from "@/components/sectors/SectorArticles";
import { SectorCatalogues } from "@/components/sectors/SectorCatalogues";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorProducts } from "@/components/sectors/SectorProducts";
import { SectorQuoteCTA } from "@/components/sectors/SectorQuoteCTA";
import { RelatedSectors } from "@/components/sectors/RelatedSectors";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import { ProductApplications } from "@/components/products/ProductApplications";
import { ProductFeatures } from "@/components/products/ProductFeatures";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductSpecifications } from "@/components/products/ProductSpecifications";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { getKnowledgeItemsForProduct } from "@/data/knowledge";
import { getAllProductParams, getProductBySlug } from "@/data/products";
import { getSectorArticle, getSectorContent } from "@/data/sector-content";
import { getSectorBySlug } from "@/data/sectors";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import {
  AVAILABLE_CATALOGUES_ENABLED,
  DOWNLOADS_CENTER_ENABLED,
  RELATED_ARTICLES_ENABLED,
  RELATED_PRODUCTS_ENABLED,
} from "@/lib/feature-flags";
import { getReadingTimeMinutes } from "@/lib/knowledge";
import { LEGACY_HEALTHCARE_PRODUCT_SLUGS } from "@/lib/legacy-healthcare-product-redirects";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

const REQUEST_QUOTE_ANCHOR = "request-quote";

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string; product: string }>;
}

export function generateStaticParams() {
  return getAllProductParams();
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale, slug, product: productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product || product.sectorId !== slug) return {};

  const isArabic = (locale as Locale) === "ar";
  const title =
    (isArabic ? product.seo?.title_ar : product.seo?.title_en) ??
    (isArabic ? product.name_ar : product.name_en);
  const description =
    (isArabic ? product.seo?.description_ar : product.seo?.description_en) ??
    (isArabic ? product.shortDescription_ar : product.shortDescription_en);

  return buildMetadata({
    locale: locale as Locale,
    path: `/sectors/${slug}/products/${productSlug}`,
    title,
    description,
    keywords: product.seo?.keywords,
  });
}

/**
 * The unified Product Detail Template — every product in the Product
 * Engine (`data/products/`) renders through this one file. Only the data
 * changes: adding product #10,001 means editing one category file under
 * `data/products/<sectorId>/`; this file and every `components/products/*`
 * / reused `components/sectors/Sector*` component stay untouched.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug, product: productSlug } = await params;

  // Legacy Healthcare product URL — the sector was repositioned to a
  // focused Hospital Equipment & Medical Supplies catalog and these 27
  // slugs were removed from the active registry (see
  // `lib/legacy-healthcare-product-redirects.ts`). 307, not 301: the
  // products are on hold, not permanently gone, so this isn't declared
  // final to search engines.
  if (
    slug === "healthcare" &&
    LEGACY_HEALTHCARE_PRODUCT_SLUGS.has(productSlug)
  ) {
    redirect({ href: "/sectors/healthcare", locale: locale as Locale });
  }

  const product = getProductBySlug(productSlug);
  if (!product || product.sectorId !== slug) notFound();

  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const isArabic = (locale as Locale) === "ar";
  const name = isArabic ? product.name_ar : product.name_en;
  const shortDescription = isArabic
    ? product.shortDescription_ar
    : product.shortDescription_en;
  const longDescription = isArabic
    ? product.longDescription_ar
    : product.longDescription_en;
  const sectorTitle = isArabic ? sector.title_ar : sector.title_en;

  const t = await getTranslations("products");
  const tNav = await getTranslations("nav");
  const tSectors = await getTranslations("sectors");
  const tCommon = await getTranslations("common");
  const tKnowledge = await getTranslations("knowledge");
  const tDownloads = await getTranslations("downloads");

  const pageUrl = `${siteUrl}/${locale}/sectors/${slug}/products/${productSlug}`;

  // Floating WhatsApp button override for this product — built from the
  // `name` already resolved above, no second product lookup.
  const whatsappMessage = tCommon("whatsappProductMessage", {
    productName: name,
  });

  const featureItems = isArabic ? product.features_ar : product.features_en;
  const applicationItems = isArabic
    ? product.applications_ar
    : product.applications_en;

  const specificationItems = (product.specifications ?? []).map((spec) => ({
    label: isArabic ? spec.label_ar : spec.label_en,
    value: spec.value,
    group: isArabic ? spec.group_ar : spec.group_en,
  }));

  const catalogueItems = product.catalogues?.length
    ? product.catalogues.map((catalogue) => ({
        id: catalogue.id,
        title: isArabic ? catalogue.title_ar : catalogue.title_en,
        language: catalogue.language,
        fileUrl: catalogue.fileUrl,
        kind: catalogue.kind,
        fileType: catalogue.fileType,
      }))
    : [
        {
          id: `${product.slug}-datasheet`,
          title: t("cataloguesDefault", { product: name }),
          language: "en",
          fileUrl: null,
        },
      ];

  // Related Articles — curated `relatedArticleSlugs`, falling back to this
  // sector's own Knowledge Center list (same fallback shape
  // `relatedSectorSlugs` already uses at the sector level).
  const sectorArticles = getSectorContent(slug).articles ?? [];
  const articleSlugs = product.relatedArticleSlugs?.length
    ? product.relatedArticleSlugs
    : sectorArticles.map((article) => article.slug);
  const articleItems = articleSlugs
    .map((articleSlug) => getSectorArticle(slug, articleSlug))
    .filter(
      (article): article is NonNullable<typeof article> =>
        article !== undefined,
    )
    .map((article) => ({
      slug: article.slug,
      title: isArabic ? article.title_ar : article.title_en,
      summary: isArabic ? article.summary_ar : article.summary_en,
      coverImage: article.coverImage,
    }));

  const relatedProductItems = (product.relatedProductSlugs ?? [])
    .map((relatedSlug) => getProductBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)
    .map((relatedProduct) => ({
      slug: relatedProduct.slug,
      title: isArabic ? relatedProduct.name_ar : relatedProduct.name_en,
      description: isArabic
        ? relatedProduct.shortDescription_ar
        : relatedProduct.shortDescription_en,
      image: relatedProduct.images?.[0] ?? null,
      href: `/sectors/${slug}/products/${relatedProduct.slug}`,
      sectorId: relatedProduct.sectorId,
      categoryId: relatedProduct.categoryId,
    }));

  // This product itself, shaped for the RFQ cart / Comparison Engine —
  // passed to `ProductHero`'s "Add to RFQ"/"Add to Compare" controls.
  const comparisonProduct = {
    slug: product.slug,
    name,
    image: product.images?.[0] ?? null,
    sectorId: product.sectorId,
    categoryId: product.categoryId,
    href: `/sectors/${slug}/products/${product.slug}`,
  };

  // Related Knowledge — guides/comparisons/standards etc. genuinely tied to
  // this product via immutable id, excluding `type: "article"` (already
  // covered by the "Related Articles" section above, sourced from the same
  // registry) so nothing is ever shown twice.
  const relatedKnowledgeItems: KnowledgeCardItem[] =
    getKnowledgeItemsForProduct(product.id)
      .filter((knowledgeItem) => knowledgeItem.type !== "article")
      .map((knowledgeItem) => {
        const knowledgeBody =
          (isArabic ? knowledgeItem.content_ar : knowledgeItem.content_en) ??
          (isArabic ? knowledgeItem.summary_ar : knowledgeItem.summary_en);
        return {
          slug: knowledgeItem.slug,
          type: knowledgeItem.type,
          title: isArabic ? knowledgeItem.title_ar : knowledgeItem.title_en,
          summary: isArabic
            ? knowledgeItem.summary_ar
            : knowledgeItem.summary_en,
          coverImage: knowledgeItem.coverImage,
          typeLabel: tKnowledge(`types.${knowledgeItem.type}`),
          readingTimeLabel: tKnowledge("readingTimeLabel", {
            minutes: getReadingTimeMinutes(knowledgeBody),
          }),
        };
      });

  const faqItems = (product.faq ?? []).map((faq) => ({
    question: isArabic ? faq.question_ar : faq.question_en,
    answer: isArabic ? faq.answer_ar : faq.answer_en,
  }));

  const relatedSectorItems: SectorCardItem[] = [
    {
      slug: sector.slug,
      title: sectorTitle,
      description: isArabic ? sector.description_ar : sector.description_en,
      image: sector.image,
      icon: sector.icon,
    },
  ];

  return (
    <>
      <SetWhatsAppMessage text={whatsappMessage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: tNav("sectors"), url: `${siteUrl}/${locale}/sectors` },
              {
                name: sectorTitle,
                url: `${siteUrl}/${locale}/sectors/${slug}`,
              },
              { name, url: pageUrl },
            ]),
          ),
        }}
      />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(faqItems)),
          }}
        />
      )}

      <ProductHero
        name={name}
        description={shortDescription}
        image={product.images?.[0] ?? null}
        homeLabel={tNav("home")}
        sectorsLabel={tNav("sectors")}
        sectorLabel={sectorTitle}
        sectorHref={`/sectors/${slug}`}
        navLabel={tNav("sectors")}
        requestQuoteLabel={tSectors("heroRequestQuote")}
        requestQuoteHref={REQUEST_QUOTE_ANCHOR}
        comparisonProduct={comparisonProduct}
        addToRfqLabel={t("addToRfqLabel")}
        addToRfqAddedLabel={t("addToRfqAddedLabel")}
        addToCompareLabel={t("addToCompareLabel")}
        addToCompareAddedLabel={t("addToCompareAddedLabel")}
      />

      <PremiumDarkSection>
        <SectorAbout title={t("overviewTitle")} intro={longDescription} />
      </PremiumDarkSection>

      {featureItems && featureItems.length > 0 && (
        <PremiumDarkSection>
          <ProductFeatures title={t("featuresTitle")} items={featureItems} />
        </PremiumDarkSection>
      )}

      {applicationItems && applicationItems.length > 0 && (
        <PremiumDarkSection>
          <ProductApplications
            title={t("applicationsTitle")}
            items={applicationItems}
          />
        </PremiumDarkSection>
      )}

      {specificationItems.length > 0 && (
        <PremiumDarkSection>
          <ProductSpecifications
            title={t("specificationsTitle")}
            items={specificationItems}
          />
        </PremiumDarkSection>
      )}

      {AVAILABLE_CATALOGUES_ENABLED && (
        <PremiumDarkSection>
          <SectorCatalogues
            title={t("cataloguesTitle")}
            items={catalogueItems}
            downloadLabel={tSectors("catalogueDownload")}
            comingSoonLabel={tSectors("comingSoon")}
            datasheetUnavailableLabel={tSectors("datasheetUnavailable")}
          />
          {DOWNLOADS_CENTER_ENABLED && (
            <div className="mt-8">
              <Button
                href="/downloads"
                variant="secondary"
                size="sm"
                className="border-ink/25 text-ink hover:bg-stone w-fit"
              >
                {tDownloads("viewDownloadCenter")}
              </Button>
            </div>
          )}
        </PremiumDarkSection>
      )}

      {RELATED_ARTICLES_ENABLED && (
        <PremiumDarkSection>
          <SectorArticles
            title={t("articlesTitle")}
            items={articleItems}
            sectorSlug={slug}
            readMoreLabel={tSectors("articlesReadMore")}
            emptyTitle={tSectors("articlesEmptyTitle")}
            emptyBody={tSectors("articlesEmptyBody")}
          />
        </PremiumDarkSection>
      )}

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

      {RELATED_PRODUCTS_ENABLED && (
        <PremiumDarkSection>
          <SectorProducts
            title={t("relatedProductsTitle")}
            items={relatedProductItems}
            requestQuoteLabel={tCommon("requestQuotation")}
            requestQuoteHref={REQUEST_QUOTE_ANCHOR}
            emptyTitle={t("relatedProductsEmptyTitle")}
            emptyBody={t("relatedProductsEmptyBody")}
            addToRfqLabel={t("addToRfqLabel")}
            addToRfqAddedLabel={t("addToRfqAddedLabel")}
            addToCompareLabel={t("addToCompareLabel")}
            addToCompareAddedLabel={t("addToCompareAddedLabel")}
          />
        </PremiumDarkSection>
      )}

      {faqItems.length > 0 && (
        <PremiumDarkSection>
          <SectorFAQ title={t("faqTitle")} items={faqItems} />
        </PremiumDarkSection>
      )}

      {product.quoteEnabled && (
        <SectorQuoteCTA
          id={REQUEST_QUOTE_ANCHOR}
          locale={locale as Locale}
          title={t("ctaTitle")}
          subtitle={t("ctaDescription")}
          defaultProductCategory={name}
        />
      )}

      <PremiumDarkSection>
        <RelatedSectors
          title={t("relatedSectorTitle")}
          items={relatedSectorItems}
          exploreLabel={tSectors("exploreSector")}
        />
      </PremiumDarkSection>
    </>
  );
}
