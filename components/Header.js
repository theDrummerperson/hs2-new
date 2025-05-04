'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerButton from './BurgerButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const styles = {
    bmBurgerButton: {
      display: "none",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "32px",
      width: "32px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "100vw",
      left: 0,
      top: 0,
      zIndex: 9999,
      overflow: "visible", // ✅ Add this if not present
    },
    
    bmMenu: {
      background: "#F9F6F1",
      padding: "1.5em .75em 0",
      fontSize: "2.5em",
      color: "#8A0303",
      zIndex: 1100, // Ensure this is still layered above page content
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      zIndex: 900,
    },
  };
  

  return (
    <>
      {/* ✅ Always-visible burger button */}
      <div className="fixed top-6 right-6 z-[9999] md:hidden">
        <BurgerButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Site Header */}
      <header className="grid grid-cols-2 md:grid-cols-3 items-center shadow-md bg-[#F9F6F1] px-0 md:px-12 py-4 md:py-8">
        {/* Logo */}
        <div className="logo-wrapper flex items-center justify-start min-h-[80px]">
        <Link href="#about" scroll={true}>
  <a className="logo-wrapper">
    <div className="custom-logo">
      <Image
        src="/H-STRLmain.png"
        alt="Logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  </a>
</Link>

        </div>

        {/* Nav (desktop only) */}
        <nav className="hidden md:flex space-x-6 justify-center text-sm font-semibold tracking-wide">
          <Link href="#about"><a className="hover:text-[#8A0303] transition-colors duration-150">ABOUT</a></Link>
          <Link href="#projects"><a className="hover:text-[#8A0303] transition-colors duration-150">PROJECTS</a></Link>
          <Link href="#contact"><a className="hover:text-[#8A0303] transition-colors duration-150">CONTACT</a></Link>
        </nav>

        {/* Social (desktop only) */}
        <div className="hidden md:flex space-x-4 justify-end items-center">
          <a href="https://www.instagram.com/holland.street" className="relative h-8 w-8 hover:opacity-80 transition">
            <Image src="/Instagram_Glyph_Gradient_RGB.png" alt="Instagram" width={32} height={32} />
          </a>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div className="block md:hidden">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
          styles={styles}
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          itemListClassName="menu-item-list"
        >
          <a href="#about" onClick={closeMenu} className="menu-item-link">ABOUT</a>
          <a href="#projects" onClick={closeMenu} className="menu-item-link">PROJECTS</a>
          <a href="#contact" onClick={closeMenu} className="menu-item-link">CONTACT</a>
          <a
            className="relative h-10 w-10 cursor-pointer hover:opacity-80 transition duration-150"
            href="https://www.instagram.com/holland.street"
          >
            <Image
              src="/Instagram_Glyph_Gradient_RGB.png"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              alt="Instagram"
            />
          </a>
        </Menu>
      </div>
    </>
  );
}
