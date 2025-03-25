import { EmailFormData } from "@/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export async function saveEmailData(data: EmailFormData): Promise<boolean> {
  try {
    const emailCollection = collection(db, "website-form-contacts"); // Ensure "website-form-contacts" is the correct collection name
    await addDoc(emailCollection, {
      ...data,
      timestamp: serverTimestamp(), // Add a timestamp to the document
    });
    return true;
  } catch (error) {
    throw new Error(`Failed to save email data: ${JSON.stringify(data)}`);
  }
}
