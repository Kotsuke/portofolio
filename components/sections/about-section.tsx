import { Section } from "@/components/layout/section";
import Image from "next/image";

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-center">
        {/* Profile photo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border/50 glow">
              <Image
                src="/profile.jpg"
                alt="Subandrio"
                width={192}
                height={192}
                className="h-48 w-48 object-cover"
                priority
              />
            </div>
            {/* Decorative accent dot */}
            <div className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-accent" />
          </div>
        </div>

        {/* Bio */}
        <div>
          <h2 className="mb-2 text-sm font-medium tracking-widest uppercase text-accent">
            About Me
          </h2>
          <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Building things for the web.
          </h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I&apos;m a developer based in Indonesia who enjoys creating
            elegant solutions to complex problems. I specialize in building
            modern web applications with clean code and thoughtful user
            experiences.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or learning
            something new.
          </p>
        </div>
      </div>
    </Section>
  );
}
