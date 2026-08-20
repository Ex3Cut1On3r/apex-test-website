"use client";

import { FormEvent, useEffect, useState } from "react";
import type { ContactRequest, ContactResponse } from "@/shared/types";
import AP_Icon from "@/app/components/AP_Icon";
import { AP_TextArea, AP_TextBox } from "@/app/components/AP_TextBox";

const CONTACT_EVENT = "apex:open-contact";

export function openAP_Contact() {
  window.dispatchEvent(new CustomEvent(CONTACT_EVENT));
}

export default function AP_ContactModal() {
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
    const prior = document.body.style.overflow;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prior;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload: ContactRequest = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as ContactResponse;
      if (!response.ok || !data.ok) throw new Error(data.ok ? "Could not submit your request." : data.error);
      setStatus("sent");
    } catch (reason) {
      setStatus("error");
      setError(reason instanceof Error ? reason.message : "Could not submit your request.");
    }
  }

  if (!open) return null;

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <button type="button" className="modal-backdrop" onClick={() => setOpen(false)} aria-label="Close contact form" />
      <div className="modal-card contact-card">
        <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close">×</button>
        {status === "sent" ? (
          <div className="modal-success">
            <div className="success-mark">✓</div>
            <h2>Request received.</h2>
            <p>Thanks. Your project context has been captured for follow-up.</p>
            <button className="button button-primary" onClick={() => setOpen(false)}>Close</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">START A PROJECT</span>
            <h2 id="contact-title">What should work better?</h2>
            <p className="modal-copy">Share the system, workflow, or operational challenge. A polished brief is not required.</p>
            <form onSubmit={submit} className="contact-form" noValidate>
              <label>Name<AP_TextBox required name="name" minLength={2} maxLength={80} autoComplete="name" /></label>
              <label>Work email<AP_TextBox required type="email" name="email" autoComplete="email" /></label>
              <label className="field-wide">Company<AP_TextBox name="company" maxLength={120} autoComplete="organization" /></label>
              <label className="field-wide">What are you trying to improve?<AP_TextArea required name="message" minLength={10} maxLength={2000} rows={5} /></label>
              {status === "error" && <p className="form-error field-wide">{error}</p>}
              <button className="button button-primary field-wide" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send request"}<AP_Icon name="arrow-up-right" /></button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
