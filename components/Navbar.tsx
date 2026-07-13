"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme detection
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to light theme
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Industries", href: "#industries" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`w-full max-w-7xl rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "glass-nav shadow-lg"
              : "bg-transparent border border-transparent"
          }`}
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
            <div className="flex flex-col">
              <span className="text-[11px] font-black tracking-tight leading-none text-text-dark">
                SENIXGLOBAL
              </span>
              <span className="text-[8px] font-extrabold text-primary tracking-widest leading-none mt-0.5 uppercase">
                India
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

          {/* CTA & Theme Switcher (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted hover:text-text-dark hover:bg-secondary-bg/50 transition-all cursor-pointer"
              aria-label="Toggle Theme"
              suppressHydrationWarning
            >
              {theme === "light" ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5 text-yellow-400" />}
            </button>
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
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-text-dark hover:bg-secondary-bg/50 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
              suppressHydrationWarning
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full text-text-dark hover:bg-secondary-bg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-colors mt-2 shadow-md"
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
