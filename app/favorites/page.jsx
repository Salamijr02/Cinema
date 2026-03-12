'use client'

import React from 'react'
import Moviecard from '@/components/Moviecard'
import { useMovies } from '@/context/Moviecontext'
import Link from 'next/link'

const FavoritesPage = () => {
  const { movies, likedMovies } = useMovies()
  const favoriteMovies = movies.filter((m) => likedMovies.includes(m.id))

  return (
    <main className="min-h-screen px-6 py-12" style={{ background: 'var(--black)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
             <h1 className="font-bebas text-2xl tracking-[0.2em] text-gold">My Favorites</h1>
          <span className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.12)' }} />
          <span className="font-dm text-xs" style={{ color: 'rgba(242,234,216,0.35)' }}>
            {favoriteMovies.length} liked
          </span>
        </div>

        {favoriteMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-60 gap-4"
            style={{ color: 'rgba(242,234,216,0.3)' }}>
            <p className="font-bebas text-3xl tracking-widest">No favorites yet</p>
            <p className="font-dm text-xs">Hit 🤍 on any movie to add it here</p>
            <Link href="/movies"
              className="font-dm text-xs tracking-[0.15em] uppercase px-6 py-2 mt-2 no-underline transition-all duration-300"
              style={{ border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c' }}>
              Browse Movies
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {favoriteMovies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default FavoritesPage