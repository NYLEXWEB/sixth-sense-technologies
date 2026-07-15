"use client";

import { Phone, Calendar, Shield, Home, Code2, Globe, Building2, Users, Headphones, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const WhatsAppIcon = () => (
    <svg className="w-4 h-4 text-emerald-500 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.903-6.989C16.262 1.877 13.79 .843 11.179.843c-5.437 0-9.865 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.016L1.644 21.68l6.003-1.573z" />
    </svg>
  );

  const bentoItems = [
    {
      icon: Shield,
      title: "Advanced Security",
      desc: "CCTV, Access Control & Biometric Systems"
    },
    {
      icon: Home,
      title: "Smart Automation",
      desc: "Smart Home & Building Automation"
    },
    {
      icon: Code2,
      title: "Enterprise Software",
      desc: "Scalable & Custom Software Solutions"
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Serving across India, GCC & Beyond"
    }
  ];



  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-12 flex flex-col justify-between overflow-hidden bg-white"
    >
      {/* Background Image Container with cover and custom right positions */}
      <div className="absolute inset-0 z-0 w-full h-full select-none pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Security Solutions Background"
          fill
          priority
          unoptimized
          className="object-cover object-[80%_center] lg:object-right"
        />
      </div>

      {/* Hero content wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-between relative z-10">

        {/* Main Grid for content and camera overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full mt-4 lg:mt-8">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status / Operating Capsule Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-slate-200/50 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-slate-700 w-fit mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              SENIXGLOBAL • OPERATING IN INDIA AS SIXTH SENSE TECHNOLOGIES
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] lg:leading-[1.1] font-black text-slate-900 tracking-tight mb-4">
              INTELLIGENT SOLUTIONS<br />
              <span className="text-primary">Secure</span> Future
            </h1>

            {/* Headline Accent Line */}
            <div className="w-12 h-1 bg-primary rounded-full mb-6" />

            {/* Subheadline description */}
            <p className="text-sm sm:text-base text-slate-500 font-semibold max-w-xl mb-8 leading-relaxed">
              Delivering advanced security, smart automation, enterprise software, and IT infrastructure solutions across India, Saudi Arabia, Oman, and the UAE
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919747168484"
                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02] hover:shadow-lg"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                Call Now
              </a>
              <a
                href="https://wa.me/919747168484?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20security%20system%20installation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200/80 shadow-sm hover:scale-[1.02] transition-all"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200/80 shadow-sm hover:scale-[1.02] transition-all"
              >
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                Free Site Survey
              </a>
            </div>
          </motion.div>

          {/* Right Glowing Ring Overlay Column (Hidden on mobile) */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center h-[350px]">
            {/* Glowing Ring positioned perfectly overlaying the camera body */}
            <div className="absolute right-[-10%] xl:right-[2%] top-[5%] w-[420px] h-[420px] flex items-center justify-center pointer-events-none">
              {/* Outer Animated Glow Ring */}
              <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-blue-500/25 shadow-[0_0_50px_rgba(59,130,246,0.25),inset_0_0_35px_rgba(59,130,246,0.2)] animate-pulse-glow" />
              {/* Inner Animated Glow Ring */}
              <div className="absolute w-[60%] h-[60%] rounded-full border border-blue-400/15 shadow-[0_0_25px_rgba(59,130,246,0.15)] animate-pulse-glow-slow" />
            </div>
          </div>

        </div>

        {/* Bottom content section: Bento Grid Panel & Stats */}
        <div className="w-full flex flex-col gap-6 mt-12">

          {/* Floating Bento Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-[32px] p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {bentoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 group transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/75 text-primary flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>



        </div>

      </div>
    </section>
  );
}
