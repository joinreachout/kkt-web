/* HomePro × KKT — customer-growth interactive canvas.
 * ALL client-facing copy lives here. Edit this file to change wording,
 * sources, metrics or meeting details — never the component code.
 * Copy is taken verbatim from the specification of 21 August 2026.
 */
window.HOMEPRO_CANVAS = {

  /* ------------------------------------------------------------------
   * PERMISSION SWITCHES — flip to true only once permission is confirmed.
   * Spec §13.1 keeps every one of these closed until then.
   * ---------------------------------------------------------------- */
  permissions: {
    nameClients: true,       // Dennis 21.08: naming approved
    showHomeProLogo: true,   // Dennis 21.08: approved. Asset taken from HomePro's own public site (staticg.homepro.co.th)
    showRoiMultiplier: false // ×18 / ×22 — omit until reconciled with a defined denominator
  },

  meeting: {
    kicker: 'HomePro × Kitty Kat Technologies · Working discussion · 26 August 2026',
    title: 'From customer data to measurable growth',
    subtitle: 'A working discussion on where HomePro is already strong, where a commercial gap may remain, and whether KKT can help close it.',
    note: 'Based on public information and hypotheses to validate together — not an outside-in diagnosis.'
  },

  nav: [
    { id: 'intro',    label: 'KKT in 90 seconds' },
    { id: 'view',     label: 'HomePro view' },
    { id: 'map',      label: 'Capability map' },
    { id: 'role',     label: 'KKT role' },
    { id: 'beyond',   label: 'Beyond' },
    { id: 'next',     label: 'Next step' }
  ],

  /* ---------------- Section 1 — KKT in 90 seconds ---------------- */
  intro: {
    heading: 'KKT in 90 seconds',
    whoWeAre: {
      label: 'Who we are',
      body: 'KKT is a senior business, data and AI transformation team. We help established companies use customer and operational data to increase revenue, reduce unnecessary cost and improve decisions. Our work can cover opportunity prioritisation, analytics and machine learning, implementation and transfer to internal teams.'
    },
    whatWeDo: {
      label: 'What we do',
      body: 'We start with a specific business problem, not a predetermined product. We establish the economics and data feasibility, then build, buy or adapt the right solution with the client’s team and specialist vendors. We connect it to real operations, test the result and scale only when the business effect is measurable.'
    },
    howWeWork: {
      label: 'How we work',
      cards: [
        { title: 'Find the value',       body: 'Identify and quantify the business problem worth solving.' },
        { title: 'Choose the right route', body: 'Build, buy or adapt according to economics, data, speed and internal capability.' },
        { title: 'Put it into use',      body: 'Connect models and insights to real decisions, channels and operating processes.' },
        { title: 'Prove and transfer',   body: 'Measure incremental impact, establish monitoring and leave capability with the client.' }
      ]
    },
    proofPoint: {
      label: 'Relevant proof point',
      body: 'At a retail group with close to one million active B2C customers, a targeted reactivation campaign generated approximately USD 350,000 in its first month. It was measured against the pre-campaign baseline without a control group; for HomePro we would use a control group.'
    },
    // Shown when permissions.nameClients is false.
    credentialsSafe: 'Our team combines senior commercial, retail, data science, engineering, architecture and implementation experience across international and regional businesses.',
    // Shown only when permissions.nameClients is true.
    credentialsNamed: 'Team members have contributed to projects involving PepsiCo, and KKT is currently developing ordering and warehouse-monitoring capabilities for Daily Georgia.'
  },

  /* ---------------- Section 2 — Our HomePro point of view ---------------- */
  view: {
    heading: 'Our HomePro point of view',
    lead: 'Public information suggests that HomePro already has much of the foundation. The question is not whether HomePro should start using data and AI, but where the next measurable customer-growth opportunity remains.',

    confirmed: {
      label: 'What public information confirms',
      cards: [
        { id: 'c1', title: 'A large, multi-format home-improvement platform',
          body: 'HomePro operates a large national network across HomePro, hybrid and MegaHome formats, with digital channels and an extensive product range.',
          sources: ['HP-01', 'HP-03'] },
        { id: 'c2', title: 'Distinct household and professional customer contexts',
          body: 'HomePro’s public materials refer to retail customers, contractors, technicians, project owners and B2B channels. Hybrid and MegaHome formats explicitly serve both household and professional demand.',
          sources: ['HP-02', 'HP-04'] },
        { id: 'c3', title: 'An established customer programme',
          body: 'HomeCard operates across app, LINE, website and stores. Public rules include Regular and Prestige economics as well as separate treatment for some professional and B2B-related groups.',
          sources: ['HP-08'] },
        { id: 'c4', title: 'A strategic omnichannel and customer-experience agenda',
          body: 'HomePro’s published strategy emphasizes synergised omnichannel growth, superior experience and sustainable innovation, including store, digital and B2B development.',
          sources: ['HP-05'] },
        { id: 'c5', title: 'Dedicated data and AI leadership',
          body: 'HomePro publicly lists a senior Enterprise Data Analytics & AI function alongside dedicated digital business, IT and supply-chain leadership.',
          sources: ['HP-07'] }
      ]
    },

    assumptions: {
      label: 'Working assumptions to validate',
      cards: [
        { id: 'a1', title: 'The foundation exists.',
          body: 'HomePro likely has established data platforms, reporting, analytics teams and production use cases. The relevant issue is not basic availability but where capability, adoption or commercial value remains uneven.' },
        { id: 'a2', title: 'Customer intelligence spans multiple identities and journeys.',
          body: 'Household, professional, B2B, project, service, channel and format behavior may create customer views that are commercially connected but operationally distributed.' },
        { id: 'a3', title: 'The main constraint may be activation rather than modelling.',
          body: 'HomePro may already have strong analytics and models, while the opportunity lies in connecting them consistently to campaigns, channels, offers, service journeys and measurement.' },
        { id: 'a4', title: 'Incrementality matters.',
          body: 'Promotional and loyalty performance may benefit from clearer separation of genuine incremental gross profit from sales that would have occurred anyway.' },
        { id: 'a5', title: 'Different capabilities may be at different levels.',
          body: 'HomePro may already have next-best-action or personalisation in selected areas while still having unresolved gaps in customer economics, cross-format identity, segment activation or operating orchestration.' }
      ]
    },

    questions: {
      label: 'Questions to validate in the meeting',
      items: [
        'Which customer-growth decisions are already supported by advanced analytics or AI today?',
        'Which customer identities are connected across HomePro, MegaHome, HomeCard B2B, online, store, delivery, installation and other services?',
        'How are household, professional, contractor, project-owner and B2B customer economics differentiated?',
        'Where do analytical outputs currently stop: insight, campaign list, channel decision, offer selection or closed-loop measurement?',
        'Are promotions and retention actions routinely measured against control groups or other counterfactuals?',
        'Who owns the journey from analytical opportunity to activated campaign and measured result?',
        'What is the strongest unresolved customer-growth question on HomePro’s current roadmap?',
        'Which constraints matter most: data, identity, business ownership, channel integration, experimentation, model operations, vendor capacity or internal bandwidth?'
      ]
    }
  },

  /* ---------------- Business outcomes (sits above the map) ---------------- */
  outcomes: {
    heading: 'The commercial outcomes we would optimise',
    cards: [
      { title: 'More revenue and gross profit per customer', body: 'Prioritise actions that add incremental value, not merely attributed sales.' },
      { title: 'Larger baskets and greater category penetration', body: 'Help customers discover relevant complementary products, services and categories.' },
      { title: 'More frequent purchases, retention and lifetime value', body: 'Identify valuable customer states and intervene when timing and economics justify it.' },
      { title: 'Better promotional returns', body: 'Target discounts and communications where they change behaviour, with controlled measurement.' },
      { title: 'A stronger lifetime relationship', body: 'Connect products, services and support across the customer’s home-improvement lifecycle where data and consent allow.' }
    ],
    principle: 'The objective is not more models. It is better customer decisions with measurable commercial effect.'
  },

  /* ---------------- Section 3 — Customer-growth capability map ---------------- */
  map: {
    heading: 'Customer-growth capability map',
    intro: 'These are capability layers, not a prescribed maturity path. HomePro may already be advanced in some areas. The purpose is to identify the strongest remaining commercial gap and start there.',
    statusHint: 'Every layer starts as Unknown. Set a status as the conversation establishes it.',

    layers: [
      {
        id: 'l1', order: 1, title: 'Customer opportunity and economics',
        question: 'Where is customer value created, lost or left unrealised?',
        summary: 'Establish a shared commercial view of customer value, behaviour and opportunity before choosing a model or platform.',
        outputs: [
          'customer value and gross-profit pools',
          'high-value, declining, lapsed, newly active and promotion-dependent groups',
          'frequency, basket, category, channel, service and format patterns',
          'leakage and “danger zones” where value is deteriorating',
          'a ranked list of customer-growth opportunities',
          'a baseline, measurement design and initial business case',
          'explicit data limitations and decisions required'
        ],
        methods: [
          'descriptive and diagnostic analysis',
          'cohort analysis',
          'customer lifetime and contribution-margin views',
          'RFM and category-affinity analysis',
          'customer journey and state-transition analysis',
          'promotion and discount diagnostics',
          'opportunity sizing under transparent assumptions'
        ],
        minimumData: [
          'customer or account identifier where available',
          'transaction date, store/channel, SKU, quantity, price and discount',
          'product hierarchy and cost or gross-margin fields',
          'HomeCard status and relevant membership attributes',
          'returns, cancellations and fulfilment outcomes',
          'digital, service or B2B identifiers when legally and operationally linkable',
          'campaign exposures and responses if available'
        ],
        measures: [
          'revenue and gross profit per customer',
          'active-customer rate and purchase frequency',
          'basket value, items and categories',
          'category penetration and service attachment',
          'lapse/reactivation rates',
          'discount intensity and promotion dependency',
          'addressable value of prioritised opportunities'
        ],
        homeProQuestions: [
          'Is there one agreed customer-value definition across commercial, loyalty, digital and data teams?',
          'Is value measured on revenue, gross profit, contribution or another basis?',
          'Are professional and household customers compared under different economics?',
          'Which customer opportunity is currently large but difficult to size or own?'
        ],
        kktRole: 'Facilitate the commercial framing, conduct or challenge the diagnostic, quantify opportunities, define measurement and leave HomePro with a prioritised action map.',
        completion: 'HomePro has selected one or more customer-growth opportunities with a credible economic case, usable data and a named business owner.'
      },
      {
        id: 'l2', order: 2, title: 'Segment-based activation',
        question: 'Which customer groups should be treated differently, and how?',
        summary: 'Convert customer behaviour into a manageable set of commercially distinct groups, each with a specific action and testable proposition.',
        outputs: [
          'behavioural and value segments that complement existing programme tiers',
          'clear segment definitions and refresh rules',
          'segment-specific needs, risks and opportunities',
          'recommended treatment, message, channel and offer logic',
          'eligible campaign audiences and exclusions',
          'segment dashboards and migration tracking',
          'A/B-ready activation briefs'
        ],
        illustrative: {
          label: 'Illustrative segment dimensions — not proposed final segments',
          items: [
            'household, professional, contractor, project or B2B context',
            'high value, emerging value, declining, lapsed or promotion dependent',
            'project/category pattern, replenishment pattern or service need',
            'store-led, digital-led or mixed-channel behavior',
            'format relationship across HomePro, hybrid and MegaHome',
            'full-price, promotion-responsive or low-incrementality behavior'
          ]
        },
        methods: [
          'business rules and heuristics',
          'RFM and value segmentation',
          'clustering or latent class methods where useful',
          'category and sequence patterns',
          'supervised classification for known customer states',
          'qualitative validation with commercial, marketing and frontline teams'
        ],
        minimumData: [
          'Layer 1 data plus:',
          'communications permissions and channel reachability',
          'campaign history',
          'digital engagement where permitted',
          'product/category need states',
          'service and installation use',
          'any existing segment, persona or loyalty-tier definitions'
        ],
        measures: [
          'segment coverage and stability',
          'migration between value states',
          'campaign conversion and incremental gross profit by segment',
          'contact and offer fatigue',
          'category and service penetration',
          'segment treatment adoption by business teams'
        ],
        homeProQuestions: [
          'Which segmentation frameworks already exist, and who uses them?',
          'Are segments descriptive, predictive or directly connected to activation?',
          'How frequently are segments refreshed?',
          'Does each segment have a differentiated commercial treatment?',
          'Can HomePro run clean control groups at segment level?'
        ],
        kktRole: 'Consolidate or extend existing segmentation, connect each segment to a commercial action, establish controlled tests and make the framework usable by marketing and commercial teams.',
        completion: 'A small number of distinct customer treatments are live, measurable and managed — not merely described in a dashboard.'
      },
      {
        id: 'l3', order: 3, title: 'Individual scoring and personalisation',
        question: 'Which customer is likely to respond to which action?',
        summary: 'Move from segment-wide treatment to customer-level prioritisation using batch scores that can be activated through existing channels.',
        outputs: [
          'lapse, churn or reactivation likelihood',
          'next-category or complementary-product propensity',
          'service or installation propensity',
          'offer-response likelihood',
          'customer value or future-value scores',
          'contactability and fatigue controls',
          'ranked audiences for planned campaigns',
          'explanation fields and operating thresholds for business users'
        ],
        methods: [
          'propensity and survival models',
          'product and category recommenders',
          'sequence and time-to-next-purchase models',
          'collaborative, content-based or hybrid recommendations',
          'calibrated ranking models',
          'interpretable rule/model combinations',
          'batch scoring on an agreed schedule'
        ],
        distinction: 'A propensity model predicts who is likely to act. It does not by itself identify who will act because of an offer. Where discount or intervention cost matters, uplift or controlled experimentation is required.',
        minimumData: [
          'Layer 2 data plus:',
          'sufficient labelled history for the selected outcome',
          'offer and contact exposure history',
          'response windows and attribution rules',
          'margin, cost and capacity constraints',
          'reliable batch export or channel-ingestion capability'
        ],
        measures: [
          'incremental conversion and gross profit',
          'precision or lift within the actioned audience',
          'cost per incremental outcome',
          'recommendation uptake and complementary-category penetration',
          'model calibration and stability',
          'fairness, consent and exclusion compliance where relevant'
        ],
        homeProQuestions: [
          'Which customer-level models already exist and are in production?',
          'How often are scores refreshed and where are they consumed?',
          'Are scores used to prioritise actions or only to enrich dashboards?',
          'How are model outputs translated into eligible, executable audiences?',
          'Are there reliable exposure and holdout records?'
        ],
        kktRole: 'Build or co-build a missing model, improve the path from score to action, establish evaluation against a baseline and transfer the pipeline and operating logic to HomePro.',
        completion: 'A customer-level score changes a real decision, is evaluated against an appropriate counterfactual and can be refreshed and monitored reliably.'
      },
      {
        id: 'l4', order: 4, title: 'Decisioning and orchestration',
        question: 'What is the best action, offer, channel and timing under real business constraints?',
        summary: 'Combine customer signals, economics, eligibility and channel constraints into a consistent next-best-action or next-best-offer decision.',
        outputs: [
          'next-best-action or next-best-offer policies',
          'prioritisation across competing campaigns and customer needs',
          'channel and timing decisions',
          'offer eligibility, suppression and frequency rules',
          'budget, margin, inventory and service-capacity constraints',
          'controlled exploration and learning policies',
          'decision logs and reason codes',
          'closed-loop performance monitoring'
        ],
        methods: [
          'business-rule engines',
          'optimisation and constrained ranking',
          'uplift modelling and treatment-effect estimation',
          'contextual bandits or other adaptive methods where justified',
          'channel and contact-policy logic',
          'scenario testing',
          'decision services integrated with existing platforms'
        ],
        distinction: 'This layer does not require real-time decisioning. A well-governed daily or weekly process can create material value. Real time should be used only where the customer moment and economics justify the additional complexity.',
        minimumData: [
          'Layer 3 data plus:',
          'available actions and offers',
          'commercial rules, exclusions and costs',
          'channel inventory and contact limits',
          'stock, fulfilment or service constraints where relevant',
          'decision history and exposure logs',
          'interfaces to campaign, CRM, digital or store systems'
        ],
        measures: [
          'incremental gross profit per eligible customer',
          'value versus existing campaign policy',
          'action acceptance, suppression and conflict rates',
          'customer contact pressure',
          'execution latency and failure rate',
          'policy stability and guardrail compliance',
          'percentage of decisions with traceable rationale'
        ],
        homeProQuestions: [
          'Is there a central method for resolving competing customer actions?',
          'Are channel and campaign decisions coordinated or managed independently?',
          'Do offer costs, stock, capacity and contact limits enter the decision?',
          'How are decisions logged and linked to outcomes?',
          'Where would batch decisioning be sufficient, and where is real time valuable?'
        ],
        kktRole: 'Design or integrate the decision logic, align it with economics and constraints, coordinate platform or vendor components, and establish a controlled learning loop.',
        completion: 'HomePro can consistently choose among competing actions, execute the decision through existing channels, record what happened and learn from incremental outcomes.'
      },
      {
        id: 'l5', order: 5, title: 'Agent-enabled activation and learning',
        question: 'How can commercial teams move from insight to action faster and learn continuously?',
        summary: 'Use governed AI agents to coordinate analysis, campaign preparation, quality checks, workflow and learning around the existing customer-growth stack.',
        outputs: [
          'an analyst copilot that investigates customer and campaign performance',
          'automatic preparation of campaign briefs and eligible audiences',
          'rule, consent, margin, stock and contact-pressure checks',
          'experiment setup and measurement packs',
          'monitoring and exception triage',
          'natural-language explanations of segment, model or campaign behavior',
          'recommendation of follow-up analyses and tests',
          'workflow coordination across data, commercial, marketing and channel teams'
        ],
        mustNotImply: {
          label: 'What it must not imply',
          items: [
            'autonomous approval of prices, discounts or spend',
            'unsupervised customer communications',
            'replacement of HomePro’s accountable business owners',
            'an agent improvising outside approved data, tools and policies',
            'replacement of deterministic controls where those are safer and clearer'
          ]
        },
        operatingModel: {
          label: 'Operating model — each agent or workflow must have',
          items: [
            'a named business owner',
            'an explicit objective and permitted actions',
            'approved data and tools',
            'human approval points',
            'complete action and decision logs',
            'quality and safety evaluations',
            'exception and rollback procedures',
            'cost, latency and performance monitoring'
          ]
        },
        methods: [
          'retrieval over approved business definitions and campaign history',
          'tool-using workflows with deterministic validation',
          'natural-language interfaces to governed analytics',
          'agent orchestration for multi-step tasks',
          'automated evaluation and monitoring',
          'human-in-the-loop approvals'
        ],
        minimumData: [
          'stable definitions and trusted customer metrics',
          'governed data and role-based access',
          'documented campaign and decision processes',
          'tools or APIs the agent is permitted to use',
          'evaluation data and human-review capacity',
          'clear audit, privacy and security requirements'
        ],
        measures: [
          'cycle time from question to executable action',
          'analyst and campaign-manager effort saved',
          'error and rework rate',
          'percentage of outputs accepted, edited or rejected',
          'business effect of agent-supported actions',
          'policy or compliance exceptions',
          'operating cost per workflow'
        ],
        homeProQuestions: [
          'Which customer-growth workflows are slow because of coordination rather than analysis?',
          'Where do teams repeatedly assemble the same data, brief or checks?',
          'Which actions can safely be prepared by an agent but approved by a human?',
          'What agent platforms, security standards and model policies already exist?'
        ],
        kktRole: 'Identify a bounded workflow, design the controls, integrate approved tools, evaluate performance and transfer an auditable operating pattern to HomePro.',
        completion: 'A governed agent workflow reduces cycle time or manual effort while preserving human accountability and producing measurable, monitored results.'
      }
    ],

    hub: {
      heading: 'Customer Intelligence Hub',
      definition: 'A shared operating layer that turns customer data, models, decisions, experiments and results into reusable commercial capability.',
      includes: [
        'agreed customer and commercial definitions',
        'connected customer and interaction histories',
        'reusable features, segments, scores and eligibility rules',
        'model, decision and campaign registries',
        'experiment and control-group management',
        'exposure, action and outcome logs',
        'dashboards for commercial value and model health',
        'governance, consent, access and retention controls',
        'interfaces to CRM, campaign, digital, store and service channels',
        'documented ownership and operating processes'
      ],
      isNot: 'It is not automatically a new data warehouse, lake, CDP or monolithic platform. It can be assembled from HomePro’s existing architecture, adding only the components needed to make customer intelligence reusable, measurable and operational.'
    },

    initiatives: {
      heading: 'Candidate first initiatives',
      note: 'Conversation starters, not recommendations made without internal data.',
      items: [
        {
          id: 'A', title: 'High-value lapse prevention and reactivation',
          commercialQuestion: 'Which valuable customers are genuinely at risk or already lapsed, and which intervention creates incremental gross profit?',
          rationaleLabel: 'Why this is a credible first test',
          rationale: [
            'The outcome and action are understandable.',
            'Batch activation is sufficient.',
            'It can start with a defined customer population.',
            'It supports a clean holdout or A/B design.',
            'It connects directly to KKT’s strongest reference evidence.'
          ],
          scope: [
            'define lapse by customer or category context',
            'identify value pools and eligible populations',
            'distinguish likely returners from customers who need intervention',
            'design treatment and control groups',
            'run one or more differentiated treatments',
            'measure incremental revenue, gross profit, cost and subsequent retention',
            'document the repeatable operating process'
          ],
          minimumData: 'Transactions, customer identity, margin or cost, campaign exposure, channel permissions, existing offer rules and sufficient history for the selected population.',
          primaryKpi: 'Incremental gross profit after campaign and offer cost versus control.',
          guardrails: 'Contact pressure, margin dilution, adverse customer response, stock/service capacity and cannibalisation of existing activity.',
          discovery: [
            'Does HomePro already operate churn or reactivation models?',
            'How is lapse defined for long-cycle DIY categories?',
            'Are professional and household lapse patterns evaluated differently?',
            'Are campaign holdouts available and persistent?'
          ]
        },
        {
          id: 'B', title: 'Cross-format customer identity and value',
          commercialQuestion: 'Can HomePro consistently recognise and value customer relationships across household, professional, B2B, format, channel, product and service interactions?',
          rationaleLabel: 'Why it may matter',
          rationale: [
            'HomePro serves multiple customer contexts and formats.',
            'A customer may have different identities or roles across purchases.',
            'Fragmented value views can weaken prioritisation, service and campaign measurement.',
            'The output can improve multiple later use cases without requiring a new platform by default.'
          ],
          scope: [
            'inventory relevant identities and matching rules',
            'assess household, account, professional and individual relationships',
            'quantify cross-format and cross-channel overlap',
            'establish agreed value and gross-profit views',
            'identify material gaps and false merges',
            'prioritise identity improvements by business value',
            'define how the resolved view is consumed by existing systems'
          ],
          minimumData: 'Customer and account identifiers, loyalty/B2B records, transactions, digital and service identifiers, matching attributes, consent and applicable data-governance rules.',
          primaryKpi: 'Percentage of commercially relevant interactions linked at the appropriate identity level; value reallocated or newly visible through connection; downstream improvement in audience, measurement or service decisions; false-match and unresolved-match rates.',
          guardrails: 'Privacy, consent, purpose limitation, access control, match confidence and separation of household versus legal-business identities.',
          discovery: [
            'What identity levels already exist: person, household, account, professional or project?',
            'Which channels and services use the same customer key?',
            'Where does identity fragmentation create an observable commercial problem?',
            'Would improving identity change a decision enough to justify the work?'
          ]
        },
        {
          id: 'C', title: 'Next-category and complementary-solution activation',
          commercialQuestion: 'Which relevant category, product or service should be presented next, to whom, and under what commercial conditions?',
          rationaleLabel: 'Why it may matter',
          rationale: [
            'Home improvement creates strong product and service relationships.',
            'Relevant complements can increase basket and category penetration without relying only on broad discounts.',
            'The initiative can begin with selected categories and batch channels.',
            'It tests the full path from analysis to customer action.'
          ],
          scope: [
            'select one or two commercially meaningful categories or journeys',
            'identify product, category and service affinities',
            'incorporate compatibility, timing, inventory, margin and eligibility rules',
            'score or rank relevant customers and actions',
            'activate through an existing channel',
            'use treatment and control groups',
            'measure incremental gross profit and category/service penetration'
          ],
          minimumData: 'Transaction history, product hierarchy and attributes, margin, inventory or availability, customer identity, campaign exposure and channel permissions. Compatibility data is required where an incorrect recommendation creates customer or operational risk.',
          primaryKpi: 'Incremental gross profit and incremental category or service penetration versus control.',
          guardrails: 'Product compatibility, stock, fulfilment, margin, returns, customer fatigue and recommendations that merely shift sales from another HomePro channel or campaign.',
          discovery: [
            'Which recommendation capabilities already exist online or in CRM?',
            'Are they optimised for click, conversion, revenue, gross profit or incremental value?',
            'Can online, campaign and store/service recommendations be evaluated consistently?',
            'Which category has enough volume, margin and repeatability for a controlled pilot?'
          ]
        }
      ]
    }
  },

  /* ---------------- Section 4 — Where KKT can help ---------------- */
  role: {
    heading: 'Where KKT can help',
    frankStatement: 'HomePro’s internal team or a Thai vendor probably can build every individual component.',
    thenLine: 'KKT is relevant when HomePro needs help with one or more of the following.',
    cards: [
      { n: '1', title: 'Find and prioritise the highest-value gap',
        body: 'Connect commercial economics, customer behaviour and data feasibility so HomePro invests in the opportunity that is worth solving — not simply the model that is easiest to build.' },
      { n: '2', title: 'Build, co-build or orchestrate the missing capability',
        body: 'Work inside HomePro’s existing environment, add specialist capacity where useful, or help select and coordinate vendors when buying is the better route.' },
      { n: '3', title: 'Connect analytics to action and prove incremental value',
        body: 'Carry the work through to campaigns, channels and operating decisions, with control groups or A/B tests and gross-profit measurement wherever feasible.' },
      { n: '4', title: 'Industrialise and transfer the capability',
        body: 'Establish monitoring, governance, documentation and working routines so HomePro’s team can operate, challenge and extend the solution after the engagement.' }
    ],
    supportingLine: 'KKT’s value is not ownership of a secret algorithm. It is helping HomePro move across business, data, technology, vendors and operations without losing the commercial objective or the evidence.',
    routes: {
      label: 'Engagement routes',
      items: [
        'Independent challenge and opportunity framing',
        'Specialist build or co-build capacity',
        'Vendor-neutral design and delivery orchestration',
        'Measurement, industrialisation and capability transfer'
      ]
    }
  },

  /* ---------------- Section 5 — Beyond the core opportunity ---------------- */
  beyond: {
    heading: 'Beyond the core opportunity',
    note: 'Collapsed by default. Breadth without diluting the main discussion.',
    blocks: [
      {
        id: 'b-media', title: 'Retail media and partner intelligence',
        summary: 'Use consented first-party customer and transaction intelligence to improve supplier collaboration, audience planning and closed-loop campaign measurement.',
        listLabel: 'Possible capabilities',
        list: [
          'privacy-safe audiences and clean-room collaboration',
          'supplier-funded campaign planning',
          'onsite, offsite and in-store audience activation',
          'closed-loop sales and incrementality measurement',
          'category and brand insights',
          'commercial rules, consent and access governance'
        ],
        prerequisites: 'Reliable identity, product hierarchy, exposure logs, supplier commercial model, consent/legal review and clear separation between customer benefit and monetisation.',
        caution: 'Retail media should follow a defined customer proposition and measurement model. It should not be presented as automatic monetisation of customer data.'
      },
      {
        id: 'b-sim', title: 'Commercial decision simulation',
        summary: 'Test pricing, promotion, assortment, portfolio or channel scenarios before committing them to the market.',
        listLabel: 'Potential routes',
        list: [
          'build targeted internal simulation for a narrow decision',
          'partner with a specialist provider',
          'evaluate a commercial simulation platform such as Buynomics'
        ],
        vendorNote: 'Buynomics positions its “Virtual Shoppers AI” platform around simulating shopper and commercial responses to price, promotion, portfolio, trade terms, channel mix, cannibalisation and competition. Any use at HomePro would require a separate problem definition, data-feasibility assessment, validation against HomePro outcomes and a build-versus-buy decision. KKT does not claim a partnership or reseller relationship with Buynomics.',
        vendorSources: ['SIM-01', 'SIM-02'],
        caution: 'Vendor performance claims must not be repeated as KKT evidence. Simulation is a separate revenue-growth-management and commercial-decision track, not the next mandatory stage of customer intelligence.'
      },
      {
        id: 'b-synth', title: 'Synthetic customers and behaviour simulation',
        summary: 'Use simulated customer responses to generate hypotheses, explore journeys and prioritise real tests — not to replace customer evidence.',
        listLabel: 'Credible uses',
        list: [
          'generate alternative customer questions or objections',
          'stress-test messages, journeys and service conversations',
          'explore edge cases before field research',
          'help prioritise experiments',
          'support qualitative scenario workshops'
        ],
        notLabel: 'Do not use as',
        notList: [
          'a substitute for real customer research',
          'a forecast of revenue or market response',
          'evidence of incrementality',
          'a replacement for A/B tests',
          'a source of invented customer certainty'
        ],
        evidenceNote: 'Recent research continues to find meaningful gaps between simulated and real customer behaviour, including imperfect adherence to specified personas. Treat LLM-based synthetic customers as an experimental decision-support tool.',
        vendorSources: ['SIM-03']
      }
    ],
    otherRail: {
      label: 'Other KKT capabilities',
      items: [
        { title: 'Demand and inventory', body: 'forecasting, replenishment, allocation, availability and working-capital decisions.' },
        { title: 'Supply chain and logistics', body: 'warehouse monitoring, routing, capacity and operational decision support.' },
        { title: 'Operational AI and automation', body: 'governed assistants and agents for high-friction analytical or administrative workflows.' },
        { title: 'Management decision intelligence', body: 'trusted metrics, forecasting, scenario analysis and decision-support interfaces.' },
        { title: 'Transformation governance', body: 'opportunity portfolio, architecture, vendor selection, delivery coordination and internal capability building.' }
      ]
    },
    boundary: 'These are adjacent capabilities, not the proposed agenda for this meeting. They become relevant only if HomePro identifies a stronger priority outside customer growth.'
  },

  /* ---------------- Section 6 — Possible next step ---------------- */
  next: {
    heading: 'Possible next step',
    options: [
      {
        id: 'opt1', label: 'Option 1', title: 'Capability-mapping working session',
        body: 'Bring together the relevant customer, commercial, marketing, digital, data and technology owners to map what is already in place across the five layers, identify one or two unresolved gaps and agree where further work would — or would not — create value.',
        outputLabel: 'Proposed output',
        output: [
          'validated capability map',
          'current owners, systems and initiatives',
          'prioritised gaps and dependencies',
          'preliminary value and feasibility assessment',
          'recommendation to stop, investigate or pilot'
        ],
        duration: 'One structured working session plus concise synthesis.'
      },
      {
        id: 'opt2', label: 'Option 2', title: 'Focused discovery and pilot design',
        body: 'Select one opportunity and define its economics, data, experiment, operating owner and delivery route before committing to implementation.',
        outputLabel: 'Proposed output',
        output: [
          'precise business question and eligible customer population',
          'baseline and target economics',
          'data and integration assessment',
          'treatment, control and measurement design',
          'build, buy or co-build recommendation',
          'roles, timeline, risks and scale criteria',
          'implementation decision'
        ],
        candidatesLabel: 'Suggested focus candidates',
        candidates: [
          'high-value lapse prevention/reactivation',
          'cross-format customer identity and value',
          'next-category/complementary-solution activation'
        ]
      }
    ],
    closingQuestion: 'Which capability is already strong, and which unresolved customer-growth decision would be most valuable to examine together?'
  },

  /* ---------------- Public source register ---------------- */
  sources: [
    { id: 'HP-01', title: 'HomePro investor-relations home page', publisher: 'homepro.co.th', url: 'https://hmpro-th.listedcompany.com/home.html', accessed: '21 August 2026', supports: 'HomePro is a leading home-improvement retailer; large store network; extensive product range', status: 'confirmed', caveat: 'Store-count components on current public pages may overlap or use different definitions. Avoid an exact total unless reconciled immediately before the meeting.' },
    { id: 'HP-02', title: 'HomePro FAQ', publisher: 'homepro.co.th', url: 'https://www.homepro.co.th/', accessed: '21 August 2026', supports: 'Publicly described customers include retail customers, contractors and project owners; retail target includes people renovating existing/new homes', status: 'confirmed', caveat: 'Does not describe internal segmentation, identity resolution or economics.' },
    { id: 'HP-03', title: 'HomePro history', publisher: 'homepro.co.th', url: 'https://www.homepro.co.th/', accessed: '21 August 2026', supports: 'Hybrid format combines HomePro and MegaHome and aims to serve homeowners and contractors', status: 'confirmed', caveat: 'Do not infer how customer data is connected.' },
    { id: 'HP-04', title: 'HomePro vision / business information', publisher: 'homepro.co.th', url: 'https://www.homepro.co.th/', accessed: '21 August 2026', supports: 'MegaHome serves wholesale and retail and targets technicians, contractors and project owners', status: 'confirmed', caveat: 'Public business description, not evidence of analytics maturity.' },
    { id: 'HP-05', title: 'HomePro policy and strategy documents', publisher: 'homepro.co.th', url: 'https://hmpro-th.listedcompany.com/home.html', accessed: '21 August 2026', supports: '“HomePro Next Chapter” and 3S themes: Synergized Omnichannel, Superior Experience and Sustainable Innovation', status: 'confirmed', caveat: 'Verify the current document/version before final release.' },
    { id: 'HP-06', title: 'Chairman’s message', publisher: 'homepro.co.th', url: 'https://hmpro-th.listedcompany.com/home.html', accessed: '21 August 2026', supports: 'Online/offline development, hybrid format, website/app and B2B growth', status: 'confirmed', caveat: 'The 8% figure is not necessary to the central argument and may be stale by the meeting date. Prefer the strategic direction.' },
    { id: 'HP-07', title: 'HomePro management / subcommittee page', publisher: 'homepro.co.th', url: 'https://hmpro-th.listedcompany.com/home.html', accessed: '21 August 2026', supports: 'Publicly listed senior leadership includes Enterprise Data Analytics & AI, Digital Business, IT and Supply Chain functions', status: 'confirmed', caveat: 'Use function-level wording; titles can change. Re-check immediately before meeting.' },
    { id: 'HP-08', title: 'HomeCard public rules', publisher: 'homepro.co.th', url: 'https://www.homepro.co.th/homecard/', accessed: '21 August 2026', supports: 'Enrollment channels; 1 point per THB 30; different Regular/Prestige coupon thresholds; distinct treatment/exclusions for some professional/B2B groups', status: 'confirmed', caveat: 'Rules may change. Re-check immediately before the meeting.' },
    { id: 'HP-M01', title: 'Publicly reported management positioning (May 2026)', publisher: 'Mitihoon', url: 'https://mitihoon.com/', accessed: '21 August 2026', supports: 'Publicly reported “Home Lifetime Companion,” customer lifetime value and AI/data positioning', status: 'secondary', caveat: 'Secondary supporting context; label as publicly reported management positioning.' },
    { id: 'HP-M02', title: 'Publicly reported management positioning (April 2026)', publisher: 'Mitihoon', url: 'https://mitihoon.com/', accessed: '21 August 2026', supports: 'Publicly reported emphasis on long-term customer relationships, experience and service continuity', status: 'secondary', caveat: 'Secondary supporting context.' },
    { id: 'HP-M03', title: 'Publicly reported service expansion (April 2026)', publisher: 'Mitihoon', url: 'https://mitihoon.com/', accessed: '21 August 2026', supports: 'Publicly reported CHANG HomePro/service expansion, workflow and efficiency agenda', status: 'secondary', caveat: 'Avoid unverified operating figures in main view.' },
    { id: 'SIM-01', title: 'Buynomics home page', publisher: 'buynomics.com', url: 'https://www.buynomics.com/', accessed: '21 August 2026', supports: 'Vendor positions a commercial-decision simulation platform using virtual shoppers', status: 'secondary', caveat: 'Optional market example, not a KKT product.' },
    { id: 'SIM-02', title: 'Buynomics product page', publisher: 'buynomics.com', url: 'https://www.buynomics.com/', accessed: '21 August 2026', supports: 'Vendor describes price, promotion, portfolio, trade terms, channel, cannibalisation, competition and P&L scenario applications', status: 'secondary', caveat: 'Vendor attribution; do not repeat vendor performance claims as fact.' },
    { id: 'SIM-03', title: 'CustomerSim research preprint', publisher: 'arXiv', url: 'https://arxiv.org/', accessed: '21 August 2026', supports: 'Recent benchmark reports gaps in simulated customer behaviour and imperfect persona adherence', status: 'secondary', caveat: 'Supports caution that LLM synthetic customers are experimental and do not replace real tests.' }
  ],

  statusLabels: {
    unknown:     'Unknown',
    in_place:    'In place',
    in_progress: 'In progress',
    possible_gap:'Possible gap'
  },

  ui: {
    sourcesTitle: 'Public sources',
    sourcesIntro: 'Every HomePro statement in this canvas links to a public source. Nothing here relies on internal HomePro information.',
    resetLabel: 'Reset discussion',
    printLabel: 'Print view',
    backToMap: 'Return to map',
    closeLabel: 'Close',
    badge: { confirmed: 'Publicly confirmed', assumption: 'Working assumption', question: 'Question to validate' },
    contact: 'Kitty Kat Technologies · kittykat.tech'
  }
};
