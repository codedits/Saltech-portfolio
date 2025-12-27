"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, ArrowUpRight, Github, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const projects = [
  { 
    id: 1, 
    title: "Atelier", 
    category: "FULL STACK", 
    url: "https://atelier-amber.vercel.app",
    image: "/atelier-amber.vercel.app_.jpg",
    cost: "PKR 30000",
    desc: "A high-performancee e-commerce platform for a luxury fashion brand. Features include dynamic product showcases, seamless checkout, and user account management.",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  { 
    id: 2, 
    title: "Movrex", 
    category: "Frontend", 
    url: "https://movrex.vercel.app",
    image: "/movrex.vercel.app_.jpg",
    cost: "PKR 15000",
    desc: "movie suggestion web application that provides personalized recommendations based on user preferences and viewing history.",
    tags: ["Next", "Node.js", "MovieDB API"]
  },
  { 
    id: 3, 
    title: "PHOTOGEN", 
    category: "Photography", 
    url: "https://photogen2.vercel.app", 
    image: "/photogen2.vercel.app_.jpg",
    cost: "PKR 18000",
    desc: "lightroom preset sharing platform that allows photographers to share preset collections, discover new styles, and enhance their photo editing workflow.",
    tags: ["MongoDB", "Next.js", "Tailwind"]
  },
  { 
    id: 4, 
    title: "BiteCheck", 
    category: "Food Critics", 
    url: "https://bitecheckpk.vercel.app/", 
    image: "/bitecheckpk.vercel.app_ (1).jpg",
    cost: "PKR 16000",
    desc: "Food critics platform that allows users to discover, review, and rate local restaurants and eateries.",
    tags: ["TypeScript", "Next.js", "Cloudinary" ]
  },
 
];

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

function ProjectMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-white/5 p-0 w-full sm:w-[400px]">
        <div className="flex flex-col h-full p-8 text-white">
          <SheetHeader className="text-left mb-12">
            <SheetTitle className="font-display font-black text-2xl tracking-tighter text-white">
              SALTECH<span className="text-accent">.</span>
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Link href="/" onClick={() => setMenuOpen(false)} className="font-display font-bold text-4xl hover:text-accent transition-colors">HOME</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Link href="/projects" onClick={() => setMenuOpen(false)} className="font-display font-bold text-4xl text-accent">WORK</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Link href="/#services" onClick={() => setMenuOpen(false)} className="font-display font-bold text-4xl hover:text-accent transition-colors">SERVICES</Link>
            </motion.div>
          </div>

          <div className="mt-auto pt-12 border-t border-white/5">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6">Get in touch</p>
            <a href="mailto:talhairfan1947@gmail.com" onClick={() => setMenuOpen(false)} className="font-display font-bold text-xl hover:text-accent transition-colors">
              talhairfan1947@gmail.com
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-white" />
            </div>
            <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-widest text-white">Back</span>
          </Link>
          
          <div className="font-display font-bold text-lg md:text-xl tracking-tighter text-white">
            SALTECH<span className="text-accent">.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Button variant="ghost" className="font-display font-semibold text-xs tracking-wider text-white hover:text-accent hover:bg-transparent transition-colors" asChild>
                <a href="mailto:talhairfan1947@gmail.com">Get in touch</a>
              </Button>
            </div>

            {/* Mobile Menu for Projects Page */}
            <div className="md:hidden">
              <ProjectMobileMenu />
            </div>

            {/* ProjectMobileMenu component placed inline for clarity */}

        </div>
      </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={FADE_UP}
            className="max-w-4xl"
          >
            <span className="text-accent font-display font-bold text-[10px] sm:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4 block">
              Selected Works
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
              Digital <br className="hidden sm:block" /> Experiences<span className="text-accent">.</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
              A collection of production-ready websites, web applications, and brand identities crafted with precision and purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link href={project.url} target="_blank" className="block space-y-4 md:space-y-6">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-8">
                      <div className="flex items-center gap-2 text-white font-display font-bold uppercase text-[10px] md:text-sm tracking-widest">
                        View Live Project <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-display font-bold text-[10px] md:text-xs uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-white/30 font-mono text-[10px] md:text-xs">
                        {project.cost}
                      </span>
                    </div>
                    
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tighter group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>

                    <p className="text-white/50 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] md:text-[10px] px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-white/10 bg-white/5 font-bold uppercase tracking-wider text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-7xl uppercase tracking-tighter mb-6 md:mb-8">
            Have a project <br /> in mind?
          </h2>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 md:px-10 py-6 md:py-8 text-base md:text-lg font-display font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
            asChild
          >
            <a href="mailto:talhairfan1947@gmail.com">Start a conversation</a>
          </Button>
        </div>
      </section>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #262626;
        }
      `}</style>
    </main>
  );
}
