import { NextResponse } from "next/server"
import type { Testimonial } from "@/types"

export async function GET() {
  // In a real app, this would fetch from a database or CMS
  const testimonials: Testimonial[] = [
    {
      id: "1",
      content:
        "Working with this developer was a game-changer for our startup. They delivered a high-quality e-commerce platform that exceeded our expectations and helped us scale our business.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Fashion Forward",
      avatar: "/images/testimonials/sarah.jpg", // This would be a real image path in production
    },
    {
      id: "2",
      content:
        "Exceptional technical skills combined with great communication. They understood our requirements perfectly and delivered a solution that was both elegant and performant.",
      author: "Michael Chen",
      role: "CTO",
      company: "TechVentures",
      avatar: "/images/testimonials/michael.jpg", // This would be a real image path in production
    },
    {
      id: "3",
      content:
        "The analytics dashboard they built for us provides invaluable insights into our business operations. Their attention to detail and commitment to quality is outstanding.",
      author: "Jessica Williams",
      role: "Product Manager",
      company: "DataInsights",
      avatar: "/images/testimonials/jessica.jpg", // This would be a real image path in production
    },
  ]

  return NextResponse.json(testimonials)
}

