export default function SceneOrganelle({
  active,
  location,
}: {
  active: boolean;
  location: string;
}) {
  const c = active ? "#3b82f6" : "#d1d5db";
  const t = active ? "#1e40af" : "#9ca3af";
  const fill = active ? "#eff6ff" : "#f9fafb";
  const inner = active ? "#bfdbfe" : "#e5e7eb";
  const cristae = active ? "#93c5fd" : "#d1d5db";
  return (
    <g>
      {/* Outer mitochondrial membrane */}
      <ellipse cx="50" cy="46" rx="36" ry="26" fill={fill} stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s, fill 0.4s" }} />
      {/* Inner membrane */}
      <ellipse cx="50" cy="46" rx="28" ry="18" fill={inner} stroke={c} strokeWidth="1"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      {/* Cristae — folded inner membrane lines */}
      {[28, 36, 44, 52, 60, 68, 72].map((x, i) => (
        <path
          key={i}
          d={`M${x} ${40 - (i % 2) * 6} Q${x + 2} 46 ${x} ${52 + (i % 2) * 6}`}
          fill="none"
          stroke={cristae}
          strokeWidth="0.8"
          style={{ transition: "stroke 0.4s" }}
        />
      ))}
      {/* Glucose dot — position reflects which mitochondrial compartment */}
      <circle
        cx={location === "Mitochondrial Membrane" ? 84 : location === "Inner Mitochondrial Membrane" ? 38 : 50}
        cy="46"
        r="3.5"
        fill="#fbbf24" stroke="#d97706" strokeWidth="0.7"
        style={{ animation: "glucose-dot-in 0.4s ease-out forwards", transformBox: "fill-box", transformOrigin: "center" }}
      />
      <text x="50" y="83" textAnchor="middle" fontSize="4.5" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        {location}
      </text>
    </g>
  );
}
