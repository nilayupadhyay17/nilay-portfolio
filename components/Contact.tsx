import { site } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const { personal, contact } = site;

  return (
    <section id="contact" className="mb-8">
      <FadeIn>
        <SectionHeader
          index="04 — Contact"
          title={contact.title}
          subtitle={contact.subtitle}
        />
      </FadeIn>

      <FadeIn delay={80}>
        <div className="gradient-border relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10" />
          <div className="glass relative p-8 sm:p-10">
            <p className="text-sm text-muted">Drop me a line</p>
            <a
              href={`mailto:${personal.email}`}
              className="mt-3 block font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-tight text-gradient sm:text-3xl"
            >
              {personal.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02]"
              >
                Send email
              </a>
              <a
                href={site.sidebar.external.find((l) => l.label === "LinkedIn")?.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-8 font-mono text-xs text-muted">
              {personal.location} · {personal.phone}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
