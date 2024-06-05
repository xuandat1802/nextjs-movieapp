import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { detailMovieContext } from "@/app/UseContext/context";
export default function ListCast() {
  const style = useContext(detailMovieContext);
  return (
    <div className="relative flex items-center">
      {style.style?.map((styles: any) => (
        <Link href={`/cast/${styles.id}`} key={styles.id}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${styles.profile_path}`}
            className="rounded-full w-14 h-12 text-xs hover:scale-150"
            width={500}
            height={300}
            alt={styles.name}
          ></Image>
        </Link>
      ))}
    </div>
  );
}
