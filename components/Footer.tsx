import { site } from "@/data/site";

export default function Footer() {
  const { personal, nav } = site;

  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {personal.name} · {personal.title}
        </p>
        <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
