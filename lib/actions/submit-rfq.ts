"use server";

import { Resend } from "resend";

import { salesEmail } from "@/lib/site";

export interface RfqSubmissionResult {
  success: boolean;
  error?: "not_configured" | "validation_failed" | "empty_cart" | "send_failed";
}

interface RfqItem {
  name: string;
  slug: string;
  quantity: number;
}

// Same cap `submitContactRequest` uses — Resend's per-email limit.
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_FIELDS = [
  "companyName",
  "contactName",
  "email",
  "phone",
] as const;

function readField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function parseItems(raw: string): RfqItem[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is RfqItem =>
        typeof entry === "object" &&
        entry !== null &&
        typeof (entry as RfqItem).name === "string" &&
        typeof (entry as RfqItem).slug === "string" &&
        typeof (entry as RfqItem).quantity === "number",
    );
  } catch {
    return [];
  }
}

/**
 * Emails the `/rfq` page's multi-item cart to GOLTENS via Resend — the
 * itemized counterpart to `submitContactRequest`'s single product/quantity
 * pair. Same honeypot, validation-behind-client-validation, and
 * "not_configured" honesty convention as that action.
 */
export async function submitRfqRequest(
  formData: FormData,
): Promise<RfqSubmissionResult> {
  if (readField(formData, "website")) {
    return { success: true };
  }

  const fields = {
    companyName: readField(formData, "companyName"),
    contactName: readField(formData, "contactName"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    notes: readField(formData, "notes"),
  };

  const items = parseItems(readField(formData, "items"));

  const hasAllRequiredFields = REQUIRED_FIELDS.every(
    (key) => fields[key].length > 0,
  );
  if (!hasAllRequiredFields || !EMAIL_PATTERN.test(fields.email)) {
    return { success: false, error: "validation_failed" };
  }
  if (items.length === 0) {
    return { success: false, error: "empty_cart" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: "not_configured" };
  }

  const notificationEmail = process.env.RFQ_NOTIFICATION_EMAIL || salesEmail;

  const attachments = await Promise.all(
    formData
      .getAll("attachments")
      .filter(
        (entry): entry is File =>
          entry instanceof File &&
          entry.size > 0 &&
          entry.size <= MAX_ATTACHMENT_BYTES,
      )
      .map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      })),
  );

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.RESEND_FROM_EMAIL ?? "GOLTENS Website <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: notificationEmail,
      replyTo: fields.email || undefined,
      subject: `New RFQ — ${fields.companyName || "Unknown company"} (${items.length} item${items.length === 1 ? "" : "s"})`,
      text: [
        `Company: ${fields.companyName}`,
        `Full name: ${fields.contactName}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        "",
        "Requested items:",
        ...items.map(
          (item) => `  - ${item.name} (${item.slug}) — Qty: ${item.quantity}`,
        ),
        "",
        ...(fields.notes ? [`Notes: ${fields.notes}`] : []),
      ].join("\n"),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      return { success: false, error: "send_failed" };
    }

    return { success: true };
  } catch {
    return { success: false, error: "send_failed" };
  }
}
