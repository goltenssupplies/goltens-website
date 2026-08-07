import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
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
  /** Short company description — a sentence, not the full About-page copy. */
  description: string;
  /** Gold CTA button label, e.g. "تواصل معنا" — scrolls to the homepage's contact/RFQ section. */
  ctaLabel: string;
  ctaHref: Parameters<typeof Link>[0]["href"];
  companyHeading: string;
  companyLinks: FooterLink[];
  productsHeading: string;
  productLinks: FooterLink[];
  contactHeading: string;
  location: string;
  email: string;
  /** Rendered as-is, e.g. wrapped `dir="ltr"` at the call site for a phone number. */
  phone: ReactNode;
  phoneHref: string;
  legalLinks: FooterLink[];
  /** Full bottom-bar copyright line, e.g. "© 2026 GOLTENS General Supplies. All Rights Reserved." */
  bottomText: string;
  className?: string;
}

const columnLinkClass =
  "text-canvas/65 hover:text-gold w-fit text-sm transition-colors duration-200";

const columnHeadingClass =
  "text-gold/90 text-xs font-semibold tracking-[0.16em] uppercase";

/**
 * Site-wide footer: a four-column premium layout (brand + CTA, Company,
 * Products, Contact) over a dark-charcoal surface, then a legal bar
 * (copyright + Privacy/Terms). The gold CTA links to `/contact` — the
 * site's single, dedicated contact page — same as every other "get in
 * touch" entry point (Navbar, Hero). Social icons are omitted — no real
 * LinkedIn/Facebook company page URLs exist yet; add a `socialLinks` prop
 * here once they do, rather than link to nothing. The site URL is
 * deliberately not shown here — it's redundant chrome in the address bar
 * the visitor is already in.
 */
export function Footer({
  description,
  ctaLabel,
  ctaHref,
  companyHeading,
  companyLinks,
  productsHeading,
  productLinks,
  contactHeading,
  location,
  email,
  phone,
  phoneHref,
  legalLinks,
  bottomText,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "relative overflow-hidden bg-[#0d1117] text-canvas",
        className,
      )}
    >
      <div aria-hidden="true" className="bg-gold absolute inset-x-0 top-0 h-px" />
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
        className="bg-gold/5 pointer-events-none absolute -top-40 -start-40 size-96 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-gold/5 pointer-events-none absolute -end-40 -bottom-40 size-96 rounded-full blur-3xl"
      />

      <Container className="relative py-16 lg:py-20">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
            <div className="flex flex-col items-start gap-5 sm:col-span-2 lg:col-span-1">
              <LogoImage variant="dark" className="h-16 lg:h-20" />
              <Text size="sm" tone="inverse" className="max-w-xs opacity-60">
                {description}
              </Text>
              <Button
                href={ctaHref}
                variant="accent"
                className="from-gold to-accent hover:to-gold w-fit border-0 bg-gradient-to-r text-ink shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(212,175,55,0.45)] active:translate-y-0"
              >
                {ctaLabel}
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <Text as="h3" className={columnHeadingClass}>
                {companyHeading}
              </Text>
              <Stack as="nav" gap="sm">
                {companyLinks.map((link) => (
                  <Link key={link.label} href={link.href} className={columnLinkClass}>
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </div>

            <div className="flex flex-col gap-4">
              <Text as="h3" className={columnHeadingClass}>
                {productsHeading}
              </Text>
              <Stack as="nav" gap="sm">
                {productLinks.map((link) => (
                  <Link key={link.label} href={link.href} className={columnLinkClass}>
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </div>

            <div className="flex flex-col gap-4">
              <Text as="h3" className={columnHeadingClass}>
                {contactHeading}
              </Text>
              <Stack gap="sm" className="text-sm">
                <span className="text-canvas/65 inline-flex items-center gap-2.5">
                  <MapPin aria-hidden="true" className="text-gold size-4 shrink-0" />
                  {location}
                </span>
                <a
                  href={phoneHref}
                  className="text-canvas/65 hover:text-gold inline-flex items-center gap-2.5 transition-colors duration-200"
                >
                  <Phone aria-hidden="true" className="text-gold size-4 shrink-0" />
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="text-canvas/65 hover:text-gold inline-flex items-center gap-2.5 transition-colors duration-200"
                >
                  <Mail aria-hidden="true" className="text-gold size-4 shrink-0" />
                  {email}
                </a>
              </Stack>
            </div>
          </div>
        </Reveal>

        <Divider className="border-canvas/10 my-12" />

        <Stack
          direction="row"
          justify="between"
          align="center"
          gap="sm"
          wrap
          className="text-sm"
        >
          <Text size="sm" tone="inverse" className="opacity-45">
            {bottomText}
          </Text>
          <Stack direction="row" gap="lg" wrap>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-canvas/60 hover:text-gold text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
