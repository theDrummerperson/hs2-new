import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Projects from '../components/Projects';
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

      <main id="page-wrap" className="relative">
        <Header />

        {/* About Section */}
        <section id="about" className="relative text-[#222] min-h-screen sm:min-h-[600px]">
          <HeroBanner />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative px-6 py-28 bg-[#F9F6F1] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-[#F9F6F1] via-[#F9F6F1] to-[#F9F6F1] rounded-full z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111]">
                <span className="text-[#8A0303]">Our</span> Promise
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Cultural interventions that animate public space, <span className="underline decoration-[#8A0303]/30 underline-offset-4">challenge narratives</span>, and celebrate community.
              </p>
            </motion.div>

            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-20"
            >
              <Projects />
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen px-6 py-20 bg-[#F9F6F1]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <a
              href="#contact"
              className="inline-block bg-[#8A0303] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#600202] transition"
            >
              Connect With Us →
            </a>
          </motion.div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
