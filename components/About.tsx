import { site } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn, { Stagger, StaggerItem } from "@/components/motion/FadeIn";

export default function About() {
  const { about } = site;

  return (
    <section id="about" className="py-20 md:py-28">
      <FadeIn>
        <SectionHeader
          label="About"
          title={about.title}
          subtitle={about.subtitle}
        />
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeIn delay={0.1}>
          <div className="space-y-5">
            {about.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass gradient-border rounded-2xl p-6 sm:p-8">
            <p className="label text-accent">Career Highlights</p>
            <Stagger className="mt-6 space-y-3">
              {about.highlights.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3.5">
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-blue" />
                    <span className="text-sm font-medium sm:text-base">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
