"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronDown, Download, Mail, Quote, Sparkles, Star, Subscript } from "lucide-react";
// Use public folder for Next.js static images
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/reveal";

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
    <section className="relative min-h-screen pt-24 pb-0 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 pt-8">
        <div className="flex items-center gap-2 text-accent text-sm font-medium animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          PROJECT WILL KICKOFF WITHIN 24 HOURS
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <Reveal delay={0}>
              <h1 className="font-display font-extrabold text-[14vw] md:text-[10vw] leading-[0.85] tracking-tighter text-foreground">
                SALTECH
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="font-display font-extrabold text-[14vw] md:text-[10vw] leading-[0.85] tracking-tighter text-foreground">
                .PVT
              </h1>
            </Reveal>
          </div>

          <div className="md:max-w-sm md:pt-8 space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground font-body leading-relaxed">
              <span className="text-foreground font-medium">SALTECH</span> is a new new tech startup wants to improve the automation of tasks using AI.
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
          Gorgeous design, Scroll-stopping content, Memorable campaigns, Development dripping with tech. The proof is in our projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a key={project.id} href="#" className="group relative overflow-hidden rounded-lg aspect-[4/5] block animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-accent text-xs font-medium">(cost® — {project.cost})</span>
                <h4 className="font-display font-bold text-2xl md:text-3xl mt-2 group-hover:text-accent transition-colors">{project.title}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground text-xs uppercase tracking-widest">({project.category})</span>
                  <span className="text-muted-foreground text-sm">[0{i + 1}]</span>
                </div>
              </div>
            </a>
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
            <div className="relative aspect-square max-w-md overflow-hidden rounded-lg">
              <img src="/sal1.jpg" alt="About portrait" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">[ ABOUT ME ]</span>
              <p className="text-muted-foreground font-body leading-relaxed">
               at SALTECH, we partner with growing brands and ambitious teams to shape their presence across modern digital platforms. Our process blends creativity with intelligent systems, allowing us to explore ideas faster and deliver with precision. We use technology thoughtfully to turn vision into impactful digital experiences.
              </p>
            </div>

            <div>
              <span className="text-xs text-muted-foreground mb-4 block">Honourable mention on Awwwards©</span>
              <div className="grid grid-cols-2 gap-4">
                {awards.map((award, i) => (
                  <a key={i} href="#" className="group p-4 border border-border hover:border-accent/50 transition-all">
                    <span className="font-display font-semibold text-sm group-hover:text-accent transition-colors">{award.title}</span>
                    <span className="block text-muted-foreground text-xs mt-1">{award.year}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">[ MY MISSION ]</span>
              <p className="text-sm text-foreground">Transforming how brands express themselves across modern media.</p>
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

const logos = ["SPOTIFY", "GOOGLE", "AIRBNB", "STRIPE", "FIGMA", "SLACK", "NOTION"];

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
            <div key={i} className="p-8 border border-border hover:border-accent/50 transition-all group">
              <span className="text-xs text-muted-foreground">[ {method.num} ]</span>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center my-6">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4 group-hover:text-accent transition-colors">{method.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 font-body">{method.desc}</p>
              <ul className="space-y-2">
                {method.points.map((point, j) => (
                  <li key={j} className="text-sm text-foreground/80">- {point}</li>
                ))}
              </ul>
            </div>
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
  { title: "UX/UI Designing", desc: "Blending Aesthetic and Innovation, My UX/UI gives you a Top Notch Client.", price: "PKR 2000", features: ["Portfolio Highlights", "Client Testimonials", "Design Process"] },
  { title: "Graphic Design", desc: "Creating memorable visual identities that resonate with your audience.", price: "PKR 1500", features: ["Brand Identity", "Print Design", "Social Media"] },
  { title: "Web Design", desc: "Building fast, responsive, and accessible web experiences.", price: "PKR 3000", features: ["Responsive Design", "CMS Integration", "SEO Optimization"] },
  { title: "Brand Design", desc: "Crafting comprehensive brand systems that tell your story.", price: "PKR 4000", features: ["Logo Design", "Brand Guidelines", "Brand Strategy"] },
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl">Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">everything starts with thorough research and iterative experimentation.</p>
          <span className="text-xs uppercase tracking-widest text-muted-foreground mt-4 block">what uses designing, ideas and developing, what user need ©</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={i} className="group p-8 md:p-12 border border-border hover:border-accent/50 transition-all">
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
            </div>
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
            <div key={i} className="text-center">
              <span className="font-display font-bold text-4xl md:text-6xl text-accent">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mt-2">[ {stat.label} ]</span>
            </div>
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
            <div key={i} className="group p-6 md:p-8 border border-border hover:border-accent/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl group-hover:text-accent transition-colors">{exp.company}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">[ {exp.period} ]</span>
                </div>
                <div className="md:text-right">
                  <span className="text-sm text-foreground block">{exp.role}</span>
                  <p className="text-muted-foreground text-sm mt-2 max-w-sm font-body">{exp.desc}</p>
                </div>
              </div>
            </div>
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
            <div key={i} className="p-6 border border-border hover:border-accent/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl group-hover:text-accent transition-colors">{skill.name}</h3>
                <span className="text-xs text-muted-foreground">[ {skill.percentage} ]</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-accent">{skill.type}</span>
              <p className="text-muted-foreground text-sm mt-4 font-body">{skill.desc}</p>
              <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: skill.percentage }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Jesse Oriko", role: "product manager / noise & co", date: "april 2024", text: "I was struck by how seamlessly everything flowed and how easy it was to navigate. Their team meticulously perfects every detail—a truly engaging and enjoyable experience." },
  { name: "Kate McCalilster", role: "cloud sales executive / ipsum", date: "march 2024", text: "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that delight." },
  { name: "Watson Andrew", role: "royal caribbean / owner", date: "aug 2024", text: "The interface was strikingly user-friendly and fluid. It's clear their team dedicates themselves to perfecting every element and transition, resulting in perfection." },
  { name: "Rick O'Connel", role: "design manager / market compliance", date: "july 2024", text: "The user experience was incredibly smooth and intuitive. It's evident that their designers pay meticulous attention to every detail, crafting an experience that truly impresses." },
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
            <div key={i} className="p-8 md:p-10 border border-border hover:border-accent/50 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What industries do you specialize in?", a: "I have experience working across various industries including but not limited to Technology, Healthcare, Fashion, Hospitality and Non Profit Organization." },
    { q: "What is your typical project timeline?", a: "Project timelines vary based on scope and complexity. A typical branding project takes 4-6 weeks, while a full website design can take 8-12 weeks." },
    { q: "Do you offer post-launch support or maintenance?", a: "Yes, I offer ongoing support and maintenance packages to ensure your digital products continue to perform optimally." },
    { q: "What software and tools do you use for your designs?", a: "I primarily use Figma for UI/UX design, Framer for interactive prototypes, and various Adobe Creative Suite tools for graphic design." },
    { q: "Can you provide examples of your previous work?", a: "Absolutely! Check out my portfolio section above or contact me for a detailed case study presentation." },
    { q: "Do your designs are tailored to each client?", a: "Yes, every design is custom-made based on your unique brand identity, target audience, and business goals." },
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
            <div key={i} className="border border-border hover:border-accent/50 transition-all">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-6 flex items-center justify-between text-left">
                <span className="font-display font-semibold text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground font-body">{faq.a}</p>
                </div>
              )}
            </div>
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
          <h2 className="font-display font-bold text-4xl md:text-7xl leading-tight mb-4">let's make your design shine</h2>
          <p className="text-xl text-muted-foreground font-body max-w-xl mx-auto">"collaborate with me to craft exceptional designs that reflect your unique vision."</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:hello@jaurden.design">
              <Mail className="mr-2 w-5 h-5" />
              Contact Now
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-body">instagram</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-body">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-body">Facebook</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-body">Dribbble</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-body">LinkedIn</a>
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
