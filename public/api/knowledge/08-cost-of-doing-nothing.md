# Cost of Doing Nothing — methodology and calculator

KKT's quantitative hook for fuel networks. A single-page interactive
tool that takes 6–8 inputs from a fuel-retail operator and returns a
sourced, range-based estimate of the annual P&L gap between their
current operations and top-quartile peers. Designed to produce a number
a CFO could defend on a board slide.

Two surfaces on the site:

- **`/methods/cost-of-doing-nothing`** — the methodology page. Public,
  dated, versioned. This is the trust mechanism: principles, sources,
  risk mitigations, changelog. Live now (v0.1 draft, published
  2026-05-07).
- **`/tools/cost-of-doing-nothing`** — a v0 preview of the calculator
  UI. Real client-side computation, but the benchmark values are
  PLACEHOLDERS for shape-checking the interface. Not for board use.

## Status — be honest about this

The full calculator is NOT live yet. It is in benchmark calibration and
launches in Phase 1.5 (targeted Q3 2026). The methodology page shipped
first on purpose — without published methodology, the calculator would
be a gimmick.

**If a user asks "what number would I get?" or "how much am I losing?"
— do not invent one.** The preview tool runs on placeholder benchmarks,
so any figure it shows is illustrative, not real. The honest answer:
the calibrated calculator launches Phase 1.5; for a real number against
real data, the two-week diagnostic is the path. Point to /contact.

## The seven non-negotiable principles (why it is trustworthy)

These are the contract. If one is missing, it stops being a CFO tool.

1. Outputs are ranges, not points. Never "€2,847,392" — always a range
   like "€1.8M–€3.1M annually," with what would have to close to get
   there.
2. Methodology is visible on every output number — an expandable "how
   we calculated this" with source, benchmark, input, gap, and date.
3. It must sometimes return "no significant gap." A top-quartile
   operator who still sees "you're losing €X" means the tool is broken.
4. Sensitivity is shown — the top three inputs that drove the result
   and roughly how much each contributed.
5. Methodology is public and dated, versioned in lockstep with the
   calculator. This is what makes it Gartner-grade, not vendor-grade.
6. Conservative by default. Given a choice, we underestimate. "We
   probably underestimate" reads serious; the opposite reads as sales.
7. Inputs stay in the user's browser. Nothing is sent to KKT unless the
   user chooses to attach results to a diagnostic booking.

## Where the numbers come from (five weighted source tiers)

1. Public annual reports of listed fuel retailers (MOL, OMV,
   Couche-Tard, EG Group, Shell, BP, ENI) — primary filings, not
   aggregators.
2. Industry association publications (UPEI, national fuel-retail bodies).
3. Trade press surveys (Fuels Market News, Petrol Plaza, NACS report).
4. Major consultancy whitepapers (Kearney, BCG, McKinsey) — cited,
   never repackaged as ours.
5. KKT internal aggregated benchmarks from 2022–2026 engagements,
   anonymized, minimum n=5 per category. The moat layer — always
   disclosed as such.

Every benchmark in the calculator traces to a numbered source in the
methodology document.

## Inputs and outputs

Inputs (6–8): number of stations, region, revenue band, non-fuel
revenue share, analytical maturity, and optionally shrinkage rate,
stockout frequency, working-capital days. "I don't know" is a valid
answer for the optional fields.

Output arrives in three blocks: (1) where you sit on the staged
maturity model, (2) three quantified gap scenarios — conservative /
median / aggressive, each a range with a 12 / 18 / 24–36 month
timeline, (3) which Playbook services would actually unlock the gaps,
ending in a diagnostic CTA.

## How we keep it honest

An external fuel-retail CFO (not a KKT consultant) stress-tests the
model to find errors before launch. A visible "spotted an error?"
channel ships from day one. Calculator and methodology share a version
number. Sourcing the benchmarks — not the engineering — is the long
pole; the whole effort runs about ten weeks.

## Routing

For the philosophy and sources, point to /methods/cost-of-doing-nothing.
To see the interface shape, /tools/cost-of-doing-nothing (with the
placeholder caveat). For a real number on real data, a diagnostic —
/contact.
