import React from "react";
import Image from "next/image";
import ListCast from "./ListCast";
export default function ListCastResult({ styles }: any) {
  return (
    <div className="relative flex items-center ">
      {styles?.map((style: any) => (
        <ListCast key={style.id} style={style} />
      ))}
    </div>
  );
}
