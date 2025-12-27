"use client";

import { m } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SPRING } from "@/lib/animations";

const workMethods = [
  { num: "01", title: "planning", desc: "Before we start, we determine if and how I can help you. What are your requirements for your new design? Why do you need a new design? What goals do you have in that?", points: ["We get to know each other better", "Determine how i can best assist you", "Understand the goals you have for the work"] },
  { num: "02", title: "concept & strategy", desc: "Once we have assessed your requirements and objectives, we move into the concept and strategy phase. Here, we define the overall vision and strategic approach.", points: ["UX/UI Design", "Wireframes", "Interactive Prototype"] },
  { num: "03", title: "design onboarding", desc: "I'm thrilled to embark on this creative journey with you. My mission is to bring your vision to life with a collaborative and personalised design process.", points: ["Personal Workshop", "Personalised Video Tutorials", "Edit Text and Images directly"] },
];

export function WorkMethodSection() {
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
            <m.div
              key={i}
              className="p-6 md:p-8 border border-foreground group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, borderColor: "var(--accent)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING, delay: i * 0.1 }}
            >
              <span className="text-xs text-muted-foreground">[ {method.num} ]</span>
              <m.div
                className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center my-6"
                whileHover={{ scale: 1.15, rotate: 15 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                <Sparkles className="w-8 h-8 text-accent" />
              </m.div>
              <m.h3
                className="font-display font-bold text-xl mb-4"
                whileHover={{ color: "var(--accent)" }}
                transition={{ duration: 0.4 }}
              >
                {method.title}
              </m.h3>
              <p className="text-muted-foreground text-sm mb-6 font-body">{method.desc}</p>
              <ul className="space-y-2">
                {method.points.map((point, j) => (
                  <m.li
                    key={j}
                    className="text-sm text-foreground/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.25 + j * 0.08 }}
                  >
                    - {point}
                  </m.li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
