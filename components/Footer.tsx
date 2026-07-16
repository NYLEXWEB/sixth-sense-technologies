"use client";

import { Eye, Facebook, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "CCTV Integration", href: "#services" },
    { name: "Smart WiFi Cameras", href: "#services" },
    { name: "Structured Cabling", href: "#services" },
    { name: "Gate Automation", href: "#services" },
    { name: "Enterprise Software", href: "#services" },
    { name: "IT Infrastructure", href: "#services" },
  ];

  const countries = [
    { name: "India Operations", href: "#countries" },
    { name: "Saudi Arabia", href: "#countries" },
    { name: "Oman", href: "#countries" },
    { name: "United Arab Emirates", href: "#countries" },
  ];

  const partners = [
    { name: "Hikvision", href: "#partners" },
    { name: "Dahua", href: "#partners" },
    { name: "CP Plus", href: "#partners" },
    { name: "Zoho", href: "#partners" },
    { name: "Odoo", href: "#partners" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#f8f9fb] border-t border-border-light/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border-light">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-text-dark flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <Eye className="w-4 h-4 text-white" />
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
            <p className="text-xs text-text-muted leading-relaxed max-w-sm font-medium">
              Senixglobal is an international technology company providing digital infrastructure and security integrations. Operating in India as Sixth Sense Technologies.
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
                className="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm cursor-pointer"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/919747168484"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm cursor-pointer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
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
          <div className="lg:col-span-2 space-y-4">
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

          {/* Partners Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-extrabold text-text-dark uppercase tracking-widest font-mono">Partners</h4>
            <ul className="space-y-2">
              {partners.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-xs text-text-muted hover:text-primary transition-colors font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-extrabold text-text-dark uppercase tracking-widest font-mono">Countries</h4>
            <ul className="space-y-2">
              {countries.map((item, idx) => (
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
            &copy; {currentYear} Senixglobal. India Operations: Sixth Sense Technologies. All Rights Reserved. Client Presentation Edition.
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
