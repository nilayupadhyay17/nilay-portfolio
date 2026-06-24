"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const { brand, links, external } = site.nav;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {brand.split(" ")[0]}
          <span className="text-gradient"> {brand.split(" ").slice(1).join(" ")}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {external.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="label rounded-lg px-3 py-2 text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-1 !py-2 !px-4 text-sm">
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-5 py-4 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 border-t border-border pt-3">
            {external.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="label block px-3 py-2.5 text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
