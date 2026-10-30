import { Section, Reveal, Frame, IconBox, Tags } from "./ui";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" sub="The tools I use to build, grouped by what they do.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {skills.map((s) => (
          <Reveal key={s.name} className={s.wide ? "lg:col-span-3" : "lg:col-span-2"}>
            <Frame className="h-full bg-panel p-6 transition duration-300 hover:-translate-y-1">
              <h3 className="mb-4 flex items-center gap-3 text-[1.05rem] font-semibold"><IconBox name={s.icon} />{s.name}</h3>
              <Tags items={s.tags} />
            </Frame>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
