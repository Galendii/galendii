import { Skill, SkillCategory } from "@/types";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getSkills(): Promise<SkillCategory[] | null> {
  const skillsCol = collection(db, "skills");

  try {
    const snapshot = await getDocs(skillsCol);
    const skills = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Skill[];

    const groupedSkills = Object.groupBy(skills, (item) => item.tag);
    const skillCategory = Object.keys(groupedSkills).map((key) => {
      return {
        name: key,
        skills: groupedSkills[key as keyof typeof groupedSkills],
      };
    });

    return skillCategory as SkillCategory[];
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
}
