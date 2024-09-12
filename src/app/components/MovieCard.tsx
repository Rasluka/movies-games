import React from "react";
import Image from "next/image";
import moment from "moment";
import { IMovie } from "../types/movie";

type MovieCardProps = {
  aMovie: IMovie;
};

function MovieCard({ aMovie }: MovieCardProps) {
  const avgVote = Math.round(aMovie.vote_average * 10);

  return (
    <div className="mx-1 mt-3 hover:opacity-90">
      <div className="relative ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${aMovie.poster_path}`}
          width="160"
          height="240"
          alt="movie-poster"
          className="rounded-lg"
        />

        <div
          className={`w-12 h-12 flex items-center justify-center border-2 rounded-full bg-opacity-50 text-black font-bold absolute bottom-1 left-1 ${
            avgVote >= 70
              ? "bg-green-400"
              : avgVote >= 40
              ? "bg-yellow-400"
              : "bg-red-400"
          }`}
        >
          {avgVote ? avgVote : "NR"}
        </div>
      </div>

      <progress
        className={`progress ${
          avgVote >= 70
            ? "progress-flat-success"
            : avgVote >= 40
            ? "progress-flat-warning"
            : "progress-flat-error"
        }`}
        value={avgVote}
        max="100"
      ></progress>

      <h2 className="card-header">{aMovie.original_title}</h2>

      <p className="text-content2">
        {moment(aMovie.release_date).format("MMM D, YYYY")}
      </p>
    </div>
  );
}

export default MovieCard;
