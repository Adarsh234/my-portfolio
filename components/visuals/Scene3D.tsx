'use client'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// 1. Import Sparkles from drei!
import { Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

function ParallaxSparkles({ isLight }: { isLight: boolean }) {
  const groupRef = useRef<THREE.Group>(null)

  // Keep our smooth scroll and mouse interaction!
  useFrame((state) => {
    if (!groupRef.current) return

    // Parallax scroll effect
    groupRef.current.position.y = window.scrollY * 0.001

    // Subtle mouse tilt
    groupRef.current.rotation.x +=
      (state.mouse.y * 0.1 - groupRef.current.rotation.x) * 0.05
    groupRef.current.rotation.y +=
      (state.mouse.x * 0.1 - groupRef.current.rotation.y) * 0.05
  })

  return (
    <group ref={groupRef}>
      <Sparkles
        count={400} // Sparkles are softer and larger, so we need fewer of them!
        scale={20} // Spread them across a massive 20-unit 3D volume
        size={isLight ? 15 : 6} // Much larger in light mode for the soft bokeh effect
        color={isLight ? '#4f46e5' : '#818cf8'} // Deep indigo vs Soft glowing indigo
        opacity={isLight ? 0.15 : 0.6} // Highly transparent in light mode
        speed={0.3} // Slow, elegant floating speed
        noise={1} // Adds organic, wobbly movement to the particles
      />
    </group>
  )
}

export const Scene3D = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
      >
        <ParallaxSparkles
          isLight={mounted ? resolvedTheme === 'light' : false}
        />
      </Canvas>
    </div>
  )
}
