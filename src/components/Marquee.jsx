import { marquee } from "../data";

const stripe = "absolute inset-x-0 h-2.5 bg-[repeating-linear-gradient(-45deg,#ffd400_0_12px,#0b0b09_12px_24px)]";

export default function Marquee() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden whitespace-nowrap bg-ink py-8">
      <span className={`${stripe} top-0`} />
      <span className={`${stripe} bottom-0`} />
      <div className="inline-flex animate-marquee">
        {[0, 1].map((k) => (
          <ul key={k} className="m-0 flex list-none gap-10 p-0 pr-10 font-display text-3xl font-bold uppercase tracking-wider text-brand">
            {marquee.map((m) => (
              <li key={m}>{m}<span className="ml-10 text-mute">/</span></li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
