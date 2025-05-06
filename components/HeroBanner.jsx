'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/gallery/dejablue.png',
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
    <section className="bg-[#8A0303] relative overflow-hidden">
      <div className="pl-6 pr-4 py-10 md:py-16 relative z-10">
        <div className="bg-[#F9F6F1] rounded-[2rem] px-4 md:px-8 py-10 md:py-16 flex flex-col items-start justify-start space-y-6 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#8A0303] font-serif leading-tight">
            HOLLAND STREET
          </h1>
          <p className="italic text-lg text-[#8A0303]">A Cultural Studio & Public House</p>

         

          <hr className="my-4 border-[#8A0303]/20 w-12" />

     
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

          <blockquote className="mt-6 text-[#8A0303] text-md font-bold uppercase tracking-wide border-l-4 border-[#8A0303] pl-4">
            We don’t sell belonging — we cultivate becoming.
          </blockquote>
        </div>
      </div>

      {/* Right-anchored image gallery with gradient mask */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-2/3 h-full transition-opacity duration-1000" style={{ opacity: fade ? 1 : 0 }}>
          <Image
            src={images[currentIndex]}
            alt="Hero Gallery Image"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#F9F6F1] to-transparent" />
        </div>
      </div>
    </section>
  );
} 