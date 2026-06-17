# BioPath Network — Roadmap

## Current state

BioPath is a local-state-only educational tool. No accounts, no database, no persistence.

Three core experiences are in active development:

| Feature | Status |
|---|---|
| Learning View | Shipped |
| Journey View | Shipped (v3 continuous map) |
| Practice Questions | Phase 1 shipped (data layer); Phase 2 (UI) in progress |

---

## Constraints in effect

- **No accounts until core experience is validated.** Authentication and profiles will not be added until at least the learning, journey, and practice flows have been evaluated by test users and findings are documented.
- **No database until accounts are justified.** All state remains in React local state.
- **No second pathway until five test users complete evaluation.** The carbohydrate journey is the only pathway in scope until that threshold is met.
- **No AI-generated live questions.** Practice questions are static and human-authored from structured content.
- **No clinical recommendations.** BioPath is an educational tool only.

---

## Phase roadmap

### Phase 1 — Core learning (done)
- Learning View with pathway network, modules, step detail
- Journey View with continuous biological route map
- Practice Questions data layer (static, 10 questions)

### Phase 2 — Practice UI (in progress)
- PracticeView, QuestionCard, FeedbackPanel
- MCQ, True/False, Ordering, Short Answer, Mechanism question types
- Session summary (questions completed, attempts made)
- Local state only, no persistence

### Phase 3 — Validation (pending)
- Five test users complete all three experiences
- Findings documented
- Decision point: proceed to accounts, expand pathways, or iterate on core UX

### Phase 4 — Accounts and profiles (conditional on Phase 3)
User accounts may be introduced after Phase 3 validation. Planned scope:

- **Saved progress** — resume journeys and practice sessions
- **Completed journeys** — record which pathways a user has walked through
- **Practice history** — which questions attempted and when
- **Weak-topic tracking** — surface topics where a user answers incorrectly most often
- **Bookmarks** — save specific learning steps or journey nodes for review
- **Learning goals** — user-set targets (e.g. complete a module by a date)
- **Personalised revision suggestions** — surface questions linked to weak topics

Implementation approach for Phase 4 will be decided after Phase 3. Options include Supabase (already available in the project environment), a lightweight JWT auth layer, or a third-party identity provider.

---

## What will not be added (at any phase)

- Exam question banks sourced from external archives
- Clinical decision support or diagnostic guidance
- Scoring leaderboards or competitive features
- AI-generated live question content
- Disease-specific named content that has not passed scientific review
