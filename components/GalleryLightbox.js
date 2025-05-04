'use client';

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryLightbox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

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
        alt: "Event 2",
        width: 3840,
        height: 2560,
      },

  ];


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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        carousel={{ finite: true }}
      />
    </div>
  );
}
