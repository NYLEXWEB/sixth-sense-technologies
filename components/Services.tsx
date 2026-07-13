"use client";

import { servicesList } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative bg-grid-pattern">
      <div className="absolute inset-0 radial-glow-primary -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="bento-card p-8 flex flex-col justify-between group h-[290px] relative overflow-hidden"
              >
                {/* Background Ambient Glow on Hover */}
                <div 
                  className="absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: service.glowColor }}
                />

                <div>
                  {/* Icon Block */}
                  <div className={`w-11 h-11 rounded-xl bg-[#f8f9fb] border border-border-light flex items-center justify-center ${service.iconColor} shadow-sm group-hover:scale-105 transition-transform mb-6`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-extrabold text-text-dark mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-primary transition-all mt-auto group-hover:gap-2.5"
                >
                  Book Service
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
