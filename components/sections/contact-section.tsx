import { Section } from "@/components/layout/section";
import { Globe, ExternalLink, Mail, Send } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "hello@subandrio.dev",
    href: "mailto:hello@subandrio.dev",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Kotsuke",
    href: "https://github.com/Kotsuke",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "#",
    icon: ExternalLink,
  },
];

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 text-sm font-medium tracking-widest uppercase text-accent">
          Contact
        </h2>
        <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Let&apos;s work together
        </h3>
        <p className="mb-10 text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out
          — I&apos;m always open to new opportunities and collaborations.
        </p>

        {/* Contact links */}
        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-accent/20 hover:bg-card hover:glow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/80 text-muted-foreground transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                <link.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {link.label}
                </p>
                <p className="text-xs text-muted-foreground">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:hello@subandrio.dev"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="h-4 w-4" />
            Send a Message
          </a>
        </div>
      </div>
    </Section>
  );
}
