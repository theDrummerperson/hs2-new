
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  '/gallery/dejablue.png',
  '/gallery/kigoma.png',
  '/gallery/dejalive.png',
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
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#8A0303] relative overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block pl-6 pr-4 py-10 md:py-16 relative z-10">
        <div className="bg-[#F9F6F1] rounded-[2rem] px-4 md:px-4 py-10 md:py-16 flex flex-col md:flex-row items-start justify-start space-y-8 md:space-y-0 md:space-x-12 max-w-xl">
          {/* Title + Logo */}
          <div className="flex flex-col items-start justify-center space-y-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#8A0303] font-serif leading-tight">
              HOLLAND<br />STREET
            </h1>
            <p className="text-[#8A0303] text-lg sm:text-xl md:text-2xl font-medium">
              Building Radical Worlds
            </p>
          </div>
          <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px]">
            <Image
              src="/logo.svg"
              alt="H-STRT Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="block md:hidden relative z-10">
        <div className="w-full h-[400px] relative">
          <Image
            src={images[currentIndex]}
            alt="Hero Mobile Image"
            fill
            className={`object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 bg-[#F9F6F1]/90 text-center rounded-[2rem] m-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#8A0303] font-serif">
            HOLLAND STREET
          </h1>
          <p className="mt-2 text-[#8A0303] text-base font-medium">
            Building Radical Worlds
          </p>
        </div>
      </div>

      {/* Right-anchored image gallery with gradient mask (Desktop Only) */}
      <div className="hidden md:flex absolute inset-0 z-0 justify-end">
        <div className="relative w-2/3 h-full transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
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