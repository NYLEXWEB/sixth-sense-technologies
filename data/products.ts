export interface ProductSpec {
  label: string;
  val: string;
}

export interface ProductItem {
  title: string;
  specs: ProductSpec[];
  category: string;
  warranty: string;
}

export const productsList: ProductItem[] = [
  {
    title: "Hikvision IP Dome Camera",
    specs: [
      { label: "Lens", val: "4MP Ultra HD" },
      { label: "Night Vision", val: "30m Infrared" },
      { label: "Resistance", val: "IK10 Vandal-Proof" },
      { label: "Power Source", val: "PoE Supported" }
    ],
    category: "CCTV Camera",
    warranty: "2 Years"
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
    warranty: "2 Years"
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
    warranty: "2 Years"
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
    warranty: "2 Years"
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
    warranty: "2 Years"
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
    warranty: "2 Years"
  }
];
