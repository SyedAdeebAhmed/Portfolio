import { profile, education, experience, projects, skills, certs } from "../data";

// Single source of truth for the resume (preview + PDF), built from src/data.js
export function resumeData() {
  return {
    p: profile,
    contact: [
      [profile.email, `mailto:${profile.email}`],
      [profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), profile.linkedin],
      [profile.github.replace(/^https?:\/\//, ""), profile.github],
    ],
    education,
    experience,
    projects: projects.filter((p) => p.resume),
    skills,
    certs: certs.map((c) => `${c.title}, Google (Coursera), ${c.date.replace(/ \d+,/, "")}`),
  };
}

export const resumeFileName = () => `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`;

// ATS-friendly: one column, standard headings, real text (no images or tables).
export async function buildResumePdf() {
  const { jsPDF } = await import("jspdf"); // loaded only when someone downloads
  const d = resumeData();
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const W = 612, M = 50, X = W - M;
  let y = M;
  const need = (n) => { if (y + n > 742) { doc.addPage(); y = M; } };
  const ft = (s, z) => { doc.setFont("times", s); doc.setFontSize(z); };
  const wrap = (t, x, w) => doc.splitTextToSize(t, w).forEach((l) => { need(13); doc.text(l, x, y); y += 13; });
  const row = (l, r, ls = "bold", rs = "normal") => { need(14); ft(ls, 10.5); doc.text(l, M, y); ft(rs, 10.5); doc.text(r, X, y, { align: "right" }); y += 13; };
  const head = (n) => { need(34); y += 8; ft("bold", 11.5); doc.text(n.toUpperCase(), M, y); y += 4; doc.setLineWidth(0.7); doc.line(M, y, X, y); y += 13; };
  const bullets = (a) => a.forEach((t) => {
    ft("normal", 10.5);
    doc.splitTextToSize(t, X - M - 16).forEach((l, i) => { need(13); if (!i) doc.text("\u2022", M + 4, y); doc.text(l, M + 16, y); y += 13; });
  });

  doc.setProperties({ title: `${d.p.name} - Resume`, author: d.p.name });
  ft("bold", 20); doc.text(d.p.name, W / 2, y + 8, { align: "center" }); y += 27;
  ft("normal", 11); doc.text(d.p.headline, W / 2, y, { align: "center" }); y += 15;
  ft("normal", 10);
  const sep = "  |  ", ws = d.contact.map((c) => doc.getTextWidth(c[0])), sw = doc.getTextWidth(sep);
  let x = (W - ws.reduce((a, b) => a + b, 0) - sw * (ws.length - 1)) / 2;
  d.contact.forEach((c, i) => {
    doc.text(c[0], x, y); doc.link(x, y - 9, ws[i], 12, { url: c[1] }); x += ws[i];
    if (i < ws.length - 1) { doc.text(sep, x, y); x += sw; }
  });
  y += 6;

  head("Summary"); ft("normal", 10.5); wrap(d.p.summary, M, X - M);
  head("Education"); d.education.forEach((e) => { row(e.school, e.date); ft("normal", 10.5); wrap(e.degree, M, X - M); });
  head("Experience"); d.experience.forEach((e) => { row(e.role, e.short); row(e.org, e.loc, "italic"); bullets(e.bullets); y += 3; });
  head("Projects");
  d.projects.forEach((p) => {
    need(14); ft("bold", 10.5); doc.text(p.title, M, y);
    const w1 = doc.getTextWidth(p.title); ft("italic", 10.5); doc.text(" | " + p.tech.join(", "), M + w1, y);
    if (p.demo) { ft("normal", 10.5); const lw = doc.getTextWidth("Live Demo"); doc.text("Live Demo", X, y, { align: "right" }); doc.link(X - lw, y - 9, lw, 12, { url: p.demo }); }
    y += 13; bullets(p.bullets || [p.desc]); y += 3;
  });
  head("Technical Skills");
  d.skills.forEach((s) => {
    need(14); ft("bold", 10.5); const lb = s.name + ": ", lw = doc.getTextWidth(lb); doc.text(lb, M, y); ft("normal", 10.5);
    doc.splitTextToSize(s.tags.join(", "), X - M - lw).forEach((l) => { need(13); doc.text(l, M + lw, y); y += 13; });
  });
  head("Certifications"); bullets(d.certs);
  return doc.output("blob");
}
