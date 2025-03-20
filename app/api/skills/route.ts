import { NextResponse } from "next/server";
import type { SkillCategory } from "@/types";

export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        {
          name: "React",
          level: 100,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          level: 95,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },

    {
      name: "Backend",
      skills: [
        {
          name: "Nest.js",
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        },
        {
          name: "Django",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        },
        {
          name: "Node.js",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "PotsgreSQL",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      name: "DevOps",
      skills: [
        {
          name: "AWS",
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Docker",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
          name: "CI/CD",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
      ],
    },
  ];

  return NextResponse.json(skillCategories);
}
