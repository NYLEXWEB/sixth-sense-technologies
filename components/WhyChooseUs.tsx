"use client";

import { ShieldCheck, Headphones, Award, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const advantages = [
    {
      num: "01",
      icon: Award,
      title: "Certified System Engineers",
      description: "Our technicians hold official partner credentials directly from Hikvision. We ensure proper camera angles, structural integrity, and clean cable paths.",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "2-Year Hardware Warranty",
      description: "Every CCTV surveillance camera, digital recorder (DVR/NVR), and biometric controller is backed by an authentic brand warranty and replacement support.",
    },
    {
      num: "03",
      icon: Headphones,
      title: "24/7 Critical Helpdesk",
      description: "Get continuous phone and remote-desktop diagnostics support. We immediately address recording glitches, network drops, or password locks.",
    },
    {
      num: "04",
      icon: Settings,
      title: "Clean Structured Cabling",
      description: "We prevent data packet loss and security vulnerabilities by using heavy-duty shielded CAT6 cables, labeled patch panels, and dust-resistant enclosures.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
            Corporate Advantages
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-6">
            Engineered For Absolute Reliability
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-10 font-medium">
            We don&apos;t just install hardware; we design long-term, fail-safe security and communication infrastructures that protect your investments.
          </p>

          {/* Metric Dashboard block */}
          <div className="grid grid-cols-3 gap-4 border-t border-border-light/75 pt-8">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-text-dark tracking-tight block">97+</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">CLIENTS</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-text-dark tracking-tight block">24/7</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">SUPPORT</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-text-dark tracking-tight block">100%</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">WARRANTY</span>
            </div>
          </div>
        </div>

        {/* Right Feature Cards Column */}
        <div className="lg:col-span-7 space-y-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-border-light rounded-3xl p-6 md:p-8 flex items-start gap-6 shadow-sm hover:shadow-premium hover:scale-[1.01] transition-all duration-300 group"
              >
                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-2xl bg-secondary-bg border border-border-light flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-text-dark flex items-center gap-2 group-hover:text-primary transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
