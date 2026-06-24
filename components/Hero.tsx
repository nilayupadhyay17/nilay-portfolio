"use client";

import { site } from "@/data/site";
import TechTypewriter from "@/components/TechTypewriter";
import FadeIn, { Stagger, StaggerItem } from "@/components/motion/FadeIn";

export default function Hero() {
  const { hero } = site;

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.12),transparent_70%)]"
        aria-hidden="true"
      />

      <FadeIn>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {hero.badge}
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4rem]">
          {hero.headline}
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {hero.subheadline}
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-4 text-lg sm:text-xl">
          <span className="text-muted">Specializing in </span>
          <TechTypewriter technologies={hero.technologies} />
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={hero.ctas.projects.href} className="btn-primary">
            {hero.ctas.projects.label}
          </a>
          <a href={hero.ctas.resume.href} className="btn-secondary">
            {hero.ctas.resume.label}
          </a>
        </div>
      </FadeIn>

      <Stagger className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        {hero.metrics.map((metric) => (
          <StaggerItem key={metric.label}>
            <div className="glass glass-hover rounded-2xl px-4 py-5 text-center sm:px-5">
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {metric.value}
              </p>
              <p className="label mt-2 text-muted">{metric.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
