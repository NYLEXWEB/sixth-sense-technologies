"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageSquare, Calendar, ShieldCheck, Star, Activity, Terminal, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [systemLogs, setSystemLogs] = useState<string[]>([
    "INITIALIZING SECURITY MESH...",
    "CAMERA FEED 01: ACTIVE [4K]",
    "BIOMETRIC LINK: SECURED",
    "FIREWALL STATE: PROTECTED",
  ]);

  useEffect(() => {
    const logs = [
      "AI DETECT: SECURE FACIAL SCAN MATCHED",
      "NETWORK AUDIT: NO THREATS FOUND",
      "ACTIVE CHANNEL: IP DOME 02 ONLINE",
      "REMOTE MONITORING PORT: ACTIVE",
      "ENCRYPTION KEY: SYNCED [AES-256]",
    ];
    
    const interval = setInterval(() => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setSystemLogs(prev => [...prev.slice(1), `[${timestamp}] ${randomLog}`]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-40 pb-24 flex items-center bg-white overflow-hidden bg-grid-pattern"
    >
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] radial-glow-primary -z-10" />
      <div className="absolute bottom-12 left-0 w-[400px] h-[400px] radial-glow-success -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-text-dark/5 border border-text-dark/10 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-text-dark w-fit mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
            SYSTEM STATUS: SECURED & ACTIVE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-text-dark tracking-tighter leading-[1.05] mb-6">
            Smart Security <br />
            <span className="bg-gradient-to-r from-primary via-[#0c59a0] to-[#111827] bg-clip-text text-transparent">
              For Modern Spaces
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-muted max-w-xl mb-10 leading-relaxed font-medium">
            Professional CCTV integrations, enterprise-grade structured networking, biometric access gates, and proactive IT engineering for premier homes and businesses.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="tel:+919747168484"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-text-dark hover:bg-primary text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02] hover:shadow-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Now
            </a>
            <a
              href="https://wa.me/919747168484?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20security%20system%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-success-green hover:bg-success-green/90 text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02] hover:shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-secondary-bg text-text-dark text-xs font-bold border border-border-light shadow-sm hover:scale-[1.02] transition-all"
            >
              <Calendar className="w-4 h-4 text-primary" />
              Free Site Survey
            </a>
          </div>

          {/* Micro Trust Stats */}
          <div className="flex flex-wrap items-center gap-8 border-t border-border-light/65 pt-8">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-text-dark block">5.0 Star Rating</span>
                <span className="text-[10px] text-text-muted font-bold font-mono">97 GOOGLE REVIEWS</span>
              </div>
            </div>
            <div className="h-6 w-px bg-border-light hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-text-dark block">Hikvision Partner</span>
                <span className="text-[10px] text-text-muted font-bold">CERTIFIED INSTALLATION</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Dashboard Console Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative w-full"
        >
          {/* Main Monitor Container */}
          <div className="w-full max-w-[460px] bg-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
            
            {/* Monitor Header */}
            <div className="px-5 py-3 border-b border-white/5 bg-[#1f2937]/75 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white/40 tracking-wider">
                <Activity className="w-3 h-3 text-success-green animate-pulse-soft" />
                LIVE_FEED://CAM_01
              </div>
              <div className="text-white/20">
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* Live Camera Feed Panel */}
            <div className="relative aspect-video w-full bg-black overflow-hidden group">
              <Image
                src="/images/hero.webp"
                alt="Active CCTV Surveillance Feed"
                fill
                priority
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 460px"
              />
            </div>

            {/* Diagnostic Console Panel */}
            <div className="p-5 bg-black border-t border-white/5 flex flex-col gap-2.5 font-mono text-[9px]">
              <div className="flex items-center gap-1.5 text-primary-hover font-bold">
                <Terminal className="w-3 h-3" />
                SYSTEM DIAGNOSTIC CONSOLE
              </div>
              <div className="space-y-1.5 text-white/50 max-h-[85px] overflow-hidden leading-relaxed">
                {systemLogs.map((log, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-success-green shrink-0">&gt;</span>
                    <span className="truncate">{log}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
