export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`mb-14 flex flex-col md:mb-16 ${alignClass}`}>
      <p className="label text-accent">{label}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
