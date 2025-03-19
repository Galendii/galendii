import { getProjects } from "@/lib/api"
import { ProjectCard } from "../components/project-card"
import { Logo } from "../components/logo"
import { ThemeToggle } from "../components/theme-toggle"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Logo />
          <ThemeToggle />
        </div>
      </header>

      <section className="py-16">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col items-center mb-12">
            <div className="section-subheading">Portfolio</div>
            <h1 className="section-heading">All Projects</h1>
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
        </div>
      </section>
    </main>
  )
}

