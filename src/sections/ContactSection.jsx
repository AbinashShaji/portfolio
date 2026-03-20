import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1fr)]">
        <SectionTitle
          eyebrow="Contact"
          title="Open to meaningful collaborations and thoughtful conversations."
          description="Whether it is a project idea, an internship opportunity, or a product problem worth solving, Abinash would love to hear about it."
        />

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
          </form>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="project-link project-link-outline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}

export default ContactSection
