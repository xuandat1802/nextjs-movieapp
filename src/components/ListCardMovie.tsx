import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ListCardMovie({ list }: any) {
  return (
    <div>
      <Link href={`/movie/${list.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            list.poster_path || list.backdrop_path
          }`}
          alt={list.title}
          width={500}
          height={300}
          className="rounded-full w-14 h-12 text-xs hover:scale-150 "
        />
      </Link>
    </div>
  );
}
