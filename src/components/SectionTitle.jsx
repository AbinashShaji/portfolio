import MotionReveal from './MotionReveal'

function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'

  return (
    <MotionReveal className={alignment}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy mt-4">{description}</p> : null}
    </MotionReveal>
  )
}

export default SectionTitle
