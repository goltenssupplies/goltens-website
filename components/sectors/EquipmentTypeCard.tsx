import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

import { QuotePrefillLink } from "@/components/sectors/QuotePrefillLink";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";

export interface EquipmentTypeCardItem {
  /** Stable anchor id, e.g. "hydraulic-excavators". */
  id: string;
  name: string;
  summary: string;
  whatItIs: string;
  usedFor: string;
  applications: string[];
  industries: string[];
  selectionFactors: { factor: string; detail: string }[];
  requestChecklist: string[];
  related: { id: string; label: string }[];
  /** Public product page — only ever set when the linked product passes `hasPublicIdentity()`. */
  listedHref?: string;
  ctaLabel: string;
  /** Value prefilled into the quote form's product field. */
  prefill: string;
}

export interface EquipmentTypeCardLabels {
  whatItIs: string;
  usedFor: string;
  applications: string;
  industries: string;
  selectionToggle: string;
  selection: string;
  requestChecklist: string;
  related: string;
  viewListed: string;
}

export interface EquipmentTypeCardProps {
  item: EquipmentTypeCardItem;
  labels: EquipmentTypeCardLabels;
  quoteAnchor: string;
}

const DT_CLASS =
  "text-ink-muted mb-2 text-xs font-semibold tracking-wide uppercase rtl:tracking-normal";

/**
 * One general equipment-type guide (H3) — what the machine is, what it's
 * used for, typical applications and industries, then the selection
 * considerations and quotation checklist in a native `<details>` block
 * (collapsed by default so a category of five guides stays scannable,
 * while the content stays in the HTML), and a "Request a quotation for …"
 * link that prefills the quote form. Editorial content only — never a
 * product listing; `listedHref` is the one optional link to a public
 * product page, resolved by the page only for public products.
 */
export function EquipmentTypeCard({
  item,
  labels,
  quoteAnchor,
}: EquipmentTypeCardProps) {
  return (
    <article
      id={item.id}
      aria-labelledby={`${item.id}-title`}
      className="border-border scroll-mt-44 rounded-[16px] border bg-white p-6 shadow-[0_8px_30px_rgba(30,29,27,0.05)] sm:p-8"
    >
      <header className="border-border border-b pb-5">
        <Heading id={`${item.id}-title`} level={3} size={4} tone="inverse">
          {item.name}
        </Heading>
        <Text tone="muted" className="mt-2 max-w-3xl">
          {item.summary}
        </Text>
      </header>

      <dl className="mt-6 grid gap-x-10 gap-y-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div>
            <dt className={DT_CLASS}>{labels.whatItIs}</dt>
            <dd>
              <Text tone="inverse">{item.whatItIs}</Text>
            </dd>
          </div>
          <div>
            <dt className={DT_CLASS}>{labels.usedFor}</dt>
            <dd>
              <Text tone="inverse">{item.usedFor}</Text>
            </dd>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <dt className={DT_CLASS}>{labels.applications}</dt>
            <dd>
              <ul className="flex flex-col gap-2">
                {item.applications.map((application) => (
                  <li key={application} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="bg-gold mt-2.5 size-1.5 shrink-0 rounded-full"
                    />
                    <Text size="sm" tone="inverse">
                      {application}
                    </Text>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className={DT_CLASS}>{labels.industries}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {item.industries.map((industry) => (
                  <li
                    key={industry}
                    className="border-gold/25 bg-gold/10 text-ink rounded-sm border px-3 py-1 text-sm"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </div>
      </dl>

      <details className="group border-border mt-6 border-t pt-5">
        <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none">
          {labels.selectionToggle}
          <ChevronDown
            aria-hidden="true"
            className="text-gold size-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <dl className="mt-5 grid gap-x-10 gap-y-6 lg:grid-cols-2">
          <div>
            <dt className={DT_CLASS}>{labels.selection}</dt>
            <dd>
              <ul className="flex flex-col gap-4">
                {item.selectionFactors.map((factor) => (
                  <li key={factor.factor}>
                    <Text size="sm" weight="semibold" tone="inverse">
                      {factor.factor}
                    </Text>
                    <Text size="sm" tone="muted" className="mt-0.5">
                      {factor.detail}
                    </Text>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className={DT_CLASS}>{labels.requestChecklist}</dt>
            <dd>
              <ul className="flex flex-col gap-3">
                {item.requestChecklist.map((entry) => (
                  <li key={entry} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="text-gold mt-0.5 size-4 shrink-0"
                    />
                    <Text size="sm" tone="inverse">
                      {entry}
                    </Text>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </details>

      <footer className="border-border mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <QuotePrefillLink href={quoteAnchor} prefill={item.prefill}>
          {item.ctaLabel}
        </QuotePrefillLink>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {item.listedHref && (
            <Link
              href={item.listedHref}
              className="text-ink hover:text-gold inline-flex items-center gap-1.5 text-sm font-medium"
            >
              {labels.viewListed}
              <ArrowRight
                aria-hidden="true"
                className="size-4 rtl:rotate-180"
              />
            </Link>
          )}
          {item.related.length > 0 && (
            <p className="text-ink-muted flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span>{labels.related}:</span>
              {item.related.map((related) => (
                <a
                  key={related.id}
                  href={`#${related.id}`}
                  className="text-ink hover:text-gold underline decoration-dotted underline-offset-4"
                >
                  {related.label}
                </a>
              ))}
            </p>
          )}
        </div>
      </footer>
    </article>
  );
}
