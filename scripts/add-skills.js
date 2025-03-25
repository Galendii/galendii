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

const skills = [
  {
    name: "React",
    level: 100,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Nest.js",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Django",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Node.js",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "PotsgreSQL",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "AWS",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Docker",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "CI/CD",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

async function addSkills() {
  try {
    const skillsCollection = collection(db, "skills");

    // Add each skill document
    for (const skill of skills) {
      await addDoc(skillsCollection, skill);
      console.log(`Added skill: ${skill.name}`);
    }

    console.log("✅ All skills added successfully!");
  } catch (error) {
    console.error("❌ Error adding skills:", error);
  } finally {
    process.exit();
  }
}

addSkills();
