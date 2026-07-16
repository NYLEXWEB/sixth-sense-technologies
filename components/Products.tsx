"use client";

import Image from "next/image";
import { ArrowRight, Cpu, ShieldAlert, Award, Layers, Video, Smartphone, Key } from "lucide-react";
import { motion } from "framer-motion";
import { productsList } from "@/data/products";

export default function Products() {
  // Helper to map categories to Lucide icons
  const getProductIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "cctv camera":
        return Video;
      case "pt camera":
        return Layers;
      case "nvr system":
        return Cpu;
      case "dvr system":
        return Cpu;
      case "access gate":
        return Key;
      case "intercom door":
        return Smartphone;
      default:
        return Cpu;
    }
  };

  return (
    <section id="products" className="py-20 md:py-24 bg-white bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
              Products Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
              Enterprise Surveillance Hardware
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We supply and integrate certified security hardware backed by official manufacturer warranties and local technical engineering backup.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8F9FB] hover:bg-slate-100 text-text-dark text-xs font-extrabold transition-all border border-slate-200/60 shadow-sm hover:scale-[1.02] cursor-pointer"
            >
              Get Custom Quote
              <ArrowRight className="w-3.5 h-3.5 text-primary" />
            </a>
          </div>
        </div>

        {/* Catalog Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* Bento Card 1: Prominent Partner Badge (Takes full row-span on large screens) */}
          <div className="lg:row-span-2 bg-[#0C0F17] text-white rounded-[32px] p-8 shadow-xl flex flex-col justify-between min-h-[480px] relative overflow-hidden border border-white/[0.04]">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/15 rounded-full blur-3xl -z-0 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 text-primary-hover shadow-sm">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[9px] font-extrabold tracking-widest bg-primary/20 border border-primary/30 px-3 py-1 rounded-full uppercase font-mono text-primary">
                Authorized Partner
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-6 mb-4 leading-tight text-white">
                Official Hikvision Authorized Partner
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-6">
                Our installations feature genuine Hikvision hardware directly imported. This ensures local brand support, original secure firmware upgrades, and valid warranty cycles.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300">
                  <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine Certified Stock Only</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300">
                  <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Factory Firmware Support</span>
                </div>
              </div>
            </div>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-4 bg-white hover:bg-slate-100 text-text-dark font-extrabold text-xs rounded-xl transition-all shadow-md mt-10 relative z-10 cursor-pointer"
            >
              Request Hardware Catalog
              <ArrowRight className="w-3.5 h-3.5 text-primary" />
            </a>
          </div>

          {/* Product Items Bento-style Cards */}
          {productsList.map((product, idx) => {
            const ProductIcon = getProductIcon(product.category);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#F8F9FB] border border-slate-200/50 rounded-[32px] p-6 md:p-8 hover:border-primary/20 hover:shadow-premium-hover hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full font-mono">
                      {product.category}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/40 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:border-primary/20 transition-all shadow-sm">
                      <ProductIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-text-dark mb-5 tracking-tight group-hover:text-primary transition-colors">
                    {product.title}
                  </h4>
                  
                  {/* Technical Specs Capsules Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white border border-slate-200/40 rounded-xl p-2.5 flex flex-col justify-between min-h-[50px] shadow-[0_2px_4px_rgba(0,0,0,0.01)]"
                      >
                        <span className="text-[8px] text-text-muted font-extrabold uppercase tracking-wider font-mono">{spec.label}</span>
                        <span className="text-[10px] text-text-dark font-black truncate">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/60 pt-4 mt-auto">
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">WARRANTY: {product.warranty}</span>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-primary flex items-center gap-1 group/btn cursor-pointer"
                  >
                    Get Quote
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Integrated Suite Block */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#F8F9FB] border border-slate-200/60 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm">
          <div className="lg:w-1/2 relative z-10">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary mb-3 block font-mono">FEATURED INTEGRATED SUITE</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tighter mb-4 leading-tight">
              All-In-One Premises Protection
            </h3>
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-8 font-medium">
              Achieve flawless control over your business or residential premises. We unify Ultra HD CCTV security camera feeds with biometric employee gateways, intercom door systems, and cloud network backup structures into one responsive system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919747168484"
                className="px-6 py-3 bg-text-dark hover:bg-primary text-white text-xs font-extrabold rounded-full transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                Book Free Consultation
              </a>
              <a
                href="#gallery"
                className="px-6 py-3 bg-white border border-slate-200/60 hover:bg-slate-50 text-text-dark text-xs font-extrabold rounded-full transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                View Live Installations
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full aspect-video md:aspect-[2/1] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white">
            <Image
              src="/images/best-cctv-dealer-thiruvananthapuram-security-catalog.png"
              alt="Our premium security systems hardware catalog showcase"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 500px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
