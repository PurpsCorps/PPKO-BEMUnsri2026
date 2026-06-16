import { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#beranda' },
    { label: 'Tentang', href: '#about' },
    { label: 'Lokasi', href: '#lokasi' },
    { label: 'Program', href: '#program' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6 md:pt-8'}`}>
        <div className={`nav-floating relative flex items-center justify-between transition-all duration-500 ${scrolled ? 'w-[92%] md:w-[70%] max-w-5xl py-2 px-4 md:px-6' : 'w-[95%] md:w-[85%] max-w-6xl py-3 px-4 md:px-8'}`}>

          <div className="flex items-center shrink-0 z-10">
            <div className="w-9 h-9 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center shadow-md shadow-accent/20 bg-white">
              <img
                src="/images/logo.png"
                alt="Logo PPKO BEM UNSRI"
                className="w-full h-full object-contain p-0.5"
              />
            </div>

            <h1 className="hidden md:block ml-3 text-base font-black tracking-tight text-primary-text truncate">
              PPK Ormawa BEM UNSRI <span className="text-muted font-normal">2026</span>
            </h1>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[55%] text-center md:hidden pointer-events-none">
            <h1 className="text-[13px] sm:text-sm font-black tracking-tight text-primary-text truncate">
              PPK Ormawa BEM UNSRI <span className="text-muted font-normal">2026</span>
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="text-sm font-semibold text-secondary-text hover:text-accent transition-colors duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="text-sm font-bold bg-primary-text text-white px-6 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 shadow-md shadow-primary-text/10"
                href="#galeri"
              >
                Galeri
              </a>
            </li>
          </ul>

          <button
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 focus:outline-none shrink-0"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <span className="w-6 h-[2px] bg-primary-text rounded-full"></span>
            <span className="w-5 h-[2px] bg-primary-text rounded-full"></span>
            <span className="w-6 h-[2px] bg-primary-text rounded-full"></span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-primary-text/20 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false)
        }}
      >
        <div
          className={`fixed right-0 top-0 w-4/5 max-w-sm h-full bg-white/95 backdrop-blur-xl border-l border-white/50 p-8 flex flex-col shadow-2xl z-[10000] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Logo PPKO BEM UNSRI"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <span className="text-sm font-bold tracking-tight">Menu</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-muted hover:bg-slate-200 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-2xl font-bold text-primary-text hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <a href="#galeri" onClick={handleLinkClick} className="text-2xl font-bold text-primary-text hover:text-accent transition-colors">
              Galeri
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
