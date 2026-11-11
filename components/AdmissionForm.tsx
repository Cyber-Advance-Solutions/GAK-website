"use client";

import { Fragment, useState, type FormEvent } from "react";
import Link from "next/link";
import { postForm } from "@/lib/api";
import { useToast } from "@/components/Toast";

/** GET /admissions/settings (admin: Admissions > Online form) */
export type AdmissionField = {
  key: string;
  section: string;
  type: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  options?: string[];
};
export type AdmissionSettings = {
  pageHeading?: string;
  introText?: string;
  session?: string;
  checklist?: { title: string; description?: string }[];
  registrationFormText?: string;
  registrationFormUrl?: string;
  formInstructions?: string;
  streamOptions?: string[];
  sections?: { key: string; title: string }[];
  fields?: AdmissionField[];
  submitButtonText?: string;
  confirmationMessage?: string;
  isAcceptingSubmissions?: boolean;
};

// Fields shown side by side (same layout as the original hand-written form)
const PAIRS: [string, string][] = [
  ["dateOfBirth", "bFormNumber"],
  ["phoneResidence", "phoneOffice"],
  ["motherName", "motherOccupation"],
];

const headingStyle = { fontSize: "1rem", fontWeight: 700, color: "var(--green-900)" } as const;

export default function AdmissionForm({ settings }: { settings: AdmissionSettings | null }) {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  const fields = settings?.fields ?? [];
  if (!settings || fields.length === 0) {
    return <p style={{ color: "var(--ink-soft)" }}>Online admission is not available right now. Please try again later.</p>;
  }
  if (settings.isAcceptingSubmissions === false) {
    return (
      <div className="form">
        <p>Online admissions are currently closed.</p>
        <RegistrationNote settings={settings} />
      </div>
    );
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setError("");
    setDone("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body: Record<string, unknown> = {};
    for (const f of fields) {
      const v = fd.get(f.key);
      if (typeof v === "string" && v.trim() !== "") body[f.key] = v.trim();
    }
    body.website = String(fd.get("website") || ""); // honeypot
    setBusy(true);
    try {
      const res = await postForm<{ referenceNo?: string }>("/admissions/submissions", body);
      const msg = settings.confirmationMessage || "Admission request submitted.";
      toast(msg);
      setDone(res?.referenceNo ? `${msg} Reference: ${res.referenceNo}` : msg);
      form.reset();
    } catch (err) {
      setError((err as Error).message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const options = (f: AdmissionField) => (f.key === "stream" ? settings.streamOptions ?? f.options ?? [] : f.options ?? []);

  const control = (f: AdmissionField, withLabel = true) => (
    <div className="field" key={f.key}>
      {withLabel ? (
        <label htmlFor={`adm-${f.key}`}>
          {f.label} {f.required ? <span className="req">*</span> : null}
        </label>
      ) : null}
      {f.type === "select" ? (
        <select id={`adm-${f.key}`} name={f.key} defaultValue="" required={f.required}>
          <option value="">{f.placeholder || "Select"}</option>
          {options(f).map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : f.type === "textarea" ? (
        <textarea id={`adm-${f.key}`} name={f.key} placeholder={f.placeholder || undefined} required={f.required} style={{ minHeight: 80 }} aria-label={f.label} />
      ) : (
        <input
          id={`adm-${f.key}`}
          name={f.key}
          type={f.type === "date" ? "date" : f.type === "tel" ? "tel" : "text"}
          placeholder={f.placeholder || undefined}
          required={f.required}
        />
      )}
      {f.helpText ? <p className="field-help">{f.helpText}</p> : null}
    </div>
  );

  const renderSection = (sec: { key: string; title: string }, idx: number) => {
    const list = fields.filter((f) => f.section === sec.key);
    if (list.length === 0) return null;
    // The stream picker is a single labelled field without a section heading
    if (sec.key === "stream") return <Fragment key={sec.key}>{list.map((f) => control(f))}</Fragment>;
    // Address sections: the heading is the label of their only textarea
    const single = list.length === 1 && list[0].type === "textarea";
    const rows: AdmissionField[][] = [];
    for (const f of list) {
      const pair = PAIRS.find((p) => p[1] === f.key);
      const last = rows[rows.length - 1];
      if (pair && last && last.length === 1 && last[0].key === pair[0]) last.push(f);
      else rows.push([f]);
    }
    return (
      <Fragment key={sec.key}>
        <div className="field" style={idx > 1 ? { marginBottom: 6, marginTop: 10 } : { marginBottom: 6 }}>
          <label style={headingStyle}>
            {sec.title} {single && list[0].required ? <span className="req">*</span> : null}
          </label>
        </div>
        {single
          ? control(list[0], false)
          : rows.map((r, i) =>
              r.length === 2 ? (
                <div className="frow" key={i}>
                  {r.map((f) => control(f))}
                </div>
              ) : (
                control(r[0])
              )
            )}
      </Fragment>
    );
  };

  const sections = settings.sections?.length ? settings.sections : Array.from(new Set(fields.map((f) => f.section))).map((key) => ({ key, title: key }));

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      {settings.formInstructions ? <p className="formnote" style={{ marginTop: 0 }}>{settings.formInstructions}</p> : null}
      {sections.map(renderSection)}
      {error ? (
        <p role="alert" style={{ color: "#b42318", fontWeight: 600, margin: "4px 0 12px" }}>{error}</p>
      ) : null}
      {done ? (
        <p role="status" style={{ color: "var(--green-900)", fontWeight: 600, margin: "4px 0 12px" }}>{done}</p>
      ) : null}
      <button type="submit" className="btn-submit" disabled={busy}>
        {busy ? "Sending…" : settings.submitButtonText || "Submit application"}
      </button>
      <RegistrationNote settings={settings} />
    </form>
  );
}

/** "Prefer paper? Download the registration form" — the last words become the link */
function RegistrationNote({ settings }: { settings: AdmissionSettings }) {
  const text = settings.registrationFormText?.trim();
  const url = settings.registrationFormUrl?.trim();
  if (!text || !url) return null;
  const m = text.match(/^(.*?\?\s*)(.+)$/);
  const [lead, linkText] = m ? [m[1], m[2]] : ["", text];
  const linkStyle = { color: "var(--green-700)", fontWeight: 700, textDecoration: "underline" } as const;
  return (
    <p className="formnote">
      {lead}
      {url.startsWith("/") ? (
        <Link href={url} style={linkStyle}>{linkText}</Link>
      ) : (
        <a href={url} style={linkStyle} target="_blank" rel="noopener noreferrer">{linkText}</a>
      )}
      .
    </p>
  );
}
