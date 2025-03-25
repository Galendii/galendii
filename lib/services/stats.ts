import { Stat } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getStats(): Promise<Stat[] | null> {
  const statsCol = collection(db, "stats");

  try {
    const snapshot = await getDocs(statsCol);
    const stats = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Stat[];

    return stats;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
}
