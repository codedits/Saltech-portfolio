"use client";

import { m } from "framer-motion";
import { SPRING, SPRING_GENTLE } from "@/lib/animations";

const skills = [
  { name: "figma", percentage: "98%", type: "DESIGN TOOL", desc: "Figma is a collaborative design tool for creating and prototyping user interfaces." },
  { name: "framer", percentage: "98%", type: "VISUAL DESIGN", desc: "Framer excels in photo editing and graphic design, offering advanced tools." },
  { name: "webflow", percentage: "96%", type: "WIREFRAME / DESIGN", desc: "Web Flow enables interactive design and prototyping for web and mobile apps." },
  { name: "notion", percentage: "92%", type: "FRONT END DEVELOPER", desc: "Notion adds interactivity and dynamic functionality to Websites." },
  { name: "Canva", percentage: "90%", type: "DESIGN", desc: "Canva provides intensive training in skills like Figma, Adobe XD, and JavaScript." },
];

export function SkillsSection() {
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
            <m.div
              key={i}
              className="p-6 border border-white/10 bg-white/5 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-4">
                <m.h3
                  className="font-display font-bold text-xl text-background"
                  whileHover={{ color: "var(--accent)" }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.name}
                </m.h3>
                <span className="text-xs text-background/70">[ {skill.percentage} ]</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-accent">{skill.type}</span>
              <p className="text-background/80 text-sm mt-4 font-body">{skill.desc}</p>
              <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <m.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.percentage }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ ...SPRING_GENTLE, delay: 0.15 }}
                />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
