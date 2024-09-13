"use client";
import React, { useEffect, useState } from "react";
import { IMovie } from "../types/movie";
import ScrollableMovies from "./ScrollableMovies";

function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/trending?timeWindow=${timeWindow}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch, status: ${res.status}`);
        }

        const data = await res.json();
        setTrendingMovies(data);
        setIsLoading(false);
      } catch (error) {
        setTrendingMovies([]);
      }
    };

    fetchTrendingMovies();
  }, [timeWindow]);

  const handleInputRadio = (event: React.MouseEvent<HTMLButtonElement>) => {
    const inputValue = event.currentTarget.name;

    console.log(inputValue);

    if (
      (inputValue === "day" || inputValue === "week") &&
      inputValue !== timeWindow
    ) {
      setTimeWindow(inputValue);
      setIsLoading(true);
    }
  };

  return (
    <div>
      <div className="relative p-5 mt-2 rounded">
        <div className="absolute inset-0 bg-[url('/images/movie.jpg')] bg-cover rounded"></div>
        <div className="absolute inset-0 bg-blue-950 opacity-90 rounded"></div>

        <div className="relative z-10 ">
          <div className="flex justify-center lg:justify-between">
            <h2 className="text-4xl text-white">Trending</h2>
            <div className="btn-group btn-group-rounded btn-group-scrollable ms-4"></div>

            <div className="btn-group btn-group-rounded btn-group-scrollable">
              <button
                name="day"
                onClick={handleInputRadio}
                className={`btn btn-primary ${
                  timeWindow === "day" ? "btn-active" : ""
                }`}
              >
                Today
              </button>
              <button
                name="week"
                onClick={handleInputRadio}
                className={`btn btn-primary ${
                  timeWindow === "week" ? "btn-active" : ""
                }`}
              >
                This Week
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className={`${isLoading && "opacity-90"}`}>
          <ScrollableMovies movies={trendingMovies} />
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="spinner-wave">
              <div className="spinner-wave-dot"></div>
              <div className="spinner-wave-dot"></div>
              <div className="spinner-wave-dot"></div>
              <div className="spinner-wave-dot"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrendingMovies;
