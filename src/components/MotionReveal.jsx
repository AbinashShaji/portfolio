import { motion as Motion } from 'framer-motion'

const baseTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
}

function MotionReveal({
  children,
  className = '',
  delay = 0,
  amount = 0.25,
  y = 36,
}) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </Motion.div>
  )
}

export default MotionReveal
