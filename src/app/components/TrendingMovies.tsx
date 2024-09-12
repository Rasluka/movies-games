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

  const handleInputRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.dataset.content;

    if (inputValue === "day" || inputValue === "week") {
      setTimeWindow(inputValue);
      setIsLoading(true);
    }
  };

  return (
    <>
      <div className="flex justify-center lg:justify-start my-6">
        <h2 className="text-4xl">Trending</h2>
        <div className="btn-group btn-group-rounded btn-group-scrollable ms-4">
          <label
            className={`btn ${
              timeWindow === "day"
                ? "bg-blue-400 hover:bg-blue-500"
                : "bg-transparent"
            }`}
          >
            <input
              type="radio"
              name="options"
              data-content="day"
              checked={timeWindow === "day"}
              className="appearance-none"
              onChange={handleInputRadio}
            />
            Day
          </label>
          <label
            className={`btn ${
              timeWindow === "week" ? "bg-blue-400" : "bg-transparent"
            }`}
          >
            <input
              type="radio"
              name="options"
              data-content="week"
              checked={timeWindow === "week"}
              className="appearance-none"
              onChange={handleInputRadio}
            />
            Week
          </label>
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
    </>
  );
}

export default TrendingMovies;
