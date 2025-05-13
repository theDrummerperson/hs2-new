'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'; // Updated import for DialogPanel
// useRouter is not strictly needed if all interactions open the modal first
// import { useRouter } from 'next/navigation'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// It's good practice to import icons if you use them often
// For this example, I'll inline a simple X SVG, but Heroicons or similar is great
// import { XMarkIcon } from '@heroicons/react/24/outline'; 

import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
  {
    id: 'kigoma-nye', // Added unique ID for keys and better management
    title: 'Kigoma NYE Celebration',
    label: 'Cultural Event',
    href: '/kigoma',
    img: '/gallery/kig-11.png',
    description: 'A vibrant New Year\'s Eve celebration in Kigoma, fostering community and cultural heritage.' // Example short description
  },
  {
    id: 'tv-repairman',
    title: 'TV Repairman',
    label: 'Art Installation',
    href: '/tv-repairman',
    img: '/gallery/feed.svg',
    description: 'An immersive art installation exploring themes of media, perception, and repair.' // Example short description
  }
];

// Framer Motion Variants for animations
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ // i is the custom prop for delay index
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15 + 0.1,
      ease: "easeOut"
    }
  })
};

const dialogPanelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2, ease: "easeIn" } }
};


export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  // const router = useRouter(); // Not directly needed if modal opens first

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-[#F9F6F1] to-[#f0e9e0] rounded-3xl shadow-inner">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#222] font-display">
          <span className="text-[#8A0303]">Featured</span> Projects
        </h2>
        <p className="text-base text-[#555] mt-4 max-w-xl mx-auto">
          Intimate moments. Community visions. Ideas that hit like basslines.
        </p>
      </motion.div>

      {/* Unified View: Swiper for mobile, Grid for desktop, both triggering modal */}

      {/* Mobile Swiper View - Opens Modal */}
      <div className="block sm:hidden relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16} // Slightly more space
          slidesPerView={1.1} // Show a peek of the next card
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: true }} // Slightly longer, disable on interaction
          loop={projects.length > 1} // Only loop if more than one project
          pagination={{ clickable: true, el: '.swiper-custom-pagination' }} // Custom pagination element
          onSlideChangeTransitionEnd={() => { // Changed to transition end for smoother hint hide
            if (showSwipeHint) setShowSwipeHint(false);
          }}
          className="pb-12" // Increased padding for custom pagination
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="w-full h-full pb-2">
              <button
                onClick={() => handleProjectSelect(project)}
                aria-label={`View details for ${project.title}`}
                className="w-full h-full block rounded-2xl overflow-hidden border-l-4 border-[#8A0303] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A0303] focus-visible:ring-offset-2 bg-white shadow-lg active:scale-[0.97] active:brightness-95 transition-all duration-150 ease-in-out group"
              >
                <div className="relative aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden"> {/* Aspect ratio for image */}
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 400px"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="relative p-4 text-left">
                  <span className="text-xs text-white uppercase font-semibold transform -rotate-90 origin-bottom-left absolute bottom-6 left-0 bg-[#8A0303] px-2 py-1 tracking-wider rounded-r-sm">
                    {project.label}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#111] pl-7 pt-2 truncate"> {/* Increased pl, added truncate */}
                    {project.title}
                  </h3>
                </div>
              </button>
            </SwiperSlide>
          ))}

          {showSwipeHint && projects.length > 1 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.7, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: 'easeInOut' }}
              className="absolute top-1/2 right-1 z-20 transform -translate-y-1/2 pointer-events-none"
            >
              <motion.svg
                width="24" // Slightly smaller
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor" // Use current color for easier theming
                className="text-[#8A0303]/80"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut' }}
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </motion.svg>
            </motion.div>
          )}
        </Swiper>
        {projects.length > 1 && <div className="swiper-custom-pagination !relative !bottom-0 mt-4 flex justify-center space-x-2"></div>}
      </div>

      {/* Desktop Grid View - Opens Modal */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 mt-0 md:mt-4"> {/* Adjusted gap and margin */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index} // Pass index for staggered delay
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-full" // Ensure motion div takes full height for button
          >
            <button
              onClick={() => handleProjectSelect(project)}
              className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-transparent hover:border-[#8A0303]/50 transition-all duration-300 ease-in-out w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A0303] focus-visible:ring-offset-2"
              aria-label={`View details for ${project.title}`}
            >
              <div className="relative aspect-w-16 aspect-h-10"> {/* Consistent aspect ratio */}
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover w-full h-full group-hover:brightness-75 transition-all duration-300 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-md font-semibold py-2 px-4 bg-[#8A0303]/80 rounded-md">View Details</span>
                </div>
              </div>
              <div className="relative p-5 bg-white"> {/* Slightly adjusted padding */}
                <span className="text-xs text-white uppercase font-semibold transform -rotate-90 origin-bottom-left absolute bottom-6 left-0 bg-[#8A0303] px-2 py-1 tracking-wider rounded-r-sm">
                  {project.label}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#111] mb-1 pl-7 pt-1 truncate">{project.title}</h3> {/* Adjusted spacing, added truncate */}
                {project.description && (
                  <p className="text-sm text-gray-600 pl-7 line-clamp-2"> {/* Added description, line-clamp */}
                    {project.description}
                  </p>
                )}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Dialog - Unified for both mobile and desktop */}
      {selectedProject && ( // Conditionally render Dialog to allow Framer Motion exit animations
        <Dialog
          open={!!selectedProject}
          onClose={handleCloseDialog}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Dialog Panel Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel
              as={motion.div} // Use as={motion.div} for Framer Motion integration
              variants={dialogPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-[#F9F6F1] rounded-2xl max-w-2xl w-full mx-auto overflow-hidden shadow-2xl z-50 flex flex-col md:flex-row"
            >
              <button
                onClick={handleCloseDialog}
                aria-label="Close project details"
                className="absolute top-3 right-3 text-gray-500 hover:text-[#8A0303] p-1 rounded-full transition-colors duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A0303]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>

              <div className="w-full md:w-[45%] aspect-w-16 aspect-h-10 md:aspect-none relative"> {/* Aspect ratio for mobile, flex for desktop */}
                <Image
                  src={selectedProject?.img || '/placeholder.png'} // Fallback placeholder
                  alt={selectedProject?.title || 'Project Image'}
                  fill
                  className="object-cover md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl"
                />
              </div>

              <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-wider text-[#8A0303] font-semibold mb-1">
                  {selectedProject?.label}
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#111] mb-3">
                  {selectedProject?.title}
                </h2>
                <div className="h-0.5 w-16 bg-[#8A0303] my-3 md:my-4" /> {/* Thinner line */}
                <p className="text-sm text-gray-600 mb-6 line-clamp-3"> {/* Example description in modal */}
                  {selectedProject?.description || 'More details about this exciting project coming soon.'}
                </p>
                <Link href={selectedProject?.href || '#!'} // Fallback to non-navigating link
                  className="inline-flex items-center justify-center self-start border-2 border-[#8A0303] text-[#8A0303] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#8A0303] hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A0303] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F6F1]"
                  onClick={(e) => !selectedProject?.href && e.preventDefault()} // Prevent navigation if no href
                >
                  Visit Project Page
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </section>
  );
}