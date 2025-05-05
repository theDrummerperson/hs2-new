'use client';
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
    { src: '/gallery/dejablue.jpg', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/TScrowd.jpeg', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/dejalive.jpg', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/kid.jpeg', alt: 'TinyStage Presents: Deja Blue Band'},
    { src: '/gallery/dejablue2.jpg', alt: 'TinyStage Presents: Deja Blue Band'},
    { src: '/gallery/kagoma.jpg', alt: 'Kagoma NYE' },
    { src: '/gallery/Kig-2.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-9.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-10.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-11.jpg', alt: 'Kigoma 11' },
    { src: '/gallery/kig-14.jpg', alt: 'Kigoma 14' },
    { src: '/gallery/kig-15.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-16.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-17.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/TVR.jpeg', alt: 'TV Repairman' },
  ];

export default function GalleryLightbox() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
          <div className="relative w-full h-64 bg-[#8A0303]">
          <div className="relative w-full aspect-[3/2] bg-[#8A0303]">
  <Image
    src={slide.src}
    alt={slide.alt}
    fill
    className="object-contain md:object-cover"
  />
</div>



            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
