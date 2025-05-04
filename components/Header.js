'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerButton from './BurgerButton';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProjectsSubMenu, setShowProjectsSubMenu] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowProjectsSubMenu(false);
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
      background: "#F9F6F1",
      padding: "1.5em .75em 0",
      fontSize: "2em",
      color: "#8A0303",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <>
      <div className="fixed top-6 right-6 z-[9999] md:hidden">
        <BurgerButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
      </div>

      <header className="grid grid-cols-2 md:grid-cols-3 items-center shadow-md bg-[#F9F6F1] px-0 md:px-12 py-4 md:py-8">
        <div className="logo-wrapper flex items-center justify-start min-h-[80px]">
          <Link href="/#about" scroll={true}>
            <a className="logo-wrapper">
              <div className="custom-logo">
                <Image
                  src="/logo.svg"
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
          <Link href="#about"><a className="nav-link">ABOUT</a></Link>
          <Link href="#projects"><a className="nav-link">PROJECTS</a></Link>
          <Link href="#contact"><a className="nav-link">CONTACT</a></Link>
        </nav>

        {/* Desktop Social Icons */}
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
          {!showProjectsSubMenu ? (
            <>
              <a href="#about" onClick={closeMenu} className="menu-item-link">ABOUT</a>
              <button
                onClick={() => setShowProjectsSubMenu(true)}
                className="menu-item-link"
              >
                PROJECTS
              </button>
              <a href="#contact" onClick={closeMenu} className="menu-item-link">CONTACT</a>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowProjectsSubMenu(false)}
                className="menu-item-link text-sm text-gray-500 mb-4"
              >
                ← Back
              </button>
              <Link href="/tv-repairman"><a onClick={closeMenu} className="menu-item-link">TV-Repairman</a></Link>
              <Link href="/kagoma"><a onClick={closeMenu} className="menu-item-link">Kagoma</a></Link>
              <Link href="/tinystage"><a onClick={closeMenu} className="menu-item-link">TinyStage</a></Link>
            </>
          )}

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
