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

// The widget ships its own strings for the four full-site locales. A partial
// locale (ru, Optimus page only) falls back to English chrome.
type Locale = 'en' | 'de' | 'et' | 'th';

// UI chrome strings per locale. The backend (advisor.php) answers in the
// user's language via the LLM; this only localises the widget shell.
interface UIStrings {
  eyebrow: string;
  status: string;
  emptyTitle: string;
  emptyBody: string;
  suggested: string[];
  you: string;
  moreOn: string;
  why: string;
  placeholder: string;
  placeholderAttach: string;
  send: string;
  footClose: string;
  footToggle: string;
  panelAria: string;
  closeAria: string;
  attachAria: string;
  attachTitle: string;
  removeAria: string;
  sendAria: string;
  inputAria: string;
  auditDoc: (name: string) => string;
  unsupported: (types: string) => string;
  tooLarge: (kb: number, max: number) => string;
  connDropped: string;
}

const UI: Record<Locale, UIStrings> = {
  en: {
    eyebrow: 'Advisor', status: 'Ask anything',
    emptyTitle: "What's on your mind?",
    emptyBody: "Ask about how we ship, who we work with, when we’d say no, what a diagnostic looks like — anything across KKT or the retail playbook. You can attach a strategy doc or RFP and I’ll audit it in plain language.",
    suggested: ['How does KKT actually deliver?', 'Are you a fit for a mid-sized retailer?', 'What does a two-week diagnostic look like?', 'Why would you turn down work?'],
    you: 'You', moreOn: 'More on:', why: 'Why this answer?',
    placeholder: 'Type a question. Enter to send.', placeholderAttach: 'Optional question — Enter to send.',
    send: 'Send', footClose: 'closes', footToggle: 'toggles',
    panelAria: 'KKT advisor', closeAria: 'Close advisor', attachAria: 'Attach a document',
    attachTitle: 'Attach a document (.txt, .md, .pdf)', removeAria: 'Remove attachment', sendAria: 'Send', inputAria: 'Question to the advisor',
    auditDoc: (n) => `Audit this document: ${n}`,
    unsupported: (t) => `Unsupported file type. We accept ${t}.`,
    tooLarge: (kb, max) => `File is too large (${kb} KB). Max ${max} KB.`,
    connDropped: 'Connection dropped while answering. Try again — usually it just works on retry.',
  },
  de: {
    eyebrow: 'Advisor', status: 'Fragen Sie alles',
    emptyTitle: 'Was beschäftigt Sie?',
    emptyBody: 'Fragen Sie, wie wir liefern, mit wem wir arbeiten, wann wir Nein sagen würden, wie eine Diagnose aussieht — alles rund um KKT oder das Retail-Playbook. Sie können ein Strategiepapier oder RFP anhängen, und ich prüfe es in klarer Sprache.',
    suggested: ['Wie liefert KKT konkret?', 'Passt ihr zu einem mittelständischen Einzelhändler?', 'Wie sieht eine zweiwöchige Diagnose aus?', 'Warum würdet ihr einen Auftrag ablehnen?'],
    you: 'Sie', moreOn: 'Mehr dazu:', why: 'Warum diese Antwort?',
    placeholder: 'Stellen Sie eine Frage. Enter zum Senden.', placeholderAttach: 'Optionale Frage — Enter zum Senden.',
    send: 'Senden', footClose: 'schließt', footToggle: 'schaltet um',
    panelAria: 'KKT-Berater', closeAria: 'Berater schließen', attachAria: 'Dokument anhängen',
    attachTitle: 'Dokument anhängen (.txt, .md, .pdf)', removeAria: 'Anhang entfernen', sendAria: 'Senden', inputAria: 'Frage an den Berater',
    auditDoc: (n) => `Dieses Dokument prüfen: ${n}`,
    unsupported: (t) => `Nicht unterstützter Dateityp. Wir akzeptieren ${t}.`,
    tooLarge: (kb, max) => `Datei ist zu groß (${kb} KB). Max. ${max} KB.`,
    connDropped: 'Die Verbindung brach während der Antwort ab. Versuchen Sie es erneut — meist klappt es beim zweiten Mal.',
  },
  et: {
    eyebrow: 'Advisor', status: 'Küsi mida tahes',
    emptyTitle: 'Mis sul mõttes on?',
    emptyBody: 'Küsi, kuidas me tarnime, kellega töötame, millal ütleksime ei, milline näeb välja diagnostika — kõike KKT või jaemüügi käsiraamatu kohta. Võid lisada strateegiadokumendi või RFP ja ma analüüsin selle lihtsas keeles.',
    suggested: ['Kuidas KKT tegelikult tarnib?', 'Kas sobite keskmise suurusega jaemüüjale?', 'Milline näeb välja kahenädalane diagnostika?', 'Miks te töö tagasi lükkaksite?'],
    you: 'Sina', moreOn: 'Loe lisaks:', why: 'Miks see vastus?',
    placeholder: 'Kirjuta küsimus. Enter saadab.', placeholderAttach: 'Valikuline küsimus — Enter saadab.',
    send: 'Saada', footClose: 'sulgeb', footToggle: 'lülitab',
    panelAria: 'KKT nõustaja', closeAria: 'Sulge nõustaja', attachAria: 'Lisa dokument',
    attachTitle: 'Lisa dokument (.txt, .md, .pdf)', removeAria: 'Eemalda manus', sendAria: 'Saada', inputAria: 'Küsimus nõustajale',
    auditDoc: (n) => `Analüüsi seda dokumenti: ${n}`,
    unsupported: (t) => `Toetamata failitüüp. Aktsepteerime ${t}.`,
    tooLarge: (kb, max) => `Fail on liiga suur (${kb} KB). Max ${max} KB.`,
    connDropped: 'Ühendus katkes vastamise ajal. Proovi uuesti — tavaliselt töötab teisel korral.',
  },
  th: {
    eyebrow: 'Advisor', status: 'ถามอะไรก็ได้',
    emptyTitle: 'มีอะไรอยากถาม?',
    emptyBody: 'ถามได้เลยว่าเราส่งมอบงานอย่างไร ทำงานกับใคร เมื่อไรที่เราจะปฏิเสธงาน การวินิจฉัยเป็นอย่างไร — ทุกอย่างเกี่ยวกับ KKT หรือ retail playbook แนบเอกสารกลยุทธ์หรือ RFP มาก็ได้ ผมจะช่วยตรวจให้ด้วยภาษาที่เข้าใจง่าย',
    suggested: ['KKT ส่งมอบงานจริง ๆ อย่างไร?', 'เหมาะกับผู้ค้าปลีกขนาดกลางไหม?', 'การวินิจฉัยสองสัปดาห์เป็นอย่างไร?', 'ทำไมถึงปฏิเสธงานบางอย่าง?'],
    you: 'คุณ', moreOn: 'อ่านเพิ่มเติม:', why: 'ทำไมจึงตอบแบบนี้?',
    placeholder: 'พิมพ์คำถาม แล้วกด Enter เพื่อส่ง', placeholderAttach: 'คำถามเพิ่มเติม — กด Enter เพื่อส่ง',
    send: 'ส่ง', footClose: 'ปิด', footToggle: 'สลับ',
    panelAria: 'ที่ปรึกษา KKT', closeAria: 'ปิดที่ปรึกษา', attachAria: 'แนบเอกสาร',
    attachTitle: 'แนบเอกสาร (.txt, .md, .pdf)', removeAria: 'ลบไฟล์แนบ', sendAria: 'ส่ง', inputAria: 'คำถามถึงที่ปรึกษา',
    auditDoc: (n) => `ตรวจเอกสารนี้: ${n}`,
    unsupported: (t) => `ไม่รองรับไฟล์ประเภทนี้ เรารองรับ ${t}`,
    tooLarge: (kb, max) => `ไฟล์ใหญ่เกินไป (${kb} KB) สูงสุด ${max} KB`,
    connDropped: 'การเชื่อมต่อหลุดระหว่างตอบ ลองอีกครั้ง — ปกติลองใหม่ก็ใช้ได้',
  },
};

interface MockReply {
  pattern: RegExp;
  reply: string;
}

// Tone: warmer than retail's stoic senior-partner. Use plain prose,
// occasional enthusiasm, light personal voice. Still anti-hype.
const MOCK_REPLIES: MockReply[] = [
  {
    pattern: /fuel.?retail|fuel network|network economy/i,
    reply:
      "For fuel networks we work across the whole network economy, not one product. Seven connected fronts: fuel procurement, price & margin; logistics & supply (railcars, demurrage, depots, delivery); stations, stores & cafés; customers, loyalty & B2B; finance, money & control; supporting functions (HR, MTO procurement, contractors, back-office); and the data & process foundation under all of it.\n\nOptimus — the procurement-and-margin engine — is one embodiment of this (the first two fronts). The diagnostic decides where your network starts.\n\nFull picture on /industries/fuel-retail.",
  },
  {
    pattern: /optimus|red petrol|alfa/i,
    reply:
      "Optimus is the procurement-and-margin engine we built for fuel networks — one embodiment of the broader network economy, not the whole offering. It turns buying from a decision made on experience and availability into one made on data: each morning it pulls live ERP data, forecasts which station × fuel positions will run critical, surfaces inbound delivery conflicts, and produces concrete procurement recommendations — supplier, tonnage, deadline, price. The head of supply works through it in 10–15 minutes.\n\nFull surface on /solutions/optimus; the whole fuel economy on /industries/fuel-retail.",
  },
  {
    pattern: /diagnostic|how.*start|engagement|where.*begin/i,
    reply:
      "Two weeks. Same shape every time. Days 1–3 set scope and access. Days 4–9 are investigation — interviews and data review, with us telling you what we're seeing as we see it (not a surprise reveal at the end). Days 10–12 we synthesise: what to ship, what to leave alone, what proof you need before committing further. Day 14 is the readout, decision-grade.\n\nIf the case for engaging us isn't there, we'll say so — that's part of the deliverable. Honest answers beat a sold project.\n\nFull picture on /approach.",
  },
  {
    pattern: /not.*fit|not.*work|when.*say no|turn.*down|reject/i,
    reply:
      "We would rather tell you early that we're not the best fit than sell you an engagement that won't land. We're probably not your best first call below ~$50M revenue, for strategy with no delivery behind it, with no senior internal owner to inherit the work, for a model promised in production in four weeks, in heavily regulated banking / public sector / defence, or for full outsourcing. In those cases there's usually a better-fit partner, and we'll say so.\n\nHearing that honest read and still wanting to talk is one of the strongest signals we get.",
  },
  {
    pattern: /retail|playbook|canvas|grocery|supermarket/i,
    reply:
      "For mid-sized retailers we tend to start in one of four places: margin recovery and assortment, customer ownership and segmentation, decision cadence (pricing, replenishment, cash discipline as a daily rhythm), or foundational reporting if the diagnostic surfaces that the core is shaky.\n\nThe full open playbook — 43 services across 11 retail domains, with an advisor that walks you through it — lives at retail.kittykat.tech. Treat it as the field guide. Treat /case-studies as the receipts.",
  },
  {
    pattern: /pricing|cost|fee|how much|hourly|day rate|budget/i,
    reply:
      "Honest answer — we don't publish a rate card. Every engagement is scoped from the diagnostic, since what to ship sets the shape, length, and price. The diagnostic itself is fixed-shape: two weeks, scoped fee.\n\nIf you want to skip to a directional number quickly, write us at hello@kittykat.tech with what your business is trying to move. We'll come back fast — usually same or next working day.",
  },
  {
    pattern: /team|who.*you|founder|about|where.*based/i,
    reply:
      "We're Kitty Kat Technologies — KKT on day-to-day surfaces — based in Tallinn, Estonia. A core team across two benches: domain expertise (FMCG/retail, oil & gas, banking, enterprise procurement) and technical delivery (enterprise data, cloud, AI/ML, BI), plus a wider expert bench as needed.\n\nProfiles on /about. The short version: enterprise-grade engineering background (Cisco, Snowflake, Microsoft) plus deep B2B domain and consultancy delivery experience.",
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

export default function Advisor({ locale = 'en' }: { locale?: string }) {
  const t = UI[locale as Locale] ?? UI.en;
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
      setDocError(t.unsupported(ALLOWED_DOC_TYPES.join(' / ')));
      return;
    }
    if (f.size > MAX_DOC_BYTES) {
      setDocError(t.tooLarge(Math.round(f.size / 1024), Math.round(MAX_DOC_BYTES / 1024)));
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
        ? t.connDropped
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
    const messageText = trimmed || (attachment ? t.auditDoc(attachment.name) : '');
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
        aria-label={t.panelAria}
        aria-hidden={!open}
      >
        <header className="kkt-advisor-header">
          <div className="kkt-advisor-title">
            <span className="kkt-advisor-eyebrow">{t.eyebrow}</span>
            <span className="kkt-advisor-status">
              <span className="kkt-advisor-dot" /> {t.status}
            </span>
          </div>
          <button
            type="button"
            className="kkt-advisor-close"
            onClick={() => setOpen(false)}
            aria-label={t.closeAria}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="kkt-advisor-body" ref={listRef}>
          {messages.length === 0 ? (
            <div className="kkt-advisor-empty">
              <h2>{t.emptyTitle}</h2>
              <p>{t.emptyBody}</p>
              <ul className="kkt-advisor-suggestions">
                {t.suggested.map((s) => (
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
                    {m.role === 'user' ? t.you : 'KKT'}
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
                      <span className="cite-label">{t.moreOn}</span>
                      {m.citedPages.map((p) => (
                        <a key={p} href={p} className="cite-link">
                          {p}
                        </a>
                      ))}
                    </div>
                  )}
                  {m.role === 'assistant' && m.reasoningSummary && (
                    <details className="kkt-advisor-reasoning">
                      <summary>{t.why}</summary>
                      <p>{m.reasoningSummary}</p>
                    </details>
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
            aria-label={t.attachAria}
            title={t.attachTitle}
          >
            <span aria-hidden="true">📎</span>
          </button>
          <textarea
            ref={inputRef}
            className="kkt-advisor-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={attachment ? t.placeholderAttach : t.placeholder}
            rows={2}
            aria-label={t.inputAria}
          />
          <button
            type="submit"
            className="kkt-advisor-send"
            disabled={(!input.trim() && !attachment) || thinking}
            aria-label={t.sendAria}
          >
            {t.send}
          </button>
        </form>

        <footer className="kkt-advisor-foot">
          <span className="kkt-advisor-shortcut">
            <kbd>Esc</kbd> {t.footClose} &middot; <kbd>⌘</kbd>+<kbd>K</kbd> {t.footToggle}
          </span>
        </footer>
      </aside>
    </>
  );
}
