function ArchCard({ x, y, title, kind }: { x: number; y: number; title: string; kind: "automation" | "analytics" | "models" | "integrations" | "data" }) {
  return (
    <g transform={`translate(${x} ${y})`} filter="url(#cardShadow)">
      <rect width="150" height="90" rx="14" fill="rgba(255,255,255,.96)" stroke="#D6E1E3"/>
      <rect x="14" y="14" width="25" height="25" rx="7" fill="#E4F8F5"/>
      <circle cx="26.5" cy="26.5" r="4" fill="#00B3A4"/>
      <text x="48" y="29" fill="#536067" fontSize="9.5" fontWeight="800" letterSpacing=".7">{title}</text>
      {kind === "automation" && <><path d="M17 65h20l9-12 11 8 13-21 12 14 18-18 30 15" fill="none" stroke="#00B3A4" strokeWidth="1.8"/><path d="M17 71h116" stroke="#E4EAEC"/></>}
      {kind === "analytics" && <><path d="M17 69h116" stroke="#E4EAEC"/><path d="m18 65 16-8 14 5 17-17 16 8 17-23 14 10 21-16" fill="none" stroke="#00B3A4" strokeWidth="1.8"/><circle cx="98" cy="30" r="3" fill="#00B3A4"/></>}
      {kind === "models" && <><circle cx="42" cy="62" r="4" fill="#00B3A4"/><circle cx="75" cy="49" r="4" fill="#00B3A4"/><circle cx="109" cy="63" r="4" fill="#00B3A4"/><circle cx="92" cy="28" r="4" fill="#00B3A4"/><path d="M42 62 75 49 109 63M75 49 92 28M92 28 109 63" stroke="#8DDDD5" strokeWidth="1.5" fill="none"/></>}
      {kind === "integrations" && <><rect x="23" y="53" width="21" height="21" rx="5" fill="#E5F8F6"/><rect x="64" y="46" width="21" height="21" rx="5" fill="#E5F8F6"/><rect x="105" y="54" width="21" height="21" rx="5" fill="#E5F8F6"/><path d="M44 63h20M85 57l20 6" stroke="#00B3A4" strokeWidth="1.7"/></>}
      {kind === "data" && <>{[0,1,2,3,4].map((row) => <g key={row}>{[0,1,2,3,4,5].map((col) => <circle key={col} cx={22+col*16} cy={49+row*7} r="1.6" fill={(row+col)%3===0?"#00B3A4":"#C6D2D6"}/>)}</g>)}</>}
    </g>
  );
}

export default function AP_ArchitectureVisual() {
  return (
    <div className="architecture-wrap" aria-label="APEX AI systems architecture illustration">
      <svg viewBox="0 0 760 620" className="architecture-svg" role="img" aria-labelledby="archTitle archDesc">
        <title id="archTitle">APEX AI systems architecture</title>
        <desc id="archDesc">A layered system architecture connecting automation, analytics, AI models, integrations, and data.</desc>
        <defs>
          <linearGradient id="platformTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ECF9F7"/></linearGradient>
          <linearGradient id="platformSide" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E3EAED"/><stop offset="1" stopColor="#C9D2D7"/></linearGradient>
          <linearGradient id="tealEdge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#26D2C2"/><stop offset="1" stopColor="#00A99B"/></linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#11252B" floodOpacity=".14"/></filter>
          <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="11" floodColor="#1E2328" floodOpacity=".08"/></filter>
        </defs>
        <g className="arch-orbits" opacity=".55">
          <ellipse cx="390" cy="330" rx="278" ry="178" fill="none" stroke="#DCE6E8" strokeWidth="1.5" strokeDasharray="4 10"/>
          <ellipse cx="390" cy="330" rx="220" ry="132" fill="none" stroke="#DCE6E8" strokeWidth="1.2"/>
          <path d="M115 330C220 248 563 234 671 326" fill="none" stroke="#D8E3E5" strokeWidth="1.2"/>
          <circle cx="143" cy="298" r="5" fill="#00B3A4"/><circle cx="638" cy="285" r="5" fill="#00B3A4"/><circle cx="586" cy="448" r="4" fill="#00B3A4"/><circle cx="208" cy="457" r="4" fill="#00B3A4"/>
        </g>
        <g filter="url(#softShadow)">
          <path d="M237 421 382 492 545 412 400 341Z" fill="#D3DBDF" opacity=".58"/>
          <path d="M226 390 385 470 556 383 396 305Z" fill="url(#platformSide)" stroke="#D3DCDF"/>
          <path d="M226 365 385 445 556 358 396 280Z" fill="#F7F9FA" stroke="#D9E1E4"/>
          <path d="M216 331 386 416 567 324 397 241Z" fill="url(#platformSide)" stroke="#CFD8DC"/>
          <path d="M216 303 386 388 567 296 397 213Z" fill="#FAFCFC" stroke="#D9E2E4"/>
          <path d="M204 257 389 349 580 253 395 161Z" fill="#D4DCDF" stroke="#C9D4D7"/>
          <path d="M204 228 389 320 580 224 395 132Z" fill="url(#platformTop)" stroke="#C9D4D7" strokeWidth="1.4"/>
          <path d="M204 228 389 320 580 224" fill="none" stroke="url(#tealEdge)" strokeWidth="6"/>
          <text x="389" y="215" textAnchor="middle" fill="#1E2328" fontSize="18" fontWeight="800" letterSpacing="2">APEX</text>
          <text x="389" y="237" textAnchor="middle" fill="#7B868C" fontSize="8.8" fontWeight="700" letterSpacing="1.6">AI SYSTEMS ARCHITECTURE</text>
          <text x="390" y="286" textAnchor="middle" fill="#849097" fontSize="8.5" letterSpacing="1.2">INTELLIGENT LAYER</text>
          <text x="390" y="354" textAnchor="middle" fill="#849097" fontSize="8.5" letterSpacing="1.2">INTEGRATION LAYER</text>
          <text x="390" y="417" textAnchor="middle" fill="#849097" fontSize="8.5" letterSpacing="1.2">DATA LAYER</text>
        </g>
        <ArchCard x={116} y={128} title="AUTOMATION" kind="automation" />
        <ArchCard x={500} y={85} title="ANALYTICS" kind="analytics" />
        <ArchCard x={586} y={271} title="AI MODELS" kind="models" />
        <ArchCard x={506} y={440} title="INTEGRATIONS" kind="integrations" />
        <ArchCard x={102} y={380} title="DATA" kind="data" />
        <g stroke="#00B3A4" strokeWidth="1.6" fill="none" opacity=".78"><path d="M247 186 302 224"/><path d="M500 150 467 190"/><path d="M586 325 542 316"/><path d="M506 482 459 423"/><path d="M232 426 294 387"/></g>
      </svg>
    </div>
  );
}
