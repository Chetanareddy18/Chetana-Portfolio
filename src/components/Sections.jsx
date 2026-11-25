import { useEffect, useMemo, useRef, useState } from 'react';
import me from '../me.jpeg';
import Schematic from './Schematic';
import { Rv, SecHead, Icon, copyText, useTilt } from './ui';
import { CountUp, Medal, CertRing } from './Wow';
import { TalkSpotlight, ContactForm } from './Story';
import {
  profile, now, bigNumbers, domains, projects, skillGroups, experience, honors, certs, archive,
} from '../data';

/* ───────────── Nav ───────────── */
const LINKS = [
  ['fourcs', '4Cs'],
  ['experience', 'Experience'],
  ['work', 'Projects'],
  ['proof', 'Skills'],
  ['honors', 'Achievements'],
  ['story', 'My story'],
  ['contact', 'Contact'],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || '');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        setActive(e.target.id === 'top' ? '' : e.target.id);
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...LINKS.map(([id]) => id)].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  const isDark = theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const toggle = () => {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
    setTheme(next);
  };

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <a className="mark" href="#top" aria-label="Palla Chetana Reddy, back to top">
          <span className="sig">
            <span className="sig-name">Chetana</span>
            <svg className="sig-swoosh" viewBox="0 0 120 16" aria-hidden="true">
              <path d="M3 11 C 30 4, 62 3, 92 6 S 112 9, 117 4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </span>
        </a>
        <ul className="nav-links">
          {LINKS.map(([id, l]) => (
            <li key={id}><a href={`#${id}`} className={active === id ? 'on' : ''}>{l}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="icon-btn" onClick={toggle} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} title="Day / night">
            {isDark ? Icon.sun : Icon.moon}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ───────────── Hero ───────────── */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Rv className="kicker">
              <span>{profile.role}</span><span>{profile.location}</span><span className="kicker-open"><span className="pulse" /> Open to roles</span>
            </Rv>
            <Rv as="h1" delay={60}>
              <span className="l1">Palla</span>
              <span className="l2"><em>Chetana</em> Reddy<span className="dot">.</span></span>
            </Rv>
            <Rv as="p" className="lede" delay={140}>
              I don’t chase outcomes. <u>I build habits.</u> <span className="lede-sub">When interest drives you, you don’t calculate the cost. You just go.</span>
            </Rv>
            <Rv as="ul" className="spec" delay={200}>
              <li>{profile.role}</li>
              <li>B.Tech CSE · Data Science · ’27</li>
              <li>CGPA <b>{profile.cgpa}</b></li>
              <li>Gold Medal</li>
              <li>Nasiko <b>1st</b></li>
            </Rv>
            <Rv className="cta" delay={260}>
              <a className="btn" href="#work">See my projects {Icon.arrowDown}</a>
              <button className="btn ghost" onClick={() => copyText(profile.email)}>{Icon.mail} {profile.email}</button>
            </Rv>
          </div>

          <Rv className="photo-col" delay={120}>
            <Polaroid />
            <div className="scribble" aria-hidden="true">
              <span>that’s me</span>
              <svg viewBox="0 0 64 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 40 C 20 44, 40 34, 54 14" />
                <path d="M44 14 L55 12 L54 24" />
              </svg>
            </div>
          </Rv>
        </div>

        <Rv as="dl" className="now" delay={100}>
          {now.map((n, i) => (
            <div key={n.k}>
              <dt>{i === 0 && <span className="pulse" />}{n.k}</dt>
              <dd>{n.v}</dd>
            </div>
          ))}
        </Rv>
      </div>
    </section>
  );
}

/* ───────────── Numbers band ───────────── */
export function Band() {
  return (
    <section className="band" aria-label="Numbers from the projects">
      <div className="band-grid">
        {bigNumbers.map((b, i) => (
          <Rv className="band-cell" key={b.n} delay={i * 70}>
            <div className="band-n"><CountUp text={b.n} duration={1800} /></div>
            <div className="band-l">{b.l}</div>
            <div className="band-p">{b.p}</div>
          </Rv>
        ))}
      </div>
    </section>
  );
}

/* ───────────── Case files ───────────── */
function CaseDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="case-dlg"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      aria-labelledby="dlg-title"
    >
      {project && (
        <div className="dlg-in">
          <div className="dlg-head">
            <div>
              <div className="case-kicker">{project.code} · {project.kicker}</div>
              <h3 id="dlg-title">{project.title}</h3>
            </div>
            <button className="icon-btn" onClick={onClose} aria-label="Close">{Icon.close}</button>
          </div>
          <p className="dlg-one">{project.oneLine}</p>
          <div className="dlg-schem"><Schematic flow={project.flow} /></div>
          <div className="dlg-cols">
            <ol className="dlg-pts">
              {project.points.map((p, i) => <li key={i}><span>{p}</span></li>)}
            </ol>
            <aside>
              <div className="dlg-side">
                <h4>Headline</h4>
                <div className="big">{project.metric.n}</div>
                <div className="lbl">{project.metric.l}</div>
              </div>
              <div className="dlg-side">
                <h4>Built with</h4>
                <div className="tags">{project.stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
              </div>
              <div className="dlg-side">
                <h4>When</h4>
                <div className="mono" style={{ fontSize: 13 }}>{project.date}</div>
                {project.team && <div className="dlg-team">{project.team}</div>}
              </div>
              {(project.links.length > 0 || project.note) && (
                <div className="dlg-side">
                  <h4>Links</h4>
                  <div className="dlg-links">
                    {project.links.map((l) => (
                      <a key={l.u} href={l.u} target="_blank" rel="noreferrer">{l.l} <span>↗</span></a>
                    ))}
                  </div>
                  {project.note && <div className="dlg-note">{project.note}</div>}
                </div>
              )}
            </aside>
          </div>
        </div>
      )}
    </dialog>
  );
}

function CaseCard({ p, onOpen }) {
  const ref = useTilt(5);
  return (
    <article
      ref={ref}
      className="case tilt"
      data-code={p.code}
      tabIndex={0}
      role="button"
      aria-label={`Open project: ${p.title}`}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(); } }}
    >
      <span className="glare" aria-hidden="true" />
      <div className="case-top">
        <div className="case-kicker">{p.kicker}</div>
        <div className="case-date">{p.date}</div>
      </div>
      <h3>{p.title}</h3>
      <p>{p.oneLine}</p>
      <Schematic flow={p.flow} />
      <div className="case-metric"><b>{p.metric.n}</b><span>{p.metric.l}</span></div>
      <div className="case-foot">
        <div className="tags">{p.stack.slice(0, 4).map((s) => <span className="tag" key={s}>{s}</span>)}</div>
        <span className="open">Open project <i>→</i></span>
      </div>
    </article>
  );
}

function Polaroid() {
  const ref = useTilt(9);
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`pol-flip ${flip ? 'on' : ''}`}
      onClick={() => setFlip(!flip)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlip(!flip); } }}
      role="button"
      tabIndex={0}
      aria-pressed={flip}
      aria-label="Flip the photo to read the note on the back"
    >
      <figure className="polaroid tilt" ref={ref} style={{ margin: 0 }}>
        <span className="tape" aria-hidden="true" />
        <img src={me} alt="Palla Chetana Reddy, smiling, in a dark blazer" width="576" height="1280" />
        <figcaption>hi, I’m Chetana</figcaption>
        <span className="glare" aria-hidden="true" />
      </figure>
      <div className="pol-back" aria-hidden={!flip}>
        <span className="tape" aria-hidden="true" />
        <p className="pol-note">
          Hi, you found the back! 🌸<br />
          I started learning before I started school, and I never stopped.
          I stay curious, keep things clear, back myself, and show up on the hard days.
          Say hi:<br />
          <b>{profile.email}</b>
        </p>
        <span className="pol-sign">— Chetana</span>
      </div>
      <span className="pol-hint" aria-hidden="true">{flip ? 'tap to flip back' : 'tap me ↻'}</span>
    </div>
  );
}

function Postcard({ children }) {
  const ref = useTilt(3);
  return <div className="postcard tilt" ref={ref}>{children}</div>;
}

export function CaseFiles({ openId, setOpenId }) {
  const [dom, setDom] = useState('all');
  const list = dom === 'all' ? projects : projects.filter((p) => p.domain.includes(dom));
  const open = projects.find((p) => p.id === openId) || null;

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <SecHead
          no="03 · Projects"
          title={<>Selected <em>projects</em></>}
          sub="Twelve projects, each drawn as the pipeline it actually runs. Open one for what I built, the numbers, and where they come from."
        />
        <Rv className="filters" role="tablist" aria-label="Filter projects">
          {domains.map((d) => {
            const count = d.id === 'all' ? projects.length : projects.filter((p) => p.domain.includes(d.id)).length;
            return (
              <button key={d.id} role="tab" aria-selected={dom === d.id} className={`chip ${dom === d.id ? 'on' : ''}`} onClick={() => setDom(d.id)}>
                {d.label}<span className="ct">{count}</span>
              </button>
            );
          })}
        </Rv>
        <div className="cases">
          {list.map((p, i) => (
            <Rv key={p.id} delay={(i % 2) * 80}>
              <CaseCard p={p} onOpen={() => setOpenId(p.id)} />
            </Rv>
          ))}
        </div>
      </div>
      <CaseDialog project={open} onClose={() => setOpenId(null)} />
    </section>
  );
}

/* ───────────── Experience ───────────── */
export function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="wrap">
        <SecHead
          no="02 · Experience"
          title={<>Where I’ve <em>worked</em></>}
          sub="Internships, newest first."
        />
        <div className="log">
          {experience.map((e, i) => (
            <Rv className={`log-row ${i === 0 ? 'current' : ''} ${i > 2 ? 'minor' : ''}`} key={e.org}>
              <div className="log-when">
                {e.when}
                {i === 0 && <span className="log-now"><span className="pulse" /> current</span>}
              </div>
              <div>
                <div className="log-role">{e.role}</div>
                <div className="log-org">{e.org} · {e.place}</div>
              </div>
              <ul>{e.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
            </Rv>
          ))}
        </div>

        <Rv className="edu">
          <div className="edu-tag">Education</div>
          <div className="edu-main">
            <div className="edu-t">B.Tech, Computer Science &amp; Engineering (Data Science)</div>
            <div className="edu-s">Woxsen University, Hyderabad · 2023 – 2027</div>
          </div>
          <div className="edu-stats">
            <div><b>{profile.cgpa}</b><span>CGPA / 10</span></div>
            <div><b>Gold</b><span>Medal, academics</span></div>
          </div>
        </Rv>
      </div>
    </section>
  );
}

/* ───────────── Skills (3D periodic table) ───────────── */
export function Skills() {
  const [focus, setFocus] = useState(null);
  const [shown, setShown] = useState(false);
  const [flipped, setFlipped] = useState(null);
  const stageRef = useRef(null);
  const tableRef = useRef(null);
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  // deal-in animation when the table scrolls into view
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // whole-table tilt that follows the mouse
  useEffect(() => {
    const stage = stageRef.current;
    const table = tableRef.current;
    if (!stage || !table) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(hover: none)').matches) return;
    let raf = 0;
    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        table.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
        table.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
      });
    };
    const onLeave = () => { table.style.setProperty('--ry', '0deg'); table.style.setProperty('--rx', '0deg'); };
    stage.addEventListener('mousemove', onMove);
    stage.addEventListener('mouseleave', onLeave);
    return () => { stage.removeEventListener('mousemove', onMove); stage.removeEventListener('mouseleave', onLeave); cancelAnimationFrame(raf); };
  }, []);

  let no = 0;
  return (
    <section className="sec" id="proof">
      <div className="wrap">
        <SecHead
          no="05 · Skills"
          title={<>My <em>toolkit</em></>}
          sub={`${total} skills across ${skillGroups.length} areas, laid out like a periodic table. ★ marks the ones I use every day. Hover or tap a tile to flip it.`}
        />
        <div className="pt-stage" ref={stageRef}>
          <div className={`pt ${shown ? 'shown' : ''}`} ref={tableRef}>
            {skillGroups.map((g) =>
              g.skills.map(([name, sym, top]) => {
                no += 1;
                const i = no;
                const dim = focus && focus !== g.cat;
                return (
                  <button
                    type="button"
                    key={name}
                    className={`el ${dim ? 'dim' : ''} ${flipped === name ? 'flip' : ''}`}
                    style={{ '--c': g.col, '--i': i }}
                    onClick={() => setFlipped(flipped === name ? null : name)}
                    aria-label={`${name}, ${g.cat}${top ? ', used daily' : ''}`}
                  >
                    <span className="el-in">
                      <span className="el-face el-front">
                        <span className="el-no">{i}{top ? <span className="el-star"> ★</span> : null}</span>
                        <span className="el-sym">{sym}</span>
                        <span className="el-nm">{name}</span>
                      </span>
                      <span className="el-face el-back">
                        <span className="el-back-cat">{g.cat}</span>
                        <span className="el-back-nm">{name}</span>
                        {top ? <span className="el-back-tag">★ daily</span> : null}
                      </span>
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
        <div className="pt-leg">
          {skillGroups.map((g) => (
            <button key={g.cat} className={focus === g.cat ? 'on' : ''} onClick={() => setFocus(focus === g.cat ? null : g.cat)} aria-pressed={focus === g.cat}>
              <i style={{ background: g.col }} />{g.cat}
            </button>
          ))}
          {focus && <button className="pt-reset" onClick={() => setFocus(null)}>show all</button>}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Honors + certs ───────────── */
export function Honors() {
  return (
    <section className="sec" id="honors">
      <div className="wrap">
        <SecHead
          no="06 · Achievements"
          title={<>Wins &amp; <em>recognition</em></>}
          sub="Hackathons, academics and a few things from school that I’m still proud of."
        />
        <Rv className="podium">
          {honors.slice(0, 3).map((h, i) => (
            <Medal key={h.t} h={h} i={i} metal={['gold', 'gold', 'silver'][i]} party={h.big === '1st'} />
          ))}
        </Rv>

        <TalkSpotlight />


        <div className="honors deal">
          {honors.slice(3).map((h, i) => (
            <Rv className="honor" key={h.t} delay={i * 90}>
              <div className="honor-big"><CountUp text={h.big} /></div>
              <div className="honor-tag">{h.tag}{h.year ? ` · ${h.year}` : ''}</div>
              <div className="honor-t">{h.t}</div>
              <div className="honor-s">{h.s}</div>
            </Rv>
          ))}
        </div>

        <Rv>
          <CertRing certs={certs} />
        </Rv>
      </div>
    </section>
  );
}

/* ───────────── Archive ───────────── */
const KIND_LABEL = { all: 'All', ml: 'ML', vision: 'Vision', nlp: 'NLP', agents: 'LLM apps', data: 'Data & BI', security: 'Security', web: 'Web' };

export function Archive() {
  const [kind, setKind] = useState('all');
  const [q, setQ] = useState('');
  const [more, setMore] = useState(false);
  const kinds = ['all', ...Object.keys(KIND_LABEL).filter((k) => k !== 'all' && archive.some((a) => a.kind === k))];
  const sorted = useMemo(() => [...archive].sort((a, b) => b.y.localeCompare(a.y)), []);
  const filtered = sorted.filter((a) => {
    if (kind !== 'all' && a.kind !== kind) return false;
    if (!q) return true;
    const hay = `${a.name} ${a.d} ${a.s}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  });
  const collapsible = kind === 'all' && !q && filtered.length > 10;
  const list = collapsible && !more ? filtered.slice(0, 10) : filtered;

  return (
    <section className="sec" id="archive">
      <div className="wrap">
        <SecHead
          no="10 · More projects"
          title={<>More <em>projects</em></>}
          sub="Coursework, early experiments and side projects. Smaller, but this is where most of the learning happened."
        />
        <Rv className="arc-tools">
          <div className="filters" style={{ margin: 0 }}>
            {kinds.map((k) => (
              <button key={k} className={`chip ${kind === k ? 'on' : ''}`} onClick={() => setKind(k)}>
                {KIND_LABEL[k]}<span className="ct">{k === 'all' ? archive.length : archive.filter((a) => a.kind === k).length}</span>
              </button>
            ))}
          </div>
          <label className="search">
            {Icon.search}
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects or tools" aria-label="Search archive" />
          </label>
        </Rv>
        <div className="arc">
          {list.map((a) => (
            <div className="arc-row" key={a.name}>
              <div className="arc-y">{a.y}</div>
              <div className="arc-n">{a.name}</div>
              <div className="arc-d">{a.d}</div>
              <div className="arc-s">{a.s}</div>
              <div className="arc-l">{a.u ? <a href={a.u} target="_blank" rel="noreferrer">Code ↗</a> : <span className="muted">private</span>}</div>
            </div>
          ))}
          {list.length === 0 && <div className="arc-empty">Nothing matches “{q}”.</div>}
        </div>
        {collapsible && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
            <button className="btn ghost" onClick={() => setMore(!more)} aria-expanded={more}>
              {more ? 'Show fewer' : `Show all ${filtered.length}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ───────────── Contact ───────────── */
export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Rv>
        <Postcard>
          <div className="pc-left">
            <div className="sec-no">11 · Contact</div>
            <h2>Let’s build <em>something</em> worth checking.</h2>
            <p>Open to AI, ML, data and product roles, collaborations and speaking. Write to me directly, or leave a note below and it lands in my inbox.</p>
            <div className="mail">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button className="copy" onClick={() => copyText(profile.email)}>Copy</button>
            </div>
            <ContactForm />
          </div>
          <div className="pc-right">
            <div className="pc-lines">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><span>palla-chetana-reddy ↗</span></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><span>Chetanareddy18 ↗</span></a>
              <div><span>Based in</span><span>{profile.location}</span></div>
              <div><span>Studying</span><span>Woxsen University, ’27</span></div>
            </div>
            <svg className="postmark" viewBox="0 0 120 120" aria-hidden="true">
              <defs><path id="pm-c" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
              <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
              <text fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="3" fill="currentColor">
                <textPath href="#pm-c">HYDERABAD · INDIA · OPEN TO ROLES ·</textPath>
              </text>
              <text x="60" y="58" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="20" fill="currentColor">2026</text>
              <text x="60" y="74" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="8" letterSpacing="2" fill="currentColor">POSTED</text>
            </svg>
          </div>
        </Postcard>
        </Rv>
      </div>
      <div className="wrap">
        <footer className="foot">
          <span>© 2026 {profile.name}</span>
          <span className="foot-love">Powered by my parents, and my loudest cheerleader, my brother Rohit 🤍</span>
          <span>Hand-built · last updated Nov 2026</span>
        </footer>
      </div>
    </section>
  );
}
