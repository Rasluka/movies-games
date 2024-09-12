import SearchBar from "./components/SearchBar";
import TrendingMovies from "./components/TrendingMovies";
TrendingMovies;

export default async function Home() {
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

      <TrendingMovies />
    </>
  );
}
