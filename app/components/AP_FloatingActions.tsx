"use client";

import { useState } from "react";
import type { SocialContent } from "@/shared/types";
import { whatsappHref } from "@/shared/whatsapp";

function Icon({ name }: { name: "whatsapp" | "ai" | "arrow" }) {
  if (name === "whatsapp") return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 11.8a8 8 0 0 1-11.7 7.1L4 20l1.2-4.1A8 8 0 1 1 20 11.8Z" stroke="currentColor" strokeWidth="1.8"/><path d="M9 8.2c.4-.3.8-.1 1 .4l.6 1.4c.2.4.1.7-.2 1l-.5.5c.7 1.5 1.8 2.6 3.3 3.3l.5-.6c.3-.3.6-.4 1-.2l1.4.7c.5.2.7.6.4 1-.6 1-1.6 1.4-2.7 1.2-3.6-.8-6.8-4-7.6-7.6-.2-1.1.2-2.1 1.2-2.7Z" fill="currentColor"/></svg>;
  if (name === "arrow") return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 14 8.5 19.5 10 14 12l-2 5.5L10 12 4.5 10 10 8.5 12 3Z" stroke="currentColor" strokeWidth="1.6"/><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" fill="currentColor"/></svg>;
}

export default function AP_FloatingActions({ social }: { social: SocialContent }) {
  const [chatOpen, setChatOpen] = useState(false);
  function contact() {
    window.dispatchEvent(new CustomEvent("apex:open-contact"));
    setChatOpen(false);
  }
  const whatsapp = whatsappHref(social);
  return (
    <>
      {chatOpen && <aside className="ap-mini-chat ap-reveal" aria-label="APEX assistant">
        <div className="ap-mini-chat-head"><strong>{social.chatbotTitle}</strong><span>{social.chatbotSubtitle}</span></div>
        <div className="ap-mini-chat-body">
          <p>No external AI service is connected yet. Use the quick paths below and the CMS can replace this with the production assistant later.</p>
          <button onClick={contact}>I want to modernize an operation</button>
          <button onClick={contact}>I need a custom software system</button>
          <button onClick={contact}>I want to discuss AI automation</button>
        </div>
      </aside>}
      <div className="ap-floating-actions" aria-label="Quick contact actions">
        {whatsapp && (
          <a
            className="ap-float-action ap-float-whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.whatsappLabel}
          ><Icon name="whatsapp" /></a>
        )}
        <button className="ap-float-action ap-float-ai" onClick={() => setChatOpen((value) => !value)} aria-expanded={chatOpen} aria-label={social.chatbotLabel}><Icon name="ai" /></button>
      </div>
    </>
  );
}
