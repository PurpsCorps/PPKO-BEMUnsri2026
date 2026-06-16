function Footer() {
  return (
    <footer className="relative w-full bg-white pt-24 pb-12 px-6 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

          <div className="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-accent/20">
                <img
                  src="/images/logo.png"
                  alt="Logo PPKO BEM UNSRI"
                />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-primary-text">
                PPK Ormawa BEM UNSRI <span className="text-muted font-normal">2026</span>
              </h1>
            </div>
            <p className="text-base text-muted max-w-sm leading-relaxed">
              Program Penguatan Kapasitas Organisasi Badan Eksekutif Mahasiswa Universitas Sriwijaya. Memberdayakan masyarakat melalui inovasi teknologi.
            </p>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-3 lg:col-start-7 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-text mb-8">Hubungi Kami</h2>
            <div className="space-y-5">
              <a href="https://instagram.com/ppkormawabemunsri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-base font-medium text-muted hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                @ppkormawabemunsri
              </a>
              <a href="mailto:ppkormawabemunsri@gmail.com" className="flex items-center gap-4 text-base font-medium text-muted hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                </div>
                Email Kami
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-text mb-8">Didukung Oleh</h2>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <span className="text-base font-bold text-primary-text">Pemerintah Desa</span>
              <span className="text-base font-bold text-primary-text">Dinas Perikanan Ogan Ilir</span>
              <span className="text-base font-bold text-primary-text">PT.BSI Cabang Palembang</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5">
          <p className="text-sm font-medium text-muted mb-4 md:mb-0">
            © 2026 PPKO BEM UNSRI.
          </p>
          <div className="flex gap-8"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
