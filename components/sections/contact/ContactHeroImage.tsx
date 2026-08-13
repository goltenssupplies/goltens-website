import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Briefcase, Mail, Phone } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { ContactCard } from "@/components/ui/ContactCard";
import type { Locale } from "@/i18n/routing";
import {
  contactEmail,
  contactPhoneDisplay,
  contactPhoneHref,
  salesEmail,
} from "@/lib/site";

// Self-hosted call-center-agent photo (`public/images/call-center-agent.png`).
const IMAGE_SRC = "/images/call-center-agent.png";

interface ContactHeroImageProps {
  locale: Locale;
}

/**
 * The photo column of the site's one approved contact/quote layout — used
 * by `/contact`, `/rfq`, and `SectorQuoteCTA` (every sector/solution/
 * knowledge/product quote block) via `ContactQuoteSection`. Pinned to the
 * physical left in all of them (see `ContactQuoteSection`'s `dir`
 * comment): a large, standalone landscape photo — not a small card, no
 * text overlaid on it — with the three approved quick-contact cards
 * (Phone / General Email / Sales) directly below it, visually tied to the
 * photo without being on top of it. No WhatsApp card by design — WhatsApp
 * isn't part of the approved card set; `contactWhatsAppHref` in
 * `lib/site.ts` is left defined (not deleted) for any future non-card use.
 * Office Address and Working Hours cards are intentionally omitted — no
 * confirmed value exists yet (see `lib/site.ts`'s comment); add them here
 * once real ones are provided rather than inventing placeholders.
 */
export async function ContactHeroImage({ locale }: ContactHeroImageProps) {
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
        <Image
          src={IMAGE_SRC}
          alt=""
          fill
          sizes="(min-width: 1024px) 68vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* `@container` on this row + the `@[760px]:` variant below make the
          3-across layout respond to the row's own rendered width (which
          tracks the photo's width, not the viewport) — so the cards only
          go one-per-line when there truly isn't room for three, and the
          longest value never has to wrap. DOM order is reversed from the
          intended physical left-to-right reading, since this column always
          has `dir="rtl"` forced on it (see `ContactQuoteSection`'s `dir`
          comment). */}
      <div className="@container">
        <div className="grid grid-cols-1 gap-3 @[760px]:grid-cols-3">
          <Card variant="premium" padding="sm">
            <ContactCard
              size="sm"
              icon={<Briefcase className="size-4" />}
              label={t("salesLabel")}
              value={
                <span dir="ltr" className="block whitespace-nowrap">
                  {salesEmail}
                </span>
              }
              href={`mailto:${salesEmail}`}
            />
          </Card>
          <Card variant="premium" padding="sm">
            <ContactCard
              size="sm"
              icon={<Mail className="size-4" />}
              label={t("emailLabel")}
              value={
                <span dir="ltr" className="block whitespace-nowrap">
                  {contactEmail}
                </span>
              }
              href={`mailto:${contactEmail}`}
            />
          </Card>
          <Card variant="premium" padding="sm">
            <ContactCard
              size="sm"
              icon={<Phone className="size-4" />}
              label={t("phoneLabel")}
              value={
                <span dir="ltr" className="block whitespace-nowrap">
                  {contactPhoneDisplay}
                </span>
              }
              href={contactPhoneHref}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
