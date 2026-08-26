import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { KnowledgeArticleCTA } from "@/components/knowledge/KnowledgeArticleCTA";
import { KnowledgeArticleHeader } from "@/components/knowledge/KnowledgeArticleHeader";
import { KnowledgeArticleHeroImage } from "@/components/knowledge/KnowledgeArticleHeroImage";
import {
  KnowledgeArticleSections,
  type KnowledgeArticleSectionItem,
} from "@/components/knowledge/KnowledgeArticleSections";
import { KnowledgeComparisonTable } from "@/components/knowledge/KnowledgeComparisonTable";
import { KnowledgeGallery } from "@/components/knowledge/KnowledgeGallery";
import { KnowledgeMobileToc } from "@/components/knowledge/KnowledgeMobileToc";
import { KnowledgeRelatedList } from "@/components/knowledge/KnowledgeRelatedList";
import {
  KnowledgeTableOfContents,
  type KnowledgeTocItem,
} from "@/components/knowledge/KnowledgeTableOfContents";
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
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
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
import {
  formatKnowledgeDate,
  getKnowledgeReadingContent,
  getReadingTimeMinutes,
} from "@/lib/knowledge";
import { buildMetadata } from "@/lib/metadata";
import { buildComparisonRows } from "@/lib/product-comparison";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/structured-data";
import { getSectorImage } from "@/lib/sectors";
import { siteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

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
  // Legacy flat-paragraph fallback, only rendered when `item.sections` is absent.
  const body = (isArabic ? item.content_ar : item.content_en) ?? summary;
  const paragraphs = body.split("\n\n");
  const readingContent = getKnowledgeReadingContent(item, isArabic);

  const t = await getTranslations("knowledge");
  const tNav = await getTranslations("nav");
  const tProducts = await getTranslations("products");
  const tSectors = await getTranslations("sectors");
  const tSolutions = await getTranslations("solutions");

  const pageUrl = `${siteUrl}/${locale}/knowledge/${slug}`;
  const typeLabel = t(`types.${item.type}`);
  const readingTimeMinutes = getReadingTimeMinutes(readingContent);
  const readingTimeLabel = t("readingTimeLabel", {
    minutes: readingTimeMinutes,
  });
  const lastUpdatedLabel = t("updatedLabel", {
    date: formatKnowledgeDate(
      item.updatedAt ?? item.publishedAt,
      locale as Locale,
    ),
  });

  // Structured H2 body — only built when the item has been authored with
  // `sections`; the page falls back to the flat `paragraphs` render below
  // for any item that hasn't (see `KnowledgeSection` doc comment).
  const sectionItems: KnowledgeArticleSectionItem[] = (item.sections ?? []).map(
    (section, index) => {
      const listEntries = isArabic ? section.list_ar : section.list_en;
      return {
        id: `section-${index}`,
        heading: isArabic ? section.heading_ar : section.heading_en,
        paragraphs: (isArabic ? section.body_ar : section.body_en).split(
          "\n\n",
        ),
        list: listEntries?.length
          ? { items: listEntries, style: section.listStyle ?? "bullet" }
          : undefined,
        subsections: section.subsections?.map((subsection) => {
          const subsectionList = isArabic
            ? subsection.list_ar
            : subsection.list_en;
          return {
            heading: isArabic ? subsection.heading_ar : subsection.heading_en,
            paragraphs: (isArabic
              ? subsection.body_ar
              : subsection.body_en
            ).split("\n\n"),
            list: subsectionList?.length
              ? {
                  items: subsectionList,
                  style: subsection.listStyle ?? "bullet",
                }
              : undefined,
          };
        }),
        callout: section.callout
          ? {
              title:
                (isArabic
                  ? section.callout.title_ar
                  : section.callout.title_en) ?? t("importantNoteTitle"),
              body: isArabic
                ? section.callout.body_ar
                : section.callout.body_en,
            }
          : undefined,
        table: section.table
          ? {
              caption: isArabic
                ? section.table.caption_ar
                : section.table.caption_en,
              headers: isArabic
                ? section.table.headers_ar
                : section.table.headers_en,
              rows: section.table.rows.map((row) => ({
                label: isArabic ? row.label_ar : row.label_en,
                values: isArabic ? row.values_ar : row.values_en,
              })),
            }
          : undefined,
        image: section.image
          ? {
              src: section.image.src,
              caption: isArabic
                ? section.image.caption_ar
                : section.image.caption_en,
            }
          : undefined,
      };
    },
  );
  const tocItems: KnowledgeTocItem[] =
    sectionItems.length > 1
      ? sectionItems.map((section) => ({
          id: section.id,
          label: section.heading,
        }))
      : [];

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
      const relatedReadingContent = getKnowledgeReadingContent(
        related,
        isArabic,
      );
      return toKnowledgeCardItem(
        related,
        isArabic,
        t(`types.${related.type}`),
        t("readingTimeLabel", {
          minutes: getReadingTimeMinutes(relatedReadingContent),
        }),
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

      <Section
        background="obsidian"
        spacing="lg"
        className="pt-28 pb-12 lg:pt-32 lg:pb-14"
      >
        <Container>
          <div className="mx-auto max-w-5xl">
            <KnowledgeArticleHeader
              title={title}
              excerpt={summary}
              categoryLabel={typeLabel}
              lastUpdatedLabel={lastUpdatedLabel}
              readingTimeLabel={readingTimeLabel}
              homeLabel={tNav("home")}
              knowledgeLabel={t("breadcrumbLabel")}
              navLabel={t("breadcrumbLabel")}
            />

            <div className="mt-8 lg:mt-10">
              <KnowledgeArticleHeroImage image={item.coverImage} />
            </div>

            <div className="mt-8 lg:mt-10">
              <KnowledgeMobileToc title={t("onThisPage")} items={tocItems} />
            </div>

            <div
              className={cn(
                "mt-8 lg:mt-12",
                tocItems.length > 0 &&
                  "lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-16",
              )}
            >
              <div className="max-w-[46rem] min-w-0">
                {sectionItems.length > 0 ? (
                  <KnowledgeArticleSections items={sectionItems} />
                ) : (
                  <Reveal>
                    <Stack gap="sm">
                      {paragraphs.map((paragraph) => (
                        <Text
                          key={paragraph}
                          tone="inverse"
                          className="leading-[1.75] opacity-85"
                        >
                          {paragraph}
                        </Text>
                      ))}
                    </Stack>
                  </Reveal>
                )}
              </div>
              {tocItems.length > 0 && (
                <KnowledgeTableOfContents
                  title={t("onThisPage")}
                  items={tocItems}
                />
              )}
            </div>
          </div>
        </Container>
      </Section>

      <KnowledgeArticleCTA
        title={t("articleCtaTitle")}
        buttonLabel={t("requestQuote")}
        href={REQUEST_QUOTE_ANCHOR}
      />

      {item.images && item.images.length > 0 && (
        <PremiumDarkSection spacing="md">
          <KnowledgeGallery title={t("galleryTitle")} images={item.images} />
        </PremiumDarkSection>
      )}

      {comparisonProductItems.length > 0 && (
        <PremiumDarkSection spacing="md">
          <KnowledgeComparisonTable
            title={t("comparisonTitle")}
            products={comparisonProductItems}
            rows={comparisonRows}
            noValueLabel="—"
          />
        </PremiumDarkSection>
      )}

      {catalogueItems.length > 0 && (
        <PremiumDarkSection spacing="md">
          <SectorCatalogues
            title={t("attachmentsTitle")}
            items={catalogueItems}
            downloadLabel={tSectors("catalogueDownload")}
            comingSoonLabel={tSectors("comingSoon")}
            datasheetUnavailableLabel={tSectors("datasheetUnavailable")}
          />
        </PremiumDarkSection>
      )}

      {relatedProductItems.length > 0 && (
        <PremiumDarkSection spacing="md">
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
        <PremiumDarkSection spacing="md">
          <RelatedSectors
            title={t("relatedSectorsTitle")}
            items={relatedSectorItems}
            exploreLabel={tSectors("exploreSector")}
          />
        </PremiumDarkSection>
      )}

      {relatedSolutionItems.length > 0 && (
        <PremiumDarkSection spacing="md">
          <RelatedSectors
            title={tSolutions("relatedSolutionsTitle")}
            items={relatedSolutionItems}
            exploreLabel={tSolutions("exploreSolution")}
            hrefBase="/solutions"
          />
        </PremiumDarkSection>
      )}

      {relatedReadingItems.length > 0 && (
        <PremiumDarkSection spacing="md">
          <div>
            <Reveal>
              <Heading
                level={2}
                size={3}
                tone="inverse"
                className="mx-auto mb-8 max-w-3xl lg:mb-10"
              >
                {t("relatedReadingTitle")}
              </Heading>
            </Reveal>
            <KnowledgeRelatedList items={relatedReadingItems} />
          </div>
        </PremiumDarkSection>
      )}

      {faqItems.length > 0 && (
        <PremiumDarkSection spacing="md">
          <SectorFAQ title={t("faqTitle")} items={faqItems} />
        </PremiumDarkSection>
      )}

      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        locale={locale as Locale}
        title={ctaTitle}
        subtitle={t("ctaDescription")}
        defaultProductCategory={title}
      />
    </>
  );
}
