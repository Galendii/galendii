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

const experiences = [
  {
    id: "1",
    role: "Senior Fullstack Developer",
    company: "Blinctek / OneBlinc",
    period: "2021 - Present",
    location: "Remote",
    description:
      "Led full-stack development of mission-critical products using Django, Next/React, and Flutter while improving architectural replicability through AWS CDK.",
    achievements: [
      "Mentored junior developers in company best practices and fostered collaborative learning",
      "Developed 4 MVPs with 75% success rate (3 became principal company products)",
      "Created white-label management dashboards to accelerate product time-to-market",
      "Architected maintainable MVP infrastructure using AWS CDK",
    ],
    icon: "briefcase",
    color: "from-primary to-purple-600",
  },
  {
    id: "2",
    role: "Technology Manager",
    company: "Mind Consulting",
    period: "2019 - 2021",
    location: "Sorocaba",
    description:
      "Led technical operations and infrastructure development for multiple squads while establishing CI/CD pipelines and cloud solutions.",
    achievements: [
      "Directed 5+ development squads (20+ engineers) across simultaneous projects",
      "Implemented AWS infrastructure (ECS, S3, Route53) and CI/CD pipelines",
      "Developed company-wide UI system using React with TypeScript and Storybook",
      "Established technical prerequisites for new project initiatives",
    ],
    icon: "users",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "3",
    role: "Fullstack Web and Mobile Developer",
    company: "Mind Consulting",
    period: "2018 - 2019",
    location: "Sorocaba",
    description:
      "Full-cycle development of educational and financial applications across mobile and web platforms.",
    achievements: [
      "Built 'Nerd App' educational platform using React Native",
      "Developed 'Clube de Investimentos' financial education app (mobile + web)",
      "Implemented solutions using React, React Native, Node.js, and Laravel",
      "Managed both SQL and NoSQL database systems",
    ],
    icon: "code",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: "4",
    role: "Junior Fullstack Web Developer",
    company: "Mind Consulting",
    period: "2017 - 2018",
    location: "Sorocaba",
    description:
      "Contributed to legacy system maintenance while developing internal tools and expanding technical skillset.",
    achievements: [
      "Maintained logistics platform built with Laravel framework",
      "Created internal HR/payroll management web application",
      "Pioneered TypeScript adoption within company projects",
    ],
    icon: "rocket",
    color: "from-orange-400 to-amber-600",
  },
];

async function addExperiences() {
  try {
    const experiencesCollection = collection(db, "experiences");

    // Add each skill document
    for (const experience of experiences) {
      await addDoc(experiencesCollection, experience);
      console.log(
        `Added experience: ${experience.role} at ${experience.company}`
      );
    }

    console.log("✅ All experiences added successfully!");
  } catch (error) {
    console.error("❌ Error adding experiences:", error);
  } finally {
    process.exit();
  }
}

addExperiences();
