'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerButton from "./BurgerButton";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

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

  const menuLinks = !showProjectsSubMenu ? [
    { label: 'ABOUT', onClick: () => scrollToSection('#about') },
    { label: 'PROJECTS', onClick: () => setShowProjectsSubMenu(true) },
    { label: 'CONTACT', onClick: closeMenu, href: '/contact' },
  ] : [
    { label: '← Back', onClick: () => setShowProjectsSubMenu(false), className: 'text-sm text-gray-500 mb-6' },
    { label: 'TV-Repairman', href: '/tv-repairman' },
    { label: 'Kagoma', href: '/kagoma' },
    { label: 'TinyStage', href: '/tinystage' },
  ];

  return (
    <>
     {/* Desktop Fixed Side Panel */}
<div className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-[#ECE7E0] p-8 flex-col justify-between z-50 shadow-xl">
  {/* This is the top part containing logo and nav */}
  <div className="flex flex-col items-start"> {/* <--- ADDED: items-start ensures children align to the start (left) of the cross-axis */}
    <Link href="/" scroll={false} className="block relative w-[160px] h-[70px] mb-12">
      {/* The 'block' nature of Link and 'objectFit="contain"' on Image should naturally align logo content left within its bounds.
          If the SVG itself has internal whitespace on the left, that's an asset issue. */}
      <Image src="/logoj.svg" alt="Logo" layout="fill" objectFit="contain" priority />
    </Link>
    <nav className="flex flex-col items-start space-y-6 text-lg font-semibold"> {/* <--- ADDED: items-start here too for explicitness */}
      {/* 'text-left' is good for the text *within* the button/link,
          'items-start' on the nav ensures the button/link elements themselves align left. */}
      <button onClick={() => scrollToSection('#about')} className="text-left nav-link-desktop hover:text-[#8A0303] transition">ABOUT</button>
      <button onClick={() => scrollToSection('#projects')} className="text-left nav-link-desktop hover:text-[#8A0303] transition">PROJECTS</button>
      <Link href="/contact" className="block text-left nav-link-desktop hover:text-[#8A0303] transition">CONTACT</Link> {/* Added block and text-left for consistency, though Link usually behaves well */}
    </nav>
  </div>

  {/* Footer part (Instagram and Copyright) */}
  <div className="mt-auto pt-6 text-center"> {/* text-center here is fine for these centered elements */}
    <p className="text-xs text-gray-500 mb-4">
      Holland Street © {new Date().getFullYear()}<br />Cultivating Becoming.
    </p>
    {/* To ensure the Instagram icon is also left-aligned if that's desired for the whole panel:
        Change 'text-center' above to 'flex flex-col items-start' for the footer too.
        OR if you want the icon centered but the text left:
    */}
    {/* <p className="text-xs text-gray-500 mb-4 text-left"> ... </p> */}
    <div className="flex justify-center"> {/* This keeps the Instagram icon centered */}
        <a href="https://www.instagram.com/holland.street" className="relative h-8 w-8 hover:opacity-80 transition">
            <Image src="/Instagram_Glyph_Gradient_RGB.png" alt="Instagram" layout="fill" objectFit="contain" />
        </a>
    </div>
  </div>
</div>
      
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
          {menuLinks.map(({ label, onClick, href, className }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={className || "mb-4"}
            >
              {href ? (
                <Link href={href} className="menu-item-link" onClick={closeMenu}>
                  {label}
                </Link>
              ) : (
                <button onClick={onClick} className="menu-item-link">
                  {label}
                </button>
              )}
            </motion.div>
          ))}

          <p className="text-xs text-[#8A0303]/70 mt-12 italic text-center">
            Cultivating Becoming.
          </p>

          <a href="https://www.instagram.com/holland.street" className="relative h-10 w-10 hover:opacity-80 transition mt-8">
            <Image
              src="/Instagram_Glyph_Gradient_RGB.png"
              layout="fill"
              objectFit="contain"
              alt="Instagram"
            />
          </a>
        </Menu>
      </div>
    </>
  );
}
