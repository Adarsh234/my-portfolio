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

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // 1. Replace these with your actual environment variables or strings
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
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000)
      },
      (error) => {
        setLoading(false)
        console.error('FAILED...', error)
        setError('Failed to send message. Please try again later.')
      }
    )
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-16">
          Get in <span className="text-indigo-500">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
              Let&apos;s talk about your next project
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              I am currently available for freelance projects and open to
              full-time opportunities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email Me</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Me</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            {success ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-10">
                <FaCheckCircle className="text-5xl text-green-500 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  Message Sent!
                </h3>
                <p className="text-slate-500">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 text-indigo-500 hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    name="user_name" // Must match EmailJS template variable
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-100 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-100 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-slate-100 transition-colors"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <MagicButton
                  title={loading ? 'Sending...' : 'Send Message'}
                  icon={loading ? null : <FaPaperPlane />}
                  position="right"
                  otherClasses={`w-full ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                />
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
