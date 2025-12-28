"use client";

import { m } from "framer-motion";

const services = [
  {
    title: "Landing Page",
    desc: "Build responsive websites and online stores using platforms like Next.js, Shopify, and headless CMS to sell and scale.",
    price: "PKR 8,000",
    features: ["Responsive Design", "Next.js / Shopify", "Payment Integration"],
  },
  {
    title: "Dynamic Website",
    desc: "User-centered interfaces and prototypes that improve conversion and usability across devices.",
    price: "PKR 20,000",
    features: ["Prototyping & Wireframes", "User Flows & Testing", "A/B Testing Guidance"],
  },
  {
    title: "E-commerce",
    desc: "Production web applications, backend APIs, and third-party integrations to automate workflows and connect systems.",
    price: "PKR 30,000",
    features: ["Backend APIs & Webhooks", "Payment Gateways", "Third‑party Integrations"],
  },
  {
    title: "CRM Setup",
  desc: "Centralize customer data, automate lead follow-ups, and optimize your sales pipeline for better conversion.",
  price: "PKR 40,000",
  features: ["Lead & Contact Management", "Automated Sales Pipelines", "Reporting & Analytics"],
  },
];

export function ServicesSection() {
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
            <m.div
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

            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
