import type { Metadata } from "next";
import type { ReactNode } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Sans_Condensed,
} from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Footer } from "@/components/layout/Footer";
import { HeaderLogo } from "@/components/layout/HeaderLogo";
import { Navbar } from "@/components/layout/Navbar";
import { SplashProvider } from "@/components/layout/SplashContext";
import { UtilityTrayLoader } from "@/components/layout/UtilityTrayLoader";
import { ComparisonProvider } from "@/components/products/ComparisonContext";
import { RfqCartProvider } from "@/components/rfq/RfqCartContext";
import { routing, type Locale } from "@/i18n/routing";
import {
  contactEmail,
  contactPhoneDisplay,
  contactPhoneHref,
  salesEmail,
  siteUrl,
} from "@/lib/site";
import { organizationJsonLd } from "@/lib/structured-data";
import "../globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-sans-arabic",
  subsets: ["arabic"],
  // "700" added for the Hero headline's required bold weight — also
  // improves every other `rtl:font-bold` heading sitewide, which
  // previously had to synthesize (fake) bold from the 600 weight.
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-plex-sans-condensed",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GOLTENS GENERAL SUPPLIES",
    template: "%s | GOLTENS GENERAL SUPPLIES",
  },
  description:
    "Procurement and general supply solutions for government entities, universities and industrial organizations in Egypt.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const directionByLocale: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

const bodyFontClassByLocale: Record<Locale, string> = {
  ar: "font-sans-arabic",
  en: "font-sans",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = directionByLocale[locale];
  const t = await getTranslations({ locale, namespace: "nav" });
  const tFooter = await getTranslations({ locale, namespace: "footer" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tKnowledge = await getTranslations({
    locale,
    namespace: "knowledge",
  });
  const tDownloads = await getTranslations({
    locale,
    namespace: "downloads.center",
  });

  // Every nav item is a real, dedicated page — not a same-page anchor — so
  // each one works correctly from any page, not just the homepage. "Sectors"
  // and "Solutions" each have their own `/sectors` / `/solutions` listing
  // page; the homepage's own `Sectors` section stays as a teaser and is
  // unaffected by this.
  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("sectors"), href: "/sectors" },
    { label: t("solutions"), href: "/solutions" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  const legalLinks = [
    { label: tFooter("privacyPolicy"), href: "/privacy" },
    { label: tFooter("termsOfUse"), href: "/terms" },
    { label: tFooter("disclaimer"), href: "/disclaimer" },
    { label: tFooter("cookiePolicy"), href: "/cookie-policy" },
    { label: tFooter("accessibility"), href: "/accessibility" },
  ];

  // Footer "Quick Links" column — the site's real top-level nav
  // destinations. No separate sectors/services column (removed by explicit
  // client direction), so Sectors stays listed here rather than dropped.
  // Knowledge Center and Download Center are appended here rather than the
  // primary Navbar (unchanged per spec) — they carry no main-nav item, so
  // this footer entry is otherwise their only site-wide, crawlable path.
  const footerQuickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("sectors"), href: "/sectors" },
    { label: t("solutions"), href: "/solutions" },
    { label: t("contact"), href: "/contact" },
    { label: tKnowledge("breadcrumbLabel"), href: "/knowledge" },
    { label: tDownloads("title"), href: "/downloads" },
  ];

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${plexSans.variable} ${plexSansArabic.variable} ${plexSansCondensed.variable} ${plexMono.variable}`}
    >
      <body
        className={`bg-canvas text-ink min-h-full antialiased ${bodyFontClassByLocale[locale]}`}
      >
        <NextIntlClientProvider messages={messages}>
          <SplashProvider>
            <RfqCartProvider>
              <ComparisonProvider>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationJsonLd(locale)),
                  }}
                />
                <a
                  href="#main-content"
                  className="focus:bg-primary focus:text-canvas sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
                >
                  {tCommon("skipToContent")}
                </a>
                <Navbar
                  logo={<HeaderLogo />}
                  navItems={navItems}
                  primaryNavLabel={t("primaryNav")}
                  menuOpenLabel={t("openMenu")}
                  menuCloseLabel={t("closeMenu")}
                />
                <main id="main-content">{children}</main>
                <Footer
                  quickLinksHeading={tFooter("quickLinksHeading")}
                  quickLinks={footerQuickLinks}
                  contactHeading={tFooter("contactHeading")}
                  phone={
                    <span dir="ltr" className="ltr">
                      {contactPhoneDisplay}
                    </span>
                  }
                  phoneHref={contactPhoneHref}
                  email={contactEmail}
                  emailLabel={tFooter("emailLabel")}
                  salesEmail={salesEmail}
                  salesEmailLabel={tFooter("salesEmailLabel")}
                  legalLinksHeading={tFooter("legalLinksHeading")}
                  legalLinks={legalLinks}
                  bottomText={tFooter("copyright", {
                    year: new Date().getFullYear(),
                  })}
                />
                <UtilityTrayLoader />
              </ComparisonProvider>
            </RfqCartProvider>
          </SplashProvider>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
}
