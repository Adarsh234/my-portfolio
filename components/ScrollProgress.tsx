'use client'
import { motion, useScroll, useSpring } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  // Wrap the scroll progress in a spring for that buttery-smooth easing
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 origin-left z-[9999] shadow-[0_0_15px_rgba(99,102,241,0.8)]"
      style={{ scaleX }}
    />
  )
}
