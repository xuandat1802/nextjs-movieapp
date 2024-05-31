import React, { createContext, useContext } from "react";
import ListCardMovie from "./ListCardMovie";
import { detailMovieContext } from "@/app/UseContext/context";
export const listStyleMovieContext = createContext<any>([]);
export default function ListStyleMovie() {
  const listData = useContext(detailMovieContext);
  return (
    <div className="relative flex items-center">
      {listData.listMovie?.map((list: any) =>
        listData.movie.genres?.map(
          (genreid: any) => genreid.id === list.genre_ids
        ) ? (
          <listStyleMovieContext.Provider value={list} key={list.id}>
            <ListCardMovie />
          </listStyleMovieContext.Provider>
        ) : (
          ""
        )
      )}
    </div>
  );
}
