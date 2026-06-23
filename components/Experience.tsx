import { site } from "@/data/site";

export default function Experience() {
  const { title, subtitle, items } = site.experience;

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-muted">{subtitle}</p>
      </div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <ul className="space-y-10">
          {items.map((exp, index) => (
            <li key={index} className="relative pl-8">
              <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="text-sm text-accent">
                    {exp.company}
                    <span className="text-muted"> · {exp.location}</span>
                  </p>
                </div>
                <time className="font-mono text-xs text-muted">{exp.period}</time>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
