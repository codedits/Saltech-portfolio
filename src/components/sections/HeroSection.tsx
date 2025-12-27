"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-0 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-12 pt-8">
        <div className="flex items-center gap-2 text-accent text-sm font-medium animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          WE BUILD WEBSITES, STORES & APPS — DEPLOYABLE WITHIN 24 HOURS
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <m.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-extrabold leading-[0.85] tracking-tighter text-foreground"
              style={{ fontSize: 'clamp(36px, 12vw, 120px)' }}
            >
              SALTECH
            </m.h1>
            <m.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="font-display font-extrabold leading-[0.85] tracking-tighter text-foreground"
              style={{ fontSize: 'clamp(36px, 12vw, 120px)' }}
            >
              .PVT
            </m.h1>
          </div>

          <div className="md:max-w-sm md:pt-8 space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground font-body leading-relaxed">
              <span className="text-foreground font-medium">SALTECH</span> builds production websites, online stores, and web apps using existing tools and platforms to solve real business problems and ship fast.
            </p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors group">
              SEE ALL PROJECTS (17+)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <div className="relative w-full h-64 sm:h-80 md:h-[360px] lg:h-[520px] overflow-hidden rounded-lg border border-foreground">
          <Image 
            src="/sal1.jpg" 
            alt="Creative professional portrait" 
            fill
            priority
            className="object-cover object-top" 
          />
          <div className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
