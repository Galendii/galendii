"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import { ContactForm } from "../contact-form";
import type { Profile } from "@/types";

interface ContactSectionProps {
  profile: Profile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center mb-12">
          <div className="section-subheading">Get In Touch</div>
          <h2 className="section-heading">Let's Work Together</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="p-6 rounded-lg bg-card border border-border/50 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${profile.socialLinks.email}`}
                    about="_blank"
                    className="font-medium"
                  >
                    {profile.socialLinks.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-primary/10 text-primary">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href={profile.socialLinks.linkedin}
                    about="_blank"
                    className="font-medium"
                  >
                    {profile.name}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-primary/10 text-primary">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    about="_blank"
                    href={profile.socialLinks.github}
                    className="font-medium"
                  >
                    {profile.socialLinks.github}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">
                Current Availability
              </h3>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <div className="flex items-center">
                  {profile.availableForProjects ? (
                    <div className="w-3 h-3 mr-2 rounded-full bg-green-500"></div>
                  ) : (
                    <div className="w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                  )}
                  <p className="font-medium">
                    {profile.availableForProjects
                      ? "Available for new projects"
                      : "Unavailable for projects"}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  I'm currently taking on new projects starting from{" "}
                  {new Date(
                    new Date(profile.projectAcceptanceDate)
                  ).toLocaleString("default", { month: "long" })}
                  .
                </p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
