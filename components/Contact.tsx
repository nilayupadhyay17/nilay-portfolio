import { site } from "@/data/site";
import FadeIn from "@/components/motion/FadeIn";

export default function Contact() {
  const { contact, personal } = site;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(139,92,246,0.15),transparent_70%)]"
        aria-hidden="true"
      />

      <FadeIn>
        <div className="gradient-border relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-blue-600/10" />
          <div className="glass relative px-6 py-14 text-center sm:px-12 sm:py-20">
            <p className="label text-accent">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {contact.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {contact.ctas.map((cta) =>
                cta.primary ? (
                  <a key={cta.label} href={cta.href} className="btn-primary">
                    {cta.label}
                  </a>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noopener noreferrer" : undefined}
                    className="btn-secondary"
                  >
                    {cta.label}
                  </a>
                )
              )}
            </div>

            <p className="label mt-10 text-muted">
              {personal.location} · {personal.email}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
