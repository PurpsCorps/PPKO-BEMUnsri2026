import { useEffect } from 'react'

function Publikasi() {
  const newsData = [
    {
      id: 1,
      source: 'Portal Berita Nasional',
      date: 'Agustus 2026',
      title: 'PPK Ormawa BEM Universitas Sriwijaya Wujudkan Program Kolaboratif untuk Mewujudkan Pengembangan Potensi Desa',
      excerpt: 'PPK Ormawa BEM Universitas Sriwijaya 2026 Perkuat Kolaborasi Multipihak untuk Mendorong Pemberdayaan Desa Berkelanjutan.',
      link: 'https://www.kompasiana.com/ppkormawabemunsri8383/6a6e25c2c925c43cc14486d2/ppk-ormawa-bem-universitas-sriwijaya-wujudkan-program-kolaboratif-untuk-mewujudkan-pengembangan-potensi-desa',
    },
    {
      id: 2,
      source: 'Portal Berita Nasional',
      date: '22 Juli 2026',
      title: 'BEM UNSRI Luncurkan PPK Ormawa 2026: Wujudkan Kolaborasi untuk Pemberdayaan Desa',
      excerpt: 'Program pendampingan berfokus pada standardisasi sanitasi dan higiene, membawa angin segar bagi kualitas produk olahan perikanan desa yang lebih sehat.',
      link: 'https://rm.id/baca-berita/education/318450/bem-unsri-luncurkan-ppk-ormawa-2026-wujudkan-kolaborasi-untuk-pemberdayaan-desa',
    }
  ]

  return (
    <section id="publikasi" className="relative w-full py-24 px-6 lg:px-20 bg-slate-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlN2U1ZTQiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Liputan Media
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-primary-text mb-6 tracking-tight">
            Publikasi <span className="text-accent">Berita</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Jejak langkah dan dampak nyata dari program pemberdayaan kami yang telah diliput dan diakui oleh berbagai media massa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <div 
              key={news.id} 
              data-aos="fade-up" 
              data-aos-delay={100 * index}
              className="group h-full flex"
            >
              <div className="bg-white rounded-3xl p-8 flex flex-col h-full w-full shadow-lg shadow-black/5 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 relative overflow-hidden">
                
                {/* Hover Gradient Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/20">
                    {news.source}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {news.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-primary-text mb-4 leading-snug group-hover:text-accent transition-colors duration-300 relative z-10">
                  {news.title}
                </h3>
                
                <p className="text-sm font-medium text-muted leading-relaxed mb-8 flex-grow relative z-10 line-clamp-3 sm:line-clamp-4">
                  {news.excerpt}
                </p>

                {/* Buton Link */}
                <a 
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-accent/5 group-hover:border-accent/20 transition-all duration-300 mt-auto relative z-10"
                >
                  <span className="text-sm font-bold text-primary-text group-hover:text-accent transition-colors duration-300">
                    Baca Selengkapnya
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white shadow-sm group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 group-hover:scale-110">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publikasi
