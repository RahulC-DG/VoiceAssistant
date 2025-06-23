"use client"

import { useEffect, useState } from "react"

export function VoiceWave() {
  const [bars, setBars] = useState<number[]>([])

  useEffect(() => {
    // Initialize bars with random heights
    setBars(Array.from({ length: 20 }, () => Math.random() * 100 + 20))

    // Animate bars
    const interval = setInterval(() => {
      setBars((prev) => prev.map(() => Math.random() * 100 + 20))
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {bars.map((height, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-[#1f6feb] to-[#ff6b35] rounded-full transition-all duration-150 ease-out"
          style={{
            width: "4px",
            height: `${height}%`,
            opacity: 0.7 + height / 200,
          }}
        />
      ))}
    </div>
  )
}
