import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PotretDesa from './components/PotretDesa'
import LocationService from './components/LocationService'
import Outputs from './components/Outputs'
import FAQ from './components/FAQ'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <div className="font-sans bg-primary overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <HeroSection />
      <PotretDesa />
      <LocationService />
      <Outputs />
      <FAQ />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
