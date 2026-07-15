"use client";

import { useEffect, useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// Types matching API output
interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

interface ReviewsResponse {
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
  source?: string;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isTouched, setIsTouched] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Default fallback numbers if data is still loading
  const rating = data?.rating ?? 5.0;
  const totalReviews = data?.user_ratings_total ?? 97;
  const reviews = data?.reviews ?? [];

  // Fetch reviews from our API endpoint
  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        const res = await fetch("/api/reviews");
        if (!res.ok) {
          throw new Error("Failed to load reviews data");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching reviews.");
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  // Handle ripple effect creation
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
  };

  // Clean up ripples after animation
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples([]);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  // Smooth scroll logic for desktop carousel navigation
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll logic for reviews
  useEffect(() => {
    if (loading || reviews.length === 0 || isTouched) return;
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // If we have scrolled near the end (within 50px buffer), reset to 0
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          const isMobile = window.innerWidth < 640;
          const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
          const cardWidth = isMobile ? 314 : isTablet ? 374 : 404; // card width + gap
          scrollContainerRef.current.scrollTo({
            left: scrollLeft + cardWidth,
            behavior: "smooth"
          });
        }
      }
    }, 3500); // Scroll every 3.5 seconds
    
    return () => clearInterval(interval);
  }, [loading, reviews, isTouched]);

  // Data variables declared at the top of the component

  // Generate dynamic JSON-LD Schema markup for SEO
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toFixed(1),
      "reviewCount": totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    ...(reviews.length > 0 && {
      "review": reviews.map((r) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": r.author_name
        },
        "datePublished": new Date(r.time * 1000).toISOString().split("T")[0],
        "reviewBody": r.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating.toString(),
          "bestRating": "5"
        }
      }))
    })
  };

  return (
    <section id="google-reviews" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic SEO JSON-LD Injected */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      {/* Styled ripples and scrollbar hide */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Rating Overview Block & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Header Description (Left 7 Cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0F6CBD]/10 border border-[#0F6CBD]/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#0F6CBD] font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> Google Verified Reviews
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tighter leading-tight">
              What Our Clients Say About Us
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We operate internationally as Sixth Sense Technologies. Read verified dynamic reviews direct from our Google Business page regarding system implementation and customer support.
            </p>
          </div>

          {/* Rating Summary & CTA Card (Right 6 Cols) */}
          <div className="lg:col-span-6 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#F8F9FB] border border-[#E5E7EB] rounded-3xl p-8 shadow-sm w-full">
            
            {/* Google Rating */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <div className="flex items-center gap-3">
                {/* Colorful Google G Icon */}
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-3xl font-black text-[#111827] tracking-tight">{rating.toFixed(1)}</span>
              </div>
              
              {/* Star Rating block */}
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        i < Math.round(rating) ? "text-amber-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#6B7280] font-mono tracking-wide">
                  Based on {totalReviews} Google Reviews
                </span>
              </div>
            </div>

            {/* Write a Review Button */}
            <button
              onClick={(e) => {
                createRipple(e);
                window.open("https://maps.app.goo.gl/WUCKgfXVs9gZDAth9", "_blank", "noopener,noreferrer");
              }}
              suppressHydrationWarning
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-white text-xs tracking-wider uppercase bg-gradient-to-r from-[#0F6CBD] via-[#0b5c9f] to-[#0c59a0] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#0F6CBD]/50 cursor-pointer shrink-0"
              aria-label="Write a Google Review for Sixth Sense Technologies"
            >
              {/* Ripple elements */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/25 rounded-full animate-ripple pointer-events-none"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 140,
                    height: 140,
                    transform: "translate(-50%, -50%) scale(0)",
                  }}
                />
              ))}
              
              <span className="flex items-center gap-1.5">
                <span>⭐</span> Write a Google Review
              </span>
            </button>

          </div>
        </div>

        {/* Carousel controls - Desktop Only */}
        <div className="hidden md:flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            suppressHydrationWarning
            className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#4B5563] hover:text-[#0F6CBD] hover:border-[#0F6CBD] hover:shadow-sm transition-all duration-200 cursor-pointer"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            suppressHydrationWarning
            className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#4B5563] hover:text-[#0F6CBD] hover:border-[#0F6CBD] hover:shadow-sm transition-all duration-200 cursor-pointer"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Reviews Cards Slider */}
        {loading ? (
          /* Loading Skeleton State */
          <div className="flex gap-6 overflow-hidden pb-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-full md:w-[380px] shrink-0 bg-[#F8F9FB]/50 border border-[#E5E7EB] rounded-[20px] p-8 space-y-6"
              >
                <div className="flex justify-between items-start">
                  <div className="flex text-gray-200 gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]/40">
                  <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-3.5 bg-gray-200 rounded animate-pulse w-2/5" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-1/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error && reviews.length === 0 ? (
          /* Error State if no cached reviews available */
          <div className="text-center py-16 bg-[#F8F9FB] rounded-3xl border border-dashed border-[#E5E7EB]">
            <MessageSquare className="w-12 h-12 text-[#6B7280]/40 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#111827] mb-2">No reviews available</h3>
            <p className="text-sm text-[#4B5563] max-w-md mx-auto">{error}</p>
          </div>
        ) : (
          /* Reviews Scroll Track */
          <div
            ref={scrollContainerRef}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setIsTouched(false)}
            onTouchCancel={() => setIsTouched(false)}
            onMouseDown={() => setIsTouched(true)}
            onMouseUp={() => setIsTouched(false)}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 scrollbar-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="w-[290px] sm:w-[350px] md:w-[380px] shrink-0 snap-start snap-always backdrop-blur-md bg-white/60 border border-[#E5E7EB]/50 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between shadow-premium hover:shadow-premium-hover hover:scale-[1.01] transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    {/* Stars */}
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 fill-current ${
                            i < review.rating ? "text-amber-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Small Google G Badge for validation */}
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-[#111827] leading-relaxed italic mb-8 font-medium line-clamp-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Profile Details */}
                <div className="border-t border-[#E5E7EB]/50 pt-5 flex items-center gap-4">
                  {review.profile_photo_url ? (
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100"
                      onError={(e) => {
                        // Fallback to text initials if photo fails to load
                        (e.target as HTMLElement).style.display = "none";
                        const sib = (e.target as HTMLElement).nextElementSibling;
                        if (sib) sib.removeAttribute("style");
                      }}
                    />
                  ) : null}
                  
                  {/* Initials Fallback if no URL or load error */}
                  <div
                    style={review.profile_photo_url ? { display: "none" } : undefined}
                    className="w-10 h-10 rounded-full bg-[#0F6CBD]/10 border border-[#0F6CBD]/20 text-[#0F6CBD] flex items-center justify-center font-bold text-xs shrink-0 font-mono"
                  >
                    {review.author_name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase()}
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold text-[#111827] leading-none mb-1 group-hover:text-[#0F6CBD] transition-colors">
                      {review.author_name}
                    </h4>
                    <span className="text-[10px] text-[#6B7280] font-medium font-mono uppercase tracking-wider block">
                      {review.relative_time_description}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
