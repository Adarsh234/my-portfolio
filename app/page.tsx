import Hero from '../components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="relative bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col overflow-hidden mx-auto">
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
    </main>
  )
}
