/* The conversation map — a canvas that accompanies a first call.
 *
 * ⭐ REUSABLE. To run this with another company, copy the folder, drop in
 *    their logo, and edit two things:
 *      1. `client` — name, logo file, meeting line;
 *      2. `assume.items` — what we assume about them, from public sources.
 *    `propose` usually needs a light pass; `kkt`, `role` and `next` carry over
 *    unchanged, because that part of the story is ours and does not move.
 *
 *
 * Rebuilt from scratch 24.08.2026 to George's structure from the call. The
 * canvas accompanies what George says out loud: minimal words on screen, a
 * plain business register, nothing a reader has to parse while listening.
 *
 * ⛔ No marketing phrasing, no sales headlines. The person on the other side
 *    runs Data & AI at a USD 2bn retailer; he wants specifics.
 * ⛔ No "A, not B" constructions.
 * ⛔ ×22 / ×18 stay out until the denominator is defined.
 * ⛔ Never name the network Optimus runs in.
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

  /* The five stops. `label` is what the rail shows. */
  stops: [
    { id: 'kkt',        label: 'Who we are' },
    { id: 'assume',     label: 'What we assume' },
    { id: 'propose',    label: 'What we propose' },
    { id: 'role',       label: 'Where we fit' },
    { id: 'next',       label: 'Next step' },
  ],

  /* 1 — 20 seconds. Facts with numbers in them, nothing else. */
  kkt: {
    eyebrow: 'Kitty Kat Technologies',
    headline: 'We implement data and AI to solve business problems.',
    sub: 'A small team. We start from the problem: revenue, cost, or operational efficiency.',
    facts: [
      { value: '15+ years',        note: 'average, in enterprise operations and customer management' },
      { value: 'Retail, fuel retail', note: 'the industries most of our work sits in' },
      { value: 'Engineers and data scientists', note: 'the same team designs it and builds it' },
      { value: 'USD 350,000',      note: 'added in month one by one reactivation campaign, at a retail group with ~1M active customers',
        caveat: 'Measured against the pre-campaign baseline. No control group — for HomePro we would run one.' },
    ],
  },

  /* 2 — CLIENT-SPECIFIC. Qualifications and assumptions from public sources,
   *     then the bridge into the proposal. Rewrite `items` per company. */
  assume: {
    eyebrow: 'From public information only',
    headline: 'What we assume about HomePro.',
    sub: 'Correct us where we are wrong.',
    items: [
      'Data and AI are already on the agenda — the VP role exists.',
      'The foundation is in place: platforms, reporting, a team, vendors, or all of it.',
      'Some solutions are already running.',
      'Customers are central to the business — HomeCard, the app, LINE, the stores.',
    ],
    bridge: 'In our experience customer data accumulates faster than it gets used. That is where we would look first.',
  },

  /* 3 — mostly reusable; the wording of a step may need a light pass to match
   *     what the company already runs. */
  propose: {
    eyebrow: 'Where we would start',
    headline: 'What we propose.',
    steps: [
      { n: '1', title: 'Analytics and segmentation',
        how: 'RFM, value and behaviour, ML segmentation',
        outcome: 'Promotions aimed at the segment that responds, and measured.' },
      { n: '2', title: 'Personalisation',
        how: 'Propensity models, RecSys',
        outcome: 'The next offer chosen for the individual customer.' },
      { n: '3', title: 'Customer intelligence',
        how: 'Shared definitions, features, scores, eligibility rules',
        outcome: 'Commercial, marketing and data work from one customer picture.' },
      { n: '4', title: 'Agents',
        how: 'Routine analysis, campaign preparation, checks',
        outcome: 'The routine runs without a person in the loop.' },
    ],
    footnote: 'You may already run parts of this. Tell us which, and we start from there.',
  },

  /* 4 — reusable as-is. */
  role: {
    eyebrow: 'Our role',
    headline: 'You have a team. There are vendors. What is left for us?',
    items: [
      { title: 'One picture across the initiatives',
        body: 'Internal owners each hold a piece; a vendor delivers a scope. We put the pieces into one order of priority — across commercial, marketing, IT and the vendors.' },
      { title: 'From the commercial question down to the model, and back',
        body: 'We start at the P&L question, build what answers it, and return with the measured effect — control group included.' },
      { title: 'Pace, without adding headcount',
        body: 'Capable teams are held by day-to-day load. We add capacity for the period, then hand the capability over.' },
    ],
    footnote: 'Where your own team or a local vendor is stronger, that is where the work should sit.',
  },

  /* 5 — reusable as-is. No duration and no price on screen. */
  next: {
    eyebrow: 'Next step',
    headline: 'A deep dive into where you are today.',
    items: [
      'What customer data exists, and what is connected',
      'What segmentation and activation already run',
      'How results are measured today',
      'Which gap is worth the most, and where to start',
    ],
    ask: 'Where are you today, and which of this is already running?',
    beyondLabel: 'Beyond customers, we also do',
    beyond: ['AI in operations', 'Invoicing', 'Text-to-SQL', 'Anti-fraud', 'Logistics optimisation'],
  },
};
