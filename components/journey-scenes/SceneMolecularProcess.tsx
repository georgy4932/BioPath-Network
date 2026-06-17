export default function SceneMolecularProcess({ active }: { active: boolean }) {
  const c = active ? "#3b82f6" : "#d1d5db";
  const t = active ? "#1e40af" : "#9ca3af";
  const pFill = active ? "#bfdbfe" : "#e5e7eb";
  const eFill = active ? "#fbbf24" : "#d1d5db";
  return (
    <g>
      {/* ATP molecule — adenosine + three phosphate groups */}
      {/* Adenosine (sugar + base) */}
      <ellipse cx="68" cy="52" rx="13" ry="10" fill={pFill} stroke={c} strokeWidth="1.2"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="68" y="55" textAnchor="middle" fontSize="4" fill={t}
        style={{ fontFamily: "sans-serif" }}>
        Adenosine
      </text>
      {/* Phosphate backbone */}
      <line x1="55" y1="52" x2="42" y2="52" stroke={c} strokeWidth="1"
        style={{ transition: "stroke 0.4s" }} />
      <circle cx="38" cy="52" r="5" fill={pFill} stroke={c} strokeWidth="1"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="38" y="54.5" textAnchor="middle" fontSize="3.5" fill={t}
        style={{ fontFamily: "sans-serif" }}>P</text>

      <line x1="33" y1="52" x2="27" y2="52" stroke={c} strokeWidth="1"
        style={{ transition: "stroke 0.4s" }} />
      <circle cx="24" cy="52" r="5" fill={pFill} stroke={c} strokeWidth="1"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="24" y="54.5" textAnchor="middle" fontSize="3.5" fill={t}
        style={{ fontFamily: "sans-serif" }}>P</text>

      <line x1="19" y1="52" x2="13" y2="52" stroke={c} strokeWidth="1"
        style={{ transition: "stroke 0.4s" }} />
      {/* Terminal phosphate — highlighted as energy-rich bond */}
      <circle cx="10" cy="52" r="6" fill={eFill} stroke={active ? "#d97706" : "#9ca3af"}
        strokeWidth="1.2" style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="10" y="54.5" textAnchor="middle" fontSize="3.5"
        fill={active ? "#92400e" : "#6b7280"} style={{ fontFamily: "sans-serif" }}>P</text>

      {/* Energy label */}
      <text x="50" y="22" textAnchor="middle" fontSize="5.5" fill={active ? "#1d4ed8" : "#9ca3af"}
        fontWeight="600" style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        ~30–32 ATP
      </text>
      <text x="50" y="31" textAnchor="middle" fontSize="4" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        per glucose molecule
      </text>

      {/* Lightning bolt energy symbol */}
      <text x="50" y="14" textAnchor="middle" fontSize="10"
        style={{ transition: "opacity 0.4s", opacity: active ? 1 : 0.3 }}>
        ⚡
      </text>

      {/* Glucose dot — the energy-derived proton arriving at ATP synthase */}
      <circle cx="50" cy="68" r="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="0.7"
        style={{ animation: "glucose-dot-in 0.4s ease-out forwards", transformBox: "fill-box", transformOrigin: "center" }} />
      <text x="50" y="90" textAnchor="middle" fontSize="4.5" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        ATP Synthase (F₀F₁)
      </text>
    </g>
  );
}
