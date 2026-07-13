"use client";

import {
  Camera,
  Wifi,
  Network,
  Monitor,
  Server,
  Lock,
  Fingerprint,
  PhoneCall,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const servicesList = [
    {
      icon: Camera,
      title: "CCTV Integration",
      description: "High-definition analog and IP surveillance setups. Fully customized cabling layouts, hardware alignment, and local/remote view configurations.",
      glowColor: "rgba(15, 108, 189, 0.12)",
      iconColor: "text-primary",
    },
    {
      icon: Wifi,
      title: "Smart WiFi Cameras",
      description: "App-managed indoor/outdoor wireless cameras. Features secure motion alarms, continuous night vision, and redundant cloud storage syncing.",
      glowColor: "rgba(22, 163, 74, 0.12)",
      iconColor: "text-success-green",
    },
    {
      icon: Network,
      title: "Structured Networking",
      description: "Enterprise and residential structured CAT6 or fiber infrastructure. Managed switch programming, local router settings, and access point mapping.",
      glowColor: "rgba(124, 58, 237, 0.12)", // purple
      iconColor: "text-purple-600",
    },
    {
      icon: Fingerprint,
      title: "Biometric Attendance",
      description: "Personnel log portals utilizing high-accuracy facial scans or fingerprint records. Integrates directly with secure time and payroll databases.",
      glowColor: "rgba(217, 70, 239, 0.12)", // pink/magenta
      iconColor: "text-pink-600",
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Physical barrier locks, RFID card entry terminals, magnetic door latching systems, and partition triggers configured for high security.",
      glowColor: "rgba(249, 115, 22, 0.12)", // orange
      iconColor: "text-orange-500",
    },
    {
      icon: PhoneCall,
      title: "Video Door Phones",
      description: "Integrated intercom displays for villas and office partitions. Provides real-time smartphone rings, video history, and electronic release.",
      glowColor: "rgba(14, 165, 233, 0.12)", // sky blue
      iconColor: "text-sky-500",
    },
    {
      icon: Server,
      title: "Server & Storage Admin",
      description: "Configuration of local server towers, RAID systems, and Network Attached Storage (NAS) setups for automatic and redundant document backups.",
      glowColor: "rgba(79, 70, 229, 0.12)", // indigo
      iconColor: "text-indigo-600",
    },
    {
      icon: ShieldAlert,
      title: "Cyber Security Setup",
      description: "Installation of dedicated physical firewalls, secure subnet routing, anti-virus protocols, and regular network vulnerability analysis.",
      glowColor: "rgba(220, 38, 38, 0.12)", // red
      iconColor: "text-red-600",
    },
    {
      icon: Monitor,
      title: "Computer Hardware Support",
      description: "Diagnostic reports for business workstations and laptops. Component repair, registry cleanup, driver updates, and physical cleaning.",
      glowColor: "rgba(13, 148, 136, 0.12)", // teal
      iconColor: "text-teal-600",
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative bg-grid-pattern">
      <div className="absolute inset-0 radial-glow-primary -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
            Security &amp; IT Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Comprehensive Digital Infrastructure
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            We engineer tailored electronic security, communication networks, and IT support services to keep modern properties protected and connected.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bento-card p-8 flex flex-col justify-between group h-[290px] relative overflow-hidden"
              >
                {/* Background Ambient Glow on Hover */}
                <div 
                  className="absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: service.glowColor }}
                />

                <div>
                  {/* Icon Block */}
                  <div className={`w-11 h-11 rounded-xl bg-[#f8f9fb] border border-border-light flex items-center justify-center ${service.iconColor} shadow-sm group-hover:scale-105 transition-transform mb-6`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-extrabold text-text-dark mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-primary transition-all mt-auto group-hover:gap-2.5"
                >
                  Book Service
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
