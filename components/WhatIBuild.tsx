"use client";

import { site } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import FadeIn, { Stagger, StaggerItem, HoverScale } from "@/components/motion/FadeIn";

export default function WhatIBuild() {
  const { whatIBuild } = site;

  return (
    <section id="build" className="py-20 md:py-28">
      <FadeIn>
        <SectionHeader
          label="What I Build"
          title={whatIBuild.title}
          subtitle={whatIBuild.subtitle}
        />
      </FadeIn>

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whatIBuild.items.map((item) => (
          <StaggerItem key={item.title}>
            <HoverScale>
              <article className="glass glass-hover h-full rounded-2xl p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/80">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </HoverScale>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
