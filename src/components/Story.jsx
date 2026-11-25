// Personal-story sections: 4Cs → 4Rs, the embroidery, the constellation,
// beyond-the-resume cards, open source & writing, the talk spotlight and the contact form.
import { useMemo, useState } from 'react';
import { Rv, SecHead, useTilt } from './ui';
import { confetti } from './Wow';
import { EMAILJS } from '../contact.config';
import { fourCs, fourRs, embroideryFront, embroideryBack, stars, beyond, openWork, talk, profile } from '../data';

/* ───────────── 4Cs → 4Rs: an ink-drawn tree ───────────── */
// Roots (the 4Cs) are built underground; the buds (the 4Rs) grow from them.
const ROOT_TIPS = [[170, 525], [390, 572], [610, 572], [830, 525]];
const BLOOMS = [[190, 215], [390, 95], [610, 95], [810, 215]];
const GROUND = 370;

function rootPts([x, y], i) {
  const bend = i % 2 ? 50 : -50;
  return [[500, GROUND], [500 + (x - 500) * 0.12, GROUND + 80], [x + bend, y - 130], [x, y]];
}
function rootPath(p, i) {
  const [p0, p1, p2, p3] = rootPts(p, i);
  return `M${p0[0]} ${p0[1]} C ${p1[0]} ${p1[1]}, ${p2[0]} ${p2[1]}, ${p3[0]} ${p3[1]}`;
}
// Small rootlets that branch off each root at fixed points along it.
function rootlets(p, i) {
  return [[0.38, 1], [0.6, -1], [0.8, 1]].map(([t, side]) => {
    const { x, y, a } = bez(t, rootPts(p, i));
    const r = ((a + side * 55) * Math.PI) / 180;
    const len = 26 - t * 10;
    const ex = x + Math.cos(r) * len;
    const ey = y + Math.sin(r) * len;
    return `M${x.toFixed(1)} ${y.toFixed(1)} Q ${((x + ex) / 2 + side * 4).toFixed(1)} ${((y + ey) / 2).toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  });
}
function branchPts([x, y]) {
  return [[500, 250], [500 + (x - 500) * 0.35, 212], [x + (x < 500 ? 40 : -40), y + 60], [x, y]];
}
function branchPath(b) {
  const [p0, p1, p2, p3] = branchPts(b);
  return `M${p0[0]} ${p0[1]} C ${p1[0]} ${p1[1]}, ${p2[0]} ${p2[1]}, ${p3[0]} ${p3[1]}`;
}
function bez(t, [p0, p1, p2, p3]) {
  const u = 1 - t;
  const pt = (k) => u * u * u * p0[k] + 3 * u * u * t * p1[k] + 3 * u * t * t * p2[k] + t * t * t * p3[k];
  const d = (k) => 3 * u * u * (p1[k] - p0[k]) + 6 * u * t * (p2[k] - p1[k]) + 3 * t * t * (p3[k] - p2[k]);
  return { x: pt(0), y: pt(1), a: (Math.atan2(d(1), d(0)) * 180) / Math.PI };
}
// Fine outlined leaves sitting along each branch, alternating sides.
const LEAVES = BLOOMS.flatMap((b, i) => [0.3, 0.5, 0.72].map((t, j) => {
  const { x, y, a } = bez(t, branchPts(b));
  const side = j % 2 ? 1 : -1;
  return { x, y, a: a + side * 50, k: i * 3 + j };
}));

export function FourCs() {
  const [hot, setHot] = useState(null);
  return (
    <section className="sec" id="fourcs">
      <div className="wrap">
        <SecHead
          no="01 · How I work"
          title={<>The <em>4Cs</em> → 4Rs</>}
          sub="Roots I build every day. What grows from them follows naturally."
        />
        <Rv className={`tree ${hot !== null ? 'feeding' : ''}`}>
          <svg className="tree-svg" viewBox="0 0 1000 640" aria-hidden="true">
            <defs>
              <pattern id="stipple" width="9" height="9" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="3" r=".9" className="stip" />
                <circle cx="7" cy="7" r=".6" className="stip" />
              </pattern>
              <linearGradient id="soilfade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="1" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <mask id="soilmask"><rect x="0" y={GROUND} width="1000" height={640 - GROUND} fill="url(#soilfade)" /></mask>
            </defs>

            {/* ground */}
            <rect x="0" y={GROUND} width="1000" height={640 - GROUND} fill="url(#stipple)" mask="url(#soilmask)" />
            <path d={`M30 ${GROUND} H 970`} className="ground" />
            {[90, 230, 700, 880].map((x) => (
              <path key={x} d={`M${x} ${GROUND} l -4 -10 M${x + 4} ${GROUND} l 2 -13 M${x + 9} ${GROUND} l 5 -9`} className="grass-tuft" />
            ))}

            {/* roots */}
            {ROOT_TIPS.map((p, i) => (
              <g key={i} className={`root-g ${hot === i ? 'on' : ''}`} style={{ '--i': i }}>
                <path d={rootPath(p, i)} className="root" />
                {rootlets(p, i).map((d, k) => <path key={k} d={d} className="rootlet" />)}
                <circle cx={p[0]} cy={p[1]} r="5" className="root-dot" />
              </g>
            ))}

            {/* trunk: tapered ink shape */}
            <path d={`M490 ${GROUND + 2} C 494 330, 496 290, 497 250 L 503 250 C 504 290, 506 330, 510 ${GROUND + 2} Z`} className="trunk" />

            {/* branches + leaves */}
            {BLOOMS.map((p, i) => <path key={i} d={branchPath(p)} className="branch" style={{ '--i': i }} />)}
            {LEAVES.map((l) => (
              <g key={l.k} className="leaf" style={{ '--i': l.k }} transform={`translate(${l.x} ${l.y}) rotate(${l.a})`}>
                <path d="M0 0 Q 9 -7 20 0 Q 9 7 0 0 Z" className="leaf-shape" />
                <path d="M1 0 H 18" className="leaf-vein" />
              </g>
            ))}

            {/* buds */}
            {BLOOMS.map(([x, y], i) => (
              <g key={i} className="bud" style={{ '--i': i, transformOrigin: `${x}px ${y}px` }}>
                <circle cx={x} cy={y} r="19" className="bud-ring" />
                <circle cx={x} cy={y} r="13" className="bud-ring2" />
                <circle cx={x} cy={y} r="7" className="bud-core" />
              </g>
            ))}
          </svg>

          {BLOOMS.map(([x, y], i) => (
            <div
              key={fourRs[i].k}
              className={`tree-r ${x < 500 ? 'l' : 'r'}`}
              style={{ left: `${(x + (x < 500 ? -32 : 32)) / 10}%`, top: `${(y / 640) * 100}%`, '--i': i }}
            >
              <span className="tr-idx">R · 0{i + 1}</span>
              <span className="tr-word">{fourRs[i].k}</span>
            </div>
          ))}
          {ROOT_TIPS.map(([x, y], i) => (
            <button
              type="button"
              key={fourCs[i].k}
              className={`tree-c ${hot === i ? 'on' : ''}`}
              style={{ left: `${x / 10}%`, top: `${((y + 22) / 640) * 100}%`, '--i': i }}
              onMouseEnter={() => setHot(i)}
              onMouseLeave={() => setHot(null)}
              onFocus={() => setHot(i)}
              onBlur={() => setHot(null)}
              onClick={() => setHot(hot === i ? null : i)}
            >
              <span className="tc-idx">C · 0{i + 1}</span>
              <span className="tc-word">{fourCs[i].k}</span>
            </button>
          ))}
          <span className="tree-tag tree-tag-up">What follows</span>
          <span className="tree-tag tree-tag-down">What I build</span>
        </Rv>
        <Rv as="p" className="loom-foot">
          Build the 4Cs, and the 4Rs follow. <em>Earned.</em>
        </Rv>
      </div>
    </section>
  );
}

/* ───────────── The back of the embroidery ───────────── */
function rng(seed) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
const THREAD_COLORS = ['#d9480f', '#1f4e8c', '#2f7d4f', '#e9b949', '#b3260a', '#6b3fa0', '#ff7a3d'];

export function Embroidery() {
  const [back, setBack] = useState(false);
  const tangle = useMemo(() => {
    const r = rng(42);
    return Array.from({ length: 34 }, (_, i) => {
      const pts = Array.from({ length: 5 }, () => [30 + r() * 140, 30 + r() * 140]);
      const d = `M${pts[0][0]} ${pts[0][1]} ` + pts.slice(1).map(([x, y], k) => `Q ${(x + pts[k][0]) / 2 + (r() - 0.5) * 60} ${(y + pts[k][1]) / 2 + (r() - 0.5) * 60} ${x} ${y}`).join(' ');
      return { d, c: THREAD_COLORS[i % THREAD_COLORS.length], w: 0.8 + r() * 1.6 };
    });
  }, []);
  const knots = useMemo(() => {
    const r = rng(7);
    return Array.from({ length: 16 }, () => ({ x: 40 + r() * 120, y: 40 + r() * 120, c: THREAD_COLORS[(r() * THREAD_COLORS.length) | 0] }));
  }, []);

  return (
    <section className="sec" id="embroidery">
      <div className="wrap">
        <SecHead
          no="04 · The other side"
          title={<>The back of the <em>embroidery</em></>}
          sub="At Initium 2026 I spoke about embroidery: everyone sees the polished front, nobody sees the tangled, knotted back that made it possible. So here is the back of mine."
        />
        <Rv className="emb">
          <div className={`hoop ${back ? 'back' : ''}`}>
            <div className="hoop-in">
              <div className="hoop-face hoop-front">
                <svg className="fabric" viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <pattern id="weave" width="4" height="4" patternUnits="userSpaceOnUse">
                      <rect width="4" height="4" fill="#f6f0e2" />
                      <path d="M0 2h4M2 0v4" stroke="#e8dfcb" strokeWidth=".6" />
                    </pattern>
                  </defs>
                  <circle cx="100" cy="100" r="100" fill="url(#weave)" />
                  <g transform="translate(100 30)" fill="none" strokeWidth="1.5" strokeDasharray="2.2 1.5">
                    {[0, 72, 144, 216, 288].map((a) => (
                      <ellipse key={a} cx="0" cy="-7" rx="4.2" ry="7" stroke="#d9480f" transform={`rotate(${a})`} />
                    ))}
                    <circle r="2.6" fill="#e9b949" stroke="#b8860b" strokeDasharray="0" />
                  </g>
                  <path d="M52 168c12-9 24-9 36 0s24 9 36 0 18-8 26-3" fill="none" stroke="#2f7d4f" strokeWidth="1.5" strokeDasharray="2.4 1.6" />
                  <path d="M76 168c-3-7 3-11 8-8M118 168c3-7-3-11-8-8" fill="none" stroke="#2f7d4f" strokeWidth="1.3" strokeDasharray="2 1.4" />
                </svg>
                <ul className="front-list">
                  {embroideryFront.map((t, i) => <li key={t} style={{ '--i': i }}>{t}</li>)}
                </ul>
              </div>
              <div className="hoop-face hoop-back">
                <svg className="fabric" viewBox="0 0 200 200" aria-hidden="true">
                  <defs><clipPath id="hoopclip"><circle cx="100" cy="100" r="100" /></clipPath></defs>
                  <circle cx="100" cy="100" r="100" fill="#efe6d2" />
                  <g clipPath="url(#hoopclip)">
                    {tangle.map((t, i) => (
                      <path key={i} className="tangle" d={t.d} stroke={t.c} strokeWidth={t.w} fill="none" strokeLinecap="round" style={{ '--i': i }} />
                    ))}
                    {knots.map((k, i) => <circle key={i} cx={k.x} cy={k.y} r="2.4" fill={k.c} />)}
                  </g>
                </svg>
                <ul className="back-list">
                  {embroideryBack.map((t, i) => <li key={t} style={{ '--i': i }}>{t}</li>)}
                </ul>
              </div>
            </div>
            <span className="hoop-ring" aria-hidden="true" />
            <span className="hoop-screw" aria-hidden="true" />
          </div>

          <div className="emb-side">
            <p className="emb-q">{back ? '“This is what it actually took.”' : '“This is what people see.”'}</p>
            <button type="button" className="btn" onClick={() => setBack(!back)} aria-pressed={back}>
              {back ? '↺ Show the front' : '↻ Show me the back'}
            </button>
            <p className="emb-note">
              Your embroidery is just beginning. Let it be beautiful. 🌸
            </p>
          </div>
        </Rv>
      </div>
    </section>
  );
}

/* ───────────── Speaking spotlight (inside Achievements) ───────────── */
export function TalkSpotlight() {
  const ref = useTilt(4);
  return (
    <Rv>
      <div className="talk tilt" ref={ref}>
        <div className="talk-mic" aria-hidden="true">🎤</div>
        <blockquote className="talk-q">“{talk.quote}”</blockquote>
        <div className="talk-meta">
          <b>Guest Speaker · {talk.event}</b>
          <span>{talk.where} · {talk.when}</span>
          <span>{talk.what}</span>
        </div>
        <span className="glare" aria-hidden="true" />
      </div>
    </Rv>
  );
}

/* ───────────── Open source & writing ───────────── */
function WorkCard({ w, i }) {
  const ref = useTilt(6);
  return (
    <Rv delay={i * 90} className="ow-wrap">
      <a className={`ow tilt ow-${i}`} ref={ref} href={w.u} target="_blank" rel="noreferrer">
        <div className="ow-top">
          <span className="ow-icon" aria-hidden="true">{w.icon}</span>
          <span className="ow-kind">{w.kind} · {w.where}</span>
        </div>
        <div className="ow-t">{w.t}</div>
        <div className="ow-s">{w.s}</div>
        {w.q && <blockquote className="ow-q">“{w.q}”</blockquote>}
        <div className="ow-foot">
          <span>{w.stat}</span>
          <span className="ow-go">Open ↗</span>
        </div>
        <span className="glare" aria-hidden="true" />
      </a>
    </Rv>
  );
}

export function OpenWork() {
  return (
    <section className="sec" id="openwork">
      <div className="wrap">
        <SecHead
          no="07 · Shared work"
          title={<>Open source, open data <em>&amp; writing</em></>}
          sub="Things I’ve put out into the world for other people to use and read."
        />
        <div className="ows">
          {openWork.map((w, i) => <WorkCard key={w.t} w={w} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Before the code: constellation ───────────── */
export function Constellation() {
  const [sel, setSel] = useState(0);
  const bg = useMemo(() => {
    const r = rng(99);
    return Array.from({ length: 110 }, () => ({ x: r() * 1000, y: r() * 380, s: 0.4 + r() * 1.4, d: r() * 4 }));
  }, []);
  const cur = stars[sel];
  const line = stars.map((s) => `${s.x},${s.y}`).join(' ');

  return (
    <section className="sec" id="story">
      <div className="wrap">
        <SecHead
          no="08 · Before the code"
          title={<>I started learning <em>before school</em></>}
          sub="Abacus, karate, 120+ exams, elocution, dance, the night sky. None of it felt disconnected: curiosity, learning, doing. Tap the stars."
        />
        <Rv className="sky">
          <svg className="sky-svg" viewBox="0 0 1000 380" role="group" aria-label="Constellation of milestones">
            {bg.map((b, i) => (
              <circle key={i} cx={b.x} cy={b.y} r={b.s} className="bgstar" style={{ animationDelay: `${b.d}s` }} />
            ))}
            <polyline className="sky-line" points={line} />
            {stars.map((s, i) => (
              <g
                key={s.t}
                className={`star ${i === sel ? 'on' : ''} ${i <= sel ? 'past' : ''}`}
                transform={`translate(${s.x} ${s.y})`}
                onMouseEnter={() => setSel(i)}
                onClick={() => setSel(i)}
                onFocus={() => setSel(i)}
                tabIndex={0}
                role="button"
                aria-label={`${s.when}: ${s.t}`}
              >
                <circle r="22" className="star-hit" />
                <circle r={i === sel ? 9 : 5.5} className="star-glow" />
                <path d="M0 -9 L2 -2 L9 0 L2 2 L0 9 L-2 2 L-9 0 L-2 -2 Z" className="star-shape" />
              </g>
            ))}
          </svg>
          <div className="sky-card" key={sel}>
            <span className="sky-when">{cur.when} · {sel + 1}/{stars.length}</span>
            <div className="sky-t">{cur.t}</div>
            <div className="sky-s">{cur.s}</div>
            <div className="sky-nav">
              <button type="button" onClick={() => setSel((sel - 1 + stars.length) % stars.length)} aria-label="Previous milestone">←</button>
              <button type="button" onClick={() => setSel((sel + 1) % stars.length)} aria-label="Next milestone">→</button>
            </div>
          </div>
        </Rv>
        <Rv as="p" className="sky-foot">
          And behind every star: my parents, who said yes to everything I ever wanted to learn. 🤍
        </Rv>
      </div>
    </section>
  );
}

/* ───────────── Beyond the resume: sticky notes ───────────── */
const NOTE_COLORS = ['#fff3a8', '#ffd6e0', '#c8f0d8', '#cfe3ff', '#ffe0b8', '#e6d9ff', '#fff3a8', '#d8f3f0'];
const NOTE_TILT = [-2.5, 1.8, -1.2, 2.6, 1.4, -2.2, 2.2, -1.6];

export function Beyond() {
  return (
    <section className="sec" id="beyond">
      <div className="wrap">
        <SecHead
          no="09 · Beyond the resume"
          title={<>Things you won’t find <em>on my CV</em></>}
        />
        <div className="stickies">
          {beyond.map((b, i) => (
            <Rv key={b.t} delay={(i % 4) * 60}>
              <div className="sticky" style={{ background: NOTE_COLORS[i % 8], '--tilt': `${NOTE_TILT[i % 8]}deg` }}>
                <span className="sticky-tape" aria-hidden="true" />
                <span className="sticky-icon" aria-hidden="true">{b.icon}</span>
                <div className="sticky-t">{b.t}</div>
                <div className="sticky-s">{b.s}</div>
              </div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Contact form (EmailJS) ───────────── */
export function ContactForm() {
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('bot-field')) return;
    setState('sending');
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS.service,
          template_id: EMAILJS.template,
          user_id: EMAILJS.publicKey,
          template_params: { name: data.get('name'), email: data.get('email'), message: data.get('message') },
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState('sent');
      form.reset();
      const r = form.getBoundingClientRect();
      confetti(r.left + r.width / 2, r.top + r.height / 2, 90);
    } catch (err) {
      setState('error');
    }
  };

  if (state === 'sent') {
    return (
      <div className="note-sent" role="status">
        <svg viewBox="0 0 120 120" className="sent-stamp" aria-hidden="true">
          <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="60" y="56" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="22" fill="currentColor">Sent!</text>
          <text x="60" y="76" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="2" fill="currentColor">THANK YOU</text>
        </svg>
        <p>Your note is on its way. I’ll write back soon.</p>
        <button type="button" className="copy" onClick={() => setState('idle')}>Send another</button>
      </div>
    );
  }

  return (
    <form className="note-form" name="contact" onSubmit={submit}>
      <p className="hp" aria-hidden="true"><label>Leave empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="nf-row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <label>Message<textarea name="message" rows={4} required placeholder="Hi Chetana, …" /></label>
      <div className="nf-foot">
        <button className="btn" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send note ✉️'}
        </button>
        {state === 'error' && (
          <span className="nf-err">Couldn’t send just now. Please email <a href={`mailto:${profile.email}`}>{profile.email}</a>.</span>
        )}
      </div>
    </form>
  );
}
