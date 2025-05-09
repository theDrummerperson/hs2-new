'use client';

import { useState } from 'react';
import { Dialog, DialogTitle } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'TinyStage Concert Series',
    label: 'Live Music',
    href: '/tinystage',
    img: '/gallery/dejablue.png'
  },
  {
    title: 'Kigoma NYE Celebration',
    label: 'Cultural Event',
    href: '/kigoma',
    img: '/gallery/kig-11.png'
  },
  {
    title: 'TV Repairman',
    label: 'Art Installation',
    href: '/tv-repairman',
    img: '/gallery/feed.svg'
  }
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const router = useRouter();

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-[#F9F6F1] to-[#f0e9e0] rounded-3xl shadow-inner">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#222] font-display">
          <span className="text-[#8A0303]">Featured</span> Projects
        </h2>
        <p className="text-base text-[#555] mt-4 max-w-xl mx-auto">
          Intimate moments. Community visions. Ideas that hit like basslines.
        </p>
      </motion.div>

      {/* Mobile Swiper View */}
      <div className="block sm:hidden relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          onSlideChange={() => {
            if (showSwipeHint) setShowSwipeHint(false);
          }}
          className="pb-10"
        >
          {projects.map(({ title, label, img, href }) => (
            <SwiperSlide key={title} className="w-full">
              <button
                onClick={() => router.push(href)}
                className="w-full block rounded-2xl overflow-hidden border-l-4 border-[#8A0303] focus:outline-none bg-white shadow-md active:scale-[0.97] active:brightness-95 transition-transform duration-100 ease-in-out"
              >
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 rounded-t-xl"
                />
                <div className="relative p-4 text-left">
                  <p className="text-xs text-white uppercase font-semibold transform -rotate-90 origin-bottom-left absolute bottom-6 left-0 bg-[#8A0303] px-2 py-1 tracking-wider">
                    {label}
                  </p>
                  <h3 className="text-lg font-serif font-bold text-[#111] pl-6 pt-2">
                    {title}
                  </h3>
                </div>
              </button>
            </SwiperSlide>
          ))}

          {showSwipeHint && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.7, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: 'easeInOut' }}
              className="absolute top-1/2 right-2 sm:right-4 z-10 transform -translate-y-1/2 pointer-events-none"
            >
              <motion.svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A0303"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut' }}
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </motion.svg>
            </motion.div>
          )}
        </Swiper>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map(({ title, label, href, img }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setSelectedProject({ title, label, img, href })}
              className="group relative block rounded-3xl overflow-hidden shadow-xl border border-[#8A0303]/40 hover:border-[#6c0202] transition-transform duration-300 w-full h-full focus:outline-none focus:ring-2 focus:ring-[#8A0303]"
              aria-label={`View more about ${title}`}
            >
              <div className="relative">
                <Image
                  src={img}
                  alt={title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-80 group-hover:brightness-75 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-lg font-semibold">View Details</p>
                </div>
              </div>
              <div className="relative p-6 bg-white group-hover:shadow-2xl transition-shadow duration-300">
                <p className="text-xs text-white uppercase font-semibold transform -rotate-90 origin-bottom-left absolute bottom-6 left-0 bg-[#8A0303] px-2 py-1 tracking-wider">
                  {label}
                </p>
                <h3 className="text-xl font-serif font-bold text-[#111] mb-2 pl-6 pt-2">{title}</h3>
                <p className="text-sm text-gray-600 pl-6">Tap to explore →</p>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <Dialog.Panel className="relative bg-[#F9F6F1] rounded-2xl max-w-3xl w-full mx-auto overflow-hidden shadow-xl z-50 flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#8A0303] font-bold text-xl"
            >
              ×
            </button>

            <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>

            <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative">
              <Image
                src={selectedProject?.img || '/placeholder.png'}
                alt={selectedProject?.title || 'Project Image'}
                fill
                className="object-cover md:rounded-l-2xl md:rounded-t-none rounded-t-2xl"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-[#8A0303] font-medium mb-1">
                {selectedProject?.label}
              </p>
              <h2 className="text-2xl font-serif font-bold text-[#111] mb-2">
                {selectedProject?.title}
              </h2>
              <div className="h-[2px] w-16 bg-[#8A0303] my-4" />
              <p className="text-sm text-gray-500 italic mb-6">
                Presented by Holland Street · Est. 2024
              </p>
              <Link href={selectedProject?.href || '/'}
                className="inline-block border-2 border-[#8A0303] text-[#8A0303] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#8A0303] hover:text-white transition"
              >
                → Visit Project
              </Link>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
