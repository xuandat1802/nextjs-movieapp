import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { listCastContext } from "./ListCastResult";
export default function ListCast() {
  const style = useContext(listCastContext);
  return (
    <div>
      <Link href={`/cast/${style.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${style.profile_path}`}
          className="rounded-full w-14 h-12 text-xs hover:scale-150"
          width={500}
          height={300}
          alt={style.name}
        ></Image>
      </Link>
    </div>
  );
}
