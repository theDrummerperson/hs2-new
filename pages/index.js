import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { elastic as Menu } from "react-burger-menu";
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
    width: "100vw",
    maxWidth: "275px",
  },
  bmMenu: {
    background: "#8A0303",
    padding: "1.5em .75em 0",
    fontSize: "1.15em",
    color: "#F9F6F1",
  },
  bmMorphShape: {
    fill: "#8A0303",
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



        <main id="page-wrap" className="font-sans bg-gray-700 text-white ">
          <section className="section bg-blue-500" id="about">
            <h1 className="text-3xl pb-8">Nice curves</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsum
              dolore obcaecati sapiente laboriosam cupiditate quo eligendi velit
              deserunt beatae fugit recusandae atque dolorum, odit consectetur
              corrupti voluptates pariatur dicta.
            </p>
            <div className="curve"></div>
          </section>
          <section className="section bubble" id="projects">
            <h1 className="text-3xl pb-8">Nice curves</h1>
            <p>
              Odit, nam nemo tempora explicabo dolores asperiores error iste
              dolor amet fuga officia! Natus, quam porro. Nobis rerum incidunt
              fugiat suscipit odit dicta a tempore sapiente aliquam sed?
              Consectetur, sed.
            </p>
            <div className="wave">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </section>
          <section className="section bg-red-500" id="contact">
            <h1 className="text-3xl pb-8">Nice curves</h1>
            <p>
              Alias debitis dolore eos, maiores voluptates quis, quod quos
              commodi ipsa ipsam molestias facere deserunt hic deleniti optio
              vel, corrupti sit ab est nihil? Veritatis facere nemo quae odio
              dolorem.
            </p>
            <div className="curve">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </section>
          <div className="spacer layer1"></div>
          <section className="section bg-pink-500" id="four">
            <h1 className="text-3xl pb-8">Nice curves</h1>
            <p>
              Illo, sed facere quisquam amet exercitationem suscipit. Aliquam
              enim eum deserunt, ratione quos eveniet dicta tempore corporis,
              repudiandae labore animi iusto libero esse, inventore dolorem
              voluptate porro reiciendis ipsum excepturi.
            </p>
            <div className="wave2">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </section>
          <section className="section bg-green-500 " id="five">
            <h1 className="text-3xl pb-8">Nice curves</h1>
            <p>
              Molestias praesentium quod eligendi nihil eum sit sunt porro
              dolores minus, laborum optio culpa reprehenderit voluptatem
              cupiditate architecto possimus, dolor enim exercitationem!
              Temporibus aliquam quidem, ipsam placeat eos aspernatur quod.
            </p>
          </section>
          <div className="spacer layer2"></div>
          <section className="section bg-violet-500" id="six">
            <h1 className="text-3xl pb-8">Nice curves</h1>
            <p>
              Et id delectus eveniet ratione facilis dolorum, error sapiente
              numquam corporis. Sit magnam laudantium, consequuntur accusamus
              alias consequatur! Magnam similique blanditiis rem commodi optio
              sequi voluptatem accusantium laboriosam tempora numquam?
            </p>
          </section>
        </main>
        <Footer/>
      </div>
    
    </div>
  );
}
