export default function AP_ArchitectureVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`architecture-wrap ap-ref-architecture ${compact ? "architecture-wrap-compact" : ""}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 760 560" className="architecture-svg" role="presentation">
        <defs>
          <linearGradient id="apTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".98" />
            <stop offset="1" stopColor="#EEF4F6" stopOpacity=".97" />
          </linearGradient>
          <linearGradient id="apMid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E8EFF1" stopOpacity=".92" />
            <stop offset="1" stopColor="#D3DEE2" stopOpacity=".78" />
          </linearGradient>
          <linearGradient id="apBase" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#DCE5E8" stopOpacity=".72" />
            <stop offset="1" stopColor="#C5D2D7" stopOpacity=".52" />
          </linearGradient>
          <linearGradient id="apEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00B3A4" stopOpacity=".24" />
            <stop offset=".5" stopColor="#00B3A4" stopOpacity="1" />
            <stop offset="1" stopColor="#00B3A4" stopOpacity=".24" />
          </linearGradient>
          <radialGradient id="apHalo" cx="50%" cy="46%" r="50%">
            <stop offset="0" stopColor="#00B3A4" stopOpacity=".13" />
            <stop offset="1" stopColor="#00B3A4" stopOpacity="0" />
          </radialGradient>
          <filter id="apShadow" x="-35%" y="-35%" width="170%" height="190%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0C202B" floodOpacity=".08" />
          </filter>
        </defs>

        <ellipse cx="380" cy="292" rx="248" ry="190" fill="url(#apHalo)" />
        <ellipse cx="380" cy="300" rx="286" ry="220" fill="none" stroke="#00B3A4" strokeOpacity=".10" />

        <g filter="url(#apShadow)" className="architecture-layers">
          <path d="M210 410 380 494 550 410 380 326Z" fill="url(#apBase)" fillOpacity=".42" />
          <path d="M226 372 380 447 534 372 380 297Z" fill="url(#apMid)" stroke="#D6E0E3" />
          <path d="M226 348 380 423 534 348 380 273Z" fill="url(#apTop)" stroke="#DDE5E8" />

          <path d="M247 312 380 377 513 312 380 247Z" fill="url(#apMid)" stroke="#D7E0E3" />
          <path d="M247 289 380 354 513 289 380 224Z" fill="url(#apTop)" stroke="#E0E7EA" />

          <path d="M266 252 380 308 494 252 380 196Z" fill="url(#apMid)" stroke="#D4DDE1" />
          <path d="M266 230 380 286 494 230 380 174Z" fill="url(#apTop)" stroke="#E0E7EA" />
          <path d="M266 230 380 286 494 230" fill="none" stroke="url(#apEdge)" strokeWidth="6" strokeLinecap="round" />

          <text x="380" y="225" textAnchor="middle" fill="#1E2328" fontSize="17" fontWeight="800" letterSpacing="4">APEX</text>
          <text x="380" y="246" textAnchor="middle" fill="#6E7A80" fontSize="8" fontWeight="700" letterSpacing="2">SYSTEMS ARCHITECTURE</text>

          <text x="380" y="297" textAnchor="middle" fill="#97A5AB" fontSize="9" fontWeight="700" letterSpacing="2">INTELLIGENT LAYER</text>
          <text x="380" y="364" textAnchor="middle" fill="#9AA8AE" fontSize="9" fontWeight="700" letterSpacing="2">INTEGRATION LAYER</text>
          <text x="380" y="430" textAnchor="middle" fill="#9EAAB0" fontSize="9" fontWeight="700" letterSpacing="2">DATA LAYER</text>
        </g>

        <g stroke="#00B3A4" strokeWidth="2" strokeLinecap="round" opacity=".76">
          <path d="M248 250 214 226" />
          <path d="M512 250 547 226" />
          <path d="M248 351 212 374" />
          <path d="M512 351 548 376" />
        </g>

        <g fill="#00B3A4" opacity=".48">
          <circle cx="142" cy="310" r="5"/>
          <circle cx="622" cy="308" r="5"/>
          <circle cx="206" cy="438" r="3.4"/>
          <circle cx="554" cy="438" r="3.4"/>
        </g>
      </svg>
    </div>
  );
}
