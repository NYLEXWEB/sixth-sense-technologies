import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senixglobal | Global Tech, Security Systems & Smart Infrastructure",
  description: "International technology solutions provider. Operating in India as Sixth Sense Technologies. Offering professional CCTV integrations, smart gate automation, biometric access systems, custom ERP/CRM software, and enterprise network setups across India, Saudi Arabia, Oman, and UAE.",
  keywords: [
    "Senixglobal",
    "Sixth Sense Technologies Thiruvananthapuram",
    "CCTV Installation Trivandrum",
    "Security System Supplier Kerala",
    "Gate Automation Oman Saudi Arabia",
    "Enterprise Software Solutions GCC",
    "Biometric Access Control Trivandrum",
    "Structured Networking Support Kerala"
  ],
  authors: [{ name: "Senixglobal" }],
  creator: "Senixglobal",
  publisher: "Senixglobal",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Senixglobal | Global Tech & Security Integrations",
    description: "Operating in India as Sixth Sense Technologies. Custom CCTV installations, smart gate automation, biometric systems, and enterprise software solutions.",
    url: "https://sixthsensetech.in",
    siteName: "Senixglobal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Senixglobal smart technology and security systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senixglobal | Global Tech & Security Systems",
    description: "International installations of security solutions, smart automation, enterprise software, and IT infrastructures.",
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
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-text-dark">
        {children}
      </body>
    </html>
  );
}
