'use client'
import { services } from '@/data'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'
import { FaCheckCircle } from 'react-icons/fa'
import { TiltCard } from './ui/TiltCard'
// 1. SWAPPED REVEALWORD FOR CYBERTEXT
import { CyberText } from './ui/CyberText'

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden z-0 cursor-none"
    >
      {/* 🧹 Removed static ambient background glow to let 3D background shine */}

      <div className="max-w-7xl mx-auto px-5 sm:px-10 cursor-none">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div>
            {/* 2. IMPLEMENTED CYBER TEXT WITH FONT-MONO FOR MAIN TITLE */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4 flex justify-center flex-wrap gap-x-3 gap-y-1 cursor-none font-mono">
              <CyberText text="My" delay={0.1} />
              <CyberText
                text="Services"
                delay={0.3}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
              />
            </h2>

            {/* ANIMATED GRADIENT LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
              className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 opacity-80 origin-center"
            />

            {/* ANIMATED PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto cursor-none"
            >
              Providing high-quality solutions from intuitive frontend
              interfaces to robust, secure backend systems.
            </motion.p>
          </div>
        </div>

        {/* Grid Container with Spotlight Group Logic */}
        <div className="group/services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative transition-all duration-500 ease-out group-hover/services:blur-sm group-hover/services:scale-[0.95] group-hover/services:opacity-50 hover:!blur-none hover:!opacity-100 hover:z-10 cursor-none"
            >
              <TiltCard className="h-full">
                <Card className="relative p-8 h-full flex flex-col justify-between overflow-hidden group/card bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/50 dark:hover:border-purple-500/50 transition-colors duration-500 cursor-none">
                  {/* Subtle inner card gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10 cursor-none">
                    {/* Icon Container - Glass to Solid Gradient on Hover */}
                    <div className="w-14 h-14 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-indigo-500 dark:text-indigo-400 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover/card:bg-gradient-to-br group-hover/card:from-indigo-500 group-hover/card:to-purple-600 group-hover/card:text-white group-hover/card:border-transparent transition-all duration-500 shadow-sm group-hover/card:shadow-indigo-500/25 cursor-none">
                      <service.icon className="pointer-events-none" />
                    </div>

                    {/* 3. IMPLEMENTED CYBER TEXT ON SERVICE CARDS */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover/card:text-indigo-500 dark:group-hover/card:text-indigo-400 transition-colors duration-300 cursor-none font-mono">
                      <CyberText text={service.title} delay={0.4 + idx * 0.1} />
                    </h3>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 cursor-none">
                      {service.desc}
                    </p>
                  </div>

                  {/* Hidden Expanding Features Section */}
                  <div className="relative z-10 max-h-0 opacity-0 group-hover/card:max-h-60 group-hover/card:opacity-100 transition-all duration-500 ease-in-out overflow-hidden border-t border-slate-200/50 dark:border-slate-700/50 mt-2 pt-0 group-hover/card:pt-4 cursor-none">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 cursor-none">
                      Included Features
                    </h4>
                    <ul className="space-y-2.5 cursor-none">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-none"
                        >
                          <FaCheckCircle className="text-indigo-500 flex-shrink-0 text-[12px] pointer-events-none" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
