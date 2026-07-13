"use client";

import { motion } from "framer-motion";
import { countriesData } from "@/data/countries";
import { Globe, MapPin } from "lucide-react";
import Image from "next/image";

export default function InternationalPresence() {
  return (
    <section id="countries" className="py-32 bg-[#f8f9fb] relative overflow-hidden">
      <div className="absolute inset-0 radial-glow-primary -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            Global Footprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Our International Presence
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Senixglobal delivers enterprise grade technology installations and custom business systems across the Indian subcontinent and GCC region.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countriesData.map((country, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-border-light rounded-3xl p-8 hover:shadow-premium hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-[280px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-7 relative rounded overflow-hidden shadow-sm border border-border-light/80 shrink-0">
                    <Image
                      src={`/flags/${country.code.toLowerCase()}.svg`}
                      alt={`${country.name} flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider font-mono px-2.5 py-1 bg-secondary-bg border border-border-light rounded-full text-text-muted">
                    {country.status}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-text-dark mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {country.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-medium">
                  {country.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-primary tracking-wider uppercase border-t border-border-light/60 pt-4 mt-auto">
                <Globe className="w-3.5 h-3.5" />
                SENIXGLOBAL REGION
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
