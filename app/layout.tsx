import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sixth Sense Technologies | Premium CCTV & IT Security Solutions Thiruvananthapuram",
  description: "Certified Hikvision partners in Thiruvananthapuram, Kerala. We install professional CCTV systems, smart WiFi cameras, biometric access control, video door phones, and configure enterprise networking.",
  keywords: [
    "CCTV Installation Thiruvananthapuram",
    "Security System Supplier Kerala",
    "Hikvision Certified Company Thiruvananthapuram",
    "Biometric Access Control Pulimoodu",
    "Video Door Phone Installation Trivandrum",
    "Structured Networking IT Support Kerala",
    "Computer Laptop Repair Thiruvananthapuram"
  ],
  authors: [{ name: "Sixth Sense Technologies" }],
  creator: "Sixth Sense Technologies",
  publisher: "Sixth Sense Technologies",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Sixth Sense Technologies | Premium CCTV & IT Security Solutions",
    description: "Certified Hikvision partners in Thiruvananthapuram. Professional CCTV installation, smart WiFi cameras, structured networking, biometric access control, and IT support services.",
    url: "https://sixthsensetech.in",
    siteName: "Sixth Sense Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Sixth Sense Technologies smart surveillance solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sixth Sense Technologies | CCTV & Security Integrations",
    description: "Professional security camera setups, structured networks, and IT repairs in Thiruvananthapuram.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-text-dark">
        {children}
      </body>
    </html>
  );
}
