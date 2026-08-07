"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export interface LanguageSwitcherProps {
  className?: string;
}

/**
 * Links to the current page in the other locale, labeled with that locale's
 * own language name (`common.switchLanguage` in messages/{locale}.json —
 * "English" under ar, "العربية" under en). This is the one component in the
 * design system allowed to read translations directly: the label is fixed,
 * structural i18n chrome, not page content, so there is no prop-driven
 * variant of it elsewhere. Only ever rendered inside the (permanently dark)
 * Navbar, so its colors are dark-theme constants rather than a `tone` prop.
 */
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale =
    routing.locales.find((candidate) => candidate !== locale) ??
    routing.defaultLocale;

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className={cn(
        "text-sm font-medium text-white transition-colors hover:text-[#C89B3C]",
        className,
      )}
    >
      {t("switchLanguage")}
    </Link>
  );
}
