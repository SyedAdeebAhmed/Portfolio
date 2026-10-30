import { useState } from "react";
import { Frame, Button } from "./ui";
import { profile, formEndpoint } from "../data";

const empty = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  Object.entries(v).forEach(([k, val]) => { if (!val.trim()) e[k] = "This field is required."; });
  if (!e.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!e.message && v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

function Field({ label, name, values, errors, onChange, area, ...rest }) {
  const C = area ? "textarea" : "input";
  return (
    <label className="grid gap-1.5 text-sm font-semibold">
      {label}
      <C name={name} value={values[name]} onChange={onChange} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`}
        className={`field ${area ? "min-h-32 resize-y" : ""}`} {...rest} />
      <span id={`${name}-err`} className="text-xs font-normal text-red-400">{errors[name]}</span>
    </label>
  );
}

export default function Contact({ onResume }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // {kind, text, href?}
  const [busy, setBusy] = useState(false);
  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const err = validate(values);
    setErrors(err);
    if (Object.keys(err).length) return setStatus({ kind: "bad", text: "Please fix the highlighted fields." });
    if (!formEndpoint) {
      const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)}`;
      return setStatus({ kind: "info", text: "No form service is connected, so nothing was sent.", href, link: "Open this message in your email app" });
    }
    setBusy(true);
    try {
      const r = await fetch(formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(values) });
      if (!r.ok) throw new Error("failed");
      setStatus({ kind: "ok", text: "Message sent. Thank you, I'll reply soon." });
      setValues(empty);
    } catch {
      setStatus({ kind: "bad", text: `Message not sent. Please try again or email ${profile.email}.` });
    } finally { setBusy(false); }
  }

  const tone = { ok: "bg-green-950 text-green-300", bad: "bg-red-950 text-red-300", info: "bg-[#2a2410] text-amber-200" };
  const link = "self-start font-semibold shadow-[inset_0_-2px_0_#0b0b09] break-all";
  return (
    <section id="contact" className="bg-brand py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-[1080px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-5xl font-extrabold uppercase leading-[.95] sm:text-7xl">Have an idea? Let&apos;s build something meaningful.</h2>
          <p className="mt-6 max-w-[54ch] text-[#2c2600]">I&apos;m interested in building useful software, exploring intelligent applications, and collaborating on projects that solve real problems.</p>
          <div className="mt-8 flex flex-col gap-3">
            <a className={link} href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" onClick={onResume} className={`${link} text-left`}>Resume (view or download)</button>
            <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/syed-adeeb-ahmed-b885a6266</a>
            <a className={link} href={profile.github} target="_blank" rel="noopener noreferrer">github.com/SyedAdeebAhmed</a>
          </div>
        </div>
        <Frame as="form" noValidate onSubmit={onSubmit} className="grid gap-4 border-0 bg-ink p-8 text-paper">
          <Field label="Name" name="name" autoComplete="name" values={values} errors={errors} onChange={onChange} />
          <Field label="Email" name="email" type="email" autoComplete="email" values={values} errors={errors} onChange={onChange} />
          <Field label="Subject" name="subject" values={values} errors={errors} onChange={onChange} />
          <Field label="Message" name="message" area values={values} errors={errors} onChange={onChange} />
          <Button type="submit" variant="primary" disabled={busy} className="justify-center">{busy ? "Sending..." : "Send message"}</Button>
          <div role="status" aria-live="polite">
            {status && (
              <p className={`px-3.5 py-3 text-sm ${tone[status.kind]}`}>
                {status.text} {status.href && <a className="underline" href={status.href}>{status.link}</a>}
              </p>
            )}
          </div>
        </Frame>
      </div>
    </section>
  );
}
