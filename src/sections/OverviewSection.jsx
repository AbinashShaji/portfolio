import { motion as Motion } from 'framer-motion'
import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const pageSummaries = [
  {
    title: 'Home',
    href: '#home',
    description:
      'A landing page that introduces the portfolio with a strong visual identity, key actions, and the overall tone of the site.',
  },
  {
    title: 'About',
    href: '#about',
    description:
      'A concise snapshot of mindset, strengths, and the way design, engineering, and problem solving come together.',
  },
  {
    title: 'Skills',
    href: '#skills',
    description:
      'An organized view of frontend, backend, and tool expertise, showing the stack used to build practical products.',
  },
  {
    title: 'Projects',
    href: '#projects',
    description:
      'A curated showcase of real work with the problem, solution, approach, and impact for each featured project.',
  },
  {
    title: 'Journey',
    href: '#journey',
    description:
      'A timeline-style look at growth, learning, and the path that shaped the current development approach.',
  },
  {
    title: 'Contact',
    href: '#contact',
    description:
      'A direct place to connect, reach out for collaboration, and continue the conversation around new opportunities.',
  },
]

function OverviewSection() {
  return (
    <section id="overview" className="section-shell section-soft">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Overview"
          title="A quick guide to every page in the portfolio."
          description="This page gives a short description of each section so visitors can move through the site with context."
        />

        <div className="overview-grid mt-10">
          {pageSummaries.map((item, index) => (
            <MotionReveal key={item.title} delay={0.06 + index * 0.04}>
              <Motion.article
                className="overview-card soft-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <p className="overview-card-kicker">Page {String(index + 1).padStart(2, '0')}</p>
                <h3 className="overview-card-title">{item.title}</h3>
                <p className="overview-card-copy">{item.description}</p>
                <a href={item.href} className="overview-card-link">
                  Open page
                </a>
              </Motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
