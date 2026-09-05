import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Clock,
  Eye,
  Globe,
  Headset,
  Landmark,
  MapPin,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

import { GlobalBrands } from "@/components/sections/home/GlobalBrands";
import { Sectors } from "@/components/sections/home/Sectors";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionParticles } from "@/components/ui/SectionParticles";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteUrl } from "@/lib/site";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

interface TitledPoint {
  title: string;
  description: string;
}

const VALUE_ICONS = [BadgeCheck, ShieldCheck, Wrench, MapPin];
const WHY_ICONS = [Globe, Headset, Clock, Landmark];
const QUALITY_ICONS = [BadgeCheck, ClipboardCheck, Headset];

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

/** A small gold icon badge shared by every icon-card grid on this page. */
function IconBadge({ icon: Icon }: { icon: typeof Target }) {
  return (
    <span
      aria-hidden="true"
      className="border-gold/30 bg-gold/10 text-gold flex size-12 shrink-0 items-center justify-center rounded-2xl border"
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations("about");
  const tNav = await getTranslations("nav");
  const storyParagraphs = t.raw("storyParagraphs") as string[];
  const values = t.raw("values") as TitledPoint[];
  const whyPoints = t.raw("whyPoints") as TitledPoint[];
  const qualityPoints = t.raw("qualityPoints") as TitledPoint[];

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
        className="relative overflow-hidden pt-36 lg:pt-44"
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
              <Text size="lg" tone="inverse" className="opacity-70">
                {t("description")}
              </Text>
            </Stack>
          </Reveal>
        </Container>
      </Section>

      {/* COMPANY OVERVIEW */}
      <Section
        spacing="lg"
        background="stone"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="bg-dot-pattern text-accent/[0.05] pointer-events-none absolute inset-0"
        />
        <Container className="relative">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
            <Reveal>
              <Stack gap="lg">
                <Heading level={2} tone="inverse">
                  {t("storyTitle")}
                </Heading>
                <Stack gap="md">
                  {storyParagraphs.map((paragraph) => (
                    <Text
                      key={paragraph}
                      size="lg"
                      tone="inverse"
                      className="opacity-75"
                    >
                      {paragraph}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* MISSION & VISION */}
      <Section
        spacing="lg"
        background="obsidian"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="bg-dot-pattern text-gold/[0.06] pointer-events-none absolute inset-0"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <Stack
                gap="md"
                className="border-border bg-canvas h-full rounded-[20px] border p-8 shadow-[0_2px_8px_rgba(30,29,27,0.04),0_20px_48px_rgba(30,29,27,0.08)]"
              >
                <IconBadge icon={Target} />
                <Heading level={2} size={3} tone="inverse">
                  {t("missionTitle")}
                </Heading>
                <Text tone="inverse" size="lg" className="opacity-70">
                  {t("missionText")}
                </Text>
              </Stack>
            </Reveal>
            <Reveal delay={0.1}>
              <Stack
                gap="md"
                className="border-border bg-canvas h-full rounded-[20px] border p-8 shadow-[0_2px_8px_rgba(30,29,27,0.04),0_20px_48px_rgba(30,29,27,0.08)]"
              >
                <IconBadge icon={Eye} />
                <Heading level={2} size={3} tone="inverse">
                  {t("visionTitle")}
                </Heading>
                <Text tone="inverse" size="lg" className="opacity-70">
                  {t("visionText")}
                </Text>
              </Stack>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CORE VALUES */}
      <Section
        spacing="lg"
        background="canvas"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="bg-dot-pattern text-accent/[0.05] pointer-events-none absolute inset-0"
        />
        <Container className="relative">
          <Reveal>
            <Heading
              level={2}
              tone="inverse"
              className="mb-10 text-center lg:mb-14"
            >
              {t("valuesTitle")}
            </Heading>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <Stack
                  gap="sm"
                  className="border-border bg-canvas h-full rounded-[20px] border p-6 shadow-[0_2px_8px_rgba(30,29,27,0.04),0_20px_48px_rgba(30,29,27,0.08)]"
                >
                  <IconBadge icon={VALUE_ICONS[index]} />
                  <Text weight="semibold" tone="inverse" className="text-lg">
                    {value.title}
                  </Text>
                  <Text tone="inverse" className="opacity-65">
                    {value.description}
                  </Text>
                </Stack>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY GOLTENS */}
      <Section
        spacing="lg"
        background="obsidian"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="bg-gold/[0.05] pointer-events-none absolute -bottom-32 -left-32 size-[28rem] rounded-full blur-3xl"
        />
        <Container className="relative">
          <Reveal>
            <Stack
              gap="sm"
              align="center"
              className="mx-auto mb-10 max-w-2xl text-center lg:mb-14"
            >
              <Heading level={2} tone="inverse">
                {t("whyTitle")}
              </Heading>
              <Text size="lg" tone="inverse" className="opacity-70">
                {t("whyIntro")}
              </Text>
            </Stack>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.08}>
                <Stack
                  gap="sm"
                  className="border-border bg-canvas h-full rounded-[20px] border p-6 shadow-[0_2px_8px_rgba(30,29,27,0.04),0_20px_48px_rgba(30,29,27,0.08)]"
                >
                  <IconBadge icon={WHY_ICONS[index]} />
                  <Text weight="semibold" tone="inverse" className="text-lg">
                    {point.title}
                  </Text>
                  <Text tone="inverse" className="opacity-65">
                    {point.description}
                  </Text>
                </Stack>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* GLOBAL SUPPLIER NETWORK — reuses the homepage's own section so the
          two never drift apart visually or in content. */}
      <GlobalBrands />

      {/* QUALITY COMMITMENT */}
      <Section
        spacing="lg"
        background="obsidian"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="bg-dot-pattern text-gold/[0.06] pointer-events-none absolute inset-0"
        />
        <Container className="relative">
          <Reveal>
            <Stack
              gap="sm"
              align="center"
              className="mx-auto mb-10 max-w-2xl text-center lg:mb-14"
            >
              <Heading level={2} tone="inverse">
                {t("qualityTitle")}
              </Heading>
              <Text size="lg" tone="inverse" className="opacity-70">
                {t("qualityIntro")}
              </Text>
            </Stack>
          </Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {qualityPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.08}>
                <Stack
                  align="center"
                  gap="sm"
                  className="border-border bg-canvas h-full rounded-[20px] border p-6 text-center shadow-[0_2px_8px_rgba(30,29,27,0.04),0_20px_48px_rgba(30,29,27,0.08)]"
                >
                  <IconBadge icon={QUALITY_ICONS[index]} />
                  <Text weight="semibold" tone="inverse" className="text-lg">
                    {point.title}
                  </Text>
                  <Text tone="inverse" className="opacity-65">
                    {point.description}
                  </Text>
                </Stack>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROCUREMENT SECTORS — reuses the homepage's own section. */}
      <Sectors />

      {/* CLOSING CTA */}
      <Section background="stone" className="relative overflow-hidden py-20">
        <div
          aria-hidden="true"
          className="bg-dot-pattern text-accent/[0.05] pointer-events-none absolute inset-0"
        />
        <Container className="relative">
          <Reveal>
            <Stack
              align="center"
              gap="lg"
              className="mx-auto max-w-xl text-center"
            >
              <span
                aria-hidden="true"
                className="border-gold/30 bg-gold/10 text-gold flex size-14 items-center justify-center rounded-full border"
              >
                <Building2 className="size-6" strokeWidth={1.75} />
              </span>
              <Heading level={2} tone="inverse">
                {t("ctaTitle")}
              </Heading>
              <Button href="/contact" variant="accent" size="lg">
                {t("ctaButton")}
              </Button>
            </Stack>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
