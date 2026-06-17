import { Journey } from "@/types/journey";

export const oxygenJourney: Journey = {
  id: "oxygen-journey",
  title: "Journey of an Oxygen Molecule",
  molecule: "Oxygen",
  description:
    "Follow an oxygen molecule from the atmosphere to the inner mitochondrial membrane, where it enables aerobic ATP production. This journey connects directly to the Glucose Journey at the electron transport chain.",
  steps: [
    {
      id: "oxy-atmosphere",
      title: "Atmospheric oxygen",
      location: "Atmosphere",
      scale: "organism",
      icon: "🌬️",
      explanation:
        "Molecular oxygen (O₂) makes up approximately 21% of atmospheric air. At sea level, the partial pressure of oxygen in air is approximately 159 mmHg. When inhaled, this oxygen-rich air provides the continuous supply that drives diffusion into the bloodstream at the lung surface.",
      whyItMatters:
        "Cells cannot store oxygen — they require a continuous external supply. Every step of aerobic ATP production depends on the uninterrupted availability of oxygen from the surrounding environment.",
    },

    {
      id: "oxy-inhalation",
      title: "Inhalation",
      location: "Nose and Mouth",
      scale: "organ-system",
      icon: "💨",
      explanation:
        "Contraction of the diaphragm and intercostal muscles increases the volume of the thoracic cavity, reducing intrapulmonary pressure below atmospheric. Air flows down this pressure gradient through the nose and mouth into the respiratory tract. The upper airways warm, humidify, and filter the incoming air before it proceeds deeper into the lungs.",
      whyItMatters:
        "Ventilation delivers fresh oxygen to the gas-exchange surface and removes carbon dioxide. Without active breathing, oxygen in the alveoli would rapidly fall as cells consume it without replacement.",
    },

    {
      id: "oxy-airways",
      title: "Conducting airways",
      location: "Trachea and Bronchi",
      scale: "organ-system",
      explanation:
        "Inhaled air enters the trachea, which divides into the left and right main bronchi. These branch repeatedly through bronchi and bronchioles — approximately 23 generations of airway in total — progressively distributing air toward the alveoli. The conducting airways do not participate in gas exchange; their sole role is distribution.",
      whyItMatters:
        "The branching architecture ensures uniform delivery of oxygen across millions of gas-exchange surfaces. The progressive narrowing and branching is precisely designed to minimise resistance while maximising distribution.",
    },

    {
      id: "oxy-alveolus",
      title: "Alveolus",
      location: "Alveolus",
      scale: "organ",
      explanation:
        "The alveoli are thin-walled spherical air sacs at the terminal branches of the airways. Each lung contains approximately 300–500 million alveoli, creating a combined internal surface area of roughly 70 square metres. The alveolar walls consist of flattened type I pneumocytes and surfactant-secreting type II pneumocytes, and are surrounded by a dense pulmonary capillary network.",
      whyItMatters:
        "The alveolus is the gas-exchange unit. Its enormous surface area and extremely thin air-blood barrier (0.5–1 μm) ensure that oxygen diffuses rapidly and continuously into adjacent capillaries.",
    },

    {
      id: "oxy-diffusion",
      title: "Diffusion into blood",
      location: "Pulmonary Capillary",
      scale: "cell",
      explanation:
        "Oxygen diffuses across the alveolar-capillary membrane along its partial pressure gradient. Blood arriving at the pulmonary capillary has a PO₂ of approximately 40 mmHg (returning from tissues); it equilibrates to approximately 100 mmHg as oxygen diffuses in. This diffusion is entirely passive and depends on the PO₂ gradient, the available surface area, and the membrane thickness — all optimised in the healthy lung.",
      whyItMatters:
        "Diffusion is the mechanism by which oxygen leaves the air space and enters the body's transport system. Efficient diffusion requires the alveolar-capillary barrier to remain intact and thin.",
    },

    {
      id: "oxy-haemoglobin",
      title: "Binding to haemoglobin",
      location: "Red Blood Cell",
      scale: "molecular-process",
      icon: "🩸",
      explanation:
        "In red blood cells, oxygen binds reversibly to haemoglobin — the iron-containing protein that is the primary oxygen carrier in blood. Each haemoglobin molecule has four subunits, each capable of binding one oxygen molecule. Haemoglobin's affinity for oxygen is cooperative: binding the first O₂ increases affinity for subsequent ones, producing the characteristic S-shaped oxygen-dissociation curve.",
      whyItMatters:
        "Without haemoglobin, blood could dissolve only about 3 ml of O₂ per litre. Haemoglobin increases this to approximately 200 ml per litre — a more than 60-fold increase in carrying capacity that is essential for meeting the oxygen demands of active tissues.",
    },

    {
      id: "oxy-circulation",
      title: "Systemic circulation",
      location: "Bloodstream",
      scale: "organ-system",
      icon: "🫀",
      explanation:
        "Oxygenated blood leaves the pulmonary capillaries, drains into the pulmonary veins, and returns to the left heart. The left ventricle pumps it through the aorta and into the systemic arterial circulation, distributing oxygen to every organ and tissue in the body. Cardiac output and vascular tone determine how rapidly and where oxygen is delivered.",
      whyItMatters:
        "Oxygen is loaded in the lungs but consumed throughout the body. The cardiovascular system provides the bulk transport mechanism that bridges this anatomical distance, ensuring continuous delivery to all tissues regardless of their distance from the lungs.",
    },

    {
      id: "oxy-tissue-delivery",
      title: "Tissue delivery",
      location: "Tissue Capillary",
      scale: "organ",
      explanation:
        "In tissue capillaries, local metabolic conditions shift the oxygen-dissociation curve to favour oxygen release. Falling PO₂, rising PCO₂, increased temperature, and lower pH (the Bohr effect) all reduce haemoglobin's affinity for oxygen. Oxygen dissociates from haemoglobin and diffuses from the capillary into the interstitial fluid and then toward cells.",
      whyItMatters:
        "Oxygen cannot be used while bound to haemoglobin inside the bloodstream. Metabolically active cells naturally create the conditions that trigger release — the harder cells work, the more they create the very conditions that drive oxygen delivery to them.",
    },

    {
      id: "oxy-cell-entry",
      title: "Cellular entry",
      location: "Cell",
      scale: "cell",
      icon: "🧫",
      explanation:
        "Free oxygen molecules diffuse across the plasma membrane into the cell's cytoplasm. Unlike glucose, oxygen requires no transporter — it diffuses freely through lipid bilayers down its partial pressure gradient. Within the cell, oxygen continues diffusing toward the mitochondria, driven by ongoing consumption at the inner mitochondrial membrane.",
      whyItMatters:
        "Aerobic metabolism occurs inside cells — specifically inside mitochondria. Oxygen must enter the cell to support oxidative phosphorylation. The partial pressure gradient from capillary to cell interior is maintained by continuous consumption of oxygen at Complex IV.",
    },

    {
      id: "oxy-mito-entry",
      title: "Mitochondrial entry",
      location: "Mitochondrion",
      scale: "organelle",
      icon: "🔋",
      explanation:
        "Oxygen diffuses across the outer and inner mitochondrial membranes, reaching the mitochondrial matrix and the inner membrane surface. No transporter is required — oxygen's small, nonpolar structure allows it to cross biological membranes freely. The continuous consumption of oxygen by Complex IV (cytochrome c oxidase) maintains a steep partial pressure gradient that drives this final intracellular diffusion step.",
      whyItMatters:
        "The mitochondrion is the site of oxidative phosphorylation. Without oxygen reaching the inner mitochondrial membrane, the electron transport chain cannot operate and ATP production falls to the far smaller yield of anaerobic glycolysis alone.",
    },

    {
      id: "oxy-etc",
      title: "Electron transport chain",
      location: "Inner Mitochondrial Membrane",
      scale: "molecular-process",
      icon: "⚡",
      explanation:
        "At Complex IV (cytochrome c oxidase), oxygen acts as the terminal electron acceptor. Four electrons and four protons are transferred to one O₂ molecule, reducing it to two molecules of water. This reaction is essential: it allows electrons to continue flowing through Complexes I, III, and IV, sustaining the proton pumping that builds the electrochemical gradient across the inner mitochondrial membrane.",
      whyItMatters:
        "Without a terminal electron acceptor, electron flow through the ETC stops entirely. NADH and FADH₂ cannot be re-oxidised, the proton gradient collapses, ATP synthase stalls, and all aerobic ATP production ceases. The entire oxygen journey — from atmosphere to inner membrane — converges on this single reaction.",
      crossJourneyLink: {
        journeyId: "carbohydrate-journey",
        stepId: "jny-etc",
        label: "Glucose Journey: Electron Transport Chain",
        educationalMessage: "Glucose provides the electrons. Oxygen receives them.",
      },
    },

    {
      id: "oxy-atp",
      title: "ATP production",
      location: "ATP Synthase",
      scale: "molecular-process",
      icon: "💰",
      explanation:
        "The electrochemical proton gradient established by the electron transport chain drives protons back through ATP synthase, which couples proton flow to the phosphorylation of ADP to ATP. One glucose molecule yields approximately 30–32 ATP under fully aerobic conditions — compared to just 2 ATP from anaerobic glycolysis alone. Oxygen's participation is the reason for this approximately 15-fold difference in ATP yield.",
      whyItMatters:
        "Every step of the oxygen journey — from the first breath to the final electron transfer — exists to make this step possible. Efficient ATP production through oxidative phosphorylation is the reason all aerobic organisms require a continuous oxygen supply.",
      crossJourneyLink: {
        journeyId: "carbohydrate-journey",
        stepId: "jny-atp",
        label: "Glucose Journey: ATP Synthesis",
        educationalMessage:
          "Glucose metabolism and oxygen delivery converge here — both pathways are required to produce ATP at full efficiency.",
      },
    },
  ],
};
