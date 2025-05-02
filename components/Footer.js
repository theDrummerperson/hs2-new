import Image from "next/image";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-[#8A0303] bg-[#F9F6F1] text-[#222] dark:bg-[#111] dark:text-[#f3f3f3] px-6 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <Image
            src="/H-STRTslim.png"
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
              @holland.street
            </a>
          </p>
          <p>
            <a href="tel:8142326103" className="hover:underline">
              (814) 232-6103
            </a>
          </p>
          <p>
            <a
              href="mailto:info@hollandstreet.org"
              className="hover:text-[#8A0303] transition-colors duration-150"
            >
              hollandstreet@gmail.com
            </a>
          </p>
        </address>
      </div>
    </footer>
  );
}
