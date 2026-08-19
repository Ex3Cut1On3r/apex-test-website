"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon, CalendarIcon, ChartIcon, CheckIcon, FlowIcon, MessageIcon, SearchIcon, ShieldIcon } from "./Icons";
import { CONTACT_EVENT } from "./ContactModal";

export const CASE_EVENT = "apex:open-case-study";

export function CaseStudyButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new CustomEvent(CASE_EVENT))}>{children}</button>;
}

export function CaseStudyModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(CASE_EVENT, show);
    return () => window.removeEventListener(CASE_EVENT, show);
  }, []);
  useEffect(() => {
    if (!open) return;
    const prior = document.body.style.overflow;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prior; window.removeEventListener("keydown", onKey); };
  }, [open]);
  if (!open) return null;

  const startProject = () => {
    setOpen(false);
    window.setTimeout(() => window.dispatchEvent(new CustomEvent(CONTACT_EVENT)), 80);
  };

  return (
    <div className="modal-shell case-modal-shell" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <button type="button" className="modal-backdrop" onClick={() => setOpen(false)} aria-label="Close case study" />
      <article className="case-modal">
        <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close">×</button>
        <header className="case-modal-head">
          <Image src="/tutwithus-logo.png" alt="TutWithUs" width={126} height={58} />
          <div>
            <span className="eyebrow">CASE STUDY</span>
            <h2 id="case-title">TutWithUs — Building a clearer tutoring experience</h2>
            <p>APEX collaborated with TutWithUs to elevate the digital tutoring experience — redesigning the platform, improving booking and support flows, and creating stronger operational visibility.</p>
          </div>
        </header>

        <div className="case-modal-body">
          <div className="case-modal-visual">
            <div className="browser-frame browser-large"><div className="browser-dots"><i/><i/><i/></div><Image src="/tutwithus-reference.png" alt="TutWithUs website" width={1600} height={1000} /></div>
            <div className="case-outcomes">
              <div><SearchIcon/><strong>Clearer tutor discovery</strong><span>Improved information hierarchy for students and tutors.</span></div>
              <div><CalendarIcon/><strong>Better booking flow</strong><span>Reduced friction across scheduling and session management.</span></div>
              <div><MessageIcon/><strong>Stronger admin usability</strong><span>Centralized visibility and simpler control.</span></div>
              <div><ChartIcon/><strong>Scalable foundation</strong><span>Built to support future features and operational growth.</span></div>
            </div>
          </div>
          <div className="case-modal-details">
            <Detail icon={<SearchIcon/>} title="Project scope">Redesign the TutWithUs platform, add an AI chatbot, implement admin panel logic, and streamline tutoring, booking, and management workflows.</Detail>
            <Detail icon={<ShieldIcon/>} title="Business need">Create a clearer digital experience for students and tutors while improving visibility, support, and administrative control.</Detail>
            <Detail icon={<FlowIcon/>} title="What APEX delivered">A modern platform with a refreshed experience, AI chat assistance, admin tools, booking and scheduling flows, and analytics for better decision-making.</Detail>
            <Detail icon={<CheckIcon/>} title="Why it matters">A cleaner user journey, better tutor discovery, and a system that scales with the platform’s growing community.</Detail>
            <div className="client-reference"><span>CLIENT REFERENCE</span><strong>TutWithUs Team</strong><p>Education platform collaboration</p></div>
          </div>
        </div>

        <footer className="case-modal-footer">
          <button className="button button-primary" type="button" onClick={startProject}>Start a Project <ArrowUpRightIcon/></button>
          <button className="button button-secondary" type="button" onClick={() => setOpen(false)}>Close Case Study</button>
        </footer>
      </article>
    </div>
  );
}

function Detail({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <div className="detail-row"><span className="detail-icon">{icon}</span><div><strong>{title}</strong><p>{children}</p></div></div>;
}
