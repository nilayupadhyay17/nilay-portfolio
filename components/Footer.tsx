import { site } from "@/data/site";

export default function Footer() {
  const { personal, footer } = site;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {personal.name}. Built with Next.js &
          Tailwind.
        </p>
        <div className="flex gap-4">
          {footer.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
