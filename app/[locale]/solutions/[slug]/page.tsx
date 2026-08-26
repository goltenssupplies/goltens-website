import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import { RelatedSectors } from "@/components/sectors/RelatedSectors";
import { SectorAbout } from "@/components/sectors/SectorAbout";
import { SectorArticles } from "@/components/sectors/SectorArticles";
import { SectorCatalogues } from "@/components/sectors/SectorCatalogues";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import { SectorProducts } from "@/components/sectors/SectorProducts";
import { SectorQuoteCTA } from "@/components/sectors/SectorQuoteCTA";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { getKnowledgeItemsForSolution } from "@/data/knowledge";
import { getProductBySlug } from "@/data/products";
import { getSectorArticle, getSectorContent } from "@/data/sector-content";
import { getSectorBySlug } from "@/data/sectors";
import { getAllSolutionParams, getSolutionBySlug } from "@/data/solutions";
import type { Locale } from "@/i18n/routing";
import { getReadingTimeMinutes } from "@/lib/knowledge";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

const REQUEST_QUOTE_ANCHOR = "request-quote";

interface SolutionPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllSolutionParams();
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  const isArabic = (locale as Locale) === "ar";
  const title =
    (isArabic ? solution.seo?.title_ar : solution.seo?.title_en) ??
    (isArabic ? solution.title_ar : solution.title_en);
  const description =
    (isArabic ? solution.seo?.description_ar : solution.seo?.description_en) ??
    (isArabic ? solution.description_ar : solution.description_en);

  return buildMetadata({
    locale: locale as Locale,
    path: `/solutions/${slug}`,
    title,
    description,
    keywords: solution.seo?.keywords,
  });
}

/**
 * The unified Project Solution Detail Template — every solution in the
 * Project Solutions Platform (`data/solutions/`) renders through this one
 * file. Only the data changes: adding solution #12 means creating one
 * `data/solutions/<slug>.ts` file; this file and every reused
 * `components/sectors/Sector*` component stay untouched.
 */
export default async function SolutionPage({ params }: SolutionPageProps) {
  const { locale, slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const isArabic = (locale as Locale) === "ar";
  const title = isArabic ? solution.title_ar : solution.title_en;
  const description = isArabic
    ? solution.description_ar
    : solution.description_en;

  const t = await getTranslations("solutions");
  const tNav = await getTranslations("nav");
  const tSectors = await getTranslations("sectors");
  const tCommon = await getTranslations("common");
  const tKnowledge = await getTranslations("knowledge");
  const tProducts = await getTranslations("products");

  const pageUrl = `${siteUrl}/${locale}/solutions/${slug}`;

  const targetIndustries = isArabic
    ? solution.targetIndustries_ar
    : solution.targetIndustries_en;
  const procurementScope = isArabic
    ? solution.procurementScope_ar
    : solution.procurementScope_en;

  // Related Sectors — required, always at least one.
  const relatedSectorItems: SectorCardItem[] = solution.relatedSectorSlugs
    .map((sectorSlug) => getSectorBySlug(sectorSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)
    .map((item) => ({
      slug: item.slug,
      title: isArabic ? item.title_ar : item.title_en,
      description: isArabic ? item.description_ar : item.description_en,
      image: item.image,
      icon: item.icon,
    }));

  // Featured Products — resolved via the Product Engine's global slug
  // lookup; `SectorProducts` shows an honest empty state when this is [].
  const productItems = (solution.relatedProductSlugs ?? [])
    .map((productSlug) => getProductBySlug(productSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)
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

  // Downloadable Catalogues — real sector-level catalogues only; the
  // section itself is only rendered when at least one resolves (see below),
  // since `SectorCatalogues` has no built-in empty state (sector pages
  // never need one — they always pass a real or generic-default list).
  const catalogueItems = (solution.relatedCatalogues ?? [])
    .map((ref) => {
      const catalogue = getSectorContent(ref.sectorSlug).catalogues?.find(
        (item) => item.id === ref.catalogueId,
      );
      if (!catalogue) return undefined;
      return {
        id: `${ref.sectorSlug}-${catalogue.id}`,
        title: isArabic ? catalogue.title_ar : catalogue.title_en,
        language: catalogue.language,
        fileUrl: catalogue.fileUrl,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  // Knowledge Center Articles — can span more than one sector, hence the
  // per-item `sectorSlug` override `SectorArticles` now supports.
  const articleItems = (solution.relatedArticles ?? [])
    .map((ref) => {
      const article = getSectorArticle(ref.sectorSlug, ref.articleSlug);
      if (!article) return undefined;
      return {
        slug: article.slug,
        title: isArabic ? article.title_ar : article.title_en,
        summary: isArabic ? article.summary_ar : article.summary_en,
        coverImage: article.coverImage,
        sectorSlug: ref.sectorSlug,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  // Related Knowledge — guides/comparisons/standards etc. genuinely tied to
  // this solution via immutable id, excluding `type: "article"` (already
  // covered by "Knowledge Center Articles" above, sourced from the same
  // registry) so nothing is ever shown twice.
  const relatedKnowledgeItems: KnowledgeCardItem[] =
    getKnowledgeItemsForSolution(solution.id)
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

  // FAQs — a solution's own, or the sector template's existing generic
  // fallback strings (reused, not re-authored) so FAQPage schema is always
  // genuinely populated.
  const faqItems = solution.faqs?.length
    ? solution.faqs.map((faq) => ({
        question: isArabic ? faq.question_ar : faq.question_en,
        answer: isArabic ? faq.answer_ar : faq.answer_en,
      }))
    : [1, 2, 3].map((n) => ({
        question: tSectors(`faqDefaultQ${n}`, { sector: title }),
        answer: tSectors(`faqDefaultA${n}`, { sector: title }),
      }));

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
                url: `${siteUrl}/${locale}/solutions`,
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
            serviceJsonLd({ name: title, description, url: pageUrl, locale }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqItems)),
        }}
      />

      <SolutionHero
        title={title}
        description={description}
        image={solution.heroImage}
        homeLabel={tNav("home")}
        solutionsLabel={t("breadcrumbLabel")}
        navLabel={t("breadcrumbLabel")}
        requestQuoteLabel={tSectors("heroRequestQuote")}
        requestQuoteHref={REQUEST_QUOTE_ANCHOR}
      />

      <PremiumDarkSection>
        <SectorAbout
          title={t("overviewTitle")}
          intro={description}
          categories={targetIndustries}
        />
      </PremiumDarkSection>

      {procurementScope && procurementScope.length > 0 && (
        <PremiumDarkSection>
          <SectorAbout
            title={t("procurementScopeTitle")}
            intro={t("procurementScopeIntro", { solution: title })}
            categories={procurementScope}
          />
        </PremiumDarkSection>
      )}

      <PremiumDarkSection>
        <RelatedSectors
          title={t("relatedSectorsTitle")}
          items={relatedSectorItems}
          exploreLabel={tSectors("exploreSector")}
        />
      </PremiumDarkSection>

      <PremiumDarkSection>
        <SectorProducts
          title={t("productsTitle")}
          items={productItems}
          requestQuoteLabel={tCommon("requestQuotation")}
          requestQuoteHref={REQUEST_QUOTE_ANCHOR}
          emptyTitle={t("productsEmptyTitle")}
          emptyBody={t("productsEmptyBody", { solution: title })}
          addToRfqLabel={tProducts("addToRfqLabel")}
          addToRfqAddedLabel={tProducts("addToRfqAddedLabel")}
          addToCompareLabel={tProducts("addToCompareLabel")}
          addToCompareAddedLabel={tProducts("addToCompareAddedLabel")}
        />
      </PremiumDarkSection>

      {catalogueItems.length > 0 && (
        <PremiumDarkSection>
          <SectorCatalogues
            title={t("cataloguesTitle")}
            items={catalogueItems}
            downloadLabel={tSectors("catalogueDownload")}
            comingSoonLabel={tSectors("comingSoon")}
            datasheetUnavailableLabel={tSectors("datasheetUnavailable")}
          />
        </PremiumDarkSection>
      )}

      <PremiumDarkSection>
        <SectorArticles
          title={t("articlesTitle")}
          items={articleItems}
          sectorSlug={solution.relatedSectorSlugs[0]}
          readMoreLabel={tSectors("articlesReadMore")}
          emptyTitle={t("articlesEmptyTitle")}
          emptyBody={t("articlesEmptyBody", { solution: title })}
        />
      </PremiumDarkSection>

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
        <SectorFAQ title={t("faqTitle")} items={faqItems} />
      </PremiumDarkSection>

      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        locale={locale as Locale}
        title={t("ctaTitle")}
        subtitle={t("ctaDescription")}
        defaultProductCategory={title}
      />
    </>
  );
}
