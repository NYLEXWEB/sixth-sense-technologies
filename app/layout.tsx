import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sensixglobal.com"),
  title: "Best CCTV Dealer in Thiruvananthapuram | CCTV Installation & Security Systems Kerala",
  description: "Sixth Sense Technologies (Senixglobal) is the best CCTV dealer in Thiruvananthapuram, Kerala. Professional security camera installation, biometric attendance systems, access control, fire alarms, and structured cabling for homes, offices, and industries.",
  keywords: [
    "CCTV Installation Thiruvananthapuram",
    "Best CCTV Dealer Thiruvananthapuram",
    "Security System Supplier Kerala",
    "Security Camera Installation Kerala",
    "Biometric Attendance System Kerala",
    "Access Control System Kerala",
    "Video Door Phone Kerala",
    "Smart Lock Installation Kerala",
    "Home Security Kerala",
    "Office CCTV Kerala",
    "Warehouse CCTV Kerala",
    "Industrial CCTV Kerala",
    "Fire Alarm System Kerala",
    "Intruder Alarm Kerala",
    "Networking Solutions Kerala",
    "Structured Cabling Kerala",
    "Annual Maintenance CCTV Kerala",
    "AI CCTV Installation Kerala",
    "Commercial CCTV Kerala",
    "Residential CCTV Kerala",
    "Senixglobal",
    "Sixth Sense Technologies Thiruvananthapuram",
    "Gate Automation Oman Saudi Arabia",
    "Enterprise Software Solutions GCC"
  ],
  alternates: {
    canonical: "https://sensixglobal.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Senixglobal" }],
  creator: "Senixglobal",
  publisher: "Senixglobal",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Best CCTV Dealer in Thiruvananthapuram | Security Systems Kerala",
    description: "Sixth Sense Technologies provides professional CCTV installation, smart gate automation, biometric attendance systems, and structured cabling in Kerala.",
    url: "https://sensixglobal.com",
    siteName: "Sixth Sense Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Sixth Sense Technologies CCTV installation and security solutions in Thiruvananthapuram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CCTV Dealer in Thiruvananthapuram | Security Systems Kerala",
    description: "Certified security camera installation, biometric access controls, intruder fire alarms, and network cabling across Kerala.",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-text-dark">
        {children}
      </body>
    </html>
  );
}
