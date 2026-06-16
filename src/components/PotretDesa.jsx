function PotretDesa() {
  return (
    <section id="about" className="relative w-full py-24 px-6 lg:px-20 overflow-hidden">
      <div className="bg-ambient-2"></div>
      <div className="absolute right-0 top-20 w-64 h-64 pattern-grid opacity-30 pointer-events-none rounded-bl-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-accent/40 rounded-full"></div>
            <div className="w-2 h-2 rotate-45 bg-accent"></div>
            <div className="w-8 h-1 bg-accent/40 rounded-full"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-primary-text mb-6 tracking-tight uppercase relative inline-block">
            <span className="text-accent">POTRET</span> TANJUNG PERING
            <div className="absolute -right-6 -top-2 w-4 h-4 pattern-dots opacity-50"></div>
          </h2>

          <p className="text-muted max-w-3xl text-base md:text-xl font-medium leading-relaxed mb-6 italic">
            "Potensi Besar Pengolahan Produk Perikanan yang Terhambat Metode Konvensional."
          </p>

          <div className="flex justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-green"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          <div data-aos="fade-right" className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left z-10 relative">
            <div className="absolute -left-6 top-10 w-1 h-32 bg-gradient-to-b from-accent to-transparent rounded-full opacity-20 hidden lg:block"></div>
            <div className="bento-card p-6 md:p-8 text-muted text-sm md:text-base leading-relaxed space-y-4 md:space-y-6 text-left border-l-4 border-l-accent/50">
              <p>
                Desa Tanjung Pering terletak di Indralaya Utara yang berjarak kurang lebih 8 km dari pusat pemerintahan Kabupaten Ogan Ilir. Wilayah ini sebagian besar berbentuk perkebunan yang dibagi menjadi 4 Dusun.
              </p>
              <p>
                Sebagian besar masyarakat berprofesi sebagai <strong className="text-primary-text font-bold">petani dan pengrajin makanan (kerupuk kemplang)</strong> yang memang sudah menjadi mata pencarian turun temurun.
              </p>
              <p>
                Karakteristik unik desa ini terlihat pada <strong className="text-primary-text font-bold">mayoritas penduduknya, khususnya kelompok ibu rumah tangga</strong>, yang menggantungkan hidup pada industri pengolahan kemplang. Saat ini, terdapat puluhan unit usaha mikro yang aktif, namun proses produksinya masih didominasi oleh metode konvensional.
              </p>
              <p>
                Kondisi lingkungan desa yang terbuka sangat mendukung aktivitas penjemuran, namun ketergantungan penuh pada cuaca menjadi hambatan utama dalam menjaga konsistensi produksi sepanjang tahun, sehingga waktu pengeringan bisa membengkak menjadi 3-5 hari saat musim penghujan.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="w-full lg:w-1/2 relative z-10 mt-8 lg:mt-0">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-accent/20 to-accent-green/20 rounded-[2rem] md:rounded-[2.5rem] transform -rotate-3 transition-transform duration-700 hover:rotate-0"></div>
            <div className="img-mask shadow-2xl shadow-accent/10 border border-white/50 relative">
              <img
                src="/images/gambar3.png"
                alt="Pengeringan Kerupuk Kemplang Ikan Konvensional"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-3 text-center text-xs font-bold text-primary-text border-t border-white/50">
                Pengeringan Kerupuk Kemplang Ikan Konvensional.
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-20 h-20 pattern-dots opacity-40 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PotretDesa
