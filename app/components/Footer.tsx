import Link from "next/link";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-stone">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[120px]">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-ink">
              GOLTENS GENERAL SUPPLIES
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Supplying industrial equipment, pumps, valves, electrical
              supplies, mechanical spare parts and engineering solutions
              across Egypt.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-ink uppercase">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] text-ink uppercase">
              Contact Us
            </h3>

            <div className="mt-4 space-y-2 text-sm text-ink-muted">
              <p>El Bagour, Menoufia, Egypt</p>
              <p>
                <a href="tel:+201030626051" className="hover:text-ink">
                  0103 062 6051
                </a>
              </p>
              <p>
                <a href="tel:+201225600983" className="hover:text-ink">
                  0122 560 0983
                </a>
              </p>
              <p>
                <a
                  href="mailto:Admin@goltenssupplies.com"
                  className="hover:text-ink"
                >
                  Admin@goltenssupplies.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-ink-muted">
          © 2026 GOLTENS GENERAL SUPPLIES. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
