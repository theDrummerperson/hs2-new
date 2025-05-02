'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className="fixed w-full top-0 z-50 grid grid-cols-3 shadow-md bg-[#F9F6F1] bg-cover bg-center 
                 px-12 py-11 xl:px-8 items-center text-[#222222]"
    >
      {/* Logo */}
      <div className="logo-wrapper flex items-center justify-start h-[120px]">
  <Image
    src="/H-STRLmain.png"
    alt="Logo"
    width={340}
    height={200}
    className="object-contain"
    priority
  />
</div>


      {/* Nav */}
      <nav className="hidden md:flex space-x-6 justify-center text-sm font-semibold tracking-wide">
        <Link href="#about"><a className="hover:text-[#8A0303] transition-colors duration-150">ABOUT</a></Link>
        <Link href="#projects"><a className="hover:text-[#8A0303] transition-colors duration-150">PROJECTS</a></Link>
        <Link href="#contact"><a className="hover:text-[#8A0303] transition-colors duration-150">CONTACT</a></Link>
      </nav>

      {/* Social */}
      <div className="hidden md:flex space-x-4 justify-end items-center">
        <a href="https://www.instagram.com/holland.street" className="relative h-8 w-8 hover:opacity-80 transition">
          <Image src="/Instagram_Glyph_Gradient_RGB.png" alt="Instagram" width={32} height={32} />
        </a>
      </div>
    </header>
  );
}
