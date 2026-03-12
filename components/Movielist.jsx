import MovieCard from "./MovieCard"
import movies from "../data/movies"

export default function MovieList() {
  return (
    <section className="movie-list">
      <h2>Popular Movies</h2>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}