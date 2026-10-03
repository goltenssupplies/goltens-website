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
import { getCategoryById } from "@/data/product-categories";
import { getProductBySlug, getPublicProductParams } from "@/data/products";
import { getSectorArticle, getSectorContent } from "@/data/sector-content";
import { getSectorBySlug } from "@/data/sectors";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import {
  AVAILABLE_CATALOGUES_ENABLED,
  DOWNLOADS_CENTER_ENABLED,
  KNOWLEDGE_CENTER_ENABLED,
  RELATED_ARTICLES_ENABLED,
  RELATED_PRODUCTS_ENABLED,
} from "@/lib/feature-flags";
import { getReadingTimeMinutes } from "@/lib/knowledge";
import { LEGACY_HEALTHCARE_PRODUCT_SLUGS } from "@/lib/legacy-healthcare-product-redirects";
import { buildMetadata } from "@/lib/metadata";
import {
  hasPublicIdentity,
  toPublicProduct,
} from "@/lib/products/public-product";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

const REQUEST_QUOTE_ANCHOR = "request-quote";

interface ProductPageProps {
  params: Promise<{ locale: string; slug: string; product: string }>;
}

export function generateStaticParams() {
  return getPublicProductParams();
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale, slug, product: productSlug } = await params;
  const product = getProductBySlug(productSlug);
  // Unmigrated products (no public identity yet) 404 — checked before
  // `toPublicProduct()`, which would otherwise throw here.
  if (!product || product.sectorId !== slug || !hasPublicIdentity(product)) {
    return {};
  }

  // Same public rendering boundary as the page component below: metadata
  // is built ONLY from `publicProduct`, never the raw `product` object.
  // `seo.title_*`/`description_*` are projected through unchanged (Phase 6
  // still owns neutralizing their actual content) but the ultimate fallback
  // — when a record has no `seo` override — now lands on the public name,
  // not the raw brand-bearing one.
  const publicProduct = toPublicProduct(product);

  const isArabic = (locale as Locale) === "ar";
  const title =
    (isArabic ? publicProduct.seo?.title_ar : publicProduct.seo?.title_en) ??
    (isArabic ? publicProduct.name_ar : publicProduct.name_en);
  const description =
    (isArabic
      ? publicProduct.seo?.description_ar
      : publicProduct.seo?.description_en) ??
    (isArabic
      ? publicProduct.shortDescription_ar
      : publicProduct.shortDescription_en);

  return buildMetadata({
    locale: locale as Locale,
    path: `/sectors/${slug}/products/${productSlug}`,
    title,
    description,
    keywords: publicProduct.seo?.keywords,
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

  // A product not yet migrated to a public identity (Phase 6) is not
  // public: it 404s like an unknown slug, matching the listings, which
  // already omit it via the same `hasPublicIdentity()` check.
  const product = getProductBySlug(productSlug);
  if (!product || product.sectorId !== slug || !hasPublicIdentity(product)) {
    notFound();
  }

  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  // Public rendering boundary: everything below reads ONLY `publicProduct`,
  // never the raw `product` object — see lib/products/public-product.ts.
  // Unmigrated records never reach this call (404'd above);
  // `toPublicProduct()` still throws `MissingPublicIdentityError` as the
  // loud backstop, not something to fall back around here.
  const publicProduct = toPublicProduct(product);

  const isArabic = (locale as Locale) === "ar";
  const name = isArabic ? publicProduct.name_ar : publicProduct.name_en;
  const shortDescription = isArabic
    ? publicProduct.shortDescription_ar
    : publicProduct.shortDescription_en;
  const longDescription = isArabic
    ? publicProduct.longDescription_ar
    : publicProduct.longDescription_en;
  const sectorTitle = isArabic ? sector.title_ar : sector.title_en;

  // Breadcrumb category segment — resolved from the real registry via the
  // product's own `categoryId`, never inferred from its name. `category` is
  // `undefined` for any unresolved/missing relationship (should not happen
  // for real data, but handled safely rather than assumed) and both values
  // below stay `undefined` together, so `ProductBreadcrumb` falls back to
  // its original Home / Sectors / [sector] / [product] trail with no gap or
  // fabricated label.
  const category = getCategoryById(publicProduct.categoryId);
  const categoryLabel = category
    ? isArabic
      ? category.name_ar
      : category.name_en
    : undefined;
  const categoryHref = category
    ? `/sectors/${slug}/categories/${category.slug}`
    : undefined;

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

  const featureItems = isArabic
    ? publicProduct.features_ar
    : publicProduct.features_en;
  const applicationItems = isArabic
    ? publicProduct.applications_ar
    : publicProduct.applications_en;

  const specificationItems = (publicProduct.specifications ?? []).map(
    (spec) => ({
      label: isArabic ? spec.label_ar : spec.label_en,
      value: spec.value,
      group: isArabic ? spec.group_ar : spec.group_en,
    }),
  );

  // Catalogue titles are NOT rewritten in this phase — `PublicCatalogueItem`
  // still carries the existing (possibly brand-bearing) `title_en`/`title_ar`
  // verbatim; only Phase 6 is authorized to neutralize them. This phase only
  // moves the read from `product.catalogues` to `publicProduct.catalogues`.
  const catalogueItems = publicProduct.catalogues?.length
    ? publicProduct.catalogues.map((catalogue) => ({
        id: catalogue.id,
        title: isArabic ? catalogue.title_ar : catalogue.title_en,
        language: catalogue.language,
        fileUrl: catalogue.fileUrl,
        kind: catalogue.kind,
        fileType: catalogue.fileType,
      }))
    : [
        {
          id: `${publicProduct.slug}-datasheet`,
          title: t("cataloguesDefault", { product: name }),
          language: "en",
          fileUrl: null,
        },
      ];

  // Related Articles — curated `relatedArticleSlugs`, falling back to this
  // sector's own Knowledge Center list (same fallback shape
  // `relatedSectorSlugs` already uses at the sector level).
  const sectorArticles = getSectorContent(slug).articles ?? [];
  const articleSlugs = publicProduct.relatedArticleSlugs?.length
    ? publicProduct.relatedArticleSlugs
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

  // Related products: each resolved raw `Product` is ALSO projected through
  // `toPublicProduct()` before any of its fields are read — a related
  // product is public rendering too, not an internal lookup. Filtered to
  // migrated products first: the catalog is migrated incrementally, so an
  // unmigrated related product is simply omitted from this section rather
  // than throwing and taking down the whole page (same pattern as every
  // other public listing).
  const relatedProductItems = (publicProduct.relatedProductSlugs ?? [])
    .filter((relatedSlug) => relatedSlug !== publicProduct.slug)
    .map((relatedSlug) => getProductBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)
    .filter(hasPublicIdentity)
    .map((relatedProduct) => toPublicProduct(relatedProduct))
    .map((relatedPublicProduct) => ({
      slug: relatedPublicProduct.slug,
      title: isArabic
        ? relatedPublicProduct.name_ar
        : relatedPublicProduct.name_en,
      description: isArabic
        ? relatedPublicProduct.shortDescription_ar
        : relatedPublicProduct.shortDescription_en,
      image: relatedPublicProduct.images?.[0] ?? null,
      href: `/sectors/${slug}/products/${relatedPublicProduct.slug}`,
      sectorId: relatedPublicProduct.sectorId,
      categoryId: relatedPublicProduct.categoryId,
    }));

  // This product itself, shaped for the RFQ cart / Comparison Engine —
  // passed to `ProductHero`'s "Add to RFQ"/"Add to Compare" controls.
  const comparisonProduct = {
    slug: publicProduct.slug,
    name,
    image: publicProduct.images?.[0] ?? null,
    sectorId: publicProduct.sectorId,
    categoryId: publicProduct.categoryId,
    href: `/sectors/${slug}/products/${publicProduct.slug}`,
  };

  // Related Knowledge — guides/comparisons/standards etc. genuinely tied to
  // this product via immutable id, excluding `type: "article"` (already
  // covered by the "Related Articles" section above, sourced from the same
  // registry) so nothing is ever shown twice.
  const relatedKnowledgeItems: KnowledgeCardItem[] =
    getKnowledgeItemsForProduct(publicProduct.id)
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

  // Existing sourcing/order status — verbatim labels per state, never
  // reinterpreted (e.g. "on-request" never reads as in-stock).
  const availabilityLabels: Record<typeof publicProduct.availability, string> =
    {
      available: t("availabilityAvailable"),
      "on-request": t("availabilityOnRequest"),
      "coming-soon": t("availabilityComingSoon"),
    };
  const availabilityTones: Record<
    typeof publicProduct.availability,
    "success" | "warning" | "accent"
  > = {
    available: "success",
    "on-request": "warning",
    "coming-soon": "accent",
  };

  const faqItems = (publicProduct.faq ?? []).map((faq) => ({
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
              // Same resolved category (or lack thereof) the visual
              // breadcrumb above already uses — reusing categoryLabel/
              // categoryHref keeps the two in lockstep by construction
              // rather than re-deriving the category a second time here.
              ...(categoryLabel && categoryHref
                ? [
                    {
                      name: categoryLabel,
                      url: `${siteUrl}/${locale}${categoryHref}`,
                    },
                  ]
                : []),
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
        image={publicProduct.images?.[0] ?? null}
        homeLabel={tNav("home")}
        sectorsLabel={tNav("sectors")}
        sectorLabel={sectorTitle}
        sectorHref={`/sectors/${slug}`}
        categoryLabel={categoryLabel}
        categoryHref={categoryHref}
        navLabel={tNav("sectors")}
        requestQuoteLabel={tSectors("heroRequestQuote")}
        requestQuoteHref={REQUEST_QUOTE_ANCHOR}
        comparisonProduct={comparisonProduct}
        addToRfqLabel={t("addToRfqLabel")}
        addToRfqAddedLabel={t("addToRfqAddedLabel")}
        addToCompareLabel={t("addToCompareLabel")}
        addToCompareAddedLabel={t("addToCompareAddedLabel")}
        sendRequirementHref={`/send-requirement?product=${encodeURIComponent(name)}`}
        sendRequirementLabel={t("sendRequirementLinkLabel")}
        availabilityLabel={availabilityLabels[publicProduct.availability]}
        availabilityTone={availabilityTones[publicProduct.availability]}
      />

      {longDescription && (
        <PremiumDarkSection>
          <SectorAbout title={t("overviewTitle")} intro={longDescription} />
        </PremiumDarkSection>
      )}

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

      {KNOWLEDGE_CENTER_ENABLED && relatedKnowledgeItems.length > 0 && (
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

      {RELATED_PRODUCTS_ENABLED && relatedProductItems.length > 0 && (
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

      {publicProduct.quoteEnabled && (
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
