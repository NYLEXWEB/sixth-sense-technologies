import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import SoftwareSolutions from "@/components/SoftwareSolutions";
import Partners from "@/components/Partners";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Certification from "@/components/Certification";
import GoogleReviews from "@/components/GoogleReviews";
import About from "@/components/About";
import InternationalPresence from "@/components/InternationalPresence";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  // Google Structured Data Graph (JSON-LD)
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sensixglobal.com/#website",
        "url": "https://sensixglobal.com",
        "name": "Sixth Sense Technologies",
        "description": "Professional security camera installation and IT solutions in Kerala",
        "publisher": {
          "@id": "https://sensixglobal.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://sensixglobal.com/#organization",
        "name": "Senixglobal",
        "alternateName": "Sixth Sense Technologies",
        "url": "https://sensixglobal.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sensixglobal.com/favicon.ico"
        },
        "sameAs": [
          "https://facebook.com/sixthsensetechnologies",
          "https://instagram.com/sixthsense_technologies"
        ]
      },
      {
        "@type": ["SecuritySystemProvider", "LocalBusiness"],
        "@id": "https://sensixglobal.com/#localbusiness",
        "name": "Sixth Sense Technologies",
        "image": "https://sensixglobal.com/images/hero.webp",
        "url": "https://sensixglobal.com",
        "telephone": "+919747168484",
        "priceRange": "$$",
        "description": "Sixth Sense Technologies is the best CCTV dealer and security system supplier in Thiruvananthapuram, Kerala. Specializing in security camera installation, biometric attendance, access control systems, smart locks, and cabling.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pulimoodu Junction",
          "addressLocality": "Thiruvananthapuram",
          "addressRegion": "Kerala",
          "postalCode": "695001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 8.493188,
          "longitude": 76.943960
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Kerala"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Thiruvananthapuram"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:30"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "97"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://sensixglobal.com/#webpage",
        "url": "https://sensixglobal.com",
        "name": "Best CCTV Dealer in Thiruvananthapuram | Security Systems Kerala",
        "isPartOf": {
          "@id": "https://sensixglobal.com/#website"
        },
        "about": {
          "@id": "https://sensixglobal.com/#localbusiness"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://sensixglobal.com/#faq",
        "isPartOf": {
          "@id": "https://sensixglobal.com/#webpage"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the relationship between Senixglobal and Sixth Sense Technologies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Senixglobal is our global brand representing international technology integrations across India and the Middle East. Sixth Sense Technologies is our registered operating division in India, headquartered in Thiruvananthapuram, Kerala."
            }
          },
          {
            "@type": "Question",
            "name": "In which countries does Senixglobal provide technology solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer services across India (via Sixth Sense Technologies), Saudi Arabia, Oman, and the United Arab Emirates, catering to both residential setups and enterprise clients."
            }
          },
          {
            "@type": "Question",
            "name": "Are your surveillance hardware products covered under official warranties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, every product we install—including CCTV cameras, Network Video Recorders (NVR), and biometric controllers—is direct from certified channels and backed by official 2-year manufacturer warranties."
            }
          },
          {
            "@type": "Question",
            "name": "Do you configure remote mobile monitoring for security cameras?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We set up official secure applications on your smartphones and tablets, allowing you to access live high-definition feeds and historical playback from anywhere in the world."
            }
          },
          {
            "@type": "Question",
            "name": "What kinds of enterprise software solutions do you build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy and customize CRM systems, ERP dashboards, Inventory managers, point-of-sale (POS) systems, custom web applications, and building management software tailored to specific workflows."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer post-installation technical support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer ongoing Annual Maintenance Contracts (AMC) and 24/7 remote diagnostics support to resolve recording errors, connection issues, or hardware queries immediately."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sensixglobal.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sensixglobal.com"
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Main Page Layout */}
      <Navbar />
      <main className="flex-1 w-full bg-white">
        <Hero />
        <TrustSection />
        <Services />
        <SoftwareSolutions />
        <Partners />
        <WhyChooseUs />
        <Products />
        <Gallery />
        <Certification />
        <GoogleReviews />
        <About />
        <InternationalPresence />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
