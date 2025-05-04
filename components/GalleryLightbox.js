'use client';

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline"; // ✅ Import plugin
import "yet-another-react-lightbox/styles.css";

export default function GalleryLightbox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      src: "/gallery/kig.JPG",
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
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <Lightbox
        open
        inline={{ style: { maxWidth: "100%", height: "auto", aspectRatio: "4/3" } }} // ⬅️ Inline plugin activated
        slides={slides}
        plugins={[Inline]}
        index={index}
        carousel={{ finite: true }}
        on={{
          click: () => setIndex((prev) => (prev + 1) % slides.length),
        }}
      />
    </div>
  );
}
