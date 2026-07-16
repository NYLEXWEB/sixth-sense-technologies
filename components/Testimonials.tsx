"use client";

import { Star, CheckCircle, ExternalLink, Edit3 } from "lucide-react";
import { motion } from "framer-motion";

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

export default function Testimonials() {
  const reviews = [
    {
      name: "Suresh Kumar",
      role: "Operations Director",
      company: "Apex Builders",
      location: "Pulimoodu, Trivandrum",
      rating: 5,
      comment: "We contracted Sixth Sense Technologies for a complete CCTV surveillance and door entry access control setup at our corporate headquarters. Their cabling path is remarkably clean, and the Hikvision IP cameras operate flawlessly. Professional technical engineers.",
      initials: "SK",
      color: "bg-blue-600/10 text-blue-600 border-blue-600/20",
      isLocalGuide: true,
      timeAgo: "2 weeks ago",
    },
    {
      name: "Dr. Anjali Menon",
      role: "Homeowner",
      company: "Residential Villa",
      location: "Vazhuthacaud, Trivandrum",
      rating: 5,
      comment: "Highly pleased with their smart villa surveillance package. They installed WiFi security cameras and a video door phone terminal at our house. We can monitor everything from our phones easily. The technical team was patient in explaining the application settings.",
      initials: "AM",
      color: "bg-emerald-600/10 text-emerald-600 border-emerald-600/20",
      isLocalGuide: false,
      timeAgo: "1 month ago",
    },
    {
      name: "Deepak R.",
      role: "IT Administrator",
      company: "Technopark Enterprise",
      location: "Kazhakkoottam, Trivandrum",
      rating: 5,
      comment: "We suffered a critical local server crash and router outage during corporate hours. Sixth Sense Technologies dispatched their network support engineers immediately. They resolved the crash, structured our subnet partitions, and configured a secure firewall.",
      initials: "DR",
      color: "bg-purple-600/10 text-purple-600 border-purple-600/20",
      isLocalGuide: true,
      timeAgo: "3 months ago",
    },
  ];

  const starDistribution = [
    { stars: 5, percentage: 100, count: 97 },
    { stars: 4, percentage: 0, count: 0 },
    { stars: 3, percentage: 0, count: 0 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ];

  return (
    <section id="reviews" className="py-20 md:py-24 bg-white relative overflow-hidden bg-grid-pattern">
      {/* Decorative ambient blurs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4 font-mono">
            GOOGLE REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Trusted by Local Businesses &amp; Homeowners
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Real feedback from verified Google Maps listings representing Sixth Sense Technologies&apos; operations in Thiruvananthapuram.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Rating Stats Widget */}
          <div className="lg:col-span-4 bg-[#f8f9fb] border border-border-light rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white border border-border-light rounded-2xl flex items-center justify-center shadow-sm">
                <GoogleIcon />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-3xl font-black text-text-dark leading-none">5.0</span>
                  <span className="text-xs font-extrabold text-text-muted">/ 5</span>
                </div>
                <div className="flex text-amber-500 gap-0.5 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border-light pt-6 space-y-3">
              <span className="text-[10px] font-extrabold text-text-muted tracking-wider uppercase block font-mono">
                Rating Star Breakdown
              </span>
              
              <div className="space-y-2">
                {starDistribution.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-3 font-bold text-text-muted">{row.stars}</span>
                    <Star className="w-3 h-3 text-amber-500 fill-current shrink-0" />
                    <div className="flex-1 h-2 bg-white border border-border-light rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 rounded-full" 
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-6 text-right font-mono font-bold text-text-muted">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border-light pt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-success-green">
                <CheckCircle className="w-4 h-4" />
                <span>97+ Verified Google Reviews</span>
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed font-medium">
                All reviews correspond to verified local installations and customer service ratings.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://www.google.com/maps/place/SIXTH+SENSE+TECHNOLOGIES/@8.4936996,76.9457896,861m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3b05bb1e27c99aa5:0x9c5175a40c08c79!2sSIXTH+SENSE+TECHNOLOGIES!8m2!3d8.4936996!4d76.9483645!9m1!1b1!16s%2Fg%2F11gyft3n1w!3m7!1s0x3b05bb1e27c99aa5:0x9c5175a40c08c79!8m2!3d8.4936996!4d76.9483645!9m1!1b1!16s%2Fg%2F11gyft3n1w?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-border-light hover:border-primary/30 hover:bg-secondary-bg text-text-dark text-xs font-extrabold transition-all shadow-sm group cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors" />
                Write a Review
              </a>
              <a
                href="https://www.google.com/maps/place/SIXTH+SENSE+TECHNOLOGIES/@8.4936996,76.9457896,861m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3b05bb1e27c99aa5:0x9c5175a40c08c79!2sSIXTH+SENSE+TECHNOLOGIES!8m2!3d8.4936996!4d76.9483645!9m1!1b1!16s%2Fg%2F11gyft3n1w!3m7!1s0x3b05bb1e27c99aa5:0x9c5175a40c08c79!8m2!3d8.4936996!4d76.9483645!9m1!1b1!16s%2Fg%2F11gyft3n1w?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-text-dark hover:bg-primary text-white text-xs font-extrabold transition-all shadow-sm cursor-pointer"
              >
                View on Google Maps
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Block: Reviews Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white border border-border-light rounded-3xl p-6 flex flex-col justify-between hover:shadow-premium hover:scale-[1.01] transition-all duration-300 relative group md:last:col-span-2 lg:last:col-span-1"
              >
                <div>
                  {/* Google Brand Logo indicator */}
                  <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-70 transition-opacity">
                    <GoogleIcon />
                  </div>

                  {/* Rating Stars & Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {review.isLocalGuide && (
                      <span className="text-[8px] font-extrabold bg-amber-500/10 text-amber-700 px-1.5 py-0.5 rounded-md font-mono">
                        LOCAL GUIDE
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-text-dark/95 leading-relaxed italic mb-8 font-medium">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Avatar and Name */}
                <div className="border-t border-border-light/60 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${review.color} border flex items-center justify-center font-bold text-xs shrink-0 font-mono shadow-sm`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-text-dark leading-none mb-1 flex items-center gap-1">
                        {review.name}
                      </h4>
                      <p className="text-[9px] text-text-muted font-medium font-mono uppercase">
                        {review.role} • {review.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-text-muted shrink-0 font-bold">
                    {review.timeAgo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
