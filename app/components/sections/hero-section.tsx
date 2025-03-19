"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "../particles-background"
import { TechIcons } from "../tech-icons"
import type { Profile } from "@/types"

interface HeroSectionProps {
  profile: Profile
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-32 overflow-hidden md:px-8 md:py-40">
      <ParticlesBackground />
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-primary to-accent opacity-75"></div>
          <div className="relative overflow-hidden rounded-full border-4 border-background shadow-xl">
            <Image
              src={profile.avatar || "/placeholder.svg?height=150&width=150"}
              alt={profile.name}
              width={150}
              height={150}
              className="h-36 w-36 object-cover"
            />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight md:text-6xl text-gradient"
        >
          {profile.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mt-6 text-xl text-muted-foreground"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <Button asChild className="relative group overflow-hidden">
            <Link href="#contact" className="flex items-center">
              <span className="relative z-10">Work with me</span>
              <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-primary/20 hover:border-primary/50">
            <Link href="#projects">View projects</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 mt-8"
        >
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
            <Link href={profile.socialLinks.github} target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
            <Link href={profile.socialLinks.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
            <Link href={`mailto:${profile.socialLinks.email}`} aria-label="Email">
              <Mail className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        <div className="w-full max-w-3xl mt-16">
          <TechIcons />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

