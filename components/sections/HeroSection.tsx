'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Slide = {
  src: string
  position: string
}

const IMAGE_PLAYLIST: Slide[] = [
  { src: '/images/hero2.jpg', position: 'center center' },
  { src: '/images/hero3.jpg', position: 'center center' },
  { src: '/images/hero4.png', position: 'top bottom' },
  { src: '/images/hero5.jpg', position: 'center center' },
  { src: '/images/hero6.jpg', position: 'center top' },
  
]

const SLIDE_DURATION = 6000

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function goTo(n: number) {
    setCurrentIndex(n)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      goTo((n + 1) % IMAGE_PLAYLIST.length)
    }, SLIDE_DURATION)
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(1), SLIDE_DURATION)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {IMAGE_PLAYLIST.map(({ src, position }, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{
            opacity: i === currentIndex ? 1 : 0,
            zIndex: i === currentIndex ? 10 : 0,
          }}
        >
          <Image
            key={i === currentIndex ? `active-${i}` : `idle-${i}`}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: position,
              animation: i === currentIndex
                ? 'kenburns 8s ease-in-out forwards'
                : 'none',
            }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-spa-dark/55 z-20" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(61,40,23,0.65) 100%)',
        }}
      />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {IMAGE_PLAYLIST.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}