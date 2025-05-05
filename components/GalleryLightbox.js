'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import styles from "./GalleryLightbox.module.css";

export default function GalleryLightbox() {
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      src: "/gallery/Tstage.jpeg",
      alt: "Event 1",
      width: 3840,
      height: 2560,
    },
    {
      src: "/gallery/Kig.jpeg",
      alt: "Event 2",
      width: 3840,
      height: 2560,
    },
    {
      src: "/gallery/TVR.jpeg",
      alt: "Event 3",
      width: 3840,
      height: 2560,
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Show Inline carousel for mobile
    return (
      <div className="w-full mx-auto max-w-md border border-[#8A0303] rounded-lg shadow-lg overflow-hidden">
        <Lightbox
          plugins={[Inline]}
          inline={{ style: { width: "100%", height: "400px" } }}
          slides={slides}
        />
      </div>
    );
  }

  // Standard gallery grid for desktop
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {slides.map((slide, i) => (
          <div
            key={i}
            onClick={() => setIsMobile(true)} // Optional: open inline on tap
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
    </div>
  );
}
