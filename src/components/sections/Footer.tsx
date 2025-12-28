"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="py-12 border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="font-display font-extrabold text-lg">SALTECH</span>
              <span className="text-accent group-hover:animate-pulse">.</span>
            </Link>

            <p className="text-background/80 mt-4 max-w-sm font-body">We build production websites, stores and apps — fast, reliable and tailored to your needs.</p>

            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="Instagram" className="text-background/60 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Twitter" className="text-background/60 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="text-background/60 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-background/60 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="flex justify-between md:justify-center gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">landing page</a></li>
                <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">dynamic website</a></li>
                <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">E-commerce</a></li>
                <li><a href="#services" className="text-background/80 hover:text-accent transition-colors">CRM</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-background/80 hover:text-accent transition-colors">About</a></li>
                <li><Link href="/projects" className="text-background/80 hover:text-accent transition-colors">Work</Link></li>
                <li><a href="#contact" className="text-background/80 hover:text-accent transition-colors">Contact</a></li>
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-accent transition-colors">Resume</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Stay up to date</h4>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <label htmlFor="footer-email" className="sr-only">Email</label>
                <input id="footer-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 bg-background/10 border border-white/5 rounded-md px-3 py-2 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-accent" />
                <button type="submit" className="bg-accent text-white px-4 py-2 rounded-md font-semibold">Subscribe</button>
              </form>
            ) : (
              <p className="text-background/80">Thanks for subscribing! Check your inbox.</p>
            )}

            <p className="text-muted-foreground text-xs mt-3">We only send occasional updates. No spam.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 SALTECH. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  );
}

