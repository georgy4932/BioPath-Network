import Link from "next/link";

const JOURNEYS = [
  {
    id: "glucose",
    title: "Glucose Journey",
    description:
      "Follow a glucose molecule from your last meal through digestion, portal circulation, hepatic processing, glycolysis, and into ATP production.",
    icon: "🍬",
    stepCount: 11,
    href: "/learn",
    accentColor: "from-cyan-500/20 to-transparent",
    borderColor: "border-cyan-500/20",
    dotColor: "bg-cyan-400",
  },
  {
    id: "oxygen",
    title: "Oxygen Journey",
    description:
      "Trace an oxygen molecule from the atmosphere through the respiratory system, into the bloodstream, and to the inner mitochondrial membrane.",
    icon: "🫁",
    stepCount: 12,
    href: "/learn",
    accentColor: "from-emerald-500/20 to-transparent",
    borderColor: "border-emerald-500/20",
    dotColor: "bg-emerald-400",
  },
];

export default function JourneyCardsSection() {
  return (
    <section id="journeys" className="py-20 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Current learning journeys
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            Follow molecules through the body
          </h2>
          <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
            Two journeys are live. More are in development — each follows the same
            step-by-step, scale-aware format from organism to molecule.
          </p>
        </div>

        {/* Journey cards — 2 col on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {JOURNEYS.map((j) => (
            <Link
              key={j.id}
              href={j.href}
              className={`group relative flex flex-col rounded-2xl border bg-white/4 overflow-hidden hover:bg-white/6 transition-all duration-200 ${j.borderColor}`}
            >
              {/* Top accent gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${j.accentColor} pointer-events-none`}
                aria-hidden="true"
              />

              {/* Card body */}
              <div className="relative flex items-start gap-4 p-6 pb-4">
                {/* Icon box */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-3xl leading-none">
                  {j.icon}
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${j.dotColor}`} aria-hidden="true" />
                    <h3 className="text-base font-semibold text-white leading-snug">{j.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{j.description}</p>
                </div>
              </div>

              {/* Card footer */}
              <div className="relative flex items-center justify-between px-6 py-4 mt-auto border-t border-white/6">
                <span className="text-xs text-slate-400">{j.stepCount} steps</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Start journey
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
