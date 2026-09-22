import { Section } from "@/components/layout/section";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description:
      "A modern web application built with Next.js and TypeScript featuring real-time data and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "Full-stack platform with authentication, database integration, and a clean dashboard interface.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description:
      "Creative portfolio site with smooth animations, dark mode support, and optimized performance.",
    tags: ["Next.js", "Framer Motion", "CSS"],
    github: "#",
    live: "#",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-sm font-medium tracking-widest uppercase text-accent">
          Projects
        </h2>
        <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
          Selected works
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-accent/20 hover:bg-card hover:glow"
          >
            {/* Thumbnail placeholder */}
            <div className="mb-5 flex h-36 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground/30 text-sm">
              Preview
            </div>

            <h4 className="mb-2 text-lg font-semibold tracking-tight">
              {project.title}
            </h4>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 border-t border-border/50 pt-4">
              <a
                href={project.github}
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`GitHub repo for ${project.title}`}
              >
                <Globe className="h-4 w-4" />
                Code
              </a>
              <a
                href={project.live}
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
