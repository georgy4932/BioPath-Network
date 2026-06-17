export default function SceneOrganSystem({
  active,
  location,
}: {
  active: boolean;
  location: string;
}) {
  const c = active ? "#3b82f6" : "#d1d5db";
  const t = active ? "#1e40af" : "#9ca3af";
  const fill = active ? "#eff6ff" : "#f9fafb";
  return (
    <g>
      {/* Stylised tube representing a tract / vessel */}
      {/* Outer tube */}
      <path
        d="M38 15 Q28 35 30 55 Q32 72 42 80 Q50 85 58 80 Q68 72 70 55 Q72 35 62 15 Q56 10 50 10 Q44 10 38 15 Z"
        fill={fill}
        stroke={c}
        strokeWidth="1.5"
        style={{ transition: "stroke 0.4s, fill 0.4s" }}
      />
      {/* Inner highlight — contents */}
      <path
        d="M44 20 Q38 38 40 55 Q42 66 50 70 Q58 66 60 55 Q62 38 56 20 Q53 16 50 16 Q47 16 44 20 Z"
        fill={active ? "#bfdbfe" : "#e5e7eb"}
        stroke="none"
        style={{ transition: "fill 0.4s" }}
      />
      {/* Flow arrows */}
      <line x1="50" y1="24" x2="50" y2="62" stroke={c} strokeWidth="0.8"
        strokeDasharray="2 2" style={{ transition: "stroke 0.4s" }} />
      <polygon points="50,66 47,60 53,60" fill={c}
        style={{ transition: "fill 0.4s" }} />
      <text x="50" y="88" textAnchor="middle" fontSize="4.5" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        {location}
      </text>
    </g>
  );
}
