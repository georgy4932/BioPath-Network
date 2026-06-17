import { QuestionSet } from "@/types/practice";

export const carbohydratePractice: QuestionSet = {
  id: "carbohydrate-practice",
  title: "Carbohydrate Journey",
  description:
    "Ten questions covering the carbohydrate journey from meal to ATP, the glucose-6-phosphate hub, redox protection, and hormonal regulation. All content is derived from the carbohydrate journey steps and learning modules.",
  questions: [
    // ── Q1 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-001",
      type: "mcq",
      difficulty: "basic",
      relatedJourneyStepId: "jny-meal",
      prompt:
        "What role does salivary amylase play at the start of carbohydrate digestion?",
      options: [
        "It phosphorylates glucose to trap it inside cells",
        "It begins breaking starch into shorter sugar chains",
        "It transports glucose across the intestinal wall",
        "It converts pyruvate to acetyl-CoA",
      ],
      correctIndex: 1,
      explanation:
        "Salivary amylase begins breaking starch into shorter sugar chains in the mouth — the first enzymatic step in carbohydrate processing. Phosphorylation of glucose occurs later in the liver and muscle (via hexokinase or glucokinase), intestinal transport happens in the small intestine, and conversion of pyruvate to acetyl-CoA occurs at mitochondrial entry.",
    },

    // ── Q2 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-002",
      type: "true-false",
      difficulty: "basic",
      relatedJourneyStepId: "jny-digestion",
      prompt:
        "True or false: complex carbohydrates such as starch can be absorbed directly across the intestinal wall without first being broken down.",
      correct: false,
      explanation:
        "Only monosaccharides can be absorbed across the intestinal wall. Complete digestion is required before glucose can enter the bloodstream. Pancreatic amylase and brush-border enzymes must fully break complex carbohydrates down into monosaccharides — primarily glucose, fructose, and galactose — before absorption can occur.",
    },

    // ── Q3 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-003",
      type: "true-false",
      difficulty: "basic",
      relatedJourneyStepId: "jny-portal",
      prompt:
        "True or false: absorbed glucose travels to the liver via the portal vein before reaching systemic circulation.",
      correct: true,
      explanation:
        "Absorbed glucose enters the portal vein and is carried directly to the liver before reaching systemic circulation. This portal-first delivery allows the liver to buffer the post-meal glucose load — storing excess as glycogen or converting it to fat — before the glucose reaches the rest of the body.",
    },

    // ── Q4 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-004",
      type: "mcq",
      difficulty: "intermediate",
      relatedJourneyStepId: "jny-liver",
      relatedLearningModuleId: "glucose-to-g6p",
      prompt:
        "Hexokinase and glucokinase both convert glucose to glucose-6-phosphate. Why can glucokinase continue operating even when glucose-6-phosphate is already abundant, while hexokinase cannot?",
      options: [
        "Glucokinase is found in muscle and fat, where glucose-6-phosphate concentrations stay low",
        "Glucokinase is not inhibited by its product glucose-6-phosphate, whereas hexokinase is",
        "Glucokinase requires no ATP, making it independent of cellular energy status",
        "Glucokinase produces a different product that does not accumulate",
      ],
      correctIndex: 1,
      explanation:
        "Hexokinase is inhibited by its product glucose-6-phosphate (product inhibition); glucokinase is not, allowing the liver to act as a glucose buffer after meals. Because glucokinase lacks product inhibition, its activity scales with blood glucose concentration — the more glucose arrives via the portal vein, the more the liver phosphorylates and commits to glycolysis or glycogen synthesis.",
    },

    // ── Q5 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-005",
      type: "mcq",
      difficulty: "intermediate",
      relatedJourneyStepId: "jny-cell-entry",
      relatedLearningModuleId: "insulin-glucagon-regulation",
      prompt:
        "How does insulin increase glucose uptake in muscle and fat cells?",
      options: [
        "By triggering synthesis of new GLUT4 transporter proteins from scratch",
        "By promoting the movement of existing GLUT4 transporters from inside the cell to the cell surface",
        "By increasing blood flow to peripheral tissues",
        "By converting blood glucose to glycogen before it enters cells",
      ],
      correctIndex: 1,
      explanation:
        "Insulin promotes translocation of GLUT4 transporters to the cell surface in muscle and fat, increasing glucose uptake. Insulin does not primarily act by making new GLUT4 — it causes pre-existing GLUT4 in intracellular vesicles to fuse with the plasma membrane. This translocation is the primary mechanism by which insulin lowers blood glucose after a meal. Impaired GLUT4 translocation in insulin resistance reduces cellular glucose uptake even when blood glucose is elevated.",
    },

    // ── Q6 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-006",
      type: "true-false",
      difficulty: "basic",
      relatedJourneyStepId: "jny-glycolysis",
      prompt: "True or false: glycolysis requires oxygen to proceed.",
      correct: false,
      explanation:
        "Glycolysis is the universal first stage of glucose oxidation. It proceeds without oxygen — the ten-enzyme sequence that converts glucose to pyruvate in the cytosol does not involve oxygen at any step. Oxygen only becomes necessary at the electron transport chain in the mitochondria. This is why cells can still generate ATP under low-oxygen conditions, though the yield is far lower (2 ATP per glucose rather than approximately 30–32).",
    },

    // ── Q7 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-007",
      type: "short-answer",
      difficulty: "intermediate",
      relatedLearningModuleId: "insulin-glucagon-regulation",
      prompt:
        "During fasting, blood glucose begins to fall. Name the hormone released in response, state which organ it acts on primarily, and describe its main metabolic action.",
      sampleAnswer:
        "Glucagon is released from pancreatic alpha cells when blood glucose falls during fasting. It acts primarily on the liver, where it activates a signalling cascade that promotes glycogen breakdown. The resulting glucose units are released into the bloodstream, restoring blood glucose toward the normal range.",
      keyPoints: [
        "Glucagon is the hormone (not insulin)",
        "Released by pancreatic alpha cells",
        "Acts primarily on the liver",
        "Promotes glycogen breakdown (glycogenolysis)",
        "Glucose units released into the bloodstream",
        "Restores falling blood glucose",
      ],
      explanation:
        "When blood glucose falls during fasting or exercise, pancreatic alpha cells release glucagon. Glucagon acts primarily on the liver, activating a signalling cascade that promotes glycogen breakdown. The released glucose units restore blood glucose toward the normal range. Glucagon is the counter-regulatory hormone to insulin — together they maintain glucose homeostasis through opposing actions on the same metabolic pathways.",
    },

    // ── Q8 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-008",
      type: "ordering",
      difficulty: "intermediate",
      relatedJourneyStepId: "jny-glycolysis",
      prompt:
        "Arrange these five stages of aerobic glucose metabolism in the correct order, from first to last.",
      items: [
        "Krebs cycle — acetyl-CoA is oxidised; NADH and FADH₂ are produced",
        "Glycolysis — glucose is broken down to pyruvate in the cytosol",
        "ATP synthesis — protons flow through ATP synthase; ADP is phosphorylated to ATP",
        "Electron transport chain — NADH and FADH₂ donate electrons; protons are pumped across the inner mitochondrial membrane",
        "Mitochondrial entry — pyruvate is converted to acetyl-CoA by pyruvate dehydrogenase",
      ],
      correctOrder: [1, 4, 0, 3, 2],
      explanation:
        "Glycolysis (item 1) occurs first in the cytosol, converting glucose to two pyruvate molecules and yielding 2 ATP and 2 NADH. Pyruvate then crosses into the mitochondria where pyruvate dehydrogenase converts it to acetyl-CoA (item 4), committing it to aerobic metabolism. Acetyl-CoA enters the Krebs cycle in the mitochondrial matrix (item 0), generating NADH and FADH₂ as electron carriers. Those carriers feed the electron transport chain on the inner mitochondrial membrane (item 3), where electrons pass down an energy gradient and protons are pumped across, creating an electrochemical gradient. Finally, protons flow back through ATP synthase (item 2), driving phosphorylation of ADP to ATP. One glucose yields approximately 30–32 ATP via the full aerobic pathway.",
    },

    // ── Q9 ─────────────────────────────────────────────────────────────────────
    {
      id: "pq-009",
      type: "mcq",
      difficulty: "advanced",
      relatedLearningModuleId: "g6pd-nadph-glutathione",
      prompt:
        "Why are red blood cells particularly vulnerable to oxidative damage when G6PD is deficient, compared with most other cell types?",
      options: [
        "Red blood cells carry oxygen and are therefore inherently more prone to self-oxidation than other cells",
        "Red blood cells lack mitochondria, making G6PD their only significant source of NADPH — without it, they cannot regenerate reduced glutathione",
        "Red blood cells have alternative mitochondrial pathways that fully replace G6PD-derived NADPH",
        "Red blood cells cannot perform glycolysis and so have no way to generate any NADPH at all",
      ],
      correctIndex: 1,
      explanation:
        "G6PD is the sole significant source of NADPH in red blood cells. Because erythrocytes lack mitochondria, they cannot use alternative NADPH-generating reactions. Most cells generate NADPH through both the pentose phosphate pathway and mitochondrial reactions; red blood cells depend entirely on G6PD. Without NADPH, glutathione reductase cannot convert oxidised glutathione (GSSG) back to its active reduced form (GSH). Without GSH, glutathione peroxidase cannot neutralise hydrogen peroxide and lipid peroxides — leaving the red blood cell defenceless against oxidative stress and vulnerable to haemolysis. G6PD deficiency is the most common enzyme deficiency worldwide, affecting approximately 400 million people.",
    },

    // ── Q10 ────────────────────────────────────────────────────────────────────
    {
      id: "pq-010",
      type: "mcq",
      difficulty: "intermediate",
      relatedJourneyStepId: "jny-etc",
      prompt:
        "What does the electron transport chain create that allows ATP synthase to produce ATP?",
      options: [
        "A glucose concentration gradient",
        "A proton electrochemical gradient across the inner mitochondrial membrane",
        "Direct phosphorylation of glucose",
        "A pool of free oxygen inside the cytosol",
      ],
      correctIndex: 1,
      explanation:
        "The electron transport chain uses electrons from NADH and FADH₂ to pump protons across the inner mitochondrial membrane. This creates an electrochemical gradient. ATP synthase allows protons to flow back across the membrane, and that movement drives phosphorylation of ADP to ATP.",
    },
  ],
};
