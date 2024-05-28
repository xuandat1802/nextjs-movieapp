"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import axios from "axios";
import ListCastResult from "@/components/ListCastResult";
import ListStyleMovie from "@/components/ListStyleMovie";
export default function Moviepage({ params }: any) {
  const movieid = params.id;
  const [movie, setMovie] = useState<any>([]);
  const [style, setStyle] = useState<any>();
  const [listmovie, setlist] = useState<any>([]);
  //detail movie
  useEffect(() => {
    const FetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieid}?api_key=7a29864549f0bc60b5bad88abb41ea99` //fix
        );
        console.log(res.data);
        setMovie(res.data);
        console.log("fecth movieid success");
      } catch (err) {
        console.error("fail to loading data", err);
      }
    };
    FetchMovie();
  }, [movieid]);
  //search cast
  useEffect(() => {
    const callapi1 = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=7a29864549f0bc60b5bad88abb41ea99` //fix
        );

        setStyle(res.data.cast.slice(0, 10));
        console.log("fetch data success");
        // console.log(res.data.cast.slice(0, 10));
      } catch (error) {
        console.error("fail to fetch data", error);
      }
    };
    callapi1();
  }, [movieid]);
  //call list movie
  useEffect(() => {
    const callapi1 = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=7a29864549f0bc60b5bad88abb41ea99`
        );

        setlist(res.data.results);
        console.log(res.data.results);
        console.log("fetch data success");
        // console.log(res.data.cast.slice(0, 10));
      } catch (error) {
        console.error("fail to fetch data", error);
      }
    };
    callapi1();
  }, []);
  return (
    <div className="w-full">
      <div className="flex gap-5 md:pt-8 flex-col md:flex-row max-w-6xl p4 content-center mx-auto sm:m-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          alt="img"
          width={500}
          height={300}
          className="w-76 h-96 rounded-lg"
        ></Image>

        <div className="gap-y-2">
          <p className="font-bold">{movie.name || movie.original_title}</p>
          <p>{movie.overview}</p>
          <p className="font-semibold">{movie.release_date}</p>

          <div className="flex gap-x-2 items-center">
            <FiThumbsUp />
            <p>{movie.vote_count}</p>
          </div>
          <p className="font-bold">List Casts</p>
          <ListCastResult styles={style} />
          <p className="font-bold">List Movies</p>
          <ListStyleMovie movie={movie} listmovie={listmovie} />
        </div>
      </div>
    </div>
  );
}
