"use client";

import { softwareSolutionsList } from "@/data/software";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function SoftwareSolutions() {
  return (
    <section id="software" className="py-32 bg-white relative bg-grid-pattern">
      <div className="absolute inset-0 radial-glow-success -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
              Enterprise Platforms
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
              Premium Software Solutions
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We design, build, and integrate high-throughput business software and automation platforms for modern organizations.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary-bg hover:bg-border-light text-text-dark text-xs font-bold transition-all border border-border-light shadow-sm"
            >
              Request Custom Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {softwareSolutionsList.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-secondary-bg border border-border-light rounded-3xl p-6 md:p-8 hover:shadow-premium hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-primary mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-extrabold text-text-dark mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-medium mb-6">
                    {sol.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 border-t border-border-light/60 pt-4 mb-6">
                    {sol.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-[10px] font-bold text-text-dark">
                        <Check className="w-3.5 h-3.5 text-success-green shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1 group/btn mt-auto pt-4 border-t border-border-light/60"
                >
                  Consult Expert
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
