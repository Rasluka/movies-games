import MovieList from "./components/MovieList";

export default async function Home() {
  return (
    <>
      <h1 className="text-6xl text-center w-3/6 mx-auto mt-5">
        Welcome. Millions of movies, TV shows and people to discover. Explore
        now.
      </h1>

      <MovieList />
    </>
  );
}
