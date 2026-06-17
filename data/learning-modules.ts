import { LearningModule } from "@/types/learning";

export const learningModules: LearningModule[] = [
  // ─── Glucose Metabolism ────────────────────────────────────────────────────
  {
    id: "glucose-to-g6p",
    title: "Glucose to Glucose-6-phosphate",
    section: "Glucose Metabolism",
    explanation:
      "Glucose is the cell's primary fuel. Before it can be used or stored, it must be phosphorylated and committed to a metabolic fate. This module traces the first steps from blood glucose to the metabolic crossroads at glucose-6-phosphate.",
    steps: [
      {
        id: "glucose-entry",
        label: "Glucose enters the cell",
        detail: {
          whatHappens:
            "Glucose moves from the bloodstream into cells via glucose transporter proteins (GLUTs). The specific transporter depends on cell type: GLUT4 in muscle and fat (regulated by insulin), GLUT2 in liver (high capacity, low affinity).",
          keyMolecule: "GLUT4 / GLUT2 (glucose transporter proteins)",
          whyItMatters:
            "Glucose transport is the first step of glucose utilisation. Impaired GLUT4 translocation in insulin resistance reduces cellular glucose uptake even when blood glucose is elevated.",
          diseaseRelevance:
            "Reduced GLUT4 activity is associated with type 2 diabetes and insulin resistance.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard biochemistry and endocrinology textbook — source to be added.",
        },
      },
      {
        id: "hexokinase-phosphorylation",
        label: "Hexokinase phosphorylates glucose",
        isControlStep: true,
        detail: {
          whatHappens:
            "Hexokinase (or glucokinase in liver) transfers a phosphate group from ATP to glucose, producing glucose-6-phosphate (G6P). This reaction is essentially irreversible and traps glucose inside the cell — it can no longer exit via glucose transporters.",
          keyMolecule: "Hexokinase / Glucokinase (isoforms by tissue)",
          whyItMatters:
            "Phosphorylation commits glucose to intracellular metabolism. Hexokinase is inhibited by its product G6P (product inhibition); glucokinase is not, allowing the liver to act as a glucose buffer after meals.",
          diseaseRelevance:
            "Glucokinase mutations are associated with maturity-onset diabetes of the young (MODY type 2), a form of monogenic diabetes characterised by mild chronic hyperglycaemia.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard biochemistry textbook — source to be added.",
        },
      },
      {
        id: "g6p-junction",
        label: "Glucose-6-phosphate reaches a metabolic junction",
        detail: {
          whatHappens:
            "Glucose-6-phosphate (G6P) sits at a branch point. It can enter glycolysis (energy production via fructose-6-phosphate), glycogenesis (storage as glycogen), or the pentose phosphate pathway (NADPH and ribose-5-phosphate production). Which route predominates depends on the cell's energy state and hormonal context.",
          keyMolecule: "Glucose-6-phosphate (G6P)",
          whyItMatters:
            "G6P is the cell's committed glucose molecule. Its routing determines whether glucose is burned for energy, stored, or used to support antioxidant defence and nucleotide synthesis.",
          diseaseRelevance:
            "Accumulation of G6P is associated with glycogen storage diseases such as von Gierke disease (glucose-6-phosphatase deficiency). Reduced G6P routing into the pentose phosphate pathway is a feature of G6PD deficiency.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard biochemistry textbook — source to be added.",
        },
      },
    ],
  },

  // ─── Redox Protection ──────────────────────────────────────────────────────
  {
    id: "g6pd-nadph-glutathione",
    title: "G6PD, NADPH, and glutathione protection",
    section: "Redox Protection",
    explanation:
      "Red blood cells carry oxygen but have no mitochondria. They depend entirely on a single enzyme — G6PD — to generate the NADPH needed to maintain antioxidant defences. This module traces the protection chain from glucose-6-phosphate to glutathione, and what happens when it fails.",
    steps: [
      {
        id: "g6pd-reaction",
        label: "G6PD generates NADPH from glucose-6-phosphate",
        isControlStep: true,
        detail: {
          whatHappens:
            "Glucose-6-phosphate dehydrogenase (G6PD) oxidises glucose-6-phosphate to 6-phosphogluconolactone, simultaneously reducing NADP⁺ to NADPH. This is the rate-limiting step of the oxidative branch of the pentose phosphate pathway (PPP).",
          keyMolecule: "G6PD (glucose-6-phosphate dehydrogenase)",
          whyItMatters:
            "G6PD is the sole significant source of NADPH in red blood cells. Because erythrocytes lack mitochondria, they cannot use alternative NADPH-generating reactions. The entire antioxidant capacity of a red blood cell depends on this step.",
          diseaseRelevance:
            "Loss-of-function mutations in the G6PD gene reduce or abolish this reaction, directly impairing NADPH production. G6PD deficiency is the most common enzyme deficiency worldwide, affecting approximately 400 million people.",
          evidenceLevel: "textbook",
          sourceNote:
            "Enzyme kinetics and structure characterised in primary literature — source to be added.",
        },
      },
      {
        id: "nadph-regenerates-gsh",
        label: "NADPH regenerates reduced glutathione (GSH)",
        detail: {
          whatHappens:
            "Glutathione reductase uses NADPH to convert oxidised glutathione (GSSG) back to its active reduced form (GSH). Without a continuous supply of NADPH, the cell's glutathione pool shifts toward the oxidised, inactive GSSG form.",
          keyMolecule: "Glutathione reductase (uses NADPH as cofactor)",
          whyItMatters:
            "Reduced glutathione (GSH) is the cell's primary small-molecule antioxidant. NADPH is required to keep it in its active form. This step is the mechanistic link between the pentose phosphate pathway and antioxidant defence.",
          diseaseRelevance:
            "In G6PD deficiency, low NADPH leads to GSH depletion, leaving red blood cells unable to regenerate their antioxidant buffer when oxidative stress occurs.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard biochemistry textbook — source to be added.",
        },
      },
      {
        id: "gsh-neutralises-ros",
        label: "Reduced glutathione neutralises reactive oxygen species (ROS)",
        detail: {
          whatHappens:
            "Glutathione peroxidase uses reduced glutathione (GSH) to detoxify hydrogen peroxide (H₂O₂) and lipid peroxides, converting them to water and oxidised glutathione (GSSG). GSH is consumed in this reaction and must be continuously regenerated.",
          keyMolecule:
            "Glutathione peroxidase (enzyme); GSH (substrate)",
          whyItMatters:
            "This is the front-line defence against oxidative damage in red blood cells. In cells with adequate G6PD activity, GSSG is continuously recycled back to GSH via NADPH. When G6PD is deficient, the cycle cannot keep up with oxidative challenge.",
          diseaseRelevance:
            "When GSH is depleted, haemoglobin becomes vulnerable to oxidation, forming Heinz bodies. Damaged red blood cells are removed by the spleen, causing haemolytic anaemia.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard biochemistry textbook — source to be added.",
        },
      },
      {
        id: "oxidative-stress-haemolysis",
        label: "Oxidative stress can precipitate haemolytic anaemia risk",
        detail: {
          whatHappens:
            "When an oxidative challenge — from certain medications (e.g. primaquine), infections, or fava beans — overwhelms the depleted glutathione pool, haemoglobin is oxidised and red blood cells are destroyed prematurely (haemolysis).",
          keyMolecule: "Reactive oxygen species (ROS)",
          whyItMatters:
            "Haemolytic episodes in G6PD deficiency are episodic, not continuous. They are precipitated by specific oxidative triggers in susceptible individuals. This step illustrates why the G6PD → NADPH → GSH chain has direct clinical significance.",
          diseaseRelevance:
            "G6PD-deficient individuals are at increased risk of haemolytic anaemia when exposed to specific oxidative stressors. This is educational context only — specific risk factors should be discussed with a qualified healthcare professional.",
          evidenceLevel: "review",
          sourceNote:
            "Described in review literature on G6PD deficiency and haemolytic anaemia — source to be added.",
        },
      },
    ],
  },

  // ─── Hormonal Regulation ───────────────────────────────────────────────────
  {
    id: "insulin-glucagon-regulation",
    title: "Insulin and glucagon regulation of glucose handling",
    section: "Hormonal Regulation",
    explanation:
      "Blood glucose is kept within a narrow range by two opposing hormones — insulin and glucagon. Both act on glucose metabolism at multiple points, including directly on the pathways connected to glucose-6-phosphate.",
    steps: [
      {
        id: "insulin-release",
        label: "High blood glucose triggers insulin release",
        detail: {
          whatHappens:
            "When blood glucose rises after a meal, pancreatic beta cells detect it and secrete insulin into the bloodstream. Insulin travels to target tissues — primarily liver, muscle, and fat — to coordinate glucose disposal.",
          keyMolecule: "Insulin (peptide hormone, pancreatic beta cells)",
          whyItMatters:
            "Insulin is the primary anabolic hormone of glucose metabolism. It coordinates the shift from a fasted to a fed metabolic state, directing glucose into energy use and storage.",
          diseaseRelevance:
            "Insufficient insulin secretion (type 1 diabetes) or impaired insulin action (type 2 diabetes) leads to sustained hyperglycaemia and its associated long-term complications.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard endocrinology and biochemistry textbook — source to be added.",
        },
      },
      {
        id: "insulin-glucose-uptake",
        label: "Insulin promotes glucose uptake and glucose-6-phosphate production",
        detail: {
          whatHappens:
            "Insulin promotes translocation of GLUT4 transporters to the cell surface in muscle and fat, increasing glucose uptake. Inside the cell, increased glucose flux leads to greater glucose-6-phosphate production by hexokinase, driving glycolysis and glycogenesis.",
          keyMolecule:
            "GLUT4 (transporter); Hexokinase (enzyme)",
          whyItMatters:
            "This step connects hormonal signalling to the metabolic junction at glucose-6-phosphate. Insulin effectively commits more glucose to intracellular use.",
          diseaseRelevance:
            "Insulin resistance — where cells fail to respond adequately to insulin — reduces GLUT4 translocation, impairing glucose uptake and contributing to hyperglycaemia in type 2 diabetes.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard endocrinology and biochemistry textbook — source to be added.",
        },
      },
      {
        id: "insulin-glycogen",
        label: "Insulin promotes glycogen storage",
        detail: {
          whatHappens:
            "Insulin activates glycogen synthase (via the PI3K–Akt signalling pathway) and inhibits glycogen phosphorylase. The net effect is to promote glycogen synthesis from glucose-6-phosphate and suppress glycogen breakdown.",
          keyMolecule: "Glycogen synthase (activated by insulin signalling)",
          whyItMatters:
            "Glycogenesis is a major route for glucose disposal after a meal. It provides a rapidly mobilisable glucose store that can be accessed during fasting or exercise.",
          diseaseRelevance:
            "Reduced hepatic and muscle glycogen synthesis is associated with type 2 diabetes and insulin resistance, contributing to postprandial hyperglycaemia.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard endocrinology and biochemistry textbook — source to be added.",
        },
      },
      {
        id: "glucagon-release",
        label: "Low blood glucose triggers glucagon release",
        detail: {
          whatHappens:
            "When blood glucose falls during fasting or exercise, pancreatic alpha cells release glucagon into the bloodstream. Glucagon acts primarily on the liver to restore blood glucose toward the normal range.",
          keyMolecule: "Glucagon (peptide hormone, pancreatic alpha cells)",
          whyItMatters:
            "Glucagon is the counter-regulatory hormone to insulin. Together, insulin and glucagon maintain glucose homeostasis through opposing actions on the same metabolic pathways.",
          diseaseRelevance:
            "Dysregulated glucagon secretion — including inappropriately elevated glucagon — is associated with fasting hyperglycaemia in type 2 diabetes.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard endocrinology and biochemistry textbook — source to be added.",
        },
      },
      {
        id: "glucagon-glycogenolysis",
        label: "Glucagon drives glycogen breakdown and glucose release",
        isControlStep: true,
        detail: {
          whatHappens:
            "Glucagon activates adenylyl cyclase, raising cyclic AMP (cAMP), which activates protein kinase A. PKA phosphorylates and activates glycogen phosphorylase, breaking glycogen down to glucose-1-phosphate. This is converted to glucose-6-phosphate and then to free glucose, which is released into the blood.",
          keyMolecule:
            "Glycogen phosphorylase (activated by glucagon signalling via cAMP–PKA)",
          whyItMatters:
            "This step shows how glucagon connects hormonal signalling to glycogen breakdown, ultimately releasing glucose and connecting back to glucose-6-phosphate. It is a control step because it initiates glucose mobilisation from the liver's glycogen store.",
          diseaseRelevance:
            "Excessive hepatic glucose production due to dysregulated glucagon action is associated with fasting hyperglycaemia in type 2 diabetes.",
          evidenceLevel: "textbook",
          sourceNote:
            "Standard endocrinology and biochemistry textbook — source to be added.",
        },
      },
    ],
  },
];
