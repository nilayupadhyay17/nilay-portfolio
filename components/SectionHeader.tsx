export default function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-12 md:mb-14">
      <p className="font-mono text-xs tracking-widest text-accent">
        {index}
      </p>
      <h2
        className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {subtitle}
      </p>
    </div>
  );
}
