'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { useMovies } from '@/context/Moviecontext'

const Recommended = () => {
  const { movies } = useMovies()

  const picks = useMemo(() => {
    const shuffled = [...movies].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 5)
  }, [movies])

  return (
    <section className="bg-black py-16 px-6"
      style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&family=Cormorant+Garamond:ital,wght@1,300&display=swap');`}</style>

      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#c9a84c', letterSpacing: '0.2em', fontSize: '1.4rem' }}>
            Recommended
          </h2>
          <span className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.12)' }} />
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {picks.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`} className="group block no-underline">
              <div className="relative aspect-[2/3] overflow-hidden rounded-sm"
                style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
                <Image src={movie.image} alt={movie.title} fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.75)' }} />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }} />

                {/* Rating */}
                <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold"
                  style={{ background: '#c9a84c', color: '#0d0c0b', fontFamily: "'DM Sans', sans-serif" }}>
                  ⭐ {movie.rating}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 p-3 w-full">
                  <p className="text-xs font-semibold leading-tight line-clamp-2 mb-1"
                    style={{ color: '#f2ead8', fontFamily: "'DM Sans', sans-serif" }}>
                    {movie.title}
                  </p>
                  <p className="text-[10px] italic"
                    style={{ color: 'rgba(201,168,76,0.7)', fontFamily: "'Cormorant Garamond', serif" }}>
                    {movie.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommended