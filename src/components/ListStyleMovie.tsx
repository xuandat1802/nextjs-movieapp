import React from "react";
import ListCardMovie from "./ListCardMovie";

export default function ListStyleMovie({ movie, listmovie }: any) {
  return (
    <div className="relative flex items-center">
      {listmovie?.map((list: any) =>
        movie.genres?.map((genreid: any) => genreid.id === list.genre_ids) ? (
          <ListCardMovie key={list.id} list={list} />
        ) : (
          ""
        )
      )}
    </div>
  );
}
