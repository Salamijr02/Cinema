'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMovies } from '@/context/Moviecontext'

const Moviecard = ({ movie }) => {
  const { title, dateReleased, category, image, id, rating, kind } = movie
  const { likedMovies, watchLater, toggleLike, toggleWatchLater } = useMovies()

  const isLiked = likedMovies.includes(id)
  const isWatchLater = watchLater.includes(id)

  return (
    <Link href={`/movies/${id}`} className="group block w-full no-underline">
      <div className="relative w-full aspect-[2/3] overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'var(--surface)' }}>

        {/* Poster */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          style={{ filter: 'brightness(0.8)' }}
        />

        {/* Gradient */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,12,11,0.97) 0%, rgba(13,12,11,0.4) 50%, transparent 100%)' }} />

        {/* Kind badge — top left */}
        <div className="absolute top-3 left-3">
          <span className="font-dm text-[9px] tracking-[0.12em] uppercase px-2 py-0.5"
            style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c' }}>
            {kind}
          </span>
        </div>

        {/* Rating — top right */}
        <div className="absolute top-3 right-3">
          <span className="font-bebas text-[11px] tracking-[0.08em] px-2 py-0.5"
            style={{ background: '#c9a84c', color: '#0d0c0b' }}>
            ⭐ {rating}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 w-full p-3">
          <h2 className="font-dm text-xs font-semibold leading-tight line-clamp-2 mb-1 text-cream">
            {title}
          </h2>
          <div className="flex justify-between items-center mb-3"
            style={{ fontSize: '10px', color: 'rgba(242,234,216,0.45)' }}>
            <span className="font-dm">{dateReleased.slice(0, 4)}</span>
            <span className="font-cormo italic" style={{ color: 'rgba(201,168,76,0.6)' }}>{category}</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-1.5">
            <button
              onClick={(e) => { e.preventDefault(); toggleLike(id) }}
              className="flex-1 font-dm text-[10px] tracking-wide py-1.5 transition-all duration-300"
              style={isLiked
                ? { background: 'rgba(201,168,76,0.2)', border: '1px solid #c9a84c', color: '#c9a84c' }
                : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,234,216,0.6)' }}
            >
              {isLiked ? '❤️ Liked' : '🤍 Like'}
            </button>

            <button
              onClick={(e) => { e.preventDefault(); toggleWatchLater(id) }}
              className="flex-1 font-dm text-[10px] tracking-wide py-1.5 transition-all duration-300"
              style={isWatchLater
                ? { background: 'rgba(201,168,76,0.2)', border: '1px solid #c9a84c', color: '#c9a84c' }
                : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(242,234,216,0.6)' }}
            >
              {isWatchLater ? '🔖 Saved' : '➕ Later'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Moviecard