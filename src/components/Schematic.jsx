// Draws a project's pipeline as a small engineering schematic.
// Two layouts: a single row (wide) and a 3+2 "snake" (narrow), toggled by CSS.

const W = 96;
const H = 50;

function fit(text, base, maxChars) {
  return text.length > maxChars ? Math.max(base * (maxChars / text.length), base * 0.68) : base;
}

function Node({ n, x, y, i }) {
  const cls = `n-box n-${n.k}`;
  let shape;
  if (n.k === 'io') shape = <rect className={cls} x={x} y={y} width={W} height={H} rx={H / 2} />;
  else if (n.k === 'store')
    shape = (
      <g>
        <path className={cls} d={`M${x},${y + 7} v${H - 14} a${W / 2},7 0 0 0 ${W},0 v-${H - 14} a${W / 2},7 0 0 0 -${W},0 Z`} />
        <path className={cls} style={{ fill: 'none' }} d={`M${x},${y + 7} a${W / 2},7 0 0 0 ${W},0`} />
      </g>
    );
  else shape = <rect className={cls} x={x} y={y} width={W} height={H} rx={3} />;
  const cx = x + W / 2;
  return (
    <g>
      <text className="n-i" x={x + 2} y={y - 6}>{String(i + 1).padStart(2, '0')}</text>
      {shape}
      <text className="n-t" x={cx} y={y + 23} textAnchor="middle" style={{ fontSize: fit(n.t, 11.5, 12) }}>{n.t}</text>
      <text className="n-s" x={cx} y={y + 37} textAnchor="middle" style={{ fontSize: fit(n.s, 9.5, 16) }}>{n.s}</text>
    </g>
  );
}

function Arrow({ d, hx, hy, dir }) {
  const pts = {
    r: `${hx},${hy} ${hx - 6},${hy - 4} ${hx - 6},${hy + 4}`,
    l: `${hx},${hy} ${hx + 6},${hy - 4} ${hx + 6},${hy + 4}`,
    d: `${hx},${hy} ${hx - 4},${hy - 6} ${hx + 4},${hy - 6}`,
  }[dir];
  return (
    <g>
      <path className="flow-line" d={d} />
      <polygon className="flow-head" points={pts} />
    </g>
  );
}

function Row({ flow }) {
  const gap = 30;
  const y = 22;
  const width = flow.length * W + (flow.length - 1) * gap;
  return (
    <svg className="schem s-row" viewBox={`0 0 ${width} ${y + H + 6}`} role="img" aria-label={flow.map((f) => f.t).join(' then ')}>
      {flow.map((n, i) => {
        const x = i * (W + gap);
        return (
          <g key={i}>
            {i > 0 && <Arrow d={`M${x - gap + 3},${y + H / 2} H${x - 2}`} hx={x - 1} hy={y + H / 2} dir="r" />}
            <Node n={n} x={x} y={y} i={i} />
          </g>
        );
      })}
    </svg>
  );
}

function Snake({ flow }) {
  const gap = 30;
  const top = flow.slice(0, 3);
  const bottom = flow.slice(3);
  const y1 = 22;
  const y2 = 122;
  const width = 3 * W + 2 * gap;
  const pos = [
    ...top.map((_, i) => ({ x: i * (W + gap), y: y1 })),
    ...bottom.map((_, j) => ({ x: (2 - j) * (W + gap), y: y2 })),
  ];
  return (
    <svg className="schem s-snake" viewBox={`0 0 ${width} ${y2 + H + 6}`} role="img" aria-label={flow.map((f) => f.t).join(' then ')}>
      {flow.map((n, i) => {
        const p = pos[i];
        let arrow = null;
        if (i > 0) {
          const q = pos[i - 1];
          if (q.y === p.y && p.x > q.x) arrow = <Arrow d={`M${q.x + W + 3},${p.y + H / 2} H${p.x - 2}`} hx={p.x - 1} hy={p.y + H / 2} dir="r" />;
          else if (q.y === p.y) arrow = <Arrow d={`M${q.x - 3},${p.y + H / 2} H${p.x + W + 2}`} hx={p.x + W + 1} hy={p.y + H / 2} dir="l" />;
          else arrow = <Arrow d={`M${q.x + W / 2},${q.y + H + 3} V${p.y - 14}`} hx={p.x + W / 2} hy={p.y - 13} dir="d" />;
        }
        return (
          <g key={i}>
            {arrow}
            <Node n={n} x={p.x} y={p.y} i={i} />
          </g>
        );
      })}
    </svg>
  );
}

export default function Schematic({ flow }) {
  return (
    <div className="schem-wrap">
      <Row flow={flow} />
      <Snake flow={flow} />
    </div>
  );
}
