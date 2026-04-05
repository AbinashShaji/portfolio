import { motion as Motion } from 'framer-motion'
import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const projects = [
  {
    title: 'Visit Kerala',
    subtitle: 'Tourism Web Platform',
    description:
      'A modern tourism website designed to help users explore destinations in Kerala, plan trips, and discover local experiences.',
    problem:
      'Users often struggle to find well-organized and visually engaging platforms to explore travel destinations and plan trips efficiently.',
    solution:
      'Developed a responsive and interactive web platform that showcases Kerala tourism with rich visuals and structured navigation.',
    approach:
      'Focused on storytelling-first layout design, destination-based information architecture, and motion that feels calm and inviting.',
    challenges:
      'Balancing visual richness with usability while keeping the booking and exploration flow clear on smaller screens.',
    features: [
      'Explore destinations like Munnar, Alleppey, and Wayanad',
      'Search and filter functionality for quick discovery',
      'Image-rich UI with smooth animations',
      'Trip planning interface for better travel flow',
      'Fully responsive design across devices',
    ],
    stack: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    impact:
      'Improved user experience for travel exploration through an intuitive and visually engaging interface.',
    demoHref: '#contact',
    repoHref: 'https://github.com/AbinashShaji',
  },
  {
    title: 'Judysis',
    subtitle: 'Judicial Management System',
    description:
      'A full-stack MERN application designed to streamline court case management, user roles, and document handling.',
    problem:
      'Manual case management systems are inefficient, time-consuming, and lack proper organization and accessibility.',
    solution:
      'Built a centralized digital platform to manage cases, users, and documents efficiently with role-based access control.',
    approach:
      'Structured the platform around role clarity, dashboard visibility, and secure document workflows for daily judicial operations.',
    challenges:
      'Designing a clean role-based flow that supports multiple user types without making case handling feel overwhelming.',
    features: [
      'Case registration and tracking',
      'Role-based authentication for Admin, Lawyer, and Client',
      'Document upload and management',
      'Dashboard with case insights',
      'Secure data handling',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    impact:
      'Simplified judicial workflows by digitizing case management and improving accessibility and organization.',
    demoHref: '#contact',
    repoHref: 'https://github.com/AbinashShaji',
  },
  {
    title: 'SmartVest',
    subtitle: 'Intelligent Investment Platform',
    description:
      'A Python-based financial analytics system that helps users track expenses, analyze financial data, and generate investment insights.',
    problem:
      'Many users lack tools to effectively manage finances and make informed investment decisions.',
    solution:
      'Developed a data-driven platform that converts financial data into actionable insights through analytics and visualization.',
    approach:
      'Combined finance tracking with lightweight analytics, using clear dashboards to turn raw numbers into practical decisions.',
    challenges:
      'Keeping the interface simple while presenting financial charts, recommendations, and planning tools in one coherent flow.',
    features: [
      'Expense and income tracking',
      'Financial analytics dashboard with charts',
      'Investment recommendation system using rules',
      'Budget planning and goal tracking',
      'Clean and user-friendly interface',
    ],
    stack: ['Python', 'Pandas', 'Matplotlib', 'Flask', 'SQLite'],
    impact:
      'Enabled smarter financial decision-making by providing data-driven insights and financial awareness.',
    demoHref: '#contact',
    repoHref: 'https://github.com/AbinashShaji',
  },
]

function FeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="project-feature-icon" fill="none" aria-hidden="true">
      <path
        d="M5.5 12.5 9.3 16l9.2-9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-soft">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Featured Work"
          title="Projects"
          description="Some of my featured work"
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <MotionReveal
              key={project.title}
              delay={index * 0.1}
              className="project-card project-compact-card"
              y={48}
            >
              <Motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="project-compact-inner"
              >
                <div className="project-compact-main">
                  <div className="project-compact-lead">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="project-compact-subtitle">{project.subtitle}</p>
                        <h3 className="project-compact-title">{project.title}</h3>
                      </div>
                      <span className="project-index">0{index + 1}</span>
                    </div>

                    <p className="section-copy mt-5">{project.description}</p>

                    <div className="project-compact-block">
                      <p className="project-compact-label">Problem</p>
                      <p className="project-compact-copy">{project.problem}</p>
                    </div>

                    <div className="project-compact-block">
                      <p className="project-compact-label">Solution</p>
                      <p className="project-compact-copy">{project.solution}</p>
                    </div>

                    <div className="project-compact-block">
                      <p className="project-compact-label">My Approach</p>
                      <p className="project-compact-copy">{project.approach}</p>
                    </div>

                    <div className="project-compact-block">
                      <p className="project-compact-label">Challenges</p>
                      <p className="project-compact-copy">{project.challenges}</p>
                    </div>
                  </div>

                  <div className="project-compact-side">
                    <div className="project-compact-block">
                      <p className="project-compact-label">Key Features</p>
                      <ul className="project-compact-feature-list">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="project-compact-feature-item">
                            <FeatureIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-compact-block">
                      <p className="project-compact-label">Tech Stack</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.stack.map((item) => (
                          <span key={item} className="skill-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-compact-impact">
                      <p className="project-compact-label">Impact</p>
                      <p className="project-compact-copy">{project.impact}</p>
                    </div>

                    <div className="project-compact-actions">
                      <a
                        href={project.demoHref}
                        className="project-link project-link-solid"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.repoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-link-outline"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              </Motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
