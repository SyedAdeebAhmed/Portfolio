import { useEffect, useRef, useState } from "react";
import { Button } from "./ui";
import { resumeData, resumeFileName } from "../lib/resume";

const H = ({ children }) => <h4 className="mb-1.5 mt-4 border-b-[1.5px] border-[#141414] pb-1 text-xs font-bold uppercase tracking-widest">{children}</h4>;
const Row = ({ l, r }) => <div className="flex flex-col justify-between sm:flex-row sm:gap-3"><b>{l}</b><span className="sm:whitespace-nowrap">{r}</span></div>;
const Ul = ({ items }) => <ul className="mb-2 mt-0.5 list-disc pl-[18px]">{items.map((t) => <li key={t}>{t}</li>)}</ul>;

function Preview() {
  const d = resumeData();
  return (
    <div className="bg-[#f7f6ef] p-6 text-[13px] leading-normal text-[#141414] sm:px-10 sm:py-9">
      <h3 className="text-center text-2xl font-bold">{d.p.name}</h3>
      <p className="mb-1 mt-1.5 text-center">{d.p.headline}<br />{d.contact.map((c) => c[0]).join(" | ")}</p>
      <H>Summary</H><p>{d.p.summary}</p>
      <H>Education</H>{d.education.map((e) => <div key={e.school}><Row l={e.school} r={e.date} /><div>{e.degree}</div></div>)}
      <H>Experience</H>{d.experience.map((e) => <div key={e.role}><Row l={e.role} r={e.short} /><Row l={<i className="font-normal">{e.org}</i>} r={e.loc} /><Ul items={e.bullets} /></div>)}
      <H>Projects</H>{d.projects.map((p) => <div key={p.title}><Row l={<>{p.title} | <i className="font-normal">{p.tech.join(", ")}</i></>} r={p.demo ? "Live Demo" : ""} /><Ul items={p.bullets || [p.desc]} /></div>)}
      <H>Technical Skills</H>{d.skills.map((s) => <div key={s.name}><b>{s.name}:</b> {s.tags.join(", ")}</div>)}
      <H>Certifications</H><Ul items={d.certs} />
    </div>
  );
}

export default function ResumeModal({ open, onClose }) {
  const [msg, setMsg] = useState("");
  const closeRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    setMsg("");
    closeRef.current?.focus();
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;

  async function download() {
    try {
      const { buildResumePdf } = await import("../lib/resume");
      const url = URL.createObjectURL(await buildResumePdf());
      const a = document.createElement("a");
      a.href = url; a.download = resumeFileName();
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      setMsg("Resume downloaded.");
    } catch { setMsg("Download could not start. Please try again."); }
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Resume" onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[110] grid place-items-center bg-black/90 p-5">
      <div className="max-h-[94vh] w-full max-w-[780px] overflow-auto border border-brand/20 bg-panel p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <strong className="font-display text-3xl uppercase text-brand">Resume</strong>
          <span className="flex gap-2.5">
            <Button small variant="primary" onClick={download}>Download PDF</Button>
            <button ref={closeRef} type="button" onClick={onClose} className="btn btn-sm">Close</button>
          </span>
        </div>
        <p role="status" className="mb-2.5 min-h-0 text-sm text-brand">{msg}</p>
        <Preview />
      </div>
    </div>
  );
}
