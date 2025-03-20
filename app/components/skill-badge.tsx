"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  level: number;
  icon?: string;
}

export function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIconPath = (iconName: string) => {
    // This is a placeholder. In a real app, you would use actual icon paths
    return `/placeholder.svg?height=20&width=20`;
  };

  return (
    <div ref={ref} className="relative w-1/4 md:w-auto">
      <Badge
        variant="outline"
        className="px-3 pt-3 text-sm font-medium border-2 cursor-default hover:bg-primary/5 transition-colors flex-col flex border-b-transparent w-full"
      >
        <div className="flex items-center ">
          {icon && (
            <div>
              <Image
                src={icon || "/placeholder.svg"}
                alt={name}
                width={20}
                height={20}
                className="w-7 h-7 md:w-5 md:h-5"
              />
              {/* {icon} */}
            </div>
          )}
          <span className="ml-1.5 hidden md:block">{name}</span>
        </div>

        <div className=" w-full mt-3 h-[4px] bg-muted overflow-hidden ">
          {isInView && (
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-purple-600 "
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
          )}
        </div>
      </Badge>
    </div>
  );
}
