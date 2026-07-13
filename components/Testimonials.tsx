"use client";

import { Star, Quote, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { reviewsList } from "@/data/testimonials";

export default function Testimonials() {

  return (
    <section className="py-32 bg-white relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
            Testimonials
          </div>
          <p className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Trusted by Hundreds of Happy Clients
          </p>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Read verified feedback from our residential and corporate clients regarding our engineering quality, response speed, and long-term support.
          </p>
        </div>

        {/* Testimonial speech-bubble Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviewsList.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-secondary-bg border border-border-light rounded-3xl p-8 flex flex-col justify-between relative group hover:shadow-premium hover:scale-[1.01] transition-all duration-300"
            >
              <Quote className="w-9 h-9 text-primary/5 absolute top-6 right-6" />

              <div>
                {/* Google verified stars */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] font-extrabold text-text-muted font-mono tracking-wider">
                    VERIFIED GOOGLE REVIEW
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-text-dark/95 leading-relaxed italic mb-8 font-medium">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Client Info Bar */}
              <div className="border-t border-border-light/60 pt-6 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center font-bold text-xs shrink-0 font-mono`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-text-dark flex items-center gap-1.5 leading-none mb-1">
                    {review.name}
                    <UserCheck className="w-3.5 h-3.5 text-success-green" />
                  </h4>
                  <p className="text-[10px] text-text-muted font-medium">
                    {review.role} • {review.company} ({review.location})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
