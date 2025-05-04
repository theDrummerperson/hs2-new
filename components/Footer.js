import Image from "next/image";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-[#F9F6F1] bg-[#222222] text-[#F9F6F1] dark:bg-[#111] dark:text-[#f3f3f3] px-6 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <Image
            src="/logo2.png"
            alt="Holland Street Logo"
            width={240}
            height={120}
            className="object-contain"
            priority
          />
        </div>

        {/* Contact Info */}
        <address className="not-italic w-full md:w-1/2 space-y-2 text-sm font-medium tracking-wide text-center md:text-left">
          <p>
            <a
              href="https://www.instagram.com/holland.street"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="hover:text-[#8A0303] transition-colors duration-150"
            >
              137 East 18th Street,
              Erie, PA 16503
            </a>
          </p>
          <p>
            <a href="tel:8142326103" className="hover:underline">
              (814) 232-6103
            </a>
          </p>
          <p>
            <a
              href="mailto:ilyasabukar@gmail.com"
              className="hover:text-[#8A0303] transition-colors duration-150"
            >
              hollandstreet@gmail.com
            </a>
          </p>
        </address>
      </div>

      {/* Back to Top */}
      <div className="mt-10 text-center">
        <a
          href="#top"
          className="text-sm text-[#8A0303] font-semibold tracking-wide hover:underline transition-all duration-200"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
}
