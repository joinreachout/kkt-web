# Optimus — KKT's fuel-retail operating system

`/solutions/optimus`

## Tagline

Daily operating intelligence for fuel networks. Stockouts,
replenishment, working capital — in 10 minutes a morning.

## What it is

Optimus is an operating-intelligence system for fuel-distribution
networks. Each morning it pulls the operator's live data from ERP —
current stocks, in-transit orders, station-level sales, supplier
offers — forecasts when each station × fuel-type position will hit
critical level (10% capacity), detects inbound delivery conflicts where
arriving volume exceeds available tank capacity, and produces concrete
procurement recommendations: which supplier, how many tons, by what
date, at what price.

The user is the head of supply or a procurement operator. The morning
workflow is roughly 10–15 minutes: read the AI briefing, close
critical positions, confirm or override the recommended POs,
auto-distribute delivery overflow to the nearest stations with
capacity. Critical alerts mirror to a Telegram group so the operator
never depends on the web interface.

## Daily pulse

- 03:30 local — cron import from ERP (stocks, in-transit, sales,
  supplier offers)
- 03:30–04:00 — forecast engine runs (stockout × delivery)
- 04:00 onward — Procurement Advisor materializes recommendations
- 08:00 — operator opens Optimus, works through the briefing
- All day — Telegram alerts mirror critical events independently of
  the web interface

## Capability surface (full)

- **Auto-import (cron, ~03:30 local):** Pulls fresh stocks and orders
  from ERP. No manual upload.
- **AI Briefing:** Plain-language daily situation summary — Action
  Required, Good News, Savings Tip. Free-form chat ("Ask Optimus")
  answers questions from live data.
- **Procurement Advisor:** Concrete order recommendations with
  supplier, tonnage, deadline, price. Statuses CRITICAL / ORDER / OK.
  One-click PO creation.
- **Shipments Timeline:** 14 / 30 / 60-day forward view per station.
  Color-coded OK / Tight / Conflict.
- **Delivery conflict resolver:** Auto-Distribute reroutes overflow
  wagons to nearest stations with free capacity. Audit trail.
- **Stockout Forecast:** Days remaining until critical level per
  station × fuel position. Includes in-transit and split-wagon
  transfers.
- **Fuel Level Forecast:** Per-station stock projection charts with
  region and fuel filters.
- **Reserves Panel:** Fuel held at supplier without destination.
  "Release reserve" assigns to a specific station with capacity check.
- **Station Fill Levels:** Per-station, per-fuel % capacity and
  tonnage, sorted by urgency.
- **Working Capital:** $ frozen in inventory and where to release.
- **Inventory Turnover:** Per-fuel turnover rate, days on hand, value
  at stake.
- **Recommendation History:** Daily snapshots — rewind to any past day
  to see what was advised and what happened.
- **Telegram alert mirror:** Critical events pushed to operator group
  regardless of web availability.
- **Forced Order flow:** Senior management override path with audit
  trail and ship-history fallback.

## Live deployments

Two deployments at very different scales — same product, same engine,
configured for the deployment.

1. **Alfa Oil** (also branded Red Petrol) — Kyrgyzstan. 600+ stations,
   $500M revenue. Optimus operating across the full network.
   `/case-studies/alfa-oil`.

2. **Central Asian fuel network** — 10 stations, 11 fuel types, 3
   regions. Smaller end of the range, same engine. (Walkable case
   study in editorial — depth depends on customer consent tier.)

## What changes after Optimus ships

- **Stockouts:** fewer surprise critical positions. The forecast
  surfaces them days before they happen, when there is still time to
  act.
- **Working capital:** $ frozen in inventory becomes visible per fuel
  and per region — and so does where to release it. Inventory
  turnover stops being a quarterly review and becomes a daily decision.
- **Procurement speed:** decisions that took half a day of
  reconciliation move to minutes. Recommendation and grounding data on
  the same screen.
- **Supplier consolidation:** Recommendation history makes
  supplier-by-supplier savings visible over time. Procurement
  Advisor's defaults shift with what the data shows.

Numbers per deployment vary by network size, fuel mix, and baseline.
KKT publishes ranges from real production environments, not
vendor-deck promises.
