"use client";

import { useState } from "react";
import { softwareSolutionsList } from "@/data/software";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoftwareSolutions() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const sol = softwareSolutionsList[currentIdx];

  // Helper to render the interactive UI preview on the right based on active tab
  const renderDashboardPreview = () => {
    switch (currentIdx) {
      case 0: // CRM
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">CRM Command Center</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE PIPELINE
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[9px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Deals Pipeline</span>
                <div className="text-sm font-black text-white mt-1">$142,500</div>
              </div>
              <div className="p-3.5 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[9px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Win Rate</span>
                <div className="text-sm font-black text-white mt-1">74.2%</div>
              </div>
              <div className="p-3.5 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[9px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Avg Cycle</span>
                <div className="text-sm font-black text-white mt-1">14 Days</div>
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4 space-y-3">
              <div className="text-[10px] font-extrabold text-slate-400 font-mono tracking-widest uppercase">Sales Funnel Activities</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] p-2 bg-white/[0.02] rounded-lg border border-white/[0.02]">
                  <span className="text-slate-300 font-bold">Kowdiar Villa Project</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[8px] font-bold uppercase font-mono">Proposal Sent</span>
                </div>
                <div className="flex items-center justify-between text-[11px] p-2 bg-white/[0.02] rounded-lg border border-white/[0.02]">
                  <span className="text-slate-300 font-bold">Aster IT Subnet Audit</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[8px] font-bold uppercase font-mono">Negotiation</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 1: // ERP
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">ERP Enterprise Ledger</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> SYNCED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[9px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Global Branches</span>
                <div className="text-xs font-extrabold text-slate-200 mt-1 space-y-1">
                  <div className="flex justify-between"><span>India Hub (TVM)</span> <span className="text-emerald-400 font-bold">ONLINE</span></div>
                  <div className="flex justify-between"><span>Oman (Muscat)</span> <span className="text-emerald-400 font-bold">ONLINE</span></div>
                </div>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[9px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Logistics Matrix</span>
                <div className="text-xs font-extrabold text-slate-200 mt-1 space-y-1">
                  <div className="flex justify-between"><span>Pending Audits</span> <span className="text-white font-mono">02</span></div>
                  <div className="flex justify-between"><span>Active AMC</span> <span className="text-white font-mono">87</span></div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4">
              <div className="text-[10px] font-extrabold text-slate-400 font-mono tracking-widest uppercase mb-2">Resource Allocation Status</div>
              <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden flex">
                <div className="h-full bg-blue-500 w-[55%]" />
                <div className="h-full bg-emerald-500 w-[30%]" />
                <div className="h-full bg-amber-500 w-[15%]" />
              </div>
              <div className="flex justify-between text-[8px] font-mono font-bold text-slate-500 mt-2">
                <span>IT DEPLOYMENTS (55%)</span>
                <span>SUPPORT (30%)</span>
                <span>PROCUREMENT (15%)</span>
              </div>
            </div>
          </div>
        );
      case 2: // Inventory
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Inventory Hub</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> STOCK MONITOR
              </span>
            </div>

            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold text-slate-400 font-mono tracking-widest uppercase">Warehouse Stocks</span>
                <span className="text-[9px] font-bold font-mono text-slate-500">89% Capacity</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[11px] p-2 bg-white/[0.02] border border-white/[0.02] rounded-lg">
                  <span className="text-slate-300 font-bold">CCTV Bullet Cameras (Hikvision)</span>
                  <span className="font-mono text-white font-bold">142 Units</span>
                </div>
                <div className="flex justify-between items-center text-[11px] p-2 bg-white/[0.02] border border-white/[0.02] rounded-lg">
                  <span className="text-slate-300 font-bold">CAT6 Drum Cable - 305m</span>
                  <span className="font-mono text-rose-400 font-bold flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-rose-400 animate-ping" /> 3 Drums (LOW)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-blue-500/5 border border-blue-500/15 rounded-xl">
              <span className="text-[10px] text-blue-400 font-extrabold uppercase font-mono tracking-wider">Auto-Reorder Automation</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[8px] font-bold font-mono">TRIGGER ACTIVE</span>
            </div>
          </div>
        );
      case 3: // POS
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Point of Sale Terminal</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> READY TO BILL
              </span>
            </div>

            <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-4">
              <div className="text-[10px] font-extrabold text-slate-400 font-mono tracking-widest uppercase mb-3">Cart Invoice Simulation</div>
              <div className="space-y-2 text-[11px] font-semibold text-slate-200">
                <div className="flex justify-between border-b border-white/[0.03] pb-1.5">
                  <span>1x NVR 8-Channel Recorder</span>
                  <span className="font-mono text-white">$195.00</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.03] pb-1.5">
                  <span>4x 4MP Dome Network Camera</span>
                  <span className="font-mono text-white">$240.00</span>
                </div>
                <div className="flex justify-between text-xs font-black text-emerald-400 pt-1.5">
                  <span>Total Payable</span>
                  <span className="font-mono">$435.00</span>
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-[11px] tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-98">
              💳 Complete Receipt Checkout
            </button>
          </div>
        );
      case 4: // Process Automation
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Webhook Trigger Logs</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ENGINE ONLINE
              </span>
            </div>

            <div className="bg-[#05070a] border border-white/[0.05] rounded-xl p-3.5 font-mono text-[9px] text-emerald-400 space-y-2.5 h-[160px] overflow-y-auto scrollbar-none">
              <div><span className="text-slate-500">[12:18:27]</span> TRIGGER RECEIVED: HTTP POST /webhooks/inbound</div>
              <div><span className="text-slate-500">[12:18:27]</span> MATCH: customer_lead_created -&gt; parsing lead payload...</div>
              <div><span className="text-slate-500">[12:18:28]</span> DATABASE: writing row to leads_production... <span className="text-white font-bold">SUCCESS</span></div>
              <div><span className="text-slate-500">[12:18:28]</span> DISPATCHING: SMS notification via Twilio API to admin</div>
              <div><span className="text-slate-500">[12:18:29]</span> PROCESS COMPLETED. UPTIME: <span className="text-white">99.998%</span></div>
            </div>
          </div>
        );
      case 5: // BMS
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Building Operations HUD</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> CONNECTED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left flex items-center justify-between">
                <div>
                  <span className="text-[8px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Server Room Temp</span>
                  <div className="text-sm font-black text-white mt-1">19.5 °C</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left flex items-center justify-between">
                <div>
                  <span className="text-[8px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Fire Safety Panel</span>
                  <div className="text-sm font-black text-white mt-1">NORMAL</div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left flex items-center justify-between col-span-2">
                <div>
                  <span className="text-[8px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Access Control Loop</span>
                  <div className="text-xs font-bold text-slate-200 mt-1 flex gap-4">
                    <span>Gate 1: <strong className="text-emerald-400">LOCKED</strong></span>
                    <span>Server Vault: <strong className="text-emerald-400">SECURE</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 6: // Custom Software
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Tailormade Architecture</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" /> CUSTOM CODEBASE
              </span>
            </div>

            <div className="bg-[#05070a] border border-white/[0.05] rounded-xl p-4 font-mono text-[10px] text-slate-400 space-y-1">
              <div><span className="text-blue-400">const</span> clientConfig = &#123;</div>
              <div className="pl-4">engine: <span className="text-amber-300">&quot;proprietary-security-mesh&quot;</span>,</div>
              <div className="pl-4">encryption: <span className="text-amber-300">&quot;AES-256-GCM&quot;</span>,</div>
              <div className="pl-4">syncIntervalMs: <span className="text-purple-400">500</span>,</div>
              <div className="pl-4">customIntegrations: [<span className="text-amber-300">&quot;CCTV&quot;</span>, <span className="text-amber-300">&quot;Biometric Gateways&quot;</span>]</div>
              <div>&#125;;</div>
            </div>
            
            <div className="text-[11px] font-semibold text-slate-400 italic">
              Designed from scratch using modern react hooks and secure endpoints.
            </div>
          </div>
        );
      case 7: // Cloud
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Cloud Cluster Monitor</span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> AWS S3 &amp; EC2
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[8px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">CPU Load</span>
                <div className="text-xs font-black text-white mt-1">24.5%</div>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[8px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">CDN Cache Hit</span>
                <div className="text-xs font-black text-emerald-400 mt-1">94.8%</div>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl text-left">
                <span className="text-[8px] text-slate-500 font-extrabold uppercase font-mono tracking-wide">Load Balancer</span>
                <div className="text-xs font-black text-white mt-1">120 rps</div>
              </div>
            </div>

            <div className="p-3.5 bg-white/[0.01] border border-white/[0.03] rounded-xl flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-semibold">Automatic Database Backup</span>
              <span className="text-[9px] font-bold text-emerald-400 font-mono">DAILY SECURE SNAPSHOT OK</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="software" className="py-20 md:py-24 bg-[#05070A] relative overflow-hidden">
      {/* Dark Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            Enterprise Platforms
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-4">
            Premium Software Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            We design, build, and integrate high-throughput business software and automation platforms for modern organizations.
          </p>
        </div>

        {/* Premium Dashboard Layout - Tabs on Left, Active Dashboard Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Tab Menu (Columns 4) */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2 font-mono block px-2">
              Select Solution Suite
            </span>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x">
              {softwareSolutionsList.map((item, idx) => {
                const Icon = item.icon;
                const isActive = currentIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 shrink-0 snap-start select-none cursor-pointer w-[280px] lg:w-full border ${
                      isActive
                        ? "bg-[#0C0F17] border-primary/35 text-white shadow-md shadow-primary/5"
                        : "bg-transparent border-transparent text-slate-400 hover:bg-white/[0.02] hover:text-slate-200"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all ${
                      isActive
                        ? "bg-primary/20 border-primary/30 text-primary"
                        : "bg-white/[0.03] border-white/[0.04] text-slate-400 group-hover:text-white"
                    }`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold leading-none mb-1">
                        {item.title}
                      </h3>
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                        {isActive ? "VIEWING SYSTEM SPEC" : "CLICK TO EXPAND"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Simulated Interactive Panel (Columns 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0C0F17] border border-white/[0.05] rounded-[32px] overflow-hidden shadow-2xl relative">
            
            {/* Top Bar simulating a browser window header */}
            <div className="bg-[#090b11] border-b border-white/[0.06] px-6 py-4 flex items-center justify-between shrink-0 select-none">
              {/* Window dots */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              
              {/* Address bar URL */}
              <div className="hidden sm:block px-6 py-1 rounded bg-[#05070a] text-[10px] font-mono text-slate-500 border border-white/[0.03] w-[280px] text-center truncate">
                dashboard.senixglobal.com/{sol.title.toLowerCase().replace(/\s+/g, "-")}
              </div>

              {/* Action chip */}
              <span className="text-[9px] font-extrabold text-primary font-mono tracking-widest uppercase">
                SECURE CONSOLE
              </span>
            </div>

            {/* Core Interactive Area */}
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Information details (Left 6 cols) */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-tight mb-3">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      {sol.description}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-primary transition-all hover:gap-2.5 group cursor-pointer"
                  >
                    Request Integration Demo
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Features & Simulation Render (Right 6 cols) */}
                <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-white/[0.06] pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
                  <div className="mb-6">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary mb-3.5 font-mono block">
                      Capabilities Injected
                    </span>
                    <ul className="space-y-2.5">
                      {sol.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                          <div className="w-4.5 h-4.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-emerald-400" />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Simulation View Box */}
                  <div className="p-4 bg-white/[0.02] border border-white/[0.04] rounded-2xl relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                      >
                        {renderDashboardPreview()}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
