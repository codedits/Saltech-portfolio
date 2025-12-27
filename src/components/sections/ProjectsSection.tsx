"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  { 
    id: 1, 
    title: "Atelier", 
    category: "FULL STACK", 
    url: "https://atelier-amber.vercel.app",
    image: "/atelier-amber.vercel.app_.jpg",
    desc: "A high-performance e-commerce platform for a luxury fashion brand.",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  { 
    id: 2, 
    title: "Movrex", 
    category: "Frontend", 
    url: "https://movrex.vercel.app",
    image: "/movrex.vercel.app_.jpg",
    desc: "Movie suggestion web application that provides personalized recommendations.",
    tags: ["Next", "Node.js", "MovieDB API"]
  },
  { 
    id: 3, 
    title: "PHOTOGEN", 
    category: "Photography", 
    url: "https://photogen2.vercel.app", 
    image: "/photogen2.vercel.app_.jpg",
    desc: "Lightroom preset sharing platform for photographers to share collections.",
    tags: ["MongoDB", "Next.js", "Tailwind"]
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="py-16 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Reveal delay={0.06}>
              <h2 className="text-muted-foreground text-sm mb-2">Selected</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="font-display font-bold text-4xl md:text-6xl">WORK</h3>
            </Reveal>
          </div>
          <span className="text-muted-foreground text-sm hidden md:block">explore</span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-body">
          AI-first products, scalable systems, human-centered interfaces, and engineering that solves real problems. The proof is in our projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, i) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <Link href={project.url} target="_blank" className="block space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-foreground/10 bg-background">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-display font-bold text-[10px] uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-2xl uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-2 font-body">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full border border-foreground/10 bg-background font-bold uppercase tracking-wider text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <Button 
            variant="hero" 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-8 text-lg font-display font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
            asChild
          >
            <Link href="/projects">view all projects</Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
