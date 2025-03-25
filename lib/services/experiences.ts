import { Experience } from "@/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getExperiences(): Promise<Experience[] | null> {
  try {
    const experiencesCol = collection(db, "experiences");

    // First try to sort by endYear field if it exists
    const q = query(
      experiencesCol,
      orderBy("startYear", "desc") // Secondary sort
    );

    const snapshot = await getDocs(q);
    const experiences = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Experience[];

    return experiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    throw error;
  }
}
