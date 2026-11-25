import { useEffect, useMemo, useRef, useState } from 'react';
import me from '../me.jpeg';
import Schematic from './Schematic';
import { Rv, SecHead, Icon, copyText } from './ui';
import {
  profile, now, bigNumbers, domains, projects, skills, experience, honors, certs, archive,
} from '../data';

/* ───────────── Nav ───────────── */
const LINKS = [
  ['experience', 'Experience'],
  ['work', 'Projects'],
  ['proof', 'Skills'],
  ['honors', 'Achievements'],
  ['archive', 'More projects'],
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
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
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
        <a className="mark" href="#top" aria-label="Back to top">
          <span className="mark-logo">c</span>
          <span className="mark-name">Chetana · Field Notes</span>
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
              <span>Field notes</span><span>Vol. 2026</span><span>{profile.location}</span>
            </Rv>
            <Rv as="h1" delay={60}>
              <span className="l1">Palla</span>
              <span className="l2"><em>Chetana</em> Reddy<span className="dot">.</span></span>
            </Rv>
            <Rv as="p" className="lede" delay={140}>
              I build AI systems that <u>show their work</u>: agents that cite their evidence, models measured against honest baselines, and tools that keep an audit trail.
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
            <figure className="polaroid" style={{ margin: 0 }}>
              <span className="tape" aria-hidden="true" />
              <img src={me} alt="Palla Chetana Reddy, smiling, in a dark blazer" width="576" height="1280" />
              <figcaption>hi, I’m Chetana</figcaption>
            </figure>
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
            <div className="band-n">{b.n}</div>
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

export function CaseFiles({ openId, setOpenId }) {
  const [dom, setDom] = useState('all');
  const list = dom === 'all' ? projects : projects.filter((p) => p.domain.includes(dom));
  const open = projects.find((p) => p.id === openId) || null;

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <SecHead
          no="02 · Projects"
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
              <article
                className="case"
                data-code={p.code}
                tabIndex={0}
                role="button"
                aria-label={`Open case file: ${p.title}`}
                onClick={() => setOpenId(p.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenId(p.id); } }}
              >
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
                  <span className="open">Open file <i>→</i></span>
                </div>
              </article>
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
          no="01 · Experience"
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

/* ───────────── Proof matrix ───────────── */
export function Proof({ setOpenId }) {
  const [hl, setHl] = useState(null);
  const groups = useMemo(() => {
    const g = [];
    skills.forEach((s) => {
      let grp = g.find((x) => x.name === s.group);
      if (!grp) { grp = { name: s.group, items: [] }; g.push(grp); }
      grp.items.push(s);
    });
    return g;
  }, []);

  return (
    <section className="sec" id="proof">
      <div className="wrap">
        <SecHead
          no="03 · Skills"
          title={<>Skills, <em>with receipts</em></>}
          sub="No skill bars, no percentages. Each skill links to the projects where I used it. Click a project name to open its file."
        />
        <Rv className="matrix-wrap">
          <table className="matrix">
            <thead>
              <tr>
                <th className="sk" style={{ verticalAlign: 'bottom', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.12em', textTransform: 'uppercase' }}>
                  Skill ↓ / Project →
                </th>
                {projects.map((p) => (
                  <th key={p.id} className={hl === p.id ? 'hl' : ''} onMouseEnter={() => setHl(p.id)} onMouseLeave={() => setHl(null)}>
                    <button onClick={() => setOpenId(p.id)} onFocus={() => setHl(p.id)} onBlur={() => setHl(null)}>{p.title}</button>
                  </th>
                ))}
                <th style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>Uses</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <FragmentRows key={g.name} g={g} hl={hl} setHl={setHl} />
              ))}
            </tbody>
          </table>
        </Rv>
        <div className="matrix-note">
          <span>{skills.length} skills · {projects.length} projects</span>
          <span className="hide-sm">Scroll sideways on small screens →</span>
        </div>
        <Rv className="also">
          <div><h4>Also comfortable with</h4><p>pandas, NumPy, Matplotlib, Streamlit, Pydantic, Socket.IO, Git</p></div>
          <div><h4>Foundations</h4><p>Statistics, probability, linear algebra, data structures, OOP, Java</p></div>
          <div><h4>Knowledge areas</h4><p>GDPR, DPDP Act, ISO 27001, ITIL incident and SLA practice</p></div>
        </Rv>
      </div>
    </section>
  );
}

function FragmentRows({ g, hl, setHl }) {
  return (
    <>
      <tr className="grp"><td colSpan={projects.length + 2}>{g.name}</td></tr>
      {g.items.map((s) => {
        const count = projects.filter((p) => p.skills.includes(s.id)).length;
        return (
          <tr className="r" key={s.id}>
            <th className="sk" scope="row">{s.label}</th>
            {projects.map((p) => (
              <td
                key={p.id}
                className={`c ${hl === p.id ? 'hl' : ''}`}
                onMouseEnter={() => setHl(p.id)}
                onMouseLeave={() => setHl(null)}
              >
                {p.skills.includes(s.id) ? <span className="dot" title={`${s.label} in ${p.title}`} /> : null}
              </td>
            ))}
            <td className="cnt">×{count}</td>
          </tr>
        );
      })}
    </>
  );
}

/* ───────────── Honors + certs ───────────── */
export function Honors() {
  return (
    <section className="sec" id="honors">
      <div className="wrap">
        <SecHead
          no="04 · Achievements"
          title={<>Wins &amp; <em>recognition</em></>}
          sub="Hackathons, academics and a few things from school that I’m still proud of."
        />
        <div className="honors">
          {honors.map((h, i) => (
            <Rv className="honor" key={h.t} delay={(i % 3) * 60}>
              <div className="honor-big">{h.big}</div>
              <div className="honor-tag">{h.tag}{h.year ? ` · ${h.year}` : ''}</div>
              <div className="honor-t">{h.t}</div>
              <div className="honor-s">{h.s}</div>
            </Rv>
          ))}
        </div>

        <Rv className="ledger">
          <h3>Certifications</h3>
          <ol>
            {certs.map((c) => (
              <li key={c.n}><span className="lead">{c.n}</span><span className="by">{c.by}</span></li>
            ))}
          </ol>
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
          no="05 · More projects"
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
        <Rv className="postcard">
          <div className="pc-left">
            <div className="sec-no">06 · Contact</div>
            <h2>Let’s build <em>something</em> worth checking.</h2>
            <p>Open to AI, ML and data engineering roles. If you have a hard problem with messy data, or an agent that needs to prove its answers, I’d like to hear about it.</p>
            <div className="mail">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button className="copy" onClick={() => copyText(profile.email)}>Copy</button>
            </div>
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
                <textPath href="#pm-c">HYDERABAD · INDIA · FIELD NOTES ·</textPath>
              </text>
              <text x="60" y="58" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="20" fill="currentColor">2026</text>
              <text x="60" y="74" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="8" letterSpacing="2" fill="currentColor">POSTED</text>
            </svg>
          </div>
        </Rv>
      </div>
      <div className="wrap">
        <footer className="foot">
          <span>© 2026 {profile.name}</span>
          <span>Set in Fraunces &amp; IBM Plex · hand-built, last updated Nov 2026</span>
        </footer>
      </div>
    </section>
  );
}
