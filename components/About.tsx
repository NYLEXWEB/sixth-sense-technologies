"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: "Installations", val: "500+" },
    { label: "Staff Engineers", val: "10+" },
    { label: "Warranty Claims Settled", val: "100%" },
  ];

  return (
    <section id="about" className="py-32 bg-white relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Column: About Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-2">
            Corporate Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight">
            Protecting What Matters Most Since 2018
          </h2>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
            Based in Pulimoodu, Thiruvananthapuram, Sixth Sense Technologies provides custom security integrations and IT support solutions. From setting up residential smart WiFi camera loops to wiring high-throughput server networks, we configure systems with precision.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 border-y border-border-light/75 py-8 my-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-black text-text-dark tracking-tight block">
                  {stat.val}
                </span>
                <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-text-dark hover:bg-primary text-white text-xs font-bold transition-all shadow-sm hover:scale-[1.02]"
            >
              Read Our Full Story
              <BookOpen className="w-4 h-4 text-white" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-secondary-bg text-text-dark text-xs font-bold border border-border-light shadow-sm transition-all hover:scale-[1.02]"
            >
              Speak to Consultant
            </a>
          </div>
        </div>

        {/* Right Column: Glassmorphic Control Center Image Mockup */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <div className="w-full max-w-[460px] bg-white border border-border-light rounded-3xl p-3 shadow-xl relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl -z-10" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-light/60">
              <Image
                src="/images/about.webp"
                alt="Active command control monitoring center feed"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 460px"
              />
              
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/50 flex items-center gap-2 text-[10px] text-text-dark font-extrabold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                SURVEILLANCE CONTROL CENTER
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Slide-in Full Story Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Click backdrop to close */}
            <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.97, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 15 }}
              className="relative w-full max-w-2xl bg-white border border-border-light rounded-3xl p-8 shadow-2xl z-10 space-y-6 overflow-y-auto max-h-[85vh]"
            >
              <div className="flex items-center justify-between border-b border-border-light/65 pb-4">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary block font-mono">ABOUT US PORTAL</span>
                  <h3 className="text-xl font-extrabold text-text-dark mt-0.5">
                    Our Mission &amp; Foundation
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-secondary-bg text-text-muted transition-colors border border-border-light"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Story Content */}
              <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                <p>
                  Sixth Sense Technologies was founded with a clear objective: to bring high-end engineering standards to security systems and local IT setups in Thiruvananthapuram. We recognized that most clients faced unreliable wiring, lack of warranty backups, and delayed support.
                </p>
                <p>
                  By partnering directly with official brands like Hikvision, we established a pipeline of genuine product supplies and technical updates. We train our engineers to handle complex network topologies, firewall routing, and optical cabling layouts.
                </p>
                <p>
                  Today, we support over 500 residences, corporate offices, builders, and educational institutions in Thiruvananthapuram. Whether installing simple smart cameras or wiring enterprise network racks, our commitment to neat layouts and reliable support remains unchanged.
                </p>
              </div>

              <div className="border-t border-border-light/65 pt-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-text-dark font-extrabold">
                  <MapPin className="w-4 h-4 text-primary" />
                  Pulimoodu Junction, Trivandrum
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-text-dark hover:bg-primary text-white text-xs font-bold rounded-full transition-all shadow-sm"
                >
                  Close Document
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
