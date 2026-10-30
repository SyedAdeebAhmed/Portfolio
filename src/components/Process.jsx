import { Section, Reveal } from "./ui";
import { steps } from "../data";

export default function Process() {
  return (
    <Section id="approach" title="How I build" sub="A simple process I follow on every project.">
      <ol className="grid list-none gap-7 p-0 lg:grid-cols-5 lg:gap-0">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} className="relative pl-[68px] lg:pl-0 lg:pr-5">
            <span aria-hidden="true" className="absolute left-0 top-0 grid size-11 rotate-45 scale-[.8] place-items-center border-2 border-brand bg-ink lg:static lg:mb-5">
              <span className="-rotate-45 font-display text-2xl font-extrabold text-brand">{i + 1}</span>
            </span>
            {i < steps.length - 1 && <span aria-hidden="true" className="absolute left-12 right-0 top-[22px] hidden border-t border-dashed border-brand lg:block" />}
            <h3 className="mb-1.5 text-base font-semibold">{s.title}</h3>
            <p className="text-sm text-mute">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
