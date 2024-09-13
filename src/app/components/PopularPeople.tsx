"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IPerson } from "../types/people";

function PopularPeople() {
  const [trendingPeople, setTrendingPeople] = useState<IPerson[]>([]);
  const [bgImage, setBgImage] = useState<string>("/images/movie.jpg");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/people?timeWindow=${"week"}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch, status: ${res.status}`);
        }

        const data: IPerson[] = await res.json();

        setTrendingPeople(data);
        setBgImage(data[0].known_for[0].backdrop_path);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {!isLoading && trendingPeople.length > 0 && (
        <>
          <div className="relative p-5 mt-2 rounded">
            <div className="absolute inset-0 bg-[url('/images/movie.jpg')] bg-cover rounded"></div>
            <div className="absolute inset-0 bg-blue-950 opacity-90 rounded"></div>
            <div className="relative z-10">
              <h2 className="text-4xl text-white">Popular People</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto scrollbar scroll-smooth p-4">
            {trendingPeople.map((aPerson: IPerson) => {
              const handleMouseEnter = () => {
                if (
                  aPerson.known_for[0].backdrop_path &&
                  bgImage !== aPerson.known_for[0].backdrop_path
                ) {
                  setBgImage(aPerson.known_for[0].backdrop_path);
                }

                console.log(aPerson.known_for[0].backdrop_path);
              };

              return (
                <div
                  className="mx-3 mt-5 shrink-0 shadow-2xl hover:shadow-cyan-500/50"
                  key={aPerson.id}
                >
                  <Image
                    src={`https://media.themoviedb.org/t/p/w235_and_h235_face/${aPerson.profile_path}`}
                    width="160"
                    height="240"
                    alt="movie-poster"
                    className="rounded-lg hover:scale-105 ease-in duration-500"
                    onMouseEnter={handleMouseEnter}
                  />

                  <h1 className="text-center">{aPerson.original_name}</h1>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default PopularPeople;
