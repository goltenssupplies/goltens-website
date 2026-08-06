import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import { ProductExplorer } from "@/components/products/ProductExplorer";
import { RelatedSectors } from "@/components/sectors/RelatedSectors";
import { SectorAbout } from "@/components/sectors/SectorAbout";
import {
  SectorAdvantages,
  type SectorAdvantageItem,
} from "@/components/sectors/SectorAdvantages";
import { SectorApplications } from "@/components/sectors/SectorApplications";
import { SectorArticles } from "@/components/sectors/SectorArticles";
import { SectorAvailableProducts } from "@/components/sectors/SectorAvailableProducts";
import { SectorCatalogues } from "@/components/sectors/SectorCatalogues";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorHero } from "@/components/sectors/SectorHero";
import { SectorProjects } from "@/components/sectors/SectorProjects";
import { SectorQuoteCTA } from "@/components/sectors/SectorQuoteCTA";
import { Button } from "@/components/ui/Button";
import { ContactCard } from "@/components/ui/ContactCard";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { getAvailableProducts } from "@/data/available-products";
import { getKnowledgeItemsForSector } from "@/data/knowledge";
import { getCategoriesBySector } from "@/data/product-categories";
import { getProductsBySector } from "@/data/products";
import { getSectorContent } from "@/data/sector-content";
import { getSectorBySlug, getSortedSectors, SECTORS } from "@/data/sectors";
import { getSolutionsBySectorSlug } from "@/data/solutions";
import type { Locale } from "@/i18n/routing";
import { getReadingTimeMinutes } from "@/lib/knowledge";
import { buildMetadata } from "@/lib/metadata";
import {
  DEFAULT_ADVANTAGE_ICONS,
  SECTOR_CONTENT_ICONS,
} from "@/lib/sector-content-icons";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";
import {
  contactEmail,
  contactPhoneDisplay,
  contactPhoneHref,
  contactWhatsAppHref,
  siteUrl,
} from "@/lib/site";

const REQUEST_QUOTE_ANCHOR = "request-quote";
const CATALOGUES_ANCHOR = "catalogues";

interface SectorPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return SECTORS.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: SectorPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  const isArabic = (locale as Locale) === "ar";
  const seo = getSectorContent(slug).seo;

  const title =
    (isArabic ? seo?.title_ar : seo?.title_en) ??
    (isArabic ? sector.title_ar : sector.title_en);
  const description =
    (isArabic ? seo?.description_ar : seo?.description_en) ??
    (isArabic ? sector.description_ar : sector.description_en);

  return buildMetadata({
    locale: locale as Locale,
    path: `/sectors/${slug}`,
    title,
    description,
    keywords: seo?.keywords,
  });
}

/**
 * The unified Sector Detail Template — every procurement sector renders
 * through this one file. Only the data changes: `data/sectors.ts` for the
 * core row (title, description, image) and `data/sector-content/<slug>.ts`
 * (optional — see `getSectorContent`) for the richer sections. A sector
 * with no registered content still renders a complete, honest page via
 * this file's own defaults (generic advantages/FAQ, "Coming Soon"
 * products/catalogues, an empty-state Knowledge Center, no Applications
 * section). Adding sector #11 never touches this file or any
 * `components/sectors/Sector*` component.
 */
export default async function SectorPage({ params }: SectorPageProps) {
  const { locale, slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const isArabic = (locale as Locale) === "ar";
  const title = isArabic ? sector.title_ar : sector.title_en;
  const subtitle = isArabic ? sector.subtitle_ar : sector.subtitle_en;
  const description = isArabic ? sector.description_ar : sector.description_en;
  const content = getSectorContent(slug);

  const t = await getTranslations("sectors");
  const tNav = await getTranslations("nav");
  const tContact = await getTranslations("contact");
  const tCommon = await getTranslations("common");
  const tWhyChooseUs = await getTranslations("whyChooseUs");
  const tKnowledge = await getTranslations("knowledge");
  const tProducts = await getTranslations("products");
  const tSolutions = await getTranslations("solutions");
  const tDownloads = await getTranslations("downloads");

  const pageUrl = `${siteUrl}/${locale}/sectors/${slug}`;

  // About — only rendered when a sector has curated its own; never
  // fabricated filler for a sector with no real intro yet.
  const about = content.about
    ? {
        title: t("aboutTitle", { sector: title }),
        intro: isArabic ? content.about.intro_ar : content.about.intro_en,
        categories: isArabic
          ? content.about.categories_ar
          : content.about.categories_en,
        complianceNote: isArabic
          ? content.about.complianceNote_ar
          : content.about.complianceNote_en,
      }
    : null;

  // Products — sourced from the Product Engine registry (`data/products/`),
  // not `content`; always rendered, `ProductExplorer`/`SectorProducts` show
  // an honest empty state themselves when this is []. Each card now links
  // to a real product detail page. `categoryId` drives `ProductExplorer`'s
  // category filter — it's a no-op display prop for `SectorProducts` when
  // that filter bar doesn't render (one category or fewer).
  const productItems = getProductsBySector(sector.id).map((product) => ({
    slug: product.slug,
    title: isArabic ? product.name_ar : product.name_en,
    description: isArabic
      ? product.shortDescription_ar
      : product.shortDescription_en,
    image: product.images?.[0] ?? null,
    href: `/sectors/${slug}/products/${product.slug}`,
    sectorId: product.sectorId,
    categoryId: product.categoryId,
  }));

  // Product categories actually registered for this sector — drives
  // `ProductExplorer`'s filter chips (hidden automatically when a sector's
  // products span one category or fewer).
  const productCategories = getCategoriesBySector(sector.id).map(
    (category) => ({
      id: category.id,
      label: isArabic ? category.name_ar : category.name_en,
    }),
  );

  // Related Solutions — real Project Solutions that genuinely draw from
  // this sector, via the reverse of `Solution.relatedSectorSlugs`.
  // `RelatedSectors` renders nothing when this is [].
  const relatedSolutionItems: SectorCardItem[] = getSolutionsBySectorSlug(
    sector.slug,
  ).map((solution) => ({
    slug: solution.slug,
    title: isArabic ? solution.title_ar : solution.title_en,
    description: isArabic ? solution.description_ar : solution.description_en,
    image: solution.heroImage,
    icon: solution.icon,
  }));

  // Available Products — a flat, generic product-category list (no
  // manufacturer/model names): the customer chooses the product, GOLTENS
  // sources the manufacturer after quotation.
  const availableProducts = getAvailableProducts(sector.id);
  const availableProductItems = isArabic
    ? (availableProducts?.ar ?? [])
    : (availableProducts?.en ?? []);

  // Applications — only rendered when a sector has curated its own; never
  // a generic/irrelevant default list.
  const applicationItems = (content.applications ?? []).map((application) => ({
    title: isArabic ? application.title_ar : application.title_en,
    icon: application.icon,
  }));

  // Projects We Serve — only rendered when a sector has curated its own;
  // same "never a generic/irrelevant default list" rule as Applications.
  const projectItems = (content.projects ?? []).map((project) => ({
    title: isArabic ? project.title_ar : project.title_en,
    description: isArabic ? project.description_ar : project.description_en,
    image: project.image,
  }));

  // Advantages — a sector's own, or the sitewide "Why Choose GOLTENS" list
  // (already-approved, reused, never invented).
  const advantageItems: SectorAdvantageItem[] = content.advantages?.length
    ? content.advantages.map((advantage) => ({
        title: isArabic ? advantage.title_ar : advantage.title_en,
        icon:
          SECTOR_CONTENT_ICONS[advantage.icon] ?? DEFAULT_ADVANTAGE_ICONS[0],
      }))
    : (tWhyChooseUs.raw("items") as string[]).map((label, index) => ({
        title: label,
        icon: DEFAULT_ADVANTAGE_ICONS[index % DEFAULT_ADVANTAGE_ICONS.length],
      }));

  // Catalogues — a sector's own, or a generic 4-tile default naming this
  // sector, all honestly "Coming Soon" until a real fileUrl is added.
  const catalogueItems = content.catalogues?.length
    ? content.catalogues.map((catalogue) => ({
        id: catalogue.id,
        title: isArabic ? catalogue.title_ar : catalogue.title_en,
        brand: catalogue.brand,
        language: catalogue.language,
        fileUrl: catalogue.fileUrl,
      }))
    : [
        {
          id: "company-profile",
          title: t("cataloguesDefaultCompanyProfile"),
          language: "en/ar",
          fileUrl: null,
        },
        {
          id: "sector-catalog",
          title: t("cataloguesDefaultCatalog", { sector: title }),
          language: "en",
          fileUrl: null,
        },
        {
          id: "technical-datasheets",
          title: t("cataloguesDefaultDatasheets"),
          language: "en",
          fileUrl: null,
        },
        {
          id: "certificates",
          title: t("cataloguesDefaultCertificates"),
          language: "en/ar",
          fileUrl: null,
        },
      ];

  // Articles — always []  today (no real article content exists anywhere
  // yet); `SectorArticles` shows an honest empty state.
  const articleItems = (content.articles ?? []).map((article) => ({
    slug: article.slug,
    title: isArabic ? article.title_ar : article.title_en,
    summary: isArabic ? article.summary_ar : article.summary_en,
    coverImage: article.coverImage,
  }));

  // Related Knowledge — guides/comparisons/standards etc. genuinely tied to
  // this sector via immutable id, excluding `type: "article"` (already
  // covered by the Knowledge Center section above, sourced from the same
  // registry) so nothing is ever shown twice.
  const relatedKnowledgeItems: KnowledgeCardItem[] = getKnowledgeItemsForSector(
    sector.id,
  )
    .filter((knowledgeItem) => knowledgeItem.type !== "article")
    .map((knowledgeItem) => {
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

  // FAQs — a sector's own, or a shared generic default set, so the page's
  // FAQPage schema is always genuinely populated.
  const faqItems = content.faqs?.length
    ? content.faqs.map((faq) => ({
        question: isArabic ? faq.question_ar : faq.question_en,
        answer: isArabic ? faq.answer_ar : faq.answer_en,
      }))
    : [1, 2, 3].map((n) => ({
        question: t(`faqDefaultQ${n}`, { sector: title }),
        answer: t(`faqDefaultA${n}`, { sector: title }),
      }));

  // Related sectors — a sector's own curated slugs, or the next few other
  // sectors by `order`.
  const relatedSlugs = content.relatedSectorSlugs?.length
    ? content.relatedSectorSlugs
    : getSortedSectors()
        .filter((item) => item.slug !== slug)
        .slice(0, 5)
        .map((item) => item.slug);
  const relatedItems: SectorCardItem[] = relatedSlugs
    .map((relatedSlug) => getSectorBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)
    .map((item) => ({
      slug: item.slug,
      title: isArabic ? item.title_ar : item.title_en,
      description: isArabic ? item.description_ar : item.description_en,
      image: item.image,
      icon: item.icon,
    }));

  const contactItems = [
    {
      icon: <Phone className="size-5" />,
      label: tContact("phoneLabel"),
      value: (
        <span dir="ltr" className="ltr">
          {contactPhoneDisplay}
        </span>
      ),
      href: contactPhoneHref,
    },
    {
      icon: <Mail className="size-5" />,
      label: tContact("emailLabel"),
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: <MessageCircle className="size-5" />,
      label: tContact("whatsappLabel"),
      value: (
        <span dir="ltr" className="ltr">
          {contactPhoneDisplay}
        </span>
      ),
      href: contactWhatsAppHref,
    },
    {
      icon: <MapPin className="size-5" />,
      label: tContact("locationLabel"),
      value: tContact("location"),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: tNav("sectors"), url: `${siteUrl}/${locale}/sectors` },
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

      <SectorHero
        title={title}
        subtitle={subtitle}
        description={description}
        image={sector.image}
        homeLabel={tNav("home")}
        sectorsLabel={tNav("sectors")}
        navLabel={tNav("sectors")}
        requestQuoteLabel={t("heroRequestQuote")}
        requestQuoteHref={REQUEST_QUOTE_ANCHOR}
        secondaryCtaLabel={t("heroDownloadCatalogue")}
        secondaryCtaHref={CATALOGUES_ANCHOR}
      />

      {about && (
        <PremiumDarkSection>
          <SectorAbout
            title={about.title}
            intro={about.intro}
            categories={about.categories}
            complianceNote={about.complianceNote}
          />
        </PremiumDarkSection>
      )}

      <PremiumDarkSection>
        <ProductExplorer
          title={t("productsTitle")}
          items={productItems}
          categories={productCategories}
          requestQuoteLabel={tCommon("requestQuotation")}
          requestQuoteHref={REQUEST_QUOTE_ANCHOR}
          emptyTitle={t("productsEmptyTitle")}
          emptyBody={t("productsComingSoon")}
          searchLabel={tProducts("filterSearchLabel")}
          searchPlaceholder={tProducts("filterSearchPlaceholder")}
          filterAllLabel={tProducts("filterAllLabel")}
          noResultsTitle={tProducts("filterNoResultsTitle")}
          noResultsDescription={tProducts("filterNoResultsDescription")}
          addToRfqLabel={tProducts("addToRfqLabel")}
          addToRfqAddedLabel={tProducts("addToRfqAddedLabel")}
          addToCompareLabel={tProducts("addToCompareLabel")}
          addToCompareAddedLabel={tProducts("addToCompareAddedLabel")}
        />
      </PremiumDarkSection>

      <PremiumDarkSection>
        <SectorAvailableProducts
          title={t("availableProductsTitle")}
          items={availableProductItems}
        />
      </PremiumDarkSection>

      {applicationItems.length > 0 && (
        <PremiumDarkSection>
          <SectorApplications
            title={t("applicationsTitle")}
            items={applicationItems}
          />
        </PremiumDarkSection>
      )}

      {projectItems.length > 0 && (
        <PremiumDarkSection>
          <SectorProjects title={t("projectsTitle")} items={projectItems} />
        </PremiumDarkSection>
      )}

      <PremiumDarkSection>
        <SectorAdvantages title={t("advantagesTitle")} items={advantageItems} />
      </PremiumDarkSection>

      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        title={t("ctaTitle")}
        subtitle={t("ctaDescription")}
        defaultProductCategory={title}
      />

      <div id={CATALOGUES_ANCHOR} className="scroll-mt-20">
        <PremiumDarkSection>
          <SectorCatalogues
            title={t("cataloguesTitle")}
            items={catalogueItems}
            downloadLabel={t("catalogueDownload")}
            comingSoonLabel={t("comingSoon")}
          />
          <div className="mt-8">
            <Button
              href="/downloads"
              variant="secondary"
              size="sm"
              className="border-canvas/30 text-canvas hover:bg-canvas/10 w-fit"
            >
              {tDownloads("viewDownloadCenter")}
            </Button>
          </div>
        </PremiumDarkSection>
      </div>

      <PremiumDarkSection>
        <SectorArticles
          title={t("articlesTitle")}
          items={articleItems}
          sectorSlug={slug}
          readMoreLabel={t("articlesReadMore")}
          emptyTitle={t("articlesEmptyTitle")}
          emptyBody={t("articlesEmptyBody")}
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
        <RelatedSectors
          title={t("relatedTitle")}
          items={relatedItems}
          exploreLabel={t("exploreSector")}
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

      <PremiumDarkSection>
        <SectorFAQ title={t("faqTitle")} items={faqItems} />
      </PremiumDarkSection>

      <PremiumDarkSection>
        <Reveal>
          <Grid columns={2} gap="lg">
            {contactItems.map((item) => (
              <ContactCard
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.value}
                href={item.href}
                tone="inverse"
              />
            ))}
          </Grid>
        </Reveal>
      </PremiumDarkSection>
    </>
  );
}
