import Link from "next/link";
import MetabolicNetworkVisual from "./MetabolicNetworkVisual";

const STATS = [
  {
    value: "2",
    label: "Live journeys",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    value: "23",
    label: "Steps covered",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    value: "10",
    label: "Practice questions",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

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
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">

        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
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

          <p className="text-base text-slate-300 leading-relaxed max-w-md">
            BioPath walks you through metabolic pathways step by step — from organism
            to molecule — showing how each process connects to the ones beside it.
          </p>

          <div className="flex flex-wrap gap-3 mt-1">
            <Link
              href="/learn"
              className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-colors"
            >
              Start learning
            </Link>
            <a
              href="#journeys"
              className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              Explore journeys
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-4 pt-5 border-t border-white/10">
            {STATS.map(({ value, label, icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-slate-500">{icon}</span>
                <div className="flex flex-col gap-0">
                  <span className="text-lg font-bold text-white leading-none">{value}</span>
                  <span className="text-xs text-slate-400 leading-tight">{label}</span>
                </div>
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
