# 🛠️ Bundle Builder – React Prototype

A multi-step bundle builder built with React based on the provided Figma design.
The app allows users to configure a security system and see a live-updating review panel.

The goal here wasn’t just to match the UI, but to structure the app in a way that feels scalable and easy to reason about.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mahmoud-elbassiony/bundle-builder
cd bundle-builder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## Features

- Multi-step accordion builder (4 steps)
- Variant-based product selection (per-variant quantity)
- Synced quantity between builder and review panel
- Live updating review panel
- Dynamic total & savings calculation
- Local persistence ("Save for later")
- Responsive layout (desktop + mobile)
- Data-driven UI (rendered from JSON)

---

## Architecture & Key Decisions

### State Management

I chose to use **React Context + useReducer** to manage the bundle state.
The state is intentionally kept minimal and only stores user selections, while everything else is derived.

This made the logic easier to reason about and avoided unnecessary duplication.

---

### Server Data vs UI State

The API response (`bundleData`) is treated as read-only domain data and injected into the provider.

I avoided mixing loading/error states with the main context to keep responsibilities clear and prevent inconsistent UI states.

---

### Derived State (Selectors)

All computed values (totals, review items, etc.) are handled via selectors/hooks instead of being stored in state.

This keeps:

- the state small
- the logic reusable
- components focused on rendering

---

### Required Products

Required items are not stored in state.
Instead, they are derived from the API data and merged into the review panel.

This separation made it easier to treat them as system-enforced items rather than user selections.

> Required does not necessarily mean free — pricing is handled independently.

---

### Variant Handling

Each variant has its own quantity, and the stepper always controls the currently selected variant.

Switching between variants does not reset previous selections, and the review panel reflects all selected variants independently.

This was one of the trickier parts to get right while keeping the UI in sync.

---

### Data Layer

Data is loaded through a simulated API (`getBundle`).

Loading and error states are handled at the page level, so the rest of the app can assume the data is ready.

---

### Separation of Concerns

| Layer      | Responsibility             |
| ---------- | -------------------------- |
| Context    | State management           |
| Hooks      | Business logic / selectors |
| Components | Rendering                  |

---

### Checkout Logic

The checkout button is always visible but only becomes actionable when the required selections are met.

Validation is currently basic (e.g. at least one camera must be selected), but the structure allows extending it with more complex business rules.

---

## Project Structure (Simplified)

The project follows a feature-based structure:

```
src/
├── assets/
├── features/
│   └── bundle-builder/
│       ├── api/
│       ├── components/
│       ├── data/
│       ├── hooks/
│       ├── state/
│       └── types/
└── shared/
    └── components/
```

---

## Tradeoffs & Assumptions

- Steps are static rather than generated dynamically from API data
- Plan selection is handled differently (no quantity)
- Required items are derived instead of stored in state
- A mock API is used instead of a real backend
- Validation is intentionally minimal to keep focus on the core flow

---

## What Could Be Improved

- Better validation across steps and on checkout (e.g. enforcing business rules like requiring at least one camera)
- Improved loading and error states (e.g. skeleton UI instead of basic loading)
- Animations for step transitions
- Improved accessibility (ARIA roles, keyboard support)
- Unit tests for reducer and selectors
- Replace mock API with a real backend

---

## Notes

- The desktop UI follows the Figma closely
- Mobile layout adapts to smaller screens while keeping usability intact

---

## Final Thoughts

The focus of this implementation was to build something close to production-level while keeping the code simple and maintainable.

If I had more time, I would invest more in validation, accessibility, and polishing the overall UX.
