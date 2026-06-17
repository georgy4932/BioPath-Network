import PathwayCard, { PathwayCardData } from "./PathwayCard";

const PATHWAY_CARDS: PathwayCardData[] = [
  {
    id: "glucose-journey",
    title: "Glucose Journey",
    description:
      "Follow a glucose molecule from your last meal through digestion, portal circulation, hepatic processing, glycolysis, and into ATP production.",
    icon: "🍬",
    status: "live",
    href: "/learn",
    stepCount: 11,
  },
  {
    id: "oxygen-journey",
    title: "Oxygen Journey",
    description:
      "Trace an oxygen molecule from the atmosphere through the respiratory system, into the bloodstream, and to the inner mitochondrial membrane.",
    icon: "🫁",
    status: "live",
    href: "/learn",
    stepCount: 12,
  },
  {
    id: "glycolysis",
    title: "Glycolysis",
    description:
      "The ten-step cytoplasmic breakdown of glucose to pyruvate — the universal first stage of carbohydrate catabolism.",
    icon: "⚗️",
    status: "coming-soon",
  },
  {
    id: "krebs",
    title: "Krebs Cycle",
    description:
      "The central metabolic hub where acetyl-CoA from carbohydrates, fats, and amino acids is oxidised to drive the electron transport chain.",
    icon: "🔄",
    status: "coming-soon",
  },
  {
    id: "oxphos",
    title: "Oxidative Phosphorylation",
    description:
      "How electron flow through Complexes I–IV powers ATP synthase and generates the majority of the cell's ATP.",
    icon: "⚡",
    status: "coming-soon",
  },
  {
    id: "beta-oxidation",
    title: "Beta Oxidation",
    description:
      "The stepwise degradation of fatty acids in the mitochondrial matrix, feeding acetyl-CoA into the Krebs cycle.",
    icon: "🧈",
    status: "coming-soon",
  },
  {
    id: "amino-acid-catabolism",
    title: "Amino Acid Catabolism",
    description:
      "How amino acids shed their nitrogen through transamination and enter central metabolism as Krebs cycle intermediates.",
    icon: "🧬",
    status: "coming-soon",
  },
];

export default function PathwayCardGrid() {
  return (
    <section id="pathways" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">Metabolic pathways</h2>
        <p className="text-sm text-slate-400 max-w-lg">
          Two journeys are live. More are in development — each will follow the same step-by-step,
          scale-aware format.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {PATHWAY_CARDS.map((card) => (
          <PathwayCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
