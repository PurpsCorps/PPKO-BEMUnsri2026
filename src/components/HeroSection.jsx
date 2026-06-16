import { useState, useEffect } from 'react'

const slides = [
  { src: '/images/gambar1.png', alt: 'Desa Tanjung Pering' },
  { src: '/images/gambar2.png', alt: 'Diskusi Tim BEM UNSRI' },
  { src: '/images/gambar3.png', alt: 'Pengeringan Kemplang Manual' },
]

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="beranda" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <img
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-out"
              style={{ transform: currentSlide === index ? 'scale(1)' : 'scale(1.05)' }}
              src={slide.src}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-16 fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-8 drop-shadow-2xl uppercase">
          Hilirisasi Produk <br />
          <span className="text-accent-gold">Perikanan</span>
        </h1>

        <p className="text-white/90 text-lg md:text-2xl max-w-3xl mb-12 font-medium leading-relaxed drop-shadow-lg">
          Pendampingan di Desa Tanjung Pering melalui Solar Dryer IoT: Efisiensi Energi, Reduksi Emisi, dan Peningkatan Mutu Produk.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:px-8 shadow-2xl w-full sm:w-auto justify-center">
          <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Kerja Sama</span>
          <div className="hidden sm:block w-px h-6 bg-white/20"></div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="text-white text-xs md:text-sm font-bold tracking-tight drop-shadow-md">Pemerintah Desa</span>
            <span className="text-accent-gold text-xs shadow-accent">•</span>
            <span className="text-white text-xs md:text-sm font-bold tracking-tight drop-shadow-md">Dinas Perikanan Ogan Ilir</span>
            <span className="text-accent-gold text-xs shadow-accent">•</span>
            <span className="text-white text-xs md:text-sm font-bold tracking-tight drop-shadow-md">PT. BSI Cabang Palembang</span>
          </div>
        </div>

        <div className="flex gap-3 mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentSlide === index ? 'w-10 bg-accent-gold shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default HeroSection
