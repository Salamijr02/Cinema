'use client'

import React from 'react'
import Moviecard from './Moviecard'
import { useMovies } from '@/context/Moviecontext'

const Movielist = () => {
  const { filteredMovies, selectedCategory, setSelectedCategory, movies } = useMovies()

  const categories = ['All', ...new Set(movies.map((m) => m.category))]

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
         <h2 className="font-bebas text-xl tracking-[0.2em] text-gold">All Movies</h2>
        <span className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.12)' }} />
        <span className="font-dm text-xs" style={{ color: 'rgba(242,234,216,0.35)' }}>
          {filteredMovies.length} titles
        </span>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="font-dm text-[11px] tracking-[0.1em] uppercase px-4 py-1.5 transition-all duration-300"
            style={selectedCategory === cat
              ? { background: '#c9a84c', color: '#0d0c0b' }
              : { background: 'transparent', border: '1px solid rgba(201,168,76,0.25)', color: 'rgba(242,234,216,0.5)' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredMovies.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-60 gap-2"
          style={{ color: 'rgba(242,234,216,0.3)' }}>
          <p className="font-bebas text-2xl tracking-widest">No titles found</p>
          <p className="font-dm text-xs">Try a different search or category</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Movielist