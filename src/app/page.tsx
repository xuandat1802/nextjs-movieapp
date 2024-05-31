"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { resultContext } from "./UseContext/context";
import Card from "@/components/Card";
export default function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchtrending";
  const [results, setResult] = useState<any>([]);
  useEffect(() => {
    const fetchGenreMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3${
            genre === "fetchrarting" ? "/movie/top_rated" : "/trending/all/week"
          }?api_key=7a29864549f0bc60b5bad88abb41ea99&language=en-US&page=1`
        );

        setResult(res.data.results);
        console.log("fetch data success");
      } catch (error) {
        console.error("fail to fetch data", error);
      }
    };
    fetchGenreMovie();
  }, [genre]);

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results?.map((result: any) => (
        <resultContext.Provider value={result} key={result.id}>
          <Card />
        </resultContext.Provider>
      ))}
    </div>
  );
}
