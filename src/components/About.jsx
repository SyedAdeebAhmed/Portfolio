import { Section, Reveal, Tags } from "./ui";
import { profile, interests } from "../data";

const p = "mb-4 max-w-[62ch] text-mute";
const hl = "font-semibold text-paper shadow-[inset_0_-6px_0_rgba(255,212,0,.35)]";

export default function About() {
  return (
    <Section id="about" title="About me">
      <Reveal className="grid items-start gap-12 md:grid-cols-[290px_1fr] md:gap-16">
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="288" height="288"
          className="m-3 aspect-square w-full max-w-[260px] bg-panel object-cover outline outline-2 outline-offset-[12px] outline-brand grayscale contrast-110 transition duration-500 hover:grayscale-0 md:max-w-[calc(100%-24px)]" />
        <div>
          <p className={p}>I&apos;m a <strong className={hl}>BS Computer Science student at Sukkur IBA University</strong> (expected 2027), working toward a career as a professional software engineer. I enjoy turning real problems into software that people can actually use.</p>
          <p className={p}>My work spans <strong className={hl}>full-stack web development</strong> and <strong className={hl}>backend engineering</strong>, and I&apos;m increasingly focused on adding AI to products: integrating LLMs, building retrieval-augmented generation (RAG) workflows, and exploring machine learning applications that help businesses.</p>
          <p className={p}>I care about clear problem-solving, clean and maintainable code, usable interfaces, and learning something new with every project.</p>
          <Tags items={interests} className="mt-5" />
        </div>
      </Reveal>
    </Section>
  );
}
