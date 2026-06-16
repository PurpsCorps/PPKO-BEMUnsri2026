const galleryImages = [
  { src: '/images/gambar3.png', alt: 'Pengeringan Konvensional Tanjung Pering' },
  { src: '/images/gambar1.png', alt: 'Diskusi Bersama Perangkat Desa' },
  { src: '/images/gambar2.png', alt: 'Kunjungan ke Desa Tanjung Pering' },
]

function Gallery() {
  return (
    <section id="galeri" className="relative w-full py-24 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-16 relative">

          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-3 h-3 border-t-2 border-l-2 border-accent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
            <div className="w-3 h-3 border-b-2 border-r-2 border-accent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-primary-text mb-6 tracking-tight uppercase relative inline-block">
            <span className="text-accent">DOKUMENTASI</span> PROGRAM
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute -left-10 top-0 text-accent/20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </h2>

          <p className="text-muted max-w-3xl text-base md:text-xl font-medium leading-relaxed mb-6 italic">
            "Momen-momen penting dari perjalanan program pendampingan dan hilirisasi perikanan di Desa Tanjung Pering."
          </p>

          <div className="w-8 h-1 rounded-full bg-accent-green"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`img-mask bg-primary p-2 border border-black/5 shadow-xl shadow-black/5 group ${
                index === 1 ? 'md:-translate-y-8' : ''
              }`}
            >
              <div className="absolute top-4 left-4 z-20 w-4 h-4 border-t-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 right-4 z-20 w-4 h-4 border-b-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-[1rem] grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg leading-tight">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery
