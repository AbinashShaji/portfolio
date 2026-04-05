import { useRef } from 'react'
import {
  motion as Motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import heroImage from '../assets/.hero-reference.jpg'
import OverviewSection from './OverviewSection'

const heroWords = ['I', 'build', 'systems', 'with', 'clarity,', 'not', 'complexity.']
const heroHighlights = [
  { label: 'Focus', value: 'Minimal interfaces with strong UX clarity' },
  { label: 'Build', value: 'Full-stack products with thoughtful motion' },
  { label: 'Style', value: 'Calm visuals with a memorable premium feel' },
]

function HeroSection({ theme }) {
  const sectionRef = useRef(null)
  const glowX = useMotionValue(28)
  const glowY = useMotionValue(34)
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 248, 239, 0.28), transparent 26%)`

  return (
    <>
      <section
        ref={sectionRef}
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#f4ede3]"
        aria-label="Hero section"
        onPointerMove={(event) => {
          const rect = sectionRef.current?.getBoundingClientRect()
          if (!rect) {
            return
          }

          const x = ((event.clientX - rect.left) / rect.width) * 100
          const y = ((event.clientY - rect.top) / rect.height) * 100
          glowX.set(x)
          glowY.set(y)
        }}
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
          <div className="hero-grain" />
          <div className="hero-grid" />
          <Motion.div className="hero-light" style={{ backgroundImage: glow }} />
          {theme === 'dark' ? (
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,16,22,0.38),rgba(12,16,22,0.58))]" />
          ) : null}
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 pt-32 sm:px-10 lg:px-16">
          <div className="grid w-full grid-cols-1 items-center justify-items-start">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-3xl text-left"
            >
              <Motion.p
                className="hero-kicker"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
              >
                Calm systems. Thoughtful motion. Distinct craft.
              </Motion.p>

              <h1 className="hero-title-display max-w-[11ch] text-[2.9rem] text-[#2c2c2c] dark:text-white sm:text-[3.8rem] lg:text-[4.5rem]">
                {heroWords.map((word, index) => (
                  <Motion.span
                    key={`${word}-${index}`}
                    className="hero-word"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.14 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}{' '}
                  </Motion.span>
                ))}
              </h1>

              <Motion.p
                className="mt-6 max-w-2xl font-['Inter'] text-base leading-8 text-[#4f4f4f] dark:text-white sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                Full-stack and UI/UX developer focused on solving real-world
                problems through thoughtful design and efficient code.
              </Motion.p>

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

              <div className="hero-highlight-grid mt-10">
                {heroHighlights.map((item, index) => (
                  <Motion.div
                    key={item.label}
                    className="hero-highlight-card"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.64 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="hero-highlight-label">{item.label}</span>
                    <p className="hero-highlight-value">{item.value}</p>
                  </Motion.div>
                ))}
              </div>

              <Motion.a
                href="#about"
                className="hero-scroll-indicator"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Open next page
              </Motion.a>
            </Motion.div>
          </div>
        </div>
      </section>
      <OverviewSection />
    </>
  )
}

export default HeroSection
