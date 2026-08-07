"use server";

import { Resend } from "resend";

import { contactEmail } from "@/lib/site";

export interface ContactSubmissionResult {
  success: boolean;
  error?: "not_configured" | "validation_failed" | "send_failed";
}

// Resend's per-email cap is 40MB total. Individual files are capped at 25MB
// (per spec) — note that's still tight against the 40MB total if more than
// one large file is attached; Resend will simply reject the send in that
// edge case, surfaced to the visitor as the normal "send_failed" error
// state rather than a crash.
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_FIELDS = [
  "companyName",
  "contactName",
  "email",
  "phone",
  "productCategory",
  "message",
] as const;

function readField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

/**
 * Emails the site's single contact form submission (the `/contact` page)
 * to GOLTENS via Resend. Returns `{ success: false, error: "not_configured" }`
 * rather than pretending to succeed when RESEND_API_KEY isn't set yet, so
 * the form never tells a real client "received" when nothing was sent.
 */
export async function submitContactRequest(
  formData: FormData,
): Promise<ContactSubmissionResult> {
  // Honeypot: a real visitor never sees or fills this field (it's visually
  // hidden and removed from the tab order in the form). Any value here means
  // a bot filled every input it could find — pretend success without
  // actually sending anything, so the bot has no signal to adapt to.
  if (readField(formData, "website")) {
    return { success: true };
  }

  const fields = {
    companyName: readField(formData, "companyName"),
    contactName: readField(formData, "contactName"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    productCategory: readField(formData, "productCategory"),
    projectName: readField(formData, "projectName"),
    country: readField(formData, "country"),
    brandRequired: readField(formData, "brandRequired"),
    product: readField(formData, "product"),
    quantity: readField(formData, "quantity"),
    message: readField(formData, "message"),
  };

  // Server-side validation is a safety net behind the client-side checks —
  // never trust that a request actually came through the form's own JS.
  const hasAllRequiredFields = REQUIRED_FIELDS.every(
    (key) => fields[key].length > 0,
  );
  if (!hasAllRequiredFields || !EMAIL_PATTERN.test(fields.email)) {
    return { success: false, error: "validation_failed" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: "not_configured" };
  }

  const notificationEmail = process.env.RFQ_NOTIFICATION_EMAIL || contactEmail;

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

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: notificationEmail,
    replyTo: fields.email || undefined,
    subject: `New contact request — ${fields.companyName || "Unknown company"}`,
    text: [
      `Company: ${fields.companyName}`,
      `Full name: ${fields.contactName}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `Product / service required: ${fields.productCategory}`,
      ...(fields.projectName ? [`Project name: ${fields.projectName}`] : []),
      ...(fields.country ? [`Country: ${fields.country}`] : []),
      ...(fields.brandRequired ? [`Brand required: ${fields.brandRequired}`] : []),
      ...(fields.product ? [`Product: ${fields.product}`] : []),
      ...(fields.quantity ? [`Quantity: ${fields.quantity}`] : []),
      "",
      `Project details: ${fields.message}`,
    ].join("\n"),
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  if (error) {
    return { success: false, error: "send_failed" };
  }

  return { success: true };
}
