import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import type { KnowledgeCardItem } from "@/components/knowledge/KnowledgeCard";
import { KnowledgeGrid } from "@/components/knowledge/KnowledgeGrid";
import {
  ProductExplorer,
  type ProductExplorerCategory,
  type ProductExplorerItem,
} from "@/components/products/ProductExplorer";
import { RelatedSectors } from "@/components/sectors/RelatedSectors";
import { SectorAbout } from "@/components/sectors/SectorAbout";
import {
  SectorAdvantages,
  type SectorAdvantageItem,
} from "@/components/sectors/SectorAdvantages";
import { SectorArticles } from "@/components/sectors/SectorArticles";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorHero } from "@/components/sectors/SectorHero";
import { SectorQuoteCTA } from "@/components/sectors/SectorQuoteCTA";
import { ContactCard } from "@/components/ui/ContactCard";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { getKnowledgeItemsForSector } from "@/data/knowledge";
import { getCategoriesBySector } from "@/data/product-categories";
import { getProductsBySector } from "@/data/products";
import { getSectorContent } from "@/data/sector-content";
import { getSectorBySlug, getSortedSectors, SECTORS } from "@/data/sectors";
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
  const tWhyChooseUs = await getTranslations("whyChooseUs");
  const tKnowledge = await getTranslations("knowledge");
  const tProducts = await getTranslations("products");
  const tCommon = await getTranslations("common");

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

  // Sector Products / Product Explorer — every real `Product` from the
  // Product Engine (`data/products/`) that belongs to this sector, grouped
  // by its `ProductCategory`. Single source of truth: no per-sector product
  // list is ever duplicated here, only mapped/localized from the shared
  // registry. Each card links to the real product detail route
  // (`/sectors/[slug]/products/[product]`).
  const sectorProducts = getProductsBySector(sector.id);
  const sectorProductCategories = getCategoriesBySector(sector.id);

  const productExplorerItems: ProductExplorerItem[] = sectorProducts.map(
    (product) => ({
      slug: product.slug,
      title: isArabic ? product.name_ar : product.name_en,
      description: isArabic
        ? product.shortDescription_ar
        : product.shortDescription_en,
      image: product.images?.[0] ?? null,
      href: `/sectors/${slug}/products/${product.slug}`,
      sectorId: product.sectorId,
      categoryId: product.categoryId,
    }),
  );

  const productExplorerCategories: ProductExplorerCategory[] =
    sectorProductCategories.map((category) => ({
      id: category.id,
      label: isArabic ? category.name_ar : category.name_en,
    }));

  // Industries We Serve — the same static list on every sector page (not
  // per-sector content), per the content refinement brief.
  const industriesServedItems = t.raw("industriesServedItems") as string[];

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
        <Reveal>
          <Text tone="inverse" className="mb-10 max-w-3xl opacity-80 lg:mb-12">
            {t("scopeOfSupplyIntro")}
          </Text>
        </Reveal>
        <ProductExplorer
          title={t("scopeOfSupplyTitle")}
          items={productExplorerItems}
          categories={productExplorerCategories}
          searchLabel={tProducts("filterSearchLabel")}
          searchPlaceholder={tProducts("filterSearchPlaceholder")}
          filterAllLabel={tProducts("filterAllLabel")}
          noResultsTitle={tProducts("filterNoResultsTitle")}
          noResultsDescription={tProducts("filterNoResultsDescription")}
          requestQuoteLabel={tCommon("requestQuotation")}
          requestQuoteHref={REQUEST_QUOTE_ANCHOR}
          emptyTitle={t("productsEmptyTitle")}
          emptyBody={t("productsComingSoon")}
          addToRfqLabel={tProducts("addToRfqLabel")}
          addToRfqAddedLabel={tProducts("addToRfqAddedLabel")}
          addToCompareLabel={tProducts("addToCompareLabel")}
          addToCompareAddedLabel={tProducts("addToCompareAddedLabel")}
        />
      </PremiumDarkSection>

      <PremiumDarkSection>
        <Reveal>
          <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
            {t("industriesServedTitle")}
          </Heading>
        </Reveal>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
          {industriesServedItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="bg-gold mt-2.5 size-1.5 shrink-0 rounded-full"
              />
              <Text tone="inverse" className="opacity-80">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </PremiumDarkSection>

      <PremiumDarkSection>
        <SectorAdvantages title={t("advantagesTitle")} items={advantageItems} />
      </PremiumDarkSection>

      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        locale={locale as Locale}
        title={t("ctaTitle")}
        subtitle={t("ctaDescription")}
        defaultProductCategory={title}
      />

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
