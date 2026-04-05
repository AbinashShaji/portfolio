import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const milestones = [
  {
    title: 'MCA, Ongoing',
    subtitle: 'Academic Journey',
    description:
      'Currently strengthening software fundamentals, architecture thinking, and delivery discipline through academic study and hands-on projects.',
  },
  {
    title: 'Full-Stack Practice',
    subtitle: 'Development Focus',
    description:
      'Building MERN projects, refining Java and Python fluency, and learning how thoughtful interfaces connect with dependable backend systems.',
  },
  {
    title: 'Portfolio of Work',
    subtitle: 'Growth Mindset',
    description:
      'Treating every project as a chance to improve communication, usability, and the long-term maintainability of the code behind it.',
  },
]

function JourneySection() {
  return (
    <section id="journey" className="section-shell section-soft">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Experience / Education"
          title="A development journey grounded in learning by building."
          description="The path so far is defined by steady practice, strong fundamentals, and a growing systems design mindset."
        />

        <div className="journey-timeline mt-12">
          {milestones.map((item, index) => (
            <MotionReveal
              key={item.title}
              delay={index * 0.1}
              className="journey-timeline-item"
            >
              <div className="journey-marker" aria-hidden="true">
                <span className="journey-marker-core" />
              </div>
              <div className="timeline-card journey-card">
                <p className="journey-card-kicker">{item.subtitle}</p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-900">{item.title}</h3>
                <p className="section-copy mt-4">{item.description}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
