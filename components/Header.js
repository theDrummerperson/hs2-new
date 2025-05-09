'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerButton from "./BurgerButton";
import { useRouter } from 'next/router';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProjectsSubMenu, setShowProjectsSubMenu] = useState(false);
  const router = useRouter();

  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setShowProjectsSubMenu(false);
  };

  const scrollToSection = (sectionId) => {
    if (router.pathname === "/") {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    } else {
      router.push(`/#${sectionId.replace("#", "")}`);
    }
  };

  const styles = {
    bmBurgerButton: { display: "none" },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "100vw",
      left: 0,
      top: 0,
      zIndex: 9999,
    },
    bmMenu: {
      background: "radial-gradient(circle, #F9F6F1 70%, #EADECF 100%)",
      padding: "2em 1em 0",
      fontSize: "1.5em",
      color: "#8A0303",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.4)",
    },
  };

  return (
    <>
      {/* Desktop Fixed Side Panel */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-[#ECE7E0] p-8 flex-col justify-between z-50 shadow-xl">
        <div>
          <Link href="/" scroll={false} className="block relative w-[160px] h-[70px] mb-12">
            <Image src="/logoj.svg" alt="Logo" layout="fill" objectFit="contain" priority />
          </Link>
          <nav className="flex flex-col space-y-6 text-lg font-semibold">
            <button onClick={() => scrollToSection('#about')} className="text-left hover:text-[#8A0303] transition">ABOUT</button>
            <button onClick={() => scrollToSection('#projects')} className="text-left hover:text-[#8A0303] transition">PROJECTS</button>
            <Link href="/contact" className="hover:text-[#8A0303] transition">CONTACT</Link>
          </nav>
        </div>
        <div className="flex justify-center mt-12">
          <a href="https://www.instagram.com/holland.street" className="relative h-8 w-8 hover:opacity-80 transition">
            <Image src="/Instagram_Glyph_Gradient_RGB.png" alt="Instagram" layout="fill" objectFit="contain" />
          </a>
        </div>
      </div>

      {/* Adjust main layout */}
      {/* Your main content (page-wrap) should now use: className="md:ml-64" */}

      {/* Mobile Header Bar */}
      <header className="md:hidden bg-[#F9F6F1] px-6 py-4 flex items-center justify-between shadow-md relative z-20">
        <Link href="/" scroll={false} className="block relative w-[140px] h-[50px]">
          <Image src="/logojjj.svg" alt="Logo" layout="fill" objectFit="contain" priority />
        </Link>
        <BurgerButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
      </header>

      {/* Mobile Menu */}
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
          {!showProjectsSubMenu ? (
            <>
              <button onClick={() => scrollToSection('#about')} className="menu-item-link mb-4">ABOUT</button>
              <button onClick={() => setShowProjectsSubMenu(true)} className="menu-item-link mb-4">PROJECTS</button>
              <Link href="/contact" className="menu-item-link mb-4" onClick={closeMenu}>CONTACT</Link>
            </>
          ) : (
            <>
              <button onClick={() => setShowProjectsSubMenu(false)} className="menu-item-link text-sm text-gray-500 mb-6">
                ← Back
              </button>
              <Link href="/tv-repairman" className="menu-item-link mb-4" onClick={closeMenu}>TV-Repairman</Link>
              <Link href="/kagoma" className="menu-item-link mb-4" onClick={closeMenu}>Kagoma</Link>
              <Link href="/tinystage" className="menu-item-link mb-4" onClick={closeMenu}>TinyStage</Link>
            </>
          )}

          <a href="https://www.instagram.com/holland.street" className="relative h-10 w-10 hover:opacity-80 transition mt-8">
            <Image src="/Instagram_Glyph_Gradient_RGB.png" layout="fill" objectFit="contain" alt="Instagram" />
          </a>
        </Menu>
      </div>
    </>
  );
}
