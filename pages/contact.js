// pages/contact.js
'use client';

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";


export default function ContactPage() {
  return (
    <div id="outer-container">
      <Head>
        <title>Contact Us | Holland Street</title>
        <meta name="description" content="Reach out to Holland Street. We welcome collaborations, questions, and community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="page-wrap" className="relative bg-[#F9F6F1]">
        <Header />

        <section className="min-h-screen px-6 pt-28 pb-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold text-[#8A0303] tracking-tight"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-gray-700"
            >
              We’d love to hear from you. Whether you’re an artist, organizer, neighbor, or curious visitor—
              Holland Street welcomes your voice.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
