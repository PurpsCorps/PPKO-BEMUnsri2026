function LocationService() {
  return (
    <section id="lokasi" className="relative w-full py-24 px-6 lg:px-20 overflow-hidden">
      <div className="bg-ambient"></div>
      <div className="absolute left-0 top-0 w-32 h-64 pattern-dots opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent/60"></div>
            <div className="w-2 h-2 rounded-full border-2 border-accent"></div>
            <div className="w-6 h-px bg-accent/60"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-primary-text mb-6 tracking-tight uppercase relative inline-block">
            <span className="text-accent">LOCATION</span> SERVICE
            <div className="absolute -left-4 -top-4 w-6 h-6 border-t-2 border-l-2 border-accent/20"></div>
          </h2>

          <p className="text-muted max-w-3xl text-base md:text-xl font-medium leading-relaxed mb-6 italic">
            "Peta wilayah sasaran pelaksanaan program pendampingan hilirisasi perikanan di Desa Tanjung Pering."
          </p>

          <div className="flex justify-center gap-2">
            <div className="w-2 h-px bg-accent-green"></div>
            <div className="w-4 h-px bg-accent-green"></div>
            <div className="w-2 h-px bg-accent-green"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch relative">

          <div data-aos="fade-right" className="w-full lg:w-3/5 order-2 lg:order-1 relative">
            <div className="bento-card h-full p-2 md:p-3 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15920.4!2d104.65!3d-3.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9e0!2sTanjung+Pering%2C+Indralaya+Utara%2C+Ogan+Ilir!5e0!3m2!1sid!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 md:h-80 lg:h-[500px] rounded-[1rem] lg:rounded-[1.25rem] grayscale-[0.3] contrast-125 transition-all duration-500 hover:grayscale-0"
                style={{ border: '0px' }}
                title="Lokasi Desa Tanjung Pering"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-accent/30 rounded-bl-xl"></div>
          </div>

          <div data-aos="fade-left" className="w-full lg:w-2/5 order-1 lg:order-2">
            <div className="bento-card h-full p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>

              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 lg:mb-8 border border-accent/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-primary-text mb-6 lg:mb-8 tracking-tight uppercase">
                Data Wilayah
              </h3>

              <div className="space-y-6 w-full text-left relative z-10">
                <div className="flex justify-between items-center py-3 border-b border-black/5 group hover:border-accent/30 transition-colors">
                  <span className="text-sm font-medium text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span> Kecamatan
                  </span>
                  <span className="text-base font-bold text-primary-text">Indralaya Utara</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/5 group hover:border-accent/30 transition-colors">
                  <span className="text-sm font-medium text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span> Kabupaten
                  </span>
                  <span className="text-base font-bold text-primary-text">Ogan Ilir</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/5 group hover:border-accent/30 transition-colors">
                  <span className="text-sm font-medium text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span> Pembagian Wilayah
                  </span>
                  <span className="text-base font-bold text-primary-text">4 Dusun</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/5 group hover:border-accent/30 transition-colors">
                  <span className="text-sm font-medium text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span> Jarak ke Pusat Kab
                  </span>
                  <span className="text-base font-bold text-primary-text">± 8 km</span>
                </div>
                <div className="flex justify-between items-center py-3 group">
                  <span className="text-sm font-medium text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span> Bentuk Wilayah Mayoritas
                  </span>
                  <span className="text-base font-bold text-primary-text">Perkebunan</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LocationService
