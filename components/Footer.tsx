"use client";

import { Eye, Facebook, Instagram, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "CCTV Integration", href: "#services" },
    { name: "WiFi Camera Setup", href: "#services" },
    { name: "Structured Networking", href: "#services" },
    { name: "Biometric Gates", href: "#services" },
    { name: "Access Control Systems", href: "#services" },
    { name: "Video Door Phones", href: "#services" },
  ];

  const products = [
    { name: "IP Dome Cameras", href: "#products" },
    { name: "Smart PT Cameras", href: "#products" },
    { name: "Network Recorders (NVR)", href: "#products" },
    { name: "Digital Recorders (DVR)", href: "#products" },
    { name: "Biometric Scanners", href: "#products" },
    { name: "Video Intercoms", href: "#products" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#f8f9fb] border-t border-border-light/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border-light">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-text-dark flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight text-text-dark block leading-none">
                  SIXTH SENSE
                </span>
                <span className="text-[8px] font-extrabold tracking-widest text-primary block mt-0.5 font-mono">
                  TECHNOLOGIES
                </span>
              </div>
            </a>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm font-medium">
              We design and integrate high-fidelity CCTV camera surveillance, enterprise IT networking loops, and biometric access control panels across Thiruvananthapuram.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com/sixthsensetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com/sixthsense_technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/919747168484"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+919747168484"
                className="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm"
                aria-label="Phone"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-extrabold text-text-dark uppercase tracking-widest font-mono">Company</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs text-text-muted hover:text-primary transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-extrabold text-text-dark uppercase tracking-widest font-mono">Services</h4>
            <ul className="space-y-2">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-xs text-text-muted hover:text-primary transition-colors font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-extrabold text-text-dark uppercase tracking-widest font-mono">Products</h4>
            <ul className="space-y-2">
              {products.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-xs text-text-muted hover:text-primary transition-colors font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-center md:text-left">
          <p className="text-[11px] text-text-muted font-medium">
            &copy; {currentYear} Sixth Sense Technologies. All Rights Reserved. Client Presentation Edition.
          </p>
          <div className="flex gap-4">
            <a href="#about" className="text-[11px] text-text-muted hover:text-primary transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#contact" className="text-[11px] text-text-muted hover:text-primary transition-colors font-medium">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
