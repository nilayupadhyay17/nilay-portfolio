"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const { brand, nav, external } = site.sidebar;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#" className="shrink-0">
          <span className="font-[family-name:var(--font-syne)] text-base font-semibold tracking-tight">
            {brand.split(" ")[0]}
            <span className="text-gradient">
              {" "}
              {brand.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {external.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="rounded-lg px-3 py-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/15 transition-transform hover:scale-[1.02]"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface-hover hover:text-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-1 border-t border-border pt-3">
            {external.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-mono text-xs text-muted transition-colors hover:text-foreground"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-2.5 text-sm font-medium text-white"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
