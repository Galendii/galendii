// scripts/add-skills.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config (same as in your web app)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "portfolio");

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
];

async function addStats() {
  try {
    const statsCollection = collection(db, "stats");

    // Add each skill document
    for (const stat of stats) {
      await addDoc(statsCollection, stat);
      console.log(`Added stat: ${stat.label}`);
    }

    console.log("✅ All stats added successfully!");
  } catch (error) {
    console.error("❌ Error adding stats:", error);
  } finally {
    process.exit();
  }
}

addStats();
