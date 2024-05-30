"use client";
import Results from "@/components/Results";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { resultContext } from "@/app/UseContext/context";
export default function Searchpage({ params }: any) {
  const SearchTerm = params.searchterm;
  const [results, setResults] = useState<any>();
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=7a29864549f0bc60b5bad88abb41ea99&query=${SearchTerm}&language=en-US&page=1&include_adult=false`
        );
        setResults(res.data.results);
        console.log("success");
      } catch (err) {
        console.error("fail to fetch search", err);
      }
    };
    fetchSearch();
  }, [SearchTerm]);

  return (
    <resultContext.Provider value={results}>
      <div>
        {results && results.length === 0 && (
          <h1 className="text-center pt-14">No found result</h1>
        )}

        {results && <Results />}
      </div>
    </resultContext.Provider>
  );
}
