'use client'
import { personalInfo } from '@/data'
// 1. IMPORT 'Variants' FROM FRAMER MOTION
import { motion, Variants } from 'framer-motion'
import { Card } from './ui/Card'
import { FaLaptopCode, FaRocket, FaShieldAlt } from 'react-icons/fa'

const About = () => {
  // 2. EXPLICITLY TYPE AS 'Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // 3. EXPLICITLY TYPE AS 'Variants'
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }, // Now TS knows this is a valid Framer curve!
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
    <section id="about" className="relative py-24 overflow-hidden">
      {/* 🔮 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-3xl h-[300px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

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
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-6">
              Behind the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Code
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-8 opacity-80"></div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
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
                className="relative overflow-hidden group p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300"
              >
                {/* Decorative Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon size={28} />
                  </div>

                  {/* Text */}
                  <h3 className="font-black text-3xl md:text-4xl text-slate-800 dark:text-slate-100 mb-1 tracking-tight">
                    {stat.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400">
                    {stat.subtitle}
                  </p>
                </div>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
