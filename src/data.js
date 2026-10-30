// ===== EDIT YOUR CONTENT HERE. The portfolio AND the resume PDF are built from this file. =====

export const profile = {
  name: "Syed Adeeb Ahmed",
  role: "Software Engineer",
  headline: "Software Engineer | AI & Full Stack",
  summary:
    "Computer Science student focused on full-stack web development and AI-powered applications, with hands-on experience building React interfaces and projects that integrate LLMs. Interested in clean, maintainable code and useful products.",
  email: "syed.adeebahmed.naqvi@gmail.com",
  github: "https://github.com/SyedAdeebAhmed",
  linkedin: "https://www.linkedin.com/in/syed-adeeb-ahmed-b885a6266/",
  photo: "/assets/profile.jpg",
};

// Contact form endpoint comes from .env (VITE_FORM_ENDPOINT). Empty = form offers to open the visitor's email app.
export const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || "";

export const nav = [
  { label: "Home", id: "home" }, { label: "About", id: "about" }, { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" }, { label: "Services", id: "services" },
  { label: "Experience", id: "experience" }, { label: "Contact", id: "contact" },
];

export const interests = ["Full-stack development", "Software architecture", "LLM integration", "RAG", "Machine learning", "Business products"];

export const marquee = ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Python", "FastAPI", "Spring Boot", "PostgreSQL", "MongoDB", "LLM integration", "RAG"];

// icon: code | spark | server | db | tool | layers
export const skills = [
  { name: "Frontend", icon: "code", wide: true, tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Context API"] },
  { name: "AI and intelligent apps", icon: "spark", wide: true, tags: ["LLM integration", "RAG", "Prompt engineering", "AI-powered apps", "ML fundamentals", "AI automation workflows"] },
  { name: "Backend", icon: "server", tags: ["Node.js", "Express.js", "REST APIs", "Java", "Spring Boot", "Python", "FastAPI"] },
  { name: "Databases and auth", icon: "db", tags: ["MongoDB", "PostgreSQL", "MySQL", "JWT authentication", "Role-based access control"] },
  { name: "Tools and platforms", icon: "tool", tags: ["Git", "GitHub", "Postman", "Figma", "VS Code", "Vercel"] },
];

// featured: big panel. resume: true => included in the resume PDF (add `bullets`).
// Leave github/demo as "" to hide a button. mock: chat | shop | page (CSS preview, replace with screenshots anytime).
export const projects = [
  {
    title: "AI Tutor", featured: true, resume: true, mock: "chat",
    desc: "An AI-powered personalized learning platform that helps students understand their learning preferences, identify weaknesses, take quizzes, and find relevant learning resources. Features sign-in with Clerk and AI-driven learning workflows powered by the Gemini API.",
    bullets: ["AI-powered personalized learning platform that helps students identify learning preferences and weaknesses.", "Includes quizzes, learning resource discovery, and user authentication with Clerk.", "Integrates the Gemini API for AI-driven learning workflows."],
    tech: ["Next.js", "React", "Tailwind CSS", "Clerk", "Gemini API"],
    github: "https://github.com/SyedAdeebAhmed/AI_Tutor.git", demo: "https://ai-tutor-h7b1.vercel.app/",
  },
  {
    title: "E-Commerce Web Application", featured: true, resume: true, mock: "shop",
    desc: "A modern e-commerce web application focused on product discovery, intuitive navigation, responsive design, and a smooth shopping experience.",
    bullets: ["Responsive e-commerce interface focused on product discovery and intuitive navigation."],
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/SyedAdeebAhmed/ApexcifyTechnologys_Ecom_Website.git", demo: "https://apexcify-technologys-ecom-website.vercel.app/",
  },
  {
    title: "AI-Powered Customer Support Chatbot", mock: "chat",
    note: "Concept project. Add your repository, demo link, and real tech stack here.",
    desc: "A chatbot concept that helps businesses automate customer support and answer frequently asked questions through a conversational interface.",
    tech: [], github: "", demo: "",
  },
  {
    title: "Portfolio Website", mock: "page",
    note: "Add your repository link here when it is published.",
    desc: "A personal portfolio demonstrating modern UI design, responsive layouts, frontend engineering, and professional branding.",
    tech: ["React", "Vite", "Tailwind CSS"], github: "", demo: "",
  },
];

export const services = [
  { title: "Full-stack web development", icon: "layers", text: "Responsive, maintainable web applications built with modern frontend and backend technologies." },
  { title: "Frontend development", icon: "code", text: "Polished, accessible, responsive interfaces using React.js, Next.js, and Tailwind CSS." },
  { title: "Backend API development", icon: "server", text: "REST APIs, database integration, authentication, and backend business logic." },
  { title: "AI-powered applications", icon: "spark", text: "Applications that integrate LLMs, conversational interfaces, and intelligent features." },
  { title: "RAG-based applications", icon: "db", text: "Knowledge assistants and document question-answering systems, where they fit the problem." },
  { title: "Business process automation", icon: "tool", text: "Automation workflows that reduce repetitive manual work." },
];

export const education = [
  { school: "Sukkur IBA University", degree: "BS Computer Science", date: "Expected 2027", period: "Expected graduation 2027", note: "Studying computer science fundamentals while building real projects in web development and AI." },
];

export const experience = [
  {
    role: "Frontend Developer Intern", org: "Apexcify Technologys", loc: "Remote",
    period: "March – April 2026", short: "Mar 2026 – Apr 2026",
    bullets: ["Built user interfaces with React.js, JavaScript, and Tailwind CSS.", "Worked with Redux for state management.", "Used Figma for interface design reference and planning."],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Redux", "Figma"],
  },
];

export const certs = [
  { title: "Accelerate Your Job Search with AI", date: "Aug 24, 2025", verify: "https://coursera.org/verify/7BACZI3N7CQ5", img: "/assets/cert-1.jpg" },
  { title: "Foundations of Project Management", date: "Aug 29, 2025", verify: "https://coursera.org/verify/B31C7R52VBP7", img: "/assets/cert-2.jpg" },
  { title: "Technical Support Fundamentals", date: "Aug 28, 2025", verify: "https://coursera.org/verify/DRTC2UFGSITY", img: "/assets/cert-3.jpg" },
  { title: "The Bits and Bytes of Computer Networking", date: "Sep 3, 2025", verify: "https://coursera.org/verify/B3AY4I6I6VEY", img: "/assets/cert-4.jpg" },
];

export const steps = [
  { title: "Understand", text: "Clarify the problem, users, and requirements." },
  { title: "Plan", text: "Design the architecture and user experience." },
  { title: "Build", text: "Write maintainable, readable code." },
  { title: "Test", text: "Check responsiveness, functionality, and reliability." },
  { title: "Deploy and improve", text: "Ship, evaluate, and iterate." },
];
