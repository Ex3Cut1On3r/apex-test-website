"use client";

import { useEffect, useRef, useState } from "react";
import type { CareerRole } from "@/shared/types";
import AP_Icon from "@/app/components/AP_Icon";

const COVER_LIMIT = 2000;
const RESUME_LIMIT = 10 * 1024 * 1024;
const RESUME_TYPES = [".pdf", ".doc", ".docx"];

type Props = {
  roles: CareerRole[];
  locations: string[];
  note: string;
};

export default function AP_CareerApplyForm({ roles, locations, note }: Props) {
  const [role, setRole] = useState("");
  const [cover, setCover] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  // Role cards link here with ?role — pick the role the visitor clicked.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest?.("[data-apply-role]");
      if (trigger) setRole(trigger.getAttribute("data-apply-role") || "");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function acceptFile(file: File | undefined) {
    if (!file) return;
    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!RESUME_TYPES.includes(extension)) {
      setStatus({ tone: "error", text: "Please attach a PDF, DOC, or DOCX file." });
      return;
    }
    if (file.size > RESUME_LIMIT) {
      setStatus({ tone: "error", text: "That file is larger than 10MB." });
      return;
    }
    setStatus(null);
    setResume(file);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();

    if (!resume) {
      setStatus({ tone: "error", text: "Please attach your resume or CV." });
      return;
    }

    const details = [
      `Application for: ${role || "General interest"}`,
      `Phone: ${String(form.get("phone") ?? "").trim()}`,
      `Location: ${String(form.get("location") ?? "").trim()}`,
      `LinkedIn / portfolio: ${String(form.get("linkedin") ?? "").trim() || "—"}`,
      `Resume: ${resume.name}`,
      "",
      cover.trim(),
    ].join("\n");

    setSending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company: role, message: details.slice(0, COVER_LIMIT) }),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!result.ok) throw new Error(result.error || "We could not send your application.");
      setStatus({ tone: "ok", text: "Application received. We'll get back to you soon." });
      formEl.reset();
      setRole("");
      setCover("");
      setResume(null);
    } catch (error) {
      setStatus({ tone: "error", text: error instanceof Error ? error.message : "Something went wrong." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="ap-cx-form" id="apply" onSubmit={submit} noValidate={false}>
      <div className="ap-cx-form-grid">
        <label className="ap-cx-field">
          <span>Full Name <em>*</em></span>
          <input className="ap-cx-input" name="name" type="text" placeholder="e.g., Jane Doe" required minLength={2} maxLength={80} />
        </label>
        <label className="ap-cx-field">
          <span>Email <em>*</em></span>
          <input className="ap-cx-input" name="email" type="email" placeholder="jane.doe@email.com" required maxLength={180} />
        </label>
        <label className="ap-cx-field">
          <span>Phone Number <em>*</em></span>
          <input className="ap-cx-input" name="phone" type="tel" placeholder="+1 (555) 123-4567" required maxLength={40} />
        </label>
        <label className="ap-cx-field ap-cx-select">
          <span>Location <em>*</em></span>
          <select className="ap-cx-input" name="location" defaultValue="" required>
            <option value="" disabled>e.g., Toronto, Canada</option>
            {locations.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <AP_Icon name="chevron-down" />
        </label>

        <label className="ap-cx-field ap-cx-field-role ap-cx-select">
          <span>Role Applying For <em>*</em></span>
          <select className="ap-cx-input" name="role" value={role} onChange={(event) => setRole(event.target.value)} required>
            <option value="" disabled>Select a role</option>
            {roles.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}
            <option value="General interest">General interest</option>
          </select>
          <AP_Icon name="chevron-down" />
        </label>
        <label className="ap-cx-field ap-cx-field-link">
          <span>LinkedIn or Portfolio</span>
          <input className="ap-cx-input" name="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" maxLength={200} />
        </label>

        <div className="ap-cx-field ap-cx-field-resume">
          <span>Resume / CV <em>*</em></span>
          <div
            className="ap-cx-drop"
            role="button"
            tabIndex={0}
            data-drag={dragging}
            onClick={() => fileInput.current?.click()}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); fileInput.current?.click(); } }}
            onDragOver={(event) => { event.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => { event.preventDefault(); setDragging(false); acceptFile(event.dataTransfer.files?.[0]); }}
          >
            <AP_Icon name="upload-cloud" />
            <b>{resume ? resume.name : "Drag & drop your file here"}</b>
            <u>{resume ? "Choose a different file" : "or click to browse"}</u>
            <small>PDF, DOC, DOCX (Max 10MB)</small>
          </div>
          <input ref={fileInput} className="sr-only" type="file" accept=".pdf,.doc,.docx" hidden onChange={(event) => acceptFile(event.target.files?.[0])} />
        </div>

        <label className="ap-cx-field ap-cx-field-cover">
          <span>Cover Letter <em>*</em></span>
          <div className="ap-cx-textarea-wrap">
            <textarea
              className="ap-cx-textarea"
              name="cover"
              placeholder="Tell us why you're a great fit for this role and what excites you about APEX..."
              maxLength={COVER_LIMIT}
              required
              value={cover}
              onChange={(event) => setCover(event.target.value)}
            />
            <span className="ap-cx-counter">{cover.length} / {COVER_LIMIT}</span>
          </div>
        </label>
      </div>

      <div className="ap-cx-form-foot">
        <p className="ap-cx-privacy"><AP_Icon name="shield-check" />{note}</p>
        <button className="ap-cx-btn" type="submit" disabled={sending}>
          <span>{sending ? "Sending..." : "Submit application"}</span>
          <AP_Icon name="arrow-right" />
        </button>
      </div>
      {status && <p className="ap-cx-status" data-tone={status.tone} role="status">{status.text}</p>}
    </form>
  );
}
