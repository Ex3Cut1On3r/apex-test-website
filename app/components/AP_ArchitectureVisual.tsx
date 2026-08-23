/**
 * Isometric "AI operating system" stack from the home reference: four labelled
 * slabs with the APEX mark on the live top layer, ringed by floating capability
 * cards that connect back into the stack. Labels come from `hero.architecture`
 * and `hero.architectureCards`.
 */
const DEFAULT_LAYERS = ["AI OPERATING SYSTEM", "WORKFLOW ENGINE", "DATA LAYER", "INTEGRATION LAYER"];
const DEFAULT_CARDS = ["AUTOMATION", "ANALYTICS", "DATA", "AI MODELS", "INTEGRATIONS"];

const CX = 470;
const HALF_W = 226;
const HALF_D = 74;
const THICK = 18;
const TOPS = [288, 376, 464, 552];

const face = (cy: number) => `M${CX} ${cy - HALF_D} L${CX + HALF_W} ${cy} L${CX} ${cy + HALF_D} L${CX - HALF_W} ${cy} Z`;
const side = (cy: number) =>
  `M${CX - HALF_W} ${cy} L${CX} ${cy + HALF_D} L${CX + HALF_W} ${cy} L${CX + HALF_W} ${cy + THICK} L${CX} ${cy + HALF_D + THICK} L${CX - HALF_W} ${cy + THICK} Z`;

export default function AP_ArchitectureVisual({
  layers = DEFAULT_LAYERS,
  cards = DEFAULT_CARDS,
  compact = false,
}: { layers?: string[]; cards?: string[]; compact?: boolean }) {
  const names = layers.length ? layers : DEFAULT_LAYERS;
  const chips = cards.length ? cards : DEFAULT_CARDS;

  /* floating cards: box plus the stack point each one wires into */
  const float = [
    { x: 178, y: 44, w: 178, h: 130, tx: 470, ty: 288 },
    { x: 690, y: 36, w: 192, h: 150, tx: 470, ty: 288 },
    { x: 58, y: 304, w: 152, h: 150, tx: 244, ty: 376 },
    { x: 744, y: 268, w: 178, h: 166, tx: 700, ty: 376 },
    { x: 662, y: 528, w: 192, h: 148, tx: 620, ty: 552 },
  ];

  return (
    <div className={compact ? "w-full max-w-[420px]" : "w-full"}>
      <svg viewBox="0 0 960 700" className="h-auto w-full" role="img" aria-label={[...names, ...chips].join(", ")}>
        <defs>
          <linearGradient id="axTop" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffffff" /><stop offset="1" stopColor="#eaf6fb" /></linearGradient>
          <linearGradient id="axLive" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f6fdff" /><stop offset="1" stopColor="#cfeff8" /></linearGradient>
          <linearGradient id="axSide" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e6f1f8" /><stop offset="1" stopColor="#cbe0ed" /></linearGradient>
          <linearGradient id="axCard" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffffff" stopOpacity=".97" /><stop offset="1" stopColor="#eef7fc" stopOpacity=".92" /></linearGradient>
        </defs>

        <g stroke="#d9eaf4" strokeDasharray="4 6" fill="none">
          <path d="M470 646 L858 626 M470 646 L120 622 M120 622 L470 694 L858 626" />
        </g>

        <g stroke="#c3e1f1" fill="none" strokeWidth="1">
          {float.map((f, i) => {
            const cx = f.x + f.w / 2, cy = f.y + f.h / 2, mid = (cx + f.tx) / 2;
            return <path key={i} d={`M${cx} ${cy} L${mid} ${cy} L${mid} ${f.ty} L${f.tx} ${f.ty}`} />;
          })}
        </g>

        {[...TOPS].reverse().map((cy) => {
          const index = TOPS.indexOf(cy);
          const live = index === 0;
          return (
            <g key={cy}>
              <path d={side(cy)} fill="url(#axSide)" />
              <path d={face(cy)} fill={live ? "url(#axLive)" : "url(#axTop)"} stroke={live ? "#84d6ea" : "#d2e6f1"} strokeWidth="1.2" />
              {live && <path d={`M${CX - HALF_W} ${cy + THICK} L${CX} ${cy + HALF_D + THICK} L${CX + HALF_W} ${cy + THICK}`} fill="none" stroke="#3fc4dd" strokeWidth="3" />}

            </g>
          );
        })}

        <g transform={`translate(${CX} ${TOPS[0] - 10})`}>
          <image href="/api/assets/logo/apex-mark.svg" x="-96" y="-24" width="44" height="36" preserveAspectRatio="xMidYMid meet" />
          <text x="-44" y="6" textAnchor="start" fill="#0b2233" fontFamily="Segoe UI, Arial, sans-serif" fontSize="32" fontWeight="800" letterSpacing="1.5">APEX</text>
          <text x="0" y="34" textAnchor="middle" fill="#8493a2" fontFamily="Segoe UI, Arial, sans-serif" fontSize="12" fontWeight="600" letterSpacing="2">{names[0] ?? ""}</text>
        </g>

        {TOPS.slice(1).map((cy, i) => (
          <text
            key={`label-${cy}`} x={CX} y={cy + 30} textAnchor="middle" fill="#8493a2"
            fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="600" letterSpacing="2"
          >{names[i + 1] ?? ""}</text>
        ))}

        {float.map((f, i) => (
          <g key={`card-${i}`}>
            <rect x={f.x} y={f.y} width={f.w} height={f.h} rx="16" fill="url(#axCard)" stroke="#dbecf6" />
            <g transform={`translate(${f.x + 18} ${f.y + 20})`}>
              <rect x="0" y="0" width="18" height="18" rx="5" fill="#e8f6fc" stroke="#abdaed" />
              <path d="M4.5 9.5 L8 13 L13.5 5.5" fill="none" stroke="#12a5d6" strokeWidth="1.8" strokeLinecap="round" />
            </g>
            <text x={f.x + 46} y={f.y + 34} fill="#5a6b7c" fontFamily="Segoe UI, Arial, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="1.2">{chips[i] ?? ""}</text>

            {i === 0 && <path d={`M${f.x + 18} ${f.y + 98} q22 -30 44 -6 t44 -22 t48 4`} fill="none" stroke="#3fc4dd" strokeWidth="2" />}
            {i === 1 && (
              <g>
                <path d={`M${f.x + 18} ${f.y + 114} L${f.x + 54} ${f.y + 86} L${f.x + 90} ${f.y + 98} L${f.x + 126} ${f.y + 64} L${f.x + 162} ${f.y + 78}`} fill="none" stroke="#12a5d6" strokeWidth="2" />
                {[0, 1, 2, 3, 4].map((d) => <circle key={d} cx={f.x + 18 + d * 36} cy={f.y + 114 - d * 9} r="2.6" fill="#12a5d6" />)}
              </g>
            )}
            {i === 2 && (
              <g fill="#8fd6ea">
                {Array.from({ length: 5 }).map((_, r) => Array.from({ length: 6 }).map((__, c) => (
                  <circle key={`${r}-${c}`} cx={f.x + 24 + c * 21} cy={f.y + 62 + r * 16} r="3" opacity={0.32 + ((r + c) % 3) * 0.24} />
                )))}
              </g>
            )}
            {i === 3 && (
              <g stroke="#12a5d6" fill="none" strokeWidth="1.2">
                <circle cx={f.x + 89} cy={f.y + 106} r="34" strokeOpacity=".45" />
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  return <line key={deg} x1={f.x + 89} y1={f.y + 106} x2={f.x + 89 + 34 * Math.cos(rad)} y2={f.y + 106 + 34 * Math.sin(rad)} strokeOpacity=".5" />;
                })}
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  return <circle key={`n${deg}`} cx={f.x + 89 + 34 * Math.cos(rad)} cy={f.y + 106 + 34 * Math.sin(rad)} r="4" fill="#12a5d6" stroke="none" />;
                })}
                <circle cx={f.x + 89} cy={f.y + 106} r="7" fill="#12a5d6" stroke="none" />
              </g>
            )}
            {i === 4 && [0, 1, 2].map((d) => (
              <g key={d} transform={`translate(${f.x + 32 + d * 48} ${f.y + 76})`}>
                <rect x="0" y="0" width="36" height="36" rx="10" fill="#f3fbfd" stroke="#cbe7f4" />
                <circle cx="18" cy="18" r="7.5" fill="none" stroke="#12a5d6" strokeWidth="2" />
              </g>
            ))}
          </g>
        ))}

        {float.map((f, i) => <circle key={`dot-${i}`} cx={f.tx} cy={f.ty} r="4.5" fill="#12a5d6" />)}
      </svg>
    </div>
  );
}
