'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      // Check if we are hovering over a button, link, or input
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    globalThis.addEventListener('mousemove', updateMousePosition)
    globalThis.addEventListener('mouseover', handleMouseOver)

    return () => {
      globalThis.removeEventListener('mousemove', updateMousePosition)
      globalThis.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Hide default cursor on desktop
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Tiny solid dot that exactly tracks the mouse */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-indigo-500 rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1, // Shrink dot when hovering
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />

      {/* Larger glowing ring that trails behind slightly */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-indigo-400 rounded-full pointer-events-none z-[998] hidden md:flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1, // Expand ring when hovering links
          backgroundColor: isHovering
            ? 'rgba(99, 102, 241, 0.2)'
            : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  )
}
