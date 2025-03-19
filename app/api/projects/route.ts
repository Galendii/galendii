import { NextResponse, type NextRequest } from "next/server"
import type { Project } from "@/types"

export async function GET(request: NextRequest) {
  // In a real app, this would fetch from a database or CMS
  const projects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A high-performance e-commerce platform built with Next.js, GraphQL, and Stripe integration.",
      tags: ["Next.js", "GraphQL", "Stripe", "PostgreSQL"],
      image: "/images/projects/ecommerce.jpg", // This would be a real image path in production
      link: "#",
      githubLink: "https://github.com",
      featured: true,
    },
    {
      id: "2",
      title: "Real-time Analytics Dashboard",
      description: "A real-time analytics dashboard with WebSocket connections and data visualization.",
      tags: ["React", "Node.js", "WebSockets", "D3.js"],
      image: "/images/projects/analytics.jpg", // This would be a real image path in production
      link: "#",
      githubLink: "https://github.com",
      featured: true,
    },
    {
      id: "3",
      title: "AI-powered Content Platform",
      description: "A content platform with AI-powered recommendations and content generation.",
      tags: ["Next.js", "AI/ML", "Python", "MongoDB"],
      image: "/images/projects/ai-platform.jpg", // This would be a real image path in production
      link: "#",
      githubLink: "https://github.com",
      featured: true,
    },
    {
      id: "4",
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication and real-time transactions.",
      tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      image: "/images/projects/banking.jpg", // This would be a real image path in production
      link: "#",
      githubLink: "https://github.com",
      featured: false,
    },
    {
      id: "5",
      title: "Social Media Platform",
      description: "A social media platform with real-time messaging and content sharing capabilities.",
      tags: ["React", "Firebase", "WebRTC", "Redux"],
      image: "/images/projects/social.jpg", // This would be a real image path in production
      link: "#",
      githubLink: "https://github.com",
      featured: false,
    },
    {
      id: "6",
      title: "Inventory Management System",
      description: "An inventory management system with barcode scanning and automated reordering.",
      tags: ["Next.js", "Node.js", "MySQL", "Docker"],
      image: "/images/projects/inventory.jpg", // This would be a real image path in production
      link: "#",
      githubLink: "https://github.com",
      featured: false,
    },
  ]

  // Filter by featured if query param is provided
  const { searchParams } = new URL(request.url) ?? undefined
  const featured = searchParams.get("featured")

  if (featured === "true") {
    return NextResponse.json(projects.filter((project) => project.featured))
  }

  return NextResponse.json(projects)
}

