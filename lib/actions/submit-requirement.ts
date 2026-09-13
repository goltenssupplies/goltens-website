"use server";

import { Resend } from "resend";

import { salesEmail } from "@/lib/site";

export interface RequirementSubmissionResult {
  success: boolean;
  error?: "not_configured" | "validation_failed" | "send_failed";
}

// Same cap `submitRfqRequest`/`submitContactRequest` use — Resend's
// per-email limit.
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

// A generous ceiling, not a real-world expectation — just enough to stop a
// single submission from attaching an unreasonable number of files.
const MAX_ATTACHMENT_COUNT = 10;

// Extensions this form accepts, matched case-insensitively against the
// filename's own suffix. This is the one check that can't be bypassed by
// editing the client `<input accept>` attribute — deliberately an
// allow-list (not a block-list), so nothing executable/script-like
// (.exe, .js, .sh, .bat, .msi, .ps1, etc.) can ever pass it.
const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".xls",
  ".xlsx",
  ".doc",
  ".docx",
  ".jpg",
  ".jpeg",
  ".png",
  ".zip",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED_FIELDS = [
  "name",
  "company",
  "email",
  "phone",
  "productPartNumber",
  "quantity",
  "technicalSpecifications",
  "deliveryLocation",
] as const;

function readField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function hasAllowedExtension(fileName: string) {
  const lower = fileName.toLowerCase();
  return ALLOWED_EXTENSIONS.some((extension) => lower.endsWith(extension));
}

/**
 * Emails a product-agnostic sourcing requirement ("Send Your Requirement")
 * to GOLTENS via Resend — for visitors whose need doesn't match an existing
 * catalog product (a part number, drawing, BOQ, or spec with nothing to
 * "add to cart"). Same honeypot/validation/Resend shape as
 * `submitRfqRequest`/`submitContactRequest` (see those files), with its own
 * field set and a stricter server-side attachment check: an extension
 * allow-list in addition to the size cap, since this form is the site's
 * most general-purpose upload surface.
 */
export async function submitRequirementRequest(
  formData: FormData,
): Promise<RequirementSubmissionResult> {
  // Honeypot — identical convention to the other two actions: a real
  // visitor never sees or fills this field, so any value here means a bot.
  // Pretend success without sending anything, so the bot has no signal to
  // adapt to.
  if (readField(formData, "website")) {
    return { success: true };
  }

  const fields = {
    name: readField(formData, "name"),
    company: readField(formData, "company"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    productPartNumber: readField(formData, "productPartNumber"),
    quantity: readField(formData, "quantity"),
    technicalSpecifications: readField(formData, "technicalSpecifications"),
    requiredDeliveryDate: readField(formData, "requiredDeliveryDate"),
    deliveryLocation: readField(formData, "deliveryLocation"),
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

  const notificationEmail = process.env.RFQ_NOTIFICATION_EMAIL || salesEmail;

  // Defense in depth: empty files, oversized files, and anything outside
  // the extension allow-list are silently dropped rather than failing the
  // whole submission — same "don't punish a genuine visitor for one bad
  // file" convention the other two actions already use for size alone,
  // extended here to also cover file type/emptiness/count.
  const attachments = await Promise.all(
    formData
      .getAll("attachments")
      .filter(
        (entry): entry is File =>
          entry instanceof File &&
          entry.size > 0 &&
          entry.size <= MAX_ATTACHMENT_BYTES &&
          hasAllowedExtension(entry.name),
      )
      .slice(0, MAX_ATTACHMENT_COUNT)
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
      subject: `New Requirement — ${fields.company || "Unknown company"} (${fields.productPartNumber})`,
      text: [
        "Submission type: SEND YOUR REQUIREMENT",
        "",
        `Name: ${fields.name}`,
        `Company: ${fields.company}`,
        `Email: ${fields.email}`,
        `Phone / WhatsApp: ${fields.phone}`,
        `Product / Part Number: ${fields.productPartNumber}`,
        `Quantity: ${fields.quantity}`,
        `Delivery Location: ${fields.deliveryLocation}`,
        ...(fields.requiredDeliveryDate
          ? [`Required Delivery Date: ${fields.requiredDeliveryDate}`]
          : []),
        "",
        "Technical Specifications:",
        fields.technicalSpecifications,
        "",
        ...(attachments.length > 0
          ? [
              `Attachments: ${attachments.map((file) => file.filename).join(", ")}`,
            ]
          : []),
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
