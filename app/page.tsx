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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Set the timer for the loading screen (2000ms = 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col overflow-hidden mx-auto">
      <AnimatePresence mode="wait">
        {isLoading ? (
          //  THE LOADING SCREEN
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950"
          >
            {/* Ambient Glow */}
            <div className="absolute w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[80px] animate-pulse"></div>

            {/* Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative z-10 text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight flex items-center"
            >
              Adarsh
              {/* Pulsing Dot */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-indigo-500"
              >
                .
              </motion.span>
            </motion.div>

            {/* Animated Gradient Progress Bar */}
            <div className="relative z-10 w-48 h-1 mt-8 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }} // Matches the 2000ms timeout
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
              />
            </div>
          </motion.div>
        ) : (
          //  THE MAIN WEBSITE CONTENT
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
    </main>
  )
}
