"use client";

import { m } from "framer-motion";
import { SPRING } from "@/lib/animations";

const stats = [
  { value: "10+", label: "years of experience" },
  { value: "20", label: "project done" },
  { value: "100+", label: "satisfied customers" },
  { value: "25+", label: "Return Clients" },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <m.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...SPRING, delay: i * 0.12 }}
            >
              <m.span
                className="font-display font-bold text-4xl md:text-6xl text-accent block"
                whileInView={{ textShadow: "0 0 25px hsl(var(--accent) / 0.25)" }}
                viewport={{ once: true }}
              >
                {stat.value}
              </m.span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground block mt-2">[ {stat.label} ]</span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
