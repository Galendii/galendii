import { Profile } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getProfile(): Promise<Profile | null> {
  try {
    const profileSlug = process.env.NEXT_PUBLIC_FIREBASE_PROFILE_SLUG;
    if (!profileSlug) {
      throw new Error(
        "Environment variable NEXT_PUBLIC_FIREBASE_PROFILE_SLUG is not defined"
      );
    }
    const docRef = doc(db, "profile", profileSlug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        ...data,
        projectAcceptanceDate: data.projectAcceptanceDate?.toDate() || null,
      } as Profile;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
}
