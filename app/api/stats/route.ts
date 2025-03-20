import { NextResponse } from "next/server";
import type { Stat } from "@/types";

export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const stats: Stat[] = [
    { value: "7+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
  ];

  return NextResponse.json(stats);
}
