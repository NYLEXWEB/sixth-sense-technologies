"use client";

import { useRef, useEffect } from "react";
import { servicesList } from "@/data/services";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;
    let isInteracting = false;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (isInteracting) return;
        const { scrollLeft, scrollWidth, clientWidth } = container;
        
        // Loop back to beginning if we reach the end of the scroll width
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll forward by one card width (approx 350px)
          container.scrollTo({ left: scrollLeft + 350, behavior: "smooth" });
        }
      }, 3500);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    const handleInteractionStart = () => { isInteracting = true; };
    const handleInteractionEnd = () => { isInteracting = false; };

    container.addEventListener("mouseenter", handleInteractionStart);
    container.addEventListener("mouseleave", handleInteractionEnd);
    container.addEventListener("touchstart", handleInteractionStart);
    container.addEventListener("touchend", handleInteractionEnd);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", handleInteractionStart);
      container.removeEventListener("mouseleave", handleInteractionEnd);
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("touchend", handleInteractionEnd);
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-24 bg-white relative bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 radial-glow-primary -z-10" />

      <div className="w-full">
        {/* Header with Navigation Controls */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
              Security &amp; IT Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
              Comprehensive Digital Infrastructure
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We engineer premium security, smart home automation, enterprise software solutions, and IT infrastructures to keep modern projects secure and scalable.
            </p>
          </div>

          {/* Navigation Arrows for Manual Scroll */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border-light bg-white flex items-center justify-center text-text-muted hover:text-primary hover:border-primary hover:shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border-light bg-white flex items-center justify-center text-text-muted hover:text-primary hover:border-primary hover:shadow-sm transition-all duration-200 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Manually Scrollable Slider Container */}
        <div className="relative w-full overflow-hidden select-none">
          {/* Scroll Track (Scrollbar hidden) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-12 pb-6 scrollbar-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bento-card flex flex-col justify-between group overflow-hidden h-[420px] w-[285px] sm:w-[350px] shrink-0 bg-white relative snap-start"
                >
                  {/* Card Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-50 shrink-0 select-none">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="350px"
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-50 transition-opacity" />
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                    <div
                      className="absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none -z-10"
                      style={{ backgroundColor: service.glowColor }}
                    />

                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-3.5 mb-3.5">
                        <div className={`w-9 h-9 rounded-xl bg-[#f8f9fb] border border-border-light flex items-center justify-center ${service.iconColor} shadow-sm shrink-0 group-hover:scale-105 transition-transform`}>
                          <Icon className="w-4.5 h-4.5 shrink-0" />
                        </div>
                        <h3 className="text-base font-black text-text-dark tracking-tight leading-none">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs text-text-muted leading-relaxed font-semibold">
                        {service.description}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-primary transition-all mt-6 group-hover:gap-2.5"
                    >
                      Book Service
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
