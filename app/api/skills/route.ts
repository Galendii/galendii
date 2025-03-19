import { NextResponse } from "next/server"
import type { SkillCategory } from "@/types"

export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 100, icon: "react" },
        { name: "Next.js", level: 90, icon: "nextjs" },
        { name: "TypeScript", level: 95, icon: "typescript" },
        { name: "Tailwind CSS", level: 90, icon: "tailwind" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Nest.js", level: 90, icon: "nodejs" },
        { name: "Django", level: 85, icon: "django" },
        { name: "Express", level: 85, icon: "exppress" },
        { name: "MongoDB", level: 80, icon: "mongodb" },
        { name: "PotsgreSQl", level: 80, icon: "postgresql" },
      ],
    },
    {
      name: "DevOps",
      skills: [
        { name: "AWS", level: 80, icon: "aws" },
        { name: "Docker", level: 85, icon: "docker" },
        { name: "CI/CD", level: 85, icon: "git" },
      ],
    },
  ]

  return NextResponse.json(skillCategories)
}

