"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronDown, Download, Mail, Quote, Sparkles, Star, Subscript, Menu } from "lucide-react";
// Use public folder for Next.js static images
import { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Shared motion transition presets for consistent, smooth animations
const SPRING: Transition = { type: "spring", stiffness: 100, damping: 15 } as Transition;
const SPRING_SOFT: Transition = { type: "spring", stiffness: 90, damping: 15 } as Transition;
const SPRING_FAST: Transition = { type: "spring", stiffness: 120, damping: 12 } as Transition;
const SPRING_GENTLE: Transition = { type: "spring", stiffness: 50, damping: 20 } as Transition;
const EASE_OUT: Transition = { duration: 0.6, ease: "easeOut" } as Transition;

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Sheet>
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
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.isLink ? (
                      <Link href={link.href} className="font-display font-bold text-4xl hover:text-accent transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="font-display font-bold text-4xl hover:text-accent transition-colors">
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/5">
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">Get in touch</p>
                <a href="mailto:talhairfan1947@gmail.com" className="font-display font-bold text-xl hover:text-accent transition-colors">
                  talhairfan1947@gmail.com
                </a>
                <div className="flex gap-6 mt-8">
                  <a href="#" className="text-xs font-bold tracking-widest hover:text-accent transition-colors">INSTAGRAM</a>
                  <a href="#" className="text-xs font-bold tracking-widest hover:text-accent transition-colors">LINKEDIN</a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

function HeroSection() {
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
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-extrabold leading-[0.85] tracking-tighter text-foreground"
              style={{ fontSize: 'clamp(36px, 12vw, 120px)' }}
            >
              SALTECH
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="font-display font-extrabold leading-[0.85] tracking-tighter text-foreground"
              style={{ fontSize: 'clamp(36px, 12vw, 120px)' }}
            >
              .PVT
            </motion.h1>
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
          <img src="/sal1.jpg" alt="Creative professional portrait" className="object-cover w-full h-full object-top" />
          <div className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant="hero" 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-8 text-lg font-display font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
            asChild
          >
            <Link href="/projects">view projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}



function AboutSection() {
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
            <motion.div
              className="relative aspect-square max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/3"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/about.jpg" alt="About portrait" className="w-full h-full object-cover" />
            </motion.div>

            <div className="space-y-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent">about me</span>
                <p className="text-background/90 text-sm mt-2">I am a Computer Science student at the University of Central Punjab (UCP), Lahore. I focus on building practical web and software solutions that leverage AI and modern tools to solve real business problems, improve user experience, and automate workflows. I enjoy learning new technologies, collaborating on projects, and delivering solutions that make an impact.</p>
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

const logos = [
  { src: "/svgs/github.svg", name: "GitHub" },
  { src: "/svgs/githubcopilot.svg", name: "GitHub Copilot" },
  { src: "/svgs/nextjs-svgrepo-com.svg", name: "Next.js" },
  { src: "/svgs/react-svgrepo-com.svg", name: "React" },
  { src: "/svgs/vercel-icon-svgrepo-com.svg", name: "Vercel" },
];

function LogoMarquee() {
  return (
    <div className="py-12 border-y border-border overflow-hidden bg-secondary/50">
      <div className="animate-marquee flex gap-12 items-center whitespace-nowrap">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-4 mr-8">
            <img src={logo.src} alt={logo.name} className="w-10 h-10 object-contain" />
            <span className="text-sm font-display font-bold text-black">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const workMethods = [
  { num: "01", title: "planning", desc: "Before we start, we determine if and how I can help you. What are your requirements for your new design? Why do you need a new design? What goals do you have in that?", points: ["We get to know each other better", "Determine how i can best assist you", "Understand the goals you have for the work"] },
  { num: "02", title: "concept & strategy", desc: "Once we have assessed your requirements and objectives, we move into the concept and strategy phase. Here, we define the overall vision and strategic approach.", points: ["UX/UI Design", "Wireframes", "Interactive Prototype"] },
  { num: "03", title: "design onboarding", desc: "I'm thrilled to embark on this creative journey with you. My mission is to bring your vision to life with a collaborative and personalised design process.", points: ["Personal Workshop", "Personalised Video Tutorials", "Edit Text and Images directly"] },
];

function WorkMethodSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Let me show HOW i do</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">discover MY work method</h2>
          <span className="text-xs uppercase tracking-widest text-muted-foreground mt-4 block">[ ©elevate your visual design with expert techniques and advice ]</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workMethods.map((method, i) => (
            <motion.div
              key={i}
              className="p-6 md:p-8 border border-foreground group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, borderColor: "var(--accent)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING, delay: i * 0.1 }}
            >
              <span className="text-xs text-muted-foreground">[ {method.num} ]</span>
              <motion.div
                className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center my-6"
                whileHover={{ scale: 1.15, rotate: 15 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </motion.div>
              <motion.h3
                className="font-display font-bold text-xl mb-4"
                whileHover={{ color: "var(--accent)" }}
                transition={{ duration: 0.4 }}
              >
                {method.title}
              </motion.h3>
              <p className="text-muted-foreground text-sm mb-6 font-body">{method.desc}</p>
              <ul className="space-y-2">
                {method.points.map((point, j) => (
                  <motion.li
                    key={j}
                    className="text-sm text-foreground/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.25 + j * 0.08 }}
                  >
                    - {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MotivationSection() {
  return (
    <section className="py-16 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">MOTIVATION</h2>
            <span className="text-xs uppercase tracking-widest text-background/60">THE JOURNEY OF CREATIVE INSPIRATION</span>
          </div>

          <div className="relative">
            <span className="text-xs uppercase tracking-widest text-background/60 mb-8 block">[ MY MOTO ]</span>
            <Quote className="w-16 h-16 text-accent/30 mb-6" />
            <p className="text-lg md:text-xl font-body leading-relaxed mb-8">
              Creativity is the heartbeat of design. Every pixel you place, and concept you bring to life is a testament to your unique vision. <span className="text-accent">"Remember, each challenge is an opportunity to innovate, each setback is a step toward your breakthrough."</span>
            </p>
            <p className="text-background/70 font-body leading-relaxed mb-8">
              Embrace the process, trust your instincts and let your passion drive you forward. Your designs have the power to inspire and leave a <span className="text-accent">"Lasting impact on the World"</span>
            </p>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-lg italic">"Design is not just what it looks like and feels like. Design is how it works."</p>
              <span className="text-background/60 text-sm mt-2 block">— Steve Jobs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: "Websites & E-commerce", desc: "Build responsive websites and online stores using platforms like Next.js, Shopify, and headless CMS to sell and scale.", price: "PKR 2000", features: ["Responsive Sites", "Shopify/Headless", "Payment Integration"] },
  { title: "UI / UX Design", desc: "User-centered interfaces and prototypes that improve conversion and usability across devices.", price: "PKR 1500", features: ["Prototyping", "User Flows", "A/B Guidance"] },
  { title: "Web Apps & Integrations", desc: "Production web applications, backend APIs, and third-party integrations to automate workflows and connect systems.", price: "PKR 3000", features: ["APIs & Webhooks", "Integrations", "Scalable Architecture"] },
  { title: "Product Strategy", desc: "Roadmaps and MVP planning to prioritize features, validate ideas, and ship with minimal risk.", price: "PKR 4000", features: ["Roadmaps", "MVP Planning", "Launch Support"] },
];

function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter">Services</h2>
          <p className="text-black mt-4 max-w-2xl mx-auto font-body font-medium px-4">Everything starts with data, rapid experiments, and clear metrics to validate AI-driven ideas.</p>
          <span className="text-xs uppercase tracking-widest text-black mt-4 block font-bold">[ WHAT WE DO © ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group p-6 md:p-12 border-4 border-black bg-white text-black rounded-none shadow-[6px_6px_0px_0px_rgba(79,21,255,1)] md:shadow-[8px_8px_0px_0px_rgba(79,21,255,1)] relative flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border-4 border-black bg-black text-white font-display font-black text-xl md:text-2xl shrink-0">
                  0{i + 1}
                </div>
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 border-4 border-black font-display font-black bg-white shadow-[3px_3px_0px_0px_rgba(79,21,255,1)] md:shadow-[4px_4px_0px_0px_rgba(79,21,255,1)] text-sm md:text-base">
                  {service.price}
                </div>
              </div>

              <h3 className="font-display font-black text-2xl md:text-4xl mb-4 md:mb-6 tracking-tight uppercase leading-none">
                {service.title}
              </h3>

              <div className="mb-6 md:mb-8">
                <p className="text-black font-body font-medium leading-tight text-base md:text-lg">
                  {service.desc}
                </p>
              </div>

              <div className="space-y-4 mb-8 md:mb-10 flex-grow">
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-black bg-black text-white px-2 py-1 inline-block">
                  Key Features
                </span>
                <div className="grid gap-2">
                  {service.features.map((feature, j) => (
                    <p key={j} className="text-sm md:text-base text-black flex items-center gap-3 font-bold">
                      <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-black inline-block shrink-0" /> 
                      {feature}
                    </p>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "10+", label: "years of experience" },
  { value: "20", label: "project done" },
  { value: "100+", label: "satisfied customers" },
  { value: "25+", label: "Return Clients" },
];

function StatsSection() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...SPRING, delay: i * 0.12 }}
            >
              <motion.span
                className="font-display font-bold text-4xl md:text-6xl text-accent block"
                whileInView={{ textShadow: "0 0 25px hsl(var(--accent) / 0.25)" }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mt-2">[ {stat.label} ]</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamsSection() {
  return (
    <section id="teams" className="py-16 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-background">Join the Team</h2>
          <p className="text-background/80 mt-4 font-body max-w-2xl">We're always looking for curious, motivated people who love how things work. You don't have to be an expert — passion and a willingness to learn matter most.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Curiosity & Attitude</h3>
            <p className="text-background/80 text-sm">You should be naturally curious and enjoy learning how things work — that beats credentials alone.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Basic Programming</h3>
            <p className="text-background/80 text-sm">Know the basics (HTML/CSS/JavaScript). You don't need to be a senior engineer to contribute meaningfully.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Design Eye</h3>
            <p className="text-background/80 text-sm">A good sense of design and UX is a huge plus — visual sensibility helps across roles.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Graphic Design Experience</h3>
            <p className="text-background/80 text-sm">Experience with graphic tools (Figma, Photoshop, Illustrator) is valued but not mandatory.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Git & Collaboration</h3>
            <p className="text-background/80 text-sm">Comfort with Git and basic version control workflows makes collaboration much easier.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Show Your Work</h3>
            <p className="text-background/80 text-sm">Share projects — they don't need to be huge. Small, real projects show problem-solving and initiative.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-background/80 mb-6">Ready to join us or want to learn more?</p>
          <Button asChild size="lg" variant="hero" className="bg-accent text-white rounded-full px-8 py-4 font-display font-bold">
            <a href="mailto:talhairfan1947@gmail.com">Apply / Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// export fallback name used in page render order
// replace old ExperienceSection reference with TeamsSection in export list below if needed

const skills = [
  { name: "figma", percentage: "98%", type: "DESIGN TOOL", desc: "Figma is a collaborative design tool for creating and prototyping user interfaces." },
  { name: "framer", percentage: "98%", type: "VISUAL DESIGN", desc: "Framer excels in photo editing and graphic design, offering advanced tools." },
  { name: "webflow", percentage: "96%", type: "WIREFRAME / DESIGN", desc: "Web Flow enables interactive design and prototyping for web and mobile apps." },
  { name: "notion", percentage: "92%", type: "FRONT END DEVELOPER", desc: "Notion adds interactivity and dynamic functionality to Websites." },
  { name: "Canva", percentage: "90%", type: "DESIGN", desc: "Canva provides intensive training in skills like Figma, Adobe XD, and JavaScript." },
];

function SkillsSection() {
  return (
    <section className="py-16 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-background">favourite stack</h2>
          <p className="text-background/80 mt-4 font-body">explore my curated top design picks</p>
          <span className="text-accent text-sm mt-2">My skill</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="p-6 border border-white/10 bg-white/5 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.h3
                  className="font-display font-bold text-xl text-background"
                  whileHover={{ color: "var(--accent)" }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                </motion.h3>
                <span className="text-xs text-background/70">[ {skill.percentage} ]</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-accent">{skill.type}</span>
              <p className="text-background/80 text-sm mt-4 font-body">{skill.desc}</p>
              <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.percentage }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ ...SPRING_GENTLE, delay: 0.15 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Ayesha Khan", role: "Founder — Laari Boutique (Lahore)", date: "June 2025", text: "SALTECH rebuilt our online store and migrated 1,200 products without downtime. Sales picked up within a week and the admin interface is so easy my whole team uses it confidently." },
  { name: "Imran Ali", role: "CEO — Raza Electronics (Karachi)", date: "May 2025", text: "We needed a fast, reliable storefront and integrations with our POS. They delivered on schedule, handled the payment gateways, and improved our checkout conversion significantly." },
  { name: "Fatima Siddiqui", role: "Marketing Head — Noor Cosmetics (Islamabad)", date: "April 2025", text: "The website looks beautiful and loads quickly on mobile. SALTECH also helped with basic SEO and content migration — we saw organic visits rise in two weeks." },
  { name: "Ahmed Raza", role: "Product Manager — ClickServe (Rawalpindi)", date: "March 2025", text: "Their team moved our app to a modern stack and added the features we needed for orders and subscriptions. Communication was clear and the support after launch was excellent." },
];

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">testimonials</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">WHAT MY CLIENT SAY</h2>
          <span className="text-xs text-muted-foreground mt-4 block">[ See what our clients have to say about their working experience ]</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="p-6 md:p-10 border border-foreground group"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -10, borderColor: "var(--accent)", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING_SOFT, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.25 + j * 0.08 }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </motion.div>
                <span className="text-xs text-muted-foreground">[ {testimonial.date} ]</span>
              </div>
              <p className="text-lg font-body leading-relaxed mb-8">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-display font-bold text-accent">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-display font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What services do you offer?", a: "We build websites, e-commerce stores, and web applications using proven tools and platforms — from design and development to integrations and deployment." },
    { q: "How long does a typical project take?", a: "Timelines vary: brochure sites can be 1–2 weeks, standard e-commerce stores 2–4 weeks, and custom web apps 4–12+ weeks depending on scope and integrations." },
    { q: "Which platforms and technologies do you use?", a: "We work with Next.js, React, Tailwind, Shopify (and headless commerce), popular headless CMSs, and deploy to Vercel, Netlify or managed hosts as needed." },
    { q: "Do you provide post-launch support?", a: "Yes — we offer hosting, updates, monitoring, and ongoing feature or maintenance plans to keep your site secure and current." },
    { q: "Can you migrate my existing site or data?", a: "Absolutely — we handle content and product migrations, preserve SEO, and implement redirects to ensure a smooth transition." },
    { q: "How do you price projects?", a: "Pricing depends on scope — we provide fixed-price quotes for defined deliverables or hourly/retainer options for ongoing work after a short discovery call." },
  ];

  return (
    <section className="py-16 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-muted-foreground mt-4 font-body uppercase tracking-widest text-sm">ANSWERS TO COMMON QUERIES WE OFTEN RECEIVE</p>
          <span className="text-accent text-sm mt-2 block">GET TO KNOW MORE</span>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
                whileHover={{ backgroundColor: "hsl(var(--accent) / 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-display font-semibold text-lg pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </motion.button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === i
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground font-body">{faq.a}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            className="font-display font-bold text-4xl md:text-7xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
          >
            let's build digital products that solve problems
          </motion.h2>
          <motion.p
            className="text-xl text-background/70 font-body max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.25 }}
          >
            "Collaborate to design, build, and ship websites, stores, and web apps that move the business needle."
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
        >
          <Button variant="hero" size="lg" asChild>
            <motion.a
              href="mailto:talhairfan1947@gmail.com"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Now
            </motion.a>
          </Button>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { name: "Instagram", href: "https://www.instagram.com/saltech.pvt/" },
            { name: "Twitter", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "Dribbble", href: "#" },
            { name: "LinkedIn", href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-accent font-body"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.12 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.5 + i * 0.06 }}
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-body text-sm">© 2024 SALTECH. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">About</a>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">Work</Link>
            <a href="#services" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">Services</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <LogoMarquee />
      <WorkMethodSection />
      <MotivationSection />
      <ServicesSection />
      <StatsSection />
      <TeamsSection />
      <SkillsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
