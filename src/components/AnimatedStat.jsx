import { useEffect, useRef, useState } from 'react'

// Counts a number up once when the stat enters the viewport.
// This keeps the About section lively without adding an animation library.
function AnimatedStat({ value, suffix, label }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const statRef = useRef(null)

  useEffect(() => {
    const node = statRef.current

    if (!node || hasAnimated) return undefined

    // IntersectionObserver waits until the stat is visible before starting the count-up.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setHasAnimated(true)

        const target = Number(value)
        // Large numbers need a little more time so the animation does not feel abrupt.
        const duration = target > 800 ? 800 : 800
        const startTime = performance.now()

        const animate = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 2)
          // Ease-out curve: fast at the start, slower near the final number.
          const easedProgress = 1 - Math.pow(1 - progress, 3)

          setDisplayValue(Math.round(target * easedProgress))

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.45 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [hasAnimated, value])

  return (
    <div ref={statRef} className="transition duration-500 hover:-translate-y-1">
      <p className="text-3xl font-black tabular-nums">
        {displayValue}
        <span className="text-[#ff745f]">{suffix}</span>
      </p>
      <p className="mt-2 text-xs leading-5 text-slate-400">{label}</p>
    </div>
  )
}

export default AnimatedStat
