import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllSectorArticleParams, getSectorArticle } from "@/data/sector-content";
import { permanentRedirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string; article: string }>;
}

export function generateStaticParams() {
  return getAllSectorArticleParams();
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug, article: articleSlug } = await params;
  const article = getSectorArticle(slug, articleSlug);
  if (!article) return {};

  const isArabic = (locale as Locale) === "ar";
  const title =
    (isArabic ? article.seoTitle_ar : article.seoTitle_en) ??
    (isArabic ? article.title_ar : article.title_en);
  const description =
    (isArabic ? article.seoDescription_ar : article.seoDescription_en) ??
    (isArabic ? article.summary_ar : article.summary_en);

  return buildMetadata({
    locale: locale as Locale,
    path: `/sectors/${slug}/articles/${articleSlug}`,
    title,
    description,
    keywords: article.keywords,
  });
}

/**
 * Legacy sector-scoped article URL (`/sectors/<slug>/articles/<article>`) —
 * permanently redirects to the canonical `/knowledge/<slug>` page (same
 * `slug`, since every migrated `SectorArticle.slug` equals its source
 * `KnowledgeItem.slug`; see `data/sector-content/index.ts`'s
 * `toSectorArticle`). Both routes used to render their own copy of the
 * article with divergent designs — this route now only exists so old links
 * and any indexed URLs keep resolving to the one real template.
 */
export default async function SectorArticlePage({ params }: ArticlePageProps) {
  const { locale, slug, article: articleSlug } = await params;
  const article = getSectorArticle(slug, articleSlug);
  if (!article) notFound();

  permanentRedirect({
    href: `/knowledge/${articleSlug}`,
    locale: locale as Locale,
  });
}
