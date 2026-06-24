"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn, { Stagger, StaggerItem } from "@/components/motion/FadeIn";

export default function TechStack() {
  const { stack } = site;

  return (
    <section id="stack" className="py-20 md:py-28">
      <FadeIn>
        <SectionHeader label="Tech Stack" title={stack.title} subtitle={stack.subtitle} />
      </FadeIn>

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stack.categories.map((category) => (
          <StaggerItem key={category.name}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <p className="label text-accent">{category.name}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="skill-pill inline-block rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-sm font-medium text-foreground">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
