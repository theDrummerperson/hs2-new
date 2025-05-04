// components/ImageCarousel.js
import ImageGallery from "react-image-gallery";
import Link from "next/link";

const images = [
  {
    original: "/gallery/TStage.jpg",
    thumbnail: "/gallery/TStage.jpg",
    description: "The TinyStage Concert Series highlights and celebrates local musicians through live and live-streamed performances.",
    link: "/projects/tinystage",
  },
  {
    original: "/gallery/Kig.JPG",
    thumbnail: "/gallery/Kig.JPG",
    description: "Kigoma is a cultural celebration of the African diaspora through food, music, and art.",
    link: "/projects/kigoma",
  },
  {
    original: "/gallery/TVR.jpg",
    thumbnail: "/gallery/TVR.jpg",
    description: "TV Repairman is a conceptual public art installation fostering dialogue about technology, access, and community.",
    link: "/projects/tv-repairman",
  },
];

function renderItem(item) {
  return (
    <Link href={item.link} passHref>
      <a className="relative block group custom-slide">
        <img src={item.original} alt={item.description} className="object-cover w-full h-auto" />
        <div className="custom-caption">
          <p>{item.description}</p>
        </div>
      </a>
    </Link>
  );
}

export default function ImageCarousel() {
  return (
    <div className="max-w-5xl mx-auto custom-gallery">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={true}
        renderItem={renderItem}
      />
    </div>
  );
}
