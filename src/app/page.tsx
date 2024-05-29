"use client";
import React from "react";
import axios from "axios";
import Results from "@/components/Results";
import { useState, useEffect } from "react";
export default function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchtrending";
  const [results, setResult] = useState();
  useEffect(() => {
    const getDetailMovie = async () => {
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
    getDetailMovie();
  }, [genre]);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
