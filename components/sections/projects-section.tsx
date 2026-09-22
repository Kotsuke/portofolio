import { Section } from "@/components/layout/section";
import { ExternalLink, Globe } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with product management, cart system, and payment integration.",
    tags: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/Kotsuke/e-commerce",
    live: "#",
  },
  {
    title: "Smart Infrastructure App",
    description:
      "Application to report damage on public infrastructure like sosial media that would help to be processed faster by government agencies.",
    tags: ["Python", "Flask", "MySQL", "tensorflow", "LSTM Model", "OpenCV", "Flutter", "Next.js"],
    github: "https://github.com/Kotsuke/Smart-Infrastructure",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website! Built with Next.js and Framer Motion, featuring smooth scroll animations.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    github: "https://github.com/Kotsuke/portofolio",
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
          <MagicCard
            key={project.title}
            className="group flex h-full flex-col rounded-2xl bg-card/50 p-6 transition-all cursor-pointer"
          >
            <div className="flex h-full flex-col">
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
            <div className="mt-auto flex items-center gap-3 border-t border-border/50 pt-4">
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
          </div>
          </MagicCard>
        ))}
      </div>
    </Section>
  );
}
