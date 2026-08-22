export default function AP_ArchitectureVisual({ compact = false }: { compact?: boolean }) {
  const layers = [
    { href: "/solutions", label: "Systems Architecture", y: 54, depth: 16, accent: ".72" },
    { href: "/solutions#integration", label: "Integration Layer", y: 212, depth: 16, accent: ".50" },
    { href: "/solutions#data", label: "Data Layer", y: 370, depth: 16, accent: ".38" },
  ] as const;

  return (
    <div className={`ap-3d-stack ${compact ? "ap-3d-stack-compact" : ""}`.trim()}>
      <svg viewBox="0 0 760 650" className="ap-3d-stack-svg" role="img" aria-label="Clickable APEX systems architecture layers">
        <defs>
          <linearGradient id="apStackFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F6F9FA" />
          </linearGradient>
          <linearGradient id="apStackLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E9EEF0" />
            <stop offset="1" stopColor="#D8E2E5" />
          </linearGradient>
          <linearGradient id="apStackRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E0E8EA" />
            <stop offset="1" stopColor="#B7DCD8" />
          </linearGradient>
          <linearGradient id="apStackEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8ADBD4" stopOpacity=".30" />
            <stop offset=".5" stopColor="#35BEB2" stopOpacity=".72" />
            <stop offset="1" stopColor="#8ADBD4" stopOpacity=".30" />
          </linearGradient>
          <radialGradient id="apStackHalo" cx="50%" cy="47%" r="52%">
            <stop offset="0" stopColor="#00B3A4" stopOpacity=".075" />
            <stop offset="1" stopColor="#00B3A4" stopOpacity="0" />
          </radialGradient>
          <filter id="apStackShadow" x="-35%" y="-35%" width="170%" height="200%">
            <feDropShadow dx="0" dy="17" stdDeviation="17" floodColor="#102A33" floodOpacity=".09" />
          </filter>
        </defs>

        <ellipse cx="380" cy="344" rx="300" ry="258" fill="url(#apStackHalo)" />

        {layers.map((layer, index) => {
          const y = layer.y;
          const top = y;
          const mid = y + 116;
          const bottom = y + 232;
          const depth = layer.depth;
          const labelY = y + 122;
          const arrowY = y + 116;
          return (
            <a key={layer.label} href={layer.href} className="ap-3d-layer-link" aria-label={`Explore ${layer.label}`}>
              <g className={`ap-3d-layer ap-3d-layer-${index + 1}`} filter="url(#apStackShadow)">
                <polygon
                  className="ap-3d-side ap-3d-side-left"
                  points={`132,${mid} 380,${bottom} 380,${bottom + depth} 132,${mid + depth}`}
                  fill="url(#apStackLeft)"
                />
                <polygon
                  className="ap-3d-side ap-3d-side-right"
                  points={`628,${mid} 380,${bottom} 380,${bottom + depth} 628,${mid + depth}`}
                  fill="url(#apStackRight)"
                />
                <polygon
                  className="ap-3d-face"
                  points={`380,${top} 628,${mid} 380,${bottom} 132,${mid}`}
                  fill="url(#apStackFace)"
                  stroke="#D6E1E4"
                />
                <polyline
                  points={`144,${mid} 380,${bottom - 5} 616,${mid}`}
                  fill="none"
                  stroke="url(#apStackEdge)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity={layer.accent}
                />
                <text x="380" y={labelY} textAnchor="middle" dominantBaseline="middle" className="ap-3d-layer-title">{layer.label}</text>
                <g className="ap-3d-layer-arrow" transform={`translate(530 ${arrowY})`}>
                  <path d="M0-11 11 0 0 11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </a>
          );
        })}
      </svg>
    </div>
  );
}
