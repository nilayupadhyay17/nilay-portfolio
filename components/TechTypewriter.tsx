"use client";

import { useEffect, useState } from "react";

export default function TechTypewriter({ technologies }: { technologies: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = technologies[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % technologies.length);
        }
      },
      deleting ? 40 : 65
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, technologies]);

  return (
    <span className="text-gradient-subtle font-medium">
      {text}
      <span className="cursor-blink text-accent">|</span>
    </span>
  );
}
