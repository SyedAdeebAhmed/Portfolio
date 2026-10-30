import { useEffect, useState } from "react";
import { Section, Reveal, Frame, Tags } from "./ui";
import { experience, education, certs } from "../data";

const tl = "relative border-l border-dashed border-brand pl-8 before:absolute before:-left-[7px] before:top-1 before:size-[13px] before:bg-brand before:content-['']";

function Certificates() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return (
    <div className="mt-20">
      <h3 className="mb-6 font-display text-4xl font-extrabold uppercase">Certificates</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {certs.map((c) => (
          <Reveal key={c.title}>
            <Frame className="flex h-full flex-col bg-panel transition duration-300 hover:-translate-y-1">
              <button type="button" onClick={() => setOpen(c)} aria-label={`View full certificate: ${c.title}`}
                className="group/c relative block aspect-video cursor-zoom-in overflow-hidden bg-white">
                <img src={c.img} alt={`Certificate: ${c.title}`} loading="lazy"
                  className="-mt-[11.2%] ml-[-37.2%] block w-[220%] max-w-none transition duration-500 group-hover/c:scale-105" />
                <span className="absolute bottom-2.5 right-2.5 bg-ink px-2 py-0.5 text-xs font-semibold text-brand">View full certificate</span>
              </button>
              <div className="flex flex-col gap-1 p-4 text-sm">
                <b className="font-semibold leading-snug">{c.title}</b>
                <span className="text-mute">Google, via Coursera · {c.date}</span>
                <a className="font-semibold text-brand" href={c.verify} target="_blank" rel="noopener noreferrer">Verify certificate</a>
              </div>
            </Frame>
          </Reveal>
        ))}
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] grid cursor-zoom-out place-items-center bg-black/95 p-6">
          <img src={open.img} alt={`Certificate: ${open.title}`} className="max-h-[90vh] max-w-[min(1100px,100%)] bg-white outline outline-2 outline-brand" />
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education" sub="Where I've worked and studied.">
      <div className="grid gap-12 md:grid-cols-2">
        {experience.map((e) => (
          <Reveal key={e.role} className={tl}>
            <div className="font-mono text-sm text-brand">{e.period} · {e.loc}</div>
            <h3 className="mb-1 mt-2 font-display text-4xl font-extrabold uppercase leading-none">{e.role}</h3>
            <div className="mb-3.5 text-mute">{e.org}</div>
            <ul className="mb-4 list-disc pl-5 text-mute">{e.bullets.map((b) => <li key={b} className="mb-1.5">{b}</li>)}</ul>
            <Tags items={e.tech} />
          </Reveal>
        ))}
        {education.map((e) => (
          <Reveal key={e.school} className={tl}>
            <div className="font-mono text-sm text-brand">{e.period}</div>
            <h3 className="mb-1 mt-2 font-display text-4xl font-extrabold uppercase leading-none">{e.degree}</h3>
            <div className="mb-3.5 text-mute">{e.school}</div>
            <p className="text-mute">{e.note}</p>
          </Reveal>
        ))}
      </div>
      <Certificates />
    </Section>
  );
}
