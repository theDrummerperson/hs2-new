'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; // Added useEffect for scroll active state
import { slide as Menu } from "react-burger-menu";
import BurgerButton from "./BurgerButton"; // Assuming BurgerButton handles its ARIA attributes
import { useRouter, usePathname } from 'next/navigation'; // Corrected import for App Router
import { motion, AnimatePresence } from "framer-motion";

const DESKTOP_SIDE_PANEL_WIDTH = 256; // 64 * 4 (Tailwind units if w-64 is 16rem)
const MOBILE_HEADER_HEIGHT = 70; // Approximate height of mobile header bar for scroll offset

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProjectsSubMenu, setShowProjectsSubMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // For desktop scroll active state

  const router = useRouter();
  const pathname = usePathname();

  const handleStateChange = (state) => setMenuOpen(state.isOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    // Reset sub-menu visibility after a short delay to allow exit animation
    setTimeout(() => {
      setShowProjectsSubMenu(false);
    }, 300); // Match AnimatePresence exit duration
  };

  const scrollToSection = (sectionId) => {
    const targetId = sectionId.replace("#", "");
    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        // Adjust for fixed mobile header or desktop panel if necessary on the target view
        // For simplicity, this example uses a generic mobile header offset.
        // A more robust solution would check current viewport and layout.
        const offsetPosition = elementPosition - (window.innerWidth < 768 ? MOBILE_HEADER_HEIGHT : 0);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      closeMenu();
    } else {
      router.push(`/#${targetId}`);
      // closeMenu will be called if navigation is successful and page re-renders,
      // or you might need to handle it after router.push promise resolves if any.
    }
  };

  // Effect for observing active section on scroll (Desktop Home Page)
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(''); // Clear active section if not on homepage
      return;
    }

    const sections = ['about', 'projects']; // Add other section IDs as needed
    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: `-${MOBILE_HEADER_HEIGHT}px 0px -50% 0px`, // Adjust based on header height and when to trigger
      threshold: 0.1 // trigger when 10% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionElements = sections.map(id => document.getElementById(id)).filter(el => el);

    sectionElements.forEach(el => observer.observe(el));

    return () => sectionElements.forEach(el => observer.unobserve(el));
  }, [pathname]);


  // --- react-burger-menu styles ---
  const styles = {
    bmBurgerButton: { display: "none" }, // BurgerButton component is used separately
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "100vw", // Full width
      left: 0,
      top: 0,
      zIndex: 1000, // High z-index
    },
    bmMenu: {
      background: "radial-gradient(circle, #F9F6F1 80%, #EADECF 100%)", // Adjusted gradient
      padding: "3em 1.5em 2em", // More padding
      fontSize: "1.15em", // Base font size for menu items
      color: "#8A0303", // Default text color for menu
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "auto", // Allow scrolling if content overflows
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.5)", // Slightly darker overlay
      left: 0, // Ensure overlay covers the whole screen
      top: 0,
    },
    bmItemList: { // Target for individual item styling if needed, though motion.div used here
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%', // Take full height to center content
      paddingBottom: '5rem', // Space for footer items
    }
  };

  // --- Framer Motion Variants ---
  const menuItemContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger animation for children
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // Reverse stagger on exit
        ease: "easeIn",
        when: "afterChildren"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 12 } },
    exit: { opacity: 0, x: 25, transition: { duration: 0.15, ease: "easeIn" } }
  };

  const baseLinkClass = "menu-item-link text-2xl font-medium hover:text-[#6A0202] focus:text-[#6A0202] focus:outline-none transition-colors duration-200 py-2";

  // --- Menu Link Definitions ---
  const mainMenuItems = [
    { id: 'about-main', label: 'ABOUT', onClick: () => scrollToSection('#about'), sectionId: 'about' },
    { id: 'projects-main', label: 'PROJECTS', onClick: () => setShowProjectsSubMenu(true) },
    { id: 'contact-main', label: 'CONTACT', onClick: closeMenu, href: '/contact', sectionId: 'contact' }, // sectionId for active state if /contact is a section
  ];

  const projectsSubMenuItems = [
    { id: 'back-projects', label: '← Back', onClick: () => setShowProjectsSubMenu(false), className: 'text-xl text-gray-600 hover:text-gray-800 mb-6 font-normal' },
    { id: 'tv-repairman-sub', label: 'TV-Repairman', href: '/tv-repairman' },
    { id: 'kigoma-sub', label: 'Kigoma NYE', href: '/kigoma' }, // Consistent naming with projects data
    { id: 'tinystage-sub', label: 'TinyStage', href: '/tinystage' },
  ];

  // Helper to render menu items
  const renderMenuItems = (items) => (
    <motion.div
      key={showProjectsSubMenu ? "submenu" : "mainmenu"} // Key change triggers AnimatePresence
      variants={menuItemContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center justify-center w-full"
    >
      {items.map(({ id, label, onClick, href, className: itemClassName }) => (
        <motion.div
          key={id}
          variants={menuItemVariants}
          className={itemClassName || "mb-5"} // Default margin, more spacing
        >
          {href ? (
            <Link href={href} className={`${baseLinkClass} ${pathname === href ? 'text-[#5A0101] font-bold' : ''}`} onClick={closeMenu}>
              {label}
            </Link>
          ) : (
            <button onClick={onClick} className={`${baseLinkClass} ${activeSection === id.split('-')[0] && pathname === '/' ? 'text-[#5A0101] font-bold' : ''}`}>
              {label}
            </button>
          )}
        </motion.div>
      ))}
    </motion.div>
  );


  return (
    <>
      {/* Desktop Fixed Side Panel */}
      <div className={`hidden md:flex fixed top-0 left-0 h-screen bg-[#ECE7E0] p-8 flex-col justify-between z-30 shadow-lg`} style={{ width: `${DESKTOP_SIDE_PANEL_WIDTH}px` }}>
        <div className="flex flex-col items-start">
          <Link href="/" scroll={false} className="block relative w-[150px] h-[65px] mb-16 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A0303] rounded-sm">
            <Image src="/logoj.svg" alt="Holland Street Logo" fill style={{ objectFit: "contain" }} priority sizes="150px" />
          </Link>
          <nav className="flex flex-col items-start space-y-5 text-lg font-medium text-gray-700">
            <button
              onClick={() => scrollToSection('#about')}
              className={`text-left nav-link-desktop hover:text-[#8A0303] transition-colors duration-200 focus:outline-none focus-visible:text-[#8A0303] ${activeSection === 'about' && pathname === '/' ? 'text-[#8A0303] font-semibold' : ''}`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className={`text-left nav-link-desktop hover:text-[#8A0303] transition-colors duration-200 focus:outline-none focus-visible:text-[#8A0303] ${activeSection === 'projects' && pathname === '/' ? 'text-[#8A0303] font-semibold' : ''}`}
            >
              PROJECTS
            </button>
            <Link
              href="/contact"
              className={`block text-left nav-link-desktop hover:text-[#8A0303] transition-colors duration-200 focus:outline-none focus-visible:text-[#8A0303] ${pathname === '/contact' ? 'text-[#8A0303] font-semibold' : ''}`}
            >
              CONTACT
            </Link>
          </nav>
        </div>

        <div className="mt-auto pt-6 text-left"> {/* Changed to text-left for copyright */}
          <p className="text-xs text-gray-600 mb-4">
            Holland Street © {new Date().getFullYear()}<br />Cultivating Becoming.
          </p>
          <div className="flex justify-start"> {/* Changed to justify-start for Instagram Icon */}
            <a
              href="https://www.instagram.com/holland.street"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Holland Street on Instagram"
              className="relative h-7 w-7 hover:opacity-75 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A0303] rounded-sm"
            >
              <Image src="/Instagram_Glyph_Gradient_RGB.png" alt="Instagram" fill style={{ objectFit: "contain" }} sizes="28px" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Header Bar */}
      <header className="md:hidden bg-[#F9F6F1] px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg sticky top-0 z-40"> {/* Made sticky */}
        <Link href="/" scroll={false} className="block relative w-[130px] h-[45px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A0303] rounded-sm">
          <Image src="/logojjj.svg" alt="Holland Street Logo" fill style={{ objectFit: "contain" }} priority sizes="130px" />
        </Link>
        <BurgerButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} ariaLabel={menuOpen ? "Close menu" : "Open menu"} />
      </header>

      {/* Mobile Menu (using react-burger-menu) */}
      <div className="block md:hidden"> {/* This div is important for react-burger-menu to inject into */}
        <Menu
          customBurgerIcon={false} // We use our own BurgerButton
          pageWrapId={"page-wrap"} // ID of your main page content wrapper
          outerContainerId={"outer-container"} // ID of your app's root wrapper
          right // Menu slides from the right
          styles={styles}
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          // itemListElement="div" // Default is 'nav', can be changed
          // itemClassName="menu-item-list" // Not strictly needed if using motion.div for items
        >
          <AnimatePresence mode="wait">
            {!showProjectsSubMenu ? renderMenuItems(mainMenuItems) : renderMenuItems(projectsSubMenuItems)}
          </AnimatePresence>

          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center space-y-6">
            <p className="text-xs text-[#8A0303]/80 italic text-center">
              Cultivating Becoming.
            </p>
            <a
              href="https://www.instagram.com/holland.street"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Holland Street on Instagram"
              className="relative h-8 w-8 hover:opacity-75 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              <Image src="/Instagram_Glyph_Gradient_RGB.png" layout="fill" objectFit="contain" alt="Instagram" sizes="32px" />
            </a>
          </div>
        </Menu>
      </div>
    </>
  );
}