"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/sections/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";

// Dynamically import sections that are below the fold to improve initial load speed
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then(mod => mod.ProjectsSection));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then(mod => mod.AboutSection));
const LogoMarquee = dynamic(() => import("@/components/sections/LogoMarquee").then(mod => mod.LogoMarquee));
const WorkMethodSection = dynamic(() => import("@/components/sections/WorkMethodSection").then(mod => mod.WorkMethodSection));
const MotivationSection = dynamic(() => import("@/components/sections/MotivationSection").then(mod => mod.MotivationSection));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection").then(mod => mod.ServicesSection));
const StatsSection = dynamic(() => import("@/components/sections/StatsSection").then(mod => mod.StatsSection));
const TeamsSection = dynamic(() => import("@/components/sections/TeamsSection").then(mod => mod.TeamsSection));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection").then(mod => mod.SkillsSection));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(mod => mod.TestimonialsSection));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => mod.FAQSection));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => mod.ContactSection));
const Footer = dynamic(() => import("@/components/sections/Footer").then(mod => mod.Footer));

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
