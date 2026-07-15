"use client";

import { servicesList } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 radial-glow-primary -z-10" />

      <div className="w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            Security &amp; IT Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Comprehensive Digital Infrastructure
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            We engineer premium security, smart home automation, enterprise software solutions, and IT infrastructures to keep modern projects secure and scalable.
          </p>
        </div>

        {/* Infinite Horizontally Moving Slider */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Fading Edges for Premium Look */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/50 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Track (Loops twice for infinite seamless scroll) */}
          <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
            
            {/* Loop 1 */}
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={`loop1-${idx}`}
                  className="bento-card flex flex-col justify-between group overflow-hidden h-[420px] w-[285px] sm:w-[350px] shrink-0 bg-white relative"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-50 shrink-0 select-none">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="350px"
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-50 transition-opacity" />
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                    <div 
                      className="absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none -z-10"
                      style={{ backgroundColor: service.glowColor }}
                    />

                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-3.5 mb-3.5">
                        <div className={`w-9 h-9 rounded-xl bg-[#f8f9fb] border border-border-light flex items-center justify-center ${service.iconColor} shadow-sm shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-4.5 h-4.5 shrink-0" />
                        </div>
                        <h3 className="text-base font-black text-text-dark tracking-tight leading-none">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs text-text-muted leading-relaxed font-semibold">
                        {service.description}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-primary transition-all mt-6 group-hover:gap-2.5"
                    >
                      Book Service
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Loop 2 (Seamless continuation) */}
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={`loop2-${idx}`}
                  className="bento-card flex flex-col justify-between group overflow-hidden h-[420px] w-[285px] sm:w-[350px] shrink-0 bg-white relative"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-50 shrink-0 select-none">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="350px"
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-50 transition-opacity" />
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                    <div 
                      className="absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none -z-10"
                      style={{ backgroundColor: service.glowColor }}
                    />

                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-3.5 mb-3.5">
                        <div className={`w-9 h-9 rounded-xl bg-[#f8f9fb] border border-border-light flex items-center justify-center ${service.iconColor} shadow-sm shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-4.5 h-4.5 shrink-0" />
                        </div>
                        <h3 className="text-base font-black text-text-dark tracking-tight leading-none">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs text-text-muted leading-relaxed font-semibold">
                        {service.description}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-primary transition-all mt-6 group-hover:gap-2.5"
                    >
                      Book Service
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
