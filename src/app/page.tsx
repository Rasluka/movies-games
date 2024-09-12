import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import { IMovie } from "./types/movie";

export default async function Home() {
  const apiKey = process.env.MOVIE_DB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;

  let trendingMovies: IMovie[] | null = null;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }

    const data = await res.json();
    trendingMovies = data.results;
  } catch (error) {
    trendingMovies = [];
  }

  return (
    <>
      <div className="relative p-4">
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

      <div className="flex my-6">
        <h2 className="text-4xl">Trending</h2>
        <div className="btn-group btn-group-scrollable">
          <input
            type="radio"
            name="options"
            data-content="Today"
            className="btn"
          />
          <input
            type="radio"
            name="options"
            data-content="This Week"
            className="btn"
          />
        </div>
      </div>

      <div className="flex overflow-x-auto scrollbar p-4">
        {trendingMovies &&
          trendingMovies.map((aMovie: IMovie) => (
            <MovieCard aMovie={aMovie} key={aMovie.id} />
          ))}
      </div>
    </>
  );
}
