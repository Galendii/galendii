import type {
  Profile,
  SkillCategory,
  Project,
  Experience,
  Testimonial,
  Stat,
  EmailFormData,
} from "@/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

export async function getProfile(): Promise<Profile> {
  const res = await fetch(apiUrl + "/api/profile");

  if (!res.ok) {
    throw new Error("Failed to fetch profile data");
  }

  return res.json();
}

export async function getSkills(): Promise<SkillCategory[]> {
  const res = await fetch(apiUrl + "/api/skills");

  if (!res.ok) {
    throw new Error("Failed to fetch skills data");
  }

  return res.json();
}

export async function getProjects(featured?: boolean): Promise<Project[]> {
  const url = featured ? "/api/projects?featured=true" : "/api/projects";
  const res = await fetch(apiUrl + url);

  if (!res.ok) {
    throw new Error("Failed to fetch projects data");
  }

  return res.json();
}

export async function getExperiences(): Promise<Experience[]> {
  const res = await fetch(apiUrl + "/api/experiences");

  if (!res.ok) {
    throw new Error("Failed to fetch experiences data");
  }

  return res.json();
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(apiUrl + "/api/testimonials");

  if (!res.ok) {
    throw new Error("Failed to fetch testimonials data");
  }

  return res.json();
}

export async function getStats(): Promise<Stat[]> {
  const res = await fetch(apiUrl + "/api/stats");

  if (!res.ok) {
    throw new Error("Failed to fetch stats data");
  }

  return res.json();
}

export const sendEmail = async (email: EmailFormData) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify(email),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to send email data ${JSON.stringify(data)}`);
    }

    return response;
    // Handle response...
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
};
