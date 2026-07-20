"use client";

import { useState } from "react";
import { Menu, X, Phone, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqList } from "@/data/faq";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);
  const [activeModalFaqIdx, setActiveModalFaqIdx] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="w-full max-w-7xl rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 bg-transparent border border-transparent shadow-none"
        >
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* interlocking blue 'S' logo SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-none stroke-primary stroke-[16] stroke-round transition-transform group-hover:scale-105"
                style={{ strokeLinejoin: "round", strokeLinecap: "round" }}
              >
                {/* Upper curve of the 'S' */}
                <path d="M 75,28 C 75,12 25,12 25,32 C 25,52 75,48 75,68 C 75,88 25,88 25,72" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-text-dark block leading-none uppercase">
                  SENIXGLOBAL
                </span>
                <span className="text-[8px] font-mono font-extrabold bg-primary/10 border border-primary/25 text-primary px-1.5 py-0.5 rounded-full uppercase leading-none tracking-wide">
                  Sixth Sense India
                </span>
              </div>
              <span className="text-[7px] font-extrabold tracking-widest text-text-muted block mt-1 font-mono uppercase">
                GLOBAL TECHNOLOGY &amp; SECURITY SYSTEMS
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = item.name === "Home";
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-semibold relative py-1 transition-all ${
                    isActive ? "text-primary font-bold" : "text-text-muted hover:text-text-dark"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919747168484"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-[11px] font-bold transition-all shadow-sm hover:shadow hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              Call Now
            </a>
          </div>

          {/* Mobile Theme Toggle & Menu Toggle Wrapper */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full text-text-dark hover:bg-secondary-bg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 top-[84px] z-50 bg-white border border-border-light rounded-3xl p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isFaq = item.name === "FAQ";
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsOpen(false);
                      if (isFaq) {
                        setShowFaqModal(true);
                      } else {
                        // Scroll to element manually
                        const el = document.querySelector(item.href);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="text-sm font-semibold text-text-dark hover:text-primary transition-colors py-2 border-b border-border-light/55 last:border-0 text-left w-full cursor-pointer"
                  >
                    {item.name}
                  </button>
                );
              })}
              <a
                href="tel:+919747168484"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-colors mt-2 shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile FAQ Overlay Modal */}
      <AnimatePresence>
        {showFaqModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="bg-white border border-slate-200 rounded-[32px] w-full max-w-xl max-h-[80vh] overflow-y-auto p-6 shadow-2xl relative scrollbar-none"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-6 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base font-black text-slate-900">Frequently Asked Questions</span>
                </div>
                <button
                  onClick={() => setShowFaqModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center text-slate-500 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* FAQ Accordions List */}
              <div className="space-y-3.5">
                {faqList.map((faq, idx) => {
                  const isLocalOpen = activeModalFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50/50 border border-slate-200/40 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveModalFaqIdx(isLocalOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="text-xs font-bold text-slate-800 pr-3">
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isLocalOpen ? "rotate-180 text-primary" : ""}`} />
                      </button>

                      {isLocalOpen && (
                        <div className="px-4 pb-4 pt-1.5 border-t border-slate-200/20 text-xs text-slate-500 leading-relaxed font-semibold bg-white">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
