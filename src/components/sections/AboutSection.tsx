"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { Download } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-background/60 mb-4 block">[ ABOUT SALTECH ]</span>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">From innovation to worldwide solutions.</h2>
            </Reveal>

            <p className="text-background/80 font-body leading-relaxed max-w-xl mb-6">
              At SALTECH, we design and build production websites, e‑commerce stores, and web applications using modern tools and platforms. We focus on practical, production-ready solutions that solve real business problems and scale.
            </p>

            <Button variant="default" className="bg-accent text-white rounded-full px-6 py-3 font-bold uppercase tracking-wider shadow-md" asChild>
              <a href="mailto:talhairfan1947@gmail.com">let's work together</a>
            </Button>

          </div>

          <div className="space-y-6">
            <m.div
              className="relative aspect-square max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/3"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/about.jpg" 
                alt="About portrait" 
                fill
                className="object-cover" 
              />
            </m.div>

            <div className="space-y-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent">about me</span>
                <p className="text-background/90 text-sm mt-2">I am a Computer Science student at University Of Centeral Punjab with a focus on AI-integrated software engineering. I utilize AI tools to streamline the coding process and build intelligent applications that automate complex workflows. Dedicated to delivering rapid, high-quality web solutions that bridge the gap between modern technology and practical business needs.</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-accent">[ MY MISSION ]</span>
                <p className="text-background/90 text-sm mt-2">Empower teams to solve real problems with practical software and web solutions.</p>
              </div>

              <div className="mt-2">
                <Button variant="outline" size="sm" className="border-white/10 text-background/90" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
