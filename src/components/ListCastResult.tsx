import React from "react";
import Image from "next/image";
import ListCast from "./ListCast";
export default function ListCastResult({ styles, movie }: any) {
  return (
    <div className="flex gap-x-2">
      {styles?.map((style: any) =>
        style.original_language === movie.original_language ? (
          <ListCast key={style.id} style={style} />
        ) : (
          ""
        )
      )}
    </div>
  );
}
