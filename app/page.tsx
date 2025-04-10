import { ThemeToggle } from "./components/theme-toggle";
import { HeroSection } from "./components/sections/hero-section";
import { StatsSection } from "./components/sections/stats-section";
import { SkillsSection } from "./components/sections/skills-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { ContactSection } from "./components/sections/contact-section";
import { FooterSection } from "./components/sections/footer-section";

import { getProfile } from "@/lib/services/profile";
import { getSkills } from "@/lib/services/skills";
import { getExperiences } from "@/lib/services/experiences";
import { getStats } from "@/lib/services/stats";

export default async function Home() {
  const [profile, skillCategories, experiences, stats] = await Promise.all([
    getProfile(),
    getSkills(),
    getExperiences(),
    getStats(),
  ]);
  if (!profile || !skillCategories || !experiences || !stats) {
    return <div>Loading</div>;
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection profile={profile} experiences={experiences} skillCategories={skillCategories} stats={stats} />
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
