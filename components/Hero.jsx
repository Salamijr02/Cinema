'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');
  :root { --gold: #c9a84c; --gold-light: #e8c96b; --cream: #f2ead8; }
  .font-bebas { font-family: 'Bebas Neue', sans-serif; }
  .font-cormo { font-family: 'Cormorant Garamond', serif; }
  .font-dm    { font-family: 'DM Sans', sans-serif; }
  .text-gold       { color: var(--gold); }
  .text-gold-light { color: var(--gold-light); }
  .text-cream      { color: var(--cream); }
  .title-size { font-size: clamp(4.5rem, 10vw, 9rem); line-height: 0.92; }
  .tag-size   { font-size: clamp(1.05rem, 2vw, 1.35rem); }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes scrollPulse { 0% { top: -100%; } 100% { top: 200%; } }
  .anim-fade-up-1 { animation: fadeUp 0.7s 0.20s both; }
  .anim-fade-up-2 { animation: fadeUp 0.8s 0.35s both; }
  .anim-fade-up-3 { animation: fadeUp 0.7s 0.50s both; }
  .anim-fade-up-4 { animation: fadeUp 0.7s 0.65s both; }
  .anim-fade-up-5 { animation: fadeUp 0.7s 0.80s both; }
  .anim-fade-in-1 { animation: fadeIn 0.8s 0.90s both; }
  .anim-fade-in-2 { animation: fadeIn 1.0s 1.00s both; }
  .anim-fade-in-3 { animation: fadeIn 1.0s 1.20s both; }
  .scroll-bar::after {
    content: '';
    position: absolute;
    top: -100%; left: 0;
    width: 100%; height: 50%;
    background: var(--gold);
    animation: scrollPulse 1.8s ease-in-out infinite;
  }
`

const MOVIE = {
  title: 'The Hollow Dark',
  tagline: 'Some doors were never meant to be opened.',
  genre: ['Thriller', 'Mystery', 'Sci-Fi'],
  year: '2025',
  duration: '2h 18m',
  rating: 'R',
  score: '9.1',
  director: 'Ava Reinhardt',
  image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1800&q=90',
}

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      })
    }
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const parallaxStyle = {
    transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -12}px) scale(1.08)`,
    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }

  return (
    <section ref={heroRef}
      className="relative mx-auto max-w-6xl h-screen min-h-[700px] overflow-hidden cursor-default bg-black">
      <style>{globalStyles}</style>

      {/* Background */}
      <div className="absolute z-0 will-change-transform" style={{ inset: '-6%', ...parallaxStyle }}>
        <Image src={MOVIE.image} alt={MOVIE.title} fill
          className="object-cover object-[center_30%]"
          style={{ filter: 'saturate(0.7) brightness(0.55)' }} />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse 80% 100% at 60% 40%, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.75) 100%)' }} />
      <div className="absolute inset-0 z-[2]"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 z-[2]"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)' }} />
      <div className="absolute inset-0 z-[3] pointer-events-none"
        style={{ boxShadow: 'inset 0 0 140px rgba(0,0,0,0.6)' }} />
      <div className="absolute inset-0 z-[4] pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundSize: '180px' }} />
      <div className="absolute top-0 left-1/2 w-px h-full z-[5] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.18), transparent)' }} />

      {/* Genre tags */}
      <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-2 items-end anim-fade-in-1">
        {MOVIE.genre.map((g) => (
          <span key={g} className="font-cormo italic text-[0.85rem] tracking-[0.05em]"
            style={{ color: 'rgba(201,168,76,0.55)' }}>{g}</span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-[6vw] pb-[7vh] max-w-[820px]">
        <div className="flex items-center gap-3 mb-[1.1rem] anim-fade-up-1">
          <span className="w-9 h-px bg-gold" />
          <span className="font-dm text-[0.7rem] tracking-[0.22em] uppercase text-gold">
            Now Showing · {MOVIE.year}
          </span>
        </div>

        <h1 className="font-bebas title-size tracking-[0.02em] anim-fade-up-2">
          {MOVIE.title.split(' ').map((word, i) => (
            <span key={i} className="block text-gold-light">{word}</span>
          ))}
        </h1>

        <p className="font-cormo italic tag-size font-light tracking-[0.04em] mt-6 mb-9 max-w-[460px] anim-fade-up-3"
          style={{ color: 'rgba(242,234,216,0.72)' }}>
          "{MOVIE.tagline}"
        </p>

        <div className="flex items-center gap-2 flex-wrap mb-11 anim-fade-up-4">
          <span className="font-dm text-[0.68rem] tracking-[0.12em] uppercase px-3 py-1 rounded-sm border text-gold"
            style={{ borderColor: 'rgba(201,168,76,0.45)', background: 'rgba(201,168,76,0.08)' }}>
            {MOVIE.rating}
          </span>
          <span className="w-[3px] h-[3px] rounded-full" style={{ background: 'rgba(242,234,216,0.25)' }} />
          <span className="font-dm text-[0.68rem] tracking-[0.12em] uppercase px-3 py-1 rounded-sm border"
            style={{ color: 'rgba(242,234,216,0.6)', borderColor: 'rgba(242,234,216,0.18)' }}>
            {MOVIE.duration}
          </span>
          <span className="w-[3px] h-[3px] rounded-full" style={{ background: 'rgba(242,234,216,0.25)' }} />
          <span className="font-dm text-[0.68rem] tracking-[0.12em] uppercase px-3 py-1 rounded-sm border"
            style={{ color: 'rgba(242,234,216,0.6)', borderColor: 'rgba(242,234,216,0.18)' }}>
            Dir. {MOVIE.director}
          </span>
          <div className="ml-auto hidden sm:flex flex-col items-center border px-[0.9rem] py-2 backdrop-blur-sm"
            style={{ borderColor: 'rgba(201,168,76,0.5)', background: 'rgba(0,0,0,0.35)' }}>
            <span className="font-bebas text-[1.8rem] leading-none tracking-[0.04em] text-gold-light">
              {MOVIE.score}
            </span>
            <span className="font-dm text-[0.58rem] tracking-[0.18em] uppercase mt-[2px]"
              style={{ color: 'rgba(201,168,76,0.65)' }}>Score</span>
          </div>
        </div>

        <div className="flex gap-4 anim-fade-up-5">
          <a href="#" className="font-dm text-[0.72rem] tracking-[0.18em] uppercase flex items-center gap-2 px-10 py-4 no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#c9a84c', color: '#0d0c0b' }}>
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
              <path d="M2 1.5L11 7L2 12.5V1.5Z" fill="currentColor" />
            </svg>
            Watch Trailer
          </a>
          <a href="#" className="font-dm text-[0.72rem] tracking-[0.18em] uppercase flex items-center gap-2 px-10 py-4 bg-transparent no-underline border transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06]"
            style={{ color: '#f2ead8', borderColor: 'rgba(242,234,216,0.3)' }}>
            + Add to Watchlist
          </a>
        </div>
      </div>

      {/* Side info strip */}
      <aside className="absolute right-[5vw] bottom-[7vh] z-10 hidden md:flex flex-col items-center gap-7 anim-fade-in-2">
        {[{ value: MOVIE.year, key: 'Year' }, { value: MOVIE.duration.split('h')[0] + 'h', key: 'Runtime' }, { value: MOVIE.rating, key: 'Rated' }]
          .map(({ value, key }, i) => (
            <div key={key} className="flex flex-col items-center gap-1">
              <span className="font-bebas text-[1rem] tracking-[0.08em] text-cream">{value}</span>
              <span className="font-dm text-[0.6rem] tracking-[0.2em] uppercase"
                style={{ color: 'rgba(242,234,216,0.38)' }}>{key}</span>
              {i < 2 && <div className="w-px mt-3" style={{ height: '22px', background: 'rgba(242,234,216,0.15)' }} />}
            </div>
          ))}
      </aside>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 anim-fade-in-3">
        <span className="font-dm text-[0.58rem] tracking-[0.25em] uppercase"
          style={{ color: 'rgba(242,234,216,0.35)' }}>Scroll</span>
        <div className="relative w-px overflow-hidden scroll-bar"
          style={{ height: '48px', background: 'rgba(242,234,216,0.15)' }} />
      </div>
    </section>
  )
}

export default Hero