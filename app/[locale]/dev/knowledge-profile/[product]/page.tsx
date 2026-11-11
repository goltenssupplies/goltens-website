/**
 * DEV-ONLY preview route for Knowledge Profiles.
 *
 * This route is protected by a server-side environment check:
 *   - In production (`NODE_ENV === "production"`) it returns `notFound()`.
 *   - In development it renders the full Knowledge Profile preview.
 *
 * URL pattern:
 *   /ar/dev/knowledge-profile/castrol-hyspin-aws-46
 *   /en/dev/knowledge-profile/castrol-hyspin-aws-46
 *
 * NOT added to the sitemap, NOT indexed, NOT linked from any public page.
 */

import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { KnowledgeProfileView } from "@/components/knowledge-profile/KnowledgeProfileView";
import { castrolHyspinAws46Profile } from "@/data/knowledge-profiles/castrol-hyspin-aws-46";

// ---------------------------------------------------------------------------
// Profile registry — only the pilot product for now.
// ---------------------------------------------------------------------------

const PROFILES: Record<string, typeof castrolHyspinAws46Profile> = {
  "castrol-hyspin-aws-46": castrolHyspinAws46Profile,
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

interface DevKnowledgeProfilePageProps {
  params: Promise<{ locale: string; product: string }>;
}

export default async function DevKnowledgeProfilePage({
  params,
}: DevKnowledgeProfilePageProps) {
  // ── Production guard ─────────────────────────────────────────────────
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const { locale, product } = await params;

  const profile = PROFILES[product];
  if (!profile) {
    notFound();
  }

  return (
    <Section spacing="lg" background="canvas">
      <Container>
        <KnowledgeProfileView profile={profile} locale={locale} />
      </Container>
    </Section>
  );
}

// No generateStaticParams — this route is dynamic dev-only, never pre-rendered.
// No generateMetadata — dev preview needs no SEO metadata.
// Ensure this page is never indexed even if someone reaches it:
export const metadata = {
  robots: { index: false, follow: false },
};
