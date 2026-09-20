import { useState } from 'react'

const galleryData = {
  kegiatan: [
    { src: '/images/gambar32.png', alt: 'Pengeringan Konvensional Tanjung Pering' },
    { src: '/images/gambar12.png', alt: 'Kunjungan Ditmawa ke Desa Tanjung Pering' },
    { src: '/images/gambar22.png', alt: 'Proses Pembuatan Solar Dryer IoT' },
  ],
  pressRelease: [
    {
      id: 1,
      src: '/images/pressrelease/1.jpg',
      title: 'Press Release Audiensi Kerjasama',
      date: '30 Juli 2026',
      desc: 'Kolaborasi menjadi kunci dalam mewujudkan program pengabdian yang berkelanjutan.',
      link: 'https://www.instagram.com/p/DbawR-9FMc8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 2,
      src: '/images/pressrelease/2.jpg',
      title: 'Press Release Fiksasi Kegiatan',
      date: '24 Juli 2026',
      desc: 'Semakin dekat dengan waktu pelaksanaan, semakin penting setiap detail untuk dipersiapkan dengan matang.',
      link: 'https://www.instagram.com/p/DbasilNFBmm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 3,
      src: '/images/pressrelease/3.jpg',
      title: 'Press Release Coaching Belmawa',
      date: '21 Juli 2026',
      desc: 'Setiap program yang baik membutuhkan ruang untuk belajar dan berbenah.',
      link: 'https://www.instagram.com/p/DbDPheKoHpu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 4,
      src: '/images/pressrelease/4.jpg',
      title: 'Press Release Audiensi Lanjutan',
      date: '17 Juli 2026',
      desc: 'Komitmen untuk menghadirkan program yang berdampak diwujudkan melalui komunikasi yang terus terjalin.',
      link: 'https://www.instagram.com/p/Da7fN_moL5W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 5,
      src: '/images/pressrelease/5.jpg',
      title: 'Press Release Audiensi Lanjutan',
      date: '16 Juli 2026',
      desc: 'Kolaborasi yang kuat dibangun melalui komunikasi yang berkelanjutan.',
      link: 'https://www.instagram.com/p/Da2jzbBIMdE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 6,
      src: '/images/pressrelease/6.jpg',
      title: 'Press Release Kunjungan Belmawa',
      date: '06 Juli 2026',
      desc: 'Kolaborasi yang kuat lahir melalui komunikasi dan keterlibatan secara langsung.',
      link: 'https://www.instagram.com/p/Dafem4UIGAf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ]
}

function Gallery() {
  const [activeTab, setActiveTab] = useState('kegiatan')

  return (
    <section id="galeri" className="relative w-full py-24 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-12 relative">
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

          <p className="text-muted max-w-3xl text-base md:text-xl font-medium leading-relaxed mb-8 italic">
            "Momen-momen penting dari perjalanan program pendampingan, hilirisasi perikanan, serta publikasi resmi di Desa Tanjung Pering."
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl shadow-inner mb-4 border border-slate-200/50">
            <button
              onClick={() => setActiveTab('kegiatan')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'kegiatan'
                  ? 'bg-white text-accent shadow-sm scale-100'
                  : 'text-muted hover:text-primary-text hover:bg-slate-200/50 scale-95'
              }`}
            >
              Galeri Kegiatan
            </button>
            <button
              onClick={() => setActiveTab('pressRelease')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'pressRelease'
                  ? 'bg-white text-accent shadow-sm scale-100'
                  : 'text-muted hover:text-primary-text hover:bg-slate-200/50 scale-95'
              }`}
            >
              Press Release
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="min-h-[400px]">

          {/* Kegiatan Tab */}
          {activeTab === 'kegiatan' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up">
              {galleryData.kegiatan.map((img, index) => (
                <div
                  key={index}
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
          )}

          {/* Press Release Tab */}
          {activeTab === 'pressRelease' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {galleryData.pressRelease.map((pr) => (
                <div key={pr.id} className="group relative bg-white rounded-3xl p-4 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col">

                  {/* Poster Image */}
                  <div className="overflow-hidden rounded-2xl aspect-[4/5] mb-5 relative bg-slate-100">
                    <img
                      src={pr.src}
                      alt={pr.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Fallback image using SVG if the user's image path is not found
                        e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22400%22%20height%3D%22500%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100%22%20y%3D%22258%22%3E+Poster+Press+Release+%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                      }}
                    />

                    {/* Hover Overlay with Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <a
                        href={pr.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white text-accent px-6 py-3 rounded-full font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        Lihat Postingan
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-2 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/20">
                        {pr.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-primary-text mb-2 line-clamp-1">{pr.title}</h3>
                    <p className="text-sm font-medium text-muted line-clamp-2">{pr.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Gallery
