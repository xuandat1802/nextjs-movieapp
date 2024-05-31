import React, { createContext, useContext } from "react";
import Image from "next/image";
import ListCast from "./ListCast";
import { detailMovieContext } from "@/app/UseContext/context";
export const listCastContext = createContext<any>([]);
export default function ListCastResult() {
  const styles = useContext(detailMovieContext);
  return (
    <div className="relative flex items-center ">
      {styles.style?.map((style: any) => (
        <listCastContext.Provider value={style} key={style.id}>
          <ListCast />
        </listCastContext.Provider>
      ))}
    </div>
  );
}
