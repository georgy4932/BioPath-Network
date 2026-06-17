export default function KrebsHubCallout() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-slate-900/60 p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Hub diagram — simple concentric */}
          <div className="flex-shrink-0 mx-auto md:mx-0" aria-hidden="true">
            <svg viewBox="0 0 140 140" className="w-28 h-28 md:w-36 md:h-36">
              {/* Outer ring spokes */}
              <line x1="70" y1="70" x2="20"  y2="25"  stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="70" y1="70" x2="120" y2="25"  stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="70" y1="70" x2="130" y2="80"  stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.5" />
              <line x1="70" y1="70" x2="120" y2="120" stroke="#34d399" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="70" y1="70" x2="20"  y2="115" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
              <line x1="70" y1="70" x2="10"  y2="80"  stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />

              {/* Outer orbit circle */}
              <circle cx="70" cy="70" r="50" fill="none" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.15" />

              {/* Spoke endpoint nodes */}
              <circle cx="20"  cy="25"  r="5" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
              <circle cx="120" cy="25"  r="5" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="130" cy="80"  r="5" fill="#0c1a26" stroke="#22d3ee" strokeWidth="1.5" />
              <circle cx="120" cy="120" r="5" fill="#0c1a26" stroke="#34d399" strokeWidth="1.5" />
              <circle cx="20"  cy="115" r="4" fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.6" />
              <circle cx="10"  cy="80"  r="4" fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.6" />

              {/* Hub glow */}
              <circle cx="70" cy="70" r="22" fill="#7c3aed" fillOpacity="0.12" stroke="#a78bfa" strokeWidth="1.5" />
              <circle cx="70" cy="70" r="14" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2" />

              {/* Hub label */}
              <text x="70" y="67" textAnchor="middle" fill="#c4b5fd" fontSize="7" fontFamily="system-ui" fontWeight="700">Krebs</text>
              <text x="70" y="76" textAnchor="middle" fill="#7c3aed" fontSize="6" fontFamily="system-ui">cycle</text>
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" aria-hidden="true" />
              <span className="text-xs font-medium text-violet-400 uppercase tracking-widest">
                Coming to BioPath
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug">
              The Krebs cycle is the hub of metabolism
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Every major fuel — carbohydrates, fats, and amino acids — feeds into the Krebs cycle.
              Every ATP-producing pathway exits through it. Understanding Krebs is understanding metabolism.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
              BioPath is building a dedicated Krebs journey that shows the cycle step by step,
              with explicit connections to the glucose and oxygen journeys already live today.
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              {[
                { label: "Glycolysis feeds in", color: "bg-cyan-900/40 text-cyan-400 border-cyan-700/30" },
                { label: "Fatty acids feed in", color: "bg-amber-900/40 text-amber-400 border-amber-700/30" },
                { label: "Amino acids feed in", color: "bg-slate-700/40 text-slate-400 border-slate-600/30" },
                { label: "ETC exits through here", color: "bg-green-900/40 text-green-400 border-green-700/30" },
              ].map(({ label, color }) => (
                <span key={label} className={`text-xs px-2.5 py-1 rounded-full border ${color}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
