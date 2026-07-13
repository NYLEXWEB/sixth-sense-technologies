"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none mt-4 sm:mt-6">
        <nav
          className={`w-full max-w-5xl rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between px-6 md:px-8 py-3 ${
            isScrolled
              ? "glass-nav shadow-lg shadow-black/[0.03]"
              : "bg-white/40 border border-transparent backdrop-blur-sm"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-text-dark flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <Eye className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-tight text-text-dark block leading-none uppercase">
                SENIXGLOBAL
              </span>
              <span className="text-[7px] font-extrabold tracking-widest text-primary block mt-0.5 font-mono uppercase">
                GLOBAL TECHNOLOGY
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-semibold text-text-muted hover:text-text-dark transition-colors relative py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+919747168484"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-text-dark hover:bg-primary text-white text-[11px] font-bold transition-all shadow-sm hover:shadow hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-full text-text-dark hover:bg-secondary-bg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-text-dark hover:text-primary transition-colors py-2 border-b border-border-light/55 last:border-0"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+919747168484"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-text-dark hover:bg-primary text-white text-xs font-bold transition-colors mt-2 shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
