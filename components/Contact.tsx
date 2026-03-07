'use client'
import { personalInfo } from '@/data'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa'
import { Card } from './ui/Card'
import MagicButton from './ui/MagicButton'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    if (!formRef.current) return

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setLoading(false)
        setSuccess(true)
        formRef.current?.reset()
        setTimeout(() => setSuccess(false), 5000)
      },
      (error) => {
        setLoading(false)
        console.error('FAILED...', error)
        setError('Failed to send message. Please try again later.')
      },
    )
  }

  const contactDetails = [
    { icon: FaEnvelope, title: 'Email Me', detail: personalInfo.email },
    { icon: FaPhoneAlt, title: 'Call Me', detail: personalInfo.phone },
    { icon: FaMapMarkerAlt, title: 'Location', detail: 'India' },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden z-0">
      {/* 🔮 Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[400px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 opacity-80"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight">
                Let&apos;s talk about your next project
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I am currently available for freelance projects and open to
                full-time opportunities. Reach out and let&apos;s build
                something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-indigo-500 dark:text-indigo-400 flex items-center justify-center rounded-2xl group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/25">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                      {item.title}
                    </p>
                    <p className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 sm:p-10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 shadow-xl relative overflow-hidden">
              {/* Subtle inner card gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none"></div>

              {success ? (
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4 py-16">
                  <FaCheckCircle className="text-6xl text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-[bounce_2s_infinite]" />
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 px-6 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="relative z-10 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="user_name"
                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        name="user_name"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-slate-800 dark:text-slate-100 transition-all shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="user_email"
                        className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="user_email"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-slate-800 dark:text-slate-100 transition-all shadow-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-slate-800 dark:text-slate-100 transition-all shadow-sm resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                  )}

                  <MagicButton
                    title={loading ? 'Sending...' : 'Send Message'}
                    icon={loading ? null : <FaPaperPlane />}
                    position="right"
                    otherClasses={`w-full mt-4 ${
                      loading ? 'opacity-70 cursor-wait' : ''
                    }`}
                  />
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
