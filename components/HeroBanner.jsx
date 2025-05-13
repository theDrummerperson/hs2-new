'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/gallery/kig-drums.jpg',
  '/gallery/kigoma.png',
  '/gallery/kagoma.png',
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  // Track mouse position for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate3d(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px, 0)`
  };

  return (
    <section className="relative min-h-[80vh] bg-[#F9F6F1] overflow-hidden">
      {/* Background Image with Portal Depth Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={parallaxStyle}
          className="relative w-full h-full transition-opacity duration-1000"
          animate={{ opacity: fade ? 1 : 0 }}
        >
          <Image
            src={images[currentIndex]}
            alt="Hero Gallery Image"
            fill
            className="object-cover object-center md:object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#F9F6F1] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#8A0303]/80 via-[#8A0303]/30 to-transparent md:hidden" />
        </motion.div>
      </div>

      {/* Text Block Appearing as Floating Panel */}
      <div className="relative z-10 px-4 py-10 md:py-24 max-w-md md:ml-16 backdrop-blur-md bg-[#F9F6F1]/90 shadow-2xl rounded-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#8A0303] font-serif leading-tight">
          HOLLAND STREET
        </h1>
        <p className="italic text-lg text-[#8A0303] mt-2">A Cultural Studio & Public House</p>

        <hr className="my-4 border-[#8A0303]/20 w-12" />

        <p className="text-sm text-[#444] leading-relaxed">
          We craft <span className="font-semibold text-[#8A0303]">digital stories</span>,
          <span className="font-semibold text-[#8A0303]"> live gatherings</span>, and
          <span className="font-semibold text-[#8A0303]"> communal rituals</span> that center liberation—not consumption.
        </p>

        <p className="text-sm text-[#444] leading-relaxed mt-4">
          Rooted in <span className="italic">freedom</span> and
          <span className="italic"> sovereignty</span>, we exist as a cultural studio and a public house
          for visionaries, refugees, and builders of new worlds.
        </p>

        <blockquote className="mt-6 text-[#8A0303] text-md font-bold uppercase tracking-wide border-l-4 border-[#8A0303] pl-4">
          We don’t sell belonging — we cultivate becoming.
        </blockquote>
      </div>
    </section>
  );
}
