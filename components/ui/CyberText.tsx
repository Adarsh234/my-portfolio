'use client'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>/?'

export const CyberText = ({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) => {
  // Start with scrambled text right away
  const [displayText, setDisplayText] = useState(() =>
    text
      .split('')
      .map((char) => (char === ' ' ? ' ' : '_'))
      .join(''),
  )
  const ref = useRef(null)

  // Trigger only when the element scrolls into view
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    if (!isInView) return

    let iteration = 0
    let interval: NodeJS.Timeout

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index] // Lock in the real letter
              }
              if (letter === ' ') return ' ' // Preserve spaces
              // Show random cyber character
              return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)]
            })
            .join(''),
        )

        if (iteration >= text.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3 // Controls the speed of decryption (lower = slower)
      }, 30)
    }, delay * 1000) // Convert delay to milliseconds

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text, isInView, delay])

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  )
}
