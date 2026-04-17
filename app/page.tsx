import { MainLayout } from '@/components/MainLayout'
import { HeroSection } from '@/components/sections/HeroSection'
import { PopularTreatments  } from '@/components/sections/ServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

import { CtaSection } from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />

      <PopularTreatments  />
      <TestimonialsSection />

      <CtaSection />
    </MainLayout>
  )
}
//deployment
