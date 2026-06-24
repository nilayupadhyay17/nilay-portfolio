export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="animate-float absolute -left-32 top-1/4 h-[32rem] w-[32rem] rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="animate-pulse-glow absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[80px] [animation-delay:2s]" />
      <div className="animate-pulse-glow absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/8 blur-[120px] [animation-delay:4s]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]" />
    </div>
  );
}
