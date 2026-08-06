import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { KnowledgeComparisonTable } from "@/components/knowledge/KnowledgeComparisonTable";
import { KnowledgeGallery } from "@/components/knowledge/KnowledgeGallery";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import { KnowledgeHero } from "@/components/knowledge/KnowledgeHero";
import { RelatedSectors } from "@/components/sectors/RelatedSectors";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import {
  SectorCatalogues,
  type SectorCatalogueItem,
} from "@/components/sectors/SectorCatalogues";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import {
  SectorProducts,
  type SectorProductItem,
} from "@/components/sectors/SectorProducts";
import { SectorQuoteCTA } from "@/components/sectors/SectorQuoteCTA";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import {
  getAllKnowledgeParams,
  getKnowledgeItemById,
  getKnowledgeItemBySlug,
  getKnowledgeItemsByType,
} from "@/data/knowledge";
import type {
  KnowledgeCatalogueRef,
  KnowledgeItem,
} from "@/data/knowledge/types";
import { getProductById } from "@/data/products";
import type { Product } from "@/data/products/types";
import { getSectorContent } from "@/data/sector-content";
import { getSectorById } from "@/data/sectors";
import { getSolutionById } from "@/data/solutions";
import type { Locale } from "@/i18n/routing";
import { formatKnowledgeDate, getReadingTimeMinutes } from "@/lib/knowledge";
import { buildMetadata } from "@/lib/metadata";
import { buildComparisonRows } from "@/lib/product-comparison";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/structured-data";
import { getSectorImage } from "@/lib/sectors";
import { siteUrl } from "@/lib/site";

const REQUEST_QUOTE_ANCHOR = "request-quote";
const MAX_RELATED_READING = 3;

interface KnowledgeDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllKnowledgeParams();
}

export async function generateMetadata({
  params,
}: KnowledgeDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = getKnowledgeItemBySlug(slug);
  if (!item) return {};

  const isArabic = (locale as Locale) === "ar";
  const title =
    (isArabic ? item.seo?.title_ar : item.seo?.title_en) ??
    (isArabic ? item.title_ar : item.title_en);
  const description =
    (isArabic ? item.seo?.description_ar : item.seo?.description_en) ??
    (isArabic ? item.summary_ar : item.summary_en);

  return buildMetadata({
    locale: locale as Locale,
    path: `/knowledge/${slug}`,
    title,
    description,
    keywords: item.seo?.keywords ?? item.keywords,
  });
}

/** Resolves a `KnowledgeCatalogueRef` against the real Sector/Product catalogue it references, joined via immutable id — never a duplicated file entry. */
function resolveCatalogueRef(
  ref: KnowledgeCatalogueRef,
  isArabic: boolean,
): SectorCatalogueItem | undefined {
  if (ref.source === "sector" && ref.sectorId) {
    const sector = getSectorById(ref.sectorId);
    const catalogue = sector
      ? getSectorContent(sector.slug).catalogues?.find(
          (c) => c.id === ref.catalogueId,
        )
      : undefined;
    if (!sector || !catalogue) return undefined;
    return {
      id: `${sector.id}-${catalogue.id}`,
      title: isArabic ? catalogue.title_ar : catalogue.title_en,
      language: catalogue.language,
      fileUrl: catalogue.fileUrl,
    };
  }
  if (ref.source === "product" && ref.productId) {
    const product = getProductById(ref.productId);
    const catalogue = product?.catalogues?.find(
      (c) => c.id === ref.catalogueId,
    );
    if (!product || !catalogue) return undefined;
    return {
      id: `${product.id}-${catalogue.id}`,
      title: isArabic ? catalogue.title_ar : catalogue.title_en,
      language: catalogue.language,
      fileUrl: catalogue.fileUrl,
      kind: catalogue.kind,
      fileType: catalogue.fileType,
    };
  }
  return undefined;
}

function toKnowledgeCardItem(
  item: KnowledgeItem,
  isArabic: boolean,
  typeLabel: string,
  readingTimeLabel: string,
): KnowledgeCardItem {
  return {
    slug: item.slug,
    type: item.type,
    title: isArabic ? item.title_ar : item.title_en,
    summary: isArabic ? item.summary_ar : item.summary_en,
    coverImage: item.coverImage,
    typeLabel,
    readingTimeLabel,
  };
}

/**
 * The unified Knowledge Platform Detail Template — every content type
 * (article, guide, comparison, standard...) in `data/knowledge/` renders
 * through this one file. Every relationship (`relatedSectorIds`,
 * `relatedProductIds`, `relatedBrandIds`, `relatedSolutionIds`,
 * `relatedKnowledgeIds`) is resolved here via immutable id, then converted
 * to the plain localized props each reused `components/sectors/Sector*`
 * component already expects — the id/slug split never leaks past this
 * boundary.
 */
export default async function KnowledgeDetailPage({
  params,
}: KnowledgeDetailPageProps) {
  const { locale, slug } = await params;
  const item = getKnowledgeItemBySlug(slug);
  if (!item) notFound();

  const isArabic = (locale as Locale) === "ar";
  const title = isArabic ? item.title_ar : item.title_en;
  const summary = isArabic ? item.summary_ar : item.summary_en;
  const body = (isArabic ? item.content_ar : item.content_en) ?? summary;
  const paragraphs = body.split("\n\n");

  const t = await getTranslations("knowledge");
  const tNav = await getTranslations("nav");
  const tProducts = await getTranslations("products");
  const tSectors = await getTranslations("sectors");
  const tSolutions = await getTranslations("solutions");

  const pageUrl = `${siteUrl}/${locale}/knowledge/${slug}`;
  const typeLabel = t(`types.${item.type}`);
  const readingTimeMinutes = getReadingTimeMinutes(body);

  const metaParts = [
    item.author ? t("authorLabel", { author: item.author }) : null,
    t("publishedLabel", {
      date: formatKnowledgeDate(item.publishedAt, locale as Locale),
    }),
    item.updatedAt
      ? t("updatedLabel", {
          date: formatKnowledgeDate(item.updatedAt, locale as Locale),
        })
      : null,
    item.version ? t("versionLabel", { version: item.version }) : null,
    t("readingTimeLabel", { minutes: readingTimeMinutes }),
  ].filter((part): part is string => Boolean(part));
  const metaLine = metaParts.join(" · ");

  // Downloadable attachments — item-owned PDFs plus real Sector/Product
  // catalogues resolved via `catalogueRefs`; never a duplicated file entry.
  const attachmentItems: SectorCatalogueItem[] = (item.attachments ?? []).map(
    (attachment) => ({
      id: attachment.id,
      title: isArabic ? attachment.title_ar : attachment.title_en,
      language: attachment.language,
      fileUrl: attachment.fileUrl,
      fileType: attachment.fileType,
    }),
  );
  const catalogueRefItems = (item.catalogueRefs ?? [])
    .map((ref) => resolveCatalogueRef(ref, isArabic))
    .filter(
      (catalogue): catalogue is SectorCatalogueItem => catalogue !== undefined,
    );
  const catalogueItems = [...attachmentItems, ...catalogueRefItems];

  // Product Comparison — `type: "product-comparison"` only.
  const comparisonProducts = (item.comparison?.productIds ?? [])
    .map((id) => getProductById(id))
    .filter((product): product is Product => product !== undefined);
  const comparisonProductItems = comparisonProducts.map((product) => ({
    slug: product.slug,
    name: isArabic ? product.name_ar : product.name_en,
    image: product.images?.[0] ?? null,
    href: `/sectors/${product.sectorId}/products/${product.slug}`,
  }));
  const comparisonRows = buildComparisonRows(comparisonProducts, isArabic);

  // Related Sectors/Products/Brands/Solutions — every relation resolved via
  // its immutable `id`, never `slug`.
  const relatedSectorItems: SectorCardItem[] = (item.relatedSectorIds ?? [])
    .map((id) => getSectorById(id))
    .filter(
      (sector): sector is NonNullable<typeof sector> => sector !== undefined,
    )
    .map((sector) => ({
      slug: sector.slug,
      title: isArabic ? sector.title_ar : sector.title_en,
      description: isArabic ? sector.description_ar : sector.description_en,
      image: sector.image,
      icon: sector.icon,
    }));

  const relatedSolutionItems: SectorCardItem[] = (item.relatedSolutionIds ?? [])
    .map((id) => getSolutionById(id))
    .filter(
      (solution): solution is NonNullable<typeof solution> =>
        solution !== undefined,
    )
    .map((solution) => ({
      slug: solution.slug,
      title: isArabic ? solution.title_ar : solution.title_en,
      description: isArabic ? solution.description_ar : solution.description_en,
      image: solution.heroImage,
      icon: solution.icon,
    }));

  const relatedProductItems: SectorProductItem[] = (
    item.relatedProductIds ?? []
  )
    .map((id) => getProductById(id))
    .filter((product): product is Product => product !== undefined)
    .map((product) => ({
      slug: product.slug,
      title: isArabic ? product.name_ar : product.name_en,
      description: isArabic
        ? product.shortDescription_ar
        : product.shortDescription_en,
      image: product.images?.[0] ?? null,
      href: `/sectors/${product.sectorId}/products/${product.slug}`,
      sectorId: product.sectorId,
      categoryId: product.categoryId,
    }));

  // Related Reading — explicit curated ids, or other items of the same
  // type, same "curated or next-few" fallback shape every other entity's
  // "related" list already uses.
  const relatedReadingSource = item.relatedKnowledgeIds?.length
    ? item.relatedKnowledgeIds
        .map((id) => getKnowledgeItemById(id))
        .filter((related): related is KnowledgeItem => related !== undefined)
    : getKnowledgeItemsByType(item.type).filter(
        (related) => related.id !== item.id,
      );
  const relatedReadingItems: KnowledgeCardItem[] = relatedReadingSource
    .slice(0, MAX_RELATED_READING)
    .map((related) => {
      const relatedBody =
        (isArabic ? related.content_ar : related.content_en) ??
        (isArabic ? related.summary_ar : related.summary_en);
      return toKnowledgeCardItem(
        related,
        isArabic,
        t(`types.${related.type}`),
        t("readingTimeLabel", { minutes: getReadingTimeMinutes(relatedBody) }),
      );
    });

  const faqItems = (item.faqs ?? []).map((faq) => ({
    question: isArabic ? faq.question_ar : faq.question_en,
    answer: isArabic ? faq.answer_ar : faq.answer_en,
  }));

  const ctaTitle =
    (isArabic ? item.ctaLabel_ar : item.ctaLabel_en) ?? t("ctaTitle");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              {
                name: t("breadcrumbLabel"),
                url: `${siteUrl}/${locale}/knowledge`,
              },
              { name: title, url: pageUrl },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              headline: title,
              description: summary,
              image: `${siteUrl}${getSectorImage(item.coverImage)}`,
              datePublished: item.publishedAt,
              dateModified: item.updatedAt,
              author: item.author ?? "GOLTENS Procurement Team",
              url: pageUrl,
            }),
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

      <KnowledgeHero
        title={title}
        summary={summary}
        image={item.coverImage}
        typeLabel={typeLabel}
        metaLine={metaLine}
        homeLabel={tNav("home")}
        knowledgeLabel={t("breadcrumbLabel")}
        navLabel={t("breadcrumbLabel")}
        requestQuoteLabel={t("requestQuote")}
        requestQuoteHref={REQUEST_QUOTE_ANCHOR}
      />

      <PremiumDarkSection>
        <Reveal>
          <Stack gap="md" className="mx-auto max-w-3xl">
            {paragraphs.map((paragraph) => (
              <Text
                key={paragraph}
                size="lg"
                tone="inverse"
                className="leading-[1.8] opacity-85"
              >
                {paragraph}
              </Text>
            ))}
          </Stack>
        </Reveal>
      </PremiumDarkSection>

      {item.images && item.images.length > 0 && (
        <PremiumDarkSection>
          <KnowledgeGallery title={t("galleryTitle")} images={item.images} />
        </PremiumDarkSection>
      )}

      {comparisonProductItems.length > 0 && (
        <PremiumDarkSection>
          <KnowledgeComparisonTable
            title={t("comparisonTitle")}
            products={comparisonProductItems}
            rows={comparisonRows}
            noValueLabel="—"
          />
        </PremiumDarkSection>
      )}

      {catalogueItems.length > 0 && (
        <PremiumDarkSection>
          <SectorCatalogues
            title={t("attachmentsTitle")}
            items={catalogueItems}
            downloadLabel={tSectors("catalogueDownload")}
            comingSoonLabel={tSectors("comingSoon")}
          />
        </PremiumDarkSection>
      )}

      {relatedProductItems.length > 0 && (
        <PremiumDarkSection>
          <SectorProducts
            title={t("relatedProductsTitle")}
            items={relatedProductItems}
            requestQuoteLabel={t("requestQuote")}
            requestQuoteHref={REQUEST_QUOTE_ANCHOR}
            emptyTitle={tProducts("relatedProductsEmptyTitle")}
            emptyBody={tProducts("relatedProductsEmptyBody")}
            addToRfqLabel={tProducts("addToRfqLabel")}
            addToRfqAddedLabel={tProducts("addToRfqAddedLabel")}
            addToCompareLabel={tProducts("addToCompareLabel")}
            addToCompareAddedLabel={tProducts("addToCompareAddedLabel")}
          />
        </PremiumDarkSection>
      )}

      {relatedSectorItems.length > 0 && (
        <PremiumDarkSection>
          <RelatedSectors
            title={t("relatedSectorsTitle")}
            items={relatedSectorItems}
            exploreLabel={tSectors("exploreSector")}
          />
        </PremiumDarkSection>
      )}

      {relatedSolutionItems.length > 0 && (
        <PremiumDarkSection>
          <RelatedSectors
            title={t("relatedSolutionsTitle")}
            items={relatedSolutionItems}
            exploreLabel={tSolutions("exploreSolution")}
            hrefBase="/solutions"
          />
        </PremiumDarkSection>
      )}

      {relatedReadingItems.length > 0 && (
        <PremiumDarkSection>
          <div>
            <Reveal>
              <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
                {t("relatedReadingTitle")}
              </Heading>
            </Reveal>
            <KnowledgeGrid
              items={relatedReadingItems}
              readMoreLabel={t("readMoreLabel")}
              emptyTitle={t("emptyTitle")}
              emptyBody={t("emptyBody")}
            />
          </div>
        </PremiumDarkSection>
      )}

      {faqItems.length > 0 && (
        <PremiumDarkSection>
          <SectorFAQ title={t("faqTitle")} items={faqItems} />
        </PremiumDarkSection>
      )}

      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        title={ctaTitle}
        subtitle={t("ctaDescription")}
        defaultProductCategory={title}
      />
    </>
  );
}
