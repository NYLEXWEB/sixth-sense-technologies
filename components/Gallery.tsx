"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const photos = [
    {
      src: "/images/gallery-1.webp",
      title: "Biometric Entrance Gateway",
      category: "Access Control",
      location: "Technopark, Trivandrum",
      techUsed: "Hikvision DS-K1T341AM Face Terminal, Magnetic Lock",
    },
    {
      src: "/images/gallery-2.webp",
      title: "Driveway Surveillance Bullet",
      category: "CCTV Installation",
      location: "Private Residence, Kowdiar",
      techUsed: "Hikvision 4MP IP Varifocal Bullet Camera, CAT6 Shielded",
    },
    {
      src: "/images/gallery-3.webp",
      title: "Smart Intercom Villa Gate",
      category: "Video Door Phone",
      location: "Independent Villa, Sasthamangalam",
      techUsed: "Hikvision DS-KIS602 IP Video Intercom Suite, App sync",
    },
    {
      src: "/images/gallery-4.webp",
      title: "Enterprise Structured Server Rack",
      category: "IT Networking",
      location: "Financial Corp Office, Pulimoodu",
      techUsed: "24-Port Gigabit PoE Switch, CAT6 Patch Panel, Server Tower",
      panoramic: true,
    },
  ];

  const handlePrev = () => {
    if (activePhotoIdx !== null) {
      setActivePhotoIdx(prev => (prev === 0 ? photos.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = () => {
    if (activePhotoIdx !== null) {
      setActivePhotoIdx(prev => (prev === photos.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
            Recent Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Our Installation Portfolio
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Take a look at our professional security setups, structured cables, and network server racks across Trivandrum.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setActivePhotoIdx(idx)}
              className={`group cursor-pointer rounded-3xl overflow-hidden bg-white border border-border-light shadow-sm hover:shadow-premium hover:scale-[1.01] transition-all duration-300 ${
                photo.panoramic ? "lg:col-span-3 aspect-video md:aspect-[3/1] lg:aspect-[4/1]" : "aspect-[4/3] lg:aspect-[1/1]"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 400px"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary-hover mb-2 font-mono">
                    {photo.category}
                  </span>
                  <h3 className="text-base font-extrabold text-white flex items-center gap-2 mb-1">
                    {photo.title}
                    <ZoomIn className="w-4 h-4 text-white/50" />
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] text-white/60 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    {photo.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Frosted Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
          >
            {/* Close trigger background */}
            <div className="absolute inset-0" onClick={() => setActivePhotoIdx(null)} />

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-55 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all pointer-events-auto border border-white/5"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-55 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all pointer-events-auto border border-white/5"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Modal Card */}
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              className="relative w-full max-w-4xl bg-[#111827] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col z-10"
            >
              {/* Top Control Bar */}
              <div className="px-6 py-4 border-b border-white/5 bg-[#1f2937]/50 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/40 tracking-widest font-extrabold uppercase">
                  Project Installation Inspection
                </span>
                <button
                  onClick={() => setActivePhotoIdx(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Image Area */}
              <div className="relative aspect-video w-full bg-black">
                <Image
                  src={photos[activePhotoIdx].src}
                  alt={photos[activePhotoIdx].title}
                  fill
                  className="object-contain"
                  sizes="(max-w-1024px) 100vw, 900px"
                />
              </div>

              {/* Bottom Specs & Location bar */}
              <div className="p-6 md:p-8 bg-black border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] font-extrabold tracking-widest text-primary-hover uppercase block mb-1 font-mono">
                    {photos[activePhotoIdx].category}
                  </span>
                  <h4 className="text-lg font-extrabold text-white mb-2">
                    {photos[activePhotoIdx].title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-white/60 font-bold">
                    <MapPin className="w-4 h-4 text-primary" />
                    {photos[activePhotoIdx].location}
                  </div>
                </div>
                
                {/* Tech specifications of installation */}
                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
                  <span className="text-[9px] font-extrabold text-white/40 tracking-wider uppercase block mb-1.5 font-mono">
                    HARDWARE SPECIFICATION LOGS
                  </span>
                  <p className="text-xs text-white/80 font-mono leading-relaxed">
                    {photos[activePhotoIdx].techUsed}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
