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
        "image": [
          "https://sensixglobal.com/images/cctv-camera-dealer-kerala-hero-showcase.webp",
          "https://sensixglobal.com/images/enterprise-servers-cabling-network-infrastructure-rack.png",
          "https://sensixglobal.com/images/best-cctv-dealer-thiruvananthapuram-security-catalog.png"
        ],
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
          "reviewCount": "97",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sreejith Chandrasekhar"
            },
            "datePublished": "2025-06-15",
            "reviewBody": "I googled for a CCTV technician, when I am completely fed up with my current CCTV providers and their service. Once Jameel from Sixth Sense came for solving our issues, I am very glad to say, I am free of headache. I assure it to everyone, they are professional, attending our issues immediately and giving solutions or completing the task promptly.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Ànita Philip Alexander"
            },
            "datePublished": "2025-05-10",
            "reviewBody": "They have best and quick response on time. Work is neatly done by them. Any time help and resolving issues on time. Takes work anywhere in kerala. I had my cctv installation done at Pathanamthitta by trivandrum showroom . Great work thankyou",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anand SR"
            },
            "datePublished": "2023-07-14",
            "reviewBody": "Am writing this review almost after an year of installation. I have called for minor service in two occasions and response was amazing and issue is resolved within 24 hours. At the time of installation also they were verry professional and has good knowledge of CCTV system, helped me to choose most value for money configuration for my home.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Jayaganesh Duraipandian"
            },
            "datePublished": "2024-07-14",
            "reviewBody": "Excellent Job done by sixth sense Technologies. Jameel Mohammad & his team are very professional and finished my 2 houses on time with advanced hik-Vision cameras. Now I am able to see the cameras live from overseas with clarity & without any interruption.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Anooj Muraleedharan"
            },
            "datePublished": "2023-07-14",
            "reviewBody": "Writing this review after over an year of installation. Until this day from the very beginning, their service and support has been amazing and really lives up to the 5 star rating they are maintaining. Post installation, they have promptly responded to all whatsapp queries.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Security and IT Services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Security & Automation Systems",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CCTV Integration & Installation",
                    "description": "High-definition analog and IP surveillance setups. Fully customized cabling layouts, hardware alignment, and local/remote view configurations."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Smart WiFi Security Cameras",
                    "description": "App-managed indoor/outdoor wireless cameras. Features secure motion alarms, continuous night vision, and redundant cloud storage syncing."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Access Control & Lock Systems",
                    "description": "Physical barrier locks, RFID card entry terminals, magnetic door latching systems, and partition triggers configured for high security."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Biometric Attendance Systems",
                    "description": "Personnel log portals utilizing high-accuracy facial scans or fingerprint records. Integrates directly with secure time and payroll databases."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Door Phone Intercoms",
                    "description": "Integrated intercom displays for villas and office partitions. Provides real-time smartphone rings, video history, and electronic release."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Driveway Gate Automation",
                    "description": "Heavy-duty automatic sliding and swing gates. Sensor-driven safety, remote fob triggers, and integration with intercom systems."
                  }
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "IT Infrastructure & Software Systems",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Structured Cabling & Networking",
                    "description": "Heavy-duty shielded CAT6 / CAT7 cable routing, organized patch panels, and dust-resistant enclosure builds for zero packet loss."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fiber Splicing & Optical Networking",
                    "description": "High-throughput optical fiber laying, splicing, OTDR testing, and media converter setups for high-speed long-distance communication."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom ERP, CRM, & POS Systems",
                    "description": "Custom ERP, CRM, inventory management, and POS integrations to automate client and asset operations dynamically."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Server Solutions & Active Directory Setup",
                    "description": "Configuration of local server towers, Active Directory setups, RAID arrays, and network-attached storage (NAS) for document backups."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Network Cyber Security & Firewalls",
                    "description": "Dedicated hardware firewall configurations, secure subnet routing, anti-virus protocols, and automated network vulnerability audits."
                  }
                }
              ]
            }
          ]
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
      },
      {
        "@type": "Product",
        "@id": "https://sensixglobal.com/#product-dome",
        "name": "Hikvision IP Dome Camera",
        "description": "4MP Ultra HD Dome Camera with 30m Infrared Night Vision, IK10 Vandal-Proof resistance, and PoE support. Ideal for indoor/outdoor corporate and residential security setups.",
        "image": "https://sensixglobal.com/images/best-cctv-dealer-thiruvananthapuram-security-catalog.png",
        "brand": {
          "@type": "Brand",
          "name": "Hikvision"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "2000",
          "highPrice": "15000",
          "offerCount": "10"
        }
      },
      {
        "@type": "Product",
        "@id": "https://sensixglobal.com/#product-pt",
        "name": "Hikvision Smart Pan-Tilt (PT)",
        "description": "Smart Pan-Tilt camera featuring 360° Pan / 90° Tilt rotation, AI Human & Vehicle Tracking, two-way talkback audio, and WiFi/Ethernet access ports.",
        "image": "https://sensixglobal.com/images/smart-wifi-outdoor-security-camera-installation.png",
        "brand": {
          "@type": "Brand",
          "name": "Hikvision"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "3500",
          "highPrice": "18000",
          "offerCount": "10"
        }
      },
      {
        "@type": "Product",
        "@id": "https://sensixglobal.com/#product-nvr",
        "name": "Enterprise Network Video Recorder (NVR)",
        "description": "High performance network recorder supporting 8 / 16 / 32 IP inputs, up to 8K recording resolution, dual-OS protection, and H.265+ compression.",
        "image": "https://sensixglobal.com/images/enterprise-servers-cabling-network-infrastructure-rack.png",
        "brand": {
          "@type": "Brand",
          "name": "Hikvision"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "8000",
          "highPrice": "45000",
          "offerCount": "10"
        }
      },
      {
        "@type": "Product",
        "@id": "https://sensixglobal.com/#product-dvr",
        "name": "Digital Video Recorder (DVR)",
        "description": "Digital video recorder supporting 4 / 8 / 16 Analog Inputs, 5MP HD Live Feed, HDTVI / AHD / CVI signals, and Smart Event Search.",
        "image": "https://sensixglobal.com/images/best-cctv-dealer-thiruvananthapuram-security-catalog.png",
        "brand": {
          "@type": "Brand",
          "name": "Hikvision"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "4500",
          "highPrice": "25000",
          "offerCount": "10"
        }
      },
      {
        "@type": "Product",
        "@id": "https://sensixglobal.com/#product-access",
        "name": "Biometric Access Controller",
        "description": "Advanced physical access gate with storage for 10,000+ fingerprints. Supports Verification via Card, Finger, or PIN with TCP/IP & RS485 protocols.",
        "image": "https://sensixglobal.com/images/biometric-rfid-access-control-security-terminals.png",
        "brand": {
          "@type": "Brand",
          "name": "Hikvision"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "6000",
          "highPrice": "35000",
          "offerCount": "10"
        }
      },
      {
        "@type": "Product",
        "@id": "https://sensixglobal.com/#product-intercom",
        "name": "HD Video Door Phone System",
        "description": "Smart villa intercom system featuring a 7-inch touch monitor, 1080p wide view lens angle, WiFi phone app smart links, and electronic relay locks.",
        "image": "https://sensixglobal.com/images/smart-video-door-phone-intercom-displays.png",
        "brand": {
          "@type": "Brand",
          "name": "Hikvision"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "7500",
          "highPrice": "28000",
          "offerCount": "10"
        }
      }
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph).replace(/</g, "\\u003c") }}
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
