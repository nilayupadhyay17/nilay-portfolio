export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.15),transparent)]"
      />
      <div
        className="animate-pulse-glow absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-600/10 blur-3xl"
      />
      <div
        className="animate-pulse-glow absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl [animation-delay:3s]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
    </div>
  );
}
