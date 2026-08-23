/**
 * Isometric platform stack from the home reference: four labelled layers
 * feeding a floating dashboard. Layer labels come from `hero.architecture`.
 */
const DEFAULT_LAYERS = [
  "Intelligent Applications",
  "AI & Automation Layer",
  "Data & Integration Layer",
  "Cloud Foundation (Secure & Scalable)",
];

const CX = 470;
const HALF_W = 232;
const HALF_D = 72;
const THICK = 15;
const TOPS = [108, 226, 344, 462];

/** Splits "Cloud Foundation (Secure & Scalable)" onto two lines instead of clipping it. */
function labelLines(label = "") {
  const open = label.indexOf(" (");
  if (open === -1) return [label];
  return [label.slice(0, open), label.slice(open + 1)];
}

function slabPath(cy: number) {
  return `M${CX} ${cy - HALF_D} L${CX + HALF_W} ${cy} L${CX} ${cy + HALF_D} L${CX - HALF_W} ${cy} Z`;
}
function sidePath(cy: number) {
  return `M${CX - HALF_W} ${cy} L${CX} ${cy + HALF_D} L${CX + HALF_W} ${cy} L${CX + HALF_W} ${cy + THICK} L${CX} ${cy + HALF_D + THICK} L${CX - HALF_W} ${cy + THICK} Z`;
}

export default function AP_ArchitectureVisual({ layers = DEFAULT_LAYERS, compact = false }: { layers?: string[]; compact?: boolean }) {
  const names = layers.length ? layers : DEFAULT_LAYERS;

  return (
    <div className={compact ? "w-full max-w-[420px]" : "w-full"}>
      <svg viewBox="0 0 940 560" className="h-auto w-full" role="img" aria-label={names.join(", ")}>
        <defs>
          <linearGradient id="hxTop" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffffff" /><stop offset="1" stopColor="#eaf5fb" /></linearGradient>
          <linearGradient id="hxSide" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d9e9f3" /><stop offset="1" stopColor="#c2dcea" /></linearGradient>
          <radialGradient id="hxGlow" cx="50%" cy="50%" r="50%"><stop stopColor="#16a9dd" stopOpacity=".35" /><stop offset="1" stopColor="#16a9dd" stopOpacity="0" /></radialGradient>
        </defs>

        {TOPS.map((cy, i) => (
          <g key={cy}>
            <path d={sidePath(cy)} fill="url(#hxSide)" />
            <path d={slabPath(cy)} fill="url(#hxTop)" stroke="#c6def0" strokeWidth="1.2" />

            {/* label chip on the left, aligned to the slab */}
            <rect x={30} y={cy - 22} width={210} height={44} rx="7" fill="#ffffff" stroke="#e0ebf3" />
            <text fill="#0b2233" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13.5" fontWeight="600">
              {labelLines(names[i]).map((line, row, all) => (
                <tspan key={line} x={44} y={cy + (all.length === 1 ? 4 : row === 0 ? -3 : 13)}>{line}</tspan>
              ))}
            </text>
            <path d={`M240 ${cy} H${CX - HALF_W - 6}`} stroke="#c6def0" strokeDasharray="4 4" />

            {/* per-layer contents */}
            {i === 0 && [-120, -40, 40, 120].map((dx, k) => (
              <g key={dx} transform={`translate(${CX + dx} ${cy - 6 + (k % 2) * 12})`}>
                <path d="M0 -14 L16 -6 L0 2 L-16 -6 Z" fill="#16a9dd" fillOpacity=".55" />
                <path d="M-16 -6 L0 2 L0 16 L-16 8 Z" fill="#0f9bd4" fillOpacity=".35" />
                <path d="M16 -6 L0 2 L0 16 L16 8 Z" fill="#0f9bd4" fillOpacity=".22" />
              </g>
            ))}
            {i === 1 && (
              <g transform={`translate(${CX} ${cy})`}>
                <circle r="58" fill="url(#hxGlow)" />
                <rect x="-26" y="-20" width="52" height="40" rx="7" fill="#0f9bd4" fillOpacity=".16" stroke="#16a9dd" />
                <path d="M-12 -6h24M-12 2h16M-12 10h20" stroke="#0f9bd4" strokeWidth="2.5" strokeLinecap="round" />
                {[-46, -30, 30, 46].map((x) => <path key={x} d={`M${x} -14 v28`} stroke="#16a9dd" strokeOpacity=".6" strokeWidth="2" />)}
              </g>
            )}
            {i === 2 && [-140, -70, 0, 70, 140].map((dx, k) => (
              <rect key={dx} x={CX + dx - 15} y={cy - 12 + (k % 2) * 10} width="30" height="20" rx="4" fill="#16a9dd" fillOpacity={0.18 + (k % 3) * 0.12} stroke="#7fc9e8" />
            ))}
            {i === 3 && [-130, -30, 90].map((dx, k) => (
              <g key={dx} transform={`translate(${CX + dx} ${cy - 2 + (k % 2) * 10})`}>
                <path d="M-26 8a13 13 0 0 1 3-25 18 18 0 0 1 33 5 11 11 0 0 1 1 20Z" fill="#ffffff" stroke="#9fd3ec" strokeWidth="1.6" />
              </g>
            ))}
          </g>
        ))}

        {/* connectors to the dashboard */}
        <path d={`M${CX + HALF_W} 108 H800 V210`} fill="none" stroke="#c6def0" strokeDasharray="5 5" />
        <path d={`M${CX + HALF_W} 344 H800 V300`} fill="none" stroke="#c6def0" strokeDasharray="5 5" />
        {TOPS.map((y) => <circle key={y} cx={CX + HALF_W} cy={y} r="4" fill="#16a9dd" fillOpacity=".7" />)}

        {/* floating dashboard */}
        <g transform="translate(714 168)">
          <rect x="0" y="0" width="196" height="196" rx="12" fill="#ffffff" stroke="#dcebf4" />
          <rect x="0" y="0" width="196" height="26" rx="12" fill="#f4fafd" />
          <circle cx="16" cy="13" r="3.5" fill="#cfe3ee" /><circle cx="28" cy="13" r="3.5" fill="#cfe3ee" />
          <rect x="14" y="40" width="80" height="8" rx="4" fill="#e6f1f7" />
          <rect x="14" y="56" width="54" height="8" rx="4" fill="#eef5f9" />
          <path d="M14 138 L44 118 L74 128 L104 96 L134 108 L164 78" fill="none" stroke="#16a9dd" strokeWidth="3" />
          <path d="M14 138 L44 118 L74 128 L104 96 L134 108 L164 78 V162 H14Z" fill="#16a9dd" fillOpacity=".08" />
          <rect x="14" y="172" width="42" height="8" rx="4" fill="#e6f1f7" />
          <rect x="66" y="172" width="42" height="8" rx="4" fill="#eef5f9" />
        </g>
        <g transform="translate(866 318)">
          <circle r="26" fill="#ffffff" stroke="#dcebf4" />
          <path d="M0 -13 l11 5v8c0 7-5 11-11 13-6-2-11-6-11-13v-8Z" fill="#eaf6fc" stroke="#16a9dd" strokeWidth="1.6" />
          <path d="m-5 0 4 4 7-7" fill="none" stroke="#0f9bd4" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
