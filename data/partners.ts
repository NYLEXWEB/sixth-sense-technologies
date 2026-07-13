export interface Partner {
  name: string;
  logo: string; // local path to logo SVG
}

export interface PartnerCategory {
  category: string;
  partners: Partner[];
}

export const partnersData: PartnerCategory[] = [
  {
    category: "CCTV",
    partners: [
      { name: "CP Plus", logo: "/brands/cp-plus.svg" },
      { name: "Hikvision", logo: "/brands/hikvision.svg" },
      { name: "Dahua", logo: "/brands/dahua.svg" },
      { name: "Honeywell", logo: "/brands/honeywell.svg" },
      { name: "Bosch", logo: "/brands/bosch.svg" },
      { name: "Panasonic", logo: "/brands/panasonic.svg" },
      { name: "UNV", logo: "/brands/unv.svg" },
      { name: "Secureye", logo: "/brands/secureye.svg" },
      { name: "TVT", logo: "/brands/tvt.svg" }
    ]
  },
  {
    category: "Gate Automation",
    partners: [
      { name: "CAME", logo: "/brands/came.svg" },
      { name: "Nice", logo: "/brands/nice.svg" },
      { name: "Beninca", logo: "/brands/beninca.svg" },
      { name: "FAAC", logo: "/brands/faac.svg" },
      { name: "Somfy", logo: "/brands/somfy.svg" },
      { name: "Centurion", logo: "/brands/centurion.svg" },
      { name: "BFT", logo: "/brands/bft.svg" },
      { name: "Toshi", logo: "/brands/toshi.svg" },
      { name: "Ozone", logo: "/brands/ozone.svg" },
      { name: "Ditec", logo: "/brands/ditec.svg" }
    ]
  },
  {
    category: "Biometrics",
    partners: [
      { name: "eSSL", logo: "/brands/essl.svg" },
      { name: "Matrix", logo: "/brands/matrix.svg" },
      { name: "ZKTeco", logo: "/brands/zkteco.svg" },
      { name: "Suprema", logo: "/brands/suprema.svg" },
      { name: "Hikvision", logo: "/brands/hikvision.svg" },
      { name: "Dahua", logo: "/brands/dahua.svg" },
      { name: "Anviz", logo: "/brands/anviz.svg" },
      { name: "Realtime", logo: "/brands/realtime.svg" }
    ]
  },
  {
    category: "Video Door Phone",
    partners: [
      { name: "Hikvision", logo: "/brands/hikvision.svg" },
      { name: "Dahua", logo: "/brands/dahua.svg" },
      { name: "Panasonic", logo: "/brands/panasonic.svg" },
      { name: "Legrand", logo: "/brands/legrand.svg" },
      { name: "Godrej", logo: "/brands/godrej.svg" },
      { name: "Commax", logo: "/brands/commax.svg" },
      { name: "Fermax", logo: "/brands/fermax.svg" },
      { name: "CP Plus", logo: "/brands/cp-plus.svg" },
      { name: "Akuvox", logo: "/brands/akuvox.svg" }
    ]
  },
  {
    category: "Enterprise Software",
    partners: [
      { name: "Zoho", logo: "/brands/zoho.svg" },
      { name: "Odoo", logo: "/brands/odoo.svg" },
      { name: "Oracle", logo: "/brands/oracle.svg" },
      { name: "SAP", logo: "/brands/sap.svg" },
      { name: "Microsoft", logo: "/brands/microsoft.svg" }
    ]
  }
];
