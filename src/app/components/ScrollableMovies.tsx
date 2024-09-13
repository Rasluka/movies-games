import React from "react";
import { IMovie } from "../types/movie";
import MovieCard from "./MovieCard";

interface IScrollableMoviesProps {
  movies: IMovie[];
}

function ScrollableMovies({ movies }: IScrollableMoviesProps) {
  return (
    <div className="flex overflow-x-auto scrollbar scroll-smooth p-4">
      {movies &&
        movies.map((aMovie: IMovie) => (
          <MovieCard aMovie={aMovie} key={aMovie.id} />
        ))}
    </div>
  );
}

export default ScrollableMovies;
