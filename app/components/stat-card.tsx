"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-card border border-border/50 shadow-lg text-center hover:shadow-xl transition-shadow"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
        className="mb-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
      >
        {value}
      </motion.div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

