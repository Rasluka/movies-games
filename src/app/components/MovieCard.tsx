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
    <div className="mx-2 shrink-0 ">
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${aMovie.poster_path}`}
          width="160"
          height="240"
          alt="movie-poster"
          className="rounded-lg shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 ease-in duration-500"
        />

        <div className="absolute -bottom-5 left-1">
          <div className="relative flex h-10 w-10 items-center justify-center bg-transparent">
            <div className="absolute h-[85%] w-[85%] bg-black rounded-full"></div>
            <span className="absolute text-xs font-bold text-white">
              {avgVote}%
            </span>

            <svg
              className="absolute left-0 top-0 h-full w-full transform"
              viewBox="0 0 36 36"
            >
              <path
                className="bg-black"
                stroke="text-black"
                stroke-width="2"
                fill="none"
                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
              />
              <path
                className={`${
                  avgVote >= 70
                    ? "text-green-400"
                    : avgVote >= 40
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-dasharray="100, 100"
                stroke-dashoffset={100 - avgVote}
                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
              />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-5">{aMovie.original_title}</h2>

      <p className="text-center opacity-40">
        {moment(aMovie.release_date).format("MMM D, YYYY")}
      </p>
    </div>
  );
}

export default MovieCard;
