"use client";

import { Award, Star, ShieldCheck, CheckCircle2, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
  const trustBadges = [
    {
      icon: Award,
      title: "Certified Partner",
      subtitle: "OFFICIAL HIKVISION SUPPLY",
      color: "from-blue-500/10 to-indigo-500/5",
      iconColor: "text-blue-600",
    },
    {
      icon: Globe,
      title: "International Partner",
      subtitle: "INDIA & MIDDLE EAST",
      color: "from-purple-500/10 to-pink-500/5",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Professional Engineers",
      subtitle: "CERTIFIED FIELD DIAGNOSTICS",
      color: "from-amber-500/10 to-orange-500/5",
      iconColor: "text-amber-600",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Brands",
      subtitle: "GENUINE HARDWARE ONLY",
      color: "from-emerald-500/10 to-teal-500/5",
      iconColor: "text-emerald-600",
    },
    {
      icon: CheckCircle2,
      title: "Enterprise Ready",
      subtitle: "SCALABLE SYSTEMS STACK",
      color: "from-cyan-500/10 to-blue-500/5",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section className="bg-white pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Outer Premium Wrapper with double-border effect and soft shadow */}
        <div className="w-full bg-[#f8f9fb]/60 border border-slate-200/60 rounded-[32px] p-6 md:p-10 shadow-premium relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Rating Block - Styled like a premium verified badge */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-row items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm shrink-0">
              {/* Rating score badge with Google G icon */}
              <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-100 w-16 h-16 rounded-2xl shrink-0">
                <span className="text-2xl font-black text-slate-900 leading-none">5.0</span>
                <div className="flex text-amber-500 gap-0.5 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current text-amber-500" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {/* Google colorful G logo */}
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider font-mono">
                    Google Reviews
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                  Verified by 97+ residential &amp; commercial clients.
                </p>
              </div>
            </div>

            {/* Right badges - Elegant Micro-Cards Grid */}
            <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    className="flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-3.5 p-4 bg-white border border-slate-100 hover:border-primary/20 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_20px_rgba(15,108,189,0.06)] transition-all duration-300 group cursor-default"
                  >
                    {/* Icon container with soft colored background */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center ${badge.iconColor} shrink-0 transition-transform group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-0.5">
                      <h4 className="text-[11px] font-extrabold text-slate-900 leading-snug">
                        {badge.title}
                      </h4>
                      <span className="text-[8px] font-bold text-slate-400 tracking-wider block font-mono">
                        {badge.subtitle}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
