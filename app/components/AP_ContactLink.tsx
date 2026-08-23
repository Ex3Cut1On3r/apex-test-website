"use client";

import type { ReactNode } from "react";
import AP_Icon from "@/app/components/AP_Icon";
import { openAP_Contact } from "@/app/components/AP_ContactModal";

/** Text-style call to action that opens the contact modal. */
export default function AP_ContactLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button type="button" className={className} onClick={openAP_Contact}>
      <span>{children}</span><AP_Icon name="arrow-right" />
    </button>
  );
}
