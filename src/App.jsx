import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import JourneySection from './sections/JourneySection'
import ContactSection from './sections/ContactSection'
import SiteFooter from './sections/SiteFooter'
import SmoothScrollController from './components/SmoothScrollController'
import PageNavigator from './components/PageNavigator'
import SiteNavbar from './components/SiteNavbar'

const pageViewMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  },
}

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const pageComponents = {
  home: HeroSection,
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  journey: JourneySection,
  contact: ContactSection,
}

const toHref = (id) => (id === 'home' ? '#home' : `#${id}`)

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme || 'light'
  })
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return pages.some((page) => page.id === hash) ? hash : 'home'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const nextPage = pages.some((page) => page.id === hash) ? hash : 'home'
      setCurrentPage(nextPage)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const navItems = useMemo(
    () => pages.slice(1).map((page) => [page.label, toHref(page.id)]),
    [],
  )

  const currentIndex = pages.findIndex((page) => page.id === currentPage)
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null
  const ActivePage = pageComponents[currentPage]

  return (
    <div className="relative overflow-hidden text-stone-800 transition-colors duration-300 dark:text-stone-100">
      <SmoothScrollController />
      <div className="site-shell">
        <SiteNavbar
          navItems={navItems}
          theme={theme}
          onToggleTheme={toggleTheme}
          currentPage={currentPage}
        />
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Motion.div key={currentPage} {...pageViewMotion} className="page-view-shell">
              <ActivePage theme={theme} onToggleTheme={toggleTheme} navItems={navItems} />
              {currentPage !== 'home' ? (
                <PageNavigator
                  currentLabel={pages[currentIndex]?.label}
                  previousPage={previousPage ? { ...previousPage, href: toHref(previousPage.id) } : null}
                  nextPage={nextPage ? { ...nextPage, href: toHref(nextPage.id) } : null}
                />
              ) : null}
            </Motion.div>
          </AnimatePresence>
        </main>
        <SiteFooter navItems={navItems} currentPage={currentPage} />
      </div>
    </div>
  )
}

export default App
