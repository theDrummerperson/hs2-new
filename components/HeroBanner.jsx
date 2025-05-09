'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const gallery = [
  {
    img: '/gallery/kig-drums.jpg',
    caption: 'We gather to remember and resist — the rhythm of community lives here.'
  },
  {
    img: '/gallery/kigoma.png',
    caption: 'Rooted in sovereignty, Kigoma reclaims the ritual of joy.'
  },
  {
    img: '/gallery/dejalive.png',
    caption: 'Live from TinyStage — intimacy, groove, and electric vulnerability.'
  },
  {
    img: '/gallery/kagoma.png',
    caption: 'Ceremony becomes celebration, stitched together with sound.'
  }
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % gallery.length);
        setFade(true);
      }, 1000);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#F9F6F1] flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel: Cycling Captions */}
      <div className="w-full md:w-1/3 px-6 py-12 md:py-24 flex items-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#8A0303] font-serif leading-tight">
              HOLLAND STREET
            </h1>
            <p className="italic text-lg text-[#8A0303]">A Cultural Studio & Public House</p>
            <hr className="border-[#8A0303]/20 w-12" />
            <p className="text-sm text-[#444] leading-relaxed max-w-xs">
              {gallery[currentIndex].caption}
            </p>
            <blockquote className="text-[#8A0303] text-md font-bold uppercase tracking-wide border-l-4 border-[#8A0303] pl-4">
              We don’t sell belonging — we cultivate becoming.
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Panel: Cycling Images */}
      <div className="relative w-full md:w-2/3 h-[300px] sm:h-[400px] md:h-auto transition-opacity duration-1000" style={{ opacity: fade ? 1 : 0 }}>
        <Image
          src={gallery[currentIndex].img}
          alt="Hero Gallery Image"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#F9F6F1] to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8A0303]/70 via-[#8A0303]/30 to-transparent md:hidden" />
      </div>
    </section>
  );
}