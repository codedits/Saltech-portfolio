"use client";

import { m } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <m.h2
            className="font-display font-bold text-4xl md:text-7xl leading-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
          >
            let's build digital products that solve problems
          </m.h2>
          <m.p
            className="text-xl text-background/70 font-body max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.25 }}
          >
            "Collaborate to design, build, and ship websites, stores, and web apps that move the business needle."
          </m.p>
        </div>

        <m.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
        >
          <Button variant="hero" size="lg" asChild>
            <m.a
              href="mailto:talhairfan1947@gmail.com"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Now
            </m.a>
          </Button>
        </m.div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { name: "Instagram", href: "https://www.instagram.com/saltech.pvt/" },
            { name: "Twitter", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "Dribbble", href: "#" },
            { name: "LinkedIn", href: "#" },
          ].map((social, i) => (
            <m.a
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
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
}
