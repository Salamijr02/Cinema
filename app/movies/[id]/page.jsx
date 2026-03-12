'use client'

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useMovies } from "@/context/Moviecontext";

const MovieDetail = () => {
  const { id } = useParams();
  const { movies, likedMovies, watchLater, toggleLike, toggleWatchLater } = useMovies();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Movie not found.</p>
      </div>
    );
  }

  const {
    title,
    epilogue,
    dateReleased,
    category,
    type,
    actors,
    trailer,
    rating,
    keywords,
    kind,
    image,
  } = movie;

  const isLiked = likedMovies.includes(movie.id);
  const isWatchLater = watchLater.includes(movie.id);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* Hero Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

        {/* Back Button */}
        <Link
          href="/movies"
          className="absolute top-6 left-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full transition"
        >
          ← Back
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10 pb-20">

        {/* Title + Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{kind}</span>
          <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{category}</span>
          <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{type}</span>
        </div>

        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-neutral-400 text-lg mb-6">{epilogue}</p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-sm text-neutral-400 mb-8">
          <span>📅 {dateReleased}</span>
          <span>⭐ {rating} / 10</span>
        </div>

        {/* Actors */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-2">Cast</h3>
          <div className="flex flex-wrap gap-2">
            {actors.map((actor) => (
              <span
                key={actor}
                className="bg-neutral-800 text-white text-sm px-3 py-1 rounded-full"
              >
                {actor}
              </span>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-2">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="border border-neutral-700 text-neutral-400 text-xs px-3 py-1 rounded-full"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button
            onClick={() => toggleLike(movie.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            {isLiked ? "❤️ Liked" : "🤍 Like"}
          </button>

          <button
            onClick={() => toggleWatchLater(movie.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              isWatchLater
                ? "bg-yellow-500 text-black"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            {isWatchLater ? "🔖 Saved" : "➕ Watch Later"}
          </button>

          <Link
            href={trailer}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
          >
            ▶ Watch Trailer
          </Link>
        </div>

      </div>
    </main>
  );
};

export default MovieDetail;