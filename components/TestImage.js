import Image from "next/image";

export default function TestImage() {
  return (
    <div className="w-full max-w-xl mx-auto my-12 border border-gray-200 rounded-md overflow-hidden shadow-md">
      <Image
        src="/gallery/kig.jpeg"
        alt="Test Image"
        width={800}
        height={500}
        className="object-cover"
        priority
      />
    </div>
  );
}
