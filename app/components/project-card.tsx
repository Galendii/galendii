"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  githubLink?: string
}

export function ProjectCard({ title, description, tags, image, link, githubLink }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-border/50 shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute top-3 right-3 z-20">
            {githubLink && (
              <Button size="icon" variant="secondary" className="rounded-full opacity-80 hover:opacity-100" asChild>
                <Link href={githubLink} target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-black/50 text-white border-none text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="secondary" className="bg-black/50 text-white border-none text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-5 relative">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="mb-6 text-sm text-muted-foreground">{description}</p>
          <Button
            variant="outline"
            size="sm"
            className="absolute bottom-5 right-5 rounded-full border-primary/20 hover:border-primary/50"
            asChild
          >
            <Link href={link} className="flex items-center gap-1">
              View Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

