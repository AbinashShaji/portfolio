import { useEffect } from 'react'

function easeOutCubic(value) {
  return 1 - (1 - value) ** 3
}

function SmoothScrollController() {
  useEffect(() => {
    let frameId = 0
    let scrollFrame = 0

    const updateScrollVar = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`)
      frameId = window.requestAnimationFrame(updateScrollVar)
    }

    const scrollToTarget = (targetTop) => {
      const startTop = window.scrollY
      const distance = targetTop - startTop
      const duration = 900
      const startTime = performance.now()

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = easeOutCubic(progress)
        window.scrollTo(0, startTop + distance * eased)

        if (progress < 1) {
          scrollFrame = window.requestAnimationFrame(animate)
        }
      }

      window.cancelAnimationFrame(scrollFrame)
      scrollFrame = window.requestAnimationFrame(animate)
    }

    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) {
        return
      }

      const href = link.getAttribute('href')
      if (!href || href === '#') {
        return
      }

      const target = document.querySelector(href)
      if (!target) {
        return
      }

      event.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - 24
      scrollToTarget(top)
    }

    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`)
    document.addEventListener('click', handleClick)
    frameId = window.requestAnimationFrame(updateScrollVar)

    return () => {
      document.removeEventListener('click', handleClick)
      window.cancelAnimationFrame(frameId)
      window.cancelAnimationFrame(scrollFrame)
    }
  }, [])

  return null
}

export default SmoothScrollController
