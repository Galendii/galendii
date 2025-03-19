import { NextResponse } from "next/server"
import type { Profile } from "@/types"

export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const profile: Profile = {
    name: "Alex Morgan",
    title: "Senior Fullstack Developer",
    summary: "I build scalable, high-performance web applications with modern technologies",
    avatar: "/images/profile.jpg", // This would be a real image path in production
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "contact@example.com",
    },
  }

  return NextResponse.json(profile)
}

