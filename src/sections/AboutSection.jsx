import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'
import { motion as Motion } from 'framer-motion'

const focusAreas = [
  {
    title: 'Systems-first mindset',
    description:
      'MCA student with a strong full-stack foundation and a steady curiosity for systems thinking.',
  },
  {
    title: 'Built for the real world',
    description:
      'Builds with MERN, Java, and Python to create products that stay practical, scalable, and easy to maintain.',
  },
  {
    title: 'Design meets engineering',
    description:
      'Approaches design and development as one conversation, balancing calm interfaces with clean engineering choices.',
  },
]

const highlights = ['Product Thinking', 'Clean UI', 'Scalable Thinking']

const stats = [
  { value: '3+', label: 'Core stacks used with confidence' },
  { value: 'UI + API', label: 'Balanced product development approach' },
  { value: 'Always', label: 'Focused on clarity over clutter' },
]

function AboutSection() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="about-backdrop" aria-hidden="true">
        <span className="about-orb about-orb-one" />
        <span className="about-orb about-orb-two" />
      </div>

      <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:items-start">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="About"
            title="Thoughtful products begin with clear thinking."
            description="I am a developer who enjoys reducing noise, structuring ideas, and turning complex requirements into dependable experiences."
          />

          <MotionReveal className="about-highlight-row" delay={0.08}>
            {highlights.map((item, index) => (
              <Motion.span
                key={item}
                className="about-highlight-pill"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                {item}
              </Motion.span>
            ))}
          </MotionReveal>

          <MotionReveal className="about-stats-grid about-stats-grid-leading" delay={0.12}>
            {stats.map((item, index) => (
              <Motion.div
                key={item.label}
                className="about-stat-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.18 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <p className="about-stat-value">{item.value}</p>
                <p className="about-stat-label">{item.label}</p>
              </Motion.div>
            ))}
          </MotionReveal>
        </div>

        <MotionReveal className="about-panel glass-card" delay={0.12}>
          <div className="about-panel-header">
            <p className="about-panel-kicker">Profile Snapshot</p>
            <div className="about-signal" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="about-focus-list">
            {focusAreas.map((item, index) => (
              <Motion.article
                key={item.title}
                className="about-focus-item"
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.14 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <span className="about-focus-index">0{index + 1}</span>
                <div>
                  <h3 className="about-focus-title">{item.title}</h3>
                  <p className="section-copy">{item.description}</p>
                </div>
              </Motion.article>
            ))}
          </div>

        </MotionReveal>
      </div>
    </section>
  )
}

export default AboutSection
