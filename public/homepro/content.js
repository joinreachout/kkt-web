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
      { value: 'Retail, fuel retail', note: 'the industries we work in most' },
      { value: 'Engineers and data scientists', note: 'the same team designs it and builds it' },
      { value: 'USD 350,000',      note: 'added in the first month by a single reactivation campaign, at a retail group with about 1 million active customers',
        caveat: 'Measured against the baseline before the campaign. There was no control group; for HomePro we would use one.' },
    ],
  },

  /* 2 — CLIENT-SPECIFIC. Qualifications and assumptions from public sources,
   *     then the bridge into the proposal. Rewrite `items` per company. */
  assume: {
    eyebrow: 'From public information only',
    headline: 'What we assume about HomePro.',
    sub: 'Correct us where we are wrong.',
    items: [
      'Data and AI are already on the agenda.',
      'The foundation is in place: platforms, reporting, a data team, vendors, or all of them.',
      'Some solutions are already running.',
      'Customers are central to the business — HomeCard, the app, LINE, the stores.',
    ],
    bridge: 'In our experience, companies collect more customer data than they use. That is where we would look first.',
  },

  /* 3 — mostly reusable; the wording of a step may need a light pass to match
   *     what the company already runs. */
  propose: {
    eyebrow: 'Where we would start',
    headline: 'What we propose.',
    steps: [
      { n: '1', title: 'Analytics and segmentation',
        how: 'RFM, value and behaviour, ML segmentation',
        outcome: 'Promotions go to the segments that respond, and the result is measured.' },
      { n: '2', title: 'Personalisation',
        how: 'Propensity models, RecSys',
        outcome: 'The next offer chosen for the individual customer.' },
      { n: '3', title: 'Customer intelligence',
        how: 'Shared definitions, features, scores, eligibility rules',
        outcome: 'Commercial, marketing and data teams use the same view of the customer.' },
      { n: '4', title: 'Agents',
        how: 'Routine analysis, campaign preparation, checks',
        outcome: 'Routine work runs without a person.' },
    ],
    footnote: 'You may already run parts of this. Tell us which parts, and we start from there.',
  },

  /* 4 — reusable as-is. */
  role: {
    eyebrow: 'Our role',
    headline: 'You have a team. There are vendors. What is left for us?',
    items: [
      { title: 'One view across all the initiatives',
        body: 'Each internal owner has one part of the work, and a vendor delivers one defined scope. We put all the parts in a single order of priority, across commercial, marketing, IT and the vendors.' },
      { title: 'From the business question to the model, and back to the result',
        body: 'We start from the P&L question, build what answers it, and come back with the measured result, including a control group.' },
      { title: 'Faster delivery, without new hires',
        body: 'Strong internal teams are busy with day-to-day work. We add capacity for the length of the project, then hand the work over to your team.' },
    ],
    footnote: 'Where your own team or a local vendor is stronger, the work should stay with them.',
  },

  /* 5 — reusable as-is. No duration and no price on screen. */
  next: {
    eyebrow: 'Next step',
    headline: 'A detailed review of where you are today.',
    items: [
      'What customer data exists, and what is connected',
      'What segmentation and activation already run',
      'How results are measured today',
      'Which gap is worth the most, and where to start',
    ],
    ask: 'Where are you today, and which of these do you already run?',
    beyondLabel: 'Beyond customers, we also do',
    beyond: ['AI in operations', 'Invoicing', 'Text-to-SQL', 'Anti-fraud', 'Logistics optimisation'],
  },
};
