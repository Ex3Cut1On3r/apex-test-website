"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/shared/types/types";
import ApButton from "./ap_button";
import ApIcon from "./ap_icon";

export default function ApHeader({ nav, activePath = "" }: { nav: NavItem[]; activePath?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="topbar">
      <div className="container nav-row">
        <Link className="brand" href="/" aria-label="APEX home">
          <Image src="/shared/assets/logo/apex-logo.svg" alt="APEX" width={170} height={52} priority />
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {nav.map((item) => {
            const isActive = activePath && item.href === activePath;
            return <Link className={isActive ? "active" : ""} key={`${item.label}-${item.href}`} href={item.href}>{item.label}</Link>;
          })}
        </nav>
        <div className="nav-actions">
          <ApButton className="nav-button" contact>Get Started</ApButton>
          <button className="mobile-menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}><ApIcon name="menu" /></button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <ApButton contact>Get Started</ApButton>
        </nav>
      )}
    </header>
  );
}
