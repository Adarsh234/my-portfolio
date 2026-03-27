'use client'
import { useState, useEffect } from 'react'
import { personalInfo } from '@/data'
import { motion, Variants } from 'framer-motion'
import { Card } from './ui/Card'
import {
  FaLaptopCode,
  FaRocket,
  FaShieldAlt,
  FaUnlockAlt,
  FaLock,
} from 'react-icons/fa'
import { CyberText } from './ui/CyberText'

const About = () => {
  // Easter Egg State
  const [decryptionKey, setDecryptionKey] = useState('')
  const [isDecrypted, setIsDecrypted] = useState(false)
  const [noiseText, setNoiseText] = useState('')

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>/?'
    let noise = ''
    for (let i = 0; i < 150; i++) {
      noise += chars[Math.floor(Math.random() * chars.length)]
    }
    setNoiseText(noise)
  }, [])

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setDecryptionKey(val)
    if (val.toLowerCase() === 'adarsh') {
      setIsDecrypted(true)
    } else {
      setIsDecrypted(false)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const stats = [
    {
      title: '02+',
      subtitle: 'Years Experience',
      icon: FaLaptopCode,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      title: '06+',
      subtitle: 'Projects Completed',
      icon: FaRocket,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
    {
      title: '24/7',
      subtitle: 'Cyber Vigilance',
      icon: FaShieldAlt,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden z-0">
      <div className="max-w-5xl mx-auto px-5 sm:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-6 flex justify-center flex-wrap gap-x-3 gap-y-1 cursor-none font-mono">
              <CyberText text="Behind" delay={0.1} />
              <CyberText text="the" delay={0.3} />
              <CyberText
                text="Code"
                delay={0.5}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
              />
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-8 opacity-80"></div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto cursor-none">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="w-full mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 cursor-none"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center cursor-none">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300 cursor-none`}
                  >
                    <stat.icon size={28} />
                  </div>
                  <h3 className="font-black text-3xl md:text-4xl text-slate-800 dark:text-slate-100 mb-1 tracking-tight cursor-none">
                    {stat.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 cursor-none">
                    {stat.subtitle}
                  </p>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* THE STEGANOGRAPHY EASTER EGG */}
          <motion.div variants={itemVariants} className="w-full mt-12">
            {/* 🎨 DYNAMIC TERMINAL BACKGROUND */}
            <Card className="p-1 relative overflow-hidden bg-white/60 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-100/50 dark:bg-slate-800 border-b border-slate-200/60 dark:border-slate-700 rounded-t-lg">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 dark:bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 dark:bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 dark:bg-green-500"></div>
                </div>
                {/* Responsive Header Text */}
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
                  {isDecrypted ? (
                    <FaUnlockAlt className="text-emerald-500 dark:text-green-400" />
                  ) : (
                    <FaLock className="text-red-500 dark:text-red-400" />
                  )}
                  stego_extract.sh
                </span>
              </div>

              <div className="p-6 font-mono text-sm sm:text-base text-left">
                {/* Analyzer Text */}
                <div className="text-indigo-600 dark:text-indigo-400 mb-4 font-semibold">
                  $ analyzer --target bio_data.bin <br />
                  <span className="text-slate-500 dark:text-slate-400 font-normal">
                    {'>'} Hidden payload detected. Enter decryption key (Hint:
                    Creator&apos;s First Name).
                  </span>
                </div>

                {/* Input Field */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-emerald-600 dark:text-green-400 font-bold">
                    root@sys:~#
                  </span>
                  <input
                    type="text"
                    value={decryptionKey}
                    onChange={handleKeyChange}
                    spellCheck="false"
                    // Responsive input text color
                    className="bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 w-full focus:ring-0 p-0 placeholder-slate-400 dark:placeholder-slate-600"
                    placeholder="Enter key..."
                  />
                </div>

                {/* Dynamic Payload Area (Inner Window) */}
                <div className="p-4 rounded bg-white/50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-inner break-all h-auto min-h-[8rem]">
                  {isDecrypted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-emerald-600 dark:text-green-400 flex flex-col gap-2 font-medium"
                    >
                      <span className="font-bold text-lg text-emerald-700 dark:text-green-300">
                        [ SECURE PAYLOAD DECRYPTED ]
                      </span>
                      <span>
                        Authenticating identity...{' '}
                        <span className="text-slate-800 dark:text-white">
                          Admin privileges granted.
                        </span>
                      </span>

                      {/* The "Flag" and Quote */}
                      <div className="mt-2 border-l-2 border-emerald-500/50 dark:border-green-500/50 pl-4 py-1">
                        <span className="text-amber-600 dark:text-yellow-400 font-bold block mb-1 tracking-wider">
                          FLAG{'{'}ZERO_DAY_PREVENTED{'}'}
                        </span>
                        <span className="text-slate-700 dark:text-slate-300 block text-sm italic">
                          "A system is only as secure as its weakest line of
                          code."
                        </span>
                      </div>

                      {/* The Pitch */}
                      <span className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                        Congratulations on finding the hidden directory. You are
                        looking at a developer who engineers scalable web
                        applications with a security-first architecture. Let's
                        build something impenetrable.
                      </span>

                      {/* Interactive Call to Action */}
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-2">
                        <a
                          href="mailto:adarsh0103sharma@gmail.com"
                          className="hover:underline flex items-center gap-2 cursor-none"
                        >
                          <span className="animate-pulse">{'>'}</span>{' '}
                          Initiate_Contact()
                        </a>
                      </span>
                    </motion.div>
                  ) : (
                    // Noise Text
                    <span className="text-slate-400 dark:text-slate-600 select-none opacity-50">
                      {noiseText}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
