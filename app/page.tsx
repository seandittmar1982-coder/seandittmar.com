import { Link } from "lucide-react";

const projects = [
  {
    title: "Portfolio Redesign",
    description:
      "A personal site refresh built with Next.js, Tailwind, and a dark/light theme.",
    tech: "Next.js · Tailwind CSS",
    status: "In progress",
  },
  {
    title: "Open Source CLI",
    description:
      "A command-line tool for generating project scaffolds and developer workflows.",
    tech: "Node.js · TypeScript",
    status: "Prototype",
  },
  {
    title: "Blog Platform",
    description:
      "A lightweight blog engine with markdown support and SEO-friendly routing.",
    tech: "Next.js · Contentlayer",
    status: "Released",
  },
];

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="card rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-slate-900/10"
          >
            <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>
            <p className="mb-4 text-sm text-slate-600">{project.description}</p>
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-500">
              {project.tech}
            </div>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {project.status}
            </span>
          </article>
        ))}
      </div>
    </main>
  );
}
