import { NetworkData } from "@/types/network";

export const glucoseNetwork: NetworkData = {
  nodes: [
    {
      id: "glucose",
      label: "Glucose",
      type: "metabolite",
      explanation:
        "A six-carbon monosaccharide and the primary energy source for most cells. It enters cells via glucose transporters and is phosphorylated to glucose-6-phosphate as the first step of glycolysis.",
      connectedPathways: ["Glycolysis", "Glycogenesis", "Gluconeogenesis"],
      diseaseRelevance:
        "Elevated blood glucose is the hallmark of diabetes mellitus. Impaired cellular glucose uptake is central to insulin resistance.",
      evidenceNote:
        "Well-established textbook biochemistry. [Placeholder for citation]",
      position: { x: 400, y: 50 },
    },
    {
      id: "glucose-6-phosphate",
      label: "Glucose-6-phosphate",
      type: "metabolite",
      explanation:
        "A phosphorylated form of glucose produced by hexokinase or glucokinase. It sits at a critical metabolic junction, channelling glucose into glycolysis, glycogenesis, or the pentose phosphate pathway depending on cellular needs.",
      connectedPathways: [
        "Glycolysis",
        "Pentose Phosphate Pathway",
        "Glycogenesis",
        "Glycogenolysis",
      ],
      diseaseRelevance:
        "Accumulation of glucose-6-phosphate is linked to glycogen storage diseases. Deficiency in its catabolism via the PPP is associated with G6PD deficiency.",
      evidenceNote:
        "Core metabolic intermediate. [Placeholder for citation]",
      position: { x: 400, y: 220 },
    },
    {
      id: "fructose-6-phosphate",
      label: "Fructose-6-phosphate",
      type: "metabolite",
      explanation:
        "An intermediate in glycolysis produced by isomerisation of glucose-6-phosphate by phosphoglucose isomerase. It is subsequently phosphorylated to fructose-1,6-bisphosphate.",
      connectedPathways: ["Glycolysis", "Gluconeogenesis", "Fructolysis"],
      diseaseRelevance:
        "Elevated fructose-6-phosphate flux is involved in the hexosamine biosynthetic pathway, which has been associated with insulin resistance.",
      evidenceNote: "Established glycolytic intermediate. [Placeholder for citation]",
      position: { x: 400, y: 420 },
    },
    {
      id: "glycogen",
      label: "Glycogen",
      type: "metabolite",
      explanation:
        "A branched polymer of glucose serving as the primary glucose storage form in liver and muscle. Synthesis (glycogenesis) requires glucose-6-phosphate as a precursor.",
      connectedPathways: ["Glycogenesis", "Glycogenolysis"],
      diseaseRelevance:
        "Glycogen storage diseases (e.g., von Gierke disease) result from defects in glycogen metabolism enzymes. In diabetes, impaired glycogen synthesis contributes to postprandial hyperglycaemia.",
      evidenceNote: "Established storage polysaccharide. [Placeholder for citation]",
      position: { x: 650, y: 220 },
    },
    {
      id: "ribose-5-phosphate",
      label: "Ribose-5-phosphate",
      type: "metabolite",
      explanation:
        "A five-carbon sugar produced in the pentose phosphate pathway (PPP) from glucose-6-phosphate. It is an essential precursor for nucleotide and nucleic acid synthesis.",
      connectedPathways: [
        "Pentose Phosphate Pathway",
        "Nucleotide Biosynthesis",
      ],
      diseaseRelevance:
        "Reduced ribose-5-phosphate production is seen when G6PD activity is low, limiting nucleotide synthesis in rapidly dividing cells.",
      evidenceNote: "PPP product with established biosynthetic role. [Placeholder for citation]",
      position: { x: 100, y: 420 },
    },
    {
      id: "nadph",
      label: "NADPH",
      type: "metabolite",
      explanation:
        "Nicotinamide adenine dinucleotide phosphate (reduced form). Generated in the oxidative branch of the pentose phosphate pathway by G6PD. It is the principal cytosolic reductant, essential for fatty acid synthesis and antioxidant defence.",
      connectedPathways: [
        "Pentose Phosphate Pathway",
        "Glutathione Metabolism",
        "Fatty Acid Synthesis",
      ],
      diseaseRelevance:
        "Insufficient NADPH production due to G6PD deficiency impairs the ability of red blood cells to neutralise oxidative stress, predisposing them to haemolysis.",
      evidenceNote: "Key reducing cofactor. [Placeholder for citation]",
      position: { x: 100, y: 250 },
    },
    {
      id: "glutathione",
      label: "Glutathione",
      type: "metabolite",
      explanation:
        "A tripeptide (glutamate–cysteine–glycine) that is the cell's primary antioxidant. Glutathione peroxidase uses it to detoxify hydrogen peroxide and lipid peroxides. NADPH is required to regenerate reduced glutathione (GSH) from its oxidised form (GSSG).",
      connectedPathways: ["Glutathione Metabolism", "Antioxidant Defence"],
      diseaseRelevance:
        "In G6PD-deficient red blood cells, low NADPH leads to depletion of reduced glutathione, leaving erythrocytes vulnerable to oxidative damage and haemolysis.",
      evidenceNote: "Well-characterised antioxidant. [Placeholder for citation]",
      position: { x: 100, y: 100 },
    },
    {
      id: "g6pd",
      label: "G6PD",
      type: "enzyme",
      explanation:
        "Glucose-6-phosphate dehydrogenase is the rate-limiting enzyme of the pentose phosphate pathway. It catalyses the oxidation of glucose-6-phosphate to 6-phosphogluconolactone, simultaneously reducing NADP⁺ to NADPH.",
      connectedPathways: ["Pentose Phosphate Pathway"],
      diseaseRelevance:
        "Loss-of-function mutations in the G6PD gene cause G6PD deficiency, the most common enzyme deficiency worldwide, affecting approximately 400 million people.",
      evidenceNote: "Enzyme function extensively characterised. [Placeholder for citation]",
      position: { x: 200, y: 340 },
    },
    {
      id: "g6pd-deficiency",
      label: "G6PD Deficiency",
      type: "disease",
      explanation:
        "An X-linked recessive disorder caused by mutations in the G6PD gene, reducing or abolishing G6PD enzymatic activity. Affected individuals are particularly vulnerable to oxidative stress triggered by certain foods (e.g., fava beans), medications (e.g., primaquine), or infections.",
      connectedPathways: [
        "Pentose Phosphate Pathway",
        "Glutathione Metabolism",
      ],
      diseaseRelevance:
        "Directly caused by G6PD enzyme deficiency. Manifests as neonatal jaundice or episodic haemolytic anaemia. Confers partial protection against Plasmodium falciparum malaria.",
      evidenceNote:
        "Well-documented genetic disorder. [Placeholder for citation]",
      position: { x: -150, y: 350 },
    },
    {
      id: "oxidative-stress",
      label: "Oxidative Stress",
      type: "mechanism",
      explanation:
        "A state of imbalance between reactive oxygen species (ROS) production and the cell's antioxidant capacity. In red blood cells, which lack mitochondria and depend entirely on the PPP for NADPH, oxidative stress can denature haemoglobin and damage the cell membrane.",
      connectedPathways: ["Antioxidant Defence", "Glutathione Metabolism"],
      diseaseRelevance:
        "Central mechanism linking G6PD deficiency to haemolytic anaemia. Also associated with diabetic complications, where chronic hyperglycaemia increases ROS production.",
      evidenceNote:
        "Mechanistic link is established in erythrocyte biology. [Placeholder for citation]",
      position: { x: -150, y: 160 },
    },
    {
      id: "hemolytic-anemia",
      label: "Hemolytic Anemia Risk",
      type: "disease",
      explanation:
        "A condition in which red blood cells are destroyed faster than they are produced. In G6PD deficiency, oxidative damage to erythrocytes leads to their premature destruction (haemolysis), resulting in anaemia, jaundice, and dark urine.",
      connectedPathways: ["Erythrocyte Metabolism"],
      diseaseRelevance:
        "A key clinical consequence of G6PD deficiency when oxidative stress is triggered. Episodes are often precipitated by oxidant drugs, infections, or dietary factors.",
      evidenceNote:
        "Direct clinical consequence described in literature. [Placeholder for citation]",
      position: { x: -150, y: -30 },
    },
    {
      id: "insulin",
      label: "Insulin",
      type: "hormone",
      explanation:
        "A peptide hormone secreted by pancreatic beta cells in response to elevated blood glucose. It promotes cellular glucose uptake (via GLUT4 translocation), glycogen synthesis, glycolysis, and lipogenesis, while inhibiting gluconeogenesis and glycogenolysis.",
      connectedPathways: ["Glucose Uptake", "Glycogenesis", "Glycolysis"],
      diseaseRelevance:
        "Insufficient insulin secretion (type 1 diabetes) or impaired insulin signalling (type 2 diabetes) results in hyperglycaemia and the metabolic dysregulation of diabetes mellitus.",
      evidenceNote: "Hormone function well-established. [Placeholder for citation]",
      position: { x: 650, y: 50 },
    },
    {
      id: "glucagon",
      label: "Glucagon",
      type: "hormone",
      explanation:
        "A peptide hormone released by pancreatic alpha cells when blood glucose is low. It acts on the liver to stimulate glycogenolysis and gluconeogenesis, raising blood glucose levels in opposition to insulin.",
      connectedPathways: ["Glycogenolysis", "Gluconeogenesis"],
      diseaseRelevance:
        "Dysregulated glucagon secretion contributes to fasting hyperglycaemia in type 2 diabetes. Glucagon receptor antagonists are under investigation as therapeutic targets.",
      evidenceNote: "Counter-regulatory role well-established. [Placeholder for citation]",
      position: { x: 650, y: 390 },
    },
    {
      id: "diabetes-mellitus",
      label: "Diabetes Mellitus",
      type: "disease",
      explanation:
        "A group of metabolic diseases characterised by chronic hyperglycaemia resulting from defects in insulin secretion, insulin action, or both. Long-term complications involve damage to blood vessels and nerves throughout the body.",
      connectedPathways: [
        "Glucose Metabolism",
        "Glycolysis",
        "Gluconeogenesis",
      ],
      diseaseRelevance:
        "Directly linked to impaired glucose-6-phosphate metabolism and dysregulated glucose homeostasis. Individuals with diabetes may also have altered PPP activity.",
      evidenceNote:
        "Established metabolic disease. [Placeholder for citation]",
      position: { x: 650, y: 540 },
    },
  ],

  edges: [
    {
      id: "e-glucose-g6p",
      source: "glucose",
      target: "glucose-6-phosphate",
      label: "phosphorylation (hexokinase)",
      animated: true,
    },
    {
      id: "e-g6p-f6p",
      source: "glucose-6-phosphate",
      target: "fructose-6-phosphate",
      label: "isomerisation (PGI)",
    },
    {
      id: "e-g6p-glycogen",
      source: "glucose-6-phosphate",
      target: "glycogen",
      label: "glycogenesis",
    },
    {
      id: "e-glycogen-g6p",
      source: "glycogen",
      target: "glucose-6-phosphate",
      label: "glycogenolysis",
    },
    {
      id: "e-g6pd-g6p",
      source: "g6pd",
      target: "glucose-6-phosphate",
      label: "catalyses",
    },
    {
      id: "e-g6p-nadph",
      source: "glucose-6-phosphate",
      target: "nadph",
      label: "PPP (via G6PD)",
      animated: true,
    },
    {
      id: "e-g6p-ribose",
      source: "glucose-6-phosphate",
      target: "ribose-5-phosphate",
      label: "PPP",
    },
    {
      id: "e-nadph-glutathione",
      source: "nadph",
      target: "glutathione",
      label: "regenerates GSH",
      animated: true,
    },
    {
      id: "e-glutathione-oxidativestress",
      source: "glutathione",
      target: "oxidative-stress",
      label: "neutralises ROS",
    },
    {
      id: "e-g6pddef-g6pd",
      source: "g6pd-deficiency",
      target: "g6pd",
      label: "reduces activity",
    },
    {
      id: "e-g6pddef-oxidativestress",
      source: "g6pd-deficiency",
      target: "oxidative-stress",
      label: "associated with",
    },
    {
      id: "e-oxidativestress-hemolytic",
      source: "oxidative-stress",
      target: "hemolytic-anemia",
      label: "triggers",
    },
    {
      id: "e-insulin-glucose",
      source: "insulin",
      target: "glucose",
      label: "promotes uptake",
    },
    {
      id: "e-insulin-glycogen",
      source: "insulin",
      target: "glycogen",
      label: "promotes synthesis",
    },
    {
      id: "e-glucagon-glycogen",
      source: "glucagon",
      target: "glycogen",
      label: "promotes breakdown",
    },
    {
      id: "e-glucagon-glucose",
      source: "glucagon",
      target: "glucose",
      label: "raises blood glucose",
    },
    {
      id: "e-diabetes-glucose",
      source: "diabetes-mellitus",
      target: "glucose",
      label: "impairs regulation of",
    },
    {
      id: "e-insulin-diabetes",
      source: "insulin",
      target: "diabetes-mellitus",
      label: "deficiency linked to",
    },
  ],
};
