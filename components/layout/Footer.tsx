import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { LogoImage } from "@/components/layout/Logo";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface FooterLink {
  label: string;
  href: Parameters<typeof Link>[0]["href"];
}

export interface FooterProps {
  quickLinksHeading: string;
  quickLinks: FooterLink[];
  contactHeading: string;
  email: string;
  /** Small label above `email`, e.g. "General Enquiries" — distinguishes it from `salesEmail`. */
  emailLabel: string;
  /** Sales / RFQ inbox, shown alongside `email` so quote requests have a dedicated address. */
  salesEmail: string;
  /** Small label above `salesEmail`, e.g. "Sales & Quotes". */
  salesEmailLabel: string;
  /** Rendered as-is, e.g. wrapped `dir="ltr"` at the call site for a phone number. */
  phone: ReactNode;
  phoneHref: string;
  legalLinksHeading: string;
  legalLinks: FooterLink[];
  /** Full bottom-bar copyright line, e.g. "© 2026 GOLTENS. All Rights Reserved." */
  bottomText: string;
  className?: string;
}

const columnLinkClass =
  "text-canvas/65 hover:text-gold w-fit text-sm transition-colors duration-200";

const columnHeadingClass =
  "text-gold/90 text-xs font-semibold tracking-[0.16em] uppercase";

// A short gold underline beneath every column heading — a small, repeated
// typographic accent (not a full-width rule) that reads as a deliberate
// hierarchy marker rather than decoration.
function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Text as="h3" className={columnHeadingClass}>
        {children}
      </Text>
      <span aria-hidden="true" className="bg-gold/40 block h-px w-6" />
    </div>
  );
}

/**
 * Site-wide footer: a dark-navy surface organised into exactly three
 * logical areas, side by side from `sm` up on a deliberately asymmetric
 * `1.4fr 1fr 1fr` grid (not equal thirds) — Identity gets the extra share
 * so the enlarged logo reads as the area's clear primary visual element,
 * not just another column. Identity is the logo plus the fixed brand
 * sign-off directly beneath it — same "QUALITY • RELIABILITY •
 * COMPETITIVENESS" Latin tagline as the homepage's `HeroIntro` preloader,
 * kept untranslated for the same reason: it's a fixed brand mark, not
 * sentence copy, and deliberately the ONLY thing under the logo — no
 * description/blurb — set off from the link columns by a vertical rule.
 * Quick Links (the site's real top-level nav destinations) and Contact
 * (phone + a general-enquiries email + a sales/RFQ email, each labeled —
 * no address, no CTA button; the Navbar/Hero already carry the site's
 * single request-a-quote path) fill the remaining two columns. Previously
 * had a fourth "What We Supply" sectors column — removed by explicit
 * client direction to cut clutter and give the logo more room; do not
 * reintroduce it. Below the three columns: a thin gold divider, then Legal
 * Links as its own small, quieter subsection (smaller/muted links than the
 * columns above — still clearly tappable, and a legal requirement rather
 * than "extra" content), a lighter divider, and finally the bare copyright
 * line. WhatsApp is available as a quick channel on the Contact page
 * itself. Social icons are omitted — no real LinkedIn/Facebook company
 * page URLs exist yet; add a `socialLinks` prop here once they do, rather
 * than link to nothing.
 */
export function Footer({
  quickLinksHeading,
  quickLinks,
  contactHeading,
  email,
  emailLabel,
  salesEmail,
  salesEmailLabel,
  phone,
  phoneHref,
  legalLinksHeading,
  legalLinks,
  bottomText,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "text-canvas relative overflow-hidden bg-[#0d1117]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="bg-gold absolute inset-x-0 top-0 h-px"
      />
      {/* Faint technical-grid texture, standing in for a global-network
          motif — same subtle-depth treatment the Hero and Contact CTA
          already use on their own dark surfaces, so the footer reads as
          part of the same system rather than a new visual language. */}
      <div
        aria-hidden="true"
        className="bg-grid-pattern text-canvas/[0.04] pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="bg-gold/5 pointer-events-none absolute -start-40 -top-40 size-96 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-40 -bottom-40 size-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(111,143,179,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative py-12 lg:py-20">
        <Reveal>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-[1.4fr_1fr_1fr] lg:gap-x-16">
            <div className="border-canvas/10 flex flex-col items-start gap-4 sm:border-e sm:pe-10 lg:pe-14">
              <LogoImage variant="dark" className="h-16 lg:h-20" />
              {/* Fixed Latin brand sign-off, not translated copy — same
                  convention and exact wording as `HeroIntro`'s preloader
                  tagline, so the two brand touchpoints match. */}
              <p
                dir="ltr"
                className="text-gold/70 text-[10px] tracking-[0.1em] whitespace-nowrap lg:text-[11px]"
              >
                QUALITY • RELIABILITY • COMPETITIVENESS
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <ColumnHeading>{quickLinksHeading}</ColumnHeading>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={columnLinkClass}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <ColumnHeading>{contactHeading}</ColumnHeading>
              <Stack gap="xs" className="text-sm">
                <a
                  href={phoneHref}
                  className="text-canvas/65 hover:text-gold inline-flex items-center gap-2.5 transition-colors duration-200"
                >
                  <Phone
                    aria-hidden="true"
                    className="text-gold size-4 shrink-0"
                  />
                  {phone}
                </a>
                <div className="flex flex-col gap-0.5">
                  <span className="text-canvas/40 ps-[26px] text-[11px] tracking-wide">
                    {emailLabel}
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-canvas/65 hover:text-gold inline-flex items-center gap-2.5 transition-colors duration-200"
                  >
                    <Mail
                      aria-hidden="true"
                      className="text-gold size-4 shrink-0"
                    />
                    {email}
                  </a>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-canvas/40 ps-[26px] text-[11px] tracking-wide">
                    {salesEmailLabel}
                  </span>
                  <a
                    href={`mailto:${salesEmail}`}
                    className="text-canvas/65 hover:text-gold inline-flex items-center gap-2.5 transition-colors duration-200"
                  >
                    <Mail
                      aria-hidden="true"
                      className="text-gold size-4 shrink-0"
                    />
                    {salesEmail}
                  </a>
                </div>
              </Stack>
            </div>
          </div>
        </Reveal>

        <Divider className="border-gold/25 my-8 lg:my-10" />

        {/* Legal Links — a small, separate subsection: its own quiet
            heading plus smaller/muted links (text-xs, lower opacity) than
            the main Quick Links column above, so it reads as secondary
            without being hard to read or tap. Wraps onto one or two rows
            with a tight gap instead of spreading across the full width. */}
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3">
          <Text
            as="h3"
            className="text-canvas/50 shrink-0 text-[11px] font-semibold tracking-[0.16em] uppercase"
          >
            {legalLinksHeading}
          </Text>
          <Stack direction="row" gap="xs" wrap className="gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-canvas/45 hover:text-gold text-xs transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </div>

        <Divider className="border-canvas/10 my-3" />

        <Text size="xs" tone="inverse" className="opacity-45">
          {bottomText}
        </Text>
      </Container>
    </footer>
  );
}
