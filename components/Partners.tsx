"use client";

import { useState } from "react";
import { partnersData } from "@/data/partners";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState<string>(partnersData[0].category);

  const activePartners = partnersData.find(cat => cat.category === activeCategory)?.partners || [];
  // Duplicate partners array to ensure continuous scrolling
  const scrollPartners = [...activePartners, ...activePartners, ...activePartners];

  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            Integration Network
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Authorized Technology Partners
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            We partner with elite global hardware and software suppliers to deliver fully integrated, premium solutions.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-border-light pb-6 max-w-4xl mx-auto">
          {partnersData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.category
                  ? "bg-text-dark text-white shadow-md scale-[1.02]"
                  : "bg-[#f8f9fb] text-text-muted hover:text-text-dark border border-border-light/50"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Logo Carousel Container */}
        <div className="relative w-full overflow-hidden py-4 border-y border-border-light/65 bg-[#f8f9fb]/50 rounded-3xl">
          {/* Fading Edges Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex w-max"
            >
              <motion.div
                className="flex gap-6 items-center"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity
                }}
                style={{ width: "max-content" }}
              >
                {scrollPartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 w-[160px] h-[55px] relative rounded-xl bg-white border border-border-light/75 flex items-center justify-center p-3 shadow-sm hover:border-primary/20 transition-all"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Authorized Logo`}
                      fill
                      className="object-contain p-2 filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Verification Note */}
        <div className="flex justify-center items-center gap-2 mt-8 text-[10px] text-text-muted font-mono font-bold uppercase">
          <ShieldCheck className="w-4 h-4 text-success-green" />
          Genuine direct manufacturer sourcing &amp; full warranty support
        </div>

      </div>
    </section>
  );
}
