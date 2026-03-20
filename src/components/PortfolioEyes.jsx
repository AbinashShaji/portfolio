import { useEffect, useRef, useState } from 'react'

const EYE_COUNT = 2
const PUPIL_LIMIT = 9
const EASING = 0.14

function clampVector(dx, dy, limit) {
  const distance = Math.hypot(dx, dy)

  if (!distance || distance <= limit) {
    return { x: dx, y: dy }
  }

  const scale = limit / distance
  return { x: dx * scale, y: dy * scale }
}

function createIdleTarget(index) {
  const time = Date.now()
  return {
    x: Math.sin(time * 0.0014 + index * 1.25) * 2.8,
    y: Math.cos(time * 0.001 + index * 0.8) * 1.8,
  }
}

function PortfolioEyes() {
  const containerRef = useRef(null)
  const eyeRefs = useRef([])
  const frameRef = useRef(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const targetRef = useRef(
    Array.from({ length: EYE_COUNT }, (_, index) => createIdleTarget(index)),
  )
  const currentRef = useRef(
    Array.from({ length: EYE_COUNT }, () => ({ x: 0, y: 0 })),
  )
  const [hovered, setHovered] = useState(false)
  const [blink, setBlink] = useState(false)
  const [offsets, setOffsets] = useState(
    Array.from({ length: EYE_COUNT }, () => ({ x: 0, y: 0 })),
  )
  const [headOffset, setHeadOffset] = useState({ x: 0, y: 0, rotate: 0 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1025px) and (pointer: fine)')

    const updateLayout = () => {
      setIsDesktop(mediaQuery.matches)
    }

    updateLayout()
    mediaQuery.addEventListener('change', updateLayout)

    return () => {
      mediaQuery.removeEventListener('change', updateLayout)
    }
  }, [])

  useEffect(() => {
    if (!isDesktop) {
      window.cancelAnimationFrame(frameRef.current)
      return undefined
    }

    const animate = () => {
      const nextOffsets = currentRef.current.map((position, index) => {
        const target = targetRef.current[index]
        const x = position.x + (target.x - position.x) * EASING
        const y = position.y + (target.y - position.y) * EASING
        currentRef.current[index] = { x, y }
        return { x, y }
      })

      setOffsets(nextOffsets)
      frameRef.current = window.requestAnimationFrame(animate)
    }

    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [isDesktop])

  useEffect(() => {
    if (!isDesktop) {
      return undefined
    }

    let timeoutId = 0

    const scheduleBlink = () => {
      const nextDelay = 2800 + Math.random() * 2800
      timeoutId = window.setTimeout(() => {
        setBlink(true)
        window.setTimeout(() => setBlink(false), 180)
        scheduleBlink()
      }, nextDelay)
    }

    scheduleBlink()

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isDesktop])

  useEffect(() => {
    if (!isDesktop) {
      return undefined
    }

    const updateTargets = (clientX, clientY) => {
      eyeRefs.current.forEach((eye, index) => {
        if (!eye) {
          return
        }

        const rect = eye.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const dx = clientX - centerX
        const dy = clientY - centerY
        targetRef.current[index] = clampVector(dx, dy, PUPIL_LIMIT)
      })

      const containerRect = containerRef.current?.getBoundingClientRect()
      if (!containerRect) {
        return
      }

      const relativeX = (clientX - (containerRect.left + containerRect.width / 2)) / containerRect.width
      const relativeY = (clientY - (containerRect.top + containerRect.height / 2)) / containerRect.height

      setHeadOffset({
        x: relativeX * 10,
        y: relativeY * 6,
        rotate: relativeX * 4,
      })
    }

    const resetToIdle = () => {
      targetRef.current = targetRef.current.map((_, index) => createIdleTarget(index))
      setHeadOffset({
        x: Math.sin(Date.now() * 0.0012) * 2,
        y: Math.cos(Date.now() * 0.0009) * 2,
        rotate: Math.sin(Date.now() * 0.001) * 1.5,
      })
    }

    const handleMove = (event) => {
      if (!containerRef.current?.matches(':hover')) {
        return
      }

      updateTargets(event.clientX, event.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('resize', resetToIdle)

    const idleInterval = window.setInterval(() => {
      if (!containerRef.current?.matches(':hover')) {
        resetToIdle()
      }
    }, 1400)

    resetToIdle()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', resetToIdle)
      window.clearInterval(idleInterval)
    }
  }, [isDesktop])

  if (!isDesktop) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`eyes-card deer-card${hovered ? ' is-hovered' : ''}${blink ? ' is-blinking' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        targetRef.current = targetRef.current.map((_, index) => createIdleTarget(index))
      }}
    >
      <div className="eyes-card-copy">
        <p className="eyes-kicker">Interactive detail</p>
        <p className="eyes-caption">
          A cute little deer hangs out here and follows your cursor with a calm, curious gaze.
        </p>
      </div>

      <div className="cat-stage" aria-hidden="true">
        <div
          className="cat-figure"
          style={{
            transform: `translate(${headOffset.x}px, ${headOffset.y}px) rotate(${headOffset.rotate}deg)`,
          }}
        >
          <span className="cat-aura" />
          <span className="deer-antler antler-left" />
          <span className="deer-antler antler-right" />
          <span className="cat-ear ear-left"><span className="cat-ear-inner" /></span>
          <span className="cat-ear ear-right"><span className="cat-ear-inner" /></span>
          <span className="deer-tail" />
          <span className="cat-paw paw-left" />
          <span className="cat-paw paw-right" />

          <div className="cat-body">
            <div className="cat-face">
              <span className="deer-spot spot-one" />
              <span className="deer-spot spot-two" />
              <span className="deer-spot spot-three" />
              <span className="cat-blush blush-left" />
              <span className="cat-blush blush-right" />

              <div className="cat-eye-row">
                {Array.from({ length: EYE_COUNT }).map((_, index) => (
                  <div
                    key={index}
                    ref={(node) => {
                      eyeRefs.current[index] = node
                    }}
                    className="cat-eye"
                  >
                    <span className="cat-lid cat-lid-top" />
                    <span className="cat-lid cat-lid-bottom" />
                    <span
                      className="cat-pupil"
                      style={{
                        transform: `translate(${offsets[index].x}px, ${offsets[index].y}px)`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <span className="cat-nose" />
              <span className="cat-mouth mouth-left" />
              <span className="cat-mouth mouth-right" />
            </div>
          </div>

          <div className="cat-shadow" />
        </div>
      </div>
    </div>
  )
}

export default PortfolioEyes
