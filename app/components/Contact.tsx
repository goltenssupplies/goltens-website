"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const GENERAL_WHATSAPP_LINK =
  "https://wa.me/201030626051?text=Hello%20GOLTENS%20GENERAL%20SUPPLIES,%20I%20would%20like%20to%20request%20a%20quotation.";

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+20 103 062 6051", "+20 122 560 0983"],
    href: "tel:+201030626051",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["Admin@goltenssupplies.com"],
    href: "mailto:Admin@goltenssupplies.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["Chat with our team"],
    href: GENERAL_WHATSAPP_LINK,
  },
  {
    icon: MapPin,
    label: "Office",
    lines: ["El Bagour, Menoufia, Egypt"],
    href: undefined,
  },
];

const inputClasses =
  "mt-2 h-12 w-full rounded-lg border border-border bg-canvas px-4 text-ink outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappMessage = encodeURIComponent(`
New Quote Request

Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}

Requirements:
${form.message}
`);

  const quoteWhatsappLink = "https://wa.me/201030626051?text=" + whatsappMessage;

  return (
    <section id="contact" className="bg-canvas px-6 pt-24 pb-8 lg:px-[120px] lg:pt-32 lg:pb-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column */}
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
              Request a Quote
            </p>

            <h2 className="mt-6 text-balance text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.02em] text-ink">
              Let&apos;s discuss your procurement requirements.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Tell us what you&apos;re looking for and our procurement
              specialists will prepare a tailored quotation.
            </p>

            <form className="mt-12 space-y-8">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs tracking-[0.15em] text-ink-muted uppercase"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="text-xs tracking-[0.15em] text-ink-muted uppercase"
                >
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs tracking-[0.15em] text-ink-muted uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-xs tracking-[0.15em] text-ink-muted uppercase"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs tracking-[0.15em] text-ink-muted uppercase"
                >
                  Requirements
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-border bg-canvas px-4 py-3 text-ink outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20"
                />
              </div>

              <div className="pt-2">
                <a
                  href={quoteWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-blue px-6 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                >
                  Request Quote
                </a>

                <a
                  href={GENERAL_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-sm text-ink-muted underline decoration-border underline-offset-4 transition-colors hover:text-ink"
                >
                  Or contact us via WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Right column */}
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {CONTACT_CARDS.map((card) => {
                const Icon = card.icon;
                const content = (
                  <>
                    <Icon className="h-8 w-8 text-blue" strokeWidth={1.5} />
                    <h3 className="mt-6 text-lg font-semibold text-ink">
                      {card.label}
                    </h3>
                    {card.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {line}
                      </p>
                    ))}
                  </>
                );

                if (!card.href) {
                  return (
                    <div
                      key={card.label}
                      className="rounded-lg border border-border p-8"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-lg border border-border p-8 transition-all duration-200 hover:-translate-y-1 hover:border-ink"
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm text-ink-muted">Response within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
