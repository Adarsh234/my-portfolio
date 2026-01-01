'use client'
import { personalInfo } from '@/data'
import { motion } from 'framer-motion'
import { Card } from './ui/Card'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-5 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-8">
            {personalInfo.bio}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="p-4 bg-slate-50 dark:bg-slate-800">
              <h3 className="font-bold text-2xl text-indigo-500 mb-1">02+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Years Experience
              </p>
            </Card>
            <Card className="p-4 bg-slate-50 dark:bg-slate-800">
              <h3 className="font-bold text-2xl text-indigo-500 mb-1">06+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Projects Completed
              </p>
            </Card>
            <Card className="p-4 bg-slate-50 dark:bg-slate-800">
              <h3 className="font-bold text-2xl text-indigo-500 mb-1">24/7</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Cyber Vigilance
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
