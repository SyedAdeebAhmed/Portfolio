import { useEffect, useRef, useState } from "react";
import { Code, Database, Layers, Server, Sparkles, Wrench } from "lucide-react";

export const icons = { code: Code, spark: Sparkles, server: Server, db: Database, tool: Wrench, layers: Layers };

export function IconBox({ name }) {
  const I = icons[name] || Code;
  return (
    <span className="grid size-9 flex-none place-items-center border-[1.5px] border-brand text-brand">
      <I size={18} strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

// Fades/slides content in once, when it scrolls into view. Respects reduced motion.
export function Reveal({ as: T = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <T ref={ref} {...rest}
      className={`transition duration-700 motion-reduce:transition-none ${on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"} ${className}`}>
      {children}
    </T>
  );
}

// Bordered panel with yellow corner brackets that grow on hover.
export function Frame({ as: T = "div", className = "", children, ...rest }) {
  return (
    <T {...rest} className={`group relative border border-brand/15 ${className}`}>
      <span aria-hidden="true" className="pointer-events-none absolute -left-0.5 -top-0.5 z-10 size-[18px] border-l-2 border-t-2 border-brand transition-all duration-300 group-hover:size-11" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-0.5 -right-0.5 z-10 size-[18px] border-b-2 border-r-2 border-brand transition-all duration-300 group-hover:size-11" />
      {children}
    </T>
  );
}

export const Pill = ({ children }) => (
  <span className="inline-block border border-brand/30 px-2.5 py-0.5 font-mono text-xs text-[#e6e0b4]">{children}</span>
);

export const Tags = ({ items, className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>{items.map((t) => <Pill key={t}>{t}</Pill>)}</div>
);

export function Button({ href, variant = "ghost", small = false, className = "", ...rest }) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : ""} ${small ? "btn-sm" : ""} ${className}`;
  return href ? <a href={href} className={cls} {...rest} /> : <button type="button" className={cls} {...rest} />;
}

export function Section({ id, title, sub, className = "", children }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <h2 className="mb-4 flex items-center gap-5 font-display text-5xl font-extrabold uppercase leading-none sm:text-6xl lg:text-7xl">
          {title}
          <span aria-hidden="true" className="hidden h-0.5 min-w-8 flex-1 bg-brand/25 sm:block" />
        </h2>
        {sub && <p className="mb-14 max-w-[54ch] text-mute">{sub}</p>}
        {children}
      </div>
    </section>
  );
}
