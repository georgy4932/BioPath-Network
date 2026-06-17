export default function MetabolicNetworkVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px]" aria-hidden="true">
      <svg
        viewBox="0 0 600 380"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Edges ── */}
        {/* Glucose → G6P */}
        <line x1="120" y1="100" x2="220" y2="155" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.35" />
        {/* G6P → Glycolysis */}
        <line x1="220" y1="155" x2="300" y2="190" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.35" />
        {/* G6P → Krebs */}
        <line x1="220" y1="155" x2="300" y2="110" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.4" />
        {/* Glycolysis → Pyruvate */}
        <line x1="300" y1="190" x2="370" y2="240" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.35" />
        {/* Pyruvate → Krebs */}
        <line x1="370" y1="240" x2="300" y2="110" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.3" />
        {/* Krebs → NADH */}
        <line x1="300" y1="110" x2="430" y2="100" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
        {/* Krebs → FADH₂ */}
        <line x1="300" y1="110" x2="420" y2="155" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
        {/* NADH → ETC */}
        <line x1="430" y1="100" x2="510" y2="170" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" />
        {/* FADH₂ → ETC */}
        <line x1="420" y1="155" x2="510" y2="170" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" />
        {/* O₂ → ETC */}
        <line x1="480" y1="280" x2="510" y2="170" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.4" />
        {/* ETC → ATP */}
        <line x1="510" y1="170" x2="510" y2="290" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.5" />
        {/* Beta-ox → Krebs */}
        <line x1="150" y1="260" x2="300" y2="110" stroke="#64748b" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 3" />
        {/* AAs → Krebs */}
        <line x1="190" y1="310" x2="300" y2="110" stroke="#64748b" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 3" />

        {/* ── Krebs halo ── */}
        <circle cx="300" cy="110" r="32" fill="#7c3aed" fillOpacity="0.08" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* ── Nodes ── */}
        {/* Glucose */}
        <circle cx="120" cy="100" r="10" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="120" y="85" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Glucose</text>

        {/* G6P */}
        <circle cx="220" cy="155" r="9" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="220" y="141" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">G6P</text>

        {/* Glycolysis */}
        <circle cx="300" cy="190" r="11" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="300" y="211" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Glycolysis</text>

        {/* Pyruvate */}
        <circle cx="370" cy="240" r="8" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="370" y="258" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Pyruvate</text>

        {/* Krebs — centre hub */}
        <circle cx="300" cy="110" r="16" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2" />
        <text x="300" y="95" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="system-ui" fontWeight="600">Krebs</text>

        {/* NADH */}
        <circle cx="430" cy="100" r="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="430" y="87" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">NADH</text>

        {/* FADH₂ */}
        <circle cx="420" cy="155" r="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="445" y="162" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">FADH₂</text>

        {/* O₂ */}
        <circle cx="480" cy="280" r="9" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
        <text x="480" y="298" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">O₂</text>

        {/* ETC */}
        <circle cx="510" cy="170" r="13" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="510" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="system-ui">ETC</text>

        {/* ATP */}
        <circle cx="510" cy="290" r="14" fill="#0c1a26" stroke="#22d3ee" strokeWidth="2" />
        <text x="510" y="295" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="system-ui" fontWeight="600">ATP</text>

        {/* Beta-ox (muted) */}
        <circle cx="150" cy="260" r="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.5" />
        <text x="120" y="268" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="system-ui">β-ox</text>

        {/* AAs (muted) */}
        <circle cx="190" cy="310" r="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.5" />
        <text x="190" y="328" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="system-ui">AAs</text>
      </svg>
    </div>
  );
}
