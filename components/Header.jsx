'use client'

import Link from 'next/link'
import { useMovies } from '@/context/Moviecontext'
import { usePathname } from 'next/navigation'

const Header = () => {
  const { searchQuery, setSearchQuery } = useMovies()
  const pathname = usePathname()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');
        .header-font { font-family: 'Bebas Neue', sans-serif; }
        .nav-font    { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <header style={{ background: 'rgba(0,0,0,0.85)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="header-font text-2xl tracking-[0.2em] no-underline"
            style={{ color: '#c9a84c' }}>
            Sinimá
          </Link>

          {/* Nav */}
          <nav className="nav-font flex gap-8 text-xs tracking-[0.14em] uppercase">
            {[
              { label: 'Home',      href: '/' },
              { label: 'Movies',    href: '/movies' },
              { label: 'Watchlist', href: '/watchlist' },
              { label: 'Favorites', href: '/favorites' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors duration-300 no-underline"
                style={{ color: pathname === href ? '#c9a84c' : 'rgba(242,234,216,0.6)' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies, actors..."
              className="nav-font text-xs tracking-wide outline-none w-56 px-4 py-2 rounded-sm"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#f2ead8',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs"
                style={{ color: 'rgba(242,234,216,0.4)' }}
              >
                ✕
              </button>
            )}
          </div>

        </div>
      </header>

      {/* Spacer so content doesn't hide under fixed header */}
      <div className="h-[73px]" />
    </>
  )
}

export default Header