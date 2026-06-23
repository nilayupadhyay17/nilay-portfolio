import { site } from "@/data/site";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  const { personal, hero } = site;

  return (
    <section className="relative mb-24 md:mb-32">
      <div className="animate-fade-up">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {hero.status}
          </span>
          <span className="font-mono text-xs tracking-widest text-muted">
            {personal.location}
          </span>
        </div>

        <h1
          className="mt-8 font-[family-name:var(--font-syne)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-muted">Building </span>
          <span className="text-gradient">{personal.name}</span>
        </h1>

        <p className="mt-5 text-xl sm:text-2xl lg:text-3xl">
          <Typewriter roles={hero.roles} />
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.bio}
        </p>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-hover rounded-xl px-4 py-3 text-center"
            >
              <p className="font-[family-name:var(--font-syne)] text-xl font-semibold sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {hero.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
