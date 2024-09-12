"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { IMovie } from "../types/movie";

function MoviesPage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const data = await response.json();
      setTrendingMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="relative p-4 w-3/6 mx-auto">
        <div className="absolute inset-0 bg-[url('/images/movie.jpg')] bg-cover"></div>

        <div className="absolute inset-0 bg-blue-950 opacity-70"></div>

        <div className="relative z-10 p-10">
          <h1 className="text-6xl mt-5">Welcome.</h1>
          <h1 className="text-4xl mx-auto">
            Millions of movies, TV shows and people to discover. Explore now.
          </h1>
        </div>
      </div>

      <h2 className="text-4xl text-center w-3/6 mx-auto mt-5">Trending Now</h2>

      <div className="flex overflow-x-auto scrollbar w-3/6 mx-auto p-4">
        {trendingMovies.map((aMovie: IMovie) => (
          <MovieCard aMovie={aMovie} key={aMovie.id} />
        ))}
      </div>
    </>
  );
}

export default MoviesPage;
