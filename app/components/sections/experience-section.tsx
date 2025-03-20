"use client";

import { ExperienceTimeline } from "../experience-timeline";
import type { Experience } from "@/types";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="section-subheading">My Journey</div>
          <h2 className="section-heading">Professional Experience</h2>
          <div className="section-divider"></div>
        </div>

        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
}
