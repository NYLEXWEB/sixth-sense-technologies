"use client";

import { useState } from "react";
import { faqList } from "@/data/faq";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#f8f9fb] relative overflow-hidden hidden md:block">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            Support Desk
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Find answers to commonly asked questions about our global capabilities, hardware warranty, and services.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-border-light rounded-3xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  suppressHydrationWarning
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-secondary-bg/50 transition-colors"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm md:text-base font-extrabold text-text-dark">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-185 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-border-light/45">
                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
