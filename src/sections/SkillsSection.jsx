import { motion as Motion } from 'framer-motion'
import MotionReveal from '../components/MotionReveal'
import SectionTitle from '../components/SectionTitle'

const skillGroups = [
  {
    title: 'Frontend',
    level: 'Interface Craft',
    experience: '92%',
    items: [
      ['React', 'react'],
      ['Vite', 'vite'],
      ['Tailwind CSS', 'tailwind'],
      ['JavaScript', 'javascript'],
      ['HTML5', 'html'],
      ['CSS3', 'css'],
    ],
  },
  {
    title: 'Backend',
    level: 'Systems Logic',
    experience: '88%',
    items: [
      ['Node.js', 'node'],
      ['Express', 'express'],
      ['MongoDB', 'mongodb'],
      ['MySQL', 'database'],
      ['Java', 'java'],
      ['Python', 'python'],
    ],
  },
  {
    title: 'Tools',
    level: 'Workflow Stack',
    experience: '85%',
    items: [
      ['Git & GitHub', 'git'],
      ['Postman', 'postman'],
      ['VS Code', 'vscode'],
      ['Figma', 'figma'],
      ['Framer Motion', 'motion'],
      ['Vercel', 'deploy'],
    ],
  },
]

function SkillIcon({ type }) {
  const commonProps = {
    className: 'skill-icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.6',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  switch (type) {
    case 'react':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="1.6" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'vite':
      return (
        <svg {...commonProps}>
          <path d="m12 3 5.5 4.3-2.3 10.7L12 21l-3.2-3 .1-4.6L6.4 7.3 12 3Z" />
          <path d="m12 7.2-1.7 7.1 1.7 1.6 1.7-1.6L12 7.2Z" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...commonProps}>
          <path d="M7 10.5c1.2-1.7 2.5-2.4 4-2 1 .3 1.7 1 2.3 2 .8 1.3 1.7 2 2.7 2 1 0 2-.5 3-1.5" />
          <path d="M4 15.5c1.2-1.7 2.5-2.4 4-2 1 .3 1.7 1 2.3 2 .8 1.3 1.7 2 2.7 2 1 0 2-.5 3-1.5" />
        </svg>
      )
    case 'javascript':
      return (
        <svg {...commonProps}>
          <path d="M8 7v8c0 1.7-.8 2.5-2.2 2.5-.8 0-1.5-.2-2-.6" />
          <path d="M13.5 17.2c.6.4 1.3.6 2.2.6 1.8 0 3-1 3-2.4 0-1.3-.8-2-2.4-2.6l-.8-.3c-.8-.3-1.1-.6-1.1-1.1 0-.5.4-.9 1.1-.9.7 0 1.2.3 1.7.9" />
        </svg>
      )
    case 'html':
      return (
        <svg {...commonProps}>
          <path d="m5 4 1.5 15 5.5 1.7 5.5-1.7L19 4H5Z" />
          <path d="m8.4 8.1.3 3.1h5.2l-.2 2.7-1.7.5-1.6-.5-.1-1.2" />
        </svg>
      )
    case 'css':
      return (
        <svg {...commonProps}>
          <path d="m5 4 1.5 15 5.5 1.7 5.5-1.7L19 4H5Z" />
          <path d="m14.7 8.1H9l.2 2.6h5.3l-.5 5-2.1.7-2.1-.7-.1-1.5" />
        </svg>
      )
    case 'node':
      return (
        <svg {...commonProps}>
          <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="M9.3 9.2v5.6M14.7 9.2v5.6M9.3 12h5.4" />
        </svg>
      )
    case 'express':
      return (
        <svg {...commonProps}>
          <path d="M4 8h8M4 12h12M4 16h8" />
          <path d="m16 8 4 4-4 4" />
        </svg>
      )
    case 'mongodb':
      return (
        <svg {...commonProps}>
          <path d="M12 3c2.7 3 4 5.8 4 8.5 0 3-1.4 5.5-4 8.5-2.6-3-4-5.5-4-8.5C8 8.8 9.3 6 12 3Z" />
          <path d="M12 6v10" />
        </svg>
      )
    case 'database':
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.5" />
          <path d="M5.5 6.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" />
          <path d="M5.5 11.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5" />
        </svg>
      )
    case 'java':
      return (
        <svg {...commonProps}>
          <path d="M9 17h6" />
          <path d="M10 14c0 1.7 4 1.7 4 0" />
          <path d="M12.7 4.5c1.4 1.2-.2 2.1-.2 3.4 0 1 1 1.4 1 2.5" />
          <path d="M10.2 5.4c1 .8-.1 1.5-.1 2.4 0 .8.8 1.2.8 2" />
        </svg>
      )
    case 'python':
      return (
        <svg {...commonProps}>
          <path d="M9 5h4a3 3 0 0 1 3 3v2H9a2 2 0 0 0-2 2v1H5a2 2 0 0 1-2-2V8a3 3 0 0 1 3-3h1" />
          <path d="M15 19h-4a3 3 0 0 1-3-3v-2h7a2 2 0 0 0 2-2v-1h2a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3h-1" />
          <circle cx="9" cy="7.5" r=".8" fill="currentColor" stroke="none" />
          <circle cx="15" cy="16.5" r=".8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'git':
      return (
        <svg {...commonProps}>
          <path d="m12 3 9 9-9 9-9-9 9-9Z" />
          <path d="M9 12h6M9 12V8.5M15 12v3.5" />
          <circle cx="9" cy="8.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="15.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'postman':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="7" />
          <path d="m11 13 5-5" />
          <path d="m14.8 8 1.2 1.2-1.9.6Z" />
        </svg>
      )
    case 'vscode':
      return (
        <svg {...commonProps}>
          <path d="m16 4 4 2v12l-4 2-8-7 8-9Z" />
          <path d="M4 8.5 8 12l-4 3.5" />
        </svg>
      )
    case 'figma':
      return (
        <svg {...commonProps}>
          <path d="M12 4.5a2.5 2.5 0 1 1 0 5h-2.5v-5H12Z" />
          <path d="M9.5 4.5H7a2.5 2.5 0 1 0 0 5h2.5v-5Z" />
          <path d="M9.5 9.5H7a2.5 2.5 0 1 0 2.5 2.5V9.5Z" />
          <path d="M12 9.5a2.5 2.5 0 1 1 0 5H9.5v-5H12Z" />
          <path d="M12 14.5a2.5 2.5 0 1 1-2.5 2.5v-2.5H12Z" />
        </svg>
      )
    case 'motion':
      return (
        <svg {...commonProps}>
          <path d="M4 16 9 8l3 4 4-6 4 10" />
        </svg>
      )
    default:
      return (
        <svg {...commonProps}>
          <path d="M4 12h16M12 4v16" />
        </svg>
      )
  }
}

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
              className="soft-card skill-showcase-card"
            >
              <div className="skill-showcase-head">
                <div>
                  <p className="skill-showcase-kicker">{group.level}</p>
                  <h3 className="skill-group-title text-2xl font-semibold">{group.title}</h3>
                </div>
                <span className="skill-experience">{group.experience}</span>
              </div>

              <div className="skill-meter">
                <Motion.span
                  className="skill-meter-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: group.experience }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <ul className="mt-6 grid gap-3">
                {group.items.map(([label, icon]) => (
                  <Motion.li
                    key={label}
                    className="skill-showcase-pill"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.24 }}
                  >
                    <span className="skill-icon-shell">
                      <SkillIcon type={icon} />
                    </span>
                    <span>{label}</span>
                  </Motion.li>
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
