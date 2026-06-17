export default function SceneCell({
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
  const nucl = active ? "#93c5fd" : "#d1d5db";
  return (
    <g>
      {/* Cell membrane */}
      <ellipse cx="50" cy="46" rx="34" ry="32" fill={fill} stroke={c} strokeWidth="1.5"
        style={{ transition: "stroke 0.4s, fill 0.4s" }} />
      {/* Nucleus */}
      <ellipse cx="50" cy="44" rx="13" ry="11" fill={nucl} stroke={c} strokeWidth="1"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      {/* Nucleolus */}
      <circle cx="50" cy="44" r="4" fill={active ? "#60a5fa" : "#9ca3af"}
        style={{ transition: "fill 0.4s" }} />
      {/* Organelle suggestions */}
      <ellipse cx="30" cy="58" rx="6" ry="4" fill={inner} stroke={c} strokeWidth="0.6"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <ellipse cx="68" cy="38" rx="5" ry="3.5" fill={inner} stroke={c} strokeWidth="0.6"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <ellipse cx="36" cy="32" rx="4" ry="3" fill={inner} stroke={c} strokeWidth="0.6"
        style={{ transition: "fill 0.4s, stroke 0.4s" }} />
      <text x="50" y="90" textAnchor="middle" fontSize="4.5" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        {location}
      </text>
    </g>
  );
}
