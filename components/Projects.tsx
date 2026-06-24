"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";

function ScreenshotPlaceholder({ gradient, title }: { gradient: string; title: string }) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
      <div className="absolute inset-x-4 top-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      </div>
      <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
        <p className="text-xs font-medium text-white/80">{title}</p>
        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/10" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = site;

  return (
    <section id="projects" className="py-20 md:py-28">
      <FadeIn>
        <SectionHeader
          label="Featured Projects"
          title={projects.title}
          subtitle={projects.subtitle}
        />
      </FadeIn>

      <div className="space-y-8 lg:space-y-12">
        {projects.items.map((project, index) => {
          const reversed = index % 2 === 1;

          return (
            <FadeIn key={project.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-border glass glass-hover overflow-hidden rounded-2xl"
              >
                <div
                  className={`grid lg:grid-cols-2 lg:gap-0 ${reversed ? "lg:[direction:rtl]" : ""}`}
                >
                  <div className={`p-4 sm:p-6 lg:p-8 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.35 }}>
                      <ScreenshotPlaceholder
                        gradient={project.gradient}
                        title={project.title}
                      />
                    </motion.div>
                  </div>

                  <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <time className="label text-muted">{project.period}</time>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border bg-surface/80 px-3 py-1 font-mono text-[11px] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 space-y-2.5">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="flex gap-3 text-sm text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {result}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href={project.liveDemo} className="btn-primary text-sm">
                        Live Demo
                      </a>
                      <a href={project.github} className="btn-secondary text-sm">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
