"use client";

import { useState, FormEvent } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const { personal, contact } = site;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          {contact.title}
        </h2>
        <p className="mt-2 text-muted">
          {contact.subtitle} Based in {personal.location} — or reach me
          directly at{" "}
          <a
            href={`mailto:${personal.email}`}
            className="text-accent transition-colors hover:underline"
          >
            {personal.email}
          </a>
          .
        </p>
      </div>

      <div className="max-w-lg">
        {status === "submitted" ? (
          <div className="rounded-xl border border-border bg-border/10 p-8 text-center">
            <p className="font-medium">{contact.successTitle}</p>
            <p className="mt-2 text-sm text-muted">{contact.successMessage}</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-accent hover:underline"
            >
              {contact.sendAnotherLabel}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-muted"
            >
              {contact.submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
