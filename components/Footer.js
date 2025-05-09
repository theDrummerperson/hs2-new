import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#222222] bg-[#8A0303] text-[#F9F6F1] px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start space-y-2 w-full md:w-1/2">
          <Image
            src="/logon.svg"
            alt="Holland Street Logo"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
          <p className="text-xs text-[#F9F6F1] tracking-widest uppercase">Holland Street</p>
        </div>

        {/* Contact Info */}
<address className="not-italic w-full md:w-1/2 flex flex-col items-center md:items-end space-y-3 text-sm font-medium tracking-wide pt-4 md:pt-0 pr-4 md:pr-8">
          <p className="text-sm uppercase tracking-wider text-[#F9F6F1] font-bold">Follow Us</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/holland.street"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="relative h-8 w-8 hover:opacity-80 transition"
            >
              <Image
                src="/Instagram_Glyph_Gradient_RGB.png"
                alt="Instagram Icon"
                layout="fill"
                objectFit="contain"
              />
            </a>
        
          </div>

          <p className="text-sm uppercase tracking-wider text-[#F9F6F1] font-bold pt-4">Contact Us</p>
         
          <p>
            <a href="tel:8142326103" className="hover:underline" aria-label="Phone Number">
              (814) 232-6103
            </a>
          </p>
        </address>
      </div>

      {/* Divider and Back to Top */}
      <hr className="my-6 border-[#AAA]/30 w-1/4 mx-auto" />
      <div className="text-center">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-[#F9F6F1] hover:underline transition duration-200"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
}
