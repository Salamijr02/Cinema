'use client'

import { createContext, useContext, useState } from "react";
import movieCollection from "@/data";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies] = useState(movieCollection);
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleLike = (id) => {
    setLikedMovies((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const toggleWatchLater = (id) => {
    setWatchLater((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const filteredMovies = movies.filter((movie) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      movie.title.toLowerCase().includes(query) ||
      movie.category.toLowerCase().includes(query) ||
      movie.actors.some((actor) => actor.toLowerCase().includes(query));

    const matchesCategory =
      selectedCategory === "All" || movie.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <MovieContext.Provider
      value={{
        movies,
        filteredMovies,
        likedMovies,
        watchLater,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        toggleLike,
        toggleWatchLater,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);