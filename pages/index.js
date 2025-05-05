import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryLightbox from "../components/GalleryLightbox";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
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
        <section id="about" className="relative text-[#222] min-h-screen sm:min-h-[800px]">
          <div className="absolute inset-0 z-0 bg-hero bg-cover bg-center bg-no-repeat" />

          <div className="absolute bottom-0 left-0 z-10 m-6 bg-white/90 rounded-xl shadow-lg p-6 max-w-md space-y-5 leading-relaxed">
            <h1 className="text-3xl font-bold text-[#111]">A home for radical imagination.</h1>
            <p className="text-sm text-[#444]">
              We craft <span className="font-semibold text-[#8A0303]">digital stories</span>,
              <span className="font-semibold text-[#8A0303]"> live gatherings</span>, and
              <span className="font-semibold text-[#8A0303]"> communal rituals</span> that center liberation—not consumption.
            </p>
            <p className="text-sm text-[#444]">
              Rooted in <span className="italic">freedom</span> and
              <span className="italic"> sovereignty</span>, Holland Street is both a cultural studio and a public house
              for visionaries, refugees, and builders of new worlds.
            </p>
            <p className="text-md font-bold text-[#8A0303] tracking-wide uppercase">
              We don’t sell belonging —
              <br className="sm:hidden" />
              we cultivate becoming.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative min-h-screen px-6 py-24 bg-[#F9F6F1] overflow-hidden">
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-[#F9F6F1] via-[#F9F6F1] to-[#F9F6F1] rounded-full z-0"></div>

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Animated Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#111]">
                <span className="text-[#8A0303]">Our</span> Promise
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Cultural interventions that animate public space, <span className="underline decoration-[#8A0303]/30 underline-offset-4">challenge narratives</span>, and celebrate community.
              </p>
            </motion.div>

            {/* Lightbox Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative isolate w-full bg-[#F9F6F1] py- shadow-xl  border-[#000000] border-2 rounded-lg">
                <div className="max-w-6xl mx-auto px-4">
                  <GalleryLightbox />
                </div>
              </div>
            </motion.div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto text-center text-[#333] text-base sm:text-lg leading-relaxed px-4"
            >
              <p className="mb-6">
                At <span className="font-semibold text-[#8A0303]">Holland Street</span>, community engagement is not an outcome—it’s the method.
                We activate public space with cultural programming that honors the rich heritage of our communities and invites <span className="bg-[#8A0303]/10 px-1 rounded">collective celebration</span>.
              </p>
              <p>
                Whether through performance, conceptual installations, or public art, our projects are designed to
                <span className="italic"> uplift</span>, <span className="italic"> reflect</span>, and <span className="italic">transform</span>.
                Holland Street reclaims the commons—to rewrite narratives and uplift voices.
              </p>
            </motion.div>

            {/* Call to Action */}
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
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen px-6 py-20 bg-[#F9F6F1]">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
