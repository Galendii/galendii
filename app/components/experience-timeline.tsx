"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  BriefcaseIcon,
  CodeIcon,
  LayoutIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Experience } from "@/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  // Map icon strings to Lucide icons
  const getIcon = (iconName: string): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      briefcase: BriefcaseIcon,
      code: CodeIcon,
      layout: LayoutIcon,
      // Add more icons as needed
    };

    return icons[iconName] || BriefcaseIcon;
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-0 w-0.5 h-full bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 md:left-1/2 md:-translate-x-1/2" />

      {/* Experience items */}
      {experiences.map((exp, index) => {
        const IconComponent = getIcon(exp.icon);

        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative mb-12 md:mb-16 last:mb-0"
          >
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot with icon */}
              <div className="absolute left-[-8px] top-6 h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg md:left-1/2 md:-translate-x-1/2 z-10">
                <IconComponent className="h-4 w-4 text-white" />
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <Card className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <h4 className="mb-2 text-lg font-medium text-primary">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-primary" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-primary" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-sm mb-4">{exp.description}</p>

                    <div className="mt-4 space-y-2">
                      <h5 className="text-sm font-semibold flex items-center">
                        <Award className="w-4 h-4 mr-1 text-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-xs text-muted-foreground flex items-start"
                          >
                            <span className="mr-2 text-primary">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
