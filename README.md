# Syed Adeeb Ahmed – Portfolio (React + Vite + Tailwind CSS)

## Tech stack
React 18, Vite, Tailwind CSS 3, lucide-react (icons), jsPDF (resume PDF, loaded only on download).

## Folder structure
```
├── index.html              # SEO + Open Graph meta, fonts
├── package.json
├── vite.config.js / tailwind.config.js / postcss.config.js
├── .env.example            # contact-form endpoint
├── docs/resume.tex         # Overleaf LaTeX resume template (separate file)
├── public/                 # favicon.svg, assets/ (profile.jpg, cert-1..4.jpg)
└── src/
    ├── data.js             # ALL your content (profile, projects, skills, experience, certificates)
    ├── lib/resume.js       # builds the resume (preview + PDF) from data.js
    ├── hooks/useActiveSection.js
    ├── components/         # Header, Hero, Marquee, About, Skills, Projects, Services,
    │                       # Experience (+certificates), Process, Contact, Footer, ResumeModal, ui
    ├── App.jsx, main.jsx, index.css
```

## Setup
1. Install Node.js 20 or newer from https://nodejs.org (check: `node -v`).
2. In this folder run `npm install`.
3. Run `npm run dev` and open the address it prints (usually http://localhost:5173).
4. Production build: `npm run build` (output in `dist/`), preview it with `npm run preview`.

## Edit content
Everything is in `src/data.js`. To add a project, copy an entry in `projects`. Add `resume: true` and a `bullets: [...]` list to include it in the resume PDF. Replace images by overwriting files in `public/assets/` (same names).

## Contact form
1. Create a free form at https://formspree.io and copy its endpoint.
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx`.
3. Restart `npm run dev`. On Vercel add the same variable (Project, Settings, Environment Variables) and redeploy.
The endpoint is public by design (it is in the browser bundle). Never put secret API keys in `VITE_` variables. Without an endpoint, the form says nothing was sent and offers to open the visitor's email app.

## Deploy to Vercel
1. Push to GitHub: `git init`, `git add .`, `git commit -m "Portfolio"`, `git branch -M main`, `git remote add origin <your repo URL>`, `git push -u origin main`.
2. On vercel.com choose Add New, Project, import the repo. Vercel detects Vite (build command `npm run build`, output `dist`). Click Deploy.
3. Add `VITE_FORM_ENDPOINT` as above. Later pushes redeploy automatically.

## After deploying
Add `og.jpg` (1200x630) to `public/assets/` and uncomment/add the `og:image` tag in `index.html` with your full URL. Test the resume Download PDF and the contact form on the live site.
