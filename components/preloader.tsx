"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface PreloaderProps {
  onLoadingComplete: () => void
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setLoading(false)
            onLoadingComplete()
          }, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(progressInterval)
  }, [onLoadingComplete])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center section-gradient">
      <div className="text-center">
        {/* Top line */}
        <div className="w-16 h-px bg-white/30 mx-auto mb-8"></div>

        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/logotipo.svg"
            alt="Roberto Munizaga Logo"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto animate-pulse"
          />
        </div>

        {/* Text */}
        <p className="text-gray-300 text-lg font-light mb-8">Diseñador UX/UI | Desarrollador front end</p>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 10px rgba(0, 235, 254, 0.5)",
            }}
          ></div>
        </div>

        {/* Loading percentage */}
        <p className="text-primary text-sm font-medium mt-4">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}
