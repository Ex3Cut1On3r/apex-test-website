import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
function Icon({ children, ...props }: P) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}
export const BrainIcon = (p:P) => <Icon {...p}><path d="M9.5 4.5A3 3 0 0 0 4 6v2a3 3 0 0 0 0 5v2a3 3 0 0 0 5.5 1.5V4.5Z"/><path d="M14.5 4.5A3 3 0 0 1 20 6v2a3 3 0 0 1 0 5v2a3 3 0 0 1-5.5 1.5V4.5Z"/><path d="M9.5 8H7M14.5 8H17M9.5 13H7M14.5 13H17"/></Icon>;
export const LayersIcon = (p:P) => <Icon {...p}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></Icon>;
export const NodesIcon = (p:P) => <Icon {...p}><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h3a3 3 0 0 1 3 3v6M6 9v3a3 3 0 0 0 3 3h6"/></Icon>;
export const DatabaseIcon = (p:P) => <Icon {...p}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></Icon>;
export const CodeIcon = (p:P) => <Icon {...p}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></Icon>;
export const FlowIcon = (p:P) => <Icon {...p}><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M9 6.5h4a3 3 0 0 1 3 3V15M6 9v6a3 3 0 0 0 3 3h6"/></Icon>;
export const FactoryIcon = (p:P) => <Icon {...p}><path d="M3 21V9l6 3V8l6 4V5h3v16H3Z"/><path d="M7 17h2M12 17h2M17 17h1"/></Icon>;
export const PlaneIcon = (p:P) => <Icon {...p}><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z"/></Icon>;
export const PeopleIcon = (p:P) => <Icon {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></Icon>;
export const BriefcaseIcon = (p:P) => <Icon {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></Icon>;
export const CompassIcon = (p:P) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/></Icon>;
export const GridIcon = (p:P) => <Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>;
export const ChartIcon = (p:P) => <Icon {...p}><path d="M3 3v18h18"/><path d="m7 15 4-4 3 2 5-6"/></Icon>;
export const ShieldIcon = (p:P) => <Icon {...p}><path d="M12 3 4.5 6v5.5c0 4.6 3.1 7.7 7.5 9.5 4.4-1.8 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></Icon>;
export const ArrowUpRightIcon = (p:P) => <Icon {...p}><path d="M7 17 17 7M8 7h9v9"/></Icon>;
export const MenuIcon = (p:P) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;
