import { site } from "@/data/site";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {site.personal.shortName}<span className="text-accent">.</span>
        </a>
        <ul className="flex items-center gap-6">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
