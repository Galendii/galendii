"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level: number
  icon?: string
}

export function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getIconPath = (iconName: string) => {
    // This is a placeholder. In a real app, you would use actual icon paths
    return `/placeholder.svg?height=20&width=20`
  }

  return (
    <div ref={ref} className="relative">
      <Badge
        variant="outline"
        className="px-3 py-1.5 text-sm font-medium border-2 cursor-default hover:bg-primary/5 transition-colors"
      >
        {icon && (
          <div className="mr-1.5">
            <Image
              src={getIconPath(icon) || "/placeholder.svg"}
              alt={name}
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
        )}
        {name}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-muted overflow-hidden">
          {isInView && (
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
          )}
        </div>
      </Badge>
    </div>
  )
}

