'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Executive',
    content:
      'Hi Beauty SPA has become my sanctuary. The therapists are incredibly skilled and the atmosphere is pure bliss.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Entrepreneur',
    content:
      "Best spa experience I've had in years. The hot stone therapy completely relieved my back tension.",
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Designer',
    content:
      "The attention to detail and personalized service is outstanding. I've recommended Hi Beauty to all my friends.",
    rating: 5,
  },
  {
    name: 'Olivia Brown',
    role: 'Manager',
    content:
      'A hidden gem! The ambiance, treatments, and staff make every visit unforgettable.',
    rating: 5,
  },
  {
    name: 'Daniel Lee',
    role: 'Entrepreneur',
    content:
      'Professional and relaxing. The massage techniques are unmatched, highly recommended!',
    rating: 5,
  },
  {
    name: 'Sophia Martinez',
    role: 'Consultant',
    content:
      'Every detail is thoughtfully crafted. I leave feeling rejuvenated every time.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = testimonials.length

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 5000)
    return () => clearInterval(timer)
  }, [total])

  // Get slides to show based on screen width
  const slidesToShow = () => {
    if (typeof window === 'undefined') return 1
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }

  const [visibleSlides, setVisibleSlides] = useState(slidesToShow())

  useEffect(() => {
    const handleResize = () => setVisibleSlides(slidesToShow())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Get the current visible testimonials
  const currentSlides = Array.from({ length: visibleSlides }).map((_, i) => {
    return testimonials[(currentIndex + i) % total]
  })

  return (
    <section
      className="relative px-8 md:px-16 py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #FAF6F1 0%, #F2E8DC 40%, #EDE0D0 70%, #F7F0E8 100%)',
      }}
    >
      {/* Heading */}
      <div className="mb-16 text-center md:text-left">
        <p className="flex items-center justify-center md:justify-start gap-3 text-[11px] font-medium tracking-[3px] uppercase text-[#A0714F] mb-4">
          <span className="block w-10 h-px bg-[#A0714F]" />
          Client Reviews
        </p>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-[#3D2817] leading-[1.1]">
          What Our <em className="italic text-[#C9975A]">Guests Say</em>
        </h2>
      </div>

      {/* Slider */}
      <div className="flex gap-6 relative">
        <AnimatePresence initial={false}>
          {currentSlides.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col p-8 rounded-sm"
              style={{
                background:
                  i === 0
                    ? 'linear-gradient(145deg, #C9975A, #A0714F)'
                    : 'rgba(255,255,255,0.55)',
                border: i === 0 ? 'none' : '1px solid rgba(201,151,90,0.25)',
                backdropFilter: i !== 0 ? 'blur(8px)' : undefined,
                boxShadow:
                  i === 0
                    ? '0 8px 32px rgba(160,113,79,0.25)'
                    : '0 4px 20px rgba(61,40,23,0.06)',
              }}
            >
              {/* Quote */}
              <span
                className="font-serif text-5xl leading-none mb-6 select-none"
                style={{ color: i === 0 ? 'rgba(255,255,255,0.4)' : '#C9975A' }}
              >
                "
              </span>
              <p
                className="text-[15px] font-light leading-relaxed italic flex-1 mb-6"
                style={{ color: i === 0 ? 'rgba(255,255,255,0.95)' : '#5C3D22' }}
              >
                {t.content}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span
                    key={s}
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.9)' : '#C9975A' }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
                  style={{
                    background: i === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(201,151,90,0.15)',
                    color: i === 0 ? '#fff' : '#A0714F',
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-[13px] font-medium"
                    style={{ color: i === 0 ? '#fff' : '#3D2817' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[10px] tracking-[2px] uppercase"
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.65)' : '#A0714F' }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
          className="px-4 py-2 bg-[#C9975A] text-white rounded shadow hover:shadow-lg transition"
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
          className="px-4 py-2 bg-[#C9975A] text-white rounded shadow hover:shadow-lg transition"
        >
          Next
        </button>
      </div>
    </section>
  )
}