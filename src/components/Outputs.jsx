import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const programData = {
  ideSolusi: [
    { title: 'Pendampingan Sanitasi & Hygiene', desc: 'Memberikan pendampingan kepada kelompok UMKM dan kelompok binaan tentang standarisasi sanitasi hygiene dan mengimplementasi rumah pengeringan (Solar Dryer).' },
    { title: 'Implementasi Solar Dryer IoT', desc: 'Membangun unit rumah pengering terintegrasi IoT sebagai jawaban atas kendala cuaca dan lamanya waktu pengeringan (dari 3-5 hari menjadi 1-2 hari).' },
    { title: 'Tim Penggerak Digital', desc: 'Membentuk tim penggerak dari unsur pemuda dan ibu-ibu desa untuk mengelola akun e-commerce dan media sosial sebagai kanal penjualan langsung.' },
    { title: 'Workshop Diversifikasi Produk', desc: 'Pelatihan pembuatan varian baru (seperti fish skin chips) dan modernisasi kemasan menggunakan standing pouch serta desain label yang profesional.' },
  ],
  tujuan: [
    { title: 'Standar Higiene Terjamin', desc: 'Terciptanya proses pengeringan kemplang yang bersih dan aman dari kontaminasi polutan melalui sarana pengeringan tertutup.' },
    { title: 'Peningkatan Efisiensi Produksi', desc: 'Stabilitas produksi kemplang melalui penggunaan teknologi Solar Dryer berbasis IoT di segala kondisi cuaca.' },
    { title: 'Kemandirian Ekonomi Digital', desc: 'Perluasan jangkauan pasar desa secara mandiri melalui aktivasi kelompok penggerak yang mampu mengelola penjualan di marketplace.' },
    { title: 'Nilai Tambah & Hilirisasi', desc: 'Diversifikasi produk olahan perikanan baru dan modernisasi kemasan (branding) yang memiliki daya saing lebih tinggi.' },
  ],
  luaran: [
    { title: 'Solar Dryer Cerdas IoT', desc: 'Unit pengeringan bertenaga surya dengan sensor DHT22, ESP32, panel surya 200Wp, dan sistem kipas ventilasi otomatis.' },
    { title: 'Produk Diversifikasi', desc: 'Minimal 3 varian produk berstandar (seperti Fish Skin Chips) dengan kemasan menarik, berlogo, dan memiliki NIB.' },
    { title: 'Kelompok UMKM Digital', desc: 'Terbentuknya kelompok UMKM Digital Tanjung Pering dengan struktur kepengurusan resmi dan platform e-commerce.' },
    { title: 'Dokumentasi & Publikasi', desc: 'Buku refleksi ber-ISBN, Artikel Ilmiah, Video Dokumenter, dan Modul Operasional Solar Dryer IoT.' },
  ],
  indikator: [
    { title: 'Kapasitas Ormawa', desc: 'Mahasiswa memiliki peningkatan hard skills dan soft skills dalam pemberdayaan masyarakat.' },
    { title: 'Usaha Bersama', desc: 'Terbentuk minimal 1 usaha bersama baru yang menggait kelompok ibu-ibu (10-20 orang).' },
    { title: 'Peningkatan Omzet', desc: 'Terjadi peningkatan sebesar 20% omzet usaha melalui peningkatan kapasitas dan kualitas produk.' },
    { title: 'Jangkauan Pasar', desc: 'Produk kerupuk kemplang dipasarkan pada tingkat regional hingga nasional melalui promosi digital.' },
  ]
}

const tabs = [
  { id: 'ideSolusi', label: 'Ide & Solusi' },
  { id: 'tujuan', label: 'Tujuan Program' },
  { id: 'luaran', label: 'Luaran' },
  { id: 'indikator', label: 'Indikator Keberhasilan' },
]

function Outputs() {
  const [activeTab, setActiveTab] = useState('ideSolusi')
  const [tabClicked, setTabClicked] = useState(false)
  const cardsRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    if (tabClicked && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.gsap-target');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: true
        }
      );
    }
  }, [activeTab, tabClicked]);

  const handleTabClick = (tabId) => {
    if (activeTab !== tabId) {
      setTabClicked(true)
      setActiveTab(tabId)
    }
  }

  return (
    <section id="program" className="relative w-full py-24 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 pattern-dots opacity-20 pointer-events-none rounded-bl-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">

          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 z-20" ref={headerRef} data-aos="fade-right">

            <div className="flex flex-col items-start text-left mb-8">
              <div className="flex items-center gap-1 mb-4">
                 <div className="w-1.5 h-4 bg-accent transform skew-x-12 rounded-sm"></div>
                 <div className="w-1.5 h-4 bg-accent transform skew-x-12 opacity-40 rounded-sm"></div>
                 <div className="w-1.5 h-4 bg-accent transform skew-x-12 opacity-20 rounded-sm"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-primary-text mb-6 tracking-tight uppercase relative inline-block">
                <span className="text-accent">PROGRAM</span><br />PENDAMPINGAN
                <div className="absolute -right-8 top-0 w-4 h-4 rounded-full border-2 border-dashed border-accent-green animate-spin-slow"></div>
              </h2>

              <p className="text-muted text-base md:text-lg font-medium leading-relaxed mb-6 italic border-l-4 border-accent pl-4">
                "Solusi inovatif berbasis teknologi dan pendampingan berkelanjutan untuk memajukan hilirisasi produk perikanan."
              </p>
            </div>

            <div className="w-full mb-8 lg:mb-0 relative">

              <div className="hidden lg:flex lg:flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-6 py-3.5 text-sm font-bold tracking-tight uppercase rounded-2xl text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-accent text-white shadow-lg shadow-accent/30 translate-x-2'
                        : 'bg-primary border border-black/5 text-muted hover:text-primary-text hover:bg-black/5 hover:translate-x-1'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex lg:hidden w-full max-w-sm mx-auto justify-center pb-6">
                <div className="w-full bg-slate-200/80 rounded-[1.5rem] p-[1px] shadow-sm border border-slate-200/50">
                  <div className="grid grid-cols-2 gap-[1px] bg-slate-200/80 rounded-[calc(1.5rem-1px)] overflow-hidden">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`relative flex items-center justify-center p-4 text-[11px] sm:text-xs font-bold tracking-tight uppercase text-center transition-all duration-300 leading-snug
                          ${activeTab === tab.id ? 'bg-white text-accent' : 'bg-white/80 text-muted hover:bg-white/90'}
                        `}
                      >
                        {activeTab === tab.id && (
                          <div className="absolute bottom-0 inset-x-0 mx-auto w-8 h-1 bg-accent rounded-t-full"></div>
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" ref={cardsRef}>
            {programData[activeTab].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + (index * 65)}
                className="h-full"
              >
                <div className="gsap-target h-full">
                  <div className="bento-card h-full p-6 md:p-8 flex flex-col items-start relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-6 border border-accent/10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <span className="text-accent group-hover:text-white font-black text-xl font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-text mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Outputs
