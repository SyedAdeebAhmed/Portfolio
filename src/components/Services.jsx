import { Section, Reveal, Frame, IconBox } from "./ui";
import { services } from "../data";

export default function Services() {
  return (
    <Section id="services" title="Services" sub="How I can help teams and clients.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Reveal key={s.title}>
            <Frame className="h-full bg-panel p-6 transition duration-300 hover:-translate-y-1">
              <h3 className="mb-2.5 flex items-center gap-3 text-[1.05rem] font-semibold"><IconBox name={s.icon} />{s.title}</h3>
              <p className="text-[.94rem] text-mute">{s.text}</p>
            </Frame>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
