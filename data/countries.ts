export interface Country {
  name: string;
  flag: string;
  code: string;
  status: string;
  description: string;
}

export const countriesData: Country[] = [
  {
    name: "India",
    flag: "🇮🇳",
    code: "IN",
    status: "Active Operations",
    description: "Operating division Sixth Sense Technologies in Thiruvananthapuram. Leading security integrations, structured networks, and premium automation."
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    code: "SA",
    status: "International Branch",
    description: "Providing enterprise software and industrial IT infrastructure setups for high-security commercial and logistic centers."
  },
  {
    name: "Oman",
    flag: "🇴🇲",
    code: "OM",
    status: "International Branch",
    description: "Focusing on smart home automation, CCTV surveillance arrays, and optical fiber networking grids for modern spaces."
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    code: "AE",
    status: "International Branch",
    description: "Delivering advanced cloud solutions, biometric access gateways, and video intercom installations for premier estates."
  }
];
