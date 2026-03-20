import { useEffect, useRef } from 'react'

const CLOUDS = [
  { x: 0.1, y: 0.18, r: 0.22, alpha: 0.13, speed: 0.42 },
  { x: 0.34, y: 0.16, r: 0.28, alpha: 0.11, speed: 0.3 },
  { x: 0.68, y: 0.21, r: 0.25, alpha: 0.1, speed: 0.25 },
  { x: 0.2, y: 0.48, r: 0.33, alpha: 0.11, speed: 0.2 },
  { x: 0.62, y: 0.53, r: 0.3, alpha: 0.09, speed: 0.17 },
]

function MistCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return undefined
    }

    let frameId = 0

    const setSize = () => {
      const { clientWidth, clientHeight } = canvas
      const ratio = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = clientWidth * ratio
      canvas.height = clientHeight * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const drawRange = (points, fill, height) => {
      context.fillStyle = fill
      context.beginPath()
      context.moveTo(points[0][0], points[0][1])
      points.slice(1).forEach(([x, y], index) => {
        const previous = points[index]
        const controlX = (previous[0] + x) / 2
        const controlY = (previous[1] + y) / 2
        context.quadraticCurveTo(previous[0], previous[1], controlX, controlY)
      })
      const last = points[points.length - 1]
      context.lineTo(last[0], last[1])
      context.lineTo(points[points.length - 1][0], height)
      context.lineTo(0, height)
      context.closePath()
      context.fill()
    }

    const drawLandscape = (width, height) => {
      drawRange(
        [
          [0, height * 0.48],
          [width * 0.12, height * 0.36],
          [width * 0.25, height * 0.43],
          [width * 0.4, height * 0.34],
          [width * 0.58, height * 0.44],
          [width * 0.76, height * 0.37],
          [width, height * 0.5],
        ],
        'rgba(129, 140, 144, 0.13)',
        height,
      )

      drawRange(
        [
          [0, height * 0.63],
          [width * 0.14, height * 0.46],
          [width * 0.3, height * 0.57],
          [width * 0.48, height * 0.49],
          [width * 0.68, height * 0.61],
          [width * 0.84, height * 0.51],
          [width, height * 0.67],
        ],
        'rgba(108, 121, 126, 0.17)',
        height,
      )

      const waterGradient = context.createLinearGradient(0, height * 0.67, 0, height)
      waterGradient.addColorStop(0, 'rgba(176, 186, 190, 0.18)')
      waterGradient.addColorStop(1, 'rgba(98, 110, 117, 0.35)')
      context.fillStyle = waterGradient
      context.fillRect(0, height * 0.73, width, height * 0.27)

      context.strokeStyle = 'rgba(255, 249, 241, 0.18)'
      context.lineWidth = 1
      for (let index = 0; index < 10; index += 1) {
        const y = height * (0.74 + index * 0.023)
        context.beginPath()
        context.moveTo(width * 0.08, y)
        context.quadraticCurveTo(width * 0.4, y + 8, width * 0.92, y - 2)
        context.stroke()
      }
    }

    const render = (time) => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight

      context.clearRect(0, 0, width, height)
      drawLandscape(width, height)

      CLOUDS.forEach((cloud, index) => {
        const drift = ((time * 0.00002 * cloud.speed + index * 0.15) % 1.2) - 0.1
        const centerX = (cloud.x + drift) * width
        const centerY = cloud.y * height + Math.sin(time * 0.0003 + index) * 8
        const radius = Math.max(width, height) * cloud.r
        const gradient = context.createRadialGradient(
          centerX,
          centerY,
          radius * 0.1,
          centerX,
          centerY,
          radius,
        )

        gradient.addColorStop(0, `rgba(255, 249, 240, ${cloud.alpha})`)
        gradient.addColorStop(0.55, `rgba(240, 234, 226, ${cloud.alpha * 0.65})`)
        gradient.addColorStop(1, 'rgba(240, 234, 226, 0)')

        context.fillStyle = gradient
        context.beginPath()
        context.arc(centerX, centerY, radius, 0, Math.PI * 2)
        context.fill()
      })

      frameId = window.requestAnimationFrame(render)
    }

    setSize()
    frameId = window.requestAnimationFrame(render)
    window.addEventListener('resize', setSize)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="mist-canvas" aria-hidden="true" />
}

export default MistCanvas
