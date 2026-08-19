import Image from "next/image";
import ContactButton from "./ContactModal";
import { MenuIcon } from "./Icons";

const links = [
  ["Solutions", "#solutions"],
  ["Industries", "#industries"],
  ["Case Studies", "#case-studies"],
  ["Method", "#process"],
  ["About", "#about"],
];

export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav-row">
        <a className="brand" href="#top" aria-label="APEX home">
          <Image src="/apex-logo.svg" alt="APEX" width={195} height={60} priority />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <ContactButton className="nav-button">Get Started</ContactButton>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><MenuIcon /></summary>
            <nav aria-label="Mobile navigation">
              {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
