import { getLocale, getTranslations } from "next-intl/server";

import { getSectorBySlug } from "@/data/sectors";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SECTOR_ICONS } from "@/lib/sectors";

// Curated subset for the Hero's quick-navigation strip — deliberately
// different from (and smaller than) `Sectors.tsx`'s own 8-sector homepage
// teaser grid below, so this never duplicates those cards. Each entry
// deep-links straight to its sector's own dedicated `/sectors/[slug]` page
// rather than a same-page anchor, since the homepage teaser grid has no
// per-card anchor of its own to jump to — this is the "or the corresponding
// sector" path, landing the visitor on real per-sector content either way.
const QUICK_NAV_SLUGS = [
  "industrial-equipment",
  "fire-protection",
  "government-procurement",
  "electrical-energy",
  "industrial-chemicals",
  "construction",
  "global-sourcing",
] as const;

// How many back-to-back copies of the 7-sector set make up the track. Must
// stay an even number — `animate-sectors-marquee` (globals.css) always
// translates by exactly -50% of the track's own width, so an even copy
// count guarantees that midpoint lands exactly on a copy boundary (N/2
// whole copies), which is what makes the loop seamless. 10 copies (not
// just 2) is what actually prevents any empty gap from appearing even on
// very wide/ultrawide monitors: with too few copies, a copy narrower than
// the viewport leaves a visible hole for part of the animation; 10 copies
// keeps the track many times wider than any realistic screen, so there's
// always more content queued up on both sides no matter how wide the
// viewport is.
const TRACK_REPEAT_COUNT = 10;

/**
 * Slim strip pinned to the very bottom of the Hero's own photo — not a new
 * page section, not a replacement for the homepage's existing "Procurement
 * Sectors" section further down, and not a second bar of its own — a
 * single continuous infinite marquee, always moving, offering quick
 * one-tap access to GOLTENS' major business areas. All 7 sectors, same
 * icons/names/order/colors as before.
 *
 * The track renders the same 7-item list back to back
 * `TRACK_REPEAT_COUNT` times and animates by exactly -50%
 * (`animate-sectors-marquee`, defined in `globals.css`) — since every copy
 * is identical and equal width, the loop is seamless: no gap, no jump on
 * restart, at any viewport width. Direction follows the reading direction
 * per spec: the base keyframe drifts right-to-left, which is already
 * correct for Arabic/RTL; `ltr:[animation-direction:reverse]` plays the
 * same keyframe backwards under English/LTR, which is the left-to-right
 * equivalent — no second keyframe or client-side branching needed.
 * Pausing on hover (`group-hover/marquee:[animation-play-state:paused]`)
 * and honoring `prefers-reduced-motion` (opts the animation out entirely
 * in `globals.css`, same convention as this file's other `animate-*`
 * utilities) are both pure CSS too, so this stays a Server Component — no
 * new client-side state, no new dependency.
 *
 * Every copy after the first is `aria-hidden` with `tabIndex={-1}` so
 * screen readers and keyboard navigation only ever encounter each sector
 * once, despite it appearing `TRACK_REPEAT_COUNT` times visually.
 *
 * `dir="ltr"` is forced on the scrolling track's own wrapper (overridden
 * back from whatever the page's real `dir` is) — this is a fix, not a
 * cosmetic choice. Flexbox auto-reverses child layout under `dir="rtl"`:
 * the wide track gets right-anchored instead of left-anchored, and its
 * items get laid out right-to-left internally. `translateX` doesn't know
 * about any of that — it always moves in fixed physical pixels — so on
 * the Arabic page the same `0 -> -50%` animation was sliding the
 * (right-anchored) track straight off the left edge of the viewport with
 * nothing behind it, leaving the strip empty for most of every cycle
 * before snapping back at the loop boundary. Pinning the track to `ltr`
 * makes its layout (and therefore the animation) direction-independent;
 * the locale-appropriate scroll direction is restored explicitly via
 * `isArabic` below instead of the `ltr:`/`rtl:` variant (which would
 * otherwise now always match once this element has a literal
 * `dir="ltr"` on it).
 */
export async function HeroSectorsBar() {
  const locale = (await getLocale()) as Locale;
  const isArabic = locale === "ar";
  const t = await getTranslations("hero");
  const items = QUICK_NAV_SLUGS.map((slug) => getSectorBySlug(slug))
    .filter(
      (sector): sector is NonNullable<typeof sector> => sector !== undefined,
    )
    .map((sector) => ({
      slug: sector.slug,
      title: isArabic ? sector.title_ar : sector.title_en,
      Icon: SECTOR_ICONS[sector.icon],
    }));
  const trackItems = Array.from(
    { length: TRACK_REPEAT_COUNT },
    () => items,
  ).flat();

  return (
    <nav
      aria-label={t("quickNavLabel")}
      className="border-gold/25 absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t bg-[#0d1117]/55 backdrop-blur-sm"
    >
      {/* `group/marquee` (not the unnamed `group` each link below already
          uses for its own icon hover) so hovering anywhere in the strip
          pauses the whole track without fighting the per-link hover
          state. Edge fade via `mask-image` is a purely cosmetic touch —
          browsers without mask support just show the strip without it,
          no functional loss. */}
      <div
        dir="ltr"
        className="group/marquee flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] py-3"
      >
        {/* Gaps widened noticeably (14/20/24, was 10/12) per spec — a
            clearly more generous, elegant spacing between items, not just
            a token bump. Direction set inline (not via the `ltr:`
            variant) since the wrapper's forced `dir="ltr"` above would
            make that variant always match — see the component doc
            comment. */}
        <div
          className="animate-sectors-marquee flex w-max shrink-0 items-center gap-x-14 group-hover/marquee:[animation-play-state:paused] sm:gap-x-20 lg:gap-x-24"
          style={{ animationDirection: isArabic ? "normal" : "reverse" }}
        >
          {trackItems.map(({ slug, title, Icon }, index) => {
            const isDuplicate = index >= items.length;
            return (
              <Link
                key={`${slug}-${index}`}
                href={`/sectors/${slug}`}
                aria-hidden={isDuplicate || undefined}
                tabIndex={isDuplicate ? -1 : undefined}
                className="group text-canvas/75 hover:text-gold inline-flex shrink-0 items-center gap-2 text-xs font-medium whitespace-nowrap transition-colors duration-200 sm:text-sm"
              >
                <Icon
                  aria-hidden="true"
                  className="text-gold/75 group-hover:text-gold size-3.5 shrink-0 transition-colors duration-200"
                />
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
