"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronDown, Download, Mail, Quote, Sparkles, Star, Subscript } from "lucide-react";
// Use public folder for Next.js static images
import { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";
import Reveal from "@/components/ui/reveal";

// Shared motion transition presets for consistent, smooth animations
const SPRING: Transition = { type: "spring", stiffness: 100, damping: 15 } as Transition;
const SPRING_SOFT: Transition = { type: "spring", stiffness: 90, damping: 15 } as Transition;
const SPRING_FAST: Transition = { type: "spring", stiffness: 120, damping: 12 } as Transition;
const SPRING_GENTLE: Transition = { type: "spring", stiffness: 50, damping: 20 } as Transition;
const EASE_OUT: Transition = { duration: 0.6, ease: "easeOut" } as Transition;

function Navigation() {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="flex items-center gap-6">
        <span className="font-display font-bold text-sm tracking-wider">SALTECH</span>
        <span className="hidden md:block text-muted-foreground text-sm">
          Toronto, Canada / {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#about" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">( ABOUT )</a>
        <a href="#services" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">( SERVICES )</a>
        <Button variant="outline" size="sm" className="border-foreground/20 hover:bg-foreground hover:text-background" asChild>
          <a href="#contact">CONTACT NOW</a>
        </Button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-0 overflow-x-visible">
      <div className="container mx-auto px-6 md:px-12 pt-8">
        <div className="flex items-center gap-2 text-accent text-sm font-medium animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          WE BUILD WEBSITES, STORES & APPS — DEPLOYABLE WITHIN 24 HOURS
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-extrabold leading-[0.85] tracking-tighter text-foreground whitespace-nowrap"
              style={{ fontSize: 'clamp(36px, 12vw, 120px)' }}
            >
              SALTECH
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="font-display font-extrabold leading-[0.85] tracking-tighter text-foreground whitespace-nowrap"
              style={{ fontSize: 'clamp(36px, 12vw, 120px)' }}
            >
              .PVT
            </motion.h1>
          </div>

          <div className="md:max-w-sm md:pt-8 space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground font-body leading-relaxed">
              <span className="text-foreground font-medium">SALTECH</span> builds production websites, online stores, and web apps using existing tools and platforms to solve real business problems and ship fast.
            </p>
            <a href="#work" className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors group">
              SEE ALL PROJECTS (17+)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg">
          <img src="/sal1.jpg" alt="Creative professional portrait" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/100 via-background/0 to-transparent" />
        </div>
      </div>
    </section>
  );
}

const projects = [
  { id: 1, title: "World Surf League", category: "UX/UI DESIGN", cost: "PKR 7000", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800" },
  { id: 2, title: "Panda", category: "BRANDING", cost: "PKR 8500", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800" },
  { id: 3, title: "Martin Luko", category: "PORTFOLIO", cost: "PKR 7000", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" },
  { id: 4, title: "Olipoptech", category: "TECHNOLOGY", cost: "PKR 6000", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800" },
  { id: 5, title: "Little Black Book", category: "DIGITAL DESIGN", cost: "PKR 6000", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800" },
  { id: 6, title: "Gearboard", category: "DIGITAL", cost: "PKR 6000", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800" },
];

function ProjectsSection() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items=center justify-between mb-8">
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

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 font-body">
          AI-first products, scalable systems, human-centered interfaces, and engineering that solves real problems. The proof is in our projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href="#"
              className="group relative overflow-hidden rounded-lg aspect-[4/5] block"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING, delay: i * 0.08 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-accent text-xs font-medium">(cost® — {project.cost})</span>
                <motion.h4
                  className="font-display font-bold text-2xl md:text-3xl mt-2"
                  whileHover={{ color: "var(--accent)" }}
                  transition={{ duration: 0.4 }}
                >
                  {project.title}
                </motion.h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">({project.category})</span>
                  <span className="text-muted-foreground text-sm">[0{i + 1}]</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

const awards = [
  { title: "AWWWARD JURY", year: "2024" },
  { title: "STUDIO OF THE YEAR", year: "2023" },
  { title: "D & AD AWARDS", year: "2021,2022" },
  { title: "RED DOT DESIGN AWARDS", year: "2021" },
];

function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <span className="text-muted-foreground text-sm mb-4 block">about jaurden</span>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4">From innovation to worldwide solutions.</h2>
            </Reveal>
            <Button variant="hero" className="mt-6" asChild>
              <a href="#contact">let's work together</a>
            </Button>
          </div>

          <div className="space-y-8">
      <motion.div
              className="relative aspect-square max-w-md overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/sal1.jpg" alt="About portrait" className="w-full h-full object-cover" />
            </motion.div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">[ ABOUT SALTECH ]</span>
              <p className="text-muted-foreground font-body leading-relaxed">
               At SALTECH, we design and build production websites, e‑commerce stores, and web applications using modern tools and platforms. We focus on practical, production-ready solutions that solve real business problems and scale.
              </p>
            </div>

            <div>
              <span className="text-xs text-muted-foreground mb-4 block">Honourable mention on Awwwards©</span>
              <div className="grid grid-cols-2 gap-4">
                {awards.map((award, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="group p-4 border border-border"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08, borderColor: "var(--accent)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ ...SPRING, delay: i * 0.05 }}
                  >
                    <motion.span
                      className="font-display font-semibold text-sm"
                      whileHover={{ color: "var(--accent)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {award.title}
                    </motion.span>
                    <span className="block text-muted-foreground text-xs mt-1">{award.year}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">[ MY MISSION ]</span>
              <p className="text-sm text-foreground">Empower teams to solve real problems with practical software and web solutions.</p>
            </div>

            <Button variant="outline" size="sm" asChild>
              <a href="#">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const logos = ["NEXT.JS", "REACT", "TAILWIND", "VERCEL", "PRISMA", "STRIPE", "FIGMA"];

function LogoMarquee() {
  return (
    <div className="py-12 border-y border-border overflow-hidden bg-background">
      <div className="animate-marquee flex gap-16 whitespace-nowrap">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <span key={i} className="text-2xl font-display font-bold text-muted-foreground/30">
            {logo}
          </span>
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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Let me show HOW i do</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">discover MY work method</h2>
          <span className="text-xs uppercase tracking-widest text-muted-foreground mt-4 block">[ ©elevate your visual design with expert techniques and advice ]</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workMethods.map((method, i) => (
            <motion.div
              key={i}
              className="p-8 border border-border group"
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
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">MOTIVATION</h2>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">THE JOURNEY OF CREATIVE INSPIRATION</span>
          </div>

          <div className="relative">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-8 block">[ MY MOTO ]</span>
            <Quote className="w-16 h-16 text-accent/30 mb-6" />
            <p className="text-lg md:text-xl font-body leading-relaxed mb-8">
              Creativity is the heartbeat of design. Every pixel you place, and concept you bring to life is a testament to your unique vision. <span className="text-accent">"Remember, each challenge is an opportunity to innovate, each setback is a step toward your breakthrough."</span>
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Embrace the process, trust your instincts and let your passion drive you forward. Your designs have the power to inspire and leave a <span className="text-accent">"Lasting impact on the World"</span>
            </p>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-lg italic">"Design is not just what it looks like and feels like. Design is how it works."</p>
              <span className="text-muted-foreground text-sm mt-2 block">— Steve Jobs.</span>
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
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl">Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">everything starts with data, rapid experiments, and clear metrics to validate AI-driven ideas.</p>
          <span className="text-xs uppercase tracking-widest text-muted-foreground mt-4 block">what uses designing, ideas and developing, what user need ©</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group p-8 md:p-12 border border-border hover:border-accent/50 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-accent text-sm">( 0{i + 1} )</span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{service.desc}</p>
              <span className="text-accent text-sm mb-6 block">Starts At Cost® — {service.price}</span>

              <div className="space-y-2 mb-8">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">[ KEY FEATURES ]</span>
                {service.features.map((feature, j) => (
                  <p key={j} className="text-sm text-foreground/80">- {feature}</p>
                ))}
              </div>

              <Button variant="outline" size="sm" asChild>
                <a href="#contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book A Call
                </a>
              </Button>
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
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-6 md:px-12">
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

const experiences = [
  { company: "GOOGLE", role: "senior visual designer", period: "2021 - present", desc: "Google Inspires Creativity and makes learning piano fun. The sleek, lightweight body fits easily into Gig bags for Portability" },
  { company: "META", role: "SENIOR SOCIAL MEDIA DESIGNER", period: "2019 - 2020", desc: "Meta Focuses on Innovative Design for its Social media and Virtual reality products." },
  { company: "AMAZON", role: "junior VISUAL DESIGNER", period: "2017 - 2019", desc: "Meta Focuses on Innovative Design for its Social media and Virtual reality products." },
  { company: "FIVERR", role: "freelance web designer", period: "2014 - 2017", desc: "Bringing Creativity, Technical Expertise, and a passion for Design to every project." },
];

function ExperienceSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl">experience</h2>
          <p className="text-muted-foreground mt-4 font-body">showcasing my visual designing journey</p>
          <span className="text-accent text-sm mt-2 block">2014 - PRESENT</span>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="group p-6 md:p-8 border border-border"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ paddingLeft: 32, borderColor: "var(--accent)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING_SOFT, delay: i * 0.08 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <motion.h3
                    className="font-display font-bold text-xl md:text-2xl"
                    whileHover={{ color: "var(--accent)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.company}
                  </motion.h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">[ {exp.period} ]</span>
                </div>
                <div className="md:text-right">
                  <span className="text-sm text-foreground block">{exp.role}</span>
                  <p className="text-muted-foreground text-sm mt-2 max-w-sm font-body">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: "figma", percentage: "98%", type: "DESIGN TOOL", desc: "Figma is a collaborative design tool for creating and prototyping user interfaces." },
  { name: "framer", percentage: "98%", type: "VISUAL DESIGN", desc: "Framer excels in photo editing and graphic design, offering advanced tools." },
  { name: "webflow", percentage: "96%", type: "WIREFRAME / DESIGN", desc: "Web Flow enables interactive design and prototyping for web and mobile apps." },
  { name: "notion", percentage: "92%", type: "FRONT END DEVELOPER", desc: "Notion adds interactivity and dynamic functionality to Websites." },
  { name: "Canva", percentage: "90%", type: "DESIGN", desc: "Canva provides intensive training in skills like Figma, Adobe XD, and JavaScript." },
];

function SkillsSection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl">favourite stack</h2>
          <p className="text-muted-foreground mt-4 font-body">explore my curated top design picks</p>
          <span className="text-accent text-sm mt-2">My skill</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="p-6 border border-border group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, borderColor: "var(--accent)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.h3
                  className="font-display font-bold text-xl"
                  whileHover={{ color: "var(--accent)" }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                </motion.h3>
                <span className="text-xs text-muted-foreground">[ {skill.percentage} ]</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-accent">{skill.type}</span>
              <p className="text-muted-foreground text-sm mt-4 font-body">{skill.desc}</p>
              <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">testimonials</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">WHAT MY CLIENT SAY</h2>
          <span className="text-xs text-muted-foreground mt-4 block">[ See what our clients have to say about their working experience ]</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="p-8 md:p-10 border border-border group"
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
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-muted-foreground mt-4 font-body uppercase tracking-widest text-sm">ANSWERS TO COMMON QUERIES WE OFTEN RECEIVE</p>
          <span className="text-accent text-sm mt-2 block">GET TO KNOW MORE</span>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
                whileHover={{ backgroundColor: "rgba(255, 0, 0, 0.03)" }}
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
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
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
            className="text-xl text-muted-foreground font-body max-w-xl mx-auto"
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
              href="mailto:hello@jaurden.design"
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
              className="text-muted-foreground font-body"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ color: "var(--accent)", scale: 1.12 }}
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
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-body text-sm">© 2024 Jaurden Hughes. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">About</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">Work</a>
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
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
