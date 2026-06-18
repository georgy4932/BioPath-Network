export default function KrebsHubCallout() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">

      {/* Ambient glow — violet centered */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">

          {/* Hub diagram — large, animated */}
          <div className="flex-shrink-0 mx-auto md:mx-0" aria-hidden="true">
            <svg viewBox="0 0 140 140" className="w-44 h-44 md:w-56 md:h-56">
              {/* Outer orbit */}
              <circle cx="70" cy="70" r="50" fill="none" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.2" />

              {/* Spokes */}
              <line x1="70" y1="70" x2="20"  y2="25"  stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="70" y1="70" x2="120" y2="25"  stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="70" y1="70" x2="130" y2="80"  stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.7" />
              <line x1="70" y1="70" x2="120" y2="120" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="70" y1="70" x2="20"  y2="115" stroke="#64748b" strokeWidth="1"   strokeOpacity="0.45" strokeDasharray="3 2" />
              <line x1="70" y1="70" x2="10"  y2="80"  stroke="#64748b" strokeWidth="1"   strokeOpacity="0.4"  strokeDasharray="3 2" />

              {/* Spoke endpoint nodes */}
              <circle cx="20"  cy="25"  r="5.5" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
              <circle cx="120" cy="25"  r="5.5" fill="#1a1200" stroke="#f59e0b" strokeWidth="1.5" />
              <circle cx="130" cy="80"  r="5.5" fill="#0c1a26" stroke="#22d3ee" strokeWidth="1.5" />
              <circle cx="120" cy="120" r="5.5" fill="#0a1a12" stroke="#34d399" strokeWidth="1.5" />
              <circle cx="20"  cy="115" r="4"   fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.7" />
              <circle cx="10"  cy="80"  r="4"   fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.7" />

              {/* Hub glow — animated */}
              <circle cx="70" cy="70" r="28" fill="#7c3aed" fillOpacity="0.15" className="krebs-glow-animated" />
              <circle cx="70" cy="70" r="18" fill="#1e1040" stroke="#a78bfa" strokeWidth="2" />

              {/* Hub label */}
              <text x="70" y="67" textAnchor="middle" fill="#ddd6fe" fontSize="8" fontFamily="system-ui" fontWeight="700">Krebs</text>
              <text x="70" y="77" textAnchor="middle" fill="#a78bfa" fontSize="6.5" fontFamily="system-ui">cycle</text>
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" aria-hidden="true" />
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                Coming to BioPath
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              The Krebs cycle is the hub of metabolism
            </h2>

            <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
              Every major fuel — carbohydrates, fats, and amino acids — feeds into the Krebs cycle.
              Every ATP-producing pathway exits through it. Understanding Krebs is understanding metabolism.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              BioPath is building a dedicated Krebs journey that shows the cycle step by step,
              with explicit connections to the glucose and oxygen journeys already live today.
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              {[
                { label: "Glycolysis feeds in",    className: "bg-cyan-950   text-cyan-300   border-cyan-700/50" },
                { label: "Fatty acids feed in",    className: "bg-amber-950  text-amber-300  border-amber-700/50" },
                { label: "Amino acids feed in",    className: "bg-slate-800  text-slate-300  border-slate-600/50" },
                { label: "ETC exits through here", className: "bg-emerald-950 text-emerald-300 border-emerald-700/50" },
              ].map(({ label, className }) => (
                <span key={label} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${className}`}>
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
