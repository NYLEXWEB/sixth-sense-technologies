import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Certification from "@/components/Certification";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  // Local Business Schema JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SecuritySystemProvider",
    "name": "Sixth Sense Technologies",
    "image": "https://sixthsensetech.in/images/hero.webp",
    "url": "https://sixthsensetech.in",
    "telephone": "+919747168484",
    "priceRange": "$$",
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
    "sameAs": [
      "https://facebook.com/sixthsensetechnologies",
      "https://instagram.com/sixthsense_technologies"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "97"
    }
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Main Page Layout */}
      <Navbar />
      <main className="flex-1 w-full bg-white">
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <Products />
        <Gallery />
        <Certification />
        <Testimonials />
        <About />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
