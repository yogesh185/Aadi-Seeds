import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandStory from '../components/BrandStory'
import CollectionsSection from '../components/CollectionsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <BrandStory />
      <FeaturedProducts />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
