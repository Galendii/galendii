"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-xl"
      >
        AM
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="font-semibold text-lg"
      >
        Alex Morgan
      </motion.span>
    </Link>
  )
}

