"use client";

import { site } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";

export default function Experience() {
  const { experience } = site;

  return (
    <section id="experience" className="py-20 md:py-28">
      <FadeIn>
        <SectionHeader
          label="Experience"
          title={experience.title}
          subtitle={experience.subtitle}
        />
      </FadeIn>

      <div className="relative">
        <div
          className="timeline-line absolute bottom-0 left-[11px] top-0 w-px md:left-[15px]"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experience.items.map((exp, index) => (
            <FadeIn key={exp.role + exp.period} delay={index * 0.1}>
              <article className="relative pl-10 md:pl-12">
                <div
                  className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background md:h-7 md:w-7"
                  aria-hidden="true"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent-blue" />
                </div>

                <div className="glass glass-hover gradient-border rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted">
                        {exp.company}
                        <span className="text-muted/70"> · {exp.location}</span>
                      </p>
                    </div>
                    <time className="label shrink-0 text-muted">{exp.period}</time>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {exp.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent"
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 space-y-3 border-t border-border pt-6">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
