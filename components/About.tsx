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
            Global Engineering, Local Precision
          </h2>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
            Senixglobal is an international technology company providing digital infrastructure and custom solutions. In India, we operate as Sixth Sense Technologies in Thiruvananthapuram, serving residential, commercial, and government partners with certified integrations.
          </p>

          {/* Visual Timeline */}
          <div className="space-y-5 my-8 border-l border-border-light/80 pl-6 relative">
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
              <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider font-mono">Global Brand</h4>
              <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed font-medium">
                Senixglobal is established as an international technology provider, specializing in enterprise systems and IT architectures.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
              <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider font-mono">India Operations</h4>
              <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed font-medium">
                Operating in India as Sixth Sense Technologies, leading security loops, CCTV, smart automation, and local IT networking integrations in Thiruvananthapuram.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-success-green border-4 border-white shadow-sm animate-pulse" />
              <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider font-mono">Middle East Expansion</h4>
              <p className="text-[11px] text-text-muted mt-0.5 leading-relaxed font-medium">
                Expanding services across Saudi Arabia, Oman, and the United Arab Emirates, building robust security loops, automated gates, and custom enterprise software.
              </p>
            </div>
          </div>

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
              suppressHydrationWarning
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
                src="/images/networking-model.png"
                alt="Our certified network engineer model inspecting datacenter systems"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 460px"
              />
              
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/50 flex items-center gap-2 text-[10px] text-text-dark font-extrabold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                CERTIFIED FIELD ENGINEERING
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
                  suppressHydrationWarning
                  className="p-1.5 rounded-full hover:bg-secondary-bg text-text-muted transition-colors border border-border-light"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Story Content */}
              <div className="space-y-4 text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                <p>
                  Senixglobal was founded as an international technology company built to serve enterprise clients with unified security and IT architectures. In India, we operate as Sixth Sense Technologies, delivering high-end engineering standards directly to residences, corporations, and builders in Thiruvananthapuram, Kerala.
                </p>
                <p>
                  By partnering directly with official global giants, we established a pipeline of genuine equipment supplies, secure firmware upgrades, and valid warranty cycles. We train our engineers in advanced optical networking, system firewalls, and server-side software deployments.
                </p>
                <p>
                  With our expansion into the Middle East—specifically Saudi Arabia, Oman, and the United Arab Emirates—we have brought our certified security solutions, building management software, and custom business automation platforms to a global audience.
                </p>
              </div>

              <div className="border-t border-border-light/65 pt-6 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-text-dark font-extrabold">
                  <MapPin className="w-4 h-4 text-primary" />
                  India: Trivandrum | Middle East: Riyadh, Muscat, Dubai
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  suppressHydrationWarning
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
