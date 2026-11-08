
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-[#D8D5CA] bg-[#F4F1E8] px-6 py-12 md:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(240px,1fr)_minmax(0,2fr)] md:gap-8">

          {/* Portfolio Identity */}
          <div className="space-y-3">

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#777366]">
              Personal Portfolio
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
              Muhammad Rizani Fakhrian
            </h2>

            <p className="text-sm text-[#555044]">
              Web Developer
            </p>

          </div>

          {/* Contact Information */}
          <div className="space-y-5 lg:ml-auto md:w-[68%]">

            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#111111]">
              Contact
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">

              {/* Email & Phone */}
              <div className="min-w-0 space-y-5">

                {/* Email */}
                <a
                  href="mailto:muhammadrizanifakhrian@gmail.com"
                  className="group block space-y-1"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[#777366]">
                    Email
                  </p>

                  <p className="text-sm text-[#333333] transition-colors group-hover:text-[#A5A18F]">
                    muhammadrizanifakhrian@gmail.com
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:+6282259083563"
                  className="group block space-y-1"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[#777366]">
                    Phone
                  </p>

                  <p className="text-sm text-[#333333] transition-colors group-hover:text-[#A5A18F]">
                    +62 822 5908 3563
                  </p>
                </a>

              </div>
        
              {/* GitHub */}
              <a
                href="https://github.com/MuhammadRizaniFakhrian"
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-1"
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-[#777366]">
                  GitHub
                </p>

                <p className="wrap-break-words text-sm text-[#333333] transition-colors group-hover:text-[#A5A18F]">
                  MuhammadRizaniFakhrian
                </p>
              </a>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-[#D8D5CA] pt-6">

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="text-[10px] tracking-wide text-[#777366]">
              © {currentYear} Muhammad Rizani Fakhrian. All rights reserved.
            </p>

            <p className="text-[10px] font-medium uppercase tracking-wider text-[#777366]">
              Built with Next.js & Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}
