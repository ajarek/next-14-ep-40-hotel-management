'use client'

import { useEffect, useState } from 'react'

const Progress = ({
  endValue,
  duration,
}: {
  endValue: number
  duration: number
}) => {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        setProgress(Math.min(endValue, (progress / duration) * endValue))
        animationFrameId = requestAnimationFrame(updateCount)
      } else {
        setProgress(endValue)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrameId)
  }, [endValue, duration])

  return (
    <p className='text-3xl font-semibold transition duration-1500'>
      {Math.round(progress)}
    </p>
  )
}
export default Progress
