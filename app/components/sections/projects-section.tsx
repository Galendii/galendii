"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "../project-card"
import type { Project } from "@/types"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <div className="section-subheading">My Work</div>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image || "/placeholder.svg?height=400&width=600"}
              link={project.link}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild className="group border-primary/20 hover:border-primary/50">
            <Link href="/projects" className="flex items-center">
              View all projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

