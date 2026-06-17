import { AnimationStep } from "@/types/animation";

// Node/edge IDs must match glucose6phosphate-network.ts
export const g6pAnimationSteps: AnimationStep[] = [
  {
    id: "anim-glucose-entry",
    label: "Glucose enters the cell",
    explanation:
      "Blood glucose moves into cells via GLUT transporter proteins; the specific transporter depends on cell type and hormonal state.",
    highlightNodes: ["glucose"],
    highlightEdges: [],
  },
  {
    id: "anim-g6p-formation",
    label: "Hexokinase phosphorylates glucose → Glucose-6-phosphate",
    explanation:
      "Hexokinase (glucokinase in liver) irreversibly traps glucose inside the cell by adding a phosphate group, producing glucose-6-phosphate.",
    highlightNodes: ["glucose", "glucose-6-phosphate"],
    highlightEdges: ["e-glucose-g6p"],
    controlType: "rate-committing",
  },
  {
    id: "anim-g6p-glycolysis",
    label: "G6P → Fructose-6-phosphate (glycolysis)",
    explanation:
      "Glucose-6-phosphate isomerises to fructose-6-phosphate, entering glycolysis to generate ATP for cellular energy.",
    highlightNodes: ["glucose-6-phosphate", "fructose-6-phosphate"],
    highlightEdges: ["e-g6p-f6p"],
  },
  {
    id: "anim-g6p-glycogen",
    label: "G6P → Glycogen (storage)",
    explanation:
      "Glucose-6-phosphate is converted to glycogen for storage in liver and muscle, providing a rapidly mobilisable glucose reserve.",
    highlightNodes: ["glucose-6-phosphate", "glycogen"],
    highlightEdges: ["e-g6p-glycogen"],
  },
  {
    id: "anim-g6p-nadph",
    label: "G6P → NADPH via G6PD (redox protection)",
    explanation:
      "G6PD oxidises glucose-6-phosphate, generating NADPH — the sole NADPH source in red blood cells and the start of antioxidant defence.",
    highlightNodes: ["glucose-6-phosphate", "g6pd", "nadph"],
    highlightEdges: ["e-g6p-nadph"],
    controlType: "rate-limiting",
  },
  {
    id: "anim-nadph-glutathione",
    label: "NADPH regenerates reduced glutathione (GSH)",
    explanation:
      "Glutathione reductase uses NADPH to keep glutathione in its active reduced form, ready to neutralise reactive oxygen species.",
    highlightNodes: ["nadph", "glutathione"],
    highlightEdges: ["e-nadph-glutathione"],
  },
  {
    id: "anim-glutathione-ros",
    label: "GSH neutralises oxidative stress",
    explanation:
      "Reduced glutathione donates electrons to neutralise hydrogen peroxide and other ROS, protecting red blood cells from oxidative damage.",
    highlightNodes: ["glutathione", "oxidative-stress"],
    highlightEdges: ["e-glutathione-oxidativestress"],
  },
  {
    id: "anim-haemolysis-risk",
    label: "Reduced oxidative stress lowers haemolysis risk",
    explanation:
      "When the GSH cycle is intact, oxidative damage is contained and haemolytic anaemia risk is reduced. G6PD deficiency breaks this chain.",
    highlightNodes: ["oxidative-stress", "hemolytic-anemia", "g6pd-deficiency"],
    highlightEdges: ["e-oxidativestress-hemolytic", "e-g6pddef-oxidativestress"],
  },
];
