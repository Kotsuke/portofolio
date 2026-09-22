"use client";

import { useState, useEffect, useCallback } from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { cn } from "@/lib/utils";
import { Home, User, Code, FolderOpen, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

/** Custom easeInOutCubic for a premium scroll feel */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const targetY = el.getBoundingClientRect().top + window.scrollY - 32;
      smoothScrollTo(targetY, 900);

      // Update active immediately for snappy feedback
      setActiveSection(id);
    },
    []
  );

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <Dock
        direction="middle"
        iconSize={36}
        iconMagnification={56}
        iconDistance={120}
        className="rounded-2xl border-border/50 bg-background/60 px-3 backdrop-blur-xl"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <DockIcon key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "relative flex h-full w-full items-center justify-center rounded-full transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label={item.label}
                title={item.label}
              >
                <item.icon className="size-5" />
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </a>
            </DockIcon>
          );
        })}
      </Dock>
    </nav>
  );
}
