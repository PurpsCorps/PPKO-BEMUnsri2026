import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Sambal Bekasam',
    tagline: 'Warisan Kuliner Sumatera Selatan',
    description: 'Terbuat dari fermentasi ikan sungai asli Sumatera Selatan. Pedas, gurih, dan kaya rempah — cocok sebagai pelengkap setiap hidangan.',
    image: '/images/sambal_bekasam.png',
    price: 'Rp 8.000',
    originalPrice: 'Rp 10.000',
    badge: 'Promo',
    badgeColor: 'red',
    emoji: '🌶️',
    features: ['Fermentasi Alami', 'Ikan Sungai Asli', 'Kaya Rempah'],
  },
  {
    id: 2,
    name: 'Kemplang Mini "Ogan Bites"',
    tagline: 'Camilan Siap Santap',
    description: 'Kemplang ukuran mini yang siap santap — praktis, renyah, dan cocok untuk teman ngobrol atau camilan keluarga.',
    image: '/images/kemplang_mini.png',
    price: 'Rp 3.000',
    originalPrice: null,
    badge: 'Best Seller',
    badgeColor: 'gold',
    emoji: '🍘',
    features: ['Siap Santap', 'Ukuran Mini', 'Praktis'],
  },
  {
    id: 3,
    name: 'Kerupuk Pedas "Ogan Bites Spicy"',
    tagline: 'Sensasi Pedas Nusantara',
    description: 'Ogan Bites namun versi Spicy! Perpaduan sempurna antara kerenyahan kemplang dan bumbu pedas yang menggugah selera.',
    image: '/images/kerupuk_pedas.png',
    price: 'Rp 4.000',
    originalPrice: null,
    badge: 'Spicy 🔥',
    badgeColor: 'red',
    emoji: '🔥',
    features: ['Level Pedas', 'Bumbu Meresap', 'Renyah'],
  },
  {
    id: 4,
    name: 'Keripik Kulit Ikan Gabus',
    tagline: 'Inovasi Diversifikasi Produk',
    description: 'Gurih, renyah, nikmat! Keripik kulit ikan gabus yang diolah dengan standar higienitas tinggi — camilan premium kaya protein.',
    image: '/images/keripik_kulit_ikan.png',
    price: 'Rp 5.000',
    originalPrice: null,
    badge: 'New',
    badgeColor: 'green',
    emoji: '🐟',
    features: ['Tinggi Protein', 'Renyah', 'Premium'],
  },
]

function ProductCatalog() {
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [imgError, setImgError] = useState({})

  const whatsappNumber = '6288908912346'
  const whatsappMessage = encodeURIComponent(
    'Halo Bina Pering! Saya tertarik untuk membeli produk olahan perikanan dari Desa Tanjung Pering. Bisa info lebih lanjut?'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleOrderProduct = (productName) => {
    const msg = encodeURIComponent(`Halo Bina Pering! Saya ingin memesan *${productName}*. Apakah stok masih tersedia?`)
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank')
  }

  const getBadgeClasses = (color) => {
    switch (color) {
      case 'red': return 'bg-red-500 shadow-red-500/30'
      case 'gold': return 'bg-accent-gold shadow-accent-gold/30'
      case 'green': return 'bg-accent-green shadow-accent-green/30'
      default: return 'bg-accent shadow-accent/30'
    }
  }

  return (
    <section id="katalog-produk" className="relative w-full py-24 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/3 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D4E8906_1px,transparent_1px),linear-gradient(to_bottom,#1D4E8906_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gold/10 text-accent-gold font-bold text-sm mb-6 border border-accent-gold/20 shadow-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Luaran Produk
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary-text mb-6 tracking-tight leading-tight">
            Katalog Produk <br />
            <span className="bg-gradient-to-r from-accent via-accent-green to-accent-gold bg-clip-text text-transparent">
              Bina Pering
            </span>
          </h2>

          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Produk olahan perikanan unggulan Desa Tanjung Pering — diproses dengan standar higiene modern,
            langsung dari produsen ke tangan Anda.
          </p>
        </div>

        {/* Hero Product Banner */}
        <div className="relative mb-16 rounded-3xl overflow-hidden group" data-aos="fade-up" data-aos-delay="100">
          <div className="relative h-[280px] md:h-[400px] lg:h-[460px] overflow-hidden">
            <img
              src="/images/product_catalog_hero.png"
              alt="Katalog Produk Bina Pering"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-text/90 via-primary-text/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-gold/20 backdrop-blur-sm text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-accent-gold/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse"></span>
                  Mitra Penjualan Resmi
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tight">
                  Bina Pering
                </h3>
                <p className="text-white/70 text-sm md:text-base max-w-lg">
                  Olahan perikanan autentik dari Desa Tanjung Pering, Kecamatan Indralaya, Kabupaten Ogan Ilir — langsung dari produsen ke tangan Anda.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1 group/wa"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover/wa:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={100 + (100 * index)}
              className="group h-full"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={`relative h-full bg-white rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col ${
                hoveredProduct === product.id
                  ? 'border-accent/30 shadow-2xl shadow-accent/15 -translate-y-3'
                  : 'border-slate-100 shadow-lg shadow-black/5 hover:-translate-y-1'
              }`}>

                {/* Badge */}
                <div className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-lg ${getBadgeClasses(product.badgeColor)}`}>
                  {product.badge}
                </div>

                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(29,78,137,0.06),transparent_70%)]"></div>
                  
                  {imgError[product.id] ? (
                    /* Emoji fallback with gradient background */
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent/5 rounded-full blur-2xl scale-150"></div>
                        <span className="relative text-7xl drop-shadow-lg transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">{product.emoji}</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-5 transform group-hover:scale-110 transition-transform duration-700"
                      onError={() => setImgError(prev => ({...prev, [product.id]: true}))}
                    />
                  )}

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-gold mb-2">{product.tagline}</p>
                  <h3 className="text-lg font-black text-primary-text mb-2 tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">{product.name}</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4 flex-grow line-clamp-3">{product.description}</p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/5 text-accent text-[10px] font-bold border border-accent/10"
                      >
                        <svg className="w-2.5 h-2.5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-2xl font-black text-accent tracking-tight">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm font-semibold text-slate-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleOrderProduct(product.name)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-primary-text hover:bg-accent text-white text-sm font-bold transition-all duration-300 group/btn hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
                  >
                    <svg className="w-4 h-4 transform group-hover/btn:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Pesan via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-text via-[#162544] to-[#0a1628] p-1">
            {/* Inner glow border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-gold/20 opacity-50"></div>

            <div className="relative rounded-[calc(1.5rem-4px)] bg-gradient-to-br from-primary-text via-[#162544] to-[#0a1628] px-8 py-14 md:px-16 md:py-20 overflow-hidden">

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

              {/* Floating dots */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-accent-gold/30 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-accent-green/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    Siap Melayani Anda
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                    Tertarik dengan <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-accent-gold to-[#f0c040] bg-clip-text text-transparent">Produk Kami?</span>
                  </h3>

                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-8">
                    Hubungi langsung mitra penjualan resmi <span className="text-white font-bold">Bina Pering</span> untuk informasi produk, pemesanan, dan penawaran khusus.
                  </p>

                  {/* Contact Details */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">WhatsApp</p>
                        <p className="text-white font-bold text-sm">+62 889-0891-2346</p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Akun Penjualan</p>
                        <p className="text-white font-bold text-sm">Bina Pering</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="flex-shrink-0 flex flex-col items-center gap-6">
                  {/* Animated WhatsApp Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#25D366]/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                    <div className="relative w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30">
                      <svg className="w-14 h-14 md:w-18 md:h-18 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-base md:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-1 group/cta"
                  >
                    <span>Hubungi Sekarang</span>
                    <svg className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductCatalog
