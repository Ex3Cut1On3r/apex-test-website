import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
function Icon({ children, ...props }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}
export const BrainIcon = (p:P) => <Icon {...p}><path d="M9.5 4.5A3 3 0 0 0 4 6v2a3 3 0 0 0 0 5v2a3 3 0 0 0 5.5 1.5V4.5Z"/><path d="M14.5 4.5A3 3 0 0 1 20 6v2a3 3 0 0 1 0 5v2a3 3 0 0 1-5.5 1.5V4.5Z"/><path d="M9.5 8H7M14.5 8H17M9.5 13H7M14.5 13H17"/></Icon>;
export const LayersIcon = (p:P) => <Icon {...p}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></Icon>;
export const NodesIcon = (p:P) => <Icon {...p}><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h3a3 3 0 0 1 3 3v6M6 9v3a3 3 0 0 0 3 3h6"/></Icon>;
export const DatabaseIcon = (p:P) => <Icon {...p}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></Icon>;
export const CodeIcon = (p:P) => <Icon {...p}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></Icon>;
export const FlowIcon = (p:P) => <Icon {...p}><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M9 6.5h4a3 3 0 0 1 3 3V15M6 9v6a3 3 0 0 0 3 3h6"/></Icon>;
export const BriefcaseIcon = (p:P) => <Icon {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></Icon>;
export const CompassIcon = (p:P) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/></Icon>;
export const GridIcon = (p:P) => <Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>;
export const ChartIcon = (p:P) => <Icon {...p}><path d="M3 3v18h18"/><path d="m7 15 4-4 3 2 5-6"/></Icon>;
export const ShieldIcon = (p:P) => <Icon {...p}><path d="M12 3 4.5 6v5.5c0 4.6 3.1 7.7 7.5 9.5 4.4-1.8 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></Icon>;
export const ArrowUpRightIcon = (p:P) => <Icon {...p}><path d="M7 17 17 7M8 7h9v9"/></Icon>;
export const ArrowRightIcon = (p:P) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
export const MenuIcon = (p:P) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;
export const GraduationIcon = (p:P) => <Icon {...p}><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12.2V16c2.5 2 7.5 2 10 0v-3.8M21 10v6"/></Icon>;
export const LeafIcon = (p:P) => <Icon {...p}><path d="M20 4C12 4 6 7 4 13c-1 3 1 6 4 7 6 2 10-4 12-16Z"/><path d="M6 18c3-5 7-8 12-11"/></Icon>;
export const CheckIcon = (p:P) => <Icon {...p}><path d="m5 12 4 4L19 6"/></Icon>;
export const SearchIcon = (p:P) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Icon>;
export const CalendarIcon = (p:P) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></Icon>;
export const MessageIcon = (p:P) => <Icon {...p}><path d="M21 15a4 4 0 0 1-4 4H9l-5 3v-3a4 4 0 0 1-2-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v8Z"/></Icon>;
export const LockIcon = (p:P) => <Icon {...p}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></Icon>;
export const GlobeIcon = (p:P) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></Icon>;
export const SparkIcon = (p:P) => <Icon {...p}><path d="m12 3 1.8 4.8L19 10l-5.2 2.2L12 17l-1.8-4.8L5 10l5.2-2.2L12 3Z"/></Icon>;
