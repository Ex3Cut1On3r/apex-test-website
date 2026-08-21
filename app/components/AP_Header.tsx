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
    <header className="topbar sticky top-0 z-[80] border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container nav-row grid min-h-[76px] grid-cols-[minmax(130px,180px)_1fr_auto] items-center gap-4 lg:gap-7">
        <Link prefetch={false} className="brand" href="/" aria-label="APEX home">
          <Image src="/api/assets/logo/apex-logo.svg" alt="APEX" width={170} height={52} priority />
        </Link>
        <nav className="nav-links hidden items-center justify-center gap-6 lg:flex xl:gap-8" aria-label="Primary navigation">
          {nav.map((item) => {
            const isActive = Boolean(activePath && item.href === activePath);
            return <Link prefetch={false} className={isActive ? "active" : ""} key={`${item.label}-${item.href}`} href={item.href}>{item.label}</Link>;
          })}
        </nav>
        <div className="nav-actions flex items-center justify-end gap-2">
          <AP_Button className="nav-button hidden sm:inline-flex" contact>Get Started</AP_Button>
          <button className="mobile-menu-button !grid lg:!hidden" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}><AP_Icon name="menu" /></button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav !grid gap-1 border-t border-slate-200 bg-white px-6 py-5 shadow-xl lg:!hidden" aria-label="Mobile navigation">
          {nav.map((item) => <Link prefetch={false} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50" key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <AP_Button className="mt-3" contact>Get Started</AP_Button>
        </nav>
      )}
    </header>
  );
}
