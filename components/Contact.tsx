"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "CCTV Integration",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "CCTV Integration",
        message: "",
      });
      // reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const servicesOptions = [
    "CCTV Integration",
    "CCTV Maintenance & Repair",
    "Smart WiFi Camera Setup",
    "Structured IT Networking",
    "Biometric Entrance Access",
    "Video Door Phone System",
    "Computer Workstation Diagnostics",
    "Server Infrastructure Maintenance",
  ];

  return (
    <section id="contact" className="py-20 md:py-24 bg-white relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-primary mb-4">
            Connect Portal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-dark tracking-tighter leading-tight mb-4">
            Schedule a Technical Audit
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Have a project or want to request a free diagnostic site visit? Send a message directly to our engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Coordinates details & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <div className="bg-[#f8f9fb] border border-border-light rounded-3xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider mb-1 font-mono">India Office (Operating Division)</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    Sixth Sense Technologies, Pulimoodu Jn,<br />
                    Thiruvananthapuram, Kerala - 695001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-border-light/60 pt-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider mb-1 font-mono">International Branches</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    Riyadh (Saudi Arabia) • Muscat (Oman) • Dubai (United Arab Emirates)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider mb-1 font-mono">Phone Helpline</h4>
                  <a href="tel:+919747168484" className="text-xs text-text-muted block hover:text-primary transition-colors font-medium">
                    +91 97471 68484
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-[#25D366] shrink-0 shadow-sm hover:border-[#25D366]/35 transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider mb-1 font-mono">WhatsApp Connect</h4>
                  <a href="https://wa.me/919747168484" className="text-xs text-text-muted block hover:text-primary transition-colors font-medium">
                    +91 97471 68484
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider mb-1 font-mono">Inquiry Inbox</h4>
                  <a href="mailto:info@sixthsensetech.in" className="text-xs text-text-muted block hover:text-primary transition-colors font-medium">
                    info@sixthsensetech.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-text-dark uppercase tracking-wider mb-1 font-mono">Operating Hours</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-medium">
                    Monday – Saturday: 9:00 AM – 6:30 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded (Centered at Pulimoodu Jn) */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-md border border-border-light relative bg-secondary-bg">
              <iframe
                title="Sixth Sense Technologies Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0648439401735!2d76.9439603758804!3d8.493188591548173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b38a4b26059d%3A0xa6c9171f28b49e3c!2sPulimoodu%20Jn%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#f8f9fb] border border-border-light rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            <h3 className="text-xl font-extrabold text-text-dark mb-1">
              Submit Site Request
            </h3>
            <p className="text-xs text-text-muted mb-8 font-medium">
              Provide your project requirements and our technical manager will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="form-name" className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 font-mono">
                    Client Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs font-semibold text-text-dark transition-all shadow-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="form-phone" className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 font-mono">
                    Phone Number
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs font-semibold text-text-dark transition-all shadow-sm"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-email" className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 font-mono">
                  Email Address
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs font-semibold text-text-dark transition-all shadow-sm"
                  placeholder="e.g. client@example.com"
                />
              </div>

              <div>
                <label htmlFor="form-service" className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 font-mono">
                  Service Division
                </label>
                <select
                  id="form-service"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs font-semibold text-text-dark transition-all shadow-sm"
                >
                  {servicesOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="form-message" className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 font-mono">
                  Project Description
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-border-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-xs font-semibold text-text-dark transition-all resize-none shadow-sm"
                  placeholder="Briefly describe your requirements (e.g. CCTV setup for a 2-story office)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning
                className="w-full flex items-center justify-center gap-2 py-4 bg-text-dark hover:bg-primary disabled:bg-text-dark/70 text-white font-extrabold text-xs rounded-2xl transition-all shadow-md"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Submit Survey Request
                  </>
                )}
              </button>

              {submitSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-extrabold text-success-green text-center mt-3"
                >
                  Request logged successfully. Our technician will contact you shortly.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
