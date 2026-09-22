import { Section } from "@/components/layout/section";
import { Globe, ExternalLink, Mail, Send } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    value: "Subandrio",
    href: "mailto:subandrio140705@gmail.com",
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
    value: "Subandrio",
    href: "https://www.linkedin.com/in/subandrio-kotsuke-07a975291",
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
            <Card key={link.label} className="border-none bg-transparent p-0 shadow-none">
              <MagicCard
                mode="orb"
                className="flex h-full flex-col bg-card/50 p-0"
              >
                <CardHeader className="flex flex-col items-center justify-center border-b border-border p-6 relative z-40">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted/80 text-muted-foreground transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                    <link.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent className="relative z-40 flex flex-1 flex-col items-center justify-center space-y-2 p-6 text-center">
                  <CardTitle>{link.label}</CardTitle>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </CardContent>
                <CardFooter className="relative z-40 border-t border-border p-4">
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${buttonVariants({ variant: "default" })} flex w-full items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    Connect
                  </Link>
                </CardFooter>
              </MagicCard>
            </Card>
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
