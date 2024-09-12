import { NextResponse } from "next/server";
import { IMovie } from "@/app/types/movie";

type TrendingMoviesResponse = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

// Endpoint GET para obtener las películas en tendencia
export async function GET(request: Request) {
  const apiKey = process.env.MOVIE_DB_API_KEY;
  const url = new URL(request.url);
  const timeWindow = url.searchParams.get("timeWindow") || "day";
  const apiUrl = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?language=en-US&api_key=${apiKey}`;

  // Realizar la petición a la API externa
  const response = await fetch(apiUrl);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }

  const trendingMovies: TrendingMoviesResponse = await response.json();
  return NextResponse.json(trendingMovies.results);
}
