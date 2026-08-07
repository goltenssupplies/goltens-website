import type { Locale } from "@/i18n/routing";
import type { KnowledgeItem } from "@/data/knowledge/types";

const WORDS_PER_MINUTE = 200;

/** Derived from real content length, never a stored/authored figure — recomputes automatically if content changes. */
export function getReadingTimeMinutes(content: string): number {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

/**
 * The full readable text of a `KnowledgeItem`, for reading-time calculation
 * and the legacy flat-paragraph fallback: joins every section's
 * heading/body/list/callout when `sections` is set, otherwise falls back to
 * `content_en/ar`, otherwise the summary — same fallback order the
 * template's own rendering uses.
 */
export function getKnowledgeReadingContent(
  item: KnowledgeItem,
  isArabic: boolean,
): string {
  if (item.sections?.length) {
    return item.sections
      .map((section) => {
        const parts = [
          isArabic ? section.heading_ar : section.heading_en,
          isArabic ? section.body_ar : section.body_en,
          ...((isArabic ? section.list_ar : section.list_en) ?? []),
          section.callout
            ? (isArabic ? section.callout.body_ar : section.callout.body_en)
            : "",
        ];
        return parts.filter(Boolean).join(" ");
      })
      .join(" ");
  }
  return (
    (isArabic ? item.content_ar : item.content_en) ??
    (isArabic ? item.summary_ar : item.summary_en)
  );
}

const dateLocaleByLocale: Record<Locale, string> = {
  ar: "ar-EG",
  en: "en-US",
};

/** Formats an ISO date string for display in a Knowledge item's meta line. */
export function formatKnowledgeDate(isoDate: string, locale: Locale): string {
  return new Date(isoDate).toLocaleDateString(dateLocaleByLocale[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
