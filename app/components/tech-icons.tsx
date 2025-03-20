"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
];

export function TechIcons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-wrap justify-center gap-6 md:gap-8"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          className="tech-icon"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs text-muted-foreground">{tech.name}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
