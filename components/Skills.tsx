import { site } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Skills() {
  const { title, subtitle, categories, languages } = site.skills;

  return (
    <section id="skills" className="mb-24 md:mb-32">
      <FadeIn>
        <SectionHeader index="03 — Skills" title={title} subtitle={subtitle} />
      </FadeIn>

      <FadeIn delay={50}>
        <div className="glass rounded-2xl p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Languages
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <li
                key={lang}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground/90"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {categories.map((group, index) => (
          <FadeIn key={group.category} delay={index * 60}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
