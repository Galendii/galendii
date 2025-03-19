"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "React", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Next.js", icon: "/placeholder.svg?height=40&width=40" },
  { name: "TypeScript", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Node.js", icon: "/placeholder.svg?height=40&width=40" },
  { name: "GraphQL", icon: "/placeholder.svg?height=40&width=40" },
  { name: "PostgreSQL", icon: "/placeholder.svg?height=40&width=40" },
  { name: "MongoDB", icon: "/placeholder.svg?height=40&width=40" },
  { name: "AWS", icon: "/placeholder.svg?height=40&width=40" },
]

export function TechIcons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-wrap justify-center gap-6 md:gap-8"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          className="tech-icon"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
              <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
            </div>
            <span className="text-xs text-muted-foreground">{tech.name}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

