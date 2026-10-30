import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data";

export default function Header({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-brand/20 bg-ink lg:fixed lg:inset-y-0 lg:left-0 lg:w-[236px] lg:border-b-0 lg:border-r">
      <nav aria-label="Primary" className="flex h-16 items-center justify-between px-5 lg:h-full lg:flex-col lg:items-stretch lg:justify-start lg:px-0 lg:pb-7 lg:pt-8">
        <a href="#home" className="font-display text-3xl font-extrabold uppercase leading-none tracking-wide text-brand lg:mb-9 lg:px-7 lg:text-4xl">
          Adeeb<span className="text-paper">.</span>
        </a>
        <button type="button" aria-label="Toggle menu" aria-expanded={open} aria-controls="site-links"
          onClick={() => setOpen((o) => !o)} className="grid size-10 place-items-center border border-brand text-brand lg:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div id="site-links"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-0.5 border-b border-brand/20 bg-ink px-5 pb-5 pt-3 lg:static lg:flex lg:border-0 lg:p-0`}>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
              className={`block px-3 py-3 text-sm transition lg:px-7 lg:text-[.95rem] ${active === n.id ? "bg-gradient-to-r from-brand/10 to-transparent text-brand shadow-[inset_3px_0_0_#ffd400]" : "text-mute hover:text-brand"}`}>
              {n.label}
            </a>
          ))}
        </div>
        <div className="mt-auto hidden px-7 text-[.82rem] leading-relaxed text-mute lg:block">
          <strong className="block text-[.95rem] text-paper">{profile.name}</strong>
          {profile.role}<br />AI &amp; Full Stack<br />
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mr-3.5 mt-2.5 inline-block text-brand">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2.5 inline-block text-brand">LinkedIn</a>
        </div>
      </nav>
    </header>
  );
}
