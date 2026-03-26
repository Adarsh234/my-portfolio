'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'

export const TiltCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Springs make the physics feel smooth and bouncy
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // Map mouse position to rotation degrees (max 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    // Reset to flat when mouse leaves
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d', // Crucial for 3D effect
      }}
      className={`relative w-full ${className}`}
    >
      {/* translateZ(30px) makes the content literally pop out of the screen */}
      <div
        style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  )
}
