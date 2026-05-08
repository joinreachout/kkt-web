/**
 * Cost of Doing Nothing — calculator UI v0 (PREVIEW).
 *
 * Per V2 §4: 6-8 inputs → range-based gap estimate. This implementation
 * is an interactive preview of the eventual calculator. Benchmark
 * values are placeholder estimates for shape-checking the UI; they
 * are NOT the calibrated benchmarks that V2 §4.5 requires.
 *
 * The whole component is gated behind a visible "PREVIEW — not for
 * board use" banner. Methodology page (/methods/cost-of-doing-nothing)
 * is linked in every output.
 *
 * Per V2 §4.2 non-negotiables:
 *  - Outputs are ranges, never points.
 *  - Inputs stay in the browser; no fetch.
 *  - Methodology visible per output.
 *  - Sometimes returns "no significant gap".
 *  - Sensitivity panel shows top inputs driving the result.
 *  - Conservative-by-default.
 */
import { useMemo, useState } from 'react';

type Region = 'CE' | 'EU-West' | 'EU-South' | 'CIS' | 'Other';
type RevenueBand = '<€50M' | '€50–150M' | '€150–500M' | '€500M+';
type NonFuelShare = '<10%' | '10–25%' | '25–40%' | '40%+' | "Don't know";
type Maturity = 'Excel' | 'ERP-only' | 'ERP + BI' | 'Advanced + automation';
type Stockouts = 'Low' | 'Medium' | 'High' | "Don't know";

interface Inputs {
  stations: number | '';
  region: Region | '';
  revenue: RevenueBand | '';
  nonFuelShare: NonFuelShare | '';
  maturity: Maturity | '';
  shrinkage: number | '' | 'unknown';
  stockouts: Stockouts | '';
  workingCapitalDays: number | '' | 'unknown';
}

const INITIAL: Inputs = {
  stations: '',
  region: '',
  revenue: '',
  nonFuelShare: '',
  maturity: '',
  shrinkage: '',
  stockouts: '',
  workingCapitalDays: '',
};

// Placeholder midpoint revenues per band, in € millions. Will be
// replaced with calibrated values from public filings (V2 §4.5).
const REVENUE_MID_M: Record<RevenueBand, number> = {
  '<€50M': 30,
  '€50–150M': 95,
  '€150–500M': 300,
  '€500M+': 700,
};

// Top-quartile placeholders. Real numbers come from the methodology
// whitepaper once calibrated. These are SHAPE values for preview.
const TQ = {
  shrinkagePct: { conservative: 1.7, median: 1.5 }, // % of revenue
  nonFuelSharePct: { CE: 32, 'EU-West': 35, 'EU-South': 30, CIS: 22, Other: 28 },
  workingCapitalDays: 30,
};

interface Scenario {
  label: string;
  description: string;
  rangeLow: number;  // € millions / yr
  rangeHigh: number;
  timeline: string;
  what: string[];
}

interface Result {
  stagePlacement: { stage: 1 | 2 | 3; reason: string };
  scenarios: Scenario[];
  topDrivers: { name: string; share: number }[]; // share 0-1
  noGap: boolean;
}

function compute(input: Inputs): Result | null {
  if (!input.stations || !input.region || !input.revenue || !input.maturity) {
    return null;
  }
  const revenueM = REVENUE_MID_M[input.revenue as RevenueBand];
  const region = input.region as Region;

  // Stage placement (heuristic)
  let stage: 1 | 2 | 3;
  let stageReason: string;
  if (input.maturity === 'Excel' || input.maturity === 'ERP-only') {
    stage = 1;
    stageReason = 'Analytical maturity at ERP-only or below — top-quartile peers operate one stage higher.';
  } else if (input.maturity === 'ERP + BI') {
    stage = 2;
    stageReason = 'Reporting in place; top-quartile peers run optimisation as daily cadence, not quarterly.';
  } else {
    stage = 3;
    stageReason = 'Advanced analytics + automation — peers at this maturity often pursue new revenue pools.';
  }

  // Conservative scenario — shrinkage gap only
  const shrinkageInput = typeof input.shrinkage === 'number' ? input.shrinkage : null;
  const shrinkagePct = shrinkageInput ?? 2.5; // assume 2.5% if not provided (preview default)
  const shrinkageGap = Math.max(0, shrinkagePct - TQ.shrinkagePct.median);
  const conservativeMid = (revenueM * shrinkageGap) / 100;

  // Median scenario — + non-fuel attach gap
  const tqNonFuel = TQ.nonFuelSharePct[region] ?? 28;
  const nonFuelMap: Record<NonFuelShare, number> = {
    '<10%': 7,
    '10–25%': 17,
    '25–40%': 32,
    '40%+': 42,
    "Don't know": 18,
  };
  const userNonFuel = input.nonFuelShare ? nonFuelMap[input.nonFuelShare as NonFuelShare] : 18;
  const nonFuelGap = Math.max(0, tqNonFuel - userNonFuel);
  // Each pp of non-fuel share gap ≈ 0.4% of revenue impact (placeholder elasticity)
  const medianMid = conservativeMid + (revenueM * nonFuelGap * 0.004);

  // Aggressive — + working capital release
  const wcInput = typeof input.workingCapitalDays === 'number' ? input.workingCapitalDays : null;
  const wcGap = wcInput ? Math.max(0, wcInput - TQ.workingCapitalDays) : 5;
  // Working capital days released → one-time, but we approximate annual carrying cost benefit
  const wcBenefit = (revenueM / 365) * wcGap * 0.07; // 7% cost of capital placeholder
  const aggressiveMid = medianMid + wcBenefit;

  const range = (mid: number): { low: number; high: number } => ({
    low: mid * 0.7,
    high: mid * 1.3,
  });

  const c = range(conservativeMid);
  const m = range(medianMid);
  const a = range(aggressiveMid);

  const noGap = aggressiveMid < (revenueM * 0.005); // < 0.5% of revenue
  if (noGap) {
    return {
      stagePlacement: { stage, reason: stageReason },
      noGap: true,
      scenarios: [],
      topDrivers: [],
    };
  }

  // Sensitivity (top drivers approximation)
  const totals = {
    shrinkage: conservativeMid,
    nonFuel: medianMid - conservativeMid,
    workingCapital: aggressiveMid - medianMid,
  };
  const sum = totals.shrinkage + totals.nonFuel + totals.workingCapital || 1;
  const drivers = [
    { name: 'Shrinkage gap', share: totals.shrinkage / sum },
    { name: 'Non-fuel attach gap', share: totals.nonFuel / sum },
    { name: 'Working capital release', share: totals.workingCapital / sum },
  ].sort((x, y) => y.share - x.share);

  return {
    stagePlacement: { stage, reason: stageReason },
    noGap: false,
    scenarios: [
      {
        label: 'Conservative',
        description: 'Top-quartile shrinkage only',
        rangeLow: c.low,
        rangeHigh: c.high,
        timeline: '12 months',
        what: ['Stockout/shrinkage forecasting', 'Tighter station-level visibility'],
      },
      {
        label: 'Median',
        description: '+ top-quartile non-fuel attach',
        rangeLow: m.low,
        rangeHigh: m.high,
        timeline: '18 months',
        what: ['Customer/loyalty segmentation', 'Pricing posture', 'Non-fuel category playbook'],
      },
      {
        label: 'Aggressive',
        description: '+ working-capital release',
        rangeLow: a.low,
        rangeHigh: a.high,
        timeline: '24–36 months',
        what: ['Procurement & inventory automation (Optimus)', 'Treasury & WC discipline', 'Network-wide optimisation'],
      },
    ],
    topDrivers: drivers,
  };
}

function formatM(m: number): string {
  if (m < 0.1) return '<€0.1M';
  if (m < 1) return `€${(m).toFixed(1)}M`;
  return `€${(m).toFixed(1)}M`;
}

export default function CalculatorPreview() {
  const [input, setInput] = useState<Inputs>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => (submitted ? compute(input) : null), [submitted, input]);

  function update<K extends keyof Inputs>(key: K, value: Inputs[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  function reset() {
    setInput(INITIAL);
    setSubmitted(false);
  }

  return (
    <div className="cdn-preview">
      <div className="cdn-banner" role="alert">
        <strong>v0 preview.</strong> Benchmark values shown here are
        placeholders for shape-checking the UI — not the calibrated
        sources that the methodology page demands. Numbers below are
        directional only and not for board use. The calibrated tool
        launches in Phase 1.5.
      </div>

      {!submitted ? (
        <form
          className="cdn-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="cdn-grid">
            <label className="cdn-field">
              <span>Number of stations <em>required</em></span>
              <input
                type="number"
                min="1"
                required
                value={input.stations}
                onChange={(e) => update('stations', e.target.value === '' ? '' : Number(e.target.value))}
              />
            </label>

            <label className="cdn-field">
              <span>Region <em>required</em></span>
              <select required value={input.region} onChange={(e) => update('region', e.target.value as Region)}>
                <option value="">Pick one</option>
                {(['CE', 'EU-West', 'EU-South', 'CIS', 'Other'] as Region[]).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="cdn-field">
              <span>Annual revenue band <em>required</em></span>
              <select required value={input.revenue} onChange={(e) => update('revenue', e.target.value as RevenueBand)}>
                <option value="">Pick one</option>
                {(['<€50M', '€50–150M', '€150–500M', '€500M+'] as RevenueBand[]).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="cdn-field">
              <span>Non-fuel revenue share <em>required</em></span>
              <select required value={input.nonFuelShare} onChange={(e) => update('nonFuelShare', e.target.value as NonFuelShare)}>
                <option value="">Pick one</option>
                {(['<10%', '10–25%', '25–40%', '40%+', "Don't know"] as NonFuelShare[]).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="cdn-field">
              <span>Analytical maturity <em>required</em></span>
              <select required value={input.maturity} onChange={(e) => update('maturity', e.target.value as Maturity)}>
                <option value="">Pick one</option>
                {(['Excel', 'ERP-only', 'ERP + BI', 'Advanced + automation'] as Maturity[]).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="cdn-field">
              <span>Current shrinkage rate <em>optional</em></span>
              <div className="cdn-row">
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="20"
                  placeholder="%"
                  disabled={input.shrinkage === 'unknown'}
                  value={typeof input.shrinkage === 'number' ? input.shrinkage : ''}
                  onChange={(e) => update('shrinkage', e.target.value === '' ? '' : Number(e.target.value))}
                />
                <label className="cdn-check">
                  <input
                    type="checkbox"
                    checked={input.shrinkage === 'unknown'}
                    onChange={(e) => update('shrinkage', e.target.checked ? 'unknown' : '')}
                  />
                  Don't know
                </label>
              </div>
            </label>

            <label className="cdn-field">
              <span>Stockout frequency <em>optional</em></span>
              <select value={input.stockouts} onChange={(e) => update('stockouts', e.target.value as Stockouts)}>
                <option value="">Pick one</option>
                {(['Low', 'Medium', 'High', "Don't know"] as Stockouts[]).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>

            <label className="cdn-field">
              <span>Working capital days (DIO) <em>optional</em></span>
              <div className="cdn-row">
                <input
                  type="number"
                  min="0"
                  placeholder="days"
                  disabled={input.workingCapitalDays === 'unknown'}
                  value={typeof input.workingCapitalDays === 'number' ? input.workingCapitalDays : ''}
                  onChange={(e) => update('workingCapitalDays', e.target.value === '' ? '' : Number(e.target.value))}
                />
                <label className="cdn-check">
                  <input
                    type="checkbox"
                    checked={input.workingCapitalDays === 'unknown'}
                    onChange={(e) => update('workingCapitalDays', e.target.checked ? 'unknown' : '')}
                  />
                  Don't know
                </label>
              </div>
            </label>
          </div>

          <div className="cdn-actions">
            <button type="submit" className="cdn-submit">Compute preview</button>
            <p className="cdn-note">
              Inputs stay in your browser. Nothing is transmitted to KKT
              unless you choose to email us.
            </p>
          </div>
        </form>
      ) : result === null ? (
        <div className="cdn-error">
          <p>Please fill in the required fields.</p>
          <button type="button" onClick={reset}>Back to form</button>
        </div>
      ) : result.noGap ? (
        <div className="cdn-output">
          <div className="cdn-block">
            <div className="cdn-eyebrow">Output 1 — Maturity placement</div>
            <p>
              Stage <strong>{result.stagePlacement.stage}</strong> on
              the KKT model. {result.stagePlacement.reason}
            </p>
          </div>

          <div className="cdn-block cdn-block-good">
            <div className="cdn-eyebrow">Output 2 — Where you sit</div>
            <p>
              Your inputs suggest you are operating at or near
              top-quartile on the metrics this calculator inspects.
              Where operators of your size and region typically still
              have gap is in <strong>customer ownership</strong>,
              <strong> decision cadence</strong>, and
              <strong> non-core revenue pools</strong>.
            </p>
            <p>
              These are not quantified by this calculator. The
              diagnostic is the right place to scope them.
            </p>
          </div>

          <div className="cdn-actions">
            <button type="button" onClick={reset} className="cdn-secondary">Recompute</button>
            <a href="/contact" className="cdn-primary">Book a diagnostic</a>
          </div>
        </div>
      ) : (
        <div className="cdn-output">
          <div className="cdn-block">
            <div className="cdn-eyebrow">Output 1 — Maturity placement</div>
            <p>
              Stage <strong>{result.stagePlacement.stage}</strong> on
              the KKT staged model. {result.stagePlacement.reason}
            </p>
          </div>

          <div className="cdn-block">
            <div className="cdn-eyebrow">Output 2 — Three quantified gap scenarios</div>
            <ul className="cdn-scen-list">
              {result.scenarios.map((s) => (
                <li key={s.label}>
                  <div className="cdn-scen-head">
                    <span className="cdn-scen-label">{s.label}</span>
                    <span className="cdn-scen-range">
                      {formatM(s.rangeLow)}–{formatM(s.rangeHigh)} / yr
                    </span>
                  </div>
                  <p className="cdn-scen-desc">{s.description}. Realistic timeline: {s.timeline}.</p>
                  <ul className="cdn-scen-what">
                    {s.what.map((w) => <li key={w}>{w}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="cdn-method-link">
              How we calculate these:&nbsp;
              <a href="/methods/cost-of-doing-nothing">/methods/cost-of-doing-nothing</a>.
              Calibrated benchmark sources arrive in v1.0.
            </p>
          </div>

          <div className="cdn-block">
            <div className="cdn-eyebrow">Sensitivity — top drivers</div>
            <ul className="cdn-drivers">
              {result.topDrivers.map((d) => (
                <li key={d.name}>
                  <span className="cdn-driver-bar" style={{ width: `${Math.max(2, d.share * 100)}%` }} />
                  <span className="cdn-driver-name">{d.name}</span>
                  <span className="cdn-driver-share">{Math.round(d.share * 100)}%</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cdn-actions">
            <button type="button" onClick={reset} className="cdn-secondary">Recompute</button>
            <a href="/contact" className="cdn-primary">Book a diagnostic — walk this with your real data</a>
          </div>
        </div>
      )}
    </div>
  );
}
