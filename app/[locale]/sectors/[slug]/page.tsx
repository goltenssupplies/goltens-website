import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ChevronDown, Info } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { SetFooterBackgroundImage } from "@/components/layout/SetFooterBackgroundImage";
import { SetWhatsAppMessage } from "@/components/layout/SetWhatsAppMessage";
import {
  ProductExplorer,
  type ProductExplorerCategory,
  type ProductExplorerItem,
} from "@/components/products/ProductExplorer";
import { EquipmentGuideIntro } from "@/components/sectors/EquipmentGuideIntro";
import {
  EquipmentProjectMatrix,
  type EquipmentProjectMatrixRow,
} from "@/components/sectors/EquipmentProjectMatrix";
import { EquipmentReplacementGuide } from "@/components/sectors/EquipmentReplacementGuide";
import { EquipmentRequestGuide } from "@/components/sectors/EquipmentRequestGuide";
import { QuotePrefillLink } from "@/components/sectors/QuotePrefillLink";
import { SectorAbout } from "@/components/sectors/SectorAbout";
import {
  SectorAdvantages,
  type SectorAdvantageItem,
} from "@/components/sectors/SectorAdvantages";
import {
  SectorApplications,
  type SectorApplicationItem,
} from "@/components/sectors/SectorApplications";
import {
  SectorCatalogues,
  type SectorCatalogueItem,
} from "@/components/sectors/SectorCatalogues";
import { SectorCategoryNav } from "@/components/sectors/SectorCategoryNav";
import {
  SectorEquipmentGuide,
  type SectorEquipmentGuideCategory,
} from "@/components/sectors/SectorEquipmentGuide";
import { SectorFAQ } from "@/components/sectors/SectorFAQ";
import { SectorHero } from "@/components/sectors/SectorHero";
import { SectorHowWeWork } from "@/components/sectors/SectorHowWeWork";
import {
  SectorProjects,
  type SectorProjectItem,
} from "@/components/sectors/SectorProjects";
import { SectorQuoteCTA } from "@/components/sectors/SectorQuoteCTA";
import { RelatedSectors } from "@/components/sectors/RelatedSectors";
import type { SectorCardItem } from "@/components/sectors/SectorCard";
import { SendRequirementCTA } from "@/components/rfq/SendRequirementCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import {
  getCategoriesBySector,
  getCategoryById,
} from "@/data/product-categories";
import { getProductById, getProductsBySector } from "@/data/products";
import { getSectorContent } from "@/data/sector-content";
import { getCompactGuidePage } from "@/data/sector-content/compact-guide-page";
import type { SectorEquipmentGuide as SectorEquipmentGuideData } from "@/data/sector-content/types";
import { getSectorBySlug, getSortedSectors, SECTORS } from "@/data/sectors";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import {
  DEFAULT_ADVANTAGE_ICONS,
  SECTOR_CONTENT_ICONS,
} from "@/lib/sector-content-icons";
import {
  hasPublicIdentity,
  toPublicProduct,
} from "@/lib/products/public-product";
import { getSectorImage } from "@/lib/sectors";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

const REQUEST_QUOTE_ANCHOR = "request-quote";
const PROJECT_MATRIX_ANCHOR = "equipment-by-project";
const QUOTATION_CHECKLIST_ANCHOR = "quotation-checklist";
const REPLACEMENT_ANCHOR = "replacing-existing-equipment";
const ROUTING_ANCHOR = "other-sector-requirements";
/** Anchor of one routing entry, e.g. `route-electrical-energy`. */
const routeAnchor = (sectorSlug: string) => `route-${sectorSlug}`;

/**
 * Localizes a sector's equipment guide (`SectorContent.equipmentGuide`)
 * into the plain props its components take. Editorial guide content only:
 * no product field is ever read here except for a guide's optional
 * `linkedProductId`, and that product is only linked when it belongs to
 * this sector AND passes `hasPublicIdentity()` — a non-public product is
 * never surfaced, not even as a link.
 */
function buildEquipmentGuideView({
  guide,
  sectorId,
  slug,
  isArabic,
  ctaLabel,
}: {
  guide: SectorEquipmentGuideData;
  sectorId: string;
  slug: string;
  isArabic: boolean;
  ctaLabel: (equipment: string) => string;
}) {
  const industryLabels = new Map(
    guide.industries.map((industry) => [
      industry.id,
      isArabic ? industry.label_ar : industry.label_en,
    ]),
  );
  const equipmentNames = new Map(
    guide.categories
      .flatMap((category) => category.equipment)
      .map((equipment) => [
        equipment.id,
        isArabic ? equipment.name_ar : equipment.name_en,
      ]),
  );
  const toEquipmentLinks = (ids: string[]) =>
    ids
      .filter((id) => equipmentNames.has(id))
      .map((id) => ({ id, label: equipmentNames.get(id) as string }));

  const categories: SectorEquipmentGuideCategory[] = guide.categories
    .filter(
      (category) => getCategoryById(category.categoryId)?.sectorId === sectorId,
    )
    .map((category) => {
      const categoryTitle = isArabic ? category.title_ar : category.title_en;
      return {
        id: category.categoryId,
        title: categoryTitle,
        intro: isArabic ? category.intro_ar : category.intro_en,
        icon: SECTOR_CONTENT_ICONS[category.icon] ?? DEFAULT_ADVANTAGE_ICONS[0],
        equipment: category.equipment.map((equipment) => {
          const name = isArabic ? equipment.name_ar : equipment.name_en;
          const linkedProduct = equipment.linkedProductId
            ? getProductById(equipment.linkedProductId)
            : undefined;
          const listedHref =
            linkedProduct &&
            linkedProduct.sectorId === sectorId &&
            hasPublicIdentity(linkedProduct)
              ? `/sectors/${slug}/products/${toPublicProduct(linkedProduct).slug}`
              : undefined;
          return {
            id: equipment.id,
            name,
            summary: isArabic ? equipment.summary_ar : equipment.summary_en,
            whatItIs: isArabic ? equipment.whatItIs_ar : equipment.whatItIs_en,
            usedFor: isArabic ? equipment.usedFor_ar : equipment.usedFor_en,
            applications: isArabic
              ? equipment.applications_ar
              : equipment.applications_en,
            industries: equipment.industryIds
              .map((id) => industryLabels.get(id))
              .filter((label): label is string => Boolean(label)),
            selectionFactors: equipment.selectionFactors.map((factor) => ({
              factor: isArabic ? factor.factor_ar : factor.factor_en,
              detail: isArabic ? factor.detail_ar : factor.detail_en,
            })),
            requestChecklist: isArabic
              ? equipment.requestChecklist_ar
              : equipment.requestChecklist_en,
            related: toEquipmentLinks(equipment.relatedEquipmentIds ?? []),
            listedHref,
            availability: isArabic
              ? guide.availability_ar
              : guide.availability_en,
            ctaLabel: ctaLabel(name),
            prefill: `${name} — ${categoryTitle}`,
          };
        }),
      };
    });

  const projectRows: EquipmentProjectMatrixRow[] = guide.projects.map(
    (project) => ({
      id: project.id,
      title: isArabic ? project.title_ar : project.title_en,
      description: isArabic ? project.description_ar : project.description_en,
      equipment: toEquipmentLinks(project.equipmentIds),
    }),
  );

  return {
    intro: {
      eyebrow: isArabic ? guide.intro.eyebrow_ar : guide.intro.eyebrow_en,
      lead: isArabic ? guide.intro.lead_ar : guide.intro.lead_en,
      note: isArabic ? guide.intro.note_ar : guide.intro.note_en,
    },
    projectsTitle: isArabic ? guide.projectsTitle_ar : guide.projectsTitle_en,
    projectsIntro: isArabic ? guide.projectsIntro_ar : guide.projectsIntro_en,
    projectRows,
    categories,
    request: {
      title: isArabic ? guide.request.title_ar : guide.request.title_en,
      intro: isArabic ? guide.request.intro_ar : guide.request.intro_en,
      checklist: isArabic
        ? guide.request.checklist_ar
        : guide.request.checklist_en,
      checklistTitle: isArabic
        ? guide.request.checklistTitle_ar
        : guide.request.checklistTitle_en,
      secondaryChecklist: guide.request.secondaryChecklist && {
        title: isArabic
          ? guide.request.secondaryChecklist.title_ar
          : guide.request.secondaryChecklist.title_en,
        items: isArabic
          ? guide.request.secondaryChecklist.items_ar
          : guide.request.secondaryChecklist.items_en,
      },
      checklistNote: isArabic
        ? guide.request.checklistNote_ar
        : guide.request.checklistNote_en,
      processTitle: isArabic
        ? guide.request.processTitle_ar
        : guide.request.processTitle_en,
      steps: guide.request.steps.map((step) => ({
        title: isArabic ? step.title_ar : step.title_en,
        description: isArabic ? step.description_ar : step.description_en,
      })),
    },
    replacement: guide.replacement && {
      title: isArabic ? guide.replacement.title_ar : guide.replacement.title_en,
      intro: isArabic ? guide.replacement.intro_ar : guide.replacement.intro_en,
      flowLabel: isArabic
        ? guide.replacement.flowTitle_ar
        : guide.replacement.flowTitle_en,
      flow: isArabic ? guide.replacement.flow_ar : guide.replacement.flow_en,
      groups: guide.replacement.groups.map((group) => ({
        title: isArabic ? group.title_ar : group.title_en,
        items: isArabic ? group.items_ar : group.items_en,
      })),
      note: isArabic ? guide.replacement.note_ar : guide.replacement.note_en,
      ctaLabel: isArabic
        ? guide.replacement.ctaLabel_ar
        : guide.replacement.ctaLabel_en,
      prefill: isArabic
        ? guide.replacement.prefill_ar
        : guide.replacement.prefill_en,
    },
    quote: {
      title: isArabic ? guide.quote.title_ar : guide.quote.title_en,
      subtitle: isArabic ? guide.quote.subtitle_ar : guide.quote.subtitle_en,
    },
  };
}

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
  const content = getSectorContent(slug);
  // Sector content may replace the hero copy for this page only.
  const heroCopy = content.hero ?? sector;
  const subtitle = isArabic ? heroCopy.subtitle_ar : heroCopy.subtitle_en;
  const description = isArabic
    ? heroCopy.description_ar
    : heroCopy.description_en;

  const t = await getTranslations("sectors");
  const tNav = await getTranslations("nav");
  const tWhyChooseUs = await getTranslations("whyChooseUs");
  const tProducts = await getTranslations("products");
  const tCommon = await getTranslations("common");

  const pageUrl = `${siteUrl}/${locale}/sectors/${slug}`;

  // Floating WhatsApp button override for this sector — built from the
  // `title` already resolved above, no second sector lookup.
  const whatsappMessage = tCommon("whatsappSectorMessage", {
    sectorName: title,
  });

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
  // Only categories that currently have at least one real product — a
  // taxonomy-only category (e.g. Lubricants & Oils' Engine Oils) stays in
  // `data/product-categories.ts` for future use, but must never be sent to
  // the client at all here: `ProductExplorer` already filters its own
  // rendered chip row to "present" categories, but the full `categories`
  // prop is still serialized into the page for hydration regardless of
  // that render-time filter, so an unfiltered list here would still leak
  // every empty category's name/href into the page source.
  const sectorProductCategories = getCategoriesBySector(sector.id).filter(
    (category) =>
      sectorProducts.some((product) => product.categoryId === category.id),
  );

  // Every product is projected through `toPublicProduct()` before any of
  // its identity fields are read — this listing must never pass a raw
  // `Product` field downstream, same boundary as the product detail page.
  // Filtered to migrated products first: the catalog is migrated
  // incrementally, so an unmigrated product here is simply omitted from
  // the listing rather than throwing and taking down the whole page.
  const productExplorerItems: ProductExplorerItem[] = sectorProducts
    .filter(hasPublicIdentity)
    .map((product) => toPublicProduct(product))
    .map((publicProduct) => ({
      slug: publicProduct.slug,
      title: isArabic ? publicProduct.name_ar : publicProduct.name_en,
      description: isArabic
        ? publicProduct.shortDescription_ar
        : publicProduct.shortDescription_en,
      image: publicProduct.images?.[0] ?? null,
      href: `/sectors/${slug}/products/${publicProduct.slug}`,
      sectorId: publicProduct.sectorId,
      categoryId: publicProduct.categoryId,
    }));

  const productExplorerCategories: ProductExplorerCategory[] =
    sectorProductCategories.map((category) => ({
      id: category.id,
      label: isArabic ? category.name_ar : category.name_en,
      href: `/sectors/${slug}/categories/${category.slug}`,
    }));

  // Industries We Serve — a sector's own curated `applications` (real,
  // sector-specific settings, already authored for every current sector)
  // when present; the old sitewide generic list only as a fallback for a
  // sector that hasn't curated its own yet, so this section never renders
  // empty.
  const industriesServedItems = t.raw("industriesServedItems") as string[];
  const applicationItems: SectorApplicationItem[] | null = content.applications
    ?.length
    ? content.applications.map((application) => ({
        title: isArabic ? application.title_ar : application.title_en,
        icon:
          SECTOR_CONTENT_ICONS[application.icon] ?? DEFAULT_ADVANTAGE_ICONS[0],
        description: isArabic
          ? application.description_ar
          : application.description_en,
      }))
    : null;

  // Technical Catalogues — only rendered when a sector has curated real
  // catalogue entries (currently Fire Protection); each entry's own
  // `fileUrl` may still be `null`, which `SectorCatalogues` itself renders
  // as an honest "Coming Soon" state rather than a dead link.
  const catalogueItems: SectorCatalogueItem[] = (content.catalogues ?? []).map(
    (catalogue) => ({
      id: catalogue.id,
      title: isArabic ? catalogue.title_ar : catalogue.title_en,
      brand: catalogue.brand,
      language: catalogue.language,
      fileUrl: catalogue.fileUrl,
    }),
  );

  // Projects We Serve — only rendered when a sector has curated real
  // project-type entries (currently Fire Protection). `image: null` falls
  // back to the sector's own hero image, per `SectorProject`'s own
  // contract. `recommendedBrandSlugs`/`recommendedProductSlugs` are
  // deliberately not mapped through — there is no brand registry in this
  // codebase to resolve a brand slug against yet.
  const projectItems: SectorProjectItem[] = (content.projects ?? []).map(
    (project) => ({
      title: isArabic ? project.title_ar : project.title_en,
      description: isArabic ? project.description_ar : project.description_en,
      image: project.image ?? getSectorImage(sector.image),
    }),
  );

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

  // How We Work — only rendered when a sector has curated its own; no
  // generic fallback (unlike Advantages/FAQ), same "never invented" rule
  // as About/Applications.
  const howWeWork = content.howWeWork
    ? {
        title: isArabic
          ? content.howWeWork.title_ar
          : content.howWeWork.title_en,
        description: isArabic
          ? content.howWeWork.description_ar
          : content.howWeWork.description_en,
        steps: content.howWeWork.steps.map((step) => ({
          title: isArabic ? step.title_ar : step.title_en,
          description: isArabic ? step.description_ar : step.description_en,
        })),
      }
    : null;

  // Related Sectors — a sector's own curated `relatedSectorSlugs`, or the
  // next few other real sectors by `order` when a sector hasn't curated its
  // own list yet. Every item resolves to a real `data/sectors.ts` row and a
  // real `/sectors/<slug>` page — never an invented destination.
  const relatedSectorSlugs = content.relatedSectorSlugs?.length
    ? content.relatedSectorSlugs
    : getSortedSectors()
        .filter((other) => other.slug !== slug)
        .slice(0, 5)
        .map((other) => other.slug);
  const relatedSectorItems: SectorCardItem[] = relatedSectorSlugs
    .map((relatedSlug) => getSectorBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)
    .map((item) => ({
      slug: item.slug,
      title: isArabic ? item.title_ar : item.title_en,
      description: isArabic ? item.description_ar : item.description_en,
      image: item.image,
      icon: item.icon,
    }));

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

  // A guide may opt out of the sector photo (`heroVisual: "neutral"`) when
  // that photo isn't cleared for use — the Hero then renders a photo-free
  // treatment and the Footer keeps its sitewide default.
  const heroVisual = content.equipmentGuide?.heroVisual ?? "photo";

  // A sector registered in `data/sector-content/compact-guide-page.ts`
  // (Government Procurement, Construction) renders its guide in the compact
  // layout, with its own page extras (hero secondary CTA, routing,
  // compact-layout labels) — `null` for every other sector.
  const compactPage = content.equipmentGuide
    ? (getCompactGuidePage(slug) ?? null)
    : null;

  // Shared by both layouts below (the generic sector layout and the
  // equipment-guide layout), so neither can drift from the other.
  const pageHead = (
    <>
      <SetWhatsAppMessage text={whatsappMessage} />
      <SetFooterBackgroundImage
        image={heroVisual === "neutral" ? null : getSectorImage(sector.image)}
      />
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
        visual={heroVisual}
        homeLabel={tNav("home")}
        sectorsLabel={tNav("sectors")}
        navLabel={tNav("sectors")}
        requestQuoteLabel={
          compactPage
            ? isArabic
              ? compactPage.heroPrimaryCta_ar
              : compactPage.heroPrimaryCta_en
            : t("heroRequestQuote")
        }
        requestQuoteHref={REQUEST_QUOTE_ANCHOR}
        secondaryCtaLabel={
          compactPage
            ? isArabic
              ? compactPage.heroSecondaryCta.label_ar
              : compactPage.heroSecondaryCta.label_en
            : undefined
        }
        secondaryCtaHref={compactPage?.heroSecondaryCta.href}
        secondaryCtaKind={compactPage ? "route" : undefined}
      />
    </>
  );

  const productExplorerSection = (
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
        viewCategoryPageLabel={tProducts("viewCategoryPageLabel")}
      />
    </PremiumDarkSection>
  );

  const faqSection = (
    <PremiumDarkSection>
      <SectorFAQ title={t("faqTitle")} items={faqItems} />
    </PremiumDarkSection>
  );

  const pageTail = (
    <>
      {faqSection}

      <PremiumDarkSection>
        <RelatedSectors
          title={t("relatedTitle")}
          items={relatedSectorItems}
          exploreLabel={t("exploreSector")}
        />
      </PremiumDarkSection>
    </>
  );

  // Equipment procurement & application guide layout — only for a sector
  // whose content defines `equipmentGuide` (heavy-equipment,
  // commercial-vehicles, industrial-equipment). It replaces the generic
  // About / Industries / Advantages sections; the product explorer appears
  // only once the sector has at least one PUBLIC product, so non-public
  // product records are never listed or linked.
  if (content.equipmentGuide) {
    // Shared guide components, sector-appropriate wording ("Equipment
    // categories" vs "Vehicle categories", …) — see `terminology`.
    const tGuide = await getTranslations(
      content.equipmentGuide.terminology === "vehicle"
        ? "sectors.vehicleGuide"
        : "sectors.equipmentGuide",
    );
    const guide = buildEquipmentGuideView({
      guide: content.equipmentGuide,
      sectorId: sector.id,
      slug,
      isArabic,
      ctaLabel: (equipment) => tGuide("cta", { equipment }),
    });

    const quoteSection = (
      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        locale={locale as Locale}
        title={guide.quote.title}
        subtitle={guide.quote.subtitle}
        defaultProductCategory={title}
        sendRequirementHref="/send-requirement"
        sendRequirementLabel={t("sendRequirementLinkLabel")}
      />
    );

    // Compact-layout sectors: no shared Related Sectors block (its cards
    // carry the other sectors' shared copy — the page's own cross-sector
    // routing section replaces it).
    if (compactPage) {
      const compactLabels = compactPage.labels;
      const pick = (en: string, ar: string) => (isArabic ? ar : en);
      const routes = compactPage.routing.routes
        .filter(
          (route) =>
            route.sectorSlug !== slug && getSectorBySlug(route.sectorSlug),
        )
        .map((route) => ({
          slug: route.sectorSlug,
          anchor: routeAnchor(route.sectorSlug),
          title: pick(route.title_en, route.title_ar),
          items: pick(route.items_en, route.items_ar),
        }));
      const routeTitles = new Map(routes.map((r) => [r.slug, r.title]));

      return (
        <>
          {pageHead}
          <CompactGuideLayout
            guide={guide}
            routing={{
              title: pick(
                compactPage.routing.title_en,
                compactPage.routing.title_ar,
              ),
              intro: pick(
                compactPage.routing.intro_en,
                compactPage.routing.intro_ar,
              ),
              routes,
            }}
            contextRows={guide.projectRows.map((row) => ({
              ...row,
              routes: (compactPage.projectRoutes[row.id] ?? [])
                .filter((routeSlug) => routeTitles.has(routeSlug))
                .map((routeSlug) => ({
                  id: routeAnchor(routeSlug),
                  label: routeTitles.get(routeSlug) as string,
                })),
            }))}
            labels={{
              jumpLinks: tGuide("jumpLinksLabel"),
              categoryNav: pick(
                compactLabels.categoryNav_en,
                compactLabels.categoryNav_ar,
              ),
              contextItems: pick(
                compactLabels.contextItems_en,
                compactLabels.contextItems_ar,
              ),
              contextRoutes: pick(
                compactLabels.contextRoutes_en,
                compactLabels.contextRoutes_ar,
              ),
              details: pick(compactLabels.details_en, compactLabels.details_ar),
              whatItIs: tGuide("whatItIs"),
              usedFor: tGuide("usedFor"),
              applications: tGuide("applications"),
              industries: tGuide("industries"),
              selection: tGuide("selection"),
              requestChecklist: tGuide("requestChecklist"),
              related: tGuide("related"),
              replacementGroups: pick(
                compactLabels.replacementGroups_en,
                compactLabels.replacementGroups_ar,
              ),
            }}
          />
          {quoteSection}
          {faqSection}
        </>
      );
    }

    return (
      <>
        {pageHead}

        <EquipmentGuideIntro
          eyebrow={guide.intro.eyebrow}
          lead={guide.intro.lead}
          note={guide.intro.note}
          jumpLinksLabel={tGuide("jumpLinksLabel")}
          jumpLinks={[
            { id: PROJECT_MATRIX_ANCHOR, label: guide.projectsTitle },
            ...guide.categories.map((category) => ({
              id: category.id,
              label: category.title,
            })),
            ...(guide.replacement
              ? [{ id: REPLACEMENT_ANCHOR, label: guide.replacement.title }]
              : []),
            { id: QUOTATION_CHECKLIST_ANCHOR, label: guide.request.title },
          ]}
        />

        <EquipmentProjectMatrix
          id={PROJECT_MATRIX_ANCHOR}
          title={guide.projectsTitle}
          intro={guide.projectsIntro}
          equipmentLabel={tGuide("projectEquipmentLabel")}
          rows={guide.projectRows}
        />

        <div>
          <SectorCategoryNav
            label={tGuide("categoryNavLabel")}
            items={guide.categories.map((category) => ({
              id: category.id,
              label: category.title,
            }))}
          />
          {guide.categories.map((category) => (
            <SectorEquipmentGuide
              key={category.id}
              category={category}
              indexLabel={tGuide("categoryIndexLabel")}
              quoteAnchor={REQUEST_QUOTE_ANCHOR}
              cardLabels={{
                whatItIs: tGuide("whatItIs"),
                usedFor: tGuide("usedFor"),
                applications: tGuide("applications"),
                industries: tGuide("industries"),
                selectionToggle: tGuide("selectionToggle"),
                selection: tGuide("selection"),
                requestChecklist: tGuide("requestChecklist"),
                related: tGuide("related"),
                viewListed: tGuide("viewListed"),
              }}
            />
          ))}
        </div>

        {productExplorerItems.length > 0 && productExplorerSection}

        {guide.replacement && (
          <EquipmentReplacementGuide
            id={REPLACEMENT_ANCHOR}
            title={guide.replacement.title}
            intro={guide.replacement.intro}
            flowLabel={guide.replacement.flowLabel}
            flow={guide.replacement.flow}
            groups={guide.replacement.groups}
            note={guide.replacement.note}
            ctaLabel={guide.replacement.ctaLabel}
            prefill={guide.replacement.prefill}
            quoteAnchor={REQUEST_QUOTE_ANCHOR}
          />
        )}

        <EquipmentRequestGuide
          id={QUOTATION_CHECKLIST_ANCHOR}
          title={guide.request.title}
          intro={guide.request.intro}
          checklist={guide.request.checklist}
          checklistTitle={guide.request.checklistTitle}
          secondaryChecklist={guide.request.secondaryChecklist}
          checklistNote={guide.request.checklistNote}
          processTitle={guide.request.processTitle}
          steps={guide.request.steps}
        />

        {quoteSection}

        {pageTail}
      </>
    );
  }

  return (
    <>
      {pageHead}

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

      {productExplorerSection}

      {catalogueItems.length > 0 && (
        <PremiumDarkSection>
          <SectorCatalogues
            title={t("cataloguesTitle")}
            items={catalogueItems}
            downloadLabel={t("catalogueDownload")}
            comingSoonLabel={t("comingSoon")}
          />
        </PremiumDarkSection>
      )}

      <PremiumDarkSection>
        {applicationItems ? (
          <SectorApplications
            title={t("industriesServedTitle")}
            items={applicationItems}
          />
        ) : (
          <>
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
          </>
        )}
      </PremiumDarkSection>

      <PremiumDarkSection>
        <SectorAdvantages title={t("advantagesTitle")} items={advantageItems} />
      </PremiumDarkSection>

      {projectItems.length > 0 && (
        <PremiumDarkSection>
          <SectorProjects title={t("projectsTitle")} items={projectItems} />
        </PremiumDarkSection>
      )}

      {howWeWork && (
        <SectorHowWeWork
          title={howWeWork.title}
          description={howWeWork.description}
          steps={howWeWork.steps}
        />
      )}

      {/* Global Sourcing is the one exception: sourcing an item that isn't
          in the catalog *is* this sector's whole premise, so "Send Your
          Requirement" becomes the primary call to action here — shown
          above the generic quotation CTA rather than as a secondary link
          beside it (see the `sendRequirementHref` prop passed to
          `SectorQuoteCTA` below for every other sector). */}
      {slug === "global-sourcing" && (
        <PremiumDarkSection>
          <SendRequirementCTA
            variant="banner"
            href="/send-requirement"
            label={t("sendRequirementBannerButton")}
            title={t("sendRequirementBannerTitle")}
            description={t("sendRequirementBannerDescription")}
            className="mx-auto max-w-2xl"
          />
        </PremiumDarkSection>
      )}

      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        locale={locale as Locale}
        title={t("ctaTitle")}
        subtitle={t("ctaDescription")}
        defaultProductCategory={title}
        sendRequirementHref={
          slug === "global-sourcing" ? undefined : "/send-requirement"
        }
        sendRequirementLabel={
          slug === "global-sourcing" ? undefined : t("sendRequirementLinkLabel")
        }
      />

      {pageTail}
    </>
  );
}

type EquipmentGuideView = ReturnType<typeof buildEquipmentGuideView>;

interface CompactGuideLayoutProps {
  guide: EquipmentGuideView;
  routing: {
    title: string;
    intro: string;
    routes: { slug: string; anchor: string; title: string; items: string }[];
  };
  contextRows: (EquipmentGuideView["projectRows"][number] & {
    routes: { id: string; label: string }[];
  })[];
  labels: {
    jumpLinks: string;
    categoryNav: string;
    contextItems: string;
    contextRoutes: string;
    details: string;
    whatItIs: string;
    usedFor: string;
    applications: string;
    industries: string;
    selection: string;
    requestChecklist: string;
    related: string;
    replacementGroups: string;
  };
}

const COMPACT_LABEL_CLASS =
  "text-ink-muted text-xs font-semibold tracking-wide uppercase rtl:tracking-normal";
const COMPACT_CHIP_CLASS =
  "border-border text-ink hover:border-gold block rounded-sm border bg-white px-2 py-0.5 text-xs transition-colors";

/**
 * Compact-layout sectors only (see `data/sector-content/compact-guide-page.ts`)
 * — a compact presentation of the same guide data the shared
 * equipment-guide layout renders: the guides as
 * short cards (name, summary, typical applications) whose descriptive
 * detail, selection considerations and quotation checklist sit in a native
 * `<details>` block, plus the page's own cross-sector routing section.
 * Every other sector keeps the shared layout below, unchanged.
 */
function CompactGuideLayout({
  guide,
  routing,
  contextRows,
  labels,
}: CompactGuideLayoutProps) {
  return (
    <>
      <Section spacing="sm" background="canvas" className="py-8 sm:py-12">
        <Container>
          <Eyebrow>{guide.intro.eyebrow}</Eyebrow>
          <Text tone="inverse" className="mt-3 max-w-3xl">
            {guide.intro.lead}
          </Text>
          <div className="border-gold/25 bg-gold/[0.06] mt-5 flex max-w-3xl items-start gap-3 rounded-[12px] border p-4">
            <Info
              aria-hidden="true"
              className="text-gold mt-0.5 size-5 shrink-0"
            />
            <Text size="sm" tone="muted">
              {guide.intro.note}
            </Text>
          </div>
          <nav aria-label={labels.jumpLinks} className="mt-6">
            <ul className="flex flex-wrap gap-2">
              {[
                { id: PROJECT_MATRIX_ANCHOR, label: guide.projectsTitle },
                ...guide.categories.map((category) => ({
                  id: category.id,
                  label: category.title,
                })),
                { id: ROUTING_ANCHOR, label: routing.title },
                ...(guide.replacement
                  ? [{ id: REPLACEMENT_ANCHOR, label: guide.replacement.title }]
                  : []),
                { id: QUOTATION_CHECKLIST_ANCHOR, label: guide.request.title },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="border-border text-ink hover:border-gold flex items-center gap-1.5 rounded-sm border bg-white px-2.5 py-1 text-xs font-medium transition-colors sm:text-sm"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-gold">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>

      <Section
        id={PROJECT_MATRIX_ANCHOR}
        aria-labelledby={`${PROJECT_MATRIX_ANCHOR}-title`}
        spacing="sm"
        className="scroll-mt-28 py-8 sm:py-12"
      >
        <Container>
          <Heading
            id={`${PROJECT_MATRIX_ANCHOR}-title`}
            level={2}
            size={3}
            tone="inverse"
          >
            {guide.projectsTitle}
          </Heading>
          <Text tone="muted" className="mt-3 max-w-3xl">
            {guide.projectsIntro}
          </Text>
          <ul className="border-border divide-border mt-6 divide-y rounded-[14px] border bg-white">
            {contextRows.map((row) => (
              <li
                key={row.id}
                className="grid gap-1.5 px-4 py-2.5 lg:grid-cols-[2fr_3fr] lg:gap-6"
              >
                <p className="text-ink-muted text-sm">
                  <span className="text-ink font-semibold">{row.title}</span>
                  {" — "}
                  {row.description}
                </p>
                <div className="flex flex-col gap-1.5 lg:justify-center">
                  {row.equipment.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={COMPACT_LABEL_CLASS}>
                        {labels.contextItems}
                      </span>
                      <ul className="contents">
                        {row.equipment.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className={COMPACT_CHIP_CLASS}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {row.routes.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={COMPACT_LABEL_CLASS}>
                        {labels.contextRoutes}
                      </span>
                      <ul className="contents">
                        {row.routes.map((route) => (
                          <li key={route.id}>
                            <a
                              href={`#${route.id}`}
                              className={COMPACT_CHIP_CLASS}
                            >
                              {route.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <div>
        <SectorCategoryNav
          label={labels.categoryNav}
          items={guide.categories.map((category) => ({
            id: category.id,
            label: category.title,
          }))}
        />
        {guide.categories.map((category) => (
          <CompactGuideFamily
            key={category.id}
            category={category}
            labels={labels}
          />
        ))}
      </div>

      <Section
        id={ROUTING_ANCHOR}
        aria-labelledby={`${ROUTING_ANCHOR}-title`}
        spacing="sm"
        background="canvas"
        className="scroll-mt-28 py-8 sm:py-12"
      >
        <Container>
          <Heading
            id={`${ROUTING_ANCHOR}-title`}
            level={2}
            size={3}
            tone="inverse"
          >
            {routing.title}
          </Heading>
          <Text tone="muted" className="mt-3 max-w-3xl">
            {routing.intro}
          </Text>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {routing.routes.map((route) => (
              <li key={route.slug} id={route.anchor} className="scroll-mt-28">
                <Link
                  href={`/sectors/${route.slug}`}
                  className="border-border hover:border-gold group flex h-full items-start justify-between gap-3 rounded-[12px] border bg-white px-4 py-3 transition-colors"
                >
                  <span>
                    <span className="text-ink block text-sm font-semibold">
                      {route.title}
                    </span>
                    <span className="text-ink-muted mt-0.5 block text-xs">
                      {route.items}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="text-gold mt-0.5 size-4 shrink-0 rtl:rotate-180"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {guide.replacement && (
        <Section
          id={REPLACEMENT_ANCHOR}
          aria-labelledby={`${REPLACEMENT_ANCHOR}-title`}
          spacing="sm"
          className="scroll-mt-28 py-8 sm:py-12"
        >
          <Container>
            <div className="grid gap-6 lg:grid-cols-[2fr_3fr] lg:gap-12">
              <div>
                <Heading
                  id={`${REPLACEMENT_ANCHOR}-title`}
                  level={2}
                  size={3}
                  tone="inverse"
                >
                  {guide.replacement.title}
                </Heading>
                <Text tone="muted" className="mt-3">
                  {guide.replacement.intro}
                </Text>
                <Text size="sm" tone="muted" className="mt-3">
                  {guide.replacement.note}
                </Text>
                <QuotePrefillLink
                  href={REQUEST_QUOTE_ANCHOR}
                  prefill={guide.replacement.prefill}
                  className="mt-5"
                >
                  {guide.replacement.ctaLabel}
                </QuotePrefillLink>
              </div>
              <div>
                <p className={COMPACT_LABEL_CLASS}>
                  {guide.replacement.flowLabel}
                </p>
                <ol className="mt-2 flex flex-wrap gap-1.5">
                  {guide.replacement.flow.map((step, index) => (
                    <li
                      key={step}
                      className="border-border text-ink flex items-center gap-1.5 rounded-sm border bg-white px-2 py-0.5 text-xs"
                    >
                      <span className="text-gold font-semibold">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className={`${COMPACT_LABEL_CLASS} mt-5`}>
                  {labels.replacementGroups}
                </p>
                <dl className="border-border divide-border mt-2 divide-y rounded-[12px] border bg-white">
                  {guide.replacement.groups.map((group) => (
                    <div key={group.title} className="px-4 py-2.5">
                      <dt className="text-ink text-sm font-semibold">
                        {group.title}
                      </dt>
                      <dd className="text-ink-muted mt-0.5 text-sm">
                        {group.items.join(" · ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section
        id={QUOTATION_CHECKLIST_ANCHOR}
        aria-labelledby={`${QUOTATION_CHECKLIST_ANCHOR}-title`}
        spacing="sm"
        background="canvas"
        className="scroll-mt-28 py-8 sm:py-12"
      >
        <Container>
          <Heading
            id={`${QUOTATION_CHECKLIST_ANCHOR}-title`}
            level={2}
            size={3}
            tone="inverse"
          >
            {guide.request.title}
          </Heading>
          <Text tone="muted" className="mt-3 max-w-3xl">
            {guide.request.intro}
          </Text>
          <div className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-10">
            {[
              {
                title: guide.request.checklistTitle,
                items: guide.request.checklist,
              },
              ...(guide.request.secondaryChecklist
                ? [guide.request.secondaryChecklist]
                : []),
            ].map((part) => (
              <div key={part.title ?? "checklist"}>
                {part.title && (
                  <Heading level={3} size={5} tone="inverse">
                    {part.title}
                  </Heading>
                )}
                <ul className="mt-3 flex flex-col gap-1.5">
                  {part.items.map((entry) => (
                    <li key={entry} className="flex items-start gap-2">
                      <CheckCircle2
                        aria-hidden="true"
                        className="text-gold mt-0.5 size-4 shrink-0"
                      />
                      <Text size="sm" tone="inverse">
                        {entry}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <Heading level={3} size={5} tone="inverse">
                {guide.request.processTitle}
              </Heading>
              <ol className="mt-3 flex flex-col gap-3">
                {guide.request.steps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="bg-gold/15 text-gold flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <Text size="sm" weight="semibold" tone="inverse">
                        {step.title}
                      </Text>
                      <Text size="sm" tone="muted">
                        {step.description}
                      </Text>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {guide.request.checklistNote && (
            <Text size="sm" tone="muted" className="mt-6 max-w-3xl">
              {guide.request.checklistNote}
            </Text>
          )}
        </Container>
      </Section>
    </>
  );
}

function CompactGuideFamily({
  category,
  labels,
}: {
  category: EquipmentGuideView["categories"][number];
  labels: CompactGuideLayoutProps["labels"];
}) {
  const Icon = category.icon;
  const availability = category.equipment[0]?.availability;
  return (
    <Section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      spacing="sm"
      className="scroll-mt-36 py-8 sm:py-12"
    >
      <Container>
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="bg-gold/15 text-gold flex size-11 shrink-0 items-center justify-center rounded-xl"
          >
            <Icon className="size-6" />
          </span>
          <div>
            <Heading
              id={`${category.id}-title`}
              level={2}
              size={3}
              tone="inverse"
            >
              {category.title}
            </Heading>
            <Text tone="muted" className="mt-2 max-w-3xl">
              {category.intro}
            </Text>
            {availability && (
              <p className="border-gold/25 bg-gold/10 text-ink mt-3 inline-flex rounded-sm border px-3 py-0.5 text-sm">
                {availability}
              </p>
            )}
          </div>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.equipment.map((item) => (
            <li key={item.id}>
              <CompactGuideCard item={item} labels={labels} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function CompactGuideCard({
  item,
  labels,
}: {
  item: EquipmentGuideView["categories"][number]["equipment"][number];
  labels: CompactGuideLayoutProps["labels"];
}) {
  return (
    <article
      id={item.id}
      aria-labelledby={`${item.id}-title`}
      className="border-border flex h-full scroll-mt-44 flex-col rounded-[14px] border bg-white p-4 sm:p-5"
    >
      <Heading id={`${item.id}-title`} level={3} size={5} tone="inverse">
        {item.name}
      </Heading>
      <Text size="sm" tone="muted" className="mt-1.5">
        {item.summary}
      </Text>
      <details className="group border-border mt-auto border-t pt-3 [&:not([open])]:mt-2.5">
        <summary className="text-ink hover:text-gold flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
          {labels.details}
          <ChevronDown
            aria-hidden="true"
            className="text-gold size-4 shrink-0 transition-transform group-open:rotate-180"
          />
        </summary>
        <div className="mt-3 flex flex-col gap-3 text-sm">
          <div>
            <p className={COMPACT_LABEL_CLASS}>{labels.applications}</p>
            <p className="text-ink mt-1">{item.applications.join(" · ")}</p>
          </div>
          <div>
            <p className={COMPACT_LABEL_CLASS}>{labels.whatItIs}</p>
            <p className="text-ink mt-1">{item.whatItIs}</p>
          </div>
          <div>
            <p className={COMPACT_LABEL_CLASS}>{labels.usedFor}</p>
            <p className="text-ink mt-1">{item.usedFor}</p>
          </div>
          <div>
            <p className={COMPACT_LABEL_CLASS}>{labels.industries}</p>
            <p className="text-ink mt-1">{item.industries.join(" · ")}</p>
          </div>
          <div>
            <p className={COMPACT_LABEL_CLASS}>{labels.selection}</p>
            <dl className="mt-1 flex flex-col gap-1.5">
              {item.selectionFactors.map((factor) => (
                <div key={factor.factor}>
                  <dt className="text-ink font-semibold">{factor.factor}</dt>
                  <dd className="text-ink-muted">{factor.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className={COMPACT_LABEL_CLASS}>{labels.requestChecklist}</p>
            <ul className="mt-1 flex flex-col gap-1">
              {item.requestChecklist.map((entry) => (
                <li key={entry} className="text-ink flex items-start gap-2">
                  <CheckCircle2
                    aria-hidden="true"
                    className="text-gold mt-0.5 size-4 shrink-0"
                  />
                  {entry}
                </li>
              ))}
            </ul>
          </div>
          {item.related.length > 0 && (
            <div>
              <p className={COMPACT_LABEL_CLASS}>{labels.related}</p>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {item.related.map((related) => (
                  <li key={related.id}>
                    <a href={`#${related.id}`} className={COMPACT_CHIP_CLASS}>
                      {related.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <QuotePrefillLink href={REQUEST_QUOTE_ANCHOR} prefill={item.prefill}>
            {item.ctaLabel}
          </QuotePrefillLink>
        </div>
      </details>
    </article>
  );
}
