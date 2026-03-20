import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Vite',
      'Tailwind CSS',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive UI',
      'Framer Motion',
      'Accessibility',
      'Component Design',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'MongoDB',
      'MySQL',
      'REST APIs',
      'Authentication',
      'Java',
      'Python',
      'Database Design',
      'MVC Architecture',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Git & GitHub',
      'Postman',
      'VS Code',
      'Figma',
      'Vercel',
      'Netlify',
      'System Design',
      'Problem Solving',
      'Debugging',
      'API Testing',
    ],
  },
]

function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-soft">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Skills"
          title="A balanced toolkit for product-minded development."
          description="Each tool supports the same goal: build calm, reliable interfaces backed by efficient systems."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionReveal
              key={group.title}
              delay={index * 0.08}
              className="soft-card skill-group-card"
            >
              <h3 className="skill-group-title text-2xl font-semibold">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li key={item} className="skill-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
