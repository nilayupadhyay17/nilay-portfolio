import { site } from "@/data/site";

export default function Projects() {
  const { title, subtitle, items } = site.projects;

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-muted">{subtitle}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-border/10 transition-colors hover:border-muted/50"
          >
            <div
              className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                <span className="font-mono text-xs text-muted">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <time className="shrink-0 font-mono text-xs text-muted">
                  {project.period}
                </time>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
