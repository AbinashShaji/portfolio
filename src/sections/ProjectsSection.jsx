import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const projects = [
  {
    title: 'Judicial Management System',
    description:
      'A MERN platform for streamlining case records, hearing schedules, and role-based court workflows with an emphasis on clarity and accountability.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'Task Manager App',
    description:
      'A focused productivity app with custom task states, deadline tracking, and a clean dashboard designed to reduce friction in daily planning.',
    stack: ['React', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
  },
  {
    title: 'Portfolio Website',
    description:
      'A handcrafted developer portfolio exploring motion, typography, and premium minimal design while keeping performance and readability high.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Canvas'],
  },
  {
    title: 'Insight API Dashboard',
    description:
      'An API-driven analytics interface that collects live data, presents lightweight charts, and translates raw endpoints into useful decisions.',
    stack: ['React', 'REST API', 'Node.js', 'Charting'],
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work shaped by utility, structure, and restraint."
          description="A few recent builds that reflect Abinash's preference for practical systems and quiet polish."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <MotionReveal
              key={project.title}
              delay={index * 0.08}
              className="project-card"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-semibold text-stone-900">{project.title}</h3>
                <span className="project-index">0{index + 1}</span>
              </div>

              <p className="section-copy mt-5">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="project-link project-link-solid">
                  Live Preview
                </a>
                <a href="#contact" className="project-link project-link-outline">
                  GitHub
                </a>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
