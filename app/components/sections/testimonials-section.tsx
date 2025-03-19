"use client"

import { TestimonialSlider } from "../testimonial-slider"
import type { Testimonial } from "@/types"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <div className="section-subheading">Testimonials</div>
          <h2 className="section-heading">What Clients Say</h2>
          <div className="section-divider"></div>
        </div>

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}

