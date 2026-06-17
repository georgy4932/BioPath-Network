import { Journey } from "@/types/journey";

export const carbohydrateJourney: Journey = {
  id: "carbohydrate-journey",
  title: "Journey of a Carbohydrate Molecule",
  molecule: "Glucose / Carbohydrate",
  description:
    "Follow a carbohydrate from food through digestion, absorption, and cellular energy production. This journey spans six orders of biological scale — from a meal to a single molecule of ATP.",
  steps: [
    {
      id: "jny-meal",
      title: "Carbohydrate meal",
      location: "Mouth",
      scale: "organism",
      icon: "🍞",
      explanation:
        "Carbohydrates in food — bread, rice, fruit — enter the body through the mouth. Chewing breaks food into smaller pieces, and salivary amylase begins breaking starch into shorter sugar chains.",
      whyItMatters:
        "The type and quantity of carbohydrate consumed determines the glucose load that the body must process. Refined carbohydrates are digested faster, producing a sharper rise in blood glucose.",
      diseaseRelevance:
        "Dietary carbohydrate composition is relevant to blood glucose management in type 2 diabetes and insulin resistance.",
    },
    {
      id: "jny-digestion",
      title: "Digestion",
      location: "Digestive Tract",
      scale: "organ-system",
      icon: "⚗️",
      explanation:
        "In the stomach and small intestine, pancreatic amylase and brush-border enzymes complete the breakdown of complex carbohydrates into monosaccharides — primarily glucose, fructose, and galactose.",
      whyItMatters:
        "Only monosaccharides can be absorbed across the intestinal wall. Complete digestion is required before glucose can enter the bloodstream.",
      diseaseRelevance:
        "Lactase deficiency impairs digestion of lactose (milk sugar), causing gastrointestinal symptoms when dairy is consumed.",
    },
    {
      id: "jny-absorption",
      title: "Small intestine absorption",
      location: "Small Intestine",
      scale: "organ",
      icon: "🫃",
      explanation:
        "Glucose and galactose are absorbed across intestinal enterocytes via the SGLT1 sodium-glucose co-transporter on the apical surface, and exit into the bloodstream via GLUT2 on the basolateral surface. Fructose uses GLUT5.",
      whyItMatters:
        "The intestinal epithelium controls how much glucose enters the portal circulation. Rapid absorption leads to a faster rise in blood glucose.",
      diseaseRelevance:
        "Malabsorption disorders — including coeliac disease and small intestinal bacterial overgrowth — can impair nutrient uptake and reduce energy availability.",
    },
    {
      id: "jny-portal",
      title: "Portal circulation",
      location: "Portal Vein",
      scale: "organ-system",
      icon: "🩸",
      explanation:
        "Absorbed glucose enters the portal vein and is carried directly to the liver before reaching systemic circulation. The liver is the first organ to encounter the post-meal glucose load.",
      whyItMatters:
        "Portal delivery allows the liver to buffer blood glucose — storing excess as glycogen or converting it to fat — before nutrients reach the rest of the body. This prevents large glucose spikes in systemic circulation.",
      diseaseRelevance:
        "In type 2 diabetes, impaired hepatic glucose uptake after meals contributes to postprandial hyperglycaemia.",
    },
    {
      id: "jny-liver",
      title: "Hepatic processing",
      location: "Liver",
      scale: "organ",
      icon: "🫀",
      explanation:
        "The liver takes up glucose via the high-capacity GLUT2 transporter. Glucokinase phosphorylates glucose to glucose-6-phosphate (G6P), committing it to intracellular metabolism. G6P can enter glycolysis, glycogen synthesis, or the pentose phosphate pathway.",
      whyItMatters:
        "The liver acts as the body's central glucose regulator. After a meal it stores glucose as glycogen; during fasting it releases glucose back into the blood.",
      diseaseRelevance:
        "Reduced hepatic glycogen synthesis and increased gluconeogenesis contribute to elevated fasting blood glucose in type 2 diabetes.",
      controlType: "rate-committing",
      relatedLearningModuleId: "glucose-to-g6p",
    },
    {
      id: "jny-cell-entry",
      title: "Cell entry via GLUT transporters",
      location: "Cell Membrane",
      scale: "cell",
      icon: "🧫",
      explanation:
        "Glucose enters peripheral cells — muscle and fat — via GLUT4 transporters, which move to the cell surface in response to insulin signalling. In the brain, GLUT3 provides continuous insulin-independent glucose uptake.",
      whyItMatters:
        "GLUT4 translocation is the primary mechanism by which insulin lowers blood glucose. Impaired translocation means glucose remains in the blood even when insulin is present.",
      diseaseRelevance:
        "Reduced GLUT4 translocation is a key feature of insulin resistance and type 2 diabetes.",
      relatedLearningModuleId: "glucose-to-g6p",
    },
    {
      id: "jny-glycolysis",
      title: "Cytosolic glycolysis",
      location: "Cytosol",
      scale: "cell",
      icon: "⚗️",
      explanation:
        "In the cytosol, glucose-6-phosphate is metabolised through a ten-enzyme sequence (glycolysis), producing two molecules of pyruvate, two molecules of ATP, and two molecules of NADH per glucose.",
      whyItMatters:
        "Glycolysis is the universal first stage of glucose oxidation. It proceeds without oxygen and provides the substrate (pyruvate) for aerobic energy production in the mitochondria.",
      relatedLearningModuleId: "glucose-to-g6p",
    },
    {
      id: "jny-mito-entry",
      title: "Mitochondrial entry",
      location: "Mitochondrial Membrane",
      scale: "organelle",
      icon: "🔋",
      explanation:
        "Pyruvate crosses the mitochondrial membranes and is converted to acetyl-CoA by pyruvate dehydrogenase, releasing one molecule of CO₂ and producing one molecule of NADH per pyruvate.",
      whyItMatters:
        "Mitochondrial entry commits pyruvate to aerobic metabolism. Without this step, cells can only use anaerobic glycolysis, producing far less ATP per glucose molecule.",
      diseaseRelevance:
        "Pyruvate dehydrogenase deficiency impairs this conversion, causing lactic acidosis as pyruvate accumulates and is converted to lactate instead.",
      controlType: "rate-limiting",
    },
    {
      id: "jny-krebs",
      title: "Krebs cycle",
      location: "Mitochondrial Matrix",
      scale: "organelle",
      icon: "⚙️",
      explanation:
        "Acetyl-CoA enters the citric acid cycle, which turns twice per glucose molecule. Each turn produces three molecules of NADH, one FADH₂, and one GTP, while releasing two molecules of CO₂.",
      whyItMatters:
        "The Krebs cycle does not produce ATP directly, but it generates the electron carriers (NADH, FADH₂) that feed into the electron transport chain — where most ATP is made.",
    },
    {
      id: "jny-etc",
      title: "Electron transport chain",
      location: "Inner Mitochondrial Membrane",
      scale: "organelle",
      icon: "⚡",
      explanation:
        "NADH and FADH₂ donate electrons to protein complexes embedded in the inner mitochondrial membrane. Electrons pass down an energy gradient, pumping protons across the membrane and creating an electrochemical gradient.",
      whyItMatters:
        "The proton gradient drives ATP synthase — the molecular turbine that produces ATP. The electron transport chain is responsible for approximately 32 of the ~34 ATP molecules generated per glucose.",
      diseaseRelevance:
        "Mitochondrial ETC dysfunction is associated with a spectrum of mitochondrial diseases characterised by reduced energy production in high-demand tissues such as muscle and brain.",
    },
    {
      id: "jny-atp",
      title: "ATP synthesis",
      location: "ATP Synthase (F₀F₁)",
      scale: "molecular-process",
      icon: "💰",
      explanation:
        "Protons flow back through ATP synthase down their concentration gradient, driving conformational changes in the enzyme that catalyse the phosphorylation of ADP to ATP. One glucose yields approximately 30–32 ATP molecules via the full aerobic pathway.",
      whyItMatters:
        "ATP is the universal energy currency of the cell. It powers muscle contraction, ion pumping, biosynthesis, and signalling. Every step of this journey — from meal to mitochondria — serves to produce and supply ATP.",
      diseaseRelevance:
        "Reduced ATP production capacity is associated with fatigue in mitochondrial disorders and contributes to cellular dysfunction in ischaemia.",
    },
  ],
};
