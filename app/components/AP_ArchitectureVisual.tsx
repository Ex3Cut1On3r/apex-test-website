export default function AP_ArchitectureVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`architecture-wrap ${compact ? "architecture-wrap-compact" : ""}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 1440 760" className="architecture-svg" role="presentation">
        <defs>
          <linearGradient id="apPlaneTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".94" />
            <stop offset="1" stopColor="#F1F5F6" stopOpacity=".90" />
          </linearGradient>
          <linearGradient id="apPlaneSide" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E6ECEE" stopOpacity=".84" />
            <stop offset="1" stopColor="#CCD5D8" stopOpacity=".62" />
          </linearGradient>
          <linearGradient id="apTealEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00B3A4" stopOpacity=".18" />
            <stop offset=".5" stopColor="#00B3A4" stopOpacity=".94" />
            <stop offset="1" stopColor="#00B3A4" stopOpacity=".18" />
          </linearGradient>
          <radialGradient id="apHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#00B3A4" stopOpacity=".10" />
            <stop offset="1" stopColor="#00B3A4" stopOpacity="0" />
          </radialGradient>
          <filter id="apLayerShadow" x="-30%" y="-30%" width="160%" height="190%">
            <feDropShadow dx="0" dy="20" stdDeviation="26" floodColor="#1E2328" floodOpacity=".09" />
          </filter>
        </defs>

        <ellipse cx="720" cy="398" rx="420" ry="214" fill="url(#apHalo)" />

        <g className="architecture-rings" fill="none">
          <ellipse cx="720" cy="384" rx="470" ry="228" stroke="#1E2328" strokeOpacity=".07" />
          <ellipse cx="720" cy="384" rx="380" ry="184" stroke="#1E2328" strokeOpacity=".055" strokeDasharray="5 10" />
          <ellipse cx="720" cy="384" rx="308" ry="148" stroke="#00B3A4" strokeOpacity=".12" />
        </g>

        <g className="architecture-links" fill="none" strokeLinecap="round">
          <path d="M42 558c160-30 306-40 444-24" stroke="#1E2328" strokeOpacity=".05" />
          <path d="M22 642c190-53 338-57 512-26" stroke="#00B3A4" strokeOpacity=".14" />
          <path d="M1398 558c-160-30-306-40-444-24" stroke="#1E2328" strokeOpacity=".05" />
          <path d="M1418 642c-190-53-338-57-512-26" stroke="#00B3A4" strokeOpacity=".14" />
        </g>

        <g filter="url(#apLayerShadow)" className="architecture-layers">
          <path d="M406 594 720 742 1034 594 720 445Z" fill="#D6DCDF" fillOpacity=".24" />

          <path d="M430 550 720 687 1010 550 720 413Z" fill="url(#apPlaneSide)" stroke="#D8E0E3" strokeOpacity=".78" />
          <path d="M430 516 720 652 1010 516 720 379Z" fill="url(#apPlaneTop)" stroke="#DCE3E6" strokeOpacity=".88" />

          <path d="M454 468 720 594 986 468 720 341Z" fill="url(#apPlaneSide)" stroke="#D8E0E3" strokeOpacity=".80" />
          <path d="M454 436 720 561 986 436 720 309Z" fill="url(#apPlaneTop)" stroke="#DCE3E6" strokeOpacity=".90" />

          <path d="M480 392 720 506 960 392 720 278Z" fill="url(#apPlaneSide)" stroke="#D6DEE1" strokeOpacity=".82" />
          <path d="M480 361 720 474 960 361 720 247Z" fill="url(#apPlaneTop)" stroke="#D8E0E3" strokeOpacity=".92" />

          <path d="M505 320 720 420 935 320 720 220Z" fill="url(#apPlaneSide)" stroke="#D3DBDE" strokeOpacity=".84" />
          <path d="M505 290 720 389 935 290 720 190Z" fill="url(#apPlaneTop)" stroke="#D8E0E3" strokeOpacity=".94" />
          <path d="M505 290 720 389 935 290" fill="none" stroke="url(#apTealEdge)" strokeWidth="7" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
