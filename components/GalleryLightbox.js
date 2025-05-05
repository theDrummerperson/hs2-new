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
    { src: '/gallery/dejablue.jpg', alt: 'Tiny Stage Presents: Deja Blue Band', width: 3840, height: 2560 },
    { src: '/gallery/kig-11.jpg', alt: 'Kigoma Night 11', width: 3840, height: 2560 },
    { src: '/gallery/kig22.jpeg', alt: 'Kigoma Night 12', width: 3840, height: 2560 },
    { src: '/gallery/Kig.jpeg', alt: 'Kigoma Gathering', width: 3840, height: 2560 },
    { src: '/gallery/TVR.jpeg', alt: 'TV Repairman Set', width: 3840, height: 2560 },
    { src: '/gallery/kig-9.jpg', alt: 'Kigoma Night 9', width: 3840, height: 2560 },
    { src: '/gallery/kagoma.jpg', alt: 'Kagoma Performance', width: 3840, height: 2560 },
    { src: '/gallery/feed-5.jpg', alt: 'FEED Event 5', width: 3840, height: 2560 },
    { src: '/gallery/kig-10.jpg', alt: 'Kigoma Night 10', width: 3840, height: 2560 },
    { src: '/gallery/feed-1.jpg', alt: 'FEED Opener', width: 3840, height: 2560 },
    { src: '/gallery/Tscrowd.jpeg', alt: 'TinyStage Crowd', width: 3840, height: 2560 },
    { src: '/gallery/dejablue2.jpg', alt: 'Deja Blue Live', width: 3840, height: 2560 },
    { src: '/gallery/Kid.jpeg', alt: 'Young Performer', width: 3840, height: 2560 },
    { src: '/gallery/Tstage.jpeg', alt: 'TinyStage Setup', width: 3840, height: 2560 },
    { src: '/gallery/kig-15.jpg', alt: 'Kigoma Night 15', width: 3840, height: 2560 },
    { src: '/gallery/db3.jpeg', alt: 'Deja Blue 3rd Set', width: 3840, height: 2560 },
    { src: '/gallery/Kig-2.jpg', alt: 'Kigoma NYE', width: 3840, height: 2560 },
    { src: '/gallery/emerson.jpeg', alt: 'Emmerson', width: 3840, height: 2560 },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fallback autoplay with setInterval
  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [open, slides.length]);

  // Mobile View: Inline autoplay carousel
  if (isMobile) {
    return (
      <div className={`${styles.galleryWrapper} w-full max-w-5xl mx-auto py-12`}>
        <Lightbox
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

  // Desktop View: Grid preview + Lightbox
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

      <div className={`${styles.galleryWrapper}`}>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          carousel={{ finite: true }}
        />
      </div>
    </div>
  );
}
