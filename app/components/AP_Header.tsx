"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";
import AP_Icon from "@/app/components/AP_Icon";

export default function AP_Header({ nav, activePath = "" }: { nav: NavItem[]; activePath?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="topbar ap-ref-header">
      <div className="container nav-row ap-ref-nav-row">
        <Link prefetch={false} className="brand ap-ref-brand" href="/" aria-label="APEX home">
          <Image src="/api/assets/logo/apex-logo.svg" alt="APEX" width={170} height={52} priority />
        </Link>
        <nav className="nav-links ap-ref-nav-links" aria-label="Primary navigation">
          {nav.map((item) => {
            const route = item.href.split("#")[0] || "/";
            const isActive = Boolean(activePath && (item.href === activePath || route === activePath));
            return <Link prefetch={false} className={isActive ? "active" : ""} key={`${item.label}-${item.href}`} href={item.href}>{item.label}</Link>;
          })}
        </nav>
        <div className="nav-actions ap-ref-nav-actions">
          <AP_Button className="nav-button ap-ref-nav-cta" contact>Let&apos;s build together</AP_Button>
          <button className="mobile-menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}><AP_Icon name="menu" /></button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav ap-ref-mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => <Link prefetch={false} key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <AP_Button className="mt-3" contact>Let&apos;s build together</AP_Button>
        </nav>
      )}
    </header>
  );
}
