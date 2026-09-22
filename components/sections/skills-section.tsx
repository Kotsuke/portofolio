import { Section } from "@/components/layout/section";

const skills = [
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Node.js", category: "runtime" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "HTML / CSS", category: "core" },
  { name: "Git", category: "tool" },
  { name: "REST API", category: "concept" },
  { name: "Figma", category: "design" },
  { name: "Python", category: "language" },
  { name: "SQL", category: "database" },
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-sm font-medium tracking-widest uppercase text-accent">
          Skills
        </h2>
        <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
          Technologies I work with
        </h3>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center justify-center rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:bg-card hover:glow"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </Section>
  );
}
