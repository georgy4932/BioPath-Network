# Scientific Review Checklist

**BioPath Network — Content Governance**

This checklist must be completed before adding any new pathway hub, disease node,
mechanistic node, or biochemical edge to the data model. No new content may be
merged unless every applicable item is confirmed.

---

## How to use this checklist

Copy the relevant sections into your pull request description and mark each item
`[x]`. A reviewer must independently verify each item before approving the PR.
Items marked N/A must include a brief reason.

---

## 1. Scope Justification

The visualisation is deliberately bounded to the **glucose-6-phosphate metabolic
hub**. Any expansion must be justified against that scope before other checks run.

- [ ] The proposed content is directly connected to glucose-6-phosphate metabolism,
  the pentose phosphate pathway, or a disease/mechanism already present in the hub.
- [ ] The addition does not silently shift the visualisation's focus to a different
  metabolic centre (e.g. TCA cycle, fatty acid synthesis) without an explicit
  decision to expand scope.
- [ ] If this addition introduces a new hub or sub-network, a separate scope decision
  has been made and documented (see §8).
- [ ] The addition does not duplicate a node or edge already present in
  `data/glucose6phosphate-network.ts`.

---

## 2. Node Validation

Applies to every new entry in the `nodes` array.

### Type assignment
- [ ] The `type` field is set to one of the values defined in `NodeType`
  (`"metabolite"`, `"enzyme"`, `"pathway"`, `"disease"`, `"hormone"`,
  `"mechanism"`).
- [ ] The chosen type accurately reflects the biological category of the entity.
  Verify: a metabolite is a small molecule; an enzyme is a protein catalyst; a
  disease is a clinical diagnosis or recognised condition; a mechanism is a
  process or pathway concept; a hormone is a signalling molecule.
- [ ] If none of the existing types fits, a proposal to extend `NodeType` has been
  made as a separate task — the type union is not extended silently.

### Required fields
- [ ] `id` is unique across all existing nodes and follows the kebab-case convention
  (e.g. `"glucose-6-phosphate"`).
- [ ] `label` is the standard biochemistry name as it would appear in a textbook.
- [ ] `explanation` is 2–4 sentences. It describes what the entity is, not just what
  it does in the context of this disease.
- [ ] `connectedPathways` lists at least one pathway by its full, standard name.
- [ ] `diseaseRelevance` is present even if the node has no direct disease link
  (use `"No direct disease association identified for this entity."` rather than
  leaving it empty).
- [ ] `evidenceLevel` is set (see §5).
- [ ] `sourceNote` is set (see §5).

### Positions
- [ ] The `position` has been set so the new node does not overlap existing nodes
  when the graph is rendered at default zoom.

---

## 3. Edge Validation

Applies to every new entry in the `edges` array.

### Direction
- [ ] The arrow direction (`source` → `target`) matches the biological direction of
  the relationship. For enzymatic reactions, the substrate is the source and the
  product is the target. For regulatory relationships, the regulator is the source
  and the regulated entity is the target.
- [ ] The direction has been verified against at least one reference source, not
  inferred from memory alone.

### Label
- [ ] The edge `label` describes the relationship in plain language a student can
  understand without prior knowledge of graph conventions.
- [ ] No abbreviation appears in the label unless it is immediately followed by the
  expanded form in parentheses, e.g. `"via pentose phosphate pathway (PPP)"`.
- [ ] The label does not assert stronger causation than the evidence supports
  (see §4 and §7). Prefer `"associated with"`, `"may contribute to"`, or
  `"can precipitate"` over `"causes"` or `"triggers"` for disease associations.

### Redundancy
- [ ] The new edge does not duplicate an existing edge with the same source, target,
  and biological meaning.
- [ ] If the relationship is already implied by a node's `explanation` text, confirm
  that an explicit edge is still necessary for graph clarity.

### Required fields
- [ ] `evidenceLevel` is set (see §5).
- [ ] `sourceNote` is set (see §5).

---

## 4. Disease Association Caution

Applies to any node of `type: "disease"` and any edge connecting a disease node,
mechanism node, or clinical outcome to the rest of the graph.

- [ ] The disease is a recognised clinical entity (ICD code or equivalent) or a
  well-described risk state, not a speculative or lay diagnosis.
- [ ] Causal language is avoided unless the relationship is unambiguous textbook
  biochemistry. Use hedged phrasing:
  - Preferred: `"associated with"`, `"linked to"`, `"involved in"`,
    `"may contribute to"`, `"can precipitate"`, `"observed in"`
  - Avoid: `"causes"`, `"triggers"`, `"leads to"`, `"results in"` — unless the
    causal chain is direct, well-established, and phrased with appropriate scope
    (e.g. `"results in"` is acceptable for G6PD deficiency → reduced G6PD
    activity because it is definitional, not inferred).
- [ ] `diseaseRelevance` for a disease node does not make treatment or management
  recommendations. It describes the biological relationship only.
- [ ] If a disease node is added that affects clinical decision-making in practice
  (e.g. drug contraindications, screening recommendations), the text explicitly
  states it is for educational context only and does not substitute clinical
  guidance.

---

## 5. Evidence / Provenance Requirement

Applies to every new node and edge.

### Evidence level
- [ ] `evidenceLevel` is assigned from `EvidenceLevel` (`"textbook"`, `"review"`,
  `"primary"`, `"hypothesis"`).
- [ ] The assigned level is the most conservative that accurately describes the
  current state of evidence — when in doubt, downgrade, not upgrade.
- [ ] **`"primary"` must not be assigned unless `sourceNote` contains a concrete
  citation**: author(s), year, journal or DOI, or a named study. A placeholder
  string is not sufficient for `"primary"`. Assign `"review"` until a real
  citation is available.
- [ ] **`"hypothesis"` must include a note in `sourceNote` describing the basis of
  the hypothesis** and acknowledging that it is not yet broadly supported.
- [ ] `"textbook"` is reserved for relationships that appear in standard
  biochemistry or molecular biology textbooks (e.g. Stryer, Lehninger, Berg).
  Relationships that appear only in specialist or research literature should be
  `"review"` or `"primary"`.

### Source note
- [ ] `sourceNote` is not left as an empty string.
- [ ] If no citation is available yet, the note reads:
  `"[Description of basis] — source to be added."` (matching the existing
  placeholder convention in the data file).
- [ ] If a real citation is available, it is formatted as:
  `"Author(s) (Year). Title. Journal. DOI or URL."` — even if only partial
  information is known, include what is available.

---

## 6. Student Readability

The primary audience is a student encountering these concepts for the first time.

- [ ] Every abbreviation used in node labels, edge labels, `explanation`, or
  `diseaseRelevance` text is expanded on first use within that field.
  Do not assume the reader knows: PPP, G6PD, GSH, GSSG, NADPH, NADP⁺, ROS,
  PGI, GLUT, ATP, ADP, or any gene symbol.
- [ ] `explanation` avoids jargon that is not explained within the same sentence or
  the preceding sentence.
- [ ] Edge labels are short enough to be legible on the graph at normal zoom
  (aim for ≤ 6 words including expanded abbreviations).
- [ ] `connectedPathways` uses the full, capitalised pathway name as it would appear
  in a textbook index (e.g. `"Pentose Phosphate Pathway"`, not `"PPP"`).
- [ ] After drafting, read the `explanation` aloud. If a sentence requires prior
  specialist knowledge to parse, revise it.

---

## 7. Clinical Safety Wording

BioPath Network is an educational tool. It must not function as a clinical
decision-support tool.

- [ ] No field on any node or edge contains a diagnosis recommendation, treatment
  recommendation, drug recommendation, screening recommendation, or dietary
  recommendation.
- [ ] No field uses language that implies the visualisation can be used for patient
  care (e.g. "patients should", "clinicians should", "this indicates treatment
  with", "contraindicated in").
- [ ] If a node describes a clinically significant risk (e.g. haemolytic anaemia
  risk), the `diseaseRelevance` text frames this as educational context, not
  actionable clinical guidance.
- [ ] The word "risk" in a node label (e.g. "Hemolytic Anemia Risk") is intentional
  and accurate — it indicates a predisposition or elevated probability, not a
  certainty. Confirm this framing is preserved in the `explanation` text.
- [ ] If any new content could plausibly be misread as clinical advice by a
  non-specialist, revise the wording before merging.

---

## 8. Expansion Approval Rule

**No new biochemical pathway hub, disease node, or mechanistic relationship may
be merged without passing this full checklist.**

Additional governance rules:

- **Scope changes** (adding a second metabolic hub, adding a new disease cluster,
  or substantially reframing the educational focus) require an explicit decision
  recorded in the PR description — not just checklist completion.
- **Batch additions** (more than 3 nodes or 5 edges in a single PR) require a
  separate scientific review comment in the PR summarising the biological basis
  for the batch, in addition to completing this checklist.
- **Removal of existing nodes or edges** also requires checklist completion for
  the affected items, with justification explaining why the content is incorrect,
  out of scope, or superseded.
- **Evidence level upgrades** (e.g. from `"review"` to `"primary"`) require the
  concrete citation to be present in `sourceNote` at the time of the upgrade.
  Upgrading on the basis of a planned-but-not-yet-added citation is not permitted.
- This checklist is a living document. If a check proves ambiguous or inapplicable
  in practice, open a PR to revise the checklist itself before bypassing the item.
