
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [

{ src: '/gallery/dejablue.png', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/TScrowd.png', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/dejalive.png', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/dejalive2.png', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/kigoma.png', alt: 'Kagoma NYE' },
    { src: '/gallery/kagoma.png', alt: 'Kagoma NYE' },
    { src: '/gallery/Kig-2.png', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-9.png', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-10.png', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-11.png', alt: 'Kigoma 11' },
    { src: '/gallery/kig-14.png', alt: 'Kigoma 14' },
    { src: '/gallery/kig-15.png', alt: 'Kigoma NYE' },
  

];

export default function GallerySwiper() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-lg bg-[#8A0303] shadow-2xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[60vh]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain bg-[white]"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
