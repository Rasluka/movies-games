import React from "react";
import Image from "next/image";

type Movie = {
  id: number;
  original_title: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
};

type MovieCardProps = {
  aMovie: Movie;
};

function MovieCard({ aMovie }: MovieCardProps) {
  return (
    <div className="card card-image-cover w-full">
      <Image
        src={`https://image.tmdb.org/t/p/original/${aMovie.backdrop_path}`}
        alt="ss"
        width="200"
        height="400"
      />
      <div className="card-body">
        <h2 className="card-header">Maximizing Your Productivity at Work</h2>
        <p className="text-content2">
          Are you looking to increase your productivity at work?
        </p>
        <div className="card-footer">
          <button className="btn-secondary btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
