"use client";

import { Award, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
  const trustBadges = [
    {
      icon: Award,
      title: "Certified Partner",
      subtitle: "OFFICIAL HIKVISION SUPPLY",
    },
    {
      icon: ShieldCheck,
      title: "2-Year Warranty",
      subtitle: "ON ALL PRIMARY CAMERA LINES",
    },
    {
      icon: CheckCircle2,
      title: "100% Genuine",
      subtitle: "ORIGINAL FIRMWARE BACKUP",
    },
  ];

  return (
    <section className="bg-white pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full bg-[#f8f9fb] border border-border-light rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Rating Block */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-start gap-4 text-center sm:text-left lg:text-center xl:text-left">
            <div className="flex flex-col items-center justify-center bg-white border border-border-light w-16 h-16 rounded-2xl shadow-sm shrink-0">
              <span className="text-xl font-black text-text-dark leading-none">5.0</span>
              <div className="flex text-amber-500 gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-text-dark tracking-tight mb-1">
                Top Rated CCTV Installer
              </h3>
              <p className="text-[11px] text-text-muted leading-relaxed max-w-[220px]">
                Verified by 97+ Thiruvananthapuram residential and commercial customer reviews on Google.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block lg:col-span-1 justify-self-center h-10 w-px bg-border-light" />

          {/* Right badges */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-text-dark leading-none mb-1">
                      {badge.title}
                    </h4>
                    <span className="text-[9px] font-bold text-text-muted tracking-wider block font-mono">
                      {badge.subtitle}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
