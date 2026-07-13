"use client";

import { Phone, MapPin, FileText, CheckSquare, ShieldCheck, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      stepNum: "01",
      icon: Phone,
      title: "Initial Inquiry",
      description: "Contact our team via call or WhatsApp. We discuss basic requirements and log your location.",
    },
    {
      stepNum: "02",
      icon: MapPin,
      title: "Free Premises Audit",
      description: "Our engineers inspect the site to map network routes, camera placements, and cabling pathways.",
    },
    {
      stepNum: "03",
      icon: FileText,
      title: "Itemized Proposal",
      description: "Receive a transparent quotation detailing exact brand model numbers, mounting costs, and cables.",
    },
    {
      stepNum: "04",
      icon: CheckSquare,
      title: "System Integration",
      description: "We deploy qualified engineers to mount hardware, run CAT6 cables, and setup remote app viewing.",
    },
    {
      stepNum: "05",
      icon: ShieldCheck,
      title: "Post-Install Support",
      description: "Ongoing support contracts (AMC), brand warranty backings, and instant remote diagnostic support.",
    },
  ];

  return (
    <section className="py-32 bg-white overflow-hidden bg-grid-pattern relative">
      <div className="absolute inset-0 radial-glow-success -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
            Workflow Roadmap
          </div>
          <p className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Our Five-Step Integration Process
          </p>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            From your first consult to long-term post-installation tech support, we ensure a seamless and transparent workflow.
          </p>
        </div>

        {/* Process Roadmap Row */}
        <div className="relative flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-6">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px border-t border-dashed border-border-light hidden lg:block -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 relative w-full group">
                {/* Step Circle Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="w-20 h-20 rounded-full bg-white border border-border-light flex items-center justify-center text-primary shadow-md group-hover:border-primary group-hover:shadow-lg transition-all mb-8 mx-auto lg:mx-0 shrink-0"
                >
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </motion.div>

                {/* Content Block */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
                  className="px-4 lg:px-0 space-y-2"
                >
                  <span className="text-[9px] font-mono font-extrabold text-primary block tracking-widest uppercase">
                    STEP {step.stepNum}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-text-dark">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed max-w-[210px] mx-auto lg:mx-0 font-medium">
                    {step.description}
                  </p>
                </motion.div>

                {/* Mobile Connector Arrow */}
                {idx < steps.length - 1 && (
                  <div className="my-6 lg:hidden text-primary/30 flex justify-center w-full">
                    <ArrowDown className="w-5 h-5 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
