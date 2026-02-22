'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Users, Zap } from 'lucide-react'
import Image from 'next/image'

const avatars = [
  'https://picsum.photos/seed/avatar1/80/80',
  'https://picsum.photos/seed/avatar2/80/80',
  'https://picsum.photos/seed/avatar3/80/80',
  'https://picsum.photos/seed/avatar4/80/80',
  'https://picsum.photos/seed/avatar5/80/80',
]

export default function WaitlistCounter() {
  const [count, setCount] = useState(10247)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setCount(prev => prev + 1)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }} />
          </div>
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left - Counter */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-3">
                <div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-dark-900" />
                </div>
                <span className="text-secondary-400 font-medium text-sm">Live Counter</span>
              </div>
              <div className="flex items-baseline gap-3 justify-center lg:justify-start">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tabular-nums">
                  {count.toLocaleString()}
                </span>
                <span className="text-dark-400 text-lg">students</span>
              </div>
              <p className="text-dark-400 mt-2">have joined the waitlist</p>
            </div>

            {/* Right - Avatars & Progress */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              {/* Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <div key={i} className="relative">
                      <Image
                        src={src}
                        alt=""
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full border-3 border-dark-800 object-cover"
                      />
                      {i === avatars.length - 1 && (
                        <div className="absolute inset-0 bg-primary-600/80 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">+9k</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="w-full max-w-xs">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-dark-400">Launch progress</span>
                  <span className="font-semibold text-secondary-400">68%</span>
                </div>
                <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-secondary-500 to-secondary-400 rounded-full transition-all duration-1000 relative"
                    style={{ width: '68%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
                <p className="text-dark-500 text-xs mt-2 text-right">15,000 goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
