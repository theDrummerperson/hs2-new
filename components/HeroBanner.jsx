'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/gallery/kig-drums.jpg',
  '/gallery/kigoma.png',
  '/gallery/dejalive.png',
  '/gallery/kagoma.png',
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#8A0303] relative overflow-hidden min-h-screen font-sans">
      {/* Desktop View */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div className="absolute top-20 left-24 transform rotate-[-2deg] shadow-xl w-[300px] h-[400px] border-4 border-white bg-white z-10 transition-opacity duration-1000" style={{ opacity: fade ? 1 : 0 }}>
          <Image
            src={images[currentIndex]}
            alt="Curated Gallery Image"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-20 md:py-32 max-w-4xl mx-auto">
        {/* Faux taped label */}
        <div className="inline-block bg-yellow-300 text-yellow-900 text-xs font-mono px-3 py-1 rounded rotate-[-2deg] shadow-sm mb-4">
          Curator's Note
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#F9F6F1]/90 backdrop-blur-sm rounded-lg p-6 md:p-10 shadow-2xl relative z-10 space-y-6 max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#8A0303] font-serif leading-tight">
            HOLLAND STREET
          </h1>
          <p className="italic text-lg text-[#8A0303] font-handwritten">A Cultural Studio & Public House</p>
          <hr className="my-2 border-dashed border-[#8A0303]/30 w-16" />

          <p className="text-sm text-[#444] leading-relaxed">
            We craft <span className="font-semibold text-[#8A0303]">digital stories</span>,
            <span className="font-semibold text-[#8A0303]"> live gatherings</span>, and
            <span className="font-semibold text-[#8A0303]"> communal rituals</span> that center liberation—not consumption.
          </p>

          <p className="text-sm text-[#444] leading-relaxed">
            Rooted in <span className="italic">freedom</span> and
            <span className="italic"> sovereignty</span>, we exist as a cultural studio and a public house
            for visionaries, refugees, and builders of new worlds.
          </p>
        </motion.div>

        {/* Torn quote snippet */}
        <div className="absolute bottom-8 right-8 bg-white p-3 shadow-md transform rotate-2 text-xs italic text-gray-600 max-w-[200px] font-serif z-20">
          “We don’t sell belonging — we cultivate becoming.”
        </div>
      </div>

      {/* Mobile Image - Collage feel */}
      <div className="md:hidden relative w-full h-[300px] sm:h-[400px] transition-opacity duration-1000 mt-10 px-6" style={{ opacity: fade ? 1 : 0 }}>
        <div className="relative w-full h-full border-4 border-white shadow-lg rotate-[-1deg]">
          <Image
            src={images[currentIndex]}
            alt="Hero Mobile Gallery Image"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}