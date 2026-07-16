"use client";

import { Phone, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-[#111827] border border-white/10 p-8 md:p-16 text-center flex flex-col items-center">
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          {/* Spotlight Glow */}
          <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-primary-hover mb-8 relative z-10">
            <Shield className="w-5 h-5 text-white" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4 max-w-2xl relative z-10">
            Ready to Secure Your Premises?
          </h2>
          
          <p className="text-white/60 text-xs sm:text-sm max-w-md mb-10 leading-relaxed font-medium relative z-10">
            Get in touch with our certified engineers today. We provide free site visits and transparent quotations across Thiruvananthapuram.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="tel:+919747168484"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-secondary-bg text-text-dark text-xs font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call: +91 97471 68484
            </a>
            <a
              href="https://wa.me/919747168484?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20security%20system%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-success-green hover:bg-[#20ba56] text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <FaWhatsapp className="w-4.5 h-4.5" />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
