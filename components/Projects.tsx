import { site } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Projects() {
  const { title, subtitle, items } = site.projects;

  return (
    <section id="projects" className="mb-24 md:mb-32">
      <FadeIn>
        <SectionHeader index="02 — Projects" title={title} subtitle={subtitle} />
      </FadeIn>

      <div className="grid gap-5 lg:grid-cols-1">
        {items.map((project, index) => (
          <FadeIn key={project.title} delay={index * 100}>
            <article className="gradient-border glass glass-hover group overflow-hidden rounded-2xl">
              <div
                className={`relative h-32 bg-gradient-to-br ${project.accent} sm:h-36`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 font-mono text-xs backdrop-blur-sm">
                    {project.title.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                      {project.title}
                    </h3>
                    <time className="font-mono text-[10px] text-muted">
                      {project.period}
                    </time>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-secondary/60" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
