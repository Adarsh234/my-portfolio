'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const RevealWord = ({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) => {
  return (
    // 1. Swapped to inline-flex and added vertical padding so the text has room to rotate without being cut off
    <span className="relative inline-flex overflow-hidden pt-2 pb-2 -mt-2 -mb-2">
      <motion.span
        initial={{ y: '100%', rotate: 5, opacity: 0 }}
        whileInView={{ y: 0, rotate: 0, opacity: 1 }}
        // 2. Removed the strict negative margin so it triggers reliably when it enters the screen
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: delay,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}
