export default function SceneMolecularProcess({ active }: { active: boolean }) {
  const c = active ? "#3b82f6" : "#d1d5db";
  const t = active ? "#1e40af" : "#9ca3af";
  const pFill = active ? "#bfdbfe" : "#e5e7eb";
  const eFill = active ? "#fbbf24" : "#d1d5db";
  return (
    <g>
      {/* ATP molecule — adenosine + three phosphate groups */}
      {/* Adenosine (sugar + base) */}
      <ellipse cx="50" cy="52" rx="13" ry="10" fill={pFill} stroke={c} strokeWidth="1.2"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="50" y="55" textAnchor="middle" fontSize="4" fill={t}
        style={{ fontFamily: "sans-serif" }}>
        Adenosine
      </text>
      {/* Phosphate backbone */}
      <line x1="37" y1="52" x2="24" y2="52" stroke={c} strokeWidth="1"
        style={{ transition: "stroke 0.4s" }} />
      <circle cx="20" cy="52" r="5" fill={pFill} stroke={c} strokeWidth="1"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="20" y="54.5" textAnchor="middle" fontSize="3.5" fill={t}
        style={{ fontFamily: "sans-serif" }}>P</text>

      <line x1="15" y1="52" x2="9" y2="52" stroke={c} strokeWidth="1"
        style={{ transition: "stroke 0.4s" }} />
      <circle cx="6" cy="52" r="5" fill={pFill} stroke={c} strokeWidth="1"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="6" y="54.5" textAnchor="middle" fontSize="3.5" fill={t}
        style={{ fontFamily: "sans-serif" }}>P</text>

      <line x1="1" y1="52" x2="-5" y2="52" stroke={c} strokeWidth="1"
        style={{ transition: "stroke 0.4s" }} />
      {/* Terminal phosphate — highlighted as energy-rich bond */}
      <circle cx="-8" cy="52" r="6" fill={eFill} stroke={active ? "#d97706" : "#9ca3af"}
        strokeWidth="1.2" style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="-8" y="54.5" textAnchor="middle" fontSize="3.5"
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

      <text x="50" y="90" textAnchor="middle" fontSize="4.5" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        ATP Synthase (F₀F₁)
      </text>
    </g>
  );
}
