import { site } from "@/data/site";

export default function Skills() {
  const { title, subtitle, categories } = site.skills;

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-muted">{subtitle}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {categories.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
