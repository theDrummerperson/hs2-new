// pages/tinystage.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TinyStage() {
  return (
    <div>
      <Head>
        <title>TinyStage Concert Series</title>
        <meta name="description" content="Discover the TinyStage Concert Series—an intimate live music experience featuring emerging talent." />
      </Head>

      <main className="md:ml-64" id="page-wrap">
        <Header />

        {/* Hero Logo and Intro */}
        {/* Hero Logo and Intro */}




        <section className="relative px-6 py-24 max-w-full overflow-hidden">
          {/* Background split */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(120deg, #F9F6F1 50%, #ECE7E0 50%)',
            }}
          ></div>

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

            {/* Logo - large, floating in its own column */}
            <div className="flex-shrink-0 self-center md:self-start bg-white p-4 rounded-full shadow-lg">
              <Image
                src="/TSlogo.png"
                alt="TinyStage Logo"
                width={120}
                height={120}
                className="block"
              />
            </div>

            {/* Typography Block */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#222] leading-none">
                TINY<span className="block text-[#8A0303] -mt-3 md:-mt-5">STAGE</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#333] mb-6 -mt-2">
                CONCERT SERIES
              </h2>

              {/* Description aligned below text block */}
              <p className="max-w-xl text-lg text-[#444] mx-auto md:mx-0">
                A stripped-down concert experience that puts the spotlight on raw talent and real community.
              </p>
            </div>
          </div>
        </section>




        {/* Featured Performance – Scrapbook Style */}
        <section className="bg-[#F0EBE5] px-6 py-20 overflow-hidden relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">

            {/* Image – Slight tilt, shadow, polaroid-style */}
            <Link href="/artists/deja-blue" className="group relative block">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="transform rotate-[-2deg] shadow-2xl rounded-2xl overflow-hidden border-4 border-white"
              >
                <Image
                  src="/gallery/dejablue.png"
                  alt="Deja Blue live at TinyStage"
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full"
                />
                {/* Optional 'label tape' overlay */}
                <div className="absolute bottom-4 left-4 bg-black text-white text-xs uppercase tracking-wider px-3 py-1 font-mono rounded shadow-md opacity-90">
                  Deja Blue – Live at TinyStage
                </div>
              </motion.div>
            </Link>

            {/* Text Block – Layered with tape, handwritten vibes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* "Featured Artist" label like washi tape */}
              <div className="absolute -top-6 left-0 bg-yellow-300/80 text-yellow-900 px-4 py-1 text-xs font-bold uppercase tracking-widest transform -rotate-3 shadow">
                Featured Artist
              </div>

              <h3 className="text-4xl sm:text-5xl font-extrabold font-display text-[#8A0303] mb-6">
                Deja Blue
              </h3>

              <p className="text-gray-800 text-base leading-relaxed mb-6 max-w-prose">
                Déjà Blu is a genre-blending trio from Erie making music that feels like memory—hazy, haunting, and heartbreakingly familiar, weaving indie, lo-fi, dream pop, and alt-rock into a sound that’s equal parts vibe, vulnerability, and emotional echo.      </p>

              <Link
                href="/artists/deja-blue"
                className="inline-block bg-[#8A0303] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#700202] transition"
              >
                View Artist Page →
              </Link>

              {/* Torn paper quote – optional accent */}
              <div className="absolute bottom-[-2.5rem] right-0 bg-white px-4 py-2 shadow-md max-w-[220px] text-xs italic text-gray-600 transform rotate-2 border border-gray-200">
                "Vibes that hum like memory.."
              </div>
            </motion.div>
          </div>
        </section>








      </main>

      <Footer />
    </div>
  );
}
