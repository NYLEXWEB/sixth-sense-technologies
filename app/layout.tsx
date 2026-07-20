import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sensixglobal.com"),
  title: {
    default: "Best CCTV Dealer in Thiruvananthapuram | CCTV Installation & Security Systems Kerala",
    template: "%s | Sixth Sense Technologies",
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" },
    ],
  },
  verification: {
    google: "google-site-verification-placeholder",
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
        url: "/images/cctv-camera-dealer-kerala-hero-showcase.webp",
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
    images: ["/images/cctv-camera-dealer-kerala-hero-showcase.webp"],
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Thiruvananthapuram",
    "geo.position": "8.493188;76.943960",
    "ICBM": "8.493188, 76.943960",
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
      className="h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Geist+Mono:wght@100..900&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
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
