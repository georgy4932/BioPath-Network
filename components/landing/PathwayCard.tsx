import Link from "next/link";

export interface PathwayCardData {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: "live" | "coming-soon";
  href?: string;
  stepCount?: number;
}

export default function PathwayCard({ card }: { card: PathwayCardData }) {
  const isLive = card.status === "live";

  const inner = (
    <div
      className={`group relative flex flex-col gap-3 rounded-xl border p-5 h-full transition-all ${
        isLive
          ? "bg-white/5 border-white/10 hover:border-cyan-500/40 hover:bg-white/8 cursor-pointer"
          : "bg-white/2 border-white/5 opacity-50 cursor-default select-none"
      }`}
    >
      {/* Status badge */}
      {!isLive && (
        <span className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/40">
          Coming soon
        </span>
      )}

      {/* Icon */}
      <span className="text-2xl leading-none" aria-hidden="true">
        {card.icon}
      </span>

      {/* Text */}
      <div className="flex flex-col gap-1 flex-1">
        <h3 className={`text-sm font-semibold leading-snug ${isLive ? "text-white" : "text-slate-400"}`}>
          {card.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {card.description}
        </p>
      </div>

      {/* Footer */}
      {isLive && card.stepCount && (
        <p className="text-xs text-cyan-500/70 font-medium mt-auto">
          {card.stepCount} steps →
        </p>
      )}
    </div>
  );

  if (isLive && card.href) {
    return <Link href={card.href} className="h-full block">{inner}</Link>;
  }
  return <div className="h-full">{inner}</div>;
}
