'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useMovies } from '@/context/Moviecontext'

const MovieDetail = () => {
    const { id } = useParams()
    const { movies, likedMovies, watchLater, toggleLike, toggleWatchLater } = useMovies()

    const movie = movies.find((m) => m.id === Number(id))

    if (!movie) {
        return (
            <div className="min-h-screen flex items-center justify-center"
                style={{ background: 'var(--black)' }}>
                <div className="text-center">
                    <p className="font-bebas text-4xl tracking-widest text-gold mb-4">Movie Not Found</p>
                    <Link href="/movies"
                        className="font-dm text-xs tracking-[0.15em] uppercase px-6 py-2 no-underline"
                        style={{ border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c' }}>
                        Back to Movies
                    </Link>
                </div>
            </div>
        )
    }

    const { title, epilogue, dateReleased, category, type, actors, trailer, rating, keywords, kind, image } = movie
    const isLiked = likedMovies.includes(movie.id)
    const isWatchLater = watchLater.includes(movie.id)

    return (
        <main className="min-h-screen overflow-hidden" style={{ background: 'var(--black)' }}>

            {/* Hero image */}
            <div className="relative w-full h-[65vh]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    style={{ filter: 'brightness(0.55) saturate(0.8)' }}
                />

                {/* Overlays */}
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, var(--black) 0%, rgba(13,12,11,0.5) 50%, transparent 100%)' }} />
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, rgba(13,12,11,0.7) 0%, transparent 60%)' }} />

                {/* Film grain */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundSize: '180px' }} />

                {/* Back button */}
                <Link
                    href="/movies"
                    className="absolute top-6 left-6 font-dm text-xs tracking-[0.15em] uppercase px-4 py-2 no-underline backdrop-blur-sm transition-all duration-300"
                    style={{ border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c', background: 'rgba(13,12,11,0.5)' }}
                >
                    ← Back
                </Link>

                {/* Title overlay on image */}
                <div className="absolute bottom-0 left-0 px-10 pb-10 max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        {[kind, category, type].map((badge) => (
                            <span key={badge} className="font-dm text-[10px] tracking-[0.12em] uppercase px-3 py-0.5"
                                style={{ border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c', background: 'rgba(201,168,76,0.08)' }}>
                                {badge}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-bebas text-cream anim-fade-up-2"
                        style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '0.92', letterSpacing: '0.02em' }}>
                        {title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12 -mt-4 relative z-10">

                {/* Epilogue */}
                <p className="font-cormo italic mb-8"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'rgba(242,234,216,0.7)', lineHeight: 1.6 }}>
                    "{epilogue}"
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-6 mb-10 pb-10"
                    style={{ borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
                    <div className="flex flex-col gap-1">
                        <span className="font-dm text-[10px] tracking-[0.2em] uppercase"
                            style={{ color: 'rgba(201,168,76,0.55)' }}>Released</span>
                        <span className="font-dm text-sm text-cream">{dateReleased}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-dm text-[10px] tracking-[0.2em] uppercase"
                            style={{ color: 'rgba(201,168,76,0.55)' }}>Rating</span>
                        <span className="font-bebas text-xl text-gold">{rating} / 10</span>
                    </div>
                </div>

                {/* Cast */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-5 h-px bg-gold" />
                        <h3 className="font-bebas tracking-[0.18em] text-sm text-gold">Cast</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {actors.map((actor) => (
                            <span key={actor}
                                className="font-dm text-xs px-3 py-1.5"
                                style={{ border: '1px solid rgba(201,168,76,0.2)', color: 'rgba(242,234,216,0.7)', background: 'rgba(201,168,76,0.05)' }}>
                                {actor}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Keywords */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-5 h-px bg-gold" />
                        <h3 className="font-bebas tracking-[0.18em] text-sm text-gold">Keywords</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map((kw) => (
                            <span key={kw}
                                className="font-dm text-[11px] tracking-wide px-3 py-1"
                                style={{ border: '1px solid rgba(201,168,76,0.15)', color: 'rgba(201,168,76,0.5)' }}>
                                #{kw}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => toggleLike(movie.id)}
                        className="font-dm text-xs tracking-[0.15em] uppercase px-8 py-3 transition-all duration-300"
                        style={isLiked
                            ? { background: 'rgba(201,168,76,0.15)', border: '1px solid #c9a84c', color: '#c9a84c' }
                            : { background: 'transparent', border: '1px solid rgba(242,234,216,0.2)', color: 'rgba(242,234,216,0.6)' }}
                    >
                        {isLiked ? '❤️ Liked' : '🤍 Like'}
                    </button>

                    <button
                        onClick={() => toggleWatchLater(movie.id)}
                        className="font-dm text-xs tracking-[0.15em] uppercase px-8 py-3 transition-all duration-300"
                        style={isWatchLater
                            ? { background: 'rgba(201,168,76,0.15)', border: '1px solid #c9a84c', color: '#c9a84c' }
                            : { background: 'transparent', border: '1px solid rgba(242,234,216,0.2)', color: 'rgba(242,234,216,0.6)' }}
                    >
                        {isWatchLater ? '🔖 Saved' : '➕ Watch Later'}
                    </button>

                    <Link
                        href={trailer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-dm text-xs tracking-[0.15em] uppercase px-8 py-3 no-underline flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: '#c9a84c', color: '#0d0c0b' }}
                    >
                        ▶ Watch Trailer
                    </Link>
                </div>

            </div>
        </main>
    )
}

export default MovieDetail