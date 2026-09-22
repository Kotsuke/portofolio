import { Section } from "@/components/layout/section";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const skills = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  // Backend
  { name: "Python", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Node.js", category: "backend" },
  // Tools
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Figma", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "Docker", category: "tool" },
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
          <HoverBorderGradient
            key={skill.name}
            containerClassName="w-full rounded-xl bg-transparent dark:bg-transparent"
            as="div"
            className="flex w-full items-center justify-center bg-card/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:text-accent"
          >
            {skill.name}
          </HoverBorderGradient>
        ))}
      </div>
    </Section>
  );
}
