import { NextResponse } from "next/server";
import { IMovie } from "@/app/types/movie";

type TrendingMoviesResponse = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

// Endpoint GET para obtener las películas en tendencia
export async function GET() {
  const apiKey = process.env.MOVIE_DB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;

  // Realizar la petición a la API externa
  const response = await fetch(url);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }

  const trendingMovies: TrendingMoviesResponse = await response.json();
  return NextResponse.json(trendingMovies.results);
}
