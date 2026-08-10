# Fuel retail — offering & the Fuel AI Transformation Map

Covers the `/industries/fuel-retail` page and the full fuel canvas at
**fuelretail.kittykat.tech** ("Fuel AI Transformation Map"), so you can answer
fuel-network questions directly. Optimus (see 04-optimus.md) is one product
inside this map, not the whole offering.

## The fuel-retail approach (/industries/fuel-retail)

AI and data for **independent / mid-sized fuel networks**. Premise: the network
already has the data (ERP, POS, loyalty, GPS, depots, BI, spreadsheets); what's
missing is connectedness. Approach is **bottom-up — "AI agents are not installed
on top of chaos"**: start small on existing data, build the foundation as you go,
add forecasting/optimization, then agentic solutions on top.

**Three solution levels (sequence, not difficulty):**
1. **Essential / Базовые** — launch fast on existing data, clear effect, little process change (visibility & control now).
2. **Advanced / Продвинутые** — need mature data, integrations, models, process change (forecast & optimization).
3. **Frontier / Agentic & systemic** — end-to-end + AI agents on the built foundation; the human sets rules and approves critical actions (human-in-the-loop).

## The whole fuel network economy — 7 blocks (the Map)

The Map covers **106 initiatives across 7 domains**, framed by business task and
value, along a value chain: **Suppliers → External logistics → Fuel terminal
(нефтебаза) → Delivery to station → Station & shop → Customer / B2B**, plus three
cross-cutting layers (Finance/control, Supporting functions, Data & processes).
Cards are tagged [B]=Essential, [A]=Advanced, [F]=Frontier; most Advanced/Frontier
cards depend on the trusted **data foundation** (block G).

### A — Fuel: procurement, price & margin
Manage procurement and price as one commercial loop — less shortage/surplus, less overpayment, better margin.
- A1 right volume/moment: [B] see need + stock in one view · [A] demand forecast per station/base · [A] smart buying (how much/when/from whom) · [F] buying agent under operator control
- A2 supplier & terms: [B] compare suppliers (price/terms) · [A] buy at the favorable price moment
- A3 full landed cost: [B] real batch cost (price+logistics+demurrage+customs+penalties) · [A] see cost risk before it hits COGS
- A4 price vs market/demand: [B] price vs competitors · [A] price headroom without losing customers · [F] dynamic pricing under rules

### B — Logistics & fuel supply
End-to-end manageable supply — less loss, idle time, penalties, manual dispatching.
- B1 external logistics: [B] shipment status/ETA · [A] early delay warning · [B] catch acceptance shortage · [A] systemic-loss analysis · [B] railcar status · [A] demurrage control
- B2 terminal / нефтебаза: [B] drain/fill reconciliation · [A] natural loss vs real leak · [B] quality control · [A] tank (РВС) utilization
- B3 internal logistics: [B] which station needs fuel · [A] auto delivery plan · [F] dispatcher agent · [B] fleet status · [A] optimal route/truck/driver · [B] trip plan-vs-fact · [B] driver safety · [A] catch fuel theft in transit

### C — Stations, shops & cafés
Run the station as a profit point — fewer losses, higher revenue, better experience.
- C1 station ops: [B] station benchmark · [B] plan-control & response · [A] cause analysis · [F] station-analysis agent · [B] lost-traffic view · [A] queue/peak view · [B] catch dispenser/cashier losses (short-pours, voids, collusion) · [B] shift control · [A] camera standard-violation · [B] maintenance priority · [A] predictive maintenance
- C2 shop & café: [B] fuel-to-store conversion · [A] non-fuel moment offer · [B] local assortment sales · [A] product demand forecast · [B] write-offs & empty shelves · [A] markdown/reorder timing · [F] retail media on station traffic

### D — Customers, loyalty & B2B
Turn the base & B2B portfolio into managed growth — retention, margin per customer, fewer wasted discounts.
- D1 B2C: [B] who's profitable · [B] basic segmentation · [B] 360 profile · [A] ML behavioral segmentation · [A] CLV · [B] early churn signal · [A] churn prediction · [A] retention action · [F] retention autopilot · [B] basket bundles · [A] personal offer · [A] best offer moment · [B] promo effect (did it really work) · [A] uplift discount · [F] promo engine · [B] feedback themes · [A] early station-problem detection · [F] AI first-line support · [A] retail-media entry · [F] partner data platform
- D2 B2B/fleet: [B] B2B profitability · [A] B2B value forecast · [A] risk/value terms · [A] payment-risk · [B] B2B cooling signal · [A] renewal risk

### E — Finance, money & control
Live financial picture, faster root-cause, fewer leaks.
- [B] live finance picture (margin/money by station/region/product) · [A] ask figures in words · [B] plan deviation · [A] deviation drivers · [F] fin-ops analyst agent · [B] cash position · [A] cash-gap forecast · [A] payment risk · [B] catch duplicate/fake payments · [A] policy check before payment

### F — Supporting functions
Cut routine, strengthen control; violations visible before audit.
- HR: [B] HR-ops assistant · [B] linear-staff screening · [B] field-staff digital loop · [A] turnover early signals
- Legal: [B] legal assistant · [B] doc draft · [A] contract-obligation control · [F] legal-process agent
- MTO procurement: [B] MTO visibility · [A] MTO anomalies · [A] supplier/contractor rating
- Internal control: [B] loss/exception panel · [A] anomaly detection · [A] risk-based investigations · [A] loyalty/fuel-card fraud control · [F] control-chain agent
- Documents: [B] document & primary-record processing (invoices, acts, ТТН)

### G — Data & processes (the foundation)
One version of truth, scalable AI.
- [B] trusted data foundation (most Advanced/Frontier cards depend on this) · [B] BI on a single base · [B] knowledge search · [B] take routine off the team · [A] ask data in words · [F] system-data update agent

## Optimus's place in the Map
Optimus is named as the **real productized embodiment of the smart-buying /
procurement-optimization layer** (card A1 "smart buying", above demand forecast
and stock visibility, below the fully agentic buying agent). It is KKT's fuel
procurement-and-margin engine. Full detail in 04-optimus.md and 04b.

## Red Petroleum pilot (the flagship fuel transformation)
A multi-year data & AI transformation for an independent 220+ station fuel
network in Central Asia (Kyrgyzstan): moved from 15+ disconnected legacy systems
to a working data & AI environment; AI readiness + roadmap; DWH/BI foundation
(24+ dashboards across 9 departments); segmentation of 380,000+ loyalty members;
anti-fraud across 30M+ transactions; NL analytics agent, internal RAG assistants,
payment/logistics automation; and the first procurement-optimization product
(Optimus). Reporting went from days to minutes; the client's in-house data team
now runs it independently; first in-house ML models in production. (Red Petroleum
is the real brand; older materials said "Alfa Oil." Approved figures: USD 600M+
revenue, 220+ stations, 22 oil depots, 750,000 active customers. Never quote a
percentage uplift or a multiple.)

## How to refer
Plain-text URL only: "fuelretail.kittykat.tech" (the frontend won't render a
markdown link). For deep card-level fuel browsing, that canvas has its own advisor.
