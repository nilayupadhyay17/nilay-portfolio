import { type ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  layers: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8h12M6 12h12M6 16h8"
    />
  ),
  building: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20V8l8-4 8 4v12M9 20v-6h6v6"
    />
  ),
  cloud: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 18h10a4 4 0 000-8 5 5 0 00-9.5-1.5A3.5 3.5 0 007 18z"
    />
  ),
  api: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h8M12 8v8M4 6v12M20 6v12"
    />
  ),
  dashboard: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 14h4v6H4v-6zM10 4h4v16h-4V4zM16 10h4v10h-4V10z"
    />
  ),
  spark: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"
    />
  ),
};

export default function Icon({ name }: { name: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-accent"
      aria-hidden="true"
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
