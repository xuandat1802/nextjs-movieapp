"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
export default function CastPage({ params }: any) {
  const Castid = params.id;
  const [style, setstyle] = useState<any>([]);

  //search cast
  useEffect(() => {
    const callapi1 = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/person/${Castid}?api_key=7a29864549f0bc60b5bad88abb41ea99`
        );

        setstyle(res.data);
        console.log("fetch data success");
        console.log(res.data);
      } catch (error) {
        console.error("fail to fetch data", error);
      }
    };
    callapi1();
  }, [Castid]);

  return (
    <div className="w-full">
      <div className="flex gap-5 md:pt-8 flex-col md:flex-row max-w-6xl p4 content-center mx-auto sm:m-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${style.profile_path}`}
          alt={style.name}
          width={500}
          height={300}
          className="w-76 h-96 rounded-lg"
        ></Image>

        <div className="gap-y-2">
          <p>
            <b>Name: </b>
            {style.name}
          </p>
          <p>
            <b>Birthday:</b> {style.birthday}
          </p>
          <p>{style.biography}</p>
          <p>
            <b>Genre:</b> {style.known_for_department}
          </p>
          <p className="font-semibold">Popularity:{style.popularity}</p>
        </div>
      </div>
    </div>
  );
}
