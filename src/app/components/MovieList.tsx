"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  original_title: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
};

export default function MovieList() {
  const [searchResult, setSearchResult] = useState<Movie[]>([]);

  const onSubmit = (value: string) => {
    console.log(value);
    apiFetch(value);
  };

  const apiFetch = async (searchValue: string) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=a258ba07c5eac02902bf0152801d54b4`
    );
    const actualData = await data.json();
    console.log(actualData);
    setSearchResult([...actualData.results]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {searchResult.map((aMovie: Movie) => {
        return <MovieCard aMovie={aMovie} key={aMovie.id} />;
      })}
    </>
  );
}
