export default function SceneOrganism({ active }: { active: boolean }) {
  const c = active ? "#3b82f6" : "#d1d5db";
  const t = active ? "#1e40af" : "#9ca3af";
  return (
    <g>
      {/* Head */}
      <circle cx="50" cy="18" r="9" fill="none" stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s" }} />
      {/* Body */}
      <line x1="50" y1="27" x2="50" y2="58" stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s" }} />
      {/* Arms */}
      <line x1="50" y1="35" x2="32" y2="48" stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s" }} />
      <line x1="50" y1="35" x2="68" y2="48" stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s" }} />
      {/* Legs */}
      <line x1="50" y1="58" x2="38" y2="78" stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s" }} />
      <line x1="50" y1="58" x2="62" y2="78" stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s" }} />
      {/* Glucose dot — at the mouth, carbohydrate entering the body */}
      <circle cx="54" cy="27" r="3.5" fill="#fbbf24" stroke="#d97706" strokeWidth="0.7"
        style={{ animation: "glucose-dot-in 0.4s ease-out forwards", transformBox: "fill-box", transformOrigin: "center" }} />
      <text x="50" y="89" textAnchor="middle" fontSize="5" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        Human body
      </text>
    </g>
  );
}
