# MVP Validation Plan

**BioPath Network — Glucose-6-Phosphate Hub**

This document defines how the MVP will be evaluated before the scope expands
beyond the glucose-6-phosphate hub. No second pathway hub should be added until
the expansion gate in §6 is satisfied and findings are documented.

---

## 1. Objective

Determine whether students can understand the glucose-6-phosphate metabolic
network as presented — without prior instruction, without a guide, and using only
the interactive graph and node detail panels.

The evaluation is not a usability study of the interface. It is a comprehension
check: does the current content model communicate biochemical relationships
clearly enough for the target audience to reason about them independently?

---

## 2. Success Criteria

All four criteria must be met for the MVP to be considered validated.

**2.1 Hub comprehension**
The participant can articulate, in their own words, why glucose-6-phosphate is
described as a metabolic hub — specifically that it sits at the junction of at
least two distinct pathways (glycolysis, glycogenesis, pentose phosphate pathway).

**2.2 Pathway identification**
Without prompting, the participant can name at least three pathways connected to
glucose-6-phosphate by exploring the graph.

**2.3 Disease chain comprehension**
The participant can explain the relationship between G6PD enzyme activity, NADPH
production, glutathione regeneration, oxidative stress, and haemolytic anaemia
risk — in a sequence that reflects the graph's causal and associative edges.
The explanation does not need to be word-perfect; it must demonstrate that the
chain of relationships was understood, not merely memorised from labels.

**2.4 Causation vs. association distinction**
When asked about a disease-linked edge (e.g. oxidative stress → haemolytic
anaemia risk, labelled "can precipitate"), the participant can explain that this
represents an association or conditional risk, not a certainty — and can point to
the language used in the graph or panel as evidence for that interpretation.

---

## 3. Test Participants

Participants should be drawn from populations with relevant prior knowledge but
no prior exposure to BioPath Network.

| Group | Rationale |
|---|---|
| Pharmacy students (year 2+) | Relevant pharmacology and biochemistry background; encounter G6PD deficiency in clinical pharmacy context |
| Medical students (pre-clinical) | Biochemistry grounding; will encounter these pathways in pathophysiology |
| Biochemistry students (year 2+) | Deepest metabolic knowledge; useful for validating scientific accuracy of explanations |

**Minimum sample:** Five participants total before the expansion gate (§6) is
considered. Aim for at least one participant from each group if possible.

**Exclusion:** Participants who have previously seen BioPath Network or who
contributed to its content.

---

## 4. Suggested Tasks

Present these tasks in order. Do not explain the graph before the session begins.
Allow free exploration for two minutes before the first task.

**Task 1 — Trace a path**
*"Starting from the Glucose node, trace a path to NADPH. Describe each step as
you go."*

Evaluates: ability to navigate the graph, read edge labels, and follow a directed
pathway. Success if the participant reaches NADPH via glucose-6-phosphate and
identifies the pentose phosphate pathway step.

**Task 2 — Explain a disease relationship**
*"Using the graph, explain why G6PD deficiency is associated with increased
haemolysis risk."*

Evaluates: comprehension of the G6PD → NADPH → glutathione → oxidative stress →
haemolytic anaemia chain. Success if the participant traces at least three
intermediate steps without being directed to them.

**Task 3 — Hormonal regulation**
*"Where do insulin and glucagon act in this network? What does each do?"*

Evaluates: ability to locate hormone nodes, read their connected edges, and
distinguish their opposing roles. Success if the participant identifies that both
act on glucose availability and glycogen metabolism in opposite directions.

**Task 4 — Interpret a disease edge (open question)**
*"The graph shows a link between oxidative stress and haemolytic anaemia risk.
What does that relationship mean? Does it mean everyone with oxidative stress
develops haemolytic anaemia?"*

Evaluates: whether the cautious phrasing ("can precipitate") is understood as
conditional rather than deterministic. Success if the participant identifies
that the relationship is conditional and context-dependent.

---

## 5. Failure Criteria

The MVP fails validation if any of the following are observed in the majority
of sessions (three or more out of five participants).

**5.1 Pathway relationships not understood**
Participants cannot explain what connects two adjacent nodes even after reading
the node detail panel. This indicates the `explanation` and edge label content
is insufficient for independent comprehension.

**5.2 Disease links misread as treatment advice**
Any participant interprets a disease node or disease-linked edge as a
recommendation to act — for example, concluding that the graph advises avoiding
a specific drug, food, or behaviour. This is a clinical safety failure and
triggers immediate content revision regardless of other results.

**5.3 Graph not navigable**
Participants cannot locate a named node, cannot open the detail panel, or cannot
follow an edge to its target node. This indicates a UX failure requiring
interface changes before re-evaluation.

---

## 6. Expansion Gate

**No second pathway hub may be added to BioPath Network until all of the
following conditions are satisfied:**

- [ ] At least five test participants have completed the evaluation tasks in §4.
- [ ] Findings are documented in a written summary (can be brief; must record
  participant group, tasks attempted, and outcome against each success criterion
  in §2).
- [ ] All failure criteria in §5 have been resolved. If failure criterion 5.2
  (clinical safety misread) was triggered, a content revision and a re-test with
  at least two additional participants is required before the gate can be cleared.
- [ ] The documented findings are linked or attached to the PR that introduces the
  new hub.

Passing this gate does not guarantee scientific correctness of new content.
The scientific review checklist (`docs/scientific-review-checklist.md`) must
still be completed for every new node and edge regardless of validation status.
