import {
  Camera,
  Wifi,
  Network,
  Lock,
  Fingerprint,
  PhoneCall,
  Laptop,
  Server,
  ShieldCheck,
  Cpu,
  Cloud,
  FileCode,
  LayoutGrid
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: any;
  glowColor: string;
  iconColor: string;
}

export const servicesList: ServiceItem[] = [
  // Security Solutions
  {
    title: "CCTV Integration",
    description: "High-definition analog and IP surveillance setups. Fully customized cabling layouts, hardware alignment, and local/remote view configurations.",
    icon: Camera,
    glowColor: "rgba(15, 108, 189, 0.12)",
    iconColor: "text-primary",
  },
  {
    title: "Smart WiFi Cameras",
    description: "App-managed indoor/outdoor wireless cameras. Features secure motion alarms, continuous night vision, and redundant cloud storage syncing.",
    icon: Wifi,
    glowColor: "rgba(22, 163, 74, 0.12)",
    iconColor: "text-success-green",
  },
  {
    title: "Structured Cabling",
    description: "Heavy-duty shielded CAT6 / CAT7 cable routing, organized patch panels, and dust-resistant enclosure builds for zero packet loss.",
    icon: Network,
    glowColor: "rgba(124, 58, 237, 0.12)",
    iconColor: "text-purple-600",
  },
  {
    title: "Fiber Networking",
    description: "High-throughput optical fiber laying, splicing, OTDR testing, and media converter setups for high-speed long-distance communication.",
    icon: Cpu,
    glowColor: "rgba(13, 148, 136, 0.12)",
    iconColor: "text-teal-600",
  },
  {
    title: "Access Control Systems",
    description: "Physical barrier locks, RFID card entry terminals, magnetic door latching systems, and partition triggers configured for high security.",
    icon: Lock,
    glowColor: "rgba(249, 115, 22, 0.12)",
    iconColor: "text-orange-500",
  },
  {
    title: "Biometric Systems",
    description: "Personnel log portals utilizing high-accuracy facial scans or fingerprint records. Integrates directly with secure time and payroll databases.",
    icon: Fingerprint,
    glowColor: "rgba(217, 70, 239, 0.12)",
    iconColor: "text-pink-600",
  },
  {
    title: "Video Door Phone",
    description: "Integrated intercom displays for villas and office partitions. Provides real-time smartphone rings, video history, and electronic release.",
    icon: PhoneCall,
    glowColor: "rgba(14, 165, 233, 0.12)",
    iconColor: "text-sky-500",
  },
  // Smart Home Automation
  {
    title: "Gate Automation",
    description: "Heavy-duty automatic sliding and swing gates. Sensor-driven safety, remote fob triggers, and integration with intercom systems.",
    icon: LayoutGrid,
    glowColor: "rgba(79, 70, 229, 0.12)",
    iconColor: "text-indigo-600",
  },
  // Enterprise Software
  {
    title: "Enterprise Systems",
    description: "Custom ERP, CRM, inventory management, and POS integrations to automate client and asset operations dynamically.",
    icon: FileCode,
    glowColor: "rgba(236, 72, 153, 0.12)",
    iconColor: "text-pink-500",
  },
  // IT Infrastructure
  {
    title: "Server Solutions",
    description: "Configuration of local server towers, Active Directory setups, RAID arrays, and network-attached storage (NAS) for document backups.",
    icon: Server,
    glowColor: "rgba(99, 102, 241, 0.12)",
    iconColor: "text-indigo-500",
  },
  {
    title: "Cyber Security",
    description: "Dedicated hardware firewall configurations, secure subnet routing, anti-virus protocols, and automated network vulnerability audits.",
    icon: ShieldCheck,
    glowColor: "rgba(220, 38, 38, 0.12)",
    iconColor: "text-red-600",
  },
  {
    title: "Workstation Diagnostics",
    description: "Technical health audits for business workstations and corporate laptops. Component replacements, OS repairs, and maintenance.",
    icon: Laptop,
    glowColor: "rgba(107, 114, 128, 0.12)",
    iconColor: "text-gray-600",
  }
];
