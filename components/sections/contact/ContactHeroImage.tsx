import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { GlassContactCard } from "@/components/ui/GlassContactCard";
import type { Locale } from "@/i18n/routing";
import {
  contactEmail,
  contactPhoneDisplay,
  contactPhoneHref,
  contactWhatsAppHref,
} from "@/lib/site";

// Royalty-free (Pexels, photographer: Kampus Production) — loaded directly
// from its source URL per the brief, not self-hosted. `w=1600` keeps the
// fetched source reasonably sized; Next's image pipeline re-encodes and
// resizes it further for each viewport.
const IMAGE_SRC =
  "https://images.pexels.com/photos/8204402/pexels-photo-8204402.jpeg?auto=compress&cs=tinysrgb&w=1600";

interface ContactHeroImageProps {
  locale: Locale;
}

/**
 * Full-height support-team photo for the Contact page's left column, with
 * real contact details overlaid as dark-glass cards (`GlassContactCard`).
 * Office Address and Working Hours cards are intentionally omitted — no
 * confirmed value exists yet (see `lib/site.ts`'s comment); add them here
 * once real ones are provided rather than inventing placeholders.
 */
export async function ContactHeroImage({ locale }: ContactHeroImageProps) {
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="group relative h-full min-h-[560px] overflow-hidden rounded-[20px]">
      <Image
        src={IMAGE_SRC}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Subtle flat dark wash so the photo blends with the site's dark
          sections, plus a stronger bottom-anchored gradient purely so the
          overlaid cards' light text stays legible over the photo. */}
      <div
        aria-hidden="true"
        className="bg-ink/35 pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, rgba(30,29,27,0.9) 0%, rgba(30,29,27,0.35) 60%, transparent 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 sm:p-8">
        <GlassContactCard
          icon={<Phone className="size-6" />}
          label={t("phoneLabel")}
          value={contactPhoneDisplay}
          href={contactPhoneHref}
        />
        <GlassContactCard
          icon={<Mail className="size-6" />}
          label={t("emailLabel")}
          value={contactEmail}
          href={`mailto:${contactEmail}`}
        />
        <GlassContactCard
          icon={<MessageCircle className="size-6" />}
          label={t("whatsappLabel")}
          value={t("whatsappAction")}
          href={contactWhatsAppHref}
        />
      </div>
    </div>
  );
}
