import {
  Users,
  Building,
  Package,
  CreditCard,
  Zap,
  Building2,
  Code,
  Cloud
} from "lucide-react";

export interface SoftwareSolution {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

export const softwareSolutionsList: SoftwareSolution[] = [
  {
    title: "Customer Relationship Management (CRM)",
    description: "Manage client pipelines, automate sales queries, and run marketing campaigns with custom dashboard integrations.",
    icon: Users,
    features: ["Lead Tracking", "Email Automation", "Analytics Portal", "Contact Pipeline"]
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "Unify finance, HR, logistics, and resource tracking into a secure, single-dashboard command center.",
    icon: Building,
    features: ["Finance & Audit", "HR Management", "Supply Chain Control", "Multi-branch Sync"]
  },
  {
    title: "Inventory & Warehouse Systems",
    description: "Track stock counts, monitor product batches, and automate re-order alerts to optimize supply chain workflows.",
    icon: Package,
    features: ["Barcode Scanning", "Auto Reorder", "Multi-warehouse Control", "Batch Tracking"]
  },
  {
    title: "Point of Sale (POS) Software",
    description: "Process retail and restaurant billing, track cash drawers, print receipts, and reconcile card sales dynamically.",
    icon: CreditCard,
    features: ["Billing Terminal", "Receipt Designer", "Offline Processing", "Shift Audit Logs"]
  },
  {
    title: "Business Process Automation",
    description: "Replace repetitive manual worksheets with secure script triggers, database notifications, and API integrations.",
    icon: Zap,
    features: ["Custom Webhooks", "Database Triggers", "SLA Monitors", "Workflow Builder"]
  },
  {
    title: "Building Management Software (BMS)",
    description: "Integrate physical HVAC systems, emergency fire routes, lighting controllers, and alarms into central dashboard software.",
    icon: Building2,
    features: ["Energy Monitors", "HVAC Controller Link", "Fire Alarm Mapping", "Access Control Loop"]
  },
  {
    title: "Custom Software Development",
    description: "Engineered web applications, local desktop interfaces, and mobile applications customized exactly to your specifications.",
    icon: Code,
    features: ["Tailored UI/UX", "API Integrations", "Optimized Query Loops", "Dedicated Codebase"]
  },
  {
    title: "Cloud Infrastructure Solutions",
    description: "Migrate local databases to secure cloud services (AWS, Azure, GCP). Setup load balancers, backups, and CDNs.",
    icon: Cloud,
    features: ["Secure Migration", "Database Backups", "Auto Scaling", "Global CDNs"]
  }
];
