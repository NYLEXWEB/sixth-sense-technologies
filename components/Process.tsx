"use client";

import { Phone, MapPin, FileText, CheckSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      stepNum: "01",
      icon: Phone,
      title: "Initial Inquiry",
      description: "Contact our team via call or WhatsApp. We discuss basic requirements and log your location.",
      color: "from-blue-500/10 to-indigo-500/5",
      borderColor: "group-hover:border-blue-500/30",
    },
    {
      stepNum: "02",
      icon: MapPin,
      title: "Free Premises Audit",
      description: "Our engineers inspect the site to map network routes, camera placements, and cabling pathways.",
      color: "from-purple-500/10 to-pink-500/5",
      borderColor: "group-hover:border-purple-500/30",
    },
    {
      stepNum: "03",
      icon: FileText,
      title: "Itemized Proposal",
      description: "Receive a transparent quotation detailing exact brand model numbers, mounting costs, and cables.",
      color: "from-amber-500/10 to-orange-500/5",
      borderColor: "group-hover:border-amber-500/30",
    },
    {
      stepNum: "04",
      icon: CheckSquare,
      title: "System Integration",
      description: "We deploy qualified engineers to mount hardware, run CAT6 cables, and setup remote app viewing.",
      color: "from-emerald-500/10 to-teal-500/5",
      borderColor: "group-hover:border-emerald-500/30",
    },
    {
      stepNum: "05",
      icon: ShieldCheck,
      title: "Post-Install Support",
      description: "Ongoing support contracts (AMC), brand warranty backings, and instant remote diagnostic support.",
      color: "from-cyan-500/10 to-blue-500/5",
      borderColor: "group-hover:border-cyan-500/30",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden bg-grid-pattern relative">
      <div className="absolute inset-0 radial-glow-success -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            Workflow Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Our Five-Step Integration Process
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            From your first consult to long-term post-installation tech support, we ensure a seamless and transparent workflow.
          </p>
        </div>

        {/* Process Roadmap Timeline */}
        <div className="relative w-full max-w-5xl mx-auto mt-16">
          
          {/* Vertical Progress Line (Centered on desktop, left-aligned on mobile) */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-gradient-to-b from-primary via-[#0b5c9f] to-slate-200/80 -translate-x-1/2 -z-10" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-stretch md:justify-between w-full relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Pulse Indicator Badge (Centered on desktop, left-aligned on mobile) */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md">
                      <span className="text-[10px] font-black text-primary font-mono">{step.stepNum}</span>
                    </div>
                    {/* Glowing outer wash ring */}
                    <div className="absolute -inset-1.5 rounded-full bg-primary/10 animate-ping -z-10 duration-2000" />
                  </div>

                  {/* Staged Card Content (Column left or right) */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className={`group p-6 md:p-8 bg-[#F8F9FB] border border-slate-200/50 hover:bg-white rounded-3xl transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-premium-hover flex gap-5 items-start ${step.borderColor}`}
                    >
                      {/* Step Icon inside small colored box */}
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-105 shadow-sm`}>
                        <Icon className="w-5.5 h-5.5" />
                      </div>

                      <div className="space-y-2 text-left">
                        <span className="text-[9px] font-mono font-extrabold text-primary tracking-widest uppercase block">
                          Step {step.stepNum}
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-text-dark leading-tight group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs text-text-muted leading-relaxed font-semibold">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
