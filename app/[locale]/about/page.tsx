import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Eye,
  Info,
  ListChecks,
  Target,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { getSectorBySlug } from "@/data/sectors";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { SECTOR_ICONS } from "@/lib/sectors";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

interface TitledPoint {
  title: string;
  description: string;
}

/**
 * Published procurement sectors listed in "What We Supply", in display
 * order. Titles and one-line descriptions come from this page's own
 * `about.scopeItems.<slug>` translations (claim-safe, About-only wording);
 * `data/sectors.ts` is only read to confirm each sector page exists and to
 * pick its icon.
 */
const SCOPE_SECTOR_SLUGS = [
  "government-procurement",
  "industrial-equipment",
  "fire-protection",
  "electrical-energy",
  "heavy-equipment",
  "commercial-vehicles",
  "healthcare",
  "industrial-chemicals",
  "construction",
  "lubricants-oils",
  "global-sourcing",
] as const;

const COMMITMENT_ICONS = [ClipboardCheck, ListChecks, Clock, UserRound];

/** Established quotation flow (same target as the header's "Request a Quotation"). */
const QUOTE_HREF = "/contact";
const SECTORS_HREF = "/sectors";
const SEND_REQUIREMENT_HREF = "/send-requirement";

const CARD_CLASS =
  "border-border bg-canvas h-full rounded-[20px] border shadow-[0_2px_8px_rgba(30,29,27,0.04),0_20px_48px_rgba(30,29,27,0.08)]";

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.about" });

  return buildMetadata({
    locale: locale as Locale,
    path: "/about",
    title: t("title"),
    description: t("description"),
  });
}

/** A small gold icon badge shared by the icon cards on this page. */
function IconBadge({
  icon: Icon,
  className,
}: {
  icon: typeof Target;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`border-gold/30 bg-gold/10 text-gold flex size-12 shrink-0 items-center justify-center rounded-2xl border ${className ?? ""}`}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");
  const profileParagraphs = t.raw("profileParagraphs") as string[];
  const contexts = t.raw("contexts") as string[];
  const processSteps = t.raw("processSteps") as TitledPoint[];
  const scopeItems = t.raw("scopeItems") as Record<string, TitledPoint>;
  const boqItems = t.raw("boqItems") as string[];
  const commitments = t.raw("commitments") as TitledPoint[];

  const sectors = SCOPE_SECTOR_SLUGS.map((slug) => ({
    slug,
    sector: getSectorBySlug(slug),
    copy: scopeItems[slug],
  })).filter(
    (
      item,
    ): item is typeof item & {
      sector: NonNullable<typeof item.sector>;
    } => item.sector !== undefined && item.copy !== undefined,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: tNav("home"), url: `${siteUrl}/${locale}` },
              { name: tNav("about"), url: `${siteUrl}/${locale}/about` },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <Section
        spacing="lg"
        background="obsidian"
        className="relative overflow-hidden pt-36 pb-16 sm:pb-32 lg:pt-44"
      >
        <div
          aria-hidden="true"
          className="bg-accent absolute inset-x-0 top-0 h-px"
        />
        <div
          aria-hidden="true"
          className="bg-gold/[0.06] pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="bg-grid-pattern text-accent/[0.05] pointer-events-none absolute inset-0"
        />
        <SectionParticles />

        <Container className="relative">
          <Reveal>
            <Stack
              gap="md"
              align="center"
              className="mx-auto max-w-3xl text-center"
            >
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <Heading level={1} tone="inverse">
                {t("title")}
              </Heading>
              <Text size="lg" tone="inverse" className="opacity-75">
                {t("description")}
              </Text>
              <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
                <Button href={QUOTE_HREF} variant="accent" size="lg">
                  {t("primaryCta")}
                </Button>
                <Button href={SECTORS_HREF} variant="secondary" size="lg">
                  {t("secondaryCta")}
                </Button>
              </div>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* WHO WE ARE */}
      <Section
        background="stone"
        className="relative overflow-hidden py-12 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="bg-dot-pattern text-accent/[0.05] pointer-events-none absolute inset-0"
        />
        <Container className="relative">
          <Reveal>
            <Stack gap="lg" className="mx-auto max-w-3xl">
              <Heading level={2} tone="inverse">
                {t("profileTitle")}
              </Heading>
              <Stack gap="md">
                {profileParagraphs.map((paragraph) => (
                  <Text
                    key={paragraph}
                    size="lg"
                    tone="inverse"
                    className="text-base opacity-75 sm:text-lg"
                  >
                    {paragraph}
                  </Text>
                ))}
              </Stack>
              <div>
                <Text
                  size="xs"
                  weight="semibold"
                  tone="muted"
                  className="mb-3 tracking-wide uppercase rtl:tracking-normal"
                >
                  {t("contextsTitle")}
                </Text>
                <ul className="flex flex-wrap gap-2">
                  {contexts.map((context) => (
                    <li
                      key={context}
                      className="border-border text-ink rounded-full border bg-white px-3.5 py-1.5 text-sm"
                    >
                      {context}
                    </li>
                  ))}
                </ul>
              </div>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* HOW WE WORK */}
      <Section
        background="canvas"
        className="relative overflow-hidden py-12 sm:py-24"
      >
        <Container className="relative">
          <Reveal>
            <Stack
              gap="sm"
              align="center"
              className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12"
            >
              <Heading level={2} tone="inverse">
                {t("processTitle")}
              </Heading>
              <Text
                size="lg"
                tone="inverse"
                className="text-base opacity-70 sm:text-lg"
              >
                {t("processIntro")}
              </Text>
            </Stack>
          </Reveal>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 0.06} className="h-full">
                  <div
                    className={`${CARD_CLASS} flex gap-3 p-4 sm:flex-col sm:gap-2 sm:p-5`}
                  >
                    <span
                      aria-hidden="true"
                      className="bg-gold/15 text-ink flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                    >
                      {(index + 1).toLocaleString("en")}
                    </span>
                    <Stack gap="xs">
                      <Heading level={3} size={5} tone="inverse">
                        {step.title}
                      </Heading>
                      <Text size="sm" tone="inverse" className="opacity-70">
                        {step.description}
                      </Text>
                    </Stack>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* WHAT WE SUPPLY — one About-local sector overview */}
      <Section
        background="obsidian"
        className="relative overflow-hidden py-12 sm:py-24"
      >
        <Container className="relative">
          <Reveal>
            <Stack
              gap="sm"
              align="center"
              className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12"
            >
              <Heading level={2} tone="inverse">
                {t("scopeTitle")}
              </Heading>
              <Text
                size="lg"
                tone="inverse"
                className="text-base opacity-70 sm:text-lg"
              >
                {t("scopeIntro")}
              </Text>
            </Stack>
          </Reveal>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {sectors.map(({ slug, sector, copy }) => {
              const Icon = SECTOR_ICONS[sector.icon] ?? ArrowRight;
              return (
                <li key={slug}>
                  <Link
                    href={`/sectors/${slug}`}
                    className="group border-border bg-canvas hover:border-gold/50 flex h-full items-center gap-3 rounded-[16px] border p-3 transition-colors sm:items-start sm:p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="border-gold/30 bg-gold/10 text-gold flex size-10 shrink-0 items-center justify-center rounded-xl border"
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="text-ink font-semibold">
                        {copy.title}
                      </span>
                      <span className="text-ink/65 hidden text-sm sm:block">
                        {copy.description}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="text-gold size-4 shrink-0 transition-transform group-hover:translate-x-0.5 sm:mt-1 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* BOQs & TENDER REQUIREMENTS */}
      <Section
        background="stone"
        className="relative overflow-hidden py-12 sm:py-24"
      >
        <Container className="relative">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            <Reveal className="lg:col-span-2">
              <Stack gap="sm">
                <Heading level={2} tone="inverse">
                  {t("boqTitle")}
                </Heading>
                <Text
                  size="lg"
                  tone="inverse"
                  className="text-base opacity-70 sm:text-lg"
                >
                  {t("boqIntro")}
                </Text>
              </Stack>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-3">
              <Stack gap="md">
                <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {boqItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        aria-hidden="true"
                        className="text-gold mt-0.5 size-5 shrink-0"
                      />
                      <Text tone="inverse">{item}</Text>
                    </li>
                  ))}
                </ul>
                <div className="border-gold/25 bg-gold/[0.06] flex items-start gap-3 rounded-[12px] border p-4">
                  <Info
                    aria-hidden="true"
                    className="text-gold mt-0.5 size-5 shrink-0"
                  />
                  <Text size="sm" tone="inverse">
                    {t("boqNote")}
                  </Text>
                </div>
              </Stack>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* OUR COMMITMENTS + INDEPENDENCE STATEMENT */}
      <Section
        background="canvas"
        className="relative overflow-hidden py-12 sm:py-24"
      >
        <Container className="relative">
          <Reveal>
            <Heading
              level={2}
              tone="inverse"
              className="mb-8 text-center sm:mb-10 lg:mb-12"
            >
              {t("commitmentsTitle")}
            </Heading>
          </Reveal>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((commitment, index) => (
              <li key={commitment.title}>
                <Reveal delay={index * 0.06} className="h-full">
                  <div
                    className={`${CARD_CLASS} flex gap-4 p-4 sm:flex-col sm:p-5`}
                  >
                    <IconBadge icon={COMMITMENT_ICONS[index] ?? ListChecks} />
                    <Stack gap="xs">
                      <Text weight="semibold" tone="inverse">
                        {commitment.title}
                      </Text>
                      <Text size="sm" tone="inverse" className="opacity-70">
                        {commitment.description}
                      </Text>
                    </Stack>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <aside
              aria-labelledby="independence-title"
              className="border-ink/15 mx-auto mt-8 flex max-w-3xl items-start gap-4 rounded-[16px] border bg-white p-4 sm:mt-10 sm:p-6 lg:mt-12"
            >
              <span
                aria-hidden="true"
                className="border-gold/30 bg-gold/10 text-gold flex size-10 shrink-0 items-center justify-center rounded-xl border"
              >
                <Info className="size-5" strokeWidth={1.75} />
              </span>
              <Stack gap="xs">
                <Heading
                  id="independence-title"
                  level={2}
                  size={5}
                  tone="inverse"
                >
                  {t("independenceTitle")}
                </Heading>
                <Text size="sm" tone="inverse" className="opacity-75">
                  {t("independenceText")}
                </Text>
              </Stack>
            </aside>
          </Reveal>
        </Container>
      </Section>

      {/* MISSION & VISION */}
      <Section
        background="stone"
        className="relative overflow-hidden py-12 sm:py-24"
      >
        <Container className="relative">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <Stack gap="sm" className={`${CARD_CLASS} p-6 sm:p-8`}>
                <IconBadge icon={Target} className="max-sm:hidden" />
                <Heading level={2} size={3} tone="inverse">
                  {t("missionTitle")}
                </Heading>
                <Text
                  tone="inverse"
                  size="lg"
                  className="text-base opacity-70 sm:text-lg"
                >
                  {t("missionText")}
                </Text>
              </Stack>
            </Reveal>
            <Reveal delay={0.08}>
              <Stack gap="sm" className={`${CARD_CLASS} p-6 sm:p-8`}>
                <IconBadge icon={Eye} className="max-sm:hidden" />
                <Heading level={2} size={3} tone="inverse">
                  {t("visionTitle")}
                </Heading>
                <Text
                  tone="inverse"
                  size="lg"
                  className="text-base opacity-70 sm:text-lg"
                >
                  {t("visionText")}
                </Text>
              </Stack>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CLOSING CTA */}
      <Section
        background="obsidian"
        className="relative overflow-hidden py-12 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="bg-dot-pattern text-accent/[0.05] pointer-events-none absolute inset-0"
        />
        <Container className="relative">
          <Reveal>
            <Stack
              align="center"
              gap="md"
              className="mx-auto max-w-2xl text-center"
            >
              <Heading level={2} tone="inverse">
                {t("ctaTitle")}
              </Heading>
              <Text
                size="lg"
                tone="inverse"
                className="text-base opacity-70 sm:text-lg"
              >
                {t("ctaText")}
              </Text>
              <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
                <Button href={QUOTE_HREF} variant="accent" size="lg">
                  {t("ctaPrimary")}
                </Button>
                <Button
                  href={SEND_REQUIREMENT_HREF}
                  variant="secondary"
                  size="lg"
                >
                  {t("ctaSecondary")}
                </Button>
              </div>
            </Stack>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
