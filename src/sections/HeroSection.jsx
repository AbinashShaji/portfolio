import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import heroImage from '../assets/.hero-reference.jpg'

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
]

const petals = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${6 + ((index * 8.2) % 88)}%`,
  delay: `${(index % 6) * 1.8}s`,
  duration: `${13 + (index % 5) * 2}s`,
}))

function HeroSection({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#f4ede3]"
      aria-label="Hero section"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-image h-full w-full object-cover object-center [image-rendering:auto]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(245,239,230,0.34)] via-[rgba(245,239,230,0.1)] to-[rgba(245,239,230,0.02)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_32%,rgba(255,250,244,0.2),transparent_26%)]" />
        {theme === 'dark' ? (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,16,22,0.38),rgba(12,16,22,0.58))]" />
        ) : null}
      </div>

      <div className="petal-field" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="falling-petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          />
        ))}
      </div>

      <header className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-6 sm:px-10 sm:pt-8 lg:px-16">
        <nav
          className={`nav-shell flex items-center justify-between gap-4 rounded-full px-4 py-3 transition duration-300 sm:px-6 ${
            scrolled
              ? 'nav-shell-scrolled'
              : 'nav-shell-default'
          }`}
        >
          <a
            href="#top"
            className="nav-brand text-sm font-bold uppercase tracking-[0.28em]"
          >
            Abinash Shaji
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="nav-link text-sm"
              >
                {label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.2 14.1A8.7 8.7 0 0 1 9.9 3.8a.55.55 0 0 0-.8-.59A9.5 9.5 0 1 0 20.79 14.9a.55.55 0 0 0-.59-.8Z" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 items-center justify-items-start">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl text-left"
          >
            <h1 className="max-w-[11ch] font-['Playfair_Display'] text-[2.9rem] leading-[1.08] tracking-[-0.03em] text-[#2c2c2c] dark:text-white sm:text-[3.8rem] lg:text-[4.5rem]">
              I build systems with clarity, not complexity.
            </h1>

            <p className="mt-6 max-w-2xl font-['Inter'] text-base leading-8 text-[#4f4f4f] dark:text-white sm:text-lg">
              Full-stack developer focused on solving real-world problems
              through thoughtful design and efficient code.
            </p>

            <div className="mt-10 flex flex-col items-start justify-start gap-4 sm:flex-row">
              <Motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="hero-button hero-button-secondary"
              >
                View Projects
              </Motion.a>

              <Motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="hero-button hero-button-primary"
              >
                Contact Me
              </Motion.a>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
