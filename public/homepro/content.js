/* The conversation map — a canvas that accompanies a first call.
 *
 * ⭐ REUSABLE. To run this with another company, copy the folder, drop in
 *    their logo, and edit two things:
 *      1. `client` — name, logo file, meeting line;
 *      2. `understand.items` — what we understand about them, from public
 *         sources, plus the `open` line naming what we still do not know.
 *    `growth` needs a light pass; `kkt`, `fit` and the proof block carry over
 *    unchanged, because that part of the story is ours and does not move.
 *
 *
 * Texts replaced 25.08.2026 with George's final wording
 * (`HomePro_Meeting_Canvas_Final.md`). Four screens now, not five: the next
 * step folded into the closing screen, and the proposal became one loop
 * instead of a list of workstreams.
 *
 * ⛔ No marketing phrasing, no sales headlines. The person on the other side
 *    runs Data & AI at a USD 2bn retailer; he wants specifics.
 * ⛔ No "A, not B" constructions.
 * ⛔ ×22 / ×18 stay out until the denominator is defined.
 * ⛔ Never name the network Optimus runs in.
 *
 * ⚠️ The proof block carries 47% and ~7,000, which §6.2 of George's own spec
 *    had held back pending approval. Dennis released both on 25.08 on the
 *    grounds that George wrote this text himself. The control-group line
 *    stays regardless — a VP of Data & AI will ask how it was measured.
 *
 * Text lives here; layout and behaviour live in index.html.
 */
window.CANVAS = {

  /* ── the only block that is truly per-client ───────────────────────── */
  client: {
    name: 'HomePro',
    logo: 'homepro-logo.svg',            // sits next to index.html
    kicker: 'HomePro × Kitty Kat Technologies · 26 August 2026',
  },

  /* The four stops. `label` is what the rail shows. */
  stops: [
    { id: 'kkt',        label: 'Who we are' },
    { id: 'understand', label: 'What we understand' },
    { id: 'growth',     label: 'Customer growth' },
    { id: 'fit',        label: 'Where we fit' },
  ],

  /* 1 — 20 seconds. Who is speaking, and how the work is done. */
  kkt: {
    eyebrow: 'Kitty Kat Technologies',
    headline: 'We use data and AI to improve business results.',
    sub: 'A small senior team with business and technical experience. 15+ years on average, with experience from PepsiCo, Philip Morris, EY, DNV and TÜV Rheinland.',
    method: [
      { title: 'Find the value',
        body: 'Find where data and AI can improve revenue, cost or operations.' },
      { title: 'Choose the approach',
        body: 'Decide what should change and what should be built, bought or adapted.' },
      { title: 'Put it into use',
        body: 'Work with business teams, internal technology teams and partners during implementation.' },
      { title: 'Leave it working',
        body: 'Make it part of daily work and leave the client able to run and improve it.' },
    ],
  },

  /* 2 — CLIENT-SPECIFIC. Read from public sources, then the honest gap.
   *     Rewrite `items` and `open` per company. */
  understand: {
    eyebrow: 'From public information',
    headline: 'What we understand about HomePro.',
    items: [
      'The customer is at the centre of the strategy — across products, delivery, installation, services and after-sales.',
      'Data and AI already support customer and operational decisions.',
      'The data foundations, internal skills and experienced leadership are in place.',
      'Several customer and operational initiatives are already under way.',
    ],
    open: 'We do not yet know which solutions are used every day, where customer insight still stops before action, and how business impact is measured.',
  },

  /* 3 — the proposal as one loop. Light pass per company. */
  growth: {
    eyebrow: 'Customer growth',
    headline: 'From customer insight to better actions.',
    steps: [
      { title: 'Understand',
        body: 'Use analytics and segmentation to understand customer value, behaviour and needs.' },
      { title: 'Decide',
        body: 'Choose the best offer, service or action based on customer needs, business value and clear rules.' },
      { title: 'Act',
        body: 'Put the decision into campaigns, online channels, stores, services and daily operations.' },
      { title: 'Learn',
        body: 'Measure the impact, improve the decision and automate parts of the process.' },
    ],
    /* ⛔ "not from one model" was an "A, not B" construction — split in two. */
    note: 'The value comes from the full loop. One model on its own does not deliver it. AI agents can help run parts of it; business owners stay in control.',
  },

  /* 4 — reusable as-is. Role, then the example, then the next step. */
  fit: {
    eyebrow: 'Where KKT fits',
    headline: "Alongside HomePro's business and technology teams.",
    items: [
      { title: 'Challenge the opportunity',
        body: 'Give an independent view on the value, the priority and what needs to be done.' },
      { title: 'Join the implementation',
        body: 'Help business, Data, IT and technology partners work from one clear plan.' },
      { title: 'Stay until it works',
        body: 'Stay involved until the new process is part of daily work and the result is visible.' },
    ],
    proof: {
      label: 'Relevant example',
      headline: 'One customer segment. One campaign. One repeatable process.',
      context: 'Retail group with close to 1 million active customers',
      facts: [
        { value: '~7,000',       note: 'selected inactive customers' },
        { value: '47%',          note: 'returned in the first month' },
        { value: '~USD 350,000', note: 'revenue above the previous baseline' },
        { value: 'Now monthly',  note: 'with campaigns expanding to other customer segments' },
      ],
      /* Kept even though the source text dropped it — §6.2 of George's spec
         requires it, and the question comes up unprompted with this audience. */
      caveat: 'Measured against the baseline before the campaign. There was no control group; for HomePro we would use one.',
    },
    next: 'Next step: one working session around a current HomePro priority, with the relevant business and Data/AI owners.',
    close: 'HomePro or a Thai technology partner can build the technology. KKT helps shape the business solution and supports implementation and daily use.',
    beyondLabel: 'Beyond customers, we also do',
    beyond: ['AI in operations', 'Invoicing', 'Text-to-SQL', 'Anti-fraud', 'Logistics optimisation'],
  },
};
