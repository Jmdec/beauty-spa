'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const treatments = [
  {
    id: 1,
    duration: '90 MIN',
    name: 'Hot Stone Massage',
    price: '₱2,799',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
  },
  {
    id: 2,
    duration: '60 MIN',
    name: 'Body Oil Massage',
    price: '₱1,499',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
  {
    id: 3,
    duration: '60 MIN',
    name: '7D Anti-aging',
    price: '₱14,000',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  },
  {
    id: 4,
    duration: '100 MIN',
    name: 'Head · Shoulder · Facial',
    price: '₱1,999',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
  },
  {
    id: 5,
    duration: '60 MIN',
    name: 'Meridians Massage',
    price: '₱1,999',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
  },
]

export function PopularTreatments() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 bg-[#F5F0EB]">
      <h2 className="text-4xl md:text-5xl font-serif text-spa-dark mb-8 tracking-tight">
        Popular Spa <em className="italic font-serif">Treatments</em>
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-px bg-spa-dark/10 border border-spa-dark/10">

        {/* Card 1 — large, spans 2 rows */}
        <div className="relative col-span-1 row-span-2 group overflow-hidden min-h-[480px]">
          <Image
            src={treatments[0].image}
            alt={treatments[0].name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
       
          <div className="absolute bottom-6 left-6">
            <p className="text-white/60 text-xs tracking-widest uppercase mb-1">{treatments[0].duration}</p>
            <h3 className="text-white text-2xl font-serif mb-1">{treatments[0].name}</h3>
            <p className="text-white/70 text-sm">{treatments[0].price}</p>
          </div>
        </div>

        {/* Cards 2–5 — small */}
        {treatments.slice(1).map((t) => (
          <div
            key={t.id}
            className="relative group overflow-hidden min-h-[240px]"
          >
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
           
            <div className="absolute bottom-5 left-5">
              <p className="text-white/60 text-xs tracking-widest uppercase mb-1">{t.duration}</p>
              <h3 className="text-white text-lg font-serif mb-1">{t.name}</h3>
              <p className="text-white/70 text-sm">{t.price}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export { PopularTreatments as ServicesSection }