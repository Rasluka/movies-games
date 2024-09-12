"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { IMovie } from "../types/movie";
import MovieCard from "../components/MovieCard";

function SearchPage() {
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const searchParams = useSearchParams().toString();
  const apiKey = process.env.MOVIE_DB_API_KEY;

  const apiFetch = useCallback(
    async (searchValue: string) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${apiKey}`
      );
      const actualData = await data.json();
      console.log(actualData);
      setSearchResult([...actualData.results]);
    },
    [apiKey]
  );

  useEffect(() => {
    apiFetch(searchParams);
  }, [searchParams, apiFetch]);

  return (
    <>
      {searchResult.map((aMovie: IMovie) => {
        return <MovieCard aMovie={aMovie} key={aMovie.id} />;
      })}
    </>
  );
}

export default SearchPage;
