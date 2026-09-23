import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { CategoryHero } from "@/components/products/CategoryHero";
import {
  SectorProducts,
  type SectorProductItem,
} from "@/components/sectors/SectorProducts";
import { SectorQuoteCTA } from "@/components/sectors/SectorQuoteCTA";
import { PremiumDarkSection } from "@/components/ui/PremiumDarkSection";
import {
  getAllCategoryParams,
  getCategoryBySlug,
  isCategoryIndexable,
} from "@/data/product-categories";
import { getProductsByCategory } from "@/data/products";
import { getSectorBySlug } from "@/data/sectors";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

const REQUEST_QUOTE_ANCHOR = "request-quote";

interface CategoryPageProps {
  params: Promise<{ locale: string; slug: string; category: string }>;
}

export function generateStaticParams() {
  return getAllCategoryParams();
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { locale, slug, category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category || category.sectorId !== slug) return {};

  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  const isArabic = (locale as Locale) === "ar";
  const t = await getTranslations("categories");

  const categoryName = isArabic ? category.name_ar : category.name_en;
  const sectorName = isArabic ? sector.title_ar : sector.title_en;

  const title =
    (isArabic ? category.seo?.title_ar : category.seo?.title_en) ??
    categoryName;
  const description =
    (isArabic ? category.seo?.description_ar : category.seo?.description_en) ??
    (isArabic ? category.description_ar : category.description_en) ??
    t("metaDescriptionFallback", {
      category: categoryName,
      sector: sectorName,
    });

  return buildMetadata({
    locale: locale as Locale,
    path: `/sectors/${slug}/categories/${categorySlug}`,
    title,
    description,
    keywords: category.seo?.keywords,
    noIndex: !isCategoryIndexable(category),
  });
}

/**
 * The unified Category Detail Template — every registered
 * `ProductCategory` (`data/product-categories.ts`) renders through this one
 * file. Only the data changes: adding category #39 is one new row there
 * plus its product file(s); this file stays untouched. `noIndex` is driven
 * entirely by `isCategoryIndexable()` — a category with no authored
 * `description_en`/`description_ar` and explicit `indexable: true` always
 * renders `robots: noindex` (still a real, reachable page — never a 404 —
 * for anyone with a direct link), the same "reachable but not indexed"
 * convention `/rfq` and `/compare` already use.
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, slug, category: categorySlug } = await params;

  const category = getCategoryBySlug(categorySlug);
  if (!category || category.sectorId !== slug) notFound();

  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const isArabic = (locale as Locale) === "ar";
  const categoryName = isArabic ? category.name_ar : category.name_en;
  const sectorName = isArabic ? sector.title_ar : sector.title_en;
  const categoryDescription = isArabic
    ? category.description_ar
    : category.description_en;

  const t = await getTranslations("categories");
  const tNav = await getTranslations("nav");
  const tSectors = await getTranslations("sectors");
  const tProducts = await getTranslations("products");
  const tCommon = await getTranslations("common");

  const pageUrl = `${siteUrl}/${locale}/sectors/${slug}/categories/${categorySlug}`;

  // Products in this category — every real `Product` from the Product
  // Engine whose `categoryId` matches, mapped the same way the sector
  // page's `ProductExplorer` and the product page's "Related Products"
  // both already build `SectorProductItem[]`. Each card links to the real
  // product detail route; no product is duplicated or invented here.
  const categoryProducts = getProductsByCategory(category.id);
  const productItems: SectorProductItem[] = categoryProducts.map((product) => ({
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

  // Hero image — the category's own `image` (rarely set today), else the
  // first real product photo in this category, else the sector's own hero
  // image; `CategoryHero` applies the final sitewide fallback via
  // `getSectorImage` if even that is somehow absent. Never a fabricated or
  // unrelated stand-in.
  const heroImage =
    category.image ??
    categoryProducts.find((product) => product.images?.[0])?.images?.[0] ??
    sector.image;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: tNav("sectors"), url: `${siteUrl}/${locale}/sectors` },
              {
                name: sectorName,
                url: `${siteUrl}/${locale}/sectors/${slug}`,
              },
              { name: categoryName, url: pageUrl },
            ]),
          ),
        }}
      />

      <CategoryHero
        title={categoryName}
        description={categoryDescription}
        image={heroImage}
        homeLabel={tNav("home")}
        sectorsLabel={tNav("sectors")}
        sectorLabel={sectorName}
        sectorHref={`/sectors/${slug}`}
        navLabel={tNav("sectors")}
        requestQuoteLabel={tSectors("heroRequestQuote")}
        requestQuoteHref={REQUEST_QUOTE_ANCHOR}
      />

      <PremiumDarkSection>
        <SectorProducts
          title={tSectors("productsTitle")}
          items={productItems}
          variant="grid"
          requestQuoteLabel={tCommon("requestQuotation")}
          requestQuoteHref={REQUEST_QUOTE_ANCHOR}
          emptyTitle={tSectors("productsEmptyTitle")}
          emptyBody={tSectors("productsComingSoon")}
          addToRfqLabel={tProducts("addToRfqLabel")}
          addToRfqAddedLabel={tProducts("addToRfqAddedLabel")}
          addToCompareLabel={tProducts("addToCompareLabel")}
          addToCompareAddedLabel={tProducts("addToCompareAddedLabel")}
        />
      </PremiumDarkSection>

      <SectorQuoteCTA
        id={REQUEST_QUOTE_ANCHOR}
        locale={locale as Locale}
        title={t("ctaTitle")}
        subtitle={t("ctaDescription")}
        defaultProductCategory={categoryName}
      />
    </>
  );
}
