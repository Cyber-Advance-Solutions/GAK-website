"use client";

import { Fragment, useState, type FormEvent } from "react";
import { API_URL, postForm } from "@/lib/api";
import { useToast } from "@/components/Toast";
import type { FormConfig, FormField } from "@/lib/mappers/careers";

/**
 * A public website form driven by the admin's form config (GET /forms/:formKey/config):
 * labels, placeholders, guidance, dropdown options, required flags, button text and the
 * confirmation message all come from the admin panel. Submits to POST /forms/:formKey/submissions.
 *
 * Layout matches the site's hand-written forms: consecutive short fields are paired in a
 * `.frow`; textareas, `choiceFields` and file fields take the full width.
 */
export default function PublicForm({
  formKey,
  config,
  choiceFields = [],
  otherFields = {},
}: {
  formKey: "career" | "contact" | "feedback";
  config: FormConfig | null;
  /** select fields rendered as a radio list (`.choices`) instead of a dropdown */
  choiceFields?: string[];
  /** select fields that show an extra text input when "Other" is chosen: key -> { name, placeholder } */
  otherFields?: Record<string, { name: string; placeholder?: string }>;
}) {
  const toast = useToast();
  const [values, setValues] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  if (!config || config.fields.length === 0) {
    return <p style={{ color: "var(--ink-soft)" }}>This form is not available right now. Please try again later.</p>;
  }
  if (config.isAccepting === false) {
    return <p style={{ color: "var(--ink-soft)" }}>This form is currently closed.</p>;
  }

  const set = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const uploadFile = async (field: FormField, file: File) => {
    const fd = new FormData();
    fd.append("category", field.uploadCategory || "careers");
    fd.append("file", file);
    const res = await fetch(`${API_URL}/upload/single`, { method: "POST", body: fd });
    const json = await res.json().catch(() => null);
    if (!res.ok) throw new Error((json && json.message) || `${field.label}: upload failed`);
    return String(json?.data?.filePath || "");
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setError("");
    setDone("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    setBusy(true);
    try {
      const body: Record<string, unknown> = {};
      for (const f of config.fields) {
        if (f.type === "file") {
          const file = fd.get(f.key);
          if (file instanceof File && file.size > 0) body[f.key] = await uploadFile(f, file);
          continue;
        }
        const v = fd.get(f.key);
        if (typeof v === "string" && v.trim() !== "") body[f.key] = v.trim();
      }
      // "Other" free-text inputs have no backend field yet; sent along (the backend ignores unknown keys)
      for (const o of Object.values(otherFields)) {
        const v = fd.get(o.name);
        if (typeof v === "string" && v.trim()) body[o.name] = v.trim();
      }
      body.website = String(fd.get("website") || ""); // honeypot
      const res = await postForm<{ referenceNo?: string; confirmationMessage?: string }>(`/forms/${formKey}/submissions`, body);
      const msg = res?.confirmationMessage || config.confirmationMessage || "Thank you — your submission has been received.";
      toast(msg);
      setDone(res?.referenceNo ? `${msg} Reference: ${res.referenceNo}` : msg);
      form.reset();
      setValues({});
    } catch (err) {
      setError((err as Error).message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const label = (f: FormField) => (
    <label htmlFor={`${formKey}-${f.key}`}>
      {f.label} {f.required ? <span className="req">*</span> : null}
    </label>
  );
  const help = (f: FormField) => (f.helpText ? <p className="field-help">{f.helpText}</p> : null);

  const renderField = (f: FormField) => {
    const id = `${formKey}-${f.key}`;
    if (f.type === "select" && choiceFields.includes(f.key)) {
      return (
        <div className="field" key={f.key}>
          <label>
            {f.label} {f.required ? <span className="req">*</span> : null}
          </label>
          <div className="choices">
            {(f.options || []).map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={f.key}
                  value={option}
                  required={f.required}
                  onChange={() => set(f.key, option)}
                />{" "}
                {option}
                {option === "Other" && otherFields[f.key] ? (
                  <>
                    :<input className="choice-other" name={otherFields[f.key].name} placeholder={otherFields[f.key].placeholder} />
                  </>
                ) : null}
              </label>
            ))}
          </div>
          {help(f)}
        </div>
      );
    }
    if (f.type === "select") {
      const other = otherFields[f.key];
      return (
        <div className="field" key={f.key}>
          {label(f)}
          <select
            id={id}
            name={f.key}
            value={values[f.key] ?? (f.placeholder ? "" : f.options?.[0] ?? "")}
            onChange={(e) => set(f.key, e.target.value)}
            required={f.required}
          >
            {f.placeholder ? (
              <option value="" disabled>
                {f.placeholder}
              </option>
            ) : null}
            {(f.options || []).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {other && values[f.key] === "Other" && (
            <input className="conditional-other" name={other.name} placeholder={other.placeholder} required />
          )}
          {help(f)}
        </div>
      );
    }
    if (f.type === "textarea") {
      return (
        <div className="field" key={f.key}>
          {label(f)}
          <textarea id={id} name={f.key} placeholder={f.placeholder || undefined} required={f.required} />
          {help(f)}
        </div>
      );
    }
    if (f.type === "file") {
      return (
        <div className="field" key={f.key}>
          {label(f)}
          <input id={id} name={f.key} type="file" accept=".pdf,.doc,.docx" required={f.required} />
          {help(f)}
        </div>
      );
    }
    const type = f.type === "email" ? "email" : f.type === "tel" ? "tel" : f.type === "date" ? "date" : "text";
    return (
      <div className="field" key={f.key}>
        {label(f)}
        <input id={id} name={f.key} type={type} placeholder={f.placeholder || undefined} required={f.required} />
        {help(f)}
      </div>
    );
  };

  // Pair consecutive short fields into rows, like the original hand-written layout
  const wide = (f: FormField) => f.type === "textarea" || f.type === "file" || choiceFields.includes(f.key);
  const blocks: FormField[][] = [];
  for (const f of config.fields) {
    const last = blocks[blocks.length - 1];
    if (!wide(f) && last && last.length === 1 && !wide(last[0])) last.push(f);
    else blocks.push([f]);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* Honeypot: hidden from people, bots fill it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      {blocks.map((b, i) =>
        b.length === 2 ? (
          <div className="frow" key={i}>
            {b.map(renderField)}
          </div>
        ) : (
          <Fragment key={i}>{renderField(b[0])}</Fragment>
        )
      )}
      {error ? (
        <p role="alert" style={{ color: "#b42318", fontWeight: 600, margin: "4px 0 12px" }}>
          {error}
        </p>
      ) : null}
      {done ? (
        <p role="status" style={{ color: "var(--green-900)", fontWeight: 600, margin: "4px 0 12px" }}>
          {done}
        </p>
      ) : null}
      <button type="submit" className="btn-submit" disabled={busy}>
        {busy ? "Sending…" : config.submitButtonText || "Submit"}
      </button>
    </form>
  );
}
