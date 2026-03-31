import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const focusAreas = [
  'MCA student with a strong full-stack foundation and a steady curiosity for systems thinking.',
  'Builds with MERN, Java, and Python to create products that stay practical, scalable, and easy to maintain.',
  'Approaches design and development as one conversation, balancing calm interfaces with clean engineering choices.',
]

function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-start">
        <SectionTitle
          eyebrow="About"
          title="Thoughtful products begin with clear thinking."
          description="I am a developer who enjoys reducing noise, structuring ideas, and turning complex requirements into dependable experiences."
        />

        <MotionReveal className="glass-card space-y-5" delay={0.1}>
          {focusAreas.map((item) => (
            <p key={item} className="section-copy">
              {item}
            </p>
          ))}
        </MotionReveal>
      </div>
    </section>
  )
}

export default AboutSection
