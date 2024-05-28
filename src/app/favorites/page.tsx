"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("results") || "[]");
    setFavorites(savedResults);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Favorite Movies</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12 ml-[90%] hover:text-red-500"
        onClick={() => {
          localStorage.clear();
          setFavorites(JSON.parse(localStorage.getItem("results") || "[]"));
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites?.map((result: any) => (
          <div
            key={result.id}
            className="group p-1 cursor-pointer sm:hover:shadow-slate-500 sm:shadow-md sm:border sm:border-slate-500 rounded-lg sm:m-2 transition-shadow duration-200"
          >
            <Link href={`/movie/${result.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${
                  result.poster_path || result.backdrop_path
                }`}
                alt="img"
                width={500}
                height={300}
                className="sm:rounded-t-lg group-hover:opacity-70 w-66 h-40"
              />
              <div className="line-clamp-2 text-md">{result.overview}</div>
              <div className="font-bold truncate text-lg">
                {result.original_title || result.name}
              </div>
              <div className="flex items-center gap-x-1">
                <p>{result.release_date || result.first_air_date}</p>
                <FiThumbsUp /> {result.vote_count}
              </div>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 ml-[45%] hover:text-red-500"
              onClick={() => {
                const savedResults = JSON.parse(
                  localStorage.getItem("results") || "[]"
                );
                if (
                  savedResults.some(
                    (savedResult: any) => savedResult.id === result.id
                  )
                ) {
                  // Remove the result from savedResults
                  const newSavedResults = savedResults.filter(
                    (savedResult: any) => savedResult.id !== result.id
                  );
                  setFavorites(newSavedResults);
                  localStorage.setItem(
                    "results",
                    JSON.stringify(newSavedResults)
                  );
                }
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
