import React from "react";
import Image from "next/image";
export default function ListCast({ style }: any) {
  return (
    <div className="flex gap-x-1 max-w-4xl">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          style.poster_path || style.backdrop_path
        }`}
        className="rounded-full w-14 h-12"
        width={500}
        height={300}
        alt="list cast"
      ></Image>
    </div>
  );
}
