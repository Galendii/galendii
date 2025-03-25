// scripts/add-skills.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config (same as in your web app)
const firebaseConfig = {
  apiKey: "AIzaSyC5h3ZP1e5rBTl4mNHX8u2SJmKqgLB-KhI",
  authDomain: "portfolio-9b0b9.firebaseapp.com",
  projectId: "portfolio-9b0b9",
  storageBucket: "portfolio-9b0b9.appspot.com",
  messagingSenderId: "1011126672435",
  appId: "1:1011126672435:web:481813e23f93852c351746",
  measurementId: "G-NM9BLQ33KJ",
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
