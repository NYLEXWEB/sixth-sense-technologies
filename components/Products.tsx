"use client";

import Image from "next/image";
import { ArrowRight, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const productsList = [
    {
      title: "Hikvision IP Dome Camera",
      specs: [
        { label: "Lens", val: "4MP Ultra HD" },
        { label: "Night Vision", val: "30m Infrared" },
        { label: "Resistance", val: "IK10 Vandal-Proof" },
        { label: "Power Source", val: "PoE Supported" }
      ],
      category: "CCTV Camera",
    },
    {
      title: "Hikvision Smart Pan-Tilt (PT)",
      specs: [
        { label: "Rotation", val: "360° Pan / 90° Tilt" },
        { label: "Tracking", val: "AI Human & Vehicle" },
        { label: "Audio", val: "Two-way talkback" },
        { label: "Access Ports", val: "WiFi & Ethernet" }
      ],
      category: "PT Camera",
    },
    {
      title: "Enterprise Network Recorder",
      specs: [
        { label: "Channels", val: "8 / 16 / 32 IP Inputs" },
        { label: "Resolution", val: "Up to 8K Recording" },
        { label: "Security", val: "Dual-OS Protection" },
        { label: "Format Code", val: "H.265+ Compression" }
      ],
      category: "NVR System",
    },
    {
      title: "Digital Video Recorder (DVR)",
      specs: [
        { label: "Channels", val: "4 / 8 / 16 Analog Inputs" },
        { label: "Resolution", val: "5MP HD Live Feed" },
        { label: "Signals", val: "HDTVI / AHD / CVI" },
        { label: "Search Mode", val: "Smart Event Search" }
      ],
      category: "DVR System",
    },
    {
      title: "Biometric Access Controller",
      specs: [
        { label: "Storage", val: "10,000+ Fingerprints" },
        { label: "Verification", val: "Card / Finger / PIN" },
        { label: "Protocols", val: "TCP/IP & RS485" },
        { label: "Integrations", val: "Fire Alarm Ready" }
      ],
      category: "Access Gate",
    },
    {
      title: "HD Video Door Phone System",
      specs: [
        { label: "Display", val: "7-Inch Touch Monitor" },
        { label: "Lens Angle", val: "1080p Wide View" },
        { label: "Smart Link", val: "WiFi Phone App" },
        { label: "Locks Link", val: "Electronic Relays" }
      ],
      category: "Intercom Door",
    },
  ];

  return (
    <section id="products" className="py-32 bg-white bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
              Products Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
              Enterprise Surveillance Hardware
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We supply and integrate certified security hardware backed by official manufacturer warranties and local technical engineering backup.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary-bg hover:bg-border-light text-text-dark text-xs font-bold transition-all border border-border-light shadow-sm"
            >
              Get Custom Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Catalog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Highlight Left Card */}
          <div className="lg:col-span-4 bg-text-dark text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[460px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl -z-0 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 text-primary-hover">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-[9px] font-extrabold tracking-widest bg-white/10 border border-white/10 px-2.5 py-1 rounded-full uppercase font-mono">
                Certified Supply
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-6 mb-4 leading-tight">
                Official Hikvision Authorized Partner
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-medium">
                Our installations feature genuine Hikvision hardware directly imported. This ensures local brand support, original secure firmware upgrades, and valid warranty cycles.
              </p>
            </div>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-white hover:bg-secondary-bg text-text-dark font-extrabold text-xs rounded-xl transition-all shadow-md mt-8 relative z-10"
            >
              Request Hardware Catalog
            </a>
          </div>

          {/* Product Items Bento-Spec style */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {productsList.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-secondary-bg border border-border-light rounded-3xl p-6 md:p-8 hover:shadow-premium hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary block mb-2 font-mono">
                    {product.category}
                  </span>
                  <h4 className="text-base font-extrabold text-text-dark mb-5">
                    {product.title}
                  </h4>
                  
                  {/* Technical Specs Datasheet */}
                  <div className="border border-border-light rounded-xl overflow-hidden bg-white mb-6">
                    {product.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="grid grid-cols-5 border-b border-border-light/65 last:border-0 px-4 py-2.5 text-[11px]"
                      >
                        <span className="col-span-2 text-text-muted font-bold">{spec.label}</span>
                        <span className="col-span-3 text-text-dark font-extrabold text-right font-mono truncate">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border-light/60 pt-4 mt-auto">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">WARRANTY: 2 YEARS</span>
                  <a
                    href="#contact"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1 group/btn"
                  >
                    Get Quote
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Featured Integrated Suite Block */}
        <div className="relative rounded-3xl overflow-hidden bg-[#F8F9FB] border border-border-light p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
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
                className="px-5 py-3 bg-text-dark hover:bg-primary text-white text-xs font-bold rounded-full transition-all shadow-sm hover:scale-[1.02]"
              >
                Book Free Consultation
              </a>
              <a
                href="#gallery"
                className="px-5 py-3 bg-white border border-border-light hover:bg-secondary-bg text-text-dark text-xs font-bold rounded-full transition-all shadow-sm hover:scale-[1.02]"
              >
                View Live Installations
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full aspect-video md:aspect-[2/1] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white">
            <Image
              src="/images/products.webp"
              alt="Security systems hardware catalog showcase"
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
