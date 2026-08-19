"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRightIcon } from "./Icons";

const CONTACT_EVENT = "apex:open-contact";

export default function ContactButton({ children = "Start a Conversation", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      className={`button button-primary ${className}`.trim()}
      onClick={() => window.dispatchEvent(new CustomEvent(CONTACT_EVENT))}
    >
      <span>{children}</span><ArrowUpRightIcon />
    </button>
  );
}

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const show = () => { setStatus("idle"); setError(""); setOpen(true); };
    window.addEventListener(CONTACT_EVENT, show);
    return () => window.removeEventListener(CONTACT_EVENT, show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Could not submit the request.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not submit the request.");
    }
  }

  if (!open) return null;

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <button type="button" className="modal-backdrop" onClick={() => setOpen(false)} aria-label="Close contact form" />
      <div className="modal-card">
        <div className="modal-head">
          <div>
            <span className="eyebrow">START A CONVERSATION</span>
            <h2 id="contact-title">What should work better?</h2>
            <p>Share the workflow, system, or operational problem. A polished brief is not required.</p>
          </div>
          <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close">×</button>
        </div>

        {status === "sent" ? (
          <div className="modal-success">
            <div className="success-mark">✓</div>
            <h3>Request received.</h3>
            <p>Thanks. The project context has been captured and is ready for follow-up.</p>
            <button className="button button-primary" onClick={() => setOpen(false)}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="contact-form" noValidate>
            <label>Name<input required name="name" minLength={2} maxLength={80} autoComplete="name" /></label>
            <label>Work email<input required type="email" name="email" autoComplete="email" /></label>
            <label className="field-wide">Company<input name="company" maxLength={120} autoComplete="organization" /></label>
            <label className="field-wide">What are you trying to improve?<textarea required name="message" minLength={10} maxLength={2000} rows={5} /></label>
            {status === "error" && <p className="form-error field-wide">{error}</p>}
            <button className="button button-primary field-wide" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send request"}<ArrowUpRightIcon />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
