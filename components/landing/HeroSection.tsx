import Link from "next/link";
import MetabolicNetworkVisual from "./MetabolicNetworkVisual";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest">
              Biochemistry visualised
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Metabolism is a network,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              not a list.
            </span>
          </h1>

          <p className="text-base text-slate-400 leading-relaxed max-w-md">
            BioPath walks you through metabolic pathways step by step — from organism
            to molecule — showing how each process connects to the ones beside it.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/learn"
              className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-colors"
            >
              Start learning
            </Link>
            <a
              href="#pathways"
              className="px-6 py-3 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              Explore journeys
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-4 pt-4 border-t border-white/8">
            {[
              { value: "2", label: "Live journeys" },
              { value: "23", label: "Steps covered" },
              { value: "10", label: "Practice questions" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-xl font-bold text-white">{value}</span>
                <span className="text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: network visual */}
        <div className="relative hidden md:block h-[380px]">
          <MetabolicNetworkVisual />
        </div>
      </div>
    </section>
  );
}
