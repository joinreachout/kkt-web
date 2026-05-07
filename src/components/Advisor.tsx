/**
 * Advisor — KKT main-site assistant.
 *
 * Streaming Claude-backed (Phase B). Falls back to mock canned responses
 * if the backend isn't available — useful in local dev and during initial
 * deploy before ANTHROPIC_API_KEY lands on the server.
 *
 * Drop-doc audit (Phase D): user can attach a .txt/.md/.pdf file, the
 * backend extracts text and includes it in the prompt. Useful for "audit
 * this strategy doc / RFP / proposal".
 *
 * Voice: warm senior partner. Anti-hype, business-first, but human —
 * not stoic. Occasionally enthusiastic when the topic deserves it.
 */
import { useEffect, useRef, useState } from 'react';

type Role = 'user' | 'assistant';

interface Attachment {
  name: string;
  size: number;
  file: File;
}

interface Message {
  role: Role;
  content: string;
  id: number;
  citedPages?: string[];
  reasoningSummary?: string;
  attachmentName?: string;
}

const ADVISOR_ENDPOINT = '/api/advisor.php';
const ALLOWED_DOC_TYPES = ['.txt', '.md', '.pdf'];
const MAX_DOC_BYTES = 1_500_000; // 1.5 MB — bigger than typical audit doc, smaller than upload limit

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

// Tone: warmer than retail's stoic senior-partner. Use plain prose,
// occasional enthusiasm, light personal voice. Still anti-hype.
const MOCK_REPLIES: MockReply[] = [
  {
    pattern: /optimus|fuel.*retail|red petrol|alfa/i,
    reply:
      "Optimus is the operating-intelligence system we run for fuel networks. Each morning it pulls live ERP data, forecasts which station × fuel positions will hit critical, surfaces inbound delivery conflicts, and produces concrete procurement recommendations — supplier, tonnage, deadline, price. The head of supply works through it in 10–15 minutes, then walks away. Critical events mirror to Telegram independently of the web app.\n\nLive at Alfa Oil (Red Petrol) — 600+ stations, $500M revenue — and at one Central Asian network. Same engine, different scale.\n\nFull surface on /solutions/optimus.",
  },
  {
    pattern: /diagnostic|how.*start|engagement|where.*begin/i,
    reply:
      "Two weeks. Same shape every time. Days 1–3 set scope and access. Days 4–9 are investigation — interviews and data review, with us telling you what we're seeing as we see it (not a surprise reveal at the end). Days 10–12 we synthesise: what to ship, what to leave alone, what proof you need before committing further. Day 14 is the readout, decision-grade.\n\nIf the case for engaging us isn't there, we'll say so — that's part of the deliverable. Honest answers beat a sold project.\n\nFull picture on /approach.",
  },
  {
    pattern: /not.*fit|not.*work|when.*say no|turn.*down|reject/i,
    reply:
      "We turn down work where we wouldn't be the right partner. Below ~$50M revenue our delivery model costs more than we can create. We don't write decks without delivery. We can't ship into companies with no senior internal data lead — the project will fail after we leave. We won't promise a model in production in four weeks. We don't work in heavily regulated banking, public sector, or defence. We're not a body shop.\n\nThe full list lives on /not-for-you. Reading that page and still wanting to talk is one of the strongest signals we get.",
  },
  {
    pattern: /retail|playbook|canvas|grocery|supermarket/i,
    reply:
      "For mid-sized retailers we tend to start in one of four places: margin recovery and assortment, customer ownership and segmentation, decision cadence (pricing, replenishment, cash discipline as a daily rhythm), or foundational reporting if the diagnostic surfaces that the core is shaky.\n\nThe full open playbook — 30 services across 11 retail domains, with an advisor that walks you through it — lives at retail.kittykat.tech. Treat it as the field guide. Treat /case-studies as the receipts.",
  },
  {
    pattern: /pricing|cost|fee|how much|hourly|day rate|budget/i,
    reply:
      "Honest answer — we don't publish a rate card. Every engagement is scoped from the diagnostic, since what to ship sets the shape, length, and price. The diagnostic itself is fixed-shape: two weeks, scoped fee.\n\nIf you want to skip to a directional number quickly, write us at hello@kittykat.tech with what your business is trying to move. We'll come back fast — usually same or next working day.",
  },
  {
    pattern: /team|who.*you|founder|about|where.*based/i,
    reply:
      "We're Kitty Kat Technologies — KKT on day-to-day surfaces — based in Tallinn, Estonia. Three named people on the team today, with two more coming on board. We work where AI and PMO discipline earn their place against measurable outcomes.\n\nProfiles on /about. The short version: enterprise-grade engineering background (Cisco Meraki, Snowflake, Microsoft) plus deep B2B consultancy delivery experience.",
  },
];

const FALLBACK_REPLY =
  "Quick honesty — backend isn't connected here, so I'm running on canned responses for testing the interface. When the Claude backend lands (next deploy), I'll know the full site, can audit a doc you attach, and will show what I'm citing. For now, try one of the suggested prompts above, or write hello@kittykat.tech for anything specific.";

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
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const [docError, setDocError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Cmd/Ctrl+K to toggle, Esc to close.
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

  // Custom event so any element on site can open the panel (with optional prefill).
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

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 60);
  }, [open]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, thinking]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = ''; // allow same-file re-pick later
    if (!f) return;

    const lower = f.name.toLowerCase();
    const okType = ALLOWED_DOC_TYPES.some((ext) => lower.endsWith(ext));
    if (!okType) {
      setDocError(`Unsupported file type. We accept ${ALLOWED_DOC_TYPES.join(' / ')}.`);
      return;
    }
    if (f.size > MAX_DOC_BYTES) {
      setDocError(`File is too large (${Math.round(f.size / 1024)} KB). Max ${Math.round(MAX_DOC_BYTES / 1024)} KB.`);
      return;
    }
    setAttachment({ name: f.name, size: f.size, file: f });
    setDocError(null);
  }

  async function streamFromBackend(text: string, attached: Attachment | null) {
    const userMsg: Message = {
      role: 'user',
      content: text,
      id: nextId++,
      attachmentName: attached?.name,
    };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setAttachment(null);
    setThinking(true);

    // Placeholder assistant message we mutate as tokens arrive.
    const assistantId = nextId++;
    const assistantMsg: Message = { role: 'assistant', content: '', id: assistantId };
    setMessages((m) => [...m, assistantMsg]);

    let accumulated = '';
    let backendOk = false;

    try {
      let body: BodyInit;
      const headers: Record<string, string> = {};
      if (attached) {
        const fd = new FormData();
        fd.append('message', text);
        fd.append('doc', attached.file);
        body = fd;
      } else {
        body = JSON.stringify({ message: text });
        headers['Content-Type'] = 'application/json';
      }

      const res = await fetch(ADVISOR_ENDPOINT, { method: 'POST', headers, body });
      if (!res.ok || !res.body) {
        throw new Error(`Backend ${res.status}`);
      }
      backendOk = true;

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buf = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });

        // SSE frames terminated by \n\n
        let pos: number;
        while ((pos = buf.indexOf('\n\n')) !== -1) {
          const frame = buf.slice(0, pos);
          buf = buf.slice(pos + 2);
          const dataLine = frame.split(/\r?\n/).find((l) => l.startsWith('data:'));
          if (!dataLine) continue;
          let parsed: any;
          try {
            parsed = JSON.parse(dataLine.replace(/^data:\s*/, ''));
          } catch {
            continue;
          }
          if (parsed.type === 'text' && typeof parsed.text === 'string') {
            accumulated += parsed.text;
            setMessages((m) =>
              m.map((msg) => (msg.id === assistantId ? { ...msg, content: accumulated } : msg)),
            );
          } else if (parsed.type === 'done') {
            // Parse meta block from full response (text after <<<META>>>).
            const fullText: string = parsed.fullText ?? accumulated;
            const metaIdx = fullText.indexOf('<<<META>>>');
            let citedPages: string[] | undefined;
            let reasoningSummary: string | undefined;
            if (metaIdx >= 0) {
              const metaJson = fullText.slice(metaIdx + 10).trim();
              try {
                const meta = JSON.parse(metaJson);
                if (Array.isArray(meta.cited_pages)) citedPages = meta.cited_pages;
                if (typeof meta.reasoning_summary === 'string') reasoningSummary = meta.reasoning_summary;
              } catch {
                /* meta unparseable — ignore, leave answer as-is */
              }
            }
            setMessages((m) =>
              m.map((msg) =>
                msg.id === assistantId
                  ? { ...msg, citedPages, reasoningSummary }
                  : msg,
              ),
            );
          }
        }
      }
    } catch (err) {
      // Backend missing / 404 / network — fall back to mock.
      const reply = backendOk
        ? "Connection dropped while answering. Try again — usually it just works on retry."
        : findMockReply(text);
      setMessages((m) =>
        m.map((msg) => (msg.id === assistantId ? { ...msg, content: reply } : msg)),
      );
    } finally {
      setThinking(false);
    }
  }

  function send(text: string) {
    const trimmed = text.trim();
    if ((!trimmed && !attachment) || thinking) return;
    const messageText = trimmed || (attachment ? `Audit this document: ${attachment.name}` : '');
    streamFromBackend(messageText, attachment);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <>
      {open && (
        <div
          className="kkt-advisor-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

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
              <span className="kkt-advisor-dot" /> Ask anything
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
              <h2>What's on your mind?</h2>
              <p>
                Ask about how we ship, who we work with, when we&rsquo;d say
                no, what a diagnostic looks like — anything across KKT or
                the retail playbook. You can attach a strategy doc or RFP
                and I&rsquo;ll audit it in plain language.
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
                  {m.attachmentName && (
                    <div className="kkt-advisor-msg-attachment">
                      <span className="paperclip" aria-hidden="true">📎</span>
                      <span>{m.attachmentName}</span>
                    </div>
                  )}
                  {m.content && (
                    <div className="kkt-advisor-msg-content">
                      {m.content
                        .split(/<<<META>>>/)[0]
                        .split('\n\n')
                        .map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                    </div>
                  )}
                  {m.citedPages && m.citedPages.length > 0 && (
                    <div className="kkt-advisor-msg-cites">
                      <span className="cite-label">More on:</span>
                      {m.citedPages.map((p) => (
                        <a key={p} href={p} className="cite-link">
                          {p}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              {thinking && messages[messages.length - 1]?.role === 'assistant' && !messages[messages.length - 1]?.content && (
                <li className="kkt-advisor-msg role-assistant thinking-bubble">
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

        {attachment && (
          <div className="kkt-advisor-attachment-row">
            <span className="paperclip" aria-hidden="true">📎</span>
            <span className="kkt-advisor-attachment-name">{attachment.name}</span>
            <span className="kkt-advisor-attachment-size">
              {Math.round(attachment.size / 1024)} KB
            </span>
            <button
              type="button"
              className="kkt-advisor-attachment-remove"
              onClick={() => setAttachment(null)}
              aria-label="Remove attachment"
            >
              ×
            </button>
          </div>
        )}
        {docError && (
          <div className="kkt-advisor-doc-error">{docError}</div>
        )}

        <form className="kkt-advisor-form" onSubmit={handleSubmit}>
          <input
            ref={fileInputRef}
            type="file"
            accept={ALLOWED_DOC_TYPES.join(',')}
            onChange={handleFilePick}
            style={{ display: 'none' }}
          />
          <button
            type="button"
            className="kkt-advisor-attach"
            onClick={() => fileInputRef.current?.click()}
            disabled={thinking || !!attachment}
            aria-label="Attach a document"
            title="Attach a document (.txt, .md, .pdf)"
          >
            <span aria-hidden="true">📎</span>
          </button>
          <textarea
            ref={inputRef}
            className="kkt-advisor-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={attachment ? 'Optional question — Enter to send.' : 'Type a question. Enter to send.'}
            rows={2}
            aria-label="Question to the advisor"
          />
          <button
            type="submit"
            className="kkt-advisor-send"
            disabled={(!input.trim() && !attachment) || thinking}
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
