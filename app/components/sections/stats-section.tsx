"use client";

import { StatCard } from "../stat-card";
import type { Stat } from "@/types";

interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container px-4 md:px-8">
        <div className="flex items-center justify-evenly">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
