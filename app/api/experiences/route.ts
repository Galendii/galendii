import { NextResponse } from "next/server"
import type { Experience } from "@/types"

export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const experiences: Experience[] = [
    {
      id: "1",
      role: "Senior Fullstack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description:
        "Led the development of a high-traffic e-commerce platform serving over 1M monthly users. Implemented microservices architecture and reduced page load times by 60%.",
      achievements: [
        "Architected and implemented a scalable microservices infrastructure",
        "Reduced infrastructure costs by 40% through cloud optimization",
        "Mentored junior developers and established coding standards",
      ],
      icon: "briefcase",
      color: "from-primary to-purple-600",
    },
    {
      id: "2",
      role: "Fullstack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      location: "New York, NY",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and GraphQL. Implemented CI/CD pipelines and automated testing strategies.",
      achievements: [
        "Implemented GraphQL APIs for 15+ client projects",
        "Established automated testing protocols with 90% code coverage",
        "Reduced deployment time by 70% through CI/CD optimization",
      ],
      icon: "code",
      color: "from-accent to-teal-600",
    },
    {
      id: "3",
      role: "Frontend Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      location: "Boston, MA",
      description:
        "Built responsive web applications with React and Redux. Collaborated with designers to implement pixel-perfect UIs and optimize for performance.",
      achievements: [
        "Developed component library used across 20+ client projects",
        "Improved page load performance by 45% through code splitting and lazy loading",
        "Collaborated with UX team to improve accessibility compliance",
      ],
      icon: "layout",
      color: "from-purple-600 to-pink-600",
    },
  ]

  return NextResponse.json(experiences)
}

