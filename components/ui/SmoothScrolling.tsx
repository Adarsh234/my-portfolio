'use client'
import { ReactLenis } from 'lenis/react'

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, // The sweet spot for that "heavy/premium" liquid feel
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
