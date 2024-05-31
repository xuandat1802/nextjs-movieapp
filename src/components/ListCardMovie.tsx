import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { detailMovieContext } from "@/app/UseContext/context";
export default function ListCardMovie() {
  const list = useContext(detailMovieContext);

  return (
    <div className="relative flex items-center">
      {list.listMovie?.map((lists: any) =>
        list.movie.genres?.map(
          (genreid: any) => genreid.id === list.genre_ids
        ) ? (
          <Link key={lists.id} href={`/movie/${lists.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                lists.poster_path || lists.backdrop_path
              }`}
              alt={lists.title}
              width={500}
              height={300}
              className="rounded-full w-14 h-12 text-xs hover:scale-150 "
            />
          </Link>
        ) : (
          ""
        )
      )}
    </div>
  );
}
