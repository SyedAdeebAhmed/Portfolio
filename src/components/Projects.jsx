import { Section, Reveal, Frame, Tags, Button } from "./ui";
import { projects } from "../data";

function Mock({ type }) {
  return (
    <div aria-hidden="true" className="overflow-hidden border border-brand/20 bg-ink transition duration-500 group-hover:-rotate-[.6deg] group-hover:scale-[1.03]">
      <div className="flex gap-1.5 border-b border-brand/20 px-3 py-2.5">
        {[0, 1, 2].map((i) => <i key={i} className="size-2 border-[1.5px] border-brand" />)}
      </div>
      <div className="min-h-[210px] p-4">
        {type === "chat" && (
          <div className="flex flex-col gap-2.5 text-xs">
            <div className="max-w-[78%] bg-[#1d1d17] p-2.5 text-[#ddd]">How can I help you today?</div>
            <div className="max-w-[78%] self-end bg-brand p-2.5 font-semibold text-ink">Where is my order?</div>
            <div className="max-w-[78%] bg-[#1d1d17] p-2.5 text-[#ddd]">Let me check that for you.</div>
          </div>
        )}
        {type === "shop" && (
          <div className="grid grid-cols-3 gap-2.5">
            {Array.from({ length: 6 }).map((_, i) => <div key={i} className={`aspect-square border ${i % 3 === 0 ? "border-brand bg-brand" : "border-brand/30 bg-[#17170f]"}`} />)}
          </div>
        )}
        {type === "page" && (
          <>
            <div className="mb-2 h-4 w-3/5 bg-[#26261f]" />
            <div className="mb-2 h-2 w-[90%] bg-[#26261f]" />
            <div className="mb-4 h-2 w-3/4 bg-[#26261f]" />
            <div className="grid grid-cols-3 gap-2.5">
              {[0, 1, 2].map((i) => <div key={i} className={`aspect-square border ${i === 0 ? "border-brand bg-brand" : "border-brand/30 bg-[#17170f]"}`} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Links({ p }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {p.demo && <Button small variant="primary" href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</Button>}
      {p.github && <Button small href={p.github} target="_blank" rel="noopener noreferrer">View Source Code</Button>}
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Featured projects" sub="Two flagship builds, followed by concept and supporting work.">
      {featured.map((p, i) => (
        <Reveal key={p.title}>
          <Frame as="article" className={`mb-9 grid items-center gap-10 bg-panel p-6 sm:p-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-of-type]:order-2" : ""}`}>
            <Mock type={p.mock} />
            <div>
              <span className="inline-block bg-brand px-2.5 py-0.5 text-xs font-bold text-ink">Featured project</span>
              <h3 className="mb-3.5 mt-3 font-display text-4xl font-extrabold uppercase leading-none lg:text-5xl">{p.title}</h3>
              <p className="mb-4 text-mute">{p.desc}</p>
              {p.tech.length > 0 && <Tags items={p.tech} className="mb-5" />}
              <Links p={p} />
            </div>
          </Frame>
        </Reveal>
      ))}
      <div className="grid gap-6 md:grid-cols-2">
        {others.map((p) => (
          <Reveal key={p.title}>
            <Frame as="article" className="h-full bg-panel p-7 transition duration-300 hover:-translate-y-1">
              <h3 className="mb-2.5 font-display text-3xl font-extrabold uppercase leading-none">{p.title}</h3>
              <p className="mb-4 text-mute">{p.desc}</p>
              {p.note && !p.github && !p.demo && <p className="mb-3.5 text-sm text-brand">{p.note}</p>}
              {p.tech.length > 0 && <Tags items={p.tech} className="mb-4" />}
              <Links p={p} />
            </Frame>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
