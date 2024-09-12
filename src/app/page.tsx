import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { IMovie } from "./types/movie";

export default async function Home() {
  const apiKey = process.env.MOVIE_DB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;
  const data = await fetch(url);
  const trendingMovies = await data.json();

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

          <SearchBar />
        </div>
      </div>

      <h2 className="text-4xl text-center w-3/6 mx-auto mt-5">Trending Now</h2>

      <div className="flex overflow-x-auto scrollbar w-3/6 mx-auto p-4">
        {trendingMovies.results.map((aMovie: IMovie) => (
          <MovieCard aMovie={aMovie} key={aMovie.id} />
        ))}
      </div>
    </>
  );
}
