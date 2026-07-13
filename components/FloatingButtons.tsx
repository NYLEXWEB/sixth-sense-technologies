"use client";

import { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Floating Actions (Hidden on Mobile, shown on MD and up) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white border border-border-light text-text-dark flex items-center justify-center shadow-lg hover:bg-secondary-bg hover:scale-105 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Link */}
        <a
          href="https://wa.me/919747168484?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20security%20system%20installation."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-success-green text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>

        {/* Call Link */}
        <a
          href="tel:+919747168484"
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA (Shown ONLY on Mobile screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border-light shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-3 flex gap-3">
        <a
          href="tel:+919747168484"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-colors shadow-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="https://wa.me/919747168484?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20security%20system%20installation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-success-green hover:bg-success-green/90 text-white text-xs font-bold transition-colors shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
