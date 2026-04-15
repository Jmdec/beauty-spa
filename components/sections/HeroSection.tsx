'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Slide = {
  src: string
}

const IMAGE_PLAYLIST: Slide[] = [
  { src: '/images/hero2.jpg' },
  { src: '/images/hero3.jpg' },
  { src: '/images/hero4.png' },
  { src: '/images/hero5.jpg' },
  { src: '/images/hero6.jpg' },
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
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <section className="w-full min-h-[85vh] grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-[#f9f6f2] text-[#2d2d2d]">
        
        <div className="max-w-lg space-y-6">

          {/* Eyebrow */}
          <p className="text-sm tracking-widest uppercase text-[#8b6b4a]">
            Premium Spa Experience
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Relax. Refresh. <br /> Rejuvenate.
          </h1>

          {/* Description */}
          <p className="text-lg text-[#555] leading-relaxed">
            Step into a sanctuary of calm where every treatment is designed
            to melt away stress, restore balance, and elevate your well-being.
            Our expert therapists combine traditional techniques with modern care
            to give you a truly rejuvenating experience.
          </p>

          {/* Divider */}
          <div className="w-12 h-[2px] bg-[#3d2817]/30" />

          {/* Feature list */}
          <div className="grid grid-cols-2 gap-4 text-sm text-[#444]">
            <div>🌿 Natural Treatments</div>
            <div>💆 Expert Therapists</div>
            <div>🕯️ Calm Atmosphere</div>
            <div>✨ Holistic Care</div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="relative overflow-hidden bg-[#f3efe9]">
        {IMAGE_PLAYLIST.map(({ src }, i) => (
          <div
            key={src}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-[1200ms] ease-in-out"
            style={{
              opacity: i === currentIndex ? 1 : 0,
              zIndex: i === currentIndex ? 10 : 0,
            }}
          >
            <Image
              src={src}
              alt=""
              width={1200}
              height={800}
              className={`object-contain max-w-[90%] max-h-[90%] transition-transform duration-[8000ms] ease-in-out ${
                i === currentIndex ? 'scale-105' : 'scale-100'
              }`}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-2">
        {IMAGE_PLAYLIST.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-5 bg-[#3d2817]' : 'w-1.5 bg-[#3d2817]/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
