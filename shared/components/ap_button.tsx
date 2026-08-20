"use client";

import type { ReactNode } from "react";
import ApIcon from "./ap_icon";
import { openApContact } from "./ap_contact_modal";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "light" | "plain";
  contact?: boolean;
};

export default function ApButton({ children, className = "", href, variant = "primary", contact = false }: Props) {
  const classes = `button button-${variant} ${className}`.trim();

  if (href) {
    return <a className={classes} href={href}><span>{children}</span><ApIcon name="arrow-up-right" /></a>;
  }

  return (
    <button type="button" className={classes} onClick={contact ? openApContact : undefined}>
      <span>{children}</span><ApIcon name="arrow-up-right" />
    </button>
  );
}
