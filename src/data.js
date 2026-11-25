// Every number on this site comes from a repo, a README, a test run, or a verified resume line.
// If you add a project, add the number's source in `source` so it stays defensible.

export const profile = {
  name: 'Palla Chetana Reddy',
  first: 'Chetana',
  role: 'AI & ML Engineer',
  email: 'pallachetana@gmail.com',
  github: 'https://github.com/Chetanareddy18',
  linkedin: 'https://www.linkedin.com/in/palla-chetana-reddy/',
  location: 'Hyderabad, India',
  school: 'B.Tech CSE (Data Science), Woxsen University',
  grad: '2027',
  cgpa: '9.63',
};

export const now = [
  { k: 'Now', v: 'Founder & CEO, Oronzo LLP' },
  { k: 'Last shipped', v: 'Precedent Ops Watch, Nov 2026' },
  { k: 'Recent win', v: 'Nasiko Buildathon 2026, 1st place' },
];

export const bigNumbers = [
  { n: '24,918', l: 'real ServiceNow incidents modelled', p: 'TriageX' },
  { n: '11 / 12', l: 'true causal links recovered, 0 false', p: 'KAIROS' },
  { n: '56 → 96%', l: 'agent decision accuracy with memory', p: 'Precedent' },
  { n: '−57%', l: 'tokens on tool definitions', p: 'Compact Tool Schemas' },
  { n: '383,540', l: 'ICU vital-sign rows simulated', p: 'ICU Simulator' },
];

// Domains used for filtering
export const domains = [
  { id: 'all', label: 'All' },
  { id: 'agents', label: 'Agents & LLMs' },
  { id: 'ml', label: 'ML & Data' },
  { id: 'security', label: 'Security' },
  { id: 'fullstack', label: 'Full-stack' },
];

// Skills section. Each skill: [name, symbol for the periodic table, strongest? (★)].
// `col` = periodic-table tile colour, `note` = sticky-note colour.
export const skillGroups = [
  { cat: 'Languages', col: '#f4c7a1', note: '#fff3a8', skills: [['Python', 'Py', 1], ['SQL', 'Sq', 1], ['TypeScript', 'Ts'], ['JavaScript', 'Js'], ['Java', 'Jv']] },
  { cat: 'Machine learning', col: '#c9dbf0', note: '#ffd6e0', skills: [['scikit-learn', 'Sk', 1], ['Classification', 'Cl'], ['Regression', 'Rg'], ['Anomaly detection', 'Ad'], ['Forecasting', 'Fc'], ['Causal inference', 'Ci'], ['Feature engineering', 'Fe'], ['Reinforcement learning', 'Rl']] },
  { cat: 'GenAI', col: '#e3d2f0', note: '#c8f0d8', skills: [['LLMs', 'Lm'], ['LangGraph', 'Lg', 1], ['RAG', 'Rag', 1], ['Embeddings', 'Em'], ['FAISS', 'Fs'], ['Pinecone', 'Pc'], ['Prompt engineering', 'Pe'], ['LLM evaluation', 'Ev']] },
  { cat: 'Data', col: '#cfe8d6', note: '#cfe3ff', skills: [['pandas', 'Pd', 1], ['NumPy', 'Np'], ['ETL', 'Et'], ['Data quality', 'Dq'], ['Star schema', 'Ss'], ['Power BI', 'Bi'], ['Matplotlib', 'Mp']] },
  { cat: 'Backend & web', col: '#f6dfa8', note: '#ffe0b8', skills: [['FastAPI', 'Fa', 1], ['REST APIs', 'Api'], ['Node.js', 'No'], ['Express', 'Ex'], ['React', 'Re'], ['Streamlit', 'St']] },
  { cat: 'Databases', col: '#d6e3e8', note: '#e6d9ff', skills: [['PostgreSQL', 'Pg'], ['MySQL', 'My'], ['SQLite', 'Sl'], ['DuckDB', 'Dk'], ['MongoDB', 'Mo'], ['InfluxDB', 'In']] },
  { cat: 'Ship it', col: '#f3cfcf', note: '#fff3a8', skills: [['Docker', 'Do', 1], ['GitHub Actions', 'Ga'], ['pytest', 'Pt'], ['Git', 'Gt'], ['Claude Code', 'Cc']] },
  { cat: 'Security', col: '#e2ddd2', note: '#d8f3f0', skills: [['JWT auth', 'Jw'], ['PII redaction', 'Pi'], ['Rate limiting', 'Rt'], ['GDPR', 'Gd'], ['DPDP Act', 'Dp'], ['ISO 27001', 'Iso']] },
];

// Skill keys used by the proof matrix
export const skills = [
  { id: 'python', label: 'Python', group: 'Languages' },
  { id: 'sql', label: 'SQL', group: 'Languages' },
  { id: 'ts', label: 'TypeScript / JavaScript', group: 'Languages' },
  { id: 'react', label: 'React', group: 'Build' },
  { id: 'node', label: 'Node.js & Express', group: 'Build' },
  { id: 'fastapi', label: 'FastAPI & REST APIs', group: 'Build' },
  { id: 'sklearn', label: 'scikit-learn', group: 'ML' },
  { id: 'ts-anom', label: 'Time series & anomaly detection', group: 'ML' },
  { id: 'causal', label: 'Causal inference', group: 'ML' },
  { id: 'rl', label: 'Reinforcement learning', group: 'ML' },
  { id: 'agents', label: 'LLM agents & tool calling', group: 'GenAI' },
  { id: 'rag', label: 'RAG, embeddings, vector search', group: 'GenAI' },
  { id: 'llmeval', label: 'LLM evaluation', group: 'GenAI' },
  { id: 'mongo', label: 'MongoDB', group: 'Data' },
  { id: 'sqlstores', label: 'PostgreSQL, SQLite, DuckDB', group: 'Data' },
  { id: 'influx', label: 'InfluxDB', group: 'Data' },
  { id: 'bi', label: 'Star schema & Power BI', group: 'Data' },
  { id: 'docker', label: 'Docker', group: 'Ship' },
  { id: 'testing', label: 'pytest & GitHub Actions CI', group: 'Ship' },
  { id: 'sec', label: 'App security (JWT, hashing, PII)', group: 'Ship' },
];

export const projects = [
  {
    id: 'compact',
    code: 'CF-01',
    title: 'Compact Tool Schemas',
    kicker: 'Nasiko Buildathon 2026 · 1st place',
    date: 'Oct 2026',
    team: 'Team Compact: Chetana, Palla Rohit Reddy, Varshini Yadav Nasaram',
    domain: ['agents'],
    oneLine:
      'Shrinks the tool definitions an AI-agent router sends to a model, so every call costs fewer tokens and still decodes cleanly.',
    metric: { n: '−57%', l: 'tokens on tool definitions' },
    flow: [
      { t: 'Tool specs', s: 'JSON schemas', k: 'io' },
      { t: 'Compactor', s: 'short form', k: 'proc' },
      { t: 'Router', s: 'Nasiko runtime', k: 'proc' },
      { t: '5 models', s: 'live test', k: 'store' },
      { t: 'Decode', s: 'native call', k: 'guard' },
    ],
    points: [
      'Built a compact format for tool definitions inside Nasiko, an open-source runtime that routes coding agents to models.',
      'Cut tool-definition tokens by 57% (22.9% across the whole request).',
      'Live test on qwen3-235b, gpt-oss-120b, deepseek-v3.2, mistral-large-3 and kimi-k2.5: 15 of 15 compact calls decoded cleanly, with the same match rate as the native format.',
      'Submitted as PR #232 to Nasiko-Labs/nasiko with all CI checks green. The team won 1st place in the online edition.',
    ],
    stack: ['LLM tool calling', 'JSON Schema', 'Token benchmarking', 'Open-source PR'],
    skills: ['llmeval', 'agents', 'testing'],
    links: [{ l: 'Pull request #232', u: 'https://github.com/Nasiko-Labs/nasiko/pull/232' }],
  },
  {
    id: 'precedent',
    code: 'CF-02',
    title: 'Precedent',
    kicker: 'Invoice exception agent with memory',
    date: 'Sep – Nov 2026',
    domain: ['agents', 'fullstack'],
    oneLine:
      'An accounts-payable agent that resolves invoice exceptions the way the team resolved them last time, with hard stops for fraud risk.',
    metric: { n: '56 → 96%', l: 'decision accuracy with memory' },
    flow: [
      { t: 'Invoice', s: 'PO + receipt', k: 'io' },
      { t: '3-way match', s: 'find gap', k: 'proc' },
      { t: 'Recall', s: 'past cases', k: 'store' },
      { t: 'Decide', s: 'or ask human', k: 'guard' },
      { t: 'Ops Watch', s: 'SEV1–3', k: 'proc' },
    ],
    points: [
      'Runs a 3-way match on invoices, purchase orders and receipts, measures each exception, and decides it using agent memory of past resolutions (Hindsight).',
      'Memory raised accuracy from 56% to 96% and cut human reviews from 25 to 15, with zero wrong auto-decisions.',
      'Every supplier bank-detail change goes to a human, no matter what memory suggests.',
      'Ops Watch layer: 4 health checks (memory down, LLM down, slow decisions, repeated bank changes) raise SEV1 to SEV3 incidents with fix steps and auto-close. 16 tests pass.',
    ],
    stack: ['Python', 'FastAPI', 'Agent memory', 'pytest'],
    skills: ['python', 'fastapi', 'agents', 'testing'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/precedent-ap-agent' }],
  },
  {
    id: 'triagex',
    code: 'CF-03',
    title: 'TriageX',
    kicker: 'Incident management with SLA prediction',
    date: 'Oct 2026',
    domain: ['ml', 'fullstack'],
    oneLine:
      'A full incident desk: suggests priority as you type, runs SLA clocks, escalates before breach, and writes every change to a hash chain.',
    metric: { n: '0.786', l: 'ROC-AUC, SLA breach model' },
    flow: [
      { t: 'Report', s: 'React form', k: 'io' },
      { t: 'Suggest', s: 'priority + similar', k: 'proc' },
      { t: 'SLA clock', s: 'scan / 30 s', k: 'proc' },
      { t: 'Escalate', s: 'at 75%', k: 'guard' },
      { t: 'Audit', s: 'SHA-256 chain', k: 'store' },
    ],
    points: [
      'Compared a baseline, logistic regression and gradient boosting on 24,918 real ServiceNow incidents (UCI event log) with a time-based split and leakage controls.',
      'SLA breach prediction reached ROC-AUC 0.786 in the offline comparison; resolution time MAE 125.3 h against a 137.1 h baseline. The lighter model wired into the app scores 0.615.',
      'React + TypeScript front end, Express + MongoDB API, Socket.IO live updates, and a FastAPI ML service with embedding search for similar past incidents.',
      'Three services in Docker Compose. Every push runs lint, build and 89 automated tests in GitHub Actions.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'FastAPI', 'scikit-learn', 'Docker'],
    skills: ['ts', 'react', 'node', 'mongo', 'fastapi', 'python', 'sklearn', 'rag', 'docker', 'testing', 'sec'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/triagex' }],
  },
  {
    id: 'kairos',
    code: 'CF-04',
    title: 'KAIROS',
    kicker: 'Causal root-cause agent · capstone',
    date: 'Aug – Oct 2026',
    team: 'With Varshini Yadav Nasaram and Obulagari Nandini',
    domain: ['agents', 'ml'],
    oneLine:
      'Watches business metrics every 15 minutes, flags anomalies, and traces them to a likely root cause instead of just raising an alarm.',
    metric: { n: '11 / 12', l: 'true causal links, 0 false' },
    flow: [
      { t: 'Sources', s: 'SQL · REST · SFTP', k: 'io' },
      { t: 'DuckDB', s: 'every 15 min', k: 'store' },
      { t: 'Detect', s: 'z-score + Prophet', k: 'proc' },
      { t: 'Root cause', s: 'causal graph', k: 'proc' },
      { t: 'Alert', s: 'Telegram · email', k: 'guard' },
    ],
    points: [
      'A 5-agent LangGraph workflow pulls metrics from SQL, REST, SFTP, CSV and Google Sheets into DuckDB on a 15-minute schedule.',
      'Flags anomalies with a robust z-score and Prophet ensemble, then runs causal discovery to trace the cause.',
      'On benchmark data it recovered 11 of 12 true causal links with 0 false links.',
      'Sends de-duplicated Telegram and email alerts. API and dashboard ship as one container with 36 pytest tests.',
    ],
    stack: ['Python', 'LangGraph', 'DuckDB', 'Prophet', 'FastAPI', 'Docker'],
    skills: ['python', 'sql', 'agents', 'sqlstores', 'ts-anom', 'causal', 'fastapi', 'docker', 'testing'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/KAIROS' }],
  },
  {
    id: 'lextrace',
    code: 'CF-05',
    title: 'LexTrace',
    kicker: 'Agentic RAG for legal research',
    date: '2026',
    domain: ['agents'],
    oneLine:
      'Turns a legal question into a research plan, gathers evidence, and only answers when the evidence actually supports it.',
    metric: { n: '3 agents', l: 'plan, research, review' },
    flow: [
      { t: 'Question', s: 'plain language', k: 'io' },
      { t: 'Planner', s: 'JSON task plan', k: 'proc' },
      { t: 'Researcher', s: 'FAISS / Pinecone', k: 'store' },
      { t: 'Reviewer', s: 'groundedness', k: 'guard' },
      { t: 'Answer', s: 'with citations', k: 'io' },
    ],
    points: [
      'LangGraph pipeline: a Planner turns the question into a JSON task plan, a Researcher retrieves evidence from FAISS or Pinecone, a Reviewer checks the draft.',
      'The Reviewer scores each answer for groundedness against the retrieved text and sends it back for another research round when support is weak.',
      'Answers come with citations and a full reasoning trace, so a reader can check every claim.',
    ],
    stack: ['Python', 'LangGraph', 'FAISS', 'Pinecone', 'Sentence Transformers', 'IBM watsonx.ai', 'FastAPI'],
    skills: ['python', 'agents', 'rag', 'fastapi', 'testing'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/AI_Legal_Assistant-' }],
  },
  {
    id: 'shadowai',
    code: 'CF-06',
    title: 'ShadowAI',
    kicker: 'Security gateway in front of LLMs',
    date: '2026',
    domain: ['security', 'agents', 'fullstack'],
    oneLine:
      'Sits between a company and its LLM providers: blocks prompt injection, redacts secrets, and enforces each team’s policy.',
    metric: { n: '13 steps', l: 'checks on every request' },
    flow: [
      { t: 'Prompt', s: 'from employee', k: 'io' },
      { t: 'Inject?', s: 'regex + TF-IDF LR', k: 'guard' },
      { t: 'Redact', s: 'PII · secrets', k: 'proc' },
      { t: 'Policy', s: 'per org', k: 'proc' },
      { t: 'LLM', s: 'provider', k: 'store' },
    ],
    points: [
      'FastAPI gateway with a 13-step request pipeline: prompt-injection detection (regex plus TF-IDF and logistic regression), PII and secret redaction, per-organisation policies.',
      'SHA-256 hashed API keys, JWT auth and database-backed rate limiting.',
      'Isolation Forest flags unusual usage. Live threats stream to a React admin portal over server-sent events.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'scikit-learn', 'Docker'],
    skills: ['python', 'fastapi', 'react', 'ts', 'sqlstores', 'sklearn', 'sec', 'docker'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/ShadowAI' }],
  },
  {
    id: 'honeycloud',
    code: 'CF-07',
    title: 'HoneyCloud-X',
    kicker: 'Secure AI Hackathon 2026 · finalist',
    date: 'Mar – Apr 2026',
    domain: ['security', 'fullstack'],
    oneLine:
      'Turns raw SSH honeypot logs into a live attack feed, risk scores and guided incident response.',
    metric: { n: 'Top 49', l: 'national final · IIT Madras × BITS Pilani Goa' },
    flow: [
      { t: 'Cowrie', s: 'SSH honeypot', k: 'io' },
      { t: 'Ingest', s: 'Express API', k: 'proc' },
      { t: 'Label + score', s: 'attack rules', k: 'proc' },
      { t: 'Map + KPIs', s: 'React SOC', k: 'store' },
      { t: 'PICERL', s: 'incident flow', k: 'guard' },
    ],
    points: [
      'React dashboard and Express + MongoDB API that ingest Cowrie SSH honeypot logs: live attack feed, KPI panels, geo-IP attack map.',
      'Python pipeline labels each session by the commands the attacker ran, scores its risk, and runs an Isolation Forest pass over the scores to surface outliers.',
      'Incident engine walks analysts through the PICERL lifecycle (prepare, identify, contain, eradicate, recover, lessons).',
      'National finalist (top 49 teams) at the Secure AI Software & Systems Hackathon 2026, run by IIT Madras and BITS Pilani Goa under MeitY. Travelled to Goa between two end-semester exams.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Leaflet'],
    skills: ['react', 'node', 'mongo', 'python', 'sec', 'ts'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/HoneyCloud-X' }],
  },
  {
    id: 'incidentops',
    code: 'CF-08',
    title: 'IncidentOps',
    kicker: 'OpenEnv benchmark for AI on-call agents',
    date: 'Apr 2026',
    team: 'Team Visionary Coders',
    domain: ['agents'],
    oneLine:
      'A simulated fintech production system that breaks on purpose, so you can test whether an AI agent can fix it.',
    metric: { n: '13 actions', l: 'across 5 outage scenarios' },
    flow: [
      { t: 'Outage', s: '5 scenarios', k: 'io' },
      { t: 'Observe', s: 'metrics JSON', k: 'proc' },
      { t: 'Agent', s: 'LLM or rules', k: 'store' },
      { t: 'Act', s: 'rollback · failover', k: 'proc' },
      { t: 'Grade', s: '0.0 to 1.0', k: 'guard' },
    ],
    points: [
      '5 outage scenarios (bad deploy, memory leak, DB saturation, cascading timeouts and more) and 13 actions including rollback, restart, failover and escalation.',
      'Deterministic graders score each episode from 0.0 to 1.0. A do-nothing agent scores about 0; an LLM baseline (Qwen2.5-72B) averages 0.86 across the five tasks.',
      '11 FastAPI endpoints, a live dashboard, Docker image on Hugging Face Spaces, 90 pytest tests.',
    ],
    stack: ['Python', 'FastAPI', 'Pydantic', 'Docker', 'pytest', 'Hugging Face Spaces'],
    skills: ['python', 'fastapi', 'agents', 'llmeval', 'docker', 'testing'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/IncidentOps-OpenEnv' }],
  },
  {
    id: 'journeyaudit',
    code: 'CF-09',
    title: 'JourneyAudit',
    kicker: 'Meta Global AI Developer Hackathon · prototype',
    date: 'Oct – Nov 2026',
    domain: ['agents', 'ml'],
    oneLine:
      'Finds dark patterns across a whole shopping journey, from a screen recording, with the frames that prove each one.',
    metric: { n: '13', l: 'dark patterns banned in India (2023)' },
    flow: [
      { t: 'Recording', s: 'product → pay', k: 'io' },
      { t: 'Keyframes', s: 'what changed', k: 'proc' },
      { t: 'Detectors', s: 'drip · sneak · urgency', k: 'proc' },
      { t: 'Model review', s: 'Muse', k: 'store' },
      { t: 'Evidence', s: 'frame-linked', k: 'guard' },
    ],
    points: [
      'India’s 2023 dark-pattern guidelines ban 13 patterns, and some can’t be proven from one screenshot. A checkout screen shows a ₹59 fee; it can’t show the product page said ₹2,499 with no fee.',
      'JourneyAudit rebuilds what changed across product, cart, checkout and payment, and reports each finding with the frames that prove it.',
      'First three detectors: drip pricing, basket sneaking and false urgency, tested against 6 demo shops including 2 clean ones as negative controls.',
      'Status: prototype built during the hackathon, 8 tests. With perfect perception the detectors score precision and recall 1.00; the real vision-model path is written but not yet evaluated.',
    ],
    stack: ['Python', 'FastAPI', 'Playwright', 'OpenCV', 'Meta Muse models', 'pytest'],
    skills: ['python', 'fastapi', 'agents', 'llmeval', 'testing'],
    links: [],
  },
  {
    id: 'icu',
    code: 'CF-10',
    title: 'ICU Simulator & Causal Effects',
    kicker: 'Apollo Hospitals internship · simulated data',
    date: 'Apr – Jun 2026',
    domain: ['ml'],
    oneLine:
      'A patient simulator for ICU vitals, plus a causal study showing how a naive comparison gets treatment effects backwards.',
    metric: { n: '383,540', l: 'vital-sign rows, 500 patients' },
    flow: [
      { t: 'Simulator', s: '8 scenarios', k: 'io' },
      { t: 'InfluxDB', s: 'time series', k: 'store' },
      { t: '19 SQL', s: 'queries', k: 'proc' },
      { t: 'Causal ML', s: 'meta-learners', k: 'proc' },
      { t: 'Dashboard', s: 'what-if', k: 'guard' },
    ],
    points: [
      'Python simulator generating 383,540 ICU vital-sign records for 500 patients across 8 clinical scenarios. Published on Kaggle: 10/10 usability, 170+ downloads.',
      'Loaded an earlier 61,930-record version into InfluxDB and wrote 19 SQL queries for monitoring, hypoxia and tachycardia episodes and discharge readiness, with 11 charts.',
      'A naive comparison made treatment look harmful because sicker patients were treated more. Causal ML recovered the true benefit (−0.46 vs −0.51 days).',
      'All data is simulated. No hospital patient data is used or shown.',
    ],
    stack: ['Python', 'pandas', 'InfluxDB', 'SQL', 'Causal ML', 'Streamlit'],
    skills: ['python', 'sql', 'influx', 'causal', 'ts-anom'],
    links: [
      { l: 'Causal dashboard', u: 'https://github.com/Chetanareddy18/MedCausal' },
      { l: 'Vitals pipeline', u: 'https://github.com/Chetanareddy18/icu-vitals-monitoring-analytics-pipeline' },
    ],
  },
  {
    id: 'scm',
    code: 'CF-11',
    title: 'Supply Chain Risk Warehouse',
    kicker: 'Data engineering · star schema',
    date: 'Sep – Nov 2025',
    domain: ['ml'],
    oneLine:
      'Sixteen messy public sources, from ship positions to conflict data, merged into one daily risk dataset and a tested star schema.',
    metric: { n: '16.7M', l: 'AIS ship records cleaned' },
    flow: [
      { t: '16 sources', s: 'ships · weather · trade', k: 'io' },
      { t: 'ETL', s: 'Python', k: 'proc' },
      { t: 'Star schema', s: '3 facts · 4 dims', k: 'store' },
      { t: '17 checks', s: 'data QA', k: 'guard' },
      { t: 'Power BI', s: 'DAX', k: 'io' },
    ],
    points: [
      'Python ETL that cleans and merges 16 public sources (shipping, weather, conflict, trade, operations, cyber, health), including 16.7 million AIS ship records.',
      'Output: one daily risk dataset of 1,461 days × 35 columns, in Parquet and SQLite.',
      'Star schema with a shared date table, 3 fact tables and 4 dimensions; 17 automated checks reconcile row counts, totals, dates and keys with the sources.',
    ],
    stack: ['Python', 'pandas', 'SQL', 'SQLite', 'Parquet', 'Power BI'],
    skills: ['python', 'sql', 'sqlstores', 'bi'],
    links: [{ l: 'Code', u: 'https://github.com/Chetanareddy18/Predictive-Risk-Supply-Chain-Management-System' }],
  },
  {
    id: 'drift',
    code: 'CF-12',
    title: 'DRIFT',
    kicker: 'Deep RL trading research · tech lead',
    date: 'Oct 2026',
    team: 'With Varshini Yadav Nasaram and Obulagari Nandini',
    domain: ['ml'],
    oneLine:
      'A regime-aware, friction-aware reward for RL trading agents, and an honest report of what did and didn’t work.',
    metric: { n: '0.80', l: 'Sharpe of a one-line HMM rule that beat every RL agent' },
    flow: [
      { t: 'Prices', s: 'gym-anytrading', k: 'io' },
      { t: 'Regime', s: 'HMM', k: 'proc' },
      { t: 'Reward', s: 'friction-aware', k: 'proc' },
      { t: 'Agents', s: 'Stable-Baselines3', k: 'store' },
      { t: 'Test once', s: 'logged', k: 'guard' },
    ],
    points: [
      'Designed DRIFT, a reward that penalises over-trading and freezing, and compared it with simpler rewards across seeds.',
      'DRIFT was not significantly better or worse than simpler rewards. On the AAPL 2022–23 test it scored Sharpe −0.15, against 0.14 for buy-and-hold and 0.80 for a one-line HMM regime rule.',
      'Takeaway, written up as a negative result: the regime signal was the useful part, not the RL agent on top of it.',
      'Strict chronological splits, multiple seeds, 19 tests, and a test set opened exactly once with an access log, so the result can’t be tuned after the fact.',
    ],
    stack: ['Python', 'Stable-Baselines3', 'gym-anytrading', 'HMM', 'Streamlit'],
    skills: ['python', 'rl', 'ts-anom', 'testing'],
    links: [],
    note: 'Repo is private (course project). Report available on request.',
  },
];

export const experience = [
  {
    role: 'Founder & CEO',
    org: 'Oronzo LLP',
    place: 'Hyderabad',
    when: 'Apr 2026 – Present',
    points: [
      'Founded and run Oronzo LLP, an AI-focused company, alongside a full-time degree. Own product, systems and delivery decisions.',
      'Coordinate feature releases across 5+ AI product verticals running at the same time, from development to production.',
      'Write technical designs, deployment notes and performance reports, and share status with cross-functional teams each sprint.',
    ],
  },
  {
    role: 'AI / ML & Data Engineering Intern',
    org: 'Apollo Hospitals',
    place: 'Hyderabad',
    when: 'Apr 2026 – Jun 2026',
    points: [
      'Built a Python ICU vitals simulator (383,540 records, 500 patients, 8 scenarios), published on Kaggle with 10/10 usability and 170+ downloads.',
      'Wrote 19 SQL queries over InfluxDB for patient monitoring and discharge readiness, and showed how causal ML corrects a misleading naive comparison.',
      'Returned on 20 Aug 2026 as Guest Speaker at Initium 2026, Apollo Institute of Hospital Administration: a 45-minute talk to the 33rd MHM batch.',
    ],
  },
  {
    role: 'AI Developer Intern',
    org: 'Quadone Technologies',
    place: 'Hyderabad',
    when: 'Apr 2025 – May 2025',
    points: [
      'Developed a WhatsApp support chatbot with LangChain and RAG to answer client queries, refining its answers over several test rounds.',
      'Organised hospital data into structured records for reporting and dashboards.',
    ],
  },
  {
    role: 'WordPress Developer Intern',
    org: 'Sarvani Software Solutions',
    place: 'Remote',
    when: 'May 2025 – Jun 2025',
    points: ['Built responsive WordPress sites with Elementor and custom CSS, and tuned them for mobile.'],
  },
  {
    role: 'Web Developer',
    org: 'Institute of Technical and Scientific Research',
    place: 'Remote',
    when: 'Jun 2025 – Jul 2025',
    points: ['Built web features with a cross-functional project team.'],
  },
];

export const honors = [
  { big: 'Gold', t: 'Gold Medalist · Woxsen University', s: 'Gold Medals for academic excellence, B.Tech CSE (Data Science) · CGPA 9.63 / 10', year: '2023–', tag: 'Woxsen' },
  { big: '1st', t: 'Nasiko Online Buildathon 2026', s: 'Team Compact, with Compact Tool Schemas', year: '2026', tag: 'Hackathon' },
  { big: 'Top 49', t: 'Secure AI Software & Systems Hackathon', s: 'National finalist with HoneyCloud-X · IIT Madras × BITS Pilani Goa · MeitY', year: '2026', tag: 'Hackathon' },
  { big: 'Top 2%', t: 'NPTEL Elite, User-Centric Computing for HCI', s: 'IIT Guwahati · 87%, among 1,733 candidates', year: '', tag: 'Academic' },
  { big: 'Top 10', t: 'Innoverse 12-Hour Hackathon', s: 'Inclusive learning tool for students with dyslexia', year: '', tag: 'Hackathon' },
  { big: 'Expo', t: 'Selected for Japan Design Expo', s: 'Represented Woxsen University', year: '', tag: 'International' },
  { big: 'AIR 89', t: 'NASO Olympiad', s: 'Telangana rank 31, among 2,00,000+ participants', year: '', tag: 'Olympiad' },
  { big: '500+', t: 'Mandal Champion, Elocution', s: '1st place in an inter-school competition, Quthbullapur Mandal', year: '', tag: 'Speaking' },
  { big: 'Lead', t: 'Societal Impact Project', s: 'Set up a school library in Aroor village', year: '', tag: 'Community' },
  { big: 'Top 10', t: 'YATT, NSTSE and START Olympiads', s: 'National level', year: '', tag: 'Olympiad' },
];

export const certs = [
  { n: 'Operationalize Generative AI Applications (FMOps / LLMOps)', by: 'AWS' },
  { n: 'AWS Academy Generative AI Foundations', by: 'AWS' },
  { n: 'AI Agents in LangGraph (short course)', by: 'DeepLearning.AI' },
  { n: 'Watson Services: Rapid Development for AI', by: 'IBM' },
  { n: 'Python for Data Science, AI & Development', by: 'IBM · Coursera' },
  { n: 'Python Project for Data Science', by: 'IBM · Coursera' },
  { n: 'Introduction to NoSQL Databases', by: 'IBM · Coursera' },
  { n: 'User-Centric Computing for HCI · Elite, top 2%', by: 'NPTEL · IIT Guwahati' },
  { n: 'Mathematics for Machine Learning', by: 'Imperial College London · Coursera' },
  { n: 'Probability & Statistics for ML & Data Science', by: 'DeepLearning.AI' },
  { n: 'Data Structures', by: 'UC San Diego · Coursera' },
  { n: 'Intro to Generative AI', by: 'Google Cloud' },
  { n: 'GenAI-Powered Data Analytics (job simulation)', by: 'Tata Group · Forage' },
  { n: 'Data Visualization for Business Insights (job simulation)', by: 'Tata Group · Forage' },
];

// Verified from each repo's README and code (Nov 2026). Forks and repos with problems are left out.
// kind: ml | vision | nlp | agents | data | security | web
const gh = (r) => `https://github.com/Chetanareddy18/${r}`;
export const archive = [
  { y: '2026', name: 'SparkShield', kind: 'ml', d: 'Fraud detection on PaySim (synthetic) payments with Spark MLlib; gradient boosted trees reach AUC 0.9995. Kafka streaming and risk tiers.', s: 'PySpark · Kafka · Docker · Streamlit', u: gh('sparkshield-fraud-detection') },
  { y: '2026', name: 'Multi-Horizon NIFTY 50 Forecasting', kind: 'ml', d: '1, 7 and 30-day forecasts for the NIFTY 50 with LSTM, TFT and Prophet, plus regime detection and a risk layer.', s: 'PyTorch · TFT · Prophet · Streamlit', u: gh('MultiHorizonStockForecasting') },
  { y: '2026', name: 'Drone Swarm Self-Healing', kind: 'ml', d: 'Simulates a drone swarm as a graph, injects failures and repairs links with GAE, VGAE, Graph GAN, diffusion and DQN agents. Unity view.', s: 'PyTorch Geometric · NetworkX · Unity', u: gh('DroneSwarm') },
  { y: '2026', name: 'Handwritten OCR', kind: 'vision', d: 'EMNIST characters (47 classes): CNN 89.7% and ResNet18 90.1% test accuracy. Full sentences with TrOCR.', s: 'PyTorch · TrOCR · OpenCV · Streamlit', u: gh('Handwritten-OCR') },
  { y: '2026', name: 'Tele-Dermatology', kind: 'vision', d: 'Compared ResNet18, MobileNetV2 and EfficientNetB0 on HAM10000 skin lesions; EfficientNetB0 best at 0.860 accuracy, 0.713 macro-F1.', s: 'PyTorch · torchvision', u: gh('TeleDermatology') },
  { y: '2025', name: 'Explainable Chest X-ray', kind: 'vision', d: 'Multi-label X-ray classifier: Swin-Tiny plus a feature autoencoder, Grad-CAM heatmaps. 87.1% accuracy on ~5,600 NIH images, 15 classes.', s: 'PyTorch · timm · Grad-CAM', u: gh('Explainable-Chest-Disease-Detection') },
  { y: '2026', name: 'ViT X-ray + Grad-CAM', kind: 'vision', d: 'Vision Transformer X-ray classifier with Grad-CAM explanations.', s: 'PyTorch · timm', u: gh('vit-gradcam-xray-classification') },
  { y: '2026', name: 'Swin Transformer from scratch', kind: 'vision', d: 'A Swin Transformer implemented layer by layer.', s: 'PyTorch · einops', u: gh('SwinTransformer') },
  { y: '2026', name: '3D Reconstruction & Volume', kind: 'vision', d: 'Builds a 3D point cloud from images and estimates object volume.', s: 'OpenCV · Open3D · SciPy', u: gh('3D-Reconstruction-and-Volume-Estimation') },
  { y: '2025', name: 'Smoking Prediction', kind: 'vision', d: 'Small experiment classifying smoker vs non-smoker from face images with a CNN and XGBoost.', s: 'TensorFlow · XGBoost', u: gh('Smoking-Prediction') },
  { y: '2025', name: 'Sarcasm Detection', kind: 'nlp', d: 'Headline sarcasm classifier (Conv1D network) with LIME and SHAP explanations and a Flask app.', s: 'TensorFlow · LIME · SHAP · Flask', u: gh('SarcasmDetection-') },
  { y: '2026', name: 'Fake News Detection', kind: 'nlp', d: 'TF-IDF and logistic regression news classifier behind a Flask page.', s: 'scikit-learn · Flask', u: gh('Fake-News-Detection') },
  { y: '2025', name: 'Soft Skills Analyzer', kind: 'nlp', d: 'Combines a speech-emotion CNN-LSTM (RAVDESS) with a text-emotion model to give feedback on how you speak.', s: 'TensorFlow · librosa · Flask', u: gh('SoftSkillsAnalyzer') },
  { y: '2025', name: 'TrendTracker', kind: 'nlp', d: 'Pulls YouTube trending videos, clusters titles with K-Means and compares engagement ratios in a Dash dashboard.', s: 'YouTube API · scikit-learn · Dash', u: gh('TrendTracker') },
  { y: '2026', name: 'Customer Feedback Analysis', kind: 'nlp', d: 'Sentiment and emotion scoring of customer feedback with IBM Watson NLU.', s: 'IBM Watson · pandas', u: gh('CustomerFeedbackAnalysis') },
  { y: '2025', name: 'ChexBot', kind: 'agents', d: 'Command-line chatbot on a local LLM (Ollama) with LangGraph keeping chat history. No API costs.', s: 'LangGraph · Ollama', u: gh('ChexBot') },
  { y: '2026', name: 'MediConnect', kind: 'agents', d: 'WhatsApp-style Flask chatbot for booking doctor appointments.', s: 'Flask · OpenAI', u: gh('MediConnect') },
  { y: '2025', name: 'Supply chain & hospital procurement BI', kind: 'data', d: 'Power BI dashboards on 12 months of procurement data: 52-day cycle time, 89% SLA, vendor concentration. Plus a one-page hospital procurement poster.', s: 'Power BI · DAX', u: gh('Procurement-Intelligence-Vendor-Optimization') },
  { y: '2026', name: 'FX Currency Pair Analysis', kind: 'data', d: '10 major FX pairs with SMA, RSI and Bollinger Bands, volatility and correlation views, RSI overbought/oversold flags.', s: 'pandas · yfinance · Plotly · Streamlit', u: gh('fx-currency-pair-analysis') },
  { y: '2026', name: 'Food Delivery Analysis', kind: 'data', d: 'Merges CSV, JSON and SQL order data and answers business questions with SQLite.', s: 'pandas · SQLite', u: gh('food_delivery_analysis') },
  { y: '2026', name: 'AirPassengers Forecasting', kind: 'data', d: 'ARIMA and SARIMA against regression and random forest on the AirPassengers series.', s: 'statsmodels · scikit-learn', u: gh('AirPassengers-Forecasting-Hybrid-Models') },
  { y: '2026', name: 'Shoe Price Prediction', kind: 'data', d: 'Regression on women’s shoe prices; random forest R² 0.952 against 0.336 for linear.', s: 'scikit-learn', u: gh('WomenShoePricePrediction') },
  { y: '2026', name: 'Healthcare Dashboard', kind: 'data', d: 'Flask page of Plotly charts over healthcare data.', s: 'Flask · Plotly', u: gh('internship-healthcare-dashboard') },
  { y: '2025', name: 'Multi-Cloud Backup', kind: 'security', d: 'Flask app that backs files up to Azure Blob and AWS S3, restores from S3 when Azure loses a copy, flags high-entropy (possibly encrypted) files and alerts by email and Teams.', s: 'Flask · Azure Blob · AWS S3', u: gh('NextGen-Cloud-Backup') },
  { y: '2026', name: 'Captcha Generator', kind: 'security', d: 'Flask form protected by a session captcha, stored in MongoDB.', s: 'Flask · MongoDB', u: gh('captcha-generator-python') },
  { y: '2026', name: 'Pricing Plans UI', kind: 'web', d: 'React pricing page with monthly/yearly and USD/INR toggles, built for a front-end assignment.', s: 'React · Vite · Context API', u: gh('Dynamic-Pricing-Provider') },
  { y: '2025', name: 'OrganXchange', kind: 'web', d: 'Organ donation and transplant coordination site in 6 Indian languages: donor registration, report uploads, certificates.', s: 'HTML · CSS · JavaScript · PHP', u: null },
];

/* ───────── Story content (from Chetana's About Me doc and Initium 2026 post) ───────── */

export const fourCs = [
  { k: 'Curiosity', line: 'Ask better questions.', sub: 'The root of everything.' },
  { k: 'Clarity', line: 'Know what you want to build, and why.', sub: 'Curiosity needs direction.' },
  { k: 'Confidence', line: 'Not knowing everything. Believing you’ll figure it out.', sub: 'Learn, adapt, figure it out.' },
  { k: 'Consistency', line: 'Showing up. Especially on the hard days.', sub: 'Turns interest into achievement.' },
];
export const fourRs = [
  { k: 'Respect', line: 'Earned through integrity and capability, not a title.' },
  { k: 'Revenue', line: 'Created by solving problems people actually have.' },
  { k: 'Responsibility', line: 'Owning decisions, deadlines and mistakes.' },
  { k: 'Resilience', line: 'Facing pressure without breaking.' },
];

// The polished front of the embroidery, and the tangled back that made it possible.
export const embroideryFront = ['Gold Medalist', 'Apollo Hospitals', 'Nasiko 1st', 'Founder & CEO', 'Top 49 · IIT Madras', 'Guest Speaker'];
export const embroideryBack = [
  'end-sem exam → packed bags → Goa → back for the next exam',
  'a company, internships and semesters, all at once',
  '120+ competitive exams since childhood',
  'rebuilding a concept until it finally clicks',
  'starting before I felt ready',
  'on stage, heart racing, speaking anyway',
];

// Before the code: a constellation of milestones.
export const stars = [
  { x: 60, y: 300, when: 'LKG', t: 'Joined AMAL', s: 'Structured learning, before formal school had even started.' },
  { x: 140, y: 205, when: 'Kindergarten', t: 'Math showcase on my father’s birthday', s: 'Competing with participants two and three times my age, in front of 10–15 media channels.' },
  { x: 230, y: 250, when: 'Age 10', t: 'Abacus graduation', s: 'Years of mental arithmetic: speed, focus and concentration.' },
  { x: 300, y: 140, when: 'School', t: 'South India Karate Meet', s: 'Part of a Guinness World Record attempt, hundreds performing the first kata together.' },
  { x: 390, y: 200, when: 'School', t: '120+ competitive exams', s: 'Not for marks. To test myself and see where I stood.' },
  { x: 455, y: 95, when: 'School', t: 'NASO Olympiad, AIR 89', s: 'Telangana rank 31, among 2,00,000+ participants.' },
  { x: 540, y: 170, when: 'School', t: 'Mandal Champion, elocution', s: 'Where I learnt to think on my feet in front of a crowd.' },
  { x: 620, y: 270, when: '2023', t: 'Woxsen University', s: 'B.Tech CSE (Data Science). Gold Medals for academic excellence, CGPA 9.63.' },
  { x: 700, y: 180, when: 'Apr 2026', t: 'Apollo Hospitals', s: 'AI/ML and data engineering intern, working on ICU data.' },
  { x: 760, y: 300, when: '2026', t: 'Founder & CEO, Oronzo LLP', s: 'Building a company while studying. Accountability becomes personal.' },
  { x: 835, y: 215, when: '2026', t: 'Top 49 nationally', s: 'IIT Madras × BITS Pilani Goa, under MeitY. Attended between two end-semester exams.' },
  { x: 885, y: 110, when: 'Aug 2026', t: 'Guest Speaker, Initium 2026', s: '45 minutes on the back of the embroidery, to the 33rd MHM batch.' },
  { x: 950, y: 60, when: 'Oct 2026', t: 'Nasiko Buildathon, 1st place', s: 'Team Compact. And I’m just getting started.' },
];

export const beyond = [
  { icon: '🥋', t: 'I’ve broken granite with my hands', s: 'And tiles and glass with my head. The real lesson was preparation, technique and control.' },
  { icon: '💃', t: 'I dance', s: 'Different forms. A completely different way to express energy and emotion.' },
  { icon: '🏏', t: 'Kabaddi & cricket', s: 'Competition, teamwork and a lot of noise.' },
  { icon: '🏊', t: 'I swim', s: 'Confidence and control, one length at a time.' },
  { icon: '🔭', t: 'I stare at the night sky', s: 'Astronomy has fascinated me since I was a child.' },
  { icon: '📜', t: 'Indian mythology & the Vedas', s: 'I love asking why ideas came about, and how they meet modern science.' },
  { icon: '🧑‍🏫', t: 'I learn by teaching', s: 'Explaining something to someone else shows me exactly what I haven’t understood yet.' },
  { icon: '✈️', t: 'I travel', s: 'New places, new people, new questions.' },
];

export const openWork = [
  {
    kind: 'Open data', where: 'Kaggle', icon: '📊',
    t: 'ICU Patient Vitals Monitoring Dataset',
    s: '383,540 simulated vital-sign records for 500 ICU patients across 8 clinical scenarios.',
    stat: '10/10 usability · 170+ downloads',
    u: 'https://www.kaggle.com/datasets/pallachetanareddy/icu-patient-vitals-monitoring-dataset',
  },
  {
    kind: 'Open source', where: 'GitHub', icon: '🔧',
    t: 'Compact Tool Schemas for Nasiko',
    s: 'Contribution to an open-source AI-agent runtime that cut tool-definition tokens by 57%. Our 1st-place Buildathon entry.',
    stat: 'PR #232 · Nasiko-Labs/nasiko',
    u: 'https://github.com/Nasiko-Labs/nasiko/pull/232',
  },
  {
    kind: 'Writing', where: 'Medium', icon: '✍️',
    t: 'Metacognition is the AI skill nobody is putting on their resume. They should be.',
    s: 'Why metacognition, knowing how you think and learn, deserves a place on your resume.',
    stat: 'Article on Medium',
    u: 'https://medium.com/@pallachetana/metacognition-is-the-ai-skill-nobody-is-putting-on-their-resume-they-should-be-50dc1692e50c',
  },
];

export const talk = {
  quote: 'Pressure is a privilege. Your comfort zone is beautiful, but nothing grows there.',
  event: 'Initium 2026 · Stories That Spark Change',
  where: 'Apollo Institute of Hospital Administration',
  when: '20 Aug 2026',
  what: 'A 45-minute talk to the 33rd batch of MHM students on the front and back of an embroidery, and the 4Cs.',
};
