'use client'
import { skills } from '@/data'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'
// 1. IMPORT REVEALWORD HERE
import { RevealWord } from './ui/RevealWord'

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden z-0">
      {/* 🔮 Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-4xl h-[400px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div>
            {/* 2. REVEALWORD FOR THE TITLE */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4 flex justify-center flex-wrap gap-x-3 gap-y-1 cursor-none">
              <RevealWord delay={0.1}>Technical</RevealWord>
              <RevealWord delay={0.25}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  Skills
                </span>
              </RevealWord>
            </h2>

            {/* 3. ANIMATED GRADIENT LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
              className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 opacity-80 origin-center"
            />

            {/* 4. ANIMATED PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto cursor-none"
            >
              A comprehensive toolkit of languages, frameworks, and tools I use
              to build scalable and secure applications.
            </motion.p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex cursor-none"
            >
              <Card className="w-full p-6 sm:p-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/50 dark:hover:border-purple-500/50 transition-colors duration-500 group cursor-none">
                {/* Category Title */}
                <h3 className="text-xl font-bold capitalize text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3 cursor-none">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full shadow-sm group-hover:scale-y-110 transition-transform duration-300"></span>
                  {category}
                </h3>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5 cursor-none">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-slate-700 dark:text-slate-300 rounded-lg font-medium border border-slate-200/50 dark:border-slate-700/50 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white hover:border-indigo-500 transition-all duration-300 cursor-none shadow-sm hover:shadow-indigo-500/25 transform hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
