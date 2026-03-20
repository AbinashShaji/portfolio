import { useEffect, useState } from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import JourneySection from './sections/JourneySection'
import ContactSection from './sections/ContactSection'
import SiteFooter from './sections/SiteFooter'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme || 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative overflow-hidden text-stone-800 transition-colors duration-300 dark:text-stone-100">
      <div className="site-shell">
        <HeroSection theme={theme} onToggleTheme={toggleTheme} />
        <main className="relative z-10">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

export default App
