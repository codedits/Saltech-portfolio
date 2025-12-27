"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { m } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "/projects", isLink: true },
    { name: "SERVICES", href: "#services" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-6 bg-background border-b border-white/10 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="flex items-center gap-8">
        <Link href="/" className="group">
          <span className="font-display md:font-body md:font-extrabold font-black text-lg md:text-xl tracking-normal md:tracking-normal">
            SALTECH
          </span>
          <span className="text-accent group-hover:animate-pulse ml-1">.</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          link.isLink ? (
            <Link key={link.name} href={link.href} className="font-display font-semibold text-xs tracking-wider text-foreground hover:text-accent transition-colors">
              {link.name}
            </Link>
          ) : (
            <a key={link.name} href={link.href} className="font-display font-semibold text-xs tracking-wider text-foreground hover:text-accent transition-colors">
              {link.name}
            </a>
          )
        ))}
        <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 font-display font-semibold text-xs tracking-wider" asChild>
          <a href="mailto:talhairfan1947@gmail.com">CONTACT NOW</a>
        </Button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center gap-4">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-white/5 p-0 w-full sm:w-[400px]">
            <div className="flex flex-col h-full p-8">
              <SheetHeader className="text-left mb-12">
                <SheetTitle className="font-display font-black text-2xl tracking-tighter">
                  SALTECH<span className="text-accent">.</span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <m.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.isLink ? (
                      <Link href={link.href} onClick={() => setMenuOpen(false)} className="font-display font-bold text-4xl hover:text-accent transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                          const target = document.querySelector(link.href) as HTMLElement | null;
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            window.location.hash = link.href;
                          }
                        }}
                        className="font-display font-bold text-4xl hover:text-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </m.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/5">
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">Get in touch</p>
                <a href="mailto:talhairfan1947@gmail.com" onClick={() => setMenuOpen(false)} className="font-display font-bold text-xl hover:text-accent transition-colors">
                  talhairfan1947@gmail.com
                </a>
                <div className="flex gap-6 mt-8">
                  <a href="#" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-accent transition-colors">INSTAGRAM</a>
                  <a href="#" onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-accent transition-colors">LINKEDIN</a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
