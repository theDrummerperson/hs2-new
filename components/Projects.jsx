'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';

const projects = [
  {
    title: 'TinyStage Concert Series',
    label: 'Live Music',
    href: '/tinystage',
    img: '/gallery/dejablue.png',
  },
  {
    title: 'Kigoma NYE Celebration',
    label: 'Cultural Event',
    href: '/kigoma',
    img: '/gallery/kig-11.png',
  },
  {
    title: 'TV Repairman',
    label: 'Art Installation',
    href: '/tv-repairman',
    img: '/gallery/feed.svg',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640 && selectedProject) {
      router.push(selectedProject.href);
      setSelectedProject(null);
    }
  }, [selectedProject, router]);

  return (
    <>
      <div className="block sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1} className="pb-4">
          {projects.map(({ title, label, img, href }, index) => (
            <SwiperSlide key={title}>
              <button
                onClick={() => setSelectedProject({ title, label, img, href })}
                className="w-full block rounded-3xl overflow-hidden border border-[#8A0303]/40 focus:outline-none"
              >
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <div className="bg-white p-4 text-left">
                  <p className="text-xs text-[#8A0303] uppercase font-medium">{label}</p>
                  <h3 className="text-lg font-semibold text-[#111]">{title}</h3>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, label, href, img }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setSelectedProject({ title, label, img, href })}
              className="group relative block rounded-3xl overflow-hidden shadow-xl border border-[#8A0303]/40 hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 w-full h-full focus:outline-none focus:ring-2 focus:ring-[#8A0303]"
              aria-label={`View more about ${title}`}
            >
              <Image
                src={img}
                alt={title}
                width={600}
                height={400}
                className="object-cover w-full h-80"
                loading="lazy"
              />
              <div className="relative p-6 bg-white">
                <p className="text-xs uppercase tracking-widest text-[#8A0303] font-medium mb-1">{label}</p>
                <h3 className="text-xl font-bold text-[#111] mb-2">{title}</h3>
                <p className="text-sm text-gray-600">Tap to explore →</p>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

          {selectedProject && (
            <div className="relative bg-[#F9F6F1] rounded-2xl max-w-md w-full mx-auto overflow-hidden shadow-xl z-50">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-[#8A0303] font-bold text-xl"
              >
                ×
              </button>

              <DialogTitle className="sr-only">{selectedProject.title}</DialogTitle>

              <div className="w-full aspect-video">
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[#8A0303] font-medium mb-1">
                  {selectedProject.label}
                </p>
                <h2 className="text-2xl font-bold text-[#111] mb-4">
                  {selectedProject.title}
                </h2>
                <Link
                  href={selectedProject.href}
                  className="inline-block bg-[#8A0303] text-white px-4 py-2 rounded-md text-sm hover:bg-[#6c0202] transition"
                >
                  Visit Project →
                </Link>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
