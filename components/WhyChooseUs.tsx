"use client";

import {
  Globe,
  Wrench,
  Building2,
  GraduationCap,
  Award,
  Headphones,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Globe,
      title: "International Experience",
      description: "Deploying enterprise networks and systems across India and key Middle East regions, adhering to international compliance standards.",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "We use heavy-duty shielded cabling, labeled patch arrays, and clean conduits to ensure clean aesthetics and zero signal drop.",
    },
    {
      icon: Building2,
      title: "Enterprise Grade Solutions",
      description: "We design robust systems tailored for scale, serving builders, corporate campuses, residences, and warehouses.",
    },
    {
      icon: GraduationCap,
      title: "Certified Engineers",
      description: "Our staff holds official technical credentials directly from global brands like Hikvision, ensuring top-tier diagnostics.",
    },
    {
      icon: Award,
      title: "Premium Brands",
      description: "We deploy genuine products from Zoho, Odoo, Oracle, Hikvision, Dahua, and Honeywell to ensure valid warranties and secure firmware.",
    },
    {
      icon: Headphones,
      title: "After Sales Support",
      description: "Get dedicated 24/7 helpline access, remote desk configurations, and priority on-site assistance through AMCs.",
    },
    {
      icon: Zap,
      title: "Future Ready Technology",
      description: "Integrating smart gates, biometric sensors, and AI-enabled video security systems into unified digital controls.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
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
              <span className="text-2xl sm:text-3xl font-black text-text-dark tracking-tight block">500+</span>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider font-mono">PROJECTS</span>
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
