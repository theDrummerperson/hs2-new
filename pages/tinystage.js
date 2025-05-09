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

      <main className="bg-[#F9F6F1] min-h-screen">
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















        {/* Featured Performance */}
        <section className="bg-white px-6 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Clickable Performance Image */}
            <Link href="/artists/deja-blue" className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/deja-blue-performance.jpg"
                  alt="Deja Blue live at TinyStage"
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent px-6 py-4 text-white">
                  <h2 className="text-2xl font-bold">Deja Blue</h2>
                  <p className="text-sm opacity-80">
                    A soul-funk trio bringing vintage groove to the heart of Erie.
                  </p>
                  <span className="underline underline-offset-2 text-sm">Click for full profile</span>
                </div>
              </motion.div>
            </Link>

            {/* Performer Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-3xl font-semibold text-[#8A0303] mb-4">Featured Artist: Deja Blue</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
                justo at elit sagittis laoreet. Nulla facilisi. Aenean tristique odio
                nec facilisis interdum. Curabitur at semper leo, in gravida nisi.
              </p>
              <Link href="/artists/deja-blue" className="inline-block bg-[#8A0303] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#700202] transition">
  View Artist Page →
</Link>

            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
