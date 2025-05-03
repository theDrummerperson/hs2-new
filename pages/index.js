import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "28px",
    top: "28px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100vw", // ✅ Full width
    left: 0,         // ✅ Ensure it's anchored to the left
    top: 0           // ✅ Ensure it's anchored to the top
  },
  
  bmMenu: {
    background: "#222222",
    padding: "1.5em .75em 0",
    fontSize: "3.5em",
    color: "#F9F6F1",
  },
 
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },

};


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [hash, setHash] = useState(location.hash);

  const router = useRouter();

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = (state) => {
    setMenuOpen(state.menuOpen);
    // setHash(location.hash);
    // location.reload();
  };

  // This can be used to close the menu, e.g. when a user clicks a menu item
  const closeMenu = () => {
    setMenuOpen(false);
    // setHash(location.hash);
    // location.reload();
  };

  return (
    <div className="">
      <Head>
        <title>Holland Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="outer-container" className="">
        <Header />
   
{/* MOBILE MENU: visible on small screens only */}
<div className="block md:hidden">
  <Menu
    pageWrapId={"page-wrap"}
    outerContainerId={"outer-container"}
    right
    styles={styles}
    burgerButtonClassName={"bg-button-class"}
    itemListClassName="menu-item-list"
    isOpen={menuOpen}
    onStateChange={handleStateChange}
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



      
      </div>
     
    </div>
  );
}
