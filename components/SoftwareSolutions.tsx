"use client";

import { useState, useEffect } from "react";
import { softwareSolutionsList } from "@/data/software";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoftwareSolutions() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % softwareSolutionsList.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % softwareSolutionsList.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + softwareSolutionsList.length) % softwareSolutionsList.length);
  };

  const sol = softwareSolutionsList[currentIdx];
  const Icon = sol.icon;

  return (
    <section id="software" className="py-32 bg-[#05070A] relative overflow-hidden">
      {/* Dark Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            Enterprise Platforms
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4">
            Premium Software Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            We design, build, and integrate high-throughput business software and automation platforms for modern organizations.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative min-h-[460px] md:min-h-[400px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fading Slider Track using AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="w-full bg-[#0C0F17] border border-white/[0.05] rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(15,108,189,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12"
            >
              {/* Left Side: Detail Overview */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight mb-4 leading-tight">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold mb-6">
                    {sol.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-wider uppercase text-primary transition-all mt-4 hover:gap-3 shrink-0"
                >
                  Book Software Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right Side: Features Checklist */}
              <div className="md:w-1/2 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/[0.05] pt-6 md:pt-0 md:pl-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono block">
                  Core Capabilities
                </span>
                <ul className="space-y-3.5">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-success-green/10 border border-success-green/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-success-green" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-15px] md:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-md hover:scale-105 active:scale-95 transition-all shadow-sm z-10 cursor-pointer"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-15px] md:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-md hover:scale-105 active:scale-95 transition-all shadow-sm z-10 cursor-pointer"
            aria-label="Next solution"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {softwareSolutionsList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIdx === idx ? "w-6 bg-primary" : "w-1.5 bg-white/10 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
