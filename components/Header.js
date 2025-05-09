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
        <div>
          <Link href="/" scroll={false} className="block relative w-[160px] h-[70px] mb-12">
            <Image src="/logoj.svg" alt="Logo" layout="fill" objectFit="contain" priority />
          </Link>
          <nav className="flex flex-col space-y-6 text-lg font-semibold">
            <button onClick={() => scrollToSection('#about')} className="text-left nav-link-desktop hover:text-[#8A0303] transition">ABOUT</button>
            <button onClick={() => scrollToSection('#projects')} className="text-left nav-link-desktop hover:text-[#8A0303] transition">PROJECTS</button>
            <Link href="/contact" className="nav-link-desktop hover:text-[#8A0303] transition">CONTACT</Link>
          </nav>
        </div>
        <div className="mt-auto pt-6 text-center">
          <p className="text-xs text-gray-500 mb-4">
            Holland Street © {new Date().getFullYear()}<br />Cultivating Becoming.
          </p>
          <a href="https://www.instagram.com/holland.street" className="relative h-8 w-8 hover:opacity-80 transition">
            <Image src="/Instagram_Glyph_Gradient_RGB.png" alt="Instagram" layout="fill" objectFit="contain" />
          </a>
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
          {menuLinks.map(({ label, onClick, href, className = "menu-item-link mb-4" }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              {href ? (
                <Link href={href} onClick={onClick} className={className}>{label}</Link>
              ) : (
                <button onClick={onClick} className={className}>{label}</button>
              )}
            </motion.div>
          ))}

          <p className="text-xs text-[#8A0303]/70 mt-12 italic text-center">
            Cultivating Becoming.
          </p>

          <a href="https://www.instagram.com/holland.street" className="relative h-10 w-10 hover:opacity-80 transition mt-8">
            <Image src="/Instagram_Glyph_Gradient_RGB.png" layout="fill" objectFit="contain" alt="Instagram" />
          </a>
        </Menu>
      </div>
    </>
  );
}
