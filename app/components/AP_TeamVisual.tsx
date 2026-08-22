export default function AP_TeamVisual() {
  return (
    <div className="ap-team-visual" aria-hidden="true">
      <svg viewBox="0 0 700 430" role="presentation">
        <defs>
          <linearGradient id="teamBg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EEF7F7"/><stop offset="1" stopColor="#DDEBED"/></linearGradient>
          <linearGradient id="teamDesk" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#D7E2E5"/><stop offset="1" stopColor="#B7CAD0"/></linearGradient>
        </defs>
        <rect width="700" height="430" rx="22" fill="url(#teamBg)"/>
        <path d="M0 74h700M92 0v430M600 0v430" stroke="#C9DADD" strokeOpacity=".7"/>
        <rect x="110" y="302" width="480" height="26" rx="10" fill="url(#teamDesk)"/>
        <rect x="270" y="238" width="160" height="88" rx="12" fill="#fff" stroke="#BFD0D4"/><rect x="287" y="253" width="126" height="58" rx="7" fill="#0C202B"/><path d="M310 290c25-37 48 23 84-21" stroke="#26C7B9" strokeWidth="4" fill="none"/>
        <g><circle cx="192" cy="185" r="38" fill="#E9B798"/><path d="M148 290c0-64 18-91 46-91s48 27 48 91" fill="#2C5461"/><path d="M158 178c5-45 66-49 75 0-21-11-53-10-75 0Z" fill="#263D45"/></g>
        <g><circle cx="300" cy="164" r="35" fill="#DFA989"/><path d="M261 286c0-59 16-86 40-86 27 0 47 27 47 86" fill="#E8F1F2"/><path d="M266 153c6-38 55-49 69-5-17-7-47-7-69 5Z" fill="#1E3138"/></g>
        <g><circle cx="410" cy="169" r="37" fill="#9C654E"/><path d="M369 288c0-64 17-91 43-91 29 0 51 27 51 91" fill="#153B45"/><path d="M371 157c2-39 64-46 76-2-22-10-51-9-76 2Z" fill="#142C33"/></g>
        <g><circle cx="523" cy="190" r="36" fill="#F0C3A6"/><path d="M481 290c0-60 18-87 44-87 28 0 49 27 49 87" fill="#8AB9C0"/><path d="M486 179c9-43 62-44 76-3-20-9-55-8-76 3Z" fill="#6A493E"/></g>
        <circle cx="566" cy="70" r="8" fill="#00B3A4" opacity=".7"/><circle cx="122" cy="98" r="5" fill="#00B3A4" opacity=".55"/>
      </svg>
      <div className="ap-team-signal ap-team-signal-a"><strong>Outcome ownership</strong><small>Build for the real operation</small></div>
      <div className="ap-team-signal ap-team-signal-b"><strong>Systems thinking</strong><small>Connect product, data, and people</small></div>
    </div>
  );
}
