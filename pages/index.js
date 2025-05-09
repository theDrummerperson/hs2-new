// pages/index.js
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

import FeaturedProjects from '../components/FeaturedProjects';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div id="outer-container">
      <div id="top" />

      <Head>
        <title>Holland Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main className="md:ml-64" id="page-wrap">
        <Header />

        {/* About Section */}
        <section id="about" className="relative text-[#222] min-h-screen sm:min-h-[600px]">
          <HeroBanner />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative pt-28 pb-10 bg-[#F9F6F1] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-[#F9F6F1] via-[#F9F6F1] to-[#F9F6F1] rounded-full z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Title */}
          

            {/* Featured Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-20"
            >
              <FeaturedProjects />
            </motion.div>

          

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto text-center text-[#333] text-base sm:text-lg leading-relaxed px-4"
            >
              <p className="mb-6">
                At <span className="font-semibold text-[#8A0303]">Holland Street</span>, community engagement is not an outcome—it’s the method. We activate public space with cultural programming that honors the rich heritage of our communities and invites <span className="bg-[#8A0303]/10 px-1 rounded">collective celebration</span>.
              </p>
              <p>
                Whether through performance, conceptual installations, or public art, our projects are designed to <span className="italic">uplift</span>, <span className="italic">reflect</span>, and <span className="italic">transform</span>. Holland Street reclaims the commons—to rewrite narratives and uplift voices.
              </p>
            </motion.div>

            {/* Divider Line */}
            <div className="w-12 h-1 bg-[#8A0303] mx-auto my-12 rounded-full" />
          </div>
        </section>

     
      </main>

      <Footer />
    </div>
  );
}
