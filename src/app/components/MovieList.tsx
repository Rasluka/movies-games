"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import { IMovie } from "../types/movie";

export default function MovieList() {
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  const onSubmit = (value: string) => {
    console.log(value);
    apiFetch(value);
  };

  const apiFetch = async (searchValue: string) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=`
    );
    const actualData = await data.json();
    console.log(actualData);
    setSearchResult([...actualData.results]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {searchResult.map((aMovie: IMovie) => {
        return <MovieCard aMovie={aMovie} key={aMovie.id} />;
      })}
    </>
  );
}
