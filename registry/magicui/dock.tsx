"use client"

import React, { createContext, useContext } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const DockContext = createContext<{ activeSection?: string } | null>(null)

export interface DockProps {
  className?: string
  children: React.ReactNode
  direction?: "top" | "middle" | "bottom"
  // Keep standard properties to prevent compilation errors
  iconMagnification?: number
  iconDistance?: number
}

export function Dock({
  className,
  children,
  direction = "middle",
}: DockProps) {
  return (
    <div
      className={cn(
        "mx-auto flex h-12 sm:h-16 items-center gap-1.5 sm:gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-1 sm:p-2 backdrop-blur-md max-w-[95vw]",
        {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export interface DockIconProps {
  className?: string
  children: React.ReactNode
  active?: boolean
}

export function DockIcon({
  className,
  children,
  active = false,
}: DockIconProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const isPopped = isHovered || active

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scale: isPopped ? 1.2 : 1.0,
          y: isPopped ? -6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 0.8
        }}
        className={cn(
          "flex h-8 w-8 sm:h-12 sm:w-12 aspect-square cursor-pointer items-center justify-center rounded-full transition-colors",
          className
        )}
      >
        {children}
      </motion.div>
      {active && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 sm:-bottom-1.5 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}
    </div>
  )
}
