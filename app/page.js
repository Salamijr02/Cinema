'use client'

import React from 'react'
import Hero from '@/components/Hero'
import Recommended from '@/components/Reccommended'
import Moviecard from '@/components/Moviecard'
import Link from 'next/link'
import { useMovies } from '@/context/Moviecontext'

const HomePage = () => {
  const { movies } = useMovies()
  const previewMovies = movies.slice(0, 6)

  return (
    <main style={{ background: 'var(--black)' }}>
      <Hero />
      <Recommended />

      {/* Preview section */}
      <section style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}
        className="max-w-6xl mx-auto px-6 py-16">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-bebas text-xl tracking-[0.2em] text-gold">Popular Movies</h2>
          <span className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.12)' }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {previewMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/movies"
            className="font-dm text-xs tracking-[0.2em] uppercase px-10 py-3 no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#c9a84c', color: '#0d0c0b' }}
          >
            View All Movies →
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage