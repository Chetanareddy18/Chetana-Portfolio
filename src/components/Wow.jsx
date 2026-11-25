// Site-wide "wow" add-ons: confetti, ink cursor, scroll pencil, magnetic buttons,
// count-up numbers, 3D medals, the certificate ring and the "hire" easter egg.
// Everything is skipped or simplified under prefers-reduced-motion and on touch screens.
import { useEffect, useRef, useState } from 'react';
import { profile } from '../data';
import { toast } from './ui';

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ───────────── Confetti (canvas, no library) ───────────── */
const COLORS = ['#d9480f', '#ff7a3d', '#1f4e8c', '#e9b949', '#2f7d4f', '#1a1814', '#f7dccd'];
export function confetti(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 140) {
  if (reduced()) count = 30;
  const c = document.createElement('canvas');
  c.className = 'confetti-canvas';
  c.width = window.innerWidth * devicePixelRatio;
  c.height = window.innerHeight * devicePixelRatio;
  document.body.appendChild(c);
  const ctx = c.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);
  const parts = Array.from({ length: count }, () => {
    const a = Math.random() * Math.PI * 2;
    const v = 6 + Math.random() * 9;
    return {
      x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 6,
      w: 6 + Math.random() * 6, h: 8 + Math.random() * 10,
      r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.35,
      c: COLORS[(Math.random() * COLORS.length) | 0], life: 0,
    };
  });
  let frame = 0;
  const tick = () => {
    frame += 1;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    parts.forEach((p) => {
      p.vy += 0.32; p.vx *= 0.985; p.vy *= 0.985;
      p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life += 1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.scale(1, Math.cos(p.life * 0.18));
      ctx.globalAlpha = Math.max(0, 1 - p.life / 150);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (frame < 160) requestAnimationFrame(tick);
    else c.remove();
  };
  requestAnimationFrame(tick);
}

/* ───────────── Count-up numbers inside any string ───────────── */
// "24,918" "11 / 12" "56 → 96%" "−57%" "AIR 89" all animate their digits and keep their format.
export function CountUp({ text, duration = 1400 }) {
  const ref = useRef(null);
  const [out, setOut] = useState(text);
  useEffect(() => {
    const el = ref.current;
    const tokens = text.match(/\d[\d,]*(\.\d+)?/g);
    if (!el || !tokens || reduced() || !('IntersectionObserver' in window)) return;
    setOut(text.replace(/\d[\d,]*(\.\d+)?/g, (m) => m.replace(/\d/g, '0')));
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const k = 1 - Math.pow(1 - t, 3);
        setOut(text.replace(/\d[\d,]*(\.\d+)?/g, (m) => {
          const dec = (m.split('.')[1] || '').length;
          const n = parseFloat(m.replace(/,/g, '')) * k;
          const s = dec ? n.toFixed(dec) : Math.round(n).toString();
          return m.includes(',') ? Number(s).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) : s;
        }));
        if (t < 1) raf = requestAnimationFrame(step);
        else setOut(text);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [text, duration]);
  return <span ref={ref} className="countup">{out}</span>;
}

/* ───────────── Ink cursor ───────────── */
export function InkCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!finePointer() || reduced()) return;
    setOn(true);
    document.documentElement.classList.add('ink-cursor');
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      const hot = e.target.closest && e.target.closest('a, button, [role="button"], .el, .coin, .cert, input, label');
      ring.current && ring.current.classList.toggle('hot', !!hot);
    };
    const down = () => ring.current && ring.current.classList.add('press');
    const up = () => ring.current && ring.current.classList.remove('press');
    const leave = () => { x = y = -100; };
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(loop);
    return () => {
      document.documentElement.classList.remove('ink-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.removeEventListener('mouseleave', leave);
      cancelAnimationFrame(raf);
    };
  }, []);
  if (!on) return null;
  return (
    <>
      <div className="ink-ring" ref={ring} aria-hidden="true"><span /></div>
      <div className="ink-dot" ref={dot} aria-hidden="true"><span /></div>
    </>
  );
}

/* ───────────── Pencil scroll progress ───────────── */
export function ScrollPencil() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const upd = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
        ref.current && ref.current.style.setProperty('--p', p.toFixed(4));
      });
    };
    upd();
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
    return () => { window.removeEventListener('scroll', upd); window.removeEventListener('resize', upd); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="pencil" ref={ref} aria-hidden="true">
      <div className="pencil-line" />
      <svg className="pencil-tip" viewBox="0 0 64 14">
        <path d="M0 3h44v8H0z" fill="#e9b949" />
        <path d="M0 3h44v2.6H0z" fill="#f5cf6a" />
        <path d="M44 3l14 4-14 4z" fill="#e8c9a0" />
        <path d="M54 5.9L58 7l-4 1.1z" fill="#1a1814" />
        <path d="M-6 3h6v8h-6z" fill="#d9480f" />
      </svg>
    </div>
  );
}

/* ───────────── Magnetic buttons (event delegation) ───────────── */
export function useMagnetic() {
  useEffect(() => {
    if (!finePointer() || reduced()) return;
    let cur = null;
    const move = (e) => {
      const el = e.target.closest && e.target.closest('.btn, .chip, .sk-switch button, .copy, .icon-btn');
      if (cur && cur !== el) { cur.style.transform = ''; cur = null; }
      if (!el) return;
      cur = el;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `translate(${(dx * 10).toFixed(1)}px, ${(dy * 8).toFixed(1)}px)`;
    };
    const out = (e) => {
      if (cur && !cur.contains(e.relatedTarget)) { cur.style.transform = ''; cur = null; }
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerout', out);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerout', out); };
  }, []);
}

/* ───────────── "hire" easter egg ───────────── */
export function useEasterEgg() {
  useEffect(() => {
    let buf = '';
    const onKey = (e) => {
      if (e.target.closest && e.target.closest('input, textarea')) return;
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-4);
      if (buf === 'hire') {
        buf = '';
        confetti(window.innerWidth / 2, window.innerHeight * 0.35, 220);
        try { navigator.clipboard.writeText(profile.email); } catch (err) { /* clipboard blocked */ }
        toast(`Great choice! ${profile.email} copied`);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}

/* ───────────── 3D medals for the top achievements ───────────── */
const METAL = {
  gold: ['#fff1b8', '#e9b949', '#a8741a'],
  silver: ['#ffffff', '#c9ccd3', '#7d828c'],
  bronze: ['#ffe0c2', '#d08a4c', '#8a4d1f'],
};
export function Medal({ h, metal = 'gold', party = false, i = 0 }) {
  const [flip, setFlip] = useState(false);
  const [m0, m1, m2] = METAL[metal];
  const click = (e) => {
    setFlip((f) => !f);
    if (party) {
      const r = e.currentTarget.getBoundingClientRect();
      confetti(r.left + r.width / 2, r.top + r.height / 3);
    }
  };
  return (
    <div className="medal" style={{ '--d': `${i * 0.4}s` }}>
      <svg className="ribbon" viewBox="0 0 120 90" aria-hidden="true">
        <path d="M14 0h34l26 70H40z" fill="var(--accent)" />
        <path d="M72 0h34L80 70H46z" fill="var(--blue)" />
        <path d="M14 0h34l3 8H17z" fill="rgba(0,0,0,.18)" />
      </svg>
      <button
        type="button"
        className={`coin ${flip ? 'flip' : ''}`}
        onClick={click}
        aria-label={`${h.t}: ${h.s}. ${party ? 'Click for confetti.' : 'Click to flip.'}`}
        style={{ '--m0': m0, '--m1': m1, '--m2': m2 }}
      >
        <span className="coin-in">
          <span className="coin-face coin-front">
            <span className="coin-tag">{h.tag}</span>
            <span className="coin-big">{h.big}</span>
            <span className="coin-year">{h.year || ''}</span>
          </span>
          <span className="coin-edge" aria-hidden="true" />
          <span className="coin-face coin-back">
            <span className="coin-t">{h.t}</span>
            <span className="coin-s">{h.s}</span>
          </span>
        </span>
      </button>
      <div className="medal-cap">
        <div className="medal-t">{h.t}</div>
        <div className="medal-s">{party ? 'click the medal 🎉' : 'click to flip'}</div>
      </div>
    </div>
  );
}

/* ───────────── Certificate ring (3D carousel) ───────────── */
function initials(by) {
  const first = by.split('·')[0].trim();
  if (/^AWS/.test(first)) return 'AWS';
  if (/^IBM/.test(first)) return 'IBM';
  if (/DeepLearning/.test(first)) return 'DL';
  if (/NPTEL/.test(first)) return 'NP';
  if (/Google/.test(first)) return 'G';
  if (/Imperial/.test(first)) return 'IC';
  if (/UC San Diego/.test(first)) return 'UC';
  if (/Tata/.test(first)) return 'T';
  return first.slice(0, 2).toUpperCase();
}

export function CertRing({ certs }) {
  const stage = useRef(null);
  const ring = useRef(null);
  const [list, setList] = useState(false);
  const [front, setFront] = useState(0);
  const n = certs.length;
  const step = 360 / n;

  useEffect(() => {
    if (list) return;
    const el = stage.current;
    const r = ring.current;
    if (!el || !r) return;
    let angle = 0, vel = reduced() ? 0 : -0.08, dragging = false, lastX = 0, hover = false, raf = 0, lastFront = -1;
    const loop = () => {
      if (!dragging) {
        const target = hover ? 0 : (reduced() ? 0 : -0.08);
        vel += (target - vel) * 0.04;
        angle += vel;
      }
      r.style.transform = `translateZ(calc(var(--R) * -1)) rotateY(${angle}deg)`;
      const f = ((Math.round(-angle / step) % n) + n) % n;
      if (f !== lastFront) { lastFront = f; setFront(f); }
      raf = requestAnimationFrame(loop);
    };
    const down = (e) => { dragging = true; lastX = e.clientX; el.setPointerCapture(e.pointerId); el.classList.add('grab'); };
    const move = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX; lastX = e.clientX;
      vel = dx * 0.25; angle += vel;
    };
    const up = () => { dragging = false; el.classList.remove('grab'); };
    const enter = () => { hover = true; };
    const leave = () => { hover = false; };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, [list, n, step]);

  return (
    <div className="certs">
      <div className="certs-head">
        <h3>Certifications <span className="muted mono" style={{ fontSize: 13 }}>· {n}</span></h3>
        <button type="button" className="chip" onClick={() => setList(!list)} aria-pressed={list}>
          {list ? 'Show the 3D ring' : 'Show as a list'}
        </button>
      </div>

      {list ? (
        <ol className="cert-list">
          {certs.map((c) => (
            <li key={c.n}><span className="cert-seal-s">{initials(c.by)}</span><span className="lead">{c.n}</span><span className="by">{c.by}</span></li>
          ))}
        </ol>
      ) : (
        <>
          <div className="ring-stage" ref={stage} style={{ '--n': n }}>
            <div className="ring-tilt"><div className="ring" ref={ring}>
              {certs.map((c, i) => (
                <div
                  className={`cert ${i === front ? 'front' : ''}`}
                  key={c.n}
                  style={{ transform: `rotateY(${i * step}deg) translateZ(var(--R))` }}
                >
                  <div className="cert-top">
                    <span className="cert-seal">{initials(c.by)}</span>
                    <span className="cert-kind">Certificate</span>
                  </div>
                  <div className="cert-name">{c.n}</div>
                  <div className="cert-by">{c.by}</div>
                  <svg className="cert-sign" viewBox="0 0 100 20" aria-hidden="true"><path d="M2 14c10-10 14 4 22-2s8-8 14 0 10 4 18-4 12 6 20 2 10-4 22-2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </div>
              ))}
            </div></div>
          </div>
          <div className="ring-cap" aria-live="polite">
            <span className="ring-hint">drag to spin ↔</span>
            <span><b>{certs[front].n}</b> · {certs[front].by}</span>
          </div>
        </>
      )}
    </div>
  );
}
