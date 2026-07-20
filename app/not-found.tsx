import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on Sixth Sense Technologies.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-between min-h-screen bg-white text-text-dark relative overflow-hidden font-sans">
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header bar */}
      <header className="py-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="font-display font-extrabold text-xl tracking-tight text-text-dark">
          Sixth Sense Technologies
        </Link>
      </header>

      {/* Main content block */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 max-w-xl mx-auto py-12">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8">
          <AlertTriangle className="w-8 h-8" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter leading-none mb-6 font-display">
          Page Not Found
        </h1>
        
        <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-10 font-medium">
          The link you followed may be broken, or the page has been removed. We apologize for the inconvenience.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0F6CBD] via-[#0b5c9f] to-[#0c59a0] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </main>

      {/* Footer bar */}
      <footer className="py-8 px-6 text-center border-t border-border-light/60">
        <span className="text-[10px] text-text-muted font-bold tracking-wider uppercase font-mono">
          &copy; {new Date().getFullYear()} Sixth Sense Technologies. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
