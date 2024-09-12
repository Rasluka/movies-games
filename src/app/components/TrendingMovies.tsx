"use client";
import React, { useEffect, useState } from "react";
import { IMovie } from "../types/movie";
import ScrollableMovies from "./ScrollableMovies";

function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const res = await fetch(`/api/trending?timeWindow=${timeWindow}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch, status: ${res.status}`);
        }

        const data = await res.json();
        setTrendingMovies(data);
      } catch (error) {
        setTrendingMovies([]);
      }
    };

    fetchTrendingMovies();
  }, [timeWindow]);

  return (
    <>
      <div className="flex justify-center lg:justify-start my-6">
        <h2 className="text-4xl">Trending</h2>
        <div className="btn-group btn-group-scrollable ms-4">
          <input
            type="radio"
            name="options"
            data-content="Today"
            checked={timeWindow === "day"}
            className={`btn ${
              timeWindow === "day" ? "bg-inherit" : "bg-transparent"
            }`}
            onChange={() => setTimeWindow("day")}
          />
          <input
            type="radio"
            name="options"
            data-content="This Week"
            checked={timeWindow === "week"}
            className={`btn ${
              timeWindow === "week" ? "bg-inherit" : "bg-transparent"
            }`}
            onChange={() => setTimeWindow("week")}
          />
        </div>
      </div>
      {trendingMovies.length > 0 ? (
        <ScrollableMovies movies={trendingMovies} />
      ) : (
        <div className="flex items-center justify-center">
          <div className="spinner-circle [--spinner-color:var(--blue-8)]"></div>
        </div>
      )}
    </>
  );
}

export default TrendingMovies;
