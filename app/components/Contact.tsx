"use client";

import { useState } from "react";
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

👤 Name: ${form.name}
🏢 Company: ${form.company}
📧 Email: ${form.email}
📞 Phone: ${form.phone}

📝 Requirements:
${form.message}
`);

const whatsappLink =
  "https://wa.me/201030626051?text=" + whatsappMessage;
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Request a Quote</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Tell us about your requirements and our team will get back to you
            with a customized quotation.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <form className="space-y-6 rounded-2xl bg-slate-800 p-8">
           <input
  type="text"
  placeholder="Full Name"
  value={form.name}
onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setForm({ ...form, name: e.target.value })
}
  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
/>

            <input
  type="text"
  placeholder="Company Name"
  value={form.company}
  onChange={(e) => setForm({ ...form, company: e.target.value })}
  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
/>

            <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-lg bg-green-600 py-4 text-center font-semibold text-white transition hover:bg-green-700"
>
  Request via WhatsApp
</a>

            <input
  type="tel"
  placeholder="Phone Number"
  value={form.phone}
  onChange={(e) => setForm({ ...form, phone: e.target.value })}
  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
/>

            <textarea
  rows={6}
  placeholder="Describe your requirements..."
  value={form.message}
  onChange={(e) => setForm({ ...form, message: e.target.value })}
  className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
/>

            <a
  href="https://wa.me/201030626051"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-lg bg-green-600 py-4 text-center font-semibold text-white transition hover:bg-green-700"
>
  Request via WhatsApp
</a>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-800 p-8">
              <h3 className="text-xl font-bold">📞 Phone</h3>
              <p className="mt-4 text-slate-300">+20 103 062 6051</p>
              <p className="text-slate-300">+20 122 560 0983</p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-8">
              <h3 className="text-xl font-bold">💬 WhatsApp</h3>

              <a
                href="https://wa.me/201030626051?text=Hello%20GOLTENS%20GENERAL%20SUPPLIES,%20I%20would%20like%20to%20request%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-slate-800 p-8">
              <h3 className="text-xl font-bold">📍 Location</h3>
              <p className="mt-4 text-slate-300">
                El Bagour, Menoufia, Egypt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}