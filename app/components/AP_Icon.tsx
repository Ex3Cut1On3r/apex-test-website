import type { AP_IconName } from "@/shared/types";

export default function AP_Icon({ name, className = "" }: { name: AP_IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <use href={`/api/assets/icons/icons.svg#${name}`} />
    </svg>
  );
}
