"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ContactButton from "./ContactModal";
import { MenuIcon } from "./Icons";

const links = [
  ["Solutions", "#solutions"],
  ["Industries", "#industries"],
  ["Case Studies", "#case-studies"],
  ["Method", "#method"],
  ["About", "#about"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="topbar">
      <div className="container nav-row">
        <a className="brand" href="#top" aria-label="APEX home"><Image src="/apex-logo.svg" alt="APEX" width={170} height={52} priority /></a>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <ContactButton className="nav-button">Get Started</ContactButton>
          <button className="mobile-menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}><MenuIcon /></button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<ContactButton>Get Started</ContactButton></nav>}
    </header>
  );
}
