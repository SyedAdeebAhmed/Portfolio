import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import useActiveSection from "./hooks/useActiveSection";

const SECTION_IDS = ["home", "about", "skills", "projects", "services", "experience", "approach", "contact"];

export default function App() {
  const active = useActiveSection(SECTION_IDS);
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = () => setResumeOpen(true);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[200] focus:bg-brand focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Header active={active} />
      <main id="main" className="lg:ml-[236px]">
        <Hero onResume={openResume} />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Process />
        <Contact onResume={openResume} />
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
