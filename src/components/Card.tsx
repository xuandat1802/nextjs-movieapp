"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { useState, useEffect } from "react";
export default function Card({ result }: any) {
  const [saved, setSaved] = useState<boolean>(false);
  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("results") || "[]");
    if (savedResults.some((savedResult: any) => savedResult.id === result.id)) {
      setSaved(true);
    }
  }, [result.id]);
  const handlesave = () => {
    const savedResults = JSON.parse(localStorage.getItem("results") || "[]");
    if (savedResults.some((savedResult: any) => savedResult.id === result.id)) {
      // Remove the result from savedResults
      const newSavedResults = savedResults.filter(
        (savedResult: any) => savedResult.id !== result.id
      );
      localStorage.setItem("results", JSON.stringify(newSavedResults));
      setSaved(false); // Set the state to unsaved
    } else {
      // Add the result to savedResults
      savedResults.push(result);
      localStorage.setItem("results", JSON.stringify(savedResults));
      setSaved(true); // Set the state to saved
    }
  };

  return (
    <div className="group p-1 cursor-pointer sm:hover:shadow-slate-500 sm:shadow-md sm:border sm:border-slate-500 rounded-lg sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.poster_path || result.backdrop_path
          }`}
          alt="img"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-70  w-66 h-40 "
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
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-6 ${saved ? "text-red-600" : "text-gray-600"}`}
        onClick={handlesave}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </div>
  );
}
