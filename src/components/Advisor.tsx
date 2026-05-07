/**
 * Advisor — KKT main-site assistant.
 *
 * Phase A scaffold (this file): full UI, Cmd+K trigger, history, suggested
 * prompts, mock responses. No backend yet.
 *
 * Phase B will swap the mock turn for a fetch to /api/advisor.php which
 * streams Claude tokens. Lifted pattern from retail/api/advisor.php.
 *
 * Voice: senior partner, anti-hype. If it doesn't know, it says so.
 */
import { useEffect, useRef, useState } from 'react';

type Role = 'user' | 'assistant';

interface Message {
  role: Role;
  content: string;
  id: number;
}

const SUGGESTED: string[] = [
  'What is Optimus?',
  'Are you a fit for a mid-sized retailer?',
  'What does a two-week diagnostic look like?',
  'Why would you turn down work?',
];

interface MockReply {
  pattern: RegExp;
  reply: string;
}

const MOCK_REPLIES: MockReply[] = [
  {
    pattern: /optimus|fuel.*retail|red petrol|alfa/i,
    reply:
      "Optimus is our operating-intelligence system for fuel-distribution networks. Each morning it pulls live ERP data, forecasts station × fuel-type stockout positions, surfaces inbound-delivery conflicts, and produces concrete procurement recommendations — supplier, tonnage, deadline, price. The head of supply works through it in 10–15 minutes. Critical events mirror to Telegram. Live at Alfa Oil (600+ stations, $500M revenue) and one Central Asian deployment.\n\nFull surface: /solutions/optimus.",
  },
  {
    pattern: /diagnostic|how.*start|engagement|where.*begin/i,
    reply:
      "Two weeks. Fixed shape. Days 1–3 we set scope and access. Days 4–9 we run the investigation — interviews and data review, telling you what we're seeing as we see it. Days 10–12 we synthesise: what to ship, what to leave alone, what proof you need. Day 14 is a decision-grade readout to the senior team. If the case for an engagement isn't there, we say so.\n\nFull picture on /approach.",
  },
  {
    pattern: /not.*fit|not.*work|when.*say no|turn.*down|reject/i,
    reply:
      'We say no when we are not the right partner. Below ~$50M in revenue our delivery model costs more than we can create. We do not write decks without delivery. We do not ship into companies with no senior internal data lead. We do not promise a model in production in four weeks. We do not work in heavily regulated banking, public sector, or defence. We are not a body shop.\n\nFull list: /not-for-you. Reading that page and still wanting to talk is a strong signal.',
  },
  {
    pattern: /retail|playbook|canvas/i,
    reply:
      'For mid-sized retailers we ship across margin recovery, customer ownership, decision cadence, and foundational data. The full open playbook — 30 services across 11 retail domains, with an advisor that walks you through it — lives at retail.kittykat.tech. Treat it as the field guide; treat /case-studies as the receipts.',
  },
  {
    pattern: /pricing|cost|fee|how much|hourly|day rate/i,
    reply:
      "We don't publish a rate card. Engagements are scoped from the diagnostic — what to ship sets the shape, length, and price. The diagnostic itself is fixed-shape: two weeks, scoped fee. If you want to skip to the number, write us at hello@kittykat.tech with what your business is trying to move and we'll get to a directional figure quickly.",
  },
  {
    pattern: /team|who.*you|founder|about/i,
    reply:
      'We are Kitty Kat Technologies — KKT on conversion-critical surfaces — based in Tallinn, Estonia. Three named people on the team today, with two more landing soon. Profiles on /about. We work where AI and PMO discipline earn their place against measurable outcomes.',
  },
];

const FALLBACK_REPLY =
  "Honest answer — backend isn't wired yet, so I'm running on canned responses while we test the interface. Soon this will be a Claude-backed advisor that knows the full site, can audit a doc you drop in, and shows its reasoning. For now, try one of the suggested prompts or email hello@kittykat.tech for anything specific.";

function findMockReply(input: string): string {
  for (const m of MOCK_REPLIES) {
    if (m.pattern.test(input)) return m.reply;
  }
  return FALLBACK_REPLY;
}

let nextId = 1;

export default function Advisor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Cmd/Ctrl+K to open, Esc to close, listen even when closed.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isOpenShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      if (isOpenShortcut) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === 'Escape' && open) {
        e.preventDefault();
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  // Custom event so any element on the site can open the panel
  // (and optionally pre-fill the input).
  useEffect(() => {
    const opener = (e: Event) => {
      const ce = e as CustomEvent<{ prefill?: string }>;
      setOpen(true);
      if (ce.detail?.prefill) {
        setInput(ce.detail.prefill);
      }
    };
    window.addEventListener('kkt:advisor:open', opener as EventListener);
    return () => window.removeEventListener('kkt:advisor:open', opener as EventListener);
  }, []);

  // Focus input when panel opens.
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  // Auto-scroll on new message.
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, thinking]);

  // Lock body scroll when panel open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;

    const userMsg: Message = { role: 'user', content: trimmed, id: nextId++ };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setThinking(true);

    // Mock thinking delay + canned reply. Replace with fetch in Phase B.
    const delay = 600 + Math.random() * 700;
    setTimeout(() => {
      const reply = findMockReply(trimmed);
      const assistantMsg: Message = { role: 'assistant', content: reply, id: nextId++ };
      setMessages((m) => [...m, assistantMsg]);
      setThinking(false);
    }, delay);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Enter sends; Shift+Enter inserts a newline.
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="kkt-advisor-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <aside
        className={`kkt-advisor-panel ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-label="KKT advisor"
        aria-hidden={!open}
      >
        <header className="kkt-advisor-header">
          <div className="kkt-advisor-title">
            <span className="kkt-advisor-eyebrow">Advisor</span>
            <span className="kkt-advisor-status">
              <span className="kkt-advisor-dot" /> Mock mode
            </span>
          </div>
          <button
            type="button"
            className="kkt-advisor-close"
            onClick={() => setOpen(false)}
            aria-label="Close advisor"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="kkt-advisor-body" ref={listRef}>
          {messages.length === 0 ? (
            <div className="kkt-advisor-empty">
              <h2>Ask anything about how KKT ships.</h2>
              <p>
                What we do, who we work with, when we&rsquo;d say no, what a
                diagnostic looks like. The advisor runs on canned responses
                today — Claude backend lands soon.
              </p>
              <ul className="kkt-advisor-suggestions">
                {SUGGESTED.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      className="kkt-advisor-suggest"
                      onClick={() => send(s)}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ol className="kkt-advisor-messages">
              {messages.map((m) => (
                <li key={m.id} className={`kkt-advisor-msg role-${m.role}`}>
                  <div className="kkt-advisor-msg-role">
                    {m.role === 'user' ? 'You' : 'KKT'}
                  </div>
                  <div className="kkt-advisor-msg-content">
                    {m.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </li>
              ))}
              {thinking && (
                <li className="kkt-advisor-msg role-assistant">
                  <div className="kkt-advisor-msg-role">KKT</div>
                  <div className="kkt-advisor-msg-content thinking">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </li>
              )}
            </ol>
          )}
        </div>

        <form className="kkt-advisor-form" onSubmit={handleSubmit}>
          <textarea
            ref={inputRef}
            className="kkt-advisor-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a question. Enter to send."
            rows={2}
            aria-label="Question to the advisor"
          />
          <button
            type="submit"
            className="kkt-advisor-send"
            disabled={!input.trim() || thinking}
            aria-label="Send"
          >
            Send
          </button>
        </form>

        <footer className="kkt-advisor-foot">
          <span className="kkt-advisor-shortcut">
            <kbd>Esc</kbd> closes &middot; <kbd>⌘</kbd>+<kbd>K</kbd> toggles
          </span>
        </footer>
      </aside>
    </>
  );
}
