export default function MetabolicNetworkVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px]" aria-hidden="true">
      <svg
        viewBox="0 0 600 380"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Main carbohydrate chain: Glucose → G6P → Glycolysis → Pyruvate → Acetyl-CoA → Krebs ── */}
        <line x1="60"  y1="80"  x2="145" y2="110" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.55" className="pathway-animated" />
        <line x1="145" y1="110" x2="235" y2="150" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.55" className="pathway-animated" />
        <line x1="235" y1="150" x2="295" y2="200" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.55" className="pathway-animated" />
        <line x1="295" y1="200" x2="350" y2="170" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.55" className="pathway-animated" />
        <line x1="350" y1="170" x2="360" y2="120" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.6"  className="pathway-animated" />

        {/* ── Krebs → NADH / FADH₂ ── */}
        <line x1="360" y1="120" x2="450" y2="90"  stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.5" className="pathway-animated" />
        <line x1="360" y1="120" x2="455" y2="155" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.5" className="pathway-animated" />

        {/* ── NADH / FADH₂ → ETC ── */}
        <line x1="450" y1="90"  x2="530" y2="175" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" className="pathway-animated" />
        <line x1="455" y1="155" x2="530" y2="175" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" className="pathway-animated" />

        {/* ── O₂ → ETC ── */}
        <line x1="505" y1="290" x2="530" y2="175" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.5" className="pathway-animated" />

        {/* ── ETC → ATP ── */}
        <line x1="530" y1="175" x2="530" y2="305" stroke="#22d3ee" strokeWidth="2"   strokeOpacity="0.65" className="pathway-animated" />

        {/* ── Coming-soon feeders (dashed, muted, static) ── */}
        <line x1="100" y1="270" x2="350" y2="170" stroke="#475569" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
        <line x1="200" y1="315" x2="360" y2="120" stroke="#475569" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 3" />

        {/* ── Krebs halo (animated glow) ── */}
        <circle cx="360" cy="120" r="38" fill="#7c3aed" fillOpacity="0.1" className="krebs-glow-animated" />
        <circle cx="360" cy="120" r="28" fill="#7c3aed" fillOpacity="0.06" />

        {/* ── Nodes ── */}

        {/* Glucose */}
        <circle cx="60"  cy="80"  r="10" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="60"  y="66"  textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Glucose</text>

        {/* G6P */}
        <circle cx="145" cy="110" r="9"  fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="145" y="97"  textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">G6P</text>

        {/* Glycolysis */}
        <circle cx="235" cy="150" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="235" y="172" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Glycolysis</text>

        {/* Pyruvate */}
        <circle cx="295" cy="200" r="8"  fill="#0f172a" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.7" />
        <text x="295" y="216" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui">Pyruvate</text>

        {/* Acetyl-CoA */}
        <circle cx="350" cy="170" r="9"  fill="#0f172a" stroke="#a78bfa" strokeWidth="1.5" />
        <text x="350" y="186" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui">Acetyl-CoA</text>

        {/* Krebs — hub */}
        <circle cx="360" cy="120" r="20" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2" />
        <text x="360" y="116" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="system-ui" fontWeight="600">Krebs</text>
        <text x="360" y="127" textAnchor="middle" fill="#7c3aed" fontSize="7" fontFamily="system-ui">cycle</text>

        {/* NADH */}
        <circle cx="450" cy="90"  r="8"  fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="450" y="77"  textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">NADH</text>

        {/* FADH₂ */}
        <circle cx="455" cy="155" r="8"  fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="455" y="172" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">FADH₂</text>

        {/* ETC */}
        <circle cx="530" cy="175" r="13" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="530" y="161" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">ETC</text>

        {/* O₂ */}
        <circle cx="505" cy="290" r="9"  fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
        <text x="505" y="307" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">O₂</text>

        {/* ATP */}
        <circle cx="530" cy="305" r="14" fill="#0c1a26" stroke="#22d3ee" strokeWidth="2" />
        <text x="530" y="310" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="system-ui" fontWeight="600">ATP</text>

        {/* Beta-ox (muted, coming soon) */}
        <circle cx="100" cy="270" r="8"  fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.5" />
        <text x="75"  cy="270" y="285"  textAnchor="middle" fill="#475569" fontSize="8" fontFamily="system-ui">β-ox</text>

        {/* AAs (muted, coming soon) */}
        <circle cx="200" cy="315" r="8"  fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.5" />
        <text x="200" y="332" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="system-ui">AAs</text>
      </svg>
    </div>
  );
}
