import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandStory from '../components/BrandStory'
import CollectionsSection from '../components/CollectionsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <BrandStory />
      <CollectionsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
