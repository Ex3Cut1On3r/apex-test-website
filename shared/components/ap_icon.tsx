import type { ApIconName } from "@/shared/types/types";

export default function ApIcon({ name, className = "" }: { name: ApIconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <use href={`/shared/assets/icons/icons.svg#${name}`} />
    </svg>
  );
}
