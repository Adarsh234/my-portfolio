'use client'
import { skills } from '@/data'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-16">
          Technical <span className="text-indigo-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-lg font-bold capitalize text-slate-700 dark:text-slate-200 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-md font-medium border border-slate-200 dark:border-slate-800"
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
