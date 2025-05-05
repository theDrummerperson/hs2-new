'use client';

import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="bg-[#8A0303]">
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-16">
        <div className="bg-[#F9F6F1] rounded-[2rem] px-4 md:px-16 py-10 md:py-16 flex flex-col items-center justify-center space-y-8">

          {/* Combined Title + Logo */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#8A0303] font-serif text-center md:text-right leading-tight">
                HOLLAND<br />STREET
              </h1>

              {/* Logo */}
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

            {/* Tagline centered below both */}
            <p className="text-[#8A0303] text-lg sm:text-xl md:text-2xl font-medium text-right pr-8">Building Radical Worlds</p>          </div>
        </div>
      </div>
    </section>
  );
}
