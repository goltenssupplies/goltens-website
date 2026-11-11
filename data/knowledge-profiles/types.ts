/**
 * Knowledge Profile schema — structured, source-controlled technical
 * knowledge modules for individual products.  Each profile is bilingual
 * (EN/AR) and records the provenance of every technical claim so the
 * front-end can render both customer-facing content and an internal
 * source-traceability audit trail.
 *
 * This type is used by the pilot only (`castrol-hyspin-aws-46`).  It is
 * intentionally NOT wired into the public Product Engine — the profile
 * renders on a development-only preview route that returns `notFound()`
 * in production.
 */

// ---------------------------------------------------------------------------
// Source traceability
// ---------------------------------------------------------------------------

export type VerificationStatus =
  | "verified"
  | "conflicting-source-values"
  | "needs-manufacturer-confirmation"
  | "not-available";

export interface SourceReference {
  /** Human-readable document title. */
  document: string;
  /** ISO date string (YYYY-MM-DD) of the source document. */
  documentDate: string;
  /** Section or page within the document, when available. */
  section?: string;
  /** URL to the document, when publicly available. */
  url?: string;
}

export interface SourceRecord {
  /** The claim or specification being traced. */
  claim: string;
  /** Primary source reference. */
  source: SourceReference;
  /** Conflicting source, when two documents disagree. */
  conflictingSource?: SourceReference;
  /** Conflicting value from the alternate source. */
  conflictingValue?: string;
  status: VerificationStatus;
  /** Internal editorial note — never rendered customer-facing. */
  internalNote?: string;
}

// ---------------------------------------------------------------------------
// Typical-characteristics table
// ---------------------------------------------------------------------------

export interface TypicalCharacteristic {
  property_en: string;
  property_ar: string;
  testMethod: string;
  unit: string;
  /** Value from the primary (newer) source document. */
  value: string;
  /** Source document date for this value (YYYY-MM-DD). */
  sourceDate: string;
  /** When a second PDS reports a different value. */
  conflictingValue?: string;
  /** Source document date for the conflicting value. */
  conflictingSourceDate?: string;
}

// ---------------------------------------------------------------------------
// Standards / classifications / approvals
// ---------------------------------------------------------------------------

export type SpecType = "classification" | "standard" | "oem-approval";

export interface TechnicalStandard {
  type: SpecType;
  designation: string;
  description_en: string;
  description_ar: string;
  /** Source document that documents this. */
  sourceDate: string;
  status: VerificationStatus;
}

// ---------------------------------------------------------------------------
// Knowledge module
// ---------------------------------------------------------------------------

export interface KnowledgeModule {
  /** Must match one of the 16 canonical module IDs from v4.1 mapping. */
  id: string;
  title_en: string;
  title_ar: string;
  /** Structured rich-text content (Markdown subset: paragraphs, lists). */
  content_en: string;
  content_ar: string;
  /** Source records for claims made in this module. */
  sources: SourceRecord[];
}

// ---------------------------------------------------------------------------
// Full profile
// ---------------------------------------------------------------------------

export interface KnowledgeProfile {
  /** Must match the product's `id` in the Product Engine. */
  productId: string;
  productSlug: string;
  /** Display title for the profile — uses the public product name. */
  title_en: string;
  title_ar: string;
  subtitle_en: string;
  subtitle_ar: string;
  /** Typical-characteristics table (the core spec sheet). */
  typicalCharacteristics: TypicalCharacteristic[];
  /** Standards, classifications and OEM approvals — kept separate. */
  standards: TechnicalStandard[];
  /** The 16 knowledge modules, in display order. */
  modules: KnowledgeModule[];
  /** Global source references for the profile. */
  primarySources: SourceReference[];
  /** Procurement identity disclaimer. */
  disclaimer_en: string;
  disclaimer_ar: string;
}
