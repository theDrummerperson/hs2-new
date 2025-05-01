import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#8A0303] bg-[#F9F6F1] text-[#222] px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-6xl mx-auto w-full">
        {/* Logo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
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
        <div className="w-full md:w-1/2 space-y-2 text-sm font-medium tracking-wide text-center md:text-left">
          <p>
            <a
              href="https://www.instagram.com/holland.street"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8A0303] transition-colors duration-150"
            >
              @holland.street
            </a>
          </p>
          <p>814-232-6103</p>
          <p>
            <a
              href="mailto:info@hollandstreet.org"
              className="hover:text-[#8A0303] transition-colors duration-150"
            >
              info@hollandstreet.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
