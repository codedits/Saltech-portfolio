"use client";

import { m } from "framer-motion";
import { Star } from "lucide-react";
import { SPRING_SOFT } from "@/lib/animations";

const testimonials = [
  { name: "Ayesha Khan", role: "Founder — Laari Boutique (Lahore)", date: "June 2025", text: "SALTECH rebuilt our online store and migrated 1,200 products without downtime. Sales picked up within a week and the admin interface is so easy my whole team uses it confidently." },
  { name: "Imran Ali", role: "CEO — Raza Electronics (Karachi)", date: "May 2025", text: "We needed a fast, reliable storefront and integrations with our POS. They delivered on schedule, handled the payment gateways, and improved our checkout conversion significantly." },
  { name: "Fatima Siddiqui", role: "Marketing Head — Noor Cosmetics (Islamabad)", date: "April 2025", text: "The website looks beautiful and loads quickly on mobile. SALTECH also helped with basic SEO and content migration — we saw organic visits rise in two weeks." },
  { name: "Ahmed Raza", role: "Product Manager — ClickServe (Rawalpindi)", date: "March 2025", text: "Their team moved our app to a modern stack and added the features we needed for orders and subscriptions. Communication was clear and the support after launch was excellent." },
];

export function TestimonialsSection() {
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
            <m.div
              key={i}
              className="p-6 md:p-10 border border-foreground group"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -10, borderColor: "var(--accent)", boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING_SOFT, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <m.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  {[...Array(5)].map((_, j) => (
                    <m.div
                      key={j}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.25 + j * 0.08 }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </m.div>
                  ))}
                </m.div>
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
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
