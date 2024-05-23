/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React from "react";
import { useEffect } from "react";
export default function error({ error, reset }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-12">
      <p>something went wrong.please try again later!</p>
      <button
        className="hover:text-amber-500 rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
