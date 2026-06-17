import React from "react";

const DOT_STYLE: React.CSSProperties = {
  animation: "glucose-dot-in 0.4s ease-out forwards",
  transformBox: "fill-box",
  transformOrigin: "center",
};

export default function SceneOrgan({
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
  return (
    <g>
      {/* Organ silhouette — lobular rounded shape */}
      <path
        d="M50 12 C30 12 18 26 18 42 C18 60 28 76 50 80 C72 76 82 60 82 42 C82 26 70 12 50 12 Z"
        fill={fill}
        stroke={c}
        strokeWidth="1.5"
        style={{ transition: "stroke 0.4s, fill 0.4s" }}
      />
      {/* Internal structure suggestion */}
      <ellipse cx="42" cy="44" rx="10" ry="7" fill={inner}
        style={{ transition: "fill 0.4s" }} />
      <ellipse cx="58" cy="44" rx="10" ry="7" fill={inner}
        style={{ transition: "fill 0.4s" }} />
      <ellipse cx="50" cy="56" rx="8" ry="6" fill={inner}
        style={{ transition: "fill 0.4s" }} />
      {/* Glucose dot — crossing intestinal wall or inside hepatocytes */}
      <circle
        cx={location === "Small Intestine" ? 36 : 50}
        cy="44"
        r="3.5"
        fill="#fbbf24" stroke="#d97706" strokeWidth="0.7"
        style={DOT_STYLE}
      />
      <text x="50" y="90" textAnchor="middle" fontSize="4.5" fill={t}
        style={{ transition: "fill 0.4s", fontFamily: "sans-serif" }}>
        {location}
      </text>
    </g>
  );
}
