import { useState } from 'react'

const faqData = [
  {
    question: 'Apa permasalahan utama pengrajin kemplang di Desa Tanjung Pering?',
    answer:
      'Proses produksi saat ini masih didominasi metode konvensional yang bergantung pada cuaca. Saat musim penghujan, waktu pengeringan bisa membengkak menjadi 3-5 hari. Selain itu, penjemuran di ruang terbuka rentan terhadap kontaminasi polutan (debu dan serangga).'
  },
  {
    question: 'Bagaimana teknologi Solar Dryer IoT menyelesaikan masalah tersebut?',
    answer:
      'Solar Dryer adalah sarana pengeringan tertutup bertenaga surya yang dilengkapi sensor suhu dan kelembapan (DHT22) serta kipas ventilasi otomatis. Teknologi ini mampu memangkas waktu pengeringan menjadi maksimal 1-2 hari tanpa terpengaruh cuaca dan menjamin standar higienis.'
  },
  {
    question: 'Apakah program ini hanya fokus pada alat pengering?',
    answer:
      'Tidak. Program ini komprehensif, mencakup pendampingan manajemen produksi, pelatihan pemasaran digital (e-commerce), serta diversifikasi produk turunan bernilai ekonomi seperti keripik kulit ikan (Fish Skin Chips).'
  },
  {
    question: 'Siapa saja pihak yang terlibat dalam program pendampingan ini?',
    answer:
      'Program ini diinisiasi oleh BEM UNSRI 2026, berkolaborasi langsung dengan Pemerintah Desa Tanjung Pering, Kelompok Masyarakat Pengawas (Pokmaswas) Bina Nelayan dari Dinas Perikanan Kabupaten Ogan Ilir, serta PT. Bank Syariah Indonesia (BSI) Cabang Palembang.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative w-full py-24 px-6 lg:px-20 bg-primary overflow-hidden">
      <div className="max-w-4xl mx-auto">

        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-12 lg:mb-16">

          <div className="flex justify-center items-center gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
            <div className="w-8 h-2.5 rounded-full bg-accent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-primary-text mb-6 tracking-tight uppercase">
            <span className="text-accent">FREQUENTLY</span> ASKED QUESTIONS
          </h2>

          <p className="text-muted max-w-3xl text-base md:text-xl font-medium leading-relaxed mb-6">
            "Temukan jawaban atas pertanyaan umum mengenai program pemberdayaan masyarakat oleh BEM UNSRI 2026."
          </p>

          <div className="w-6 h-1.5 rounded-full bg-accent-green"></div>
        </div>

        <div className="space-y-4" data-aos="fade-up">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item p-2 ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="w-full flex items-center justify-between text-left p-4 md:p-6 focus:outline-none rounded-2xl"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg md:text-xl font-black text-primary-text pr-8 tracking-tight">
                  {item.question}
                </span>
                <span className="faq-icon shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-black/5 text-primary-text transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="overflow-hidden">
                  <div className="px-4 md:px-6 pb-6 pt-2 text-muted font-medium leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
