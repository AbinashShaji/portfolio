import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const contactDetails = [
  { label: 'Email', value: 'iam.abinashshaji@gmail.com', href: 'mailto:iam.abinashshaji@gmail.com' },
  { label: 'Phone', value: '7034012692', href: 'tel:7034012692' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/AbinashShaji',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.83-4.59 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abinashshaji',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.2a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 12.68c0-3.37-1.8-4.94-4.2-4.94-1.94 0-2.8 1.08-3.28 1.83V8.5H9.58c.04.7 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92.27-.68.9-1.38 1.95-1.38 1.38 0 1.93 1.06 1.93 2.6V20H20.44v-7.32Z" />
      </svg>
    ),
  },
]

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 2600)
  }

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1fr)]">
        <div className="max-w-2xl">
          <SectionTitle
            eyebrow="Contact"
            title="Let&apos;s build something impactful together."
            description="Whether it is a project idea, an internship opportunity, or a product problem worth solving, Abinash would love to hear about it."
          />

          <MotionReveal delay={0.08} className="mt-8">
            <div className="contact-status">
              <span className="contact-status-dot" />
              <span>Open to internships and meaningful collaborations</span>
            </div>

            <div className="contact-meta">
              {contactDetails.map((detail) => (
                <a key={detail.label} href={detail.href} className="contact-detail">
                  <span className="contact-detail-label">{detail.label}</span>
                  <span className="contact-detail-value">{detail.value}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="contact-social"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </MotionReveal>
        </div>

        <MotionReveal className="glass-card" delay={0.1}>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="form-label">Name</span>
              <input className="form-input" type="text" name="name" placeholder="Your name" />
            </label>

            <label className="block">
              <span className="form-label">Email</span>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="form-label">Message</span>
              <textarea
                className="form-input min-h-32 resize-none"
                name="message"
                placeholder="Tell me a little about your idea."
              />
            </label>

            <button type="submit" className="cta-solid w-full justify-center">
              Send Message
            </button>

            <AnimatePresence>
              {submitted ? (
                <Motion.p
                  className="contact-success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  Message captured. Thanks for reaching out.
                </Motion.p>
              ) : null}
            </AnimatePresence>
          </form>
        </MotionReveal>
      </div>
    </section>
  )
}

export default ContactSection
