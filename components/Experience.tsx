import { site } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Experience() {
  const { title, subtitle, items } = site.experience;

  return (
    <section id="experience" className="mb-24 md:mb-32">
      <FadeIn>
        <SectionHeader index="01 — Experience" title={title} subtitle={subtitle} />
      </FadeIn>

      <div className="space-y-4">
        {items.map((exp, index) => (
          <FadeIn key={index} delay={index * 80}>
            <article className="glass glass-hover group rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    {exp.company}
                    <span className="text-muted/60"> · {exp.location}</span>
                  </p>
                </div>
                <time className="shrink-0 font-mono text-xs text-muted">
                  {exp.period}
                </time>
              </div>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-foreground/80"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
