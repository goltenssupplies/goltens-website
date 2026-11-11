"use client";

import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import type {
  KnowledgeProfile,
  KnowledgeModule,
  TypicalCharacteristic,
  TechnicalStandard,
  VerificationStatus,
} from "@/data/knowledge-profiles/types";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function StatusBadge({ status }: { status: VerificationStatus }) {
  const config: Record<
    VerificationStatus,
    { label_en: string; label_ar: string; className: string }
  > = {
    verified: {
      label_en: "Verified",
      label_ar: "مُتحقق منه",
      className: "bg-emerald-500/15 text-emerald-700 border-emerald-500/25",
    },
    "conflicting-source-values": {
      label_en: "Conflicting Sources",
      label_ar: "مصادر متعارضة",
      className: "bg-amber-500/15 text-amber-700 border-amber-500/25",
    },
    "needs-manufacturer-confirmation": {
      label_en: "Needs Confirmation",
      label_ar: "يحتاج تأكيد",
      className: "bg-blue-500/15 text-blue-700 border-blue-500/25",
    },
    "not-available": {
      label_en: "Not Available",
      label_ar: "غير متوفر",
      className: "bg-neutral-500/15 text-neutral-600 border-neutral-500/25",
    },
  };

  const c = config[status];

  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
        c.className,
      )}
    >
      <span className="ltr:inline rtl:hidden">{c.label_en}</span>
      <span className="rtl:inline ltr:hidden">{c.label_ar}</span>
    </span>
  );
}

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="scroll-mt-24" />;
}

// ---------------------------------------------------------------------------
// Disclaimer
// ---------------------------------------------------------------------------

function DisclaimerBanner({
  disclaimer_en,
  disclaimer_ar,
}: {
  disclaimer_en: string;
  disclaimer_ar: string;
}) {
  return (
    <Reveal>
      <Card variant="glass" padding="md" className="border-amber-500/20 bg-amber-50/50">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-lg" aria-hidden="true">
            ⚠
          </span>
          <div>
            <Text size="sm" weight="semibold" className="mb-1">
              <span className="ltr:inline rtl:hidden">Procurement Notice</span>
              <span className="rtl:inline ltr:hidden">إشعار التوريد</span>
            </Text>
            <Text size="sm" tone="muted">
              <span className="ltr:inline rtl:hidden">{disclaimer_en}</span>
              <span className="rtl:inline ltr:hidden">{disclaimer_ar}</span>
            </Text>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Typical Characteristics Table
// ---------------------------------------------------------------------------

function CharacteristicsTable({
  characteristics,
  isArabic,
}: {
  characteristics: TypicalCharacteristic[];
  isArabic: boolean;
}) {
  return (
    <Reveal>
      <SectionAnchor id="typical-characteristics" />
      <Heading level={2} className="mb-6">
        {isArabic ? "الخصائص النموذجية" : "Typical Characteristics"}
      </Heading>
      <Card variant="glass" padding="none" className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-stone/50">
                <th className="px-4 py-3 text-start font-semibold">
                  {isArabic ? "الخاصية" : "Property"}
                </th>
                <th className="px-4 py-3 text-start font-semibold">
                  {isArabic ? "طريقة الاختبار" : "Test Method"}
                </th>
                <th className="px-4 py-3 text-start font-semibold">
                  {isArabic ? "الوحدة" : "Unit"}
                </th>
                <th className="px-4 py-3 text-start font-semibold">
                  {isArabic ? "القيمة" : "Value"}
                </th>
                <th className="px-4 py-3 text-start font-semibold">
                  {isArabic ? "المصدر" : "Source"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {characteristics.map((c) => (
                <tr
                  key={c.property_en}
                  className={cn(
                    "transition-colors hover:bg-stone/30",
                    c.conflictingValue && "bg-amber-50/30",
                  )}
                >
                  <td className="px-4 py-3 font-medium">
                    {isArabic ? c.property_ar : c.property_en}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">
                    {c.testMethod}
                  </td>
                  <td className="px-4 py-3">{c.unit || "—"}</td>
                  <td className="px-4 py-3">
                    <span className="font-semibold">{c.value}</span>
                    {c.conflictingValue && (
                      <div className="mt-1 text-xs text-amber-700">
                        <span className="ltr:inline rtl:hidden">
                          ⚠ {c.conflictingSourceDate} PDS: {c.conflictingValue}
                        </span>
                        <span className="rtl:inline ltr:hidden">
                          ⚠ صحيفة بيانات {c.conflictingSourceDate}: {c.conflictingValue}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted">
                    {c.sourceDate}
                    {c.conflictingValue && (
                      <div className="mt-1">
                        <StatusBadge status="conflicting-source-values" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-border bg-stone/30 px-4 py-2">
          <Text size="xs" tone="muted">
            {isArabic
              ? "القيم النموذجية خاضعة لتفاوتات التصنيع العادية وليست مواصفات دفعة مضمونة."
              : "Typical values are subject to normal manufacturing tolerances and are not guaranteed batch specifications."}
          </Text>
        </div>
      </Card>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Standards & Approvals
// ---------------------------------------------------------------------------

function StandardsSection({
  standards,
  isArabic,
}: {
  standards: TechnicalStandard[];
  isArabic: boolean;
}) {
  const classifications = standards.filter((s) => s.type === "classification");
  const specs = standards.filter((s) => s.type === "standard");
  const oem = standards.filter((s) => s.type === "oem-approval");

  function renderGroup(
    title_en: string,
    title_ar: string,
    items: TechnicalStandard[],
  ) {
    if (items.length === 0) return null;
    return (
      <div className="space-y-3">
        <Text size="sm" weight="semibold" className="opacity-80">
          {isArabic ? title_ar : title_en}
        </Text>
        <Card variant="glass" padding="md" className="divide-y divide-border">
          {items.map((item) => (
            <div
              key={item.designation}
              className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <div className="flex-1">
                <Text size="sm" weight="medium">
                  {item.designation}
                </Text>
                <Text size="xs" tone="muted" className="mt-0.5">
                  {isArabic ? item.description_ar : item.description_en}
                </Text>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Text size="xs" tone="muted">
                  {item.sourceDate}
                </Text>
                <StatusBadge status={item.status} />
              </div>
            </div>
          ))}
        </Card>
      </div>
    );
  }

  return (
    <Reveal>
      <SectionAnchor id="standards-approvals" />
      <Heading level={2} className="mb-6">
        {isArabic
          ? "المعايير والتصنيفات والاعتمادات"
          : "Standards, Classifications & Approvals"}
      </Heading>
      <div className="space-y-6">
        {renderGroup("Classifications", "التصنيفات", classifications)}
        {renderGroup("Standards Compliance", "الامتثال للمعايير", specs)}
        {renderGroup("OEM Approvals", "اعتمادات الشركات المصنعة للمعدات الأصلية", oem)}
      </div>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Knowledge Module
// ---------------------------------------------------------------------------

function ModuleCard({
  module,
  isArabic,
  index,
}: {
  module: KnowledgeModule;
  isArabic: boolean;
  index: number;
}) {
  const content = isArabic ? module.content_ar : module.content_en;
  const title = isArabic ? module.title_ar : module.title_en;

  return (
    <Reveal delay={0.03 * index}>
      <SectionAnchor id={module.id} />
      <Card variant="glass" padding="lg">
        <div className="mb-4 flex items-start justify-between gap-4">
          <Heading level={3}>{title}</Heading>
          <span className="shrink-0 rounded bg-stone/60 px-2 py-0.5 text-xs font-mono text-muted">
            {module.id}
          </span>
        </div>
        <div
          className={cn(
            "prose prose-sm max-w-none",
            "prose-headings:text-ink prose-p:text-muted prose-strong:text-ink",
            "prose-table:text-sm prose-th:text-start",
            isArabic && "rtl:prose-p:leading-loose",
          )}
          dangerouslySetInnerHTML={{
            __html: formatModuleContent(content),
          }}
        />
        {module.sources.length > 0 && (
          <div className="mt-6 border-t border-border pt-4">
            <Text size="xs" weight="semibold" tone="muted" className="mb-2">
              {isArabic ? "مصادر الوحدة" : "Module Sources"}
            </Text>
            <div className="space-y-2">
              {module.sources.map((sr, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 rounded bg-stone/40 px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
                >
                  <Text size="xs" className="flex-1">
                    {sr.claim}
                  </Text>
                  <div className="flex items-center gap-2">
                    <Text size="xs" tone="muted">
                      {sr.source.documentDate}
                    </Text>
                    <StatusBadge status={sr.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </Reveal>
  );
}

/**
 * Convert the Markdown-subset content (paragraphs, bold, lists, tables)
 * into basic HTML. Intentionally minimal — no heavy Markdown parser.
 */
function formatModuleContent(content: string): string {
  // Escape HTML entities
  let html = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold **text**
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Tables: detect lines starting with |
  const lines = html.split("\n");
  const result: string[] = [];
  let inTable = false;
  let headerDone = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("|") && line.endsWith("|")) {
      // Check if it's a separator line (|---|---|)
      if (/^\|[\s-:|]+\|$/.test(line)) {
        headerDone = true;
        continue;
      }

      const cells = line
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());

      if (!inTable) {
        result.push('<table class="w-full">');
        inTable = true;
        headerDone = false;
      }

      if (!headerDone) {
        result.push("<thead><tr>");
        cells.forEach((c) => result.push(`<th>${c}</th>`));
        result.push("</tr></thead><tbody>");
      } else {
        result.push("<tr>");
        cells.forEach((c) => result.push(`<td>${c}</td>`));
        result.push("</tr>");
      }
    } else {
      if (inTable) {
        result.push("</tbody></table>");
        inTable = false;
        headerDone = false;
      }

      // Unordered list items
      if (line.startsWith("- ")) {
        // Peek ahead — collect contiguous list items
        const listItems: string[] = [line.slice(2)];
        while (
          i + 1 < lines.length &&
          lines[i + 1].trim().startsWith("- ")
        ) {
          i++;
          listItems.push(lines[i].trim().slice(2));
        }
        result.push("<ul>");
        listItems.forEach((item) => result.push(`<li>${item}</li>`));
        result.push("</ul>");
      } else if (line.startsWith("- [ ] ")) {
        // Checkbox list items
        const listItems: string[] = [line.slice(6)];
        while (
          i + 1 < lines.length &&
          lines[i + 1].trim().startsWith("- [ ] ")
        ) {
          i++;
          listItems.push(lines[i].trim().slice(6));
        }
        result.push('<ul class="list-none pl-0">');
        listItems.forEach((item) =>
          result.push(`<li class="flex items-start gap-2"><span class="shrink-0 mt-0.5">☐</span><span>${item}</span></li>`),
        );
        result.push("</ul>");
      } else if (line.startsWith("1. ") || /^\d+\.\s/.test(line)) {
        // Ordered list
        const listItems: string[] = [line.replace(/^\d+\.\s/, "")];
        while (
          i + 1 < lines.length &&
          /^\d+\.\s/.test(lines[i + 1].trim())
        ) {
          i++;
          listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        }
        result.push("<ol>");
        listItems.forEach((item) => result.push(`<li>${item}</li>`));
        result.push("</ol>");
      } else if (line === "") {
        // Empty line → paragraph break
        result.push("");
      } else {
        result.push(`<p>${line}</p>`);
      }
    }
  }

  if (inTable) {
    result.push("</tbody></table>");
  }

  return result.join("\n");
}

// ---------------------------------------------------------------------------
// Table of Contents
// ---------------------------------------------------------------------------

function TableOfContents({
  modules,
  isArabic,
}: {
  modules: KnowledgeModule[];
  isArabic: boolean;
}) {
  return (
    <Reveal>
      <Card variant="glass" padding="md">
        <Text size="sm" weight="semibold" className="mb-3">
          {isArabic ? "محتويات الملف" : "Profile Contents"}
        </Text>
        <nav>
          <ol className="space-y-1.5 text-sm">
            <li>
              <a
                href="#typical-characteristics"
                className="text-muted transition-colors hover:text-ink"
              >
                {isArabic ? "الخصائص النموذجية" : "Typical Characteristics"}
              </a>
            </li>
            <li>
              <a
                href="#standards-approvals"
                className="text-muted transition-colors hover:text-ink"
              >
                {isArabic
                  ? "المعايير والاعتمادات"
                  : "Standards & Approvals"}
              </a>
            </li>
            {modules.map((m, i) => (
              <li key={m.id}>
                <a
                  href={`#${m.id}`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  <span className="mr-1.5 rtl:ml-1.5 rtl:mr-0 text-xs text-muted/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {isArabic ? m.title_ar : m.title_en}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Card>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Primary Sources
// ---------------------------------------------------------------------------

function PrimarySourcesSection({
  profile,
  isArabic,
}: {
  profile: KnowledgeProfile;
  isArabic: boolean;
}) {
  return (
    <Reveal>
      <Card variant="glass" padding="md">
        <Text size="sm" weight="semibold" className="mb-3">
          {isArabic ? "المراجع الأساسية" : "Primary Source Documents"}
        </Text>
        <div className="space-y-2">
          {profile.primarySources.map((src, i) => (
            <div key={i} className="rounded bg-stone/40 px-3 py-2">
              <Text size="sm" weight="medium">
                {src.document}
              </Text>
              <Text size="xs" tone="muted">
                {isArabic ? "التاريخ:" : "Date:"} {src.documentDate}
              </Text>
            </div>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Main View
// ---------------------------------------------------------------------------

export interface KnowledgeProfileViewProps {
  profile: KnowledgeProfile;
  locale: string;
}

export function KnowledgeProfileView({
  profile,
  locale,
}: KnowledgeProfileViewProps) {
  const isArabic = locale === "ar";

  return (
    <div className="space-y-12">
      {/* Dev-only banner */}
      <div className="rounded-lg border-2 border-dashed border-rose-400/50 bg-rose-50/50 px-4 py-3 text-center">
        <Text size="sm" weight="semibold" className="text-rose-700">
          ⚙ DEVELOPMENT PREVIEW — NOT PUBLIC
        </Text>
        <Text size="xs" tone="muted">
          This route returns 404 in production. No public exposure.
        </Text>
      </div>

      {/* Header */}
      <Reveal>
        <div className="text-center">
          <Text size="sm" weight="medium" tone="muted" className="mb-2 uppercase tracking-wider">
            {isArabic ? profile.subtitle_ar : profile.subtitle_en}
          </Text>
          <Heading level={1}>
            {isArabic ? profile.title_ar : profile.title_en}
          </Heading>
          <Text size="sm" tone="muted" className="mt-2">
            {isArabic ? "معرّف المنتج:" : "Product ID:"}{" "}
            <code className="rounded bg-stone/60 px-1.5 py-0.5 font-mono text-xs">
              {profile.productSlug}
            </code>
          </Text>
        </div>
      </Reveal>

      {/* Disclaimer */}
      <DisclaimerBanner
        disclaimer_en={profile.disclaimer_en}
        disclaimer_ar={profile.disclaimer_ar}
      />

      {/* Two-column layout on large screens */}
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <TableOfContents modules={profile.modules} isArabic={isArabic} />
          <PrimarySourcesSection profile={profile} isArabic={isArabic} />
        </aside>

        {/* Main content */}
        <div className="space-y-10">
          <CharacteristicsTable
            characteristics={profile.typicalCharacteristics}
            isArabic={isArabic}
          />

          <StandardsSection
            standards={profile.standards}
            isArabic={isArabic}
          />

          {/* Knowledge Modules */}
          <div className="space-y-6">
            <Heading level={2}>
              {isArabic ? "وحدات المعرفة" : "Knowledge Modules"}
            </Heading>
            {profile.modules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                isArabic={isArabic}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
