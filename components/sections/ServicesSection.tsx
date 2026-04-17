'use client'

import Image from 'next/image'

const treatments = [
  { id: 1, duration: '60 MIN', name: 'Facial Cleansing + UV Light', price: '₱1,699', image: '/images/package6.jpg' },
  { id: 2, duration: '90 MIN', name: 'Hot Stone Massage + Aiju', price: '₱1,799', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80' },
  { id: 3, duration: '', name: 'Foot Spa + Foot Nail Color', price: '₱1,899', image: '/images/package8.jpg' },
  { id: 4, duration: '90 MIN', name: 'Foot Spa + Foot Massage', price: '₱1,799', image: '/images/package7.jpg' },
  { id: 5, duration: '90 MIN', name: 'Body Massage + Shampoo', price: '₱1,899', image: 'https://images.unsplash.com/photo-1717160675643-53a7a2ebaa9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, duration: '80 MIN', name: 'Body Massage + Cupping or Gua Sha', price: '₱1,699', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80' },
  { id: 7, duration: '90 MIN', name: 'Body · Facial · Mask', price: '₱1,899', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 8, duration: '100 MIN', name: 'Head & Shoulder · Facial · Mask · Hand', price: '₱1,999', image: 'https://plus.unsplash.com/premium_photo-1661505103296-a23f027f2dd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

const layout = [
  'col-[1/6] row-[1/3]',   // 1 — hero, tall-wide
  'col-[6/9] row-[1/2]',   // 2
  'col-[9/13] row-[1/2]',  // 3
  'col-[6/10] row-[2/4]',  // 4 — tall accent
  'col-[10/13] row-[2/3]', // 5
  'col-[1/4] row-[3/4]',   // 6
  'col-[4/6] row-[3/4]',   // 7
  'col-[10/13] row-[3/4]', // 8
]

const nameSize = [
  'text-3xl',
  'text-xl',
  'text-xl',
  'text-2xl',
  'text-lg',
  'text-lg',
  'text-lg',
  'text-lg',
]

export function PopularTreatments() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 bg-[#F5F0EB]">
      <div className="mb-6">
        <h2 className="text-5xl font-serif font-light text-spa-dark tracking-tight leading-none mb-4">
          Popular Spa <em className="italic">Packages</em>
        </h2>
        <div className="w-10 h-px bg-spa-dark/30" />
      </div>

      <div
        className="grid gap-px bg-spa-dark/10"
        style={{ gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: '280px 200px 240px' }}
      >
        {treatments.map((t, i) => (
          <div key={t.id} className={`relative group overflow-hidden ${layout[i]}`}>
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              {t.duration && (
                <p className="text-white/55 text-[13px] tracking-widest uppercase mb-1">{t.duration}</p>
              )}
              <h3 className={`text-white font-serif font-light leading-snug mb-1 ${nameSize[i]}`}>
                {t.name}
              </h3>
              <p className="text-white/65 text-md font-light tracking-wide">{t.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { PopularTreatments as ServicesSection }