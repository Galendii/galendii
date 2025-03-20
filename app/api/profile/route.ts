import { NextResponse } from "next/server";
import type { Profile } from "@/types";
export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const profile: Profile = {
    name: "Breno Zielinski Galendi",
    title: "Senior Fullstack Developer",
    summary:
      "I build scalable, high-performance web applications with modern technologies",
    avatar: "/avatar.png", // This would be a real image path in production
    socialLinks: {
      github: "https://github.com/Galendii",
      linkedin:
        "https://www.linkedin.com/in/breno-zielinski-galendi-b6385b179/",
      email: "breno.z.galendi@gmail.com",
    },
    projectAcceptanceDate: "2025-02-01T00:00:00.000Z",
    availableForProjects: true,
  };

  return NextResponse.json(profile);
}
