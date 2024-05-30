"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
export default function CastPage({ params }: any) {
  const CastId = params.id;
  const [style, setStyle] = useState<any>([]);

  //search cast
  useEffect(() => {
    const fetchListCast = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/person/${CastId}?api_key=7a29864549f0bc60b5bad88abb41ea99`
        );

        setStyle(res.data);
        console.log("fetch data success");
      } catch (error) {
        console.error("fail to fetch data", error);
      }
    };
    fetchListCast();
  }, [CastId]);

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
