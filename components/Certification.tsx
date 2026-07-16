"use client";

import { Award, ShieldCheck, RefreshCw, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Certification() {
  const certifications = [
    {
      icon: Award,
      title: "Direct Brand Warranty",
      desc: "Instant replacement backup direct from Hikvision channels, avoiding third-party delay.",
    },
    {
      icon: RefreshCw,
      title: "Firmware Upgrades",
      desc: "Authorized access to secure patch registries preventing security hacks.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Diagnostics",
      desc: "Our engineers are qualified in IP network subnet routing and camera channel mapping.",
    },
  ];

  return (
    <section id="certification" className="py-20 md:py-24 bg-[#111827] text-white relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Certification Detail */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-primary-hover font-mono">
            AUTHORIZED SYSTEM PARTNER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-tight">
            Why Certified Installation Matters
          </h2>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
            Installing surveillance systems requires certified network configuration. Unlicensed installations run the risk of network conflicts, insecure firmware, and invalid warranties. As certified partners, we guarantee authentic, secure, and fully warrantied hardware integrations.
          </p>

          {/* Verification Badge */}
          <div className="border border-white/10 bg-white/5 rounded-2xl p-5 flex items-center gap-4 max-w-md">
            <div className="w-10 h-10 rounded-xl bg-success-green/20 border border-success-green/30 flex items-center justify-center text-success-green shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-white/40 block tracking-wider uppercase font-mono">PARTNER ID VERIFICATION</span>
              <p className="text-xs font-bold text-white leading-relaxed mt-0.5">
                Hikvision India Installer Registry: Verified Status Active
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Perks Grid */}
        <div className="lg:col-span-6 space-y-6">
          {certifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex gap-5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-primary-hover group-hover:scale-105 transition-transform shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-medium">
                    {item.desc}
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
