import { site } from "@/data/site";

export default function Hero() {
  const { personal, hero } = site;

  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-32 pb-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-40 right-1/4 h-64 w-64 rounded-full bg-accent-muted/5 blur-3xl" />
      </div>

      <p className="mb-4 font-mono text-sm text-accent">{hero.greeting}</p>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        {personal.name}
      </h1>

      <p className="mt-3 text-xl text-muted sm:text-2xl">
        {personal.title} · {personal.location}
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
        {hero.bio}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={hero.ctaPrimary.href}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-muted"
        >
          {hero.ctaPrimary.label}
        </a>
        <a
          href={hero.ctaSecondary.href}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-muted hover:bg-border/30"
        >
          {hero.ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}
