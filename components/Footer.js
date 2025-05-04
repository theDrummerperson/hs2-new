import Image from "next/image";

export default function Footer() {
  return (
<footer className="w-full border-t border-[#F9F6F1] bg-[#222] text-[#F9F6F1] px-4 py-4">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <Image
            src="/logo2.png"
            alt="Holland Street Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Contact Info */}
        <address className="not-italic w-full md:w-1/2 flex flex-col items-center justify-end space-y-2 text-sm font-medium tracking-wide pt-4 pb-2">
        <a
    href="https://www.instagram.com/holland.street"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="relative h-10 w-10 hover:opacity-80 transition"
  >
    <Image
      src="/Instagram_Glyph_Gradient_RGB.png"
      alt="Instagram Icon"
      layout="fill"
      objectFit="contain"
    />
  </a>

  <p className="text-center">
    137 East 18th Street,<br />Erie, PA 16503
  </p>

  <p>
    <a href="tel:8142326103" className="hover:underline">
      (814) 232-6103
    </a>
  </p>
</address>


      </div>

      {/* Back to Top */}
      <div className="mt-4 text-center">

        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-[#8A0303] hover:underline transition duration-200"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
}
