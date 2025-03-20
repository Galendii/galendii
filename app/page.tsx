import { ThemeToggle } from "./components/theme-toggle";
import { HeroSection } from "./components/sections/hero-section";
import { StatsSection } from "./components/sections/stats-section";
import { SkillsSection } from "./components/sections/skills-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { TestimonialsSection } from "./components/sections/testimonials-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { ContactSection } from "./components/sections/contact-section";
import { FooterSection } from "./components/sections/footer-section";

import {
  getProfile,
  getSkills,
  getProjects,
  getExperiences,
  getTestimonials,
  getStats,
} from "@/lib/api";

export const dynamic = "force-dynamic"; // Ensures SSR behavior

export default async function Home() {
  // Fetch all data in parallel
  const [profile, skillCategories, experiences, stats] = await Promise.all([
    getProfile(),
    getSkills(),
    // getProjects(true), // Only fetch featured projects
    getExperiences(),
    // getTestimonials(),
    getStats(),
  ]);

  return (
    <main className="min-h-screen bg-background">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection profile={profile} />
      <StatsSection stats={stats} />
      <SkillsSection skillCategories={skillCategories} />
      {/* <ProjectsSection projects={projects} /> */}
      {/* <TestimonialsSection testimonials={testimonials} /> */}
      <ExperienceSection experiences={experiences} />
      <ContactSection profile={profile} />
      <FooterSection profile={profile} />
    </main>
  );
}
