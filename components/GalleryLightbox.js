'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';
import styles from './GalleryLightbox.module.css';

export default function GalleryLightbox() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [

    { src: '/gallery/dejablue.jpg', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/TScrowd.jpeg', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/dejacrowd.jpg', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/dejalive.jpg', alt: 'TinyStage Presents: Deja Blue Band' },
    { src: '/gallery/kid.jpeg', alt: 'TinyStage Presents: Deja Blue Band'},
    { src: '/gallery/db3.jpeg', alt: 'TinyStage Presents: Deja Blue Band'},
    { src: '/gallery/dejablue2.jpg', alt: 'TinyStage Presents: Deja Blue Band'},
    { src: '/gallery/deb4.jpeg', alt: 'TinyStage Presents: Deja Blue Band'},
    { src: '/gallery/kagoma.jpg', alt: 'Kagoma NYE' },
    { src: '/gallery/Kig-2.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-9.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-10.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-11.jpg', alt: 'Kigoma 11' },
    { src: '/gallery/kig-14.jpg', alt: 'Kigoma 14' },
    { src: '/gallery/kig-15 2.jpg', alt: 'Kigoma 15 alt' },
    { src: '/gallery/kig-15.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-16.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-17.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-20.jpg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig-header2 (1).JPG', alt: 'Kigoma NYE' },
    { src: '/gallery/kig.jpeg', alt: 'Kigoma NYE' },
    { src: '/gallery/kig22.jpeg', alt: 'Kigoma NYE'},
    { src: '/gallery/TVR.jpeg', alt: 'TV Repairman' },
    { src: '/gallery/feed-1.jpg', alt: 'FEED 1' },
    { src: '/gallery/feed-5.jpg', alt: 'FEED 5' },
  ];
  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const shouldRunAutoplay = isMobile || open;
    if (!shouldRunAutoplay) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile, open, slides.length]);

  // === Mobile View (Inline + autoplay) ===
  if (isMobile) {
    return (
      <div className={`${styles.galleryWrapper} w-full max-w-5xl mx-auto py-12`}>
        <Lightbox
          key={`mobile-${index}`}
          open
          plugins={[Inline]}
          inline={{ style: { width: '100%', height: '60vh' } }}
          slides={slides}
          index={index}
          carousel={{ finite: true }}
        />
      </div>
    );
  }

  // === Desktop View (Grid + modal autoplay) ===
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {slides.map((slide, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="relative w-full h-64 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover hover:opacity-90 transition-opacity duration-300"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {open && (
        <div className={styles.galleryWrapper}>
          <Lightbox
            key={`desktop-${index}`}
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={index}
            carousel={{ finite: true }}
          />
        </div>
      )}
    </div>
  );
}
