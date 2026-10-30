import { Frame, Button } from "./ui";
import { profile } from "../data";

const code = "font-mono";
export default function Hero({ onResume }) {
  return (
    <section id="home" className="flex items-center py-20 lg:min-h-[92vh] lg:py-24">
      <div className="mx-auto grid w-full max-w-[1080px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2.5 border border-brand/20 px-3.5 py-1.5 text-sm text-mute">
            <span className="size-2 animate-beat bg-brand" />Software Engineer | Building AI-Powered Products
          </div>
          <h1 className="mb-7 font-display text-6xl font-extrabold uppercase leading-[.95] text-transparent [-webkit-text-stroke:1.5px_#f2f1ea] sm:text-8xl xl:text-[7.2rem]">
            Engineering modern software.
            <span className="block text-brand [-webkit-text-stroke:0]">Building intelligent experiences.</span>
          </h1>
          <p className="mb-8 max-w-[50ch] text-lg text-mute">
            I&apos;m a Computer Science student who builds full-stack web applications, backend systems, and AI-powered tools with LLMs and retrieval-augmented generation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" href="#projects">Explore My Projects</Button>
            <Button href="#contact">{"Let's Work Together"}</Button>
            <Button onClick={onResume}>View Resume</Button>
          </div>
          <div className="mt-8 flex gap-6 text-sm text-mute">
            <a className="hover:text-brand" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-brand" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <Frame className="bg-panel" aria-hidden="true">
          <div className="flex items-center gap-2 border-b border-brand/20 px-3.5 py-3">
            {[0, 1, 2].map((i) => <i key={i} className="size-[9px] border-[1.5px] border-brand" />)}
            <span className="ml-2.5 font-mono text-xs text-mute">adeeb.ts</span>
          </div>
          <pre className={`${code} m-0 overflow-x-auto p-5 text-[.82rem] leading-[1.85] text-[#d6d5cb]`}>
            <span className="text-brand">const</span> adeeb = {"{"}{"\n"}
{"  "}role: <span className="text-green-300">&quot;Software Engineer&quot;</span>,{"\n"}
{"  "}focus: [<span className="text-green-300">&quot;Full Stack&quot;</span>, <span className="text-green-300">&quot;AI&quot;</span>],{"\n"}
{"  "}stack: [<span className="text-green-300">&quot;React&quot;</span>, <span className="text-green-300">&quot;Node.js&quot;</span>,{"\n"}
{"          "}<span className="text-green-300">&quot;Python&quot;</span>, <span className="text-green-300">&quot;Spring Boot&quot;</span>],{"\n"}
{"  "}ai: [<span className="text-green-300">&quot;LLMs&quot;</span>, <span className="text-green-300">&quot;RAG&quot;</span>],{"\n"}
{"  "}graduating: <span className="text-brand">2027</span>,{"\n"}
{"  "}<span className="text-white">build</span>() {"{"} <span className="text-brand">return</span> <span className="text-green-300">&quot;useful products&quot;</span> {"}"}<span className="inline-block h-[1em] w-2 animate-blink bg-brand align-[-2px]" />{"\n"}
{"}"}
          </pre>
        </Frame>
      </div>
    </section>
  );
}
