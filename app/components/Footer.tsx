export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-blue-500">
              GOLTENS GENERAL SUPPLIES
            </h3>

            <p className="mt-4 text-gray-400">
              Supplying industrial equipment, pumps, valves,
              electrical supplies, mechanical spare parts and
              engineering solutions across Egypt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Brands</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-gray-400">
              <p>📍 El Bagour, Menoufia, Egypt</p>

              <p>
                📞
                <a
                  href="tel:+201030626051"
                  className="ml-2 hover:text-white"
                >
                  0103 062 6051
                </a>
              </p>

              <p>
                📞
                <a
                  href="tel:+201225600983"
                  className="ml-2 hover:text-white"
                >
                  0122 560 0983
                </a>
              </p>

              <p>
                📧
                <a
                  href="mailto:Admin@goltenssupplies.com"
                  className="ml-2 hover:text-white"
                >
                  Admin@goltenssupplies.com
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
          © 2026 GOLTENS GENERAL SUPPLIES. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}