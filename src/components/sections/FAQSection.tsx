"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
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
            <m.div
              key={i}
              className="border border-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <m.button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
                whileHover={{ backgroundColor: "hsl(var(--accent) / 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-display font-semibold text-lg pr-8">{faq.q}</span>
                <m.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </m.div>
              </m.button>
              <m.div
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
              </m.div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
