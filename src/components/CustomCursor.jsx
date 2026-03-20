import { useEffect, useRef, useState } from 'react'

const interactiveSelector = [
  'a',
  'button',
  'input',
  'textarea',
  'label',
  '.skill-pill',
  '.soft-card',
  '.glass-card',
  '.project-card',
  '.timeline-card',
  '.contact-detail',
  '.contact-social',
  '.footer-social',
].join(', ')

function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')

    const updateCapability = () => {
      setIsEnabled(mediaQuery.matches)
    }

    updateCapability()
    mediaQuery.addEventListener('change', updateCapability)

    return () => {
      mediaQuery.removeEventListener('change', updateCapability)
    }
  }, [])

  useEffect(() => {
    if (!isEnabled) {
      setIsVisible(false)
      setIsActive(false)
      document.documentElement.classList.remove('custom-cursor-enabled')
      window.cancelAnimationFrame(frameRef.current)
      return undefined
    }

    document.documentElement.classList.add('custom-cursor-enabled')

    const animate = () => {
      const current = currentRef.current
      const target = targetRef.current
      const nextX = current.x + (target.x - current.x) * 0.18
      const nextY = current.y + (target.y - current.y) * 0.18

      currentRef.current = { x: nextX, y: nextY }
      setPosition({ x: nextX, y: nextY })
      frameRef.current = window.requestAnimationFrame(animate)
    }

    const handleMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY }

      if (!isVisible) {
        currentRef.current = { x: event.clientX, y: event.clientY }
        setPosition({ x: event.clientX, y: event.clientY })
      }

      setIsVisible(true)
      setIsActive(Boolean(event.target.closest(interactiveSelector)))
    }

    const handleLeave = () => {
      setIsVisible(false)
      setIsActive(false)
    }

    const handleDown = () => {
      setIsActive(true)
    }

    const handleUp = (event) => {
      setIsActive(Boolean(event.target.closest(interactiveSelector)))
    }

    frameRef.current = window.requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseout', handleLeave)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled')
      window.cancelAnimationFrame(frameRef.current)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseout', handleLeave)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  const cursorClass = `custom-cursor${isVisible ? ' is-visible' : ''}${isActive ? ' is-active' : ''}`

  return (
    <div
      className={cursorClass}
      aria-hidden="true"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <span className="custom-cursor-aura" />
      <span className="custom-cursor-core" />
    </div>
  )
}

export default CustomCursor
