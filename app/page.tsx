'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
// 1. IMPORT YOUR NEW 3D SCENE
import { Scene3D } from '@/components/visuals/Scene3D'

const TARGET_TEXT = 'Adarsh'
const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*<>/?'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [displayText, setDisplayText] = useState(TARGET_TEXT)

  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout

    interval = setInterval(() => {
      setDisplayText(
        TARGET_TEXT.split('')
          .map((letter, index) => {
            if (index < iteration) return TARGET_TEXT[index]
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)]
          })
          .join(''),
      )

      if (iteration >= TARGET_TEXT.length) clearInterval(interval)
      iteration += 1 / 4
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    // 🍰 LAYER 1 (The Base): Has the background colors and sets relative z-0
    <main className="relative z-0 min-h-screen flex flex-col overflow-hidden mx-auto">
      {/* 🍰 LAYER 2 (The Particles): Sits directly on top of the background */}
      <Scene3D />

      {/* 🍰 LAYER 3 (The Content): Wraps everything else and forces it above the particles (z-10) */}
      <div className="relative z-10 flex flex-col w-full h-full pointer-events-auto">
        <CustomCursor />
        <ScrollProgress />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950"
            >
              <div className="absolute w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[80px] animate-pulse"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative z-10 flex items-center text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight font-mono"
              >
                <span className="text-indigo-500 mr-2 opacity-70">{`>`}</span>
                {displayText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="text-indigo-500 ml-1"
                >
                  _
                </motion.span>
              </motion.div>

              <div className="relative z-10 w-64 h-1 mt-8 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="w-full"
            >
              <Navbar />
              <div className="w-full">
                <Hero />
                <About />
                <Services />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
