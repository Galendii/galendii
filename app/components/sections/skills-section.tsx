"use client";

import { SkillBadge } from "../skill-badge";
import type { SkillCategory } from "@/types";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export function SkillsSection({ skillCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="section-subheading">My Expertise</div>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
