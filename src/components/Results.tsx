"use client";
import React, { createContext, useContext, useState } from "react";
import Card from "./Card";
import { resultContext } from "@/app/UseContext/context";
export const resultCardContext = createContext<any>([]);
export default function Results() {
  const results = useContext(resultContext);

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results?.map((result: any) => (
        <resultCardContext.Provider value={result} key={result.id}>
          <Card />
        </resultCardContext.Provider>
      ))}
    </div>
  );
}
