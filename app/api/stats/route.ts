import { NextResponse } from "next/server"
import type { Stat } from "@/types"

export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const stats: Stat[] = [
    { value: "8+", label: "Years Experience" },
    { value: "120+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "15+", label: "Technologies" },
  ]

  return NextResponse.json(stats)
}

