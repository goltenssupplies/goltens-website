import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201030626051?text=Hello%20GOLTENS%20GENERAL%20SUPPLIES,%20I%20would%20like%20to%20request%20a%20quotation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-8 right-8 z-50 flex items-center"
    >
      <span className="mr-3 hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-xl transition-all duration-300 group-hover:block">
        Need a Quote?
      </span>

      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40">
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20"></span>

        <FaWhatsapp className="relative text-4xl text-white" />
      </div>
    </a>
  );
}